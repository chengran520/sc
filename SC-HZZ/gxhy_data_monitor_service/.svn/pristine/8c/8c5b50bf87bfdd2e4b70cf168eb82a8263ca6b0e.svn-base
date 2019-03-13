package com.gxhy.datamonitor.controller;

import java.util.List;

import javax.servlet.http.HttpServletRequest;

import org.apache.commons.lang3.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.alibaba.fastjson.JSONObject;
import com.gxhy.base.controller.BaseController;
import com.gxhy.base.model.RequestModel;
import com.gxhy.base.model.ResponseModel;
import com.gxhy.datamonitor.domain.QualityModel;
import com.gxhy.datamonitor.persistence.ReservoirMapper;
import com.gxhy.datamonitor.service.ReservoirService;
import com.gxhy.datamonitor.webmodel.QueryModel;
import com.gxhy.datamonitor.webmodel.ReservoirModel;

/**
 * 水库信息
 * @author yb
 *
 */
@SuppressWarnings({ "unchecked","rawtypes","unused"})
@RestController
@RequestMapping("data/reservoir")
public class ReservoirController extends  BaseController{
	@Autowired
	private ReservoirService reservoirService;
	
	/**
	 * 获取水库
	 * @param model
	 * @param request
	 * @return
	 */
	@RequestMapping(value = "/getRvvrs", method = RequestMethod.GET)
	public Object getRvvrs(QueryModel model,HttpServletRequest request){
		JSONObject map = new JSONObject();
		List<ReservoirModel> list=null;
		try {
			map = InitParams(model);
			RequestInitRanges(map,true,QueryModel.class);
			String keyword=model.getKeyword();
			if(StringUtils.isNotBlank(keyword)){
				map.put("keyword", keyword.trim());
			}
			map.put(RequestModel.SQLID,ReservoirMapper.class.getName() + ".getRvvrs");
			list = reservoirService.selectLists(map);
		} catch (Exception e) {
			e.printStackTrace();
		}		
		return ResponseModel.Success(list);
	}

	
	/**
	 * 获取某个水库的基本信息
	 * @param model
	 * @param request
	 * @return
	 */
	@RequestMapping(value = "/getRvvrById", method = RequestMethod.GET)
	public Object getRvvrById(HttpServletRequest request){
		JSONObject map = new JSONObject();
		String id=request.getParameter("stcd");
		map.put("id", id);
		map.put(RequestModel.SQLID,ReservoirMapper.class.getName() + ".getRvvrById");
		List<ReservoirModel> list = reservoirService.selectLists(map);
		return ResponseModel.Success(list);
	}
}
