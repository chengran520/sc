package com.gxhy.datamonitor.controller;

import java.io.File;
import java.io.IOException;
import java.util.ArrayList;
import java.util.Date;
import java.util.HashMap;
import java.util.Iterator;
import java.util.List;
import java.util.Map;
import java.util.UUID;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.apache.commons.lang3.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.multipart.MultipartHttpServletRequest;
import org.springframework.web.multipart.commons.CommonsMultipartResolver;

import com.alibaba.fastjson.JSONObject;
import com.github.pagehelper.Page;
import com.gxhy.adcd.domain.AdcdModel;
import com.gxhy.adcd.persistence.AdcdMapper;
import com.gxhy.adcd.service.AdcdService;
import com.gxhy.base.controller.BaseController;
import com.gxhy.base.domain.SysUsers;
import com.gxhy.base.exp.JxlsUtils;
import com.gxhy.base.model.Log;
import com.gxhy.base.model.RequestModel;
import com.gxhy.base.model.ResponseModel;
import com.gxhy.base.security.util.SecurityUtil;
import com.gxhy.base.util.AdcdUtil;
import com.gxhy.base.util.CustomPropertyConfigurer;
import com.gxhy.base.util.EhCacheUtils;
import com.gxhy.base.util.OfficeImgToPdf;
import com.gxhy.base.util.SysCacheType;
import com.gxhy.datamonitor.persistence.DataCenterMonitorMapper;
import com.gxhy.datamonitor.service.DataCenterMonitorService;
import com.gxhy.datamonitor.webmodel.AdcdTreeModel;
import com.gxhy.datamonitor.webmodel.RiverDataModel;
import com.gxhy.datamonitor.webmodel.RiverModel;
import com.gxhy.iot.river.StRiverB;


/**
 * 数据管理
 * 
 * @author yb
 * @2017年8月15日下午1:50:19
 * @CopyRight gxhy
 */
@SuppressWarnings({ "unchecked","rawtypes","unused"})
@RestController
@RequestMapping("data/center/monitor")
public class DataCenterMonitorController extends BaseController {

	@Autowired
	private DataCenterMonitorService dataCenterService;

	@Autowired
	private AdcdService adcdService;
	
	/**
	 * 获取所有河流
	 * @param request
	 * @return
	 * @throws Exception
	 */
	@RequestMapping(value = "/getAllLakes", method = RequestMethod.GET)
	public Object getAllLakes(HttpServletRequest request,StRiverB model) throws Exception {
		JSONObject map = new JSONObject();
		map = InitParams(model);
		RequestInitRanges(map,true,StRiverB.class);
		map.put("key", model.getRvNm());
		map.put(RequestModel.SQLID, DataCenterMonitorMapper.class.getName() + ".getAllLakes");
		Page page = dataCenterService.selectList(map);
		return ResponseModel.Success(page);
	}  
	
	

	/**
	 * 导出所有河流
	 * @param request
	 * @throws Exception
	 */
	@RequestMapping(value = "/exportRivers", method = RequestMethod.GET)
	public void exportRivers(HttpServletRequest request,StRiverB model,HttpServletResponse response) throws Exception {
		Map<String, List<StRiverB>> maps = new HashMap<String, List<StRiverB>>();
		JSONObject map = new JSONObject();
		map.put("key", model.getRvNm());
		map.put(RequestModel.SQLID, DataCenterMonitorMapper.class.getName() + ".getAllLakes");
		List<StRiverB>  list= dataCenterService.selectLists(map);
		maps.put("list",list);
 		String title="河流信息表";
 		String xmlName="rvInfo";
 		JxlsUtils.export(maps, title, xmlName,request, response);
	}  
    /**
     *查询没有应急预案的河流
     */
	@RequestMapping(value = "/getRivers", method = RequestMethod.GET)
	public Object getAllLakeByPrew(HttpServletRequest request) throws Exception {
		JSONObject map = new JSONObject();
		map.put(RequestModel.SQLID, DataCenterMonitorMapper.class.getName() + ".getRivers");
		List<StRiverB>  list= dataCenterService.selectList(map);
		return ResponseModel.Success(list);
	}  
	
