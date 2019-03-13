package com.gxhy.routine.controller;
import java.text.ParseException;
import java.util.ArrayList;
import java.util.Calendar;
import java.util.Date;
import java.util.GregorianCalendar;
import java.util.List;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.alibaba.fastjson.JSONObject;
import com.gxhy.base.controller.BaseController;
import com.gxhy.base.domain.SysUsers;
import com.gxhy.base.model.Log;
import com.gxhy.base.model.RequestModel;
import com.gxhy.base.model.ResponseModel;
import com.gxhy.base.security.util.SecurityUtil;
import com.gxhy.base.util.DateUtil;
import com.gxhy.base.util.HTMLSpirit;
import com.gxhy.routine.domain.MsgInfoModel;
import com.gxhy.routine.persistence.MsgInfoMapper;
import com.gxhy.routine.service.MsgInfoService;

/**
 * 消息下发
 * @author yb
 * @2017年8月11日下午4:19:44   
 * @CopyRight gxhy
 */
@RestController
@RequestMapping("msg/base")
@SuppressWarnings({ "unchecked","rawtypes"})
public class MsgInfoController extends BaseController{
	
	@Autowired
	private MsgInfoService msgInfoService;
	
	
	/**
	 * 获取已发送的信息
	 * @param reques
	 * @param mode
	 * @return
	 * @throws Exception 
	 */
	@RequestMapping(value = "/getMsgAllInfo", method = RequestMethod.GET)
	@Log(operationType = "消息下发",operationName="获取已发送的信息")
	public Object getMsgAllInfo(HttpServletRequest reques,MsgInfoModel model) throws Exception{
		SysUsers user = SecurityUtil.getSessionUser();
		JSONObject map = new JSONObject();
		map = InitParams(model);
		RequestInitRanges(map,true,MsgInfoModel.class);
		map.put(RequestModel.SQLID, MsgInfoMapper.class.getName() + ".getMsgAllInfo");
		map.put("userId", user.getUserId());
	    map.put("dictTp", "XXFB");
		List<MsgInfoModel> list= msgInfoService.selectList(map);//得到所有的信息
		for(MsgInfoModel lst:list){
			String content=HTMLSpirit.delHTMLTag(lst.getMsgContent());
			if(content.length()>=30){
				 lst.setMsgContent(content.substring(0, 30)+"...");
			}else{
				 lst.setMsgContent(content);
			}
		   
		}
		return ResponseModel.Success(list);
	}
	
	
	/**
	 * 发送信息
	 * @param request
	 * @return
	 */
	@RequestMapping(value = "/insertMsgInfo", method = RequestMethod.POST)
	@Log(operationType = "消息下发",operationName="发送信息")
	public Object insertMsgInfo(HttpServletRequest request,MsgInfoModel model){
		SysUsers user = SecurityUtil.getSessionUser();
		JSONObject map = new JSONObject();
		int it = msgInfoService.insertMsgInfo(model,user);
		if(it > 0){
			map.put("str", "success");
		}else{
			map.put("str", "error");
		}
		return ResponseModel.Success(map);
	}

	/**
	 * 近一周的最近时间的通知公告
	 * @param request
	 * @param model
	 * @return
	 * @throws ParseException 
	 */
	
	@SuppressWarnings("null")
	@RequestMapping(value = "/getInformData", method = RequestMethod.GET)
	public Object getInformData(HttpServletRequest request){
		JSONObject map = new JSONObject();
		List<MsgInfoModel> list=null;
		/*List<Date> dates;
		List<String> dateStrings=new ArrayList<String>();
		try {
			dates = DateUtil.dates();
		    for(Date date:dates){
		    	dateStrings.add(DateUtil.sdf.format(date));
		    }
		} catch (ParseException e) {
			e.printStackTrace();
		}
		String startDate=dateStrings.get(0);
		String endDate=dateStrings.get(dateStrings.size()-1);
		map.put("startDate", DateUtil.convertStringToDate(dateFrom));
		map.put("endDate", DateUtil.convertStringToDate(dateTo));*/
	    Date now = new Date();          	          
        Calendar calendar = new GregorianCalendar();  
        calendar.set(Calendar.DATE, calendar.get(Calendar.DATE) - 7);  
	    Date startDate=calendar.getTime(); 
	    map.put("startDate", startDate);
		map.put("endDate", new Date());
		map.put(RequestModel.SQLID, MsgInfoMapper.class.getName() + ".getInformData");
		list= msgInfoService.selectList(map);//得到所有的信息		
		return ResponseModel.Success(list);
	}
	
	/**
	 * 查询某个通知公告
	 * @param request
	 * @return
	 */
	@RequestMapping(value = "/getInformDataDetail", method = RequestMethod.POST)
	public Object getInformDataDetail(HttpServletRequest request){
		JSONObject map = new JSONObject();
		map.put("uuid",request.getParameter("uuid"));
	    map.put(RequestModel.SQLID, MsgInfoMapper.class.getName() + ".getInformDataDetail");
	    MsgInfoModel model=(MsgInfoModel) msgInfoService.selectOne(map);
		return ResponseModel.Success(model);
	}
}
