package com.gxhy.busine.controller;
import java.util.HashMap;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.alibaba.fastjson.JSONObject;
import com.github.pagehelper.Page;
import com.gxhy.base.domain.SysUsers;
import com.gxhy.base.model.RequestModel;
import com.gxhy.base.model.ResponseModel;
import com.gxhy.base.security.util.SecurityUtil;
import com.gxhy.base.util.Constants;
import com.gxhy.busine.persistence.LawMapper;
import com.gxhy.busine.service.LawService;
/**
 * 执法监管
 * @author cr
 *
 */
@RestController
@RequestMapping("/law/supervise")
public class LawController {

	@Autowired
	private LawService  lawService;
	
	private static final Logger logger = LoggerFactory.getLogger(LawController.class);
	
	/**
     * 查询执法列表数据
     * @param request
     * @param
     * @return
     */
	@RequestMapping(value = "/getLawDataList",method = RequestMethod.GET)
	public  Object getLawDataList(HttpServletRequest request){
		  	JSONObject parammap = new JSONObject();
		  	parammap.put("pageSize", 5);
		  	parammap.put("pageNum", 1);
		  	SysUsers user = (SysUsers) SecurityUtil.getSessionAttr(Constants.CURRENT_USER);
		  	parammap.put("userId", user.getUserId());
		  	parammap.put(RequestModel.SQLID,LawMapper.class.getName() + ".getLawDataList");
			Page page=lawService.selectList(parammap);
		    return ResponseModel.Success(page);
	}

	

}
