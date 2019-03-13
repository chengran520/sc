package com.gxhy.hydro.controller;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.apache.commons.lang3.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.alibaba.fastjson.JSONObject;
import com.github.pagehelper.Page;
import com.gxhy.base.controller.BaseController;
import com.gxhy.base.domain.SysUsers;
import com.gxhy.base.exp.JxlsUtils;
import com.gxhy.base.model.Log;
import com.gxhy.base.model.RequestModel;
import com.gxhy.base.model.ResponseModel;
import com.gxhy.base.security.util.SecurityUtil;
import com.gxhy.base.util.DateUtil;
import com.gxhy.hydro.persistence.RiverMapper;
import com.gxhy.hydro.service.RiverService;
import com.gxhy.hydro.service.StationService;
import com.gxhy.hydro.webmodel.QueryReadingModel;
import com.gxhy.hydro.webmodel.ResultRiverInfoModel;
import com.gxhy.iot.river.StRiverB;

/**
 * 河道水情信息
 * 
 * @author yb
 * @2017年8月7日上午9:09:34
 * @CopyRight gxhy
 */
@SuppressWarnings({ "unchecked", "rawtypes" })
@RestController
@RequestMapping("hydro/river")
public class RiverController extends BaseController {

	@Autowired
	private RiverService riverService;

	@Autowired
	private StationService stationService;

	/**
	 * 获取最新河道水情信息
	 * @param request
	 * @return
	 */
	@RequestMapping(value = "/newRiverInfo", method = RequestMethod.GET)
	@Log(operationType = "河道水情",operationName="获取最新河道水情")
	public Object getNewRiverInfo(HttpServletRequest request) {
		String stcd = request.getParameter("stcd");

		List<QueryReadingModel> list = riverService.getNewRiverInfo(stcd);
		
		return ResponseModel.Success(list.size() > 0 ? list.get(0) : "");
	}
	
	/**
	 * 根据条件查询所有的河流信息
	 * @throws Exception
	 */
	@RequestMapping(value = "/getriverInfoList", method = RequestMethod.GET)
	@Log(operationType = "河道水情",operationName="查询所有的河流")
	public Object getRiverInfoList(QueryReadingModel model,HttpServletRequest request) throws Exception {
		JSONObject map = new JSONObject();
		map = InitParams(model);
		RequestInitRanges(map,true,QueryReadingModel.class);
		map.put(RequestModel.SQLID, RiverMapper.class.getName()+ ".getRiverInfoList");
		map.put("keyword", model.getKeyword());// 关键字
		map.put("startTime", model.getStm());// 开始时间
		map.put("endTime", model.getEtm());// 结束时间
		Page page = riverService.selectList(map);
		return ResponseModel.Success(page);
	}

	/**
	 * echart折线图
	 * 
	 * @param model
	 * @param request
	 * @return
	 * @throws Exception
	 */
	@RequestMapping(value = "/echartRiver", method = RequestMethod.GET)
	@Log(operationType = "河道水情",operationName="echart折线图")
	public Object echartRiver(HttpServletRequest request) throws Exception {
		// 默认采用第一条数据
		String stcd = request.getParameter("stcd");
		String tm = request.getParameter("tm");
		if(StringUtils.isNotBlank(tm)){
			Date date = new Date(Long.valueOf(tm));
			String etm = DateUtil.sdf.format(date);
			String stm = DateUtil.sdf.format(DateUtil.getNextDay(date));
			List<ResultRiverInfoModel> zlist = riverService.getZlist(stcd, stm, etm);
			return ResponseModel.Success(zlist);
		}
		return ResponseModel.Failure("时间格式不正确");
	}

	/**
	 * 导出excel表
	 * @param model
	 * @param request
	 * @return
	 * @throws Exception
	 */
     
     @RequestMapping(value = "/export", method = RequestMethod.POST)
     @Log(operationType = "河道水情",operationName="导出excel表")
 	public void export(QueryReadingModel model, HttpServletRequest request,HttpServletResponse response) throws Exception {
    	 Map<String, List<ResultRiverInfoModel>> map_data = new HashMap<String, List<ResultRiverInfoModel>>();
 		JSONObject map = new JSONObject();
 		map = InitParams(model);
 		map.put(RequestModel.SQLID, RiverMapper.class.getName()+ ".getRiverInfoList");
 		map.put("keyword", model.getKeyword());// 关键字
 		map.put("startTime", model.getStm());// 开始时间
 		map.put("endTime", model.getEtm());// 结束时间
 		List<ResultRiverInfoModel> list= riverService.selectLists(map);
 		for(ResultRiverInfoModel river:list){
 			SimpleDateFormat df = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
 			river.setDateTm(df.format(river.getTm()));
 		}
 		map_data.put("list", list);
 		String title="水情信息汇总表";
 		String xmlName="riverInfo";
 		JxlsUtils.export(map_data, title, xmlName,request, response);
     }
     
     /**
 	 * 获取河湖基础信息
 	 * @return
 	 * @throws Exception 
 	 */
 	@RequestMapping(value = "/riverDataInfo", method = RequestMethod.GET)
 	@Log(operationType = "综合展现",operationName="获取河道基础信息")
 	public Object getRiverDataInfo(HttpServletRequest request,StRiverB model) throws Exception{
 		SysUsers user = (SysUsers) SecurityUtil.getSessionAttr("user");
 		if(user != null){
 			
 			List<StRiverB> list =  riverService.getRiverDataInfo(model,user);
 			
  			return ResponseModel.Success(list);
 		}else{
 			return ResponseModel.Success("用户不存在！");
 		}
 	}
 	
}