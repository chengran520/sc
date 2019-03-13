package com.gxhy.routine.controller;

import java.util.Date;
import java.util.List;
import java.util.UUID;

import javax.servlet.http.HttpServletRequest;

import org.apache.commons.lang3.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.alibaba.fastjson.JSONObject;
import com.github.pagehelper.Page;
import com.gxhy.base.controller.BaseController;
import com.gxhy.base.domain.SysUsers;
import com.gxhy.base.model.RequestModel;
import com.gxhy.base.model.ResponseModel;
import com.gxhy.base.security.util.SecurityUtil;
import com.gxhy.base.util.DateUtil;
import com.gxhy.routine.domain.LawEnMentModel;
import com.gxhy.routine.persistence.LawEnMentMapper;
import com.gxhy.routine.service.LawEnMentService;
import com.gxhy.routine.webmodel.LawWorkFlowModel;
import com.gxhy.routine.webmodel.ResultLawModel;

/**
 * 执法监管
 * @author yb
 *
 */
@SuppressWarnings({ "unchecked", "rawtypes" })
@RestController
@RequestMapping("law/enforment")
public class LawEnMentController extends BaseController{
	
	@Autowired
	private LawEnMentService lawEnMentService;
	
	/**
	 * 获取执法查询列表
	 * @param request
	 * @return
	 * @throws Exception
	 */
	@RequestMapping(value = "/getLawEnMentList", method = RequestMethod.GET)
	public Object getLawEnMentList(HttpServletRequest request,String lawSource,String lawTm,String keyword){
		JSONObject map = new JSONObject();
		SysUsers user = SecurityUtil.getSessionUser();		
		if(StringUtils.isNotBlank(lawSource)){
			switch(lawSource){   
			case "1":   
				map.put("lawSource", "hzxh");   
			break;   
			case "2":   
				map.put("lawSource", "gzjb");
			break;    
			default:   
			break;   
			}   
		}
		map.put("uuid", request.getParameter("uuid"));
	    map.put("keyword", keyword);
	    map.put("userId", user.getUserId());
	    if(StringUtils.isNotBlank(lawTm)){
	    	Date startTm=DateUtil.getStartToTime(lawTm);
	 	    Date endTm=DateUtil.getEndToTime(lawTm);
	 	    map.put("startTm", startTm);
	 	    map.put("endTm", endTm);
	    }
	    map.put("isFilling",request.getParameter("isFilling"));
	    map.put("status", request.getParameter("status"));
	    map.put("stat", request.getParameter("stat"));
		RequestInitRanges(map,true,LawEnMentModel.class);
		 int job=Integer.parseInt(user.getUserJob());
		if(job<=7||job==14){
			map.put(RequestModel.SQLID, LawEnMentMapper.class.getName() + ".getAllLawList");
		}else{
			map.put(RequestModel.SQLID, LawEnMentMapper.class.getName() + ".getLawList");
		}
		
		Page page =  lawEnMentService.selectList(map);
		return ResponseModel.Success(page);
	}
	/**
	 * 获取执法查询列表
	 * @param request
	 * @return
	 * @throws Exception
	 */
	@RequestMapping(value = "/addLaw", method = RequestMethod.POST)
	public Object addLaw(ResultLawModel  model){
		//将未处理改为执法的话先将事件改为5
		SysUsers user = SecurityUtil.getSessionUser();
		String userId=user.getUserId();
		JSONObject map = new JSONObject();
		map.put("busineId", model.getBusineId());
		map.put(RequestModel.SQLID, LawEnMentMapper.class.getName() + ".updateBusineById");
		int num=lawEnMentService.update(map);
		
		//增加执法事件表
		map.put("lawId", model.getBusineId());
		map.put("userId", userId);
		map.put("registerUser",model.getRegisterUserId());
		map.put("handleTmmit", model.getHandleTmmit());
		map.put("reportTm", new Date());
		map.put("isFiling", "0");
		map.put("isFilClose","0");
		map.put("status","0");
		map.put("registerUserNm", model.getRegisterUserNm());
		map.put("uuid", UUID.randomUUID().toString().replace("-", ""));
		map.put(RequestModel.SQLID, LawEnMentMapper.class.getName() + ".addLaw");
		int count=lawEnMentService.insert(map);
		return ResponseModel.Success(count);
		
	}
	
	
	