	/***
	 * 查询有应急预案的河流
	 */
	@RequestMapping(value = "/selectLakes", method = RequestMethod.GET)
	public Object selectLakes(HttpServletRequest request,String addvcd,String keyword) throws Exception {
		JSONObject map = new JSONObject();
		map.put("keyword", keyword);
		String advd= AdcdUtil.getPrefixAdcd(addvcd, true);
		map.put("addvcd", advd);
		map.put(RequestModel.SQLID, DataCenterMonitorMapper.class.getName() + ".selectLakes");
		List<StRiverB>  list= dataCenterService.selectList(map);
		return ResponseModel.Success(list);
	}  
	
	/**
	 * 获取河流详情
	 * @param request
	 * @return
	 * @throws Exception
	 */
	@RequestMapping(value = "/getLakeDetail", method = RequestMethod.GET)
	@Log(operationType = "数据中心",operationName="河流详情")
	public Object getLakeDetail(HttpServletRequest request,String rvnm,String rvcd) {
		JSONObject map = new JSONObject();
		if(rvnm!=null){
			map.put("rvnm",rvnm);
			map.put(RequestModel.SQLID, DataCenterMonitorMapper.class.getName()+ ".getRVCD");
			String rvcd1= (String) dataCenterService.selectOne(map);
			map.put("rvcd", rvcd1);
		}else{
			map.put("rvcd", rvcd);
		}
		map.put(RequestModel.SQLID, DataCenterMonitorMapper.class.getName()+ ".getLakeDetail");
		List<RiverModel> models = dataCenterService.selectLists(map);
        map.put("ADDVCD",models.get(0).getADDVCD());
		map.put(RequestModel.SQLID, AdcdMapper.class.getName() + ".getAddvnm");	
		String addvnm=(String) adcdService.selectOne(map);
		for(RiverModel model:models){
			model.setADDVNM(addvnm);
		}
		return ResponseModel.Success(models);
	}
	
	/**
	 * 获取当前用户下所有行政区
	 * @param request
	 * @return
	 */
	@RequestMapping(value = "/getUserAdcdZtree", method = RequestMethod.GET)
	public Object getUserAdcdZtree(HttpServletRequest request){
		//先从缓存中获取行政区，没有就从库里面取
		List<AdcdTreeModel> listTree = (List<AdcdTreeModel>) EhCacheUtils.get(SysCacheType.CACHADCD, SysCacheType.ADCD_USER);
		if(listTree == null){
			listTree = new ArrayList<AdcdTreeModel>();
			SysUsers user = SecurityUtil.getSessionUser();
			String adcd = user.getUserAddvcd();
			int it = AdcdUtil.getRegionLevel(adcd);
			if(it > 1){
				AdcdTreeModel amodel = new AdcdTreeModel();
				List<AdcdModel> list = adcdService.getAdcdZtree(AdcdUtil.addZeroToAdcd(adcd.substring(0,2),12));
				amodel.setId(list.get(0).getAddvcd());
				amodel.setPid("-1");
				amodel.setName(list.get(0).getAddvnm());
				listTree.add(amodel);
			}
			if(it > 2){
				AdcdTreeModel amodel = new AdcdTreeModel();
				List<AdcdModel> list = adcdService.getAdcdZtree(AdcdUtil.addZeroToAdcd(adcd.substring(0,4),12));
				amodel.setId(list.get(0).getAddvcd());
				amodel.setPid(AdcdUtil.addZeroToAdcd(list.get(0).getAddvcd().substring(0,2),12));
				amodel.setName(list.get(0).getAddvnm());
				listTree.add(amodel);
			}
			List<AdcdModel> list = adcdService.getAdcdZtree(AdcdUtil.getPrefixAdcd(adcd, false));
			if(list.size() > 0){
				for(int i = 0 ;i<list.size();i++){
					AdcdModel model = list.get(i);
					AdcdTreeModel admodel = new AdcdTreeModel();
					admodel.setId(model.getAddvcd());
					admodel.setName(model.getAddvnm());
					int is = AdcdUtil.getRegionLevel(model.getAddvcd());
					if(is == 1){
						admodel.setPid("-1");
					}else if(is == 2){
						admodel.setPid(AdcdUtil.addZeroToAdcd(model.getAddvcd().substring(0,2),12));
					}else if(is == 3){
						admodel.setPid(AdcdUtil.addZeroToAdcd(model.getAddvcd().substring(0,4),12));
					}else if(is == 4){
						admodel.setPid(AdcdUtil.addZeroToAdcd(model.getAddvcd().substring(0,6),12));
					}else if(is == 5){
						admodel.setPid(AdcdUtil.addZeroToAdcd(model.getAddvcd().substring(0,9),12));
					}
					listTree.add(admodel);
				}
				EhCacheUtils.put(SysCacheType.CACHADCD, SysCacheType.ADCD_USER,listTree);
			}
		}
		
		return ResponseModel.Success(listTree);
	}
	
