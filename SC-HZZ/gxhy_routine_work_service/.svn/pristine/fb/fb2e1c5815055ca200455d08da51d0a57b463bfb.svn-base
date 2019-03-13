package com.gxhy.routine.controller;
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
import com.gxhy.routine.domain.ExposureModel;
import com.gxhy.routine.domain.ImageVideoModel;
import com.gxhy.routine.domain.ProcessModel;
import com.gxhy.routine.domain.ResultMapModel;
import com.gxhy.routine.persistence.ExposureMapper;
import com.gxhy.routine.service.ExposureService;
import com.gxhy.routine.webmodel.QueryModel;


@SuppressWarnings({"unchecked"})
@RestController
@RequestMapping("exposure/work")
public class ExposureController extends BaseController{

	
	@Autowired
	private ExposureService  exposureService;
	
	
	/**
	 * 曝光台列表
	 * @param request
	 * @param model
	 * @return
	 */
	@RequestMapping(value = "/getExposureList", method = RequestMethod.GET)
	public Object getExposureList(HttpServletRequest request){
		JSONObject map = new JSONObject();
		map.put("type", request.getParameter("type"));
		String time=request.getParameter("reportTime");
		if(StringUtils.isNotBlank(time)){
			Date startTime=DateUtil.getStartToTime(time);
			Date endTime=DateUtil.getEndToTime(time);
			map.put("startTime",  startTime);
			map.put("endTime",  endTime);
		}
		map.put(RequestModel.SQLID, ExposureMapper.class.getName() + ".getExposureList");
		List<ResultMapModel> list =exposureService.selectLists(map);
		return ResponseModel.Success(list);
	}
	
	/**
	 * 获取某个曝光台详情
	 * @param request
	 * @param model
	 * @return
	 */
	//type为了定义执行哪一个
	@RequestMapping(value = "/getExposureDetail", method = RequestMethod.POST)
	public Object getExposureDetail(HttpServletRequest request){
		JSONObject map = new JSONObject();
		map.put("acceptId",request.getParameter("acceptId"));
		map.put(RequestModel.SQLID, ExposureMapper.class.getName() + ".getExposureDetail");
		ExposureModel model=(ExposureModel) exposureService.selectOne(map);
		map.put(RequestModel.SQLID, ExposureMapper.class.getName() + ".getImageVideoDetail");
		List<ImageVideoModel> images=exposureService.selectLists(map);
		map.put("model",model);
		map.put("images", images);
		return ResponseModel.Success(map);
	}
	
	
}
