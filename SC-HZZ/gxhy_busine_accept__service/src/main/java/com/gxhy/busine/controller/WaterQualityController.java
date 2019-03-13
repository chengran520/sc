package com.gxhy.busine.controller;
import java.util.List;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.gxhy.base.model.ResponseModel;
import com.gxhy.busine.service.WaterQualityService;

@RestController
@RequestMapping("/water/quality")
public class WaterQualityController {
   
	@Autowired
	private WaterQualityService   waterQualityService;
	
	/**
	 * 获取工作台统计信息总数
	 * @param request
	 * @return
	 */
	@RequestMapping(value = "/getWorkBeanchCount",method = RequestMethod.GET)
	public Object getWorkBeanchCount(HttpServletRequest request){
		
		List<Integer> count =waterQualityService.getWorkBeanchCount();
		
		return ResponseModel.Success(count);
	}
}