	/**
	 *  获取所有的省
	 * @param request
	 * @return
	 * @throws Exception
	 */
	@RequestMapping(value = "/getProvince", method = RequestMethod.GET)
	@Log(operationType = "数据中心",operationName="省份列表")
	public Object getProvince(HttpServletRequest request) throws Exception {
		JSONObject map = new JSONObject();
		List<AdcdModel> list = (List<AdcdModel>) EhCacheUtils.get(SysCacheType.CACHADCD, SysCacheType.ADCD_PROVINCE);
		if(list == null){
			map.put(RequestModel.SQLID, DataCenterMonitorMapper.class.getName()+ ".getProvince");
			list = dataCenterService.selectList(map);
			EhCacheUtils.put(SysCacheType.CACHADCD, SysCacheType.ADCD_PROVINCE,list);
		}
		return ResponseModel.Success(list);
	}

	/**
	 * 获取所有的省下所有的市
	 * @param model
	 * @param request
	 * @return
	 * @throws Exception
	 */
	@RequestMapping(value = "/getCity", method = RequestMethod.GET)
	@Log(operationType = "数据中心",operationName="城市列表")
	public Object getCity(AdcdModel model, HttpServletRequest request)
			throws Exception {
		JSONObject map = new JSONObject();
		if(model.getAddvcd()!=null&&!model.getAddvcd().equals("")){
			if(model.getAddvcd().equals("-1")){
				map.put("addvcd", null);
				map.put("addvcdCity", null);// 获取前缀
			}else{
				map.put("addvcd", model.getAddvcd());
				map.put("addvcdCity", AdcdUtil.getPrefixAdcd(model.getAddvcd(), true));// 获取前缀
			}
		}
		map.put(RequestModel.SQLID, DataCenterMonitorMapper.class.getName()
				+ ".getCity");
		List<AdcdModel> list = dataCenterService.selectList(map);
		return ResponseModel.Success(list);
	}

	/**
	 * 获取 市下所有的县
	 * @param model
	 * @param request
	 * @return
	 * @throws Exception
	 */
	@RequestMapping(value = "/getDistrict", method = RequestMethod.GET)
	@Log(operationType = "数据中心",operationName="县区列表")
	public Object getDistrict(AdcdModel model, HttpServletRequest request)
			throws Exception {
		JSONObject map = new JSONObject();
		if(model.getAddvcd()!=null&&!model.getAddvcd().equals("")){
			if(model.getAddvcd().equals("-1")){
				map.put("addvcd1", null);
				map.put("district",null);// 获取前缀
			}else{
				map.put("addvcd1", model.getAddvcd());
				map.put("district", AdcdUtil.getPrefixAdcd(model.getAddvcd(), true));// 获取前缀
			}
		}
		map.put(RequestModel.SQLID, DataCenterMonitorMapper.class.getName()
				+ ".getDistrict");
		List<AdcdModel> list = dataCenterService.selectList(map);
		return ResponseModel.Success(list);
	}
	
	/**
	 * 获取县下所有的乡
	 * @param model
	 * @param request
	 * @return
	 * @throws Exception
	 */
	@RequestMapping(value = "/getCountry", method = RequestMethod.GET)
	public Object getCountry(AdcdModel model, HttpServletRequest request)
			throws Exception {
		JSONObject map = new JSONObject();
		if(model.getAddvcd()!=null&&!model.getAddvcd().equals("")){
			if(model.getAddvcd().equals("-1")){
				map.put("addvcd1", null);
				map.put("country",null);// 获取前缀
			}else{
				map.put("addvcd1", model.getAddvcd());
				map.put("country", AdcdUtil.getPrefixAdcd(model.getAddvcd(), false));// 获取前缀
			}
		}
		map.put(RequestModel.SQLID, DataCenterMonitorMapper.class.getName()
				+ ".getCountry");
		List<AdcdModel> list = dataCenterService.selectList(map);
		return ResponseModel.Success(list);
	}
	
