package com.gxhy.busine.controller;
import java.io.File;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.UUID;

import javax.servlet.http.HttpServletRequest;

import org.apache.commons.io.FileUtils;
import org.apache.commons.lang3.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.alibaba.fastjson.JSONObject;
import com.gxhy.base.controller.BaseController;
import com.gxhy.base.domain.SysUsers;
import com.gxhy.base.model.Log;
import com.gxhy.base.model.RequestModel;
import com.gxhy.base.model.ResponseModel;
import com.gxhy.base.security.util.SecurityUtil;
import com.gxhy.base.util.AdcdUtil;
import com.gxhy.base.util.Constants;
import com.gxhy.base.util.CustomPropertyConfigurer;
import com.gxhy.base.util.DateUtil;
import com.gxhy.base.util.Encodes;
import com.gxhy.base.util.StringUtil;
import com.gxhy.busine.domain.BusineModel;
import com.gxhy.busine.domain.BusineTypeModel;
import com.gxhy.busine.domain.HandleBusineModel;
import com.gxhy.busine.domain.TimeAxiesModel;
import com.gxhy.busine.persistence.BusineMapper;
import com.gxhy.busine.service.BusineService;
import com.gxhy.busine.service.DictService;
import com.gxhy.busine.webmodel.BusineWebModel;
import com.gxhy.busine.webmodel.QueryModel;
import com.gxhy.busine.webmodel.ResultModel;
/**
 * 业务受理
 * @author yb
 * @2017年8月4日上午9:11:53   
 * @CopyRight gxhy
 */
@RestController
@RequestMapping("busine/accept")
@SuppressWarnings("unchecked")
public class BusineController extends BaseController{
	
	@Autowired
	private BusineService busineService;
	
	@Value("${imageAddres}")  
	private String imageAddres;  
	
	@Autowired
	private DictService dictService;
	
	/**
	 * 审核绩效考核信息
	 * @param request
	 * @return
	 */
	@RequestMapping(value = "/updateMeritInfo", method = RequestMethod.POST)
	@Log(operationType = "业务受理",operationName="审核绩效考核")
	public Object handleMeritUpdata(HttpServletRequest request,BusineWebModel model){
		SysUsers user = (SysUsers) SecurityUtil.getSessionAttr(Constants.CURRENT_USER);
		if(user != null){
			Integer it = busineService.handleMeritUpdata(model, user.getUserName());
			if(it > 0 ){				
				return ResponseModel.Success("业务成功！");
			}else{
				return ResponseModel.Success("业务失败！");
			}
		}
		return ResponseModel.Failure("当前用户不存在！");
	}
	
	
	
	/**
	 * 查询投诉统计
	 */
	@RequestMapping(value = "/initChartZf", method = RequestMethod.GET)
	public Object initChartZf(HttpServletRequest request) throws ParseException{
		JSONObject map = new JSONObject();
		map.put(RequestModel.SQLID, BusineMapper.class.getName() + ".initChartZf");
		List<ResultModel> models=busineService.selectLists(map);
		map.put("array",models);
		return ResponseModel.Success(map);
	}
	
	/***
	 * 查询事件完成率
	 */
	
	
	@RequestMapping(value = "/getChartRate", method = RequestMethod.GET)
	public Object getChartRate(HttpServletRequest request) throws ParseException{
		JSONObject map = new JSONObject();
		String startDate=DateUtil.testForDate();
		String endDate=DateUtil.testForDatelast();
		map.put("startDate", startDate);
		map.put("endDate", endDate);
		map.put(RequestModel.SQLID, BusineMapper.class.getName() + ".getChartRate");
		map.put("busineStatus", "3");
		List<Integer> models=busineService.selectLists(map);
		map.put("models",models);
	    return ResponseModel.Success(map);
	}
	
