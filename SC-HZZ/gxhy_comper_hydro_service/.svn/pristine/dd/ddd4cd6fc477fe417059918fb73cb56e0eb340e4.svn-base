package com.gxhy.hydro.controller;

import java.util.HashMap;
import java.util.Hashtable;
import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.apache.commons.lang3.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.gxhy.base.domain.SysUsers;
import com.gxhy.base.exp.JxlsUtils;
import com.gxhy.base.model.Log;
import com.gxhy.base.model.RequestModel;
import com.gxhy.base.model.ResponseModel;
import com.gxhy.base.security.util.SecurityUtil;
import com.gxhy.base.util.AdcdUtil;
import com.gxhy.hydro.domain.StBprpBModel;
import com.gxhy.hydro.persistence.StbprpBMapper;
import com.gxhy.hydro.service.StationService;

/**
 * 测站基本信息
 * @author yb
 * @2017年8月7日下午2:19:01   
 * @CopyRight gxhy
 */
@RestController
@RequestMapping("hydro/stbprp")
public class StationController {
	
	@Autowired
	private StationService stationService;
	
	/**
	 * 根据当前用户的行政区获取当下面所有的河道对应的测站信息
	 * @param request
	 * @return
	 * @throws Exception 
	 */
	@RequestMapping(value = "/getStbprpInfo", method = RequestMethod.GET)
	@Log(operationType = "测站基本信息",operationName="测站列表")
	public Object getStbprpInfo(HttpServletRequest request,StBprpBModel model) throws Exception{
		Map<String, Object> map = new HashMap<String, Object>();
		List<StBprpBModel> list = stationService.getStBprpBInfo(model.getStnm());
		map.put("stbprp", list);
		return ResponseModel.Success(map);
	}
	
}
