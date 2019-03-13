package com.gxhy.datamonitor.controller;
import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.alibaba.fastjson.JSONObject;
import com.github.pagehelper.Page;
import com.gxhy.base.controller.BaseController;
import com.gxhy.base.model.Log;
import com.gxhy.base.model.RequestModel;
import com.gxhy.base.model.ResponseModel;
import com.gxhy.datamonitor.domain.RiverLengthModel;
import com.gxhy.datamonitor.persistence.RiverLengthMapper;
import com.gxhy.datamonitor.service.RiverLengthService;
import com.gxhy.datamonitor.webmodel.QueryModel;

@SuppressWarnings({ "unchecked", "rawtypes" })
@RestController
@RequestMapping("riverLength/work")
public class RiverLengthController extends BaseController{
	
   @Autowired
   private RiverLengthService riverLengthService;
   
   /**
	 * 河长列表
	 * @param model
	 * @param request
	 * @return
	 * @throws Exception
	 */
	@RequestMapping(value = "/riverLengthList", method = RequestMethod.GET)
	@Log(operationType = "河长信息",operationName="河长列表")
	public Object riverLengthList(QueryModel model,HttpServletRequest request) throws Exception{
		JSONObject map = new JSONObject();
		map = InitParams(model);
		RequestInitRanges(map,true,RiverLengthModel.class);
		map.put(RequestModel.SQLID,RiverLengthMapper.class.getName() + ".riverLengthList");
		map.put("keyword", model.getKeyword());
		Page page = riverLengthService.selectList(map);
		return ResponseModel.Success(page);
   }
	
}