	/***
	 * 2017年12月26号---今日事件
	 * @param request
	 * @return
	 * @throws Exception 
	 */
	@RequestMapping(value = "/getBusines", method = RequestMethod.GET)
	public Object getBusines(HttpServletRequest request,QueryModel model) throws Exception{
		JSONObject map = new JSONObject();
		map = InitParams(model);
		RequestInitRanges(map,true,BusineModel.class);
		SysUsers user = (SysUsers) SecurityUtil.getSessionAttr(Constants.CURRENT_USER);
		String type=request.getParameter("btype");
		String paramType=request.getParameter("paramType");
		if(user != null){
			map.put("userId", user.getUserId());
			map.put("orginType",request.getParameter("orginType"));
			map.put("busineId", request.getParameter("busineId"));
            map.put("busineUNm",request.getParameter("busineUNm"));
            String createTm=request.getParameter("createTm");
            String userId=user.getUserId();
            //陈欢自己要求的自己可以看河长办上报的数据，别人登录可以看转交给自己的
            if(userId.equals("chenhuan")){
            	map.put("userJob", user.getUserJob());
            }
			if(StringUtil.isNotBlank(createTm)){
				Date starttime=DateUtil.getStartToTime(DateUtil.convertDateToString(DateUtil.parseDate2(createTm),4));//选择某天的开始时间
				Date endtime=DateUtil.getEndToTime(DateUtil.convertDateToString(DateUtil.parseDate2(createTm), 4));//选择某天的结束时间
				map.put("starttime", starttime);
				map.put("endtime", endtime);
			}
			if(paramType.equals("b")){
				map.put(RequestModel.SQLID, BusineMapper.class.getName() + ".getBusinesByQuery");
			}else{
				if(type.equals("a1")&&paramType.equals("a")){	
					map.put(RequestModel.SQLID, BusineMapper.class.getName() + ".pendingBusine");
				}else if(type.equals("a3")&&paramType.equals("a")){
						map.put(RequestModel.SQLID, BusineMapper.class.getName() + ".handledBusine");
				}else{}
			}
			List<BusineModel> list = busineService.selectLists(map);
			return ResponseModel.Success(list);
		}
		return ResponseModel.Failure("当前用户不存在！");
	}
	
	
	/***
	 * 事件图片
	 * @param request
	 * @return
	 */
	@RequestMapping(value = "/getBusineImgs", method = RequestMethod.GET)
	public Object getBusineImgs(HttpServletRequest request){
		JSONObject map = new JSONObject();
        String busineId=request.getParameter("busineId");
		map.put("busineId",busineId);
		map.put(RequestModel.SQLID, BusineMapper.class.getName() + ".getBusineImgs");	
		List<String> models = busineService.selectLists(map);
		return ResponseModel.Success(models);
	}
	
	/***
	 * 新增/修改流程
	 * @param request
	 * @return
	 */
	@RequestMapping(value = "/insertWorkFlow", method = RequestMethod.POST)
	@Log(operationType = "业务受理",operationName="新增流程")
	public Object insertWorkFlow(HttpServletRequest request){
		JSONObject map = new JSONObject();
		JSONObject map2 = new JSONObject();
		int num=0;
        SysUsers user = (SysUsers) SecurityUtil.getSessionAttr(Constants.CURRENT_USER);
        if(user!=null){
        	String busineOrgin=request.getParameter("busineOrgin");
        	if(busineOrgin.equals("gzjb")){
            	String orginId=request.getParameter("orginId");
            	map.put("orginId", orginId);
            	map.put(RequestModel.SQLID, BusineMapper.class.getName() + ".updateExposure");
            	num=busineService.update(map);
            }else{         	
            	map.put("busineId", request.getParameter("busineId"));//事件id           	            	
				map.put("handleTm",new Date());//处理时间
				map.put("status",request.getParameter("status"));//流程状态
				map.put("handleView", request.getParameter("handleView"));//处理意见
				int type=Integer.parseInt(request.getParameter("type"));
            	if(type==1){
            		map.put("workFlowId", UUID.randomUUID().toString().replace("-", ""));
            		map.put("handleUserId", user.getUserId());//处理人是当前用户
            		map.put("lastHandleUserId",user.getUserId());
            		map.put(RequestModel.SQLID, BusineMapper.class.getName() + ".insertWorkFlow");
        			num = busineService.insert(map);
            		
            	}
                //转交他人处理，可同时转交其他人处理
            	else if(type==2){
            		String handleUserId=request.getParameter("handleUserId");
            		if(handleUserId.indexOf(",")!= -1){//含有多个转交人
            			String users[] = handleUserId.split(","); 
            			for(int i=0;i<users.length;i++){
            				map.put("handleUserId",users[i]);//处理人是转交时选择用户
            				map.put("lastHandleUserId",user.getUserId());
            				map.put("workFlowId", UUID.randomUUID().toString().replace("-", ""));
            				map.put(RequestModel.SQLID, BusineMapper.class.getName() + ".insertWorkFlow");
            				num= busineService.insert(map);	
            			}
            		}else{
            			map.put("workFlowId", UUID.randomUUID().toString().replace("-", ""));
            			map.put("handleUserId",handleUserId);//处理人是转交时选择用户
            			map.put("lastHandleUserId",user.getUserId());
            			map.put(RequestModel.SQLID, BusineMapper.class.getName() + ".insertWorkFlow");
            			num=busineService.insert(map);	
            		}
            	} 
            }
        	
        	map2.put("busineId", request.getParameter("busineId"));
    		map2.put("busineStatus",request.getParameter("busineStatus"));
    		map2.put("updateTm", new Date());
    		map2.put(RequestModel.SQLID, BusineMapper.class.getName() + ".updateBusineStatus");
			int num2=busineService.update(map2);
    		if(num == 1&&num2==1){
    			return ResponseModel.Success("更新流程成功！");
    		}else{
    			return ResponseModel.Success("更新流程失败！");
    		}
        }        	
        return ResponseModel.Failure("当前用户不存在！");	
		
	}

