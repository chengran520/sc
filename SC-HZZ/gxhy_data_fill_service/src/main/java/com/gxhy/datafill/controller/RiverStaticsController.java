package com.gxhy.datafill.controller;

import java.text.SimpleDateFormat;
import java.util.Calendar;
import java.util.Date;
import java.util.List;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.alibaba.fastjson.JSONObject;
import com.gxhy.base.model.RequestModel;
import com.gxhy.base.model.ResponseModel;
import com.gxhy.base.util.DateUtil;
import com.gxhy.datafill.domain.RiverStatics;
import com.gxhy.datafill.persistence.RiverStaticsMapper;
import com.gxhy.datafill.service.RiverStaticsService;


@SuppressWarnings({ "unchecked", "rawtypes" })
@RequestMapping("/data/riverStatics")
@RestController
public class RiverStaticsController {

	@Autowired
	private RiverStaticsService riverStaticsService;
	
	@RequestMapping(value = "/getRiverList",method = RequestMethod.GET)
	public Object getWaterList(HttpServletRequest request){
		JSONObject map = new JSONObject();
		Date date = new Date();
		String etm = DateUtil.sdf.format(date);
		String stm = DateUtil.sdf.format(DateUtil.getNextDay(date));
		map.put("stm", stm);
		map.put("etm", etm);
		map.put(RequestModel.SQLID, RiverStaticsMapper.class.getName() + ".getRiverList");
		List<RiverStatics> selectLists = riverStaticsService.selectLists(map);
		return ResponseModel.Success(selectLists);
		
	}
}
