package com.gxhy.base.controller;

import java.util.Date;
import java.util.HashMap;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.alibaba.fastjson.JSONObject;
import com.github.pagehelper.Page;
import com.gxhy.base.model.Log;
import com.gxhy.base.model.LogModel;
import com.gxhy.base.model.RequestModel;
import com.gxhy.base.model.ResponseModel;
import com.gxhy.base.persistence.LogMapper;
import com.gxhy.base.service.LogService;
import com.gxhy.base.util.DateUtil;
import com.gxhy.base.webmodel.QueryModel;

@SuppressWarnings({ "unchecked", "rawtypes" })
@RestController
@RequestMapping("/log/work")
public class LogController extends BaseController{

	@Autowired
    private LogService logService;
	
	/**
	 * 日志列表
	 * @param model
	 * @param request
	 * @return
	 * @throws Exception 
	 */
	@RequestMapping(value = "/getLogList", method = RequestMethod.GET)
	@Log(operationType = "日志",operationName="日志列表") 
	public Object  getLogList(QueryModel model,HttpServletRequest request){
		Page page=null;
		try {
		    JSONObject map = new JSONObject();
			map = InitParams(model);
			RequestInitRanges(map,true,LogModel.class);
			Date startTm=DateUtil.StringToDateTime(request.getParameter("startTm"));
	        Date endTm=DateUtil.StringToDateTime(request.getParameter("endTm"));
	        map.put("startTm",startTm);
			map.put("endTm", endTm);
			map.put("createBy",request.getParameter("createBy"));
			map.put(RequestModel.SQLID,LogMapper.class.getName() + ".getLogList");
			page = logService.selectList(map);
		} catch (Exception e) {
			e.printStackTrace();
		}
		
		return ResponseModel.Success(page);
    }
	
	/**
   	 *删除日志
   	 * @param model
   	 * @param request
   	 * @return
   	 */
    
    @RequestMapping(value = "/deleteLogList", method = RequestMethod.POST)
    @Log(operationType = "日志",operationName="删除日志") 
	public Object  deleteLogList(HttpServletRequest request,String ids){
    	int num=0;
		Map<String,Object> map =new HashMap<String,Object>();
		String[] id=ids.split(",");
		for(int i=0;i<id.length;i++){
			map.put("uuid", id[i]);
			map.put(RequestModel.SQLID,LogMapper.class.getName() + ".deleteLogList");
			num=logService.delete(map);
		}
		if(num >0){
			return ResponseModel.Success("删除成功！");
		}else{
			return ResponseModel.Success("删除失败！");
		}
    }
    
}