	/***
	 * 无效事件
	 * @param request
	 * @return
	 */
	@RequestMapping(value = "/invalidBusine", method = RequestMethod.GET)
	@Log(operationType = "业务受理",operationName="无效事件")
	public Object invalidBusine(HttpServletRequest request){
		JSONObject map = new JSONObject();
        map.put("busineId", request.getParameter("busineId"));
        map.put("busineStatus", request.getParameter("busineStatus"));
        map.put("updateTm", new Date());
		map.put(RequestModel.SQLID, BusineMapper.class.getName() + ".updateBusineStatus");
		int num = busineService.update(map);
		int num2=0;
		JSONObject map2 = new JSONObject();
		SysUsers user = (SysUsers) SecurityUtil.getSessionAttr(Constants.CURRENT_USER);
		map2.put("workFlowId", UUID.randomUUID().toString().replace("-", ""));
		map2.put("busineId", request.getParameter("busineId"));//4表示事件无效
		map2.put("handleUserId", user.getUserId());
		map2.put("lastHandleUserId", user.getUserId());
		map2.put("handleTm",new Date());//处理时间
    	map2.put("handleView", request.getParameter("handleView"));//处理意见
		map2.put("status", request.getParameter("status"));//6表示流程无效
		String busineOrgin=request.getParameter("busineOrgin");
		if(busineOrgin.equals("公众举报")){
        	String orginId=request.getParameter("orginId");
        	map2.put("orginId", orginId);
        	map2.put(RequestModel.SQLID, BusineMapper.class.getName() + ".updateExposure");
        	num2=busineService.update(map2);
        }else{
        	map2.put(RequestModel.SQLID, BusineMapper.class.getName() + ".insertWorkFlow");
            num2=busineService.insert(map2);
        }
		
		if(num==1&&num2==1){
			return ResponseModel.Success("更新状态成功");
		}else{
			return ResponseModel.Success("更新状态失败");
		}	
	}
	/***
	 * 事件分类型展示的饼状图
	 * @param request
	 * @return
	 */
	@RequestMapping(value = "/getBusinesEcharts", method = RequestMethod.GET)
	@Log(operationType = "业务受理",operationName="饼状图")
	public Object getBusinesEcharts(HttpServletRequest request){
		JSONObject map = new JSONObject();
        map.put("dictTp","BZTP");
		map.put(RequestModel.SQLID, BusineMapper.class.getName() + ".getBusinesEcharts");	
		List<BusineTypeModel> models= busineService.selectLists(map);
		map.put(RequestModel.SQLID, BusineMapper.class.getName() + ".getBusinesEcharts2");	
		List<BusineTypeModel> models2= busineService.selectLists(map);
		map.put("models", models);
		map.put("models2", models2);
		return ResponseModel.Success(map);
	}
	/***
	 * 时间轴
	 * @param request
	 * @return
	 */
	@RequestMapping(value = "/getTimeAxis", method = RequestMethod.GET)
	@Log(operationType = "业务受理",operationName="时间轴")
	public Object getTimeAxis(HttpServletRequest request){
		JSONObject map = new JSONObject();
		map.put("busineId", request.getParameter("busineId"));
		map.put(RequestModel.SQLID, BusineMapper.class.getName() + ".getTimeAxis");	
		List<TimeAxiesModel> models= busineService.selectLists(map);
		return ResponseModel.Success(models);
	}
	