	/**
	 * 获取乡下所有村
	 * @param model
	 * @param request
	 * @return
	 * @throws Exception
	 */
	@RequestMapping(value = "/getVillage", method = RequestMethod.GET)
	public Object getVillage(AdcdModel model, HttpServletRequest request)
			throws Exception {
		JSONObject map = new JSONObject();
		if(model.getAddvcd()!=null&&!model.getAddvcd().equals("")){
			if(model.getAddvcd().equals("-1")){
				map.put("addvcd1", null);
				map.put("village",null);// 获取前缀
			}else{
				map.put("addvcd1", model.getAddvcd());
				map.put("village", AdcdUtil.getPrefixAdcd(model.getAddvcd(), false));// 获取前缀
			}
		}
		map.put(RequestModel.SQLID, DataCenterMonitorMapper.class.getName()
				+ ".getVillage");
		List<AdcdModel> list = dataCenterService.selectList(map);
		return ResponseModel.Success(list);
	}
	
    /**
     * 县获取上一级
     */
	@RequestMapping(value = "/getPreCity", method = RequestMethod.GET)
	@Log(operationType = "数据中心",operationName="县获取上一级")
	public Object getPreCity(String addvcd, HttpServletRequest request)
			throws Exception {
		 List<String> list=new ArrayList<String>();
		//获取等级===》1省,2市,3县,
		 int t=AdcdUtil.getRegionLevel(addvcd);
		 if(t==1){
		//省河南省410000000000
			 String  provinceAddvnm=AdcdUtil.getStrAdcdNm(addvcd,1);
			list.add(addvcd);
			list.add(provinceAddvnm);
		 }else{
			 String  provinceAddvcd=addvcd.substring(0, 2)+"0000000000";
			 String  provinceAddvnm=AdcdUtil.getStrAdcdNm(provinceAddvcd,1);
			 list.add(provinceAddvcd);
			 list.add(provinceAddvnm);
			//市411300000000
			 if(t==2){ 
				 String cityAddvnm=AdcdUtil.getStrAdcdNm(addvcd,2);
				 list.add(addvcd);
				 list.add(cityAddvnm);
		   //县区	宛城区 411302000000
			 }else if(t==3){
				 String cityAddvcd=addvcd.substring(0, 4)+"00000000";
				 String cityAddvnm=AdcdUtil.getStrAdcdNm(cityAddvcd,2);
				 String districtAddvnm=AdcdUtil.getStrAdcdNm(addvcd,3);
				 list.add(cityAddvcd);
				 list.add(cityAddvnm);
				 list.add(addvcd);
				 //System.out.println(addvcd);
				 list.add(districtAddvnm); 
			 } 
		 }
		 return ResponseModel.Success(list);
		} 
	
