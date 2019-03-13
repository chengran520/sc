package com.gxhy.datamonitor.controller;

import java.util.Calendar;
import java.util.Date;
import java.util.GregorianCalendar;
import java.util.List;

import javax.servlet.http.HttpServletRequest;

import org.apache.commons.lang3.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.alibaba.fastjson.JSONObject;
import com.gxhy.base.controller.BaseController;
import com.gxhy.base.model.Log;
import com.gxhy.base.model.RequestModel;
import com.gxhy.base.model.ResponseModel;
import com.gxhy.base.util.DateUtil;
import com.gxhy.base.util.StringUtil;
import com.gxhy.datamonitor.domain.QualityModel;
import com.gxhy.datamonitor.persistence.QualityMapper;
import com.gxhy.datamonitor.service.QualityService;

/**
 * 水质信息
 * @author yb
 *
 */
@SuppressWarnings({ "unchecked", "rawtypes" })
@RestController
@RequestMapping("data_monitor/quality")
public class QualityController extends BaseController{

	@Autowired
	private QualityService qualityService;
	
	
	/**
	 * 获取水质列表
	 * @param model
	 * @param request
	 * @return
	 * @throws Exception
	 */
	@RequestMapping(value = "/getQualityList", method = RequestMethod.GET)
	@Log(operationType = "水质信息",operationName="获取水质列表")
	public Object getQualityList(QualityModel model,HttpServletRequest request) throws Exception{
		JSONObject map = new JSONObject();
		map = InitParams(model);
		RequestInitRanges(map,true,QualityModel.class);
		String stm=request.getParameter("stm");
		if(StringUtils.isNotBlank(stm)){
			Date startTm=DateUtil.getStartToTime(stm);
			Date endTm=DateUtil.getEndToTime(stm);
			map.put("starttime", startTm);
			map.put("endtime", endTm);
		}
		map.put(RequestModel.SQLID,QualityMapper.class.getName() + ".getQualityList");
		List<QualityModel> list = qualityService.selectLists(map);
		return ResponseModel.Success(list);
	}
	
	
	@RequestMapping(value = "/getQuality", method = RequestMethod.GET)
	public Object getQuality(HttpServletRequest request) throws Exception{
		JSONObject map = new JSONObject();
 		Calendar c1 = new GregorianCalendar();
 	    c1.set(Calendar.HOUR_OF_DAY, 0);
 	    c1.set(Calendar.MINUTE, 0);
 	    c1.set(Calendar.SECOND, 0);
 	    Date date=c1.getTime();
 	    map.put("date", date);
 	    System.out.println(date);
 	    Calendar c2 = new GregorianCalendar();
 	    c2.set(Calendar.HOUR_OF_DAY, 23);
 	    c2.set(Calendar.MINUTE, 59);
 	    c2.set(Calendar.SECOND, 59);
 	   Date date2=c2.getTime();
	    map.put("date2", date2);
		map.put(RequestModel.SQLID,QualityMapper.class.getName() + ".getQuality");
		List<QualityModel> list = qualityService.selectLists(map);
		return ResponseModel.Success(list);
	}
	/**
	 * 获取水质列表
	 * @param model
	 * @param request
	 * @return
	 * @throws Exception
	 */
	@RequestMapping(value = "/getQualityListTop7", method = RequestMethod.GET)
	@Log(operationType = "水质信息",operationName="获取水质列表")
	public Object getQualityListTop7(QualityModel model,HttpServletRequest request) throws Exception{
		JSONObject map = new JSONObject();
		map = InitParams(model);
		RequestInitRanges(map,true,QualityModel.class);
		map.put(RequestModel.SQLID,QualityMapper.class.getName() + ".getQualityListTop7");
		List<QualityModel> list = qualityService.selectLists(map);
		return ResponseModel.Success(list);
	}
	/**
	 * 获取最新一条水质数据
	 * @param model
	 * @param request
	 * @return
	 * @throws Exception
	 */
	@RequestMapping(value = "/getQualityObj", method = RequestMethod.GET)
	public Object getQualityObj(QualityModel model,HttpServletRequest request) throws Exception{
		JSONObject map = new JSONObject();
		map.put(RequestModel.SQLID,QualityMapper.class.getName() + ".getQualityObj");
		QualityModel quality = (QualityModel) qualityService.selectOne(map);
		return ResponseModel.Success(quality);
	}
	
   /**
    * 获取水质chart图表数据
    * @param request
    * @return
    */
	@RequestMapping(value = "/echartQuality", method = RequestMethod.GET)
	@Log(operationType = "水质信息",operationName="获取水质chart图表")
	public Object echartQuality(HttpServletRequest request){
		JSONObject map = new JSONObject();
		String quaId = request.getParameter("id");
		String date = request.getParameter("date");
		String sql = "";
		String Table = "yuancheng";
		if(StringUtils.isNotBlank(quaId)){
			if("wt".equals(quaId)){
				sql = "Q.WT";
			}else if("turb".equals(quaId)){
				sql = "Q.TURB";
			}else if("cond".equals(quaId)){
				sql = "Q.COND";
			}else if("ph".equals(quaId)){
				sql = "Q.PH";
			}else if("dox".equals(quaId)){
				sql = "Q.DOX";
			}
		}
		if(StringUtils.isNotBlank(date)){
			Date startTm=DateUtil.getStartToTime(date);
			Date endTm=DateUtil.getEndToTime(date);
			map.put("starttime", startTm);
			map.put("endtime", endTm);
		}
		map.put("table", Table);
		map.put("sql", sql);
		map.put(RequestModel.SQLID,QualityMapper.class.getName() + ".getQuaValList");
		List<QualityModel> zlist = qualityService.selectList(map);
		return ResponseModel.Success(zlist);
	}
	
	
}