	/***
	 * 角标查询事件个数
	 * @param request
	 * @return
	 */
	@RequestMapping(value = "/getBusineSize", method = RequestMethod.POST)
	public Object getBusineSize(HttpServletRequest request){
		JSONObject map = new JSONObject();
		SysUsers user = SecurityUtil.getSessionUser();
		if(user != null){
			String startTm=DateUtil.convertDateToString(DateUtil.getStartTime(),10);
			String endTm=DateUtil.convertDateToString(DateUtil.getEndTime(),10);
			map.put("startTm",startTm);
			map.put("endTm",endTm);
			map.put("userId", user.getUserId());		
			//陈欢自己要求的自己可以看河长办上报的数据，别人登录可以看转交给自己的
            if(user.getUserId().equals("chenhuan")){
            	map.put("userJob", user.getUserJob());
            }else{
            	map.put("userJob", null);
            }
			map.put(RequestModel.SQLID, BusineMapper.class.getName() + ".getBusineSize");
			List<Integer> list=busineService.selectLists(map);
			return ResponseModel.Success(list);
		}
		return ResponseModel.Failure("用户不存在！");
	}
	


	/***
	 * 上传图片
	 * @param request
	 * @return
	 * @throws IOException 
	 * @throws FileNotFoundException 
	 */
	@RequestMapping(value = "/doUpload", method = RequestMethod.POST)
	@Log(operationType = "业务受理",operationName="上传图片")
	public Object doUpload(HttpServletRequest request,@RequestParam String imgBase64Data,@RequestParam String workflowId){
		Map<String,Object> map2=new HashMap<String, Object>();
		try {
	        String imagePath  = (String)CustomPropertyConfigurer.getConfigProperty("imageAddres");
	        String imgFilePath =System.getProperty("file.separator")+DateUtil.convertDateToString(new Date(), 5)+System.getProperty("file.separator");
	        File uploadPathFile = new File(imagePath+imgFilePath);
	        //创建父类文件
	        if(!uploadPathFile.exists() && !uploadPathFile.isDirectory()){
	            uploadPathFile.mkdirs();
	        }
	        File imgeFile = new File(imagePath+imgFilePath,new Date().getTime()+".jpg");
	        if(!imgeFile.exists()){
	            imgeFile.createNewFile();
	        }
	        //对base64进行解码
	        String imgBase64=imgBase64Data.split(",")[1];
	        byte[] result = Encodes.decodeBase64(imgBase64);
	        //使用Apache提供的工具类将图片写到指定路径下
			FileUtils.writeByteArrayToFile(imgeFile,result);			
		    String  imageId = UUID.randomUUID().toString().replace("-", "");
		    String workFlowId=request.getParameter("workflowId");
		    JSONObject map = new JSONObject();
		    if(StringUtils.isNotBlank(workFlowId)){
		    	map.put("workFlowId",workFlowId);
		    }else{
		    	workFlowId=UUID.randomUUID().toString().replace("-", "");
		    	map.put("workFlowId",workFlowId);
		    }
			
			map.put("busineId", request.getParameter("busineId"));
			map.put("imgUrl", imagePath+imgFilePath+imgeFile.getName());
			
			map.put("imageId",imageId);
			map.put("type","11");			
			map2.put("workFlowId",workFlowId);
			map.put(RequestModel.SQLID, BusineMapper.class.getName() + ".insertBusineImage");	
			int num =busineService.insert(map);
			
		 } catch (IOException e) {
			e.printStackTrace();
		}
		return ResponseModel.Success(map2);
	}
	
	/***
	 * 近一周的事件处理统计
	 * @param request
	 * @return
	 */
	