	/**
	 * 保存河道基本信息
	 */
	@RequestMapping(value = "/saveRiverLake", method = RequestMethod.POST)
	@Log(operationType = "数据中心",operationName=" 保存河道基本信息")
	public Object saveOrUpdateRiverLake(StRiverB riverB, HttpServletRequest request){
		SysUsers user = (SysUsers) SecurityUtil.getSessionAttr("user");
		if(user != null){
			int it = dataCenterService.saveOrUpDataRiver(riverB, user.getUserAddvcd(), user.getUserId());
			if(it > 0){				
				return ResponseModel.Success("成功");
			}else{
				return ResponseModel.Failure("失败");
			}
		}else{
			return ResponseModel.Failure("用户不存在！");
		}
	}

	
	/**
	 * 删除河湖信息
	 */
	@RequestMapping(value = "/deleteRiverLake", method = RequestMethod.POST)
	@Log(operationType = "数据中心",operationName="删除河湖信息")
	public Object deleteRiverLake(HttpServletRequest request){
		JSONObject map = new JSONObject();
		map.put("rvcd", request.getParameter("rvCd"));
		map.put(RequestModel.SQLID, DataCenterMonitorMapper.class.getName()+ ".deleteRiverLake");
		int num = dataCenterService.delete(map);
		if (num == 1) {
			return ResponseModel.Success("信息成功！");
		} else {
			return ResponseModel.Success("信息失败！");
		}
	}
	
	
	/**
	 * 0国家,1省,2市,3县,4乡镇,5行政村,6村组
	 * @param request
	 * @param model
	 * @return
	 */
	@RequestMapping(value = "/getAdcdList", method = RequestMethod.GET)
	@Log(operationType = "数据中心",operationName="获取省市县信息")
	public Object getAdcdList(HttpServletRequest request,String addvcd){
		SysUsers user = SecurityUtil.getSessionUser();	
		int a=AdcdUtil.getRegionLevel(user.getUserAddvcd());
		int b=AdcdUtil.getRegionLevel(addvcd);
		String adcdCity=AdcdUtil.getPrefixAdcd(user.getUserAddvcd(), false);
		List<AdcdModel> list=null;
		//登录用户为市级用户---显示县乡两级
		if(a==2){
			JSONObject map = new JSONObject();
			map.put("addvcd1", user.getUserAddvcd());
			/*map.put("suffix", "000000");
			map.put("len", 6);
			map.put(RequestModel.SQLID, AdcdMapper.class.getName() + ".getAdcdRiverTree");*/
			map.put("district",adcdCity);
			map.put(RequestModel.SQLID, DataCenterMonitorMapper.class.getName() + ".getDistrict");
			//县
			list=dataCenterService.selectList(map);
	        //乡
		}
         if(b==3){
			JSONObject map1 = new JSONObject();
			map1.put("addvcdCounty",addvcd);
			String adcd_pre=AdcdUtil.getPrefixAdcd(addvcd, false);
			map1.put("adcd_pre",adcd_pre);
			map1.put(RequestModel.SQLID, DataCenterMonitorMapper.class.getName() + ".getCounty");		
			list=dataCenterService.selectList(map1);
		}else{
			
		}
		return ResponseModel.Success(list);
	}
	