	/**
	 * 更新审核时间
	 * @param request
	 * @return
	 * @throws Exception
	 */
	@RequestMapping(value = "/updateLawById", method = RequestMethod.POST)
	public Object updateLawById(String lawId,String handleView){
		SysUsers user = SecurityUtil.getSessionUser();
		JSONObject map = new JSONObject();
		map.put("lawId", lawId);//立案事件
		map.put("registerTm", new Date());//立案事件
		map.put("isFiling", "1");//已立案
		map.put("status","1");//已审核
		map.put(RequestModel.SQLID, LawEnMentMapper.class.getName() + ".updateLawById");
		int num=lawEnMentService.update(map);
		//新增流程
		map.put("handleUserId",user.getUserId());
		map.put("handleTm", new Date());
		map.put("status", "1");//未处理
		map.put("handleView", handleView);
		map.put("workflowId", UUID.randomUUID().toString().replace("-", ""));
		map.put(RequestModel.SQLID, LawEnMentMapper.class.getName() + ".insertLawWorkFlow");
		int count=lawEnMentService.insert(map);
		return ResponseModel.Success(count);
	}
	
	/**
	 * 添加流程以及更新执法表
	 * @param request
	 * @return
	 * @throws Exception
	 */
	@RequestMapping(value = "/updateLaw", method = RequestMethod.POST)
	public Object updateLaw(String lawId,String handleView){
		SysUsers user = SecurityUtil.getSessionUser();
		JSONObject map = new JSONObject();
		map.put("lawId", lawId);
		/*
		map.put("isFilClose", "1");//已结案
		map.put("status", "2");//已处理
		map.put(RequestModel.SQLID, LawEnMentMapper.class.getName() + ".updateLaw");
		int num=lawEnMentService.update(map);*/
		map.put("handleUserId",user.getUserId());
		map.put("lastHandleUserId", user.getUserId());
		map.put("handleTm", new Date());
		map.put("status", "2");//已处理
		map.put("handleView", handleView);
		map.put("workflowId", UUID.randomUUID().toString().replace("-", ""));
		map.put(RequestModel.SQLID, LawEnMentMapper.class.getName() + ".insertLawWorkFlow");
		int b=lawEnMentService.insert(map);
		return ResponseModel.Success(b);
	}
	
	
	/**
	 * 获取流程根据lawid
	 * @param request
	 * @return
	 * @throws Exception
	 */
	@RequestMapping(value = "/getLawWorkFlows", method = RequestMethod.POST)
	public Object getLawWorkFlows(String lawId){
		JSONObject map = new JSONObject();
		SysUsers user = SecurityUtil.getSessionUser();
		map.put("lawId", lawId);
		map.put("userId", user.getUserId());
		map.put(RequestModel.SQLID, LawEnMentMapper.class.getName() + ".getLawWorkFlows");
        List<LawWorkFlowModel> list=lawEnMentService.selectList(map);
		return ResponseModel.Success(list);
	}
	

	/**
	 * 获取执法申请人员
	 * @param request
	 * @return
	 * @throws Exception
	 */
	@RequestMapping(value = "/selectUser", method = RequestMethod.GET)
	public Object selectUser(String lawId){
		SysUsers user = SecurityUtil.getSessionUser();
		JSONObject map = new JSONObject();
		map.put("userId", user.getUserId());
		map.put(RequestModel.SQLID, LawEnMentMapper.class.getName() + ".selectUser");
		List<SysUsers> list=lawEnMentService.selectList(map);
		return ResponseModel.Success(list);
	}
}
