package com.gxhy.monitor.controller;
import java.io.File;
import java.io.IOException;
import java.util.Date;
import java.util.HashMap;
import java.util.Iterator;
import java.util.List;
import java.util.Map;
import java.util.UUID;
import javax.servlet.http.HttpServletRequest;
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
import com.gxhy.base.controller.BaseController;
import com.gxhy.base.model.Log;
import com.gxhy.base.model.RequestModel;
import com.gxhy.base.model.ResponseModel;
import com.gxhy.base.util.CustomPropertyConfigurer;
import com.gxhy.base.util.OfficeImgToPdf;
import com.gxhy.base.util.StringUtil;
import com.gxhy.monitor.domain.IotRiverBuildModel;
import com.gxhy.monitor.persistence.IotRiverBuildMapper;
import com.gxhy.monitor.service.IotRiverBuildService;

@RestController
@RequestMapping("data/monitor")
@SuppressWarnings("unchecked")
public class RiverBuildController extends BaseController{
	
	@Autowired
	IotRiverBuildService irbService;
	
	/**
	 * 根据当前用户的行政区获取测站信息
	 * @param request
	 * @return
	 * @throws Exception 
	 */
	@RequestMapping(value = "/getRiverBuildList", method = RequestMethod.GET)
	@Log(operationType = "一河一建",operationName="获取一河一建信息")
	public Object getStbprpInfo(HttpServletRequest request,IotRiverBuildModel model,String keyword,String stm,String etm,String queryType) throws Exception{
		JSONObject map = new JSONObject();
		map = InitParams(model);
		map.put("keyword",keyword);
		if(!StringUtil.isBlank(stm)){
			map.put("stm",stm);
		}
		if(!StringUtil.isBlank(etm)){
			map.put("etm",etm);
		}
		if(StringUtil.isNotBlank(queryType)){
			map.put("queryType", queryType);
		}
		RequestInitRanges(map,true,IotRiverBuildModel.class);
		map.put(RequestModel.SQLID, IotRiverBuildMapper.class.getName() + ".getRiverBuildList");
		Page page= irbService.selectList(map);
		List<IotRiverBuildModel> list = page.getResult();
		return ResponseModel.Success(page);
	}
	
	/**
	 * 保存
	 * @param model
	 * @param request
	 * @return
	 */
	@RequestMapping(value = "/saveRiverBuild", method = RequestMethod.POST)
	public Object saveRiverBuild(HttpServletRequest request){
		int num=0;
		Map<String,Object> map =new HashMap<String,Object>();
		map.put("uuid", request.getParameter("uuid"));
		map.put("projectName", request.getParameter("projectName"));
		map.put("buildContent", request.getParameter("buildContent"));
		map.put("investTotal", request.getParameter("investTotal"));
		map.put("finishTotalSchedule", request.getParameter("finishTotalSchedule"));
		map.put("planStime", request.getParameter("planStime"));
		map.put("planEtime", request.getParameter("planEtime"));
		map.put("buildUnitName", request.getParameter("buildUnitName"));
		map.put("buildUnitContacts", request.getParameter("buildUnitContacts"));
		map.put("buildUnitContactsTel", request.getParameter("buildUnitContactsTel"));
    	if(StringUtils.isBlank(request.getParameter("uuid"))){			
    		map.put("createTime", new Date());
			map.put("uuid", UUID.randomUUID().toString().replace("-", ""));
			map.put(RequestModel.SQLID,IotRiverBuildMapper.class.getName() + ".saveRiverBuild");
			num = irbService.insert(map);	
		}else {
			map.put("updateTime", new Date());
			map.put(RequestModel.SQLID,IotRiverBuildMapper.class.getName() + ".updateRiverBuild");
			num = irbService.update(map);
		}
    
			return ResponseModel.Success(num);
	}
	
    /**
   	 *删除
   	 * @param model
   	 * @param request
   	 * @return
   	 */
    
    @RequestMapping(value = "/deleteRiverBuild", method = RequestMethod.POST)
    @Log(operationType = "一河一建",operationName="删除一河一建信息")
	public Object  deleteRiverBuild(HttpServletRequest request){
		Map<String,Object> map =new HashMap<String,Object>();
		map.put("uuid", request.getParameter("uuid"));
		map.put(RequestModel.SQLID,IotRiverBuildMapper.class.getName() + ".deleteRiverBuildInfo");
		int num=irbService.delete(map);
	   return ResponseModel.Success(num);
    }
    /**
   	 * 详情
   	 * @param model
   	 * @param request
   	 * @return
   	 */
    @RequestMapping(value = "/riverBuildDetail", method = RequestMethod.GET)
    @Log(operationType = "一河一建",operationName="删除一河一建信息")
	public Object  deptDetail(HttpServletRequest request,String uuid){
		Map<String,Object> map =new HashMap<String,Object>();
		map.put("uuid", uuid);
		map.put(RequestModel.SQLID,IotRiverBuildMapper.class.getName() + ".riverBuildDetail");
		IotRiverBuildModel model=(IotRiverBuildModel) irbService.selectOne(map);
		return ResponseModel.Success(model);
    }    

    
    /**
	 *文件上传
	 * @param request
	 * @return
	 * @throws IOException 
	 * @throws IllegalStateException 
	 * @throws Exception 
	 */
	 @RequestMapping(value = "/uploadBuild", method = RequestMethod.POST)
	 public Object uploadFile(HttpServletRequest request,String fileid,String fileName) throws IllegalStateException, IOException{
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
                    	upPath = fileName+fName;
                    }
                    String path=filePath+upPath;
                    //上传
                    File files = new File(path);
                    file.transferTo(files);
                	String fileStr = irbService.selectBuild(fileid);
                	if(StringUtils.isNotBlank(fileStr)){
                		File fileP= new File(fileStr);
                        // 如果文件路径所对应的文件存在，并且是一个文件，则直接删除
                        if(fileP.exists() && fileP.isFile()) {
                        	fileP.delete();
                        }
                	}
                    if(".doc".equals(fName.toLowerCase().trim()) || ".docx".equals(fName.toLowerCase().trim())){
                    	try {
                    		File fileP= new File(filePath+".pdf");
                            // 如果文件路径所对应的文件存在，并且是一个文件，则直接删除
                            if(fileP.exists() && fileP.isFile()) {
                            	fileP.delete();
                            }
							OfficeImgToPdf.doc2pdf(path, filePath+fileName+".pdf");
							irbService.saveOrUpBuider(fileid, filePath+fileName+".pdf");
							files.delete();
						} catch (Exception e) {
							e.printStackTrace();
							return ResponseModel.Failure("失败");
						}
                    }
                }
            }
        }
        long  endTime=System.currentTimeMillis();
        return ResponseModel.Success("成功");
	 }

}
