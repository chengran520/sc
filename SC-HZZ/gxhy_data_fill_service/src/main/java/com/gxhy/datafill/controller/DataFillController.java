package com.gxhy.datafill.controller;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.alibaba.fastjson.JSONObject;
import com.github.pagehelper.Page;
import com.gxhy.base.controller.BaseController;
import com.gxhy.base.domain.SysUsers;
import com.gxhy.base.model.Log;
import com.gxhy.base.model.RequestModel;
import com.gxhy.base.model.ResponseModel;
import com.gxhy.base.security.util.SecurityUtil;
import com.gxhy.base.util.AdcdUtil;
import com.gxhy.datafill.persistence.DataFillMapper;
import com.gxhy.datafill.service.DataFillService;
import com.gxhy.iot.river.StRiverB;

/**
 * 数据填报
 * @author yb
 *
 */
@SuppressWarnings({ "unchecked", "rawtypes" })
@RestController
@RequestMapping("data/fill")
public class DataFillController extends BaseController{

	@Autowired
	private DataFillService dataFillService;
	
	/**
	 * 获取填报数据
	 * @param request
	 * @return
	 * @throws Exception 
	 */
	@RequestMapping(value = "/getFillDataList", method = RequestMethod.GET)
	@Log(operationType = "数据填报",operationName="获取已填报的数据")
	public Object getDataFillRiver(StRiverB model,HttpServletRequest request) throws Exception{
		SysUsers user = (SysUsers) SecurityUtil.getSessionAttr("user");
		String key = request.getParameter("key");
		JSONObject map = new JSONObject();
		map = InitParams(model);
		RequestInitRanges(map,true,StRiverB.class);
		map.put(RequestModel.SQLID, DataFillMapper.class.getName() + ".getDataFillRiver");
		map.put("key", (key != null && key != "") ? new String(key.getBytes("ISO8859_1"),"UTF-8"):null);
		map.put("adcd", AdcdUtil.getPrefixAdcd(user.getUserAddvcd(), false));
		Page page = dataFillService.selectList(map);
		return ResponseModel.Success(page);
	}
	
	/**
	 * 数据添加
	 * @param riverB
	 * @param request
	 * @return
	 */
	@RequestMapping(value = "/insertDataFillRiver", method = RequestMethod.POST)
	@Log(operationType = "数据填报",operationName="添加数据")
	public Object insertDataFillRiver(StRiverB riverB,HttpServletRequest request){
		SysUsers user = (SysUsers) SecurityUtil.getSessionAttr("user");
		if(user != null){
			int it = dataFillService.saveOrUpDataFillRiver(riverB, user.getUserAddvcd(), user.getUserId());
			if(it > 0){				
				return ResponseModel.Success("成功");
			}else{
				return ResponseModel.Failure("失败");
			}
		}else{
			return ResponseModel.Failure("用户不存在！");
		}
	}
	
	/**
	 * 删除数据
	 * @param request
	 * @return
	 */
	@RequestMapping(value = "/deleteDataFillRiver", method = RequestMethod.POST)
	@Log(operationType = "数据填报",operationName="删除数据")
	public Object deleteDataFillRiver(HttpServletRequest request){
		String key = request.getParameter("rvCd");
		dataFillService.deleteDataFillRiver(key);
		return ResponseModel.Success("成功");
	}
}
