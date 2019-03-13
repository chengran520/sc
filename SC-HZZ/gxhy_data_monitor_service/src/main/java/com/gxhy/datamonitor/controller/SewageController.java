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
import com.gxhy.datamonitor.domain.SewageModel;
import com.gxhy.datamonitor.persistence.RiverLengthMapper;
import com.gxhy.datamonitor.persistence.SewageMapper;
import com.gxhy.datamonitor.service.RiverLengthService;
import com.gxhy.datamonitor.service.SewageService;
import com.gxhy.datamonitor.webmodel.QueryModel;

@SuppressWarnings({ "unchecked","rawtypes","unused"})
@RestController
@RequestMapping("data/sewage")
public class SewageController extends BaseController{
	
	@Autowired
    private SewageService sewageService;
	
	
    /**
	 * 排污口列表
	 * @param model
	 * @param request
	 * @return
	 * @throws Exception
	 */
	@RequestMapping(value = "/getSewages", method = RequestMethod.GET)
	public Object riverLengthList(QueryModel model,HttpServletRequest request) throws Exception{
		JSONObject map = new JSONObject();
		map = InitParams(model);
		RequestInitRanges(map,true,SewageModel.class);
		map.put(RequestModel.SQLID,SewageMapper.class.getName() + ".getSewages");
		map.put("keyword", model.getKeyword());
		Page page = sewageService.selectList(map);
		return ResponseModel.Success(page);
   }
}