	/**
	 * 应急预案文件上传
	 * @param request
	 * @return
	 * @throws IOException 
	 * @throws IllegalStateException 
	 * @throws Exception 
	 */
	 @RequestMapping(value = "/UploadFile", method = RequestMethod.POST)
	 public Object uploadFile(HttpServletRequest request,String fileRvCd) throws IllegalStateException, IOException{
		String filePath  = (String)CustomPropertyConfigurer.getConfigProperty("fileAddres");
        long  startTime=System.currentTimeMillis();
        //将当前上下文初始化给  CommonsMutipartResolver （多部分解析器）
        CommonsMultipartResolver multipartResolver=new CommonsMultipartResolver(request.getSession().getServletContext());
        //检查form中是否有enctype="multipart/form-data"
        if(multipartResolver.isMultipart(request)){
            //将request变成多部分request
            MultipartHttpServletRequest multiRequest=(MultipartHttpServletRequest)request;
            //获取multiRequest 中所有的文件名
            Iterator iter=multiRequest.getFileNames();
            while(iter.hasNext()){
                //一次遍历所有文件
                MultipartFile file=multiRequest.getFile(iter.next().toString());
                if(file!=null){
                    String upPath = file.getOriginalFilename();
                    String fName = upPath.substring(upPath.lastIndexOf("."),upPath.length()); 
                    String name=upPath.substring(0, upPath.lastIndexOf("."));
                    if(".pdf".equals(fName.toLowerCase().trim())){
                    	upPath = fileRvCd+fName;
                    }
                    String path=filePath+upPath;
                    //上传
                    File files = new File(path);
                    file.transferTo(files);
                	String fileStr = dataCenterService.selectRvPew(fileRvCd);
                	if(StringUtils.isNotBlank(fileStr)){
                		File fileP= new File(fileStr);
                        // 如果文件路径所对应的文件存在，并且是一个文件，则直接删除
                        if(fileP.exists() && fileP.isFile()) {
                        	fileP.delete();
                        }
                	}
                    if(".doc".equals(fName.toLowerCase().trim()) || ".docx".equals(fName.toLowerCase().trim())){
                    	try {
                    		File fileP= new File(filePath+fileRvCd+".pdf");
                            // 如果文件路径所对应的文件存在，并且是一个文件，则直接删除
                            if(fileP.exists() && fileP.isFile()) {
                            	fileP.delete();
                            }
							OfficeImgToPdf.doc2pdf(path, filePath+fileRvCd+".pdf");
							System.out.println(filePath+fileRvCd+".pdf"+" -------- 转换成功地址");
							dataCenterService.saveOrUpRvPew(fileRvCd, filePath+fileRvCd+".pdf");
							files.delete();
					        //保存预案措施
		                    JSONObject map = new JSONObject();
		                    SysUsers user = SecurityUtil.getSessionUser();
		                    map.put("rvCd", fileRvCd);//预案id                    
		                    map.put("name", name);//预案名称
		                    map.put("reportUser", user.getUserId());//上传人id
		                    map.put("uuid", UUID.randomUUID().toString().replace("-", ""));
		                    //增加预案措施
		        			map.put(RequestModel.SQLID,DataCenterMonitorMapper.class.getName() + ".insertPlanStep"); 
		        			dataCenterService.insert(map);
						} catch (Exception e) {
							e.printStackTrace();
							return ResponseModel.Failure("失败");
						}
                    }else{
                    	dataCenterService.saveOrUpRvPew(fileRvCd, path);
                    	   JSONObject map = new JSONObject();
		                    SysUsers user = SecurityUtil.getSessionUser();
		                    map.put("rvCd", fileRvCd);//预案id                    
		                    map.put("name", name);//预案名称
		                    map.put("reportUser", user.getUserId());//上传人id
		                    map.put("uuid", UUID.randomUUID().toString().replace("-", ""));
		                    //增加预案措施
		        			map.put(RequestModel.SQLID,DataCenterMonitorMapper.class.getName() + ".insertPlanStep"); 
		        			dataCenterService.insert(map);
                    }
                }
            }
        }
        long  endTime=System.currentTimeMillis();
        System.out.println("预案上传的运行时间："+String.valueOf(endTime-startTime)+"ms");
        return ResponseModel.Success("成功");
	 }
	
	
		/**
		 * 获取所有河流
		 * @param request
		 * @return
		 * @throws Exception
		 */
		@RequestMapping(value = "/getRiverData", method = RequestMethod.GET)
		public Object  getRiverData(HttpServletRequest request){
			JSONObject map = new JSONObject();
			map.put(RequestModel.SQLID, DataCenterMonitorMapper.class.getName() + ".getRiverData1");
			List<RiverDataModel>  models1= dataCenterService.selectList(map);
			map.put(RequestModel.SQLID, DataCenterMonitorMapper.class.getName() + ".getRiverData2");
			List<RiverDataModel>  models2= dataCenterService.selectList(map);
			Map<Object,Object> maps=new HashMap<Object,Object>();
			maps.put("models1", models1);
			maps.put("models2", models2);
			return ResponseModel.Success(maps);
		}  
		
		/**
		 * 更新预案内容
		 * @param request
		 * @return
		 * @throws Exception
		 */
		@RequestMapping(value = "/updatePlanStep", method = RequestMethod.POST)
		public Object  updatePlanStep(HttpServletRequest request){
			JSONObject map = new JSONObject();
			map.put("uuid", request.getParameter("uuid"));
			map.put("stepContent", request.getParameter("stepContent"));
			map.put("planTm", new Date());
			map.put(RequestModel.SQLID, DataCenterMonitorMapper.class.getName() + ".updatePlanStep");
			int num=dataCenterService.update(map);
			return ResponseModel.Success(num);
		} 
		/**
		 * 删除预案
		 * @param request
		 * @return
		 * @throws Exception
		 */
		@RequestMapping(value = "/deletePlanStep", method = RequestMethod.POST)
		public Object  deletePlanStep(HttpServletRequest request,String uuid,String rvCd){
			JSONObject map = new JSONObject();
			//更新河流表
			map.put("rvCd", rvCd);
			int num=0;
			map.put(RequestModel.SQLID, DataCenterMonitorMapper.class.getName() + ".updateRiverPrew");
			num=dataCenterService.update(map);
		    //删除预案措施表
			map.put("uuid", uuid);
			map.put(RequestModel.SQLID, DataCenterMonitorMapper.class.getName() + ".deletePlanStep");
		    num=dataCenterService.delete(map);
			return ResponseModel.Success(num);
		} 
		
}