	@RequestMapping(value = "/initChart", method = RequestMethod.GET)
	public Object initChart(HttpServletRequest request){
		JSONObject map = new JSONObject();
		Map<String, Object> maps=new  HashMap<String, Object>();			
		try {
			List<Date> dates = DateUtil.dates();
			List<String> dateStrings=new ArrayList<String>();
			List<String> startDates=new ArrayList<String>();
			List<String> endDates=new ArrayList<String>();
			for(Date date:dates){
				String dat= DateUtil.sdfss.format(date);
				dateStrings.add(dat);
				Date a=DateUtil.getStartToTime(dat);
				Date b=DateUtil.getEndToTime(dat);
				String aa= DateUtil.sdft4s.format(a);
				startDates.add(aa);
				String bb= DateUtil.sdft4s.format(b);
				endDates.add(bb);
			}
			map.put("startdate0",startDates.get(0));
			map.put("enddate0",endDates.get(0));
			map.put("startdate1", startDates.get(1));
			map.put("enddate1", endDates.get(1));
			map.put("startdate2", startDates.get(2));
			map.put("enddate2", endDates.get(2));
			map.put("startdate3", startDates.get(3));
			map.put("enddate3", endDates.get(3));
			map.put("startdate4", startDates.get(4));
		    map.put("enddate4", endDates.get(4));
			map.put("startdate5", startDates.get(5));
			map.put("enddate5", endDates.get(5));
			map.put("startdate6", startDates.get(6));
			map.put("enddate6", endDates.get(6));
			map.put(RequestModel.SQLID, BusineMapper.class.getName() + ".initChart");	
			List<Integer> models=busineService.selectLists(map);
			maps.put("array1", models);
			maps.put("array2",dateStrings);
		} catch (ParseException e) {
			e.printStackTrace();
		}	
		return ResponseModel.Success(maps);
	}
	
	/***
	 * 事件来源分布
	 * @param request
	 * @return
	 */
	@RequestMapping(value = "/getSource", method = RequestMethod.GET)
	public Object getSource(HttpServletRequest request){
		JSONObject map = new JSONObject();
		map.put("busineId", request.getParameter("busineId"));
		map.put(RequestModel.SQLID, BusineMapper.class.getName() + ".getSource");	
	    List<ResultModel> models=busineService.selectLists(map);
	    for(ResultModel model:models){
	    	if(model.getName().equals("hzxh")){
	    		model.setName("日常巡河");
	    	}else if(model.getName().equals("gzjb")){
	    		model.setName("投诉举报");
	    	}else{}
	    }
		return ResponseModel.Success(models);
	}
	
	/***
	 * 查询事件id和事件名称
	 * @param request
	 * @return
	 */
	@RequestMapping(value = "/getLawSourceData", method = RequestMethod.GET)
	public Object getLawSourceData(HttpServletRequest request){
		JSONObject map = new JSONObject();
		map.put("busineId", request.getParameter("busineId"));
		map.put(RequestModel.SQLID, BusineMapper.class.getName() + ".getSource");	
	    List<ResultModel> models=busineService.selectLists(map);
	    for(ResultModel model:models){
	    	if(model.getName().equals("hzxh")){
	    		model.setName("日常巡河");
	    	}else if(model.getName().equals("gzjb")){
	    		model.setName("投诉举报");
	    	}else{}
	    }
		return ResponseModel.Success(models);
	}
	
	/***
	 * 查询事件来源xia'l
	 * @param request
	 * @return
	 */
	@RequestMapping(value = "/getbusins", method = RequestMethod.GET)
	public Object getbusins(HttpServletRequest request,String type){
		JSONObject map = new JSONObject();
		if(type.equals("1")||type==null){
			map.put("orginId", "hzxh");
		}else if(type.equals("2")){
			map.put("orginId", "gzjb");
		}else{}
		map.put(RequestModel.SQLID, BusineMapper.class.getName() + ".getbusins");	
	    List<String> models=busineService.selectLists(map);
		return ResponseModel.Success(models);
	}
	

	/***
	 * 查询未处理事件的个数
	 * @param request
	 * @return
	 */
	@RequestMapping(value = "/getCountBusine", method = RequestMethod.POST)
	public Object 	getCountBusine(HttpServletRequest request){
		JSONObject map = new JSONObject();
		map.put(RequestModel.SQLID, BusineMapper.class.getName() + ".getCountBusine");	
	    int count=(int) busineService.selectOne(map);
		return ResponseModel.Success(count);
	}
	
	
	/**
	 * 事件统计报表  
	 */
	@RequestMapping(value = "/getBusineStatics", method = RequestMethod.GET)
	public Object 	getBusineStatics(HttpServletRequest request,String type,String busineType,String startTm,String endTm){
		JSONObject map = new JSONObject();
		map.put("type", type);
		map.put("busineType", busineType);
		if(StringUtils.isNotBlank(startTm)){
			map.put("startTm", DateUtil.convertStringToDate(startTm));
		}
		if(StringUtils.isNotBlank(endTm)){
			map.put("endTm", DateUtil.convertStringToDate(endTm));
		}
		map.put(RequestModel.SQLID, BusineMapper.class.getName() + ".getBusineStatics");	
	    List<BusineModel> list=busineService.selectLists(map);
		return ResponseModel.Success(list);
	}
	
}
