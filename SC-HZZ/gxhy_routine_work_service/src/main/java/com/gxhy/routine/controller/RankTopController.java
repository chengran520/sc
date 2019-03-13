package com.gxhy.routine.controller;

import java.util.Map;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.gxhy.base.controller.BaseController;
import com.gxhy.base.model.ResponseModel;
import com.gxhy.routine.service.RankTopService;

/**
 * 排行榜
 * @author yb
 * @2017年8月10日下午5:33:13   
 * @CopyRight gxhy
 */
@RestController
@RequestMapping("rank/top")
public class RankTopController extends BaseController{
		
	@Autowired
	private RankTopService rankTopService;
	
	/**
	 * 获取投诉处理排行
	 * @param request
	 * @return
	 */
	@RequestMapping(value = "/getRankTopAll", method = RequestMethod.GET)
	public Object getRankTopAll(HttpServletRequest request){
		//获取排序字段名
		String key = request.getParameter("sortKey");
		Map<String, Object> list =rankTopService.getRankTopAll(key);
		return ResponseModel.Success(list);
	}
}
