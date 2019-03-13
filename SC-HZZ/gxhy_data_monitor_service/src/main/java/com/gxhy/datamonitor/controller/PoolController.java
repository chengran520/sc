package com.gxhy.datamonitor.controller;
import java.util.Date;
import java.util.List;

import javax.servlet.http.HttpServletRequest;

import org.apache.commons.lang3.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.alibaba.fastjson.JSONObject;
import com.gxhy.base.controller.BaseController;
import com.gxhy.base.model.Log;
import com.gxhy.base.model.RequestModel;
import com.gxhy.base.model.ResponseModel;
import com.gxhy.base.util.DateUtil;
import com.gxhy.datamonitor.domain.QualityModel;
import com.gxhy.datamonitor.persistence.PoolMapper;
import com.gxhy.datamonitor.persistence.QualityMapper;
import com.gxhy.datamonitor.service.PoolService;
import com.gxhy.datamonitor.webmodel.PoolModel;
import com.gxhy.datamonitor.webmodel.QueryModel;

/***
 * 山塘
 * @author cr
 *
 */
@SuppressWarnings({ "unchecked","rawtypes","unused"})
@RestController
@RequestMapping("data/pool")
public class PoolController extends BaseController{
	
	@Autowired
	private PoolService poolService;
	
	/**
	 * 获取山塘
	 * @param model
	 * @param request
	 * @return
	 */
	@RequestMapping(value = "/getPools", method = RequestMethod.GET)
	public Object getPools(QueryModel model,HttpServletRequest request){
		JSONObject map = new JSONObject();
		List<PoolModel> list=null;
		try {
			map = InitParams(model);
			RequestInitRanges(map,true,QueryModel.class);
			String keyword=model.getKeyword();
			if(StringUtils.isNotBlank(keyword)){
				map.put("keyword", keyword.trim());
			}
			map.put(RequestModel.SQLID,PoolMapper.class.getName() + ".getPools");
			list = poolService.selectLists(map);
		} catch (Exception e) {
			e.printStackTrace();
		}		
		return ResponseModel.Success(list);
	}
	
	/**
	 * 获取山塘
	 * @param model
	 * @param request
	 * @return
	 */
	@RequestMapping(value = "/getPoolUsers", method = RequestMethod.GET)
	public Object getPoolUsers(QueryModel model,HttpServletRequest request){
		JSONObject map = new JSONObject();
		String id=request.getParameter("id");
		map.put("id", id);
	    map.put(RequestModel.SQLID,PoolMapper.class.getName() + ".getPoolUsers");
	    List<PoolModel> list = poolService.selectLists(map);	
		return ResponseModel.Success(list);
	}
	
	/**
	 * 根据测站id获取山塘
	 * @param model
	 * @param request
	 * @return
	 */
	@RequestMapping(value = "/getPoolById", method = RequestMethod.GET)
	public Object getPoolById(QueryModel model,HttpServletRequest request){
		JSONObject map = new JSONObject();
		String id=request.getParameter("stcd");
		map.put("id", id);
	    map.put(RequestModel.SQLID,PoolMapper.class.getName() + ".getPoolById");
	    List<PoolModel> list = poolService.selectLists(map);	
		return ResponseModel.Success(list);
	}
	
	
}
