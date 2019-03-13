package com.gxhy.hydro.controller;
import java.text.ParseException;
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
import com.gxhy.base.util.AdcdUtil;
import com.gxhy.base.util.DateUtil;
import com.gxhy.hydro.persistence.PptnMapper;
import com.gxhy.hydro.service.PptnService;
import com.gxhy.hydro.webmodel.PptnResultModel;
import com.gxhy.hydro.webmodel.QueryReadingModel;
import com.gxhy.hydro.webmodel.ResultPptnInfoModel;
/**
 * 雨情信息
 * @author yb
 * @2017年9月20日上午8:54:52   
 * @CopyRight gxhy
 */
@SuppressWarnings({ "unchecked", "rawtypes" })
@RestController
@RequestMapping("hydro/pptn")
public class PptnController extends BaseController{
	
	@Autowired
	private PptnService pptnService;
	
	/**
	 * 获取最新雨情信息
	 * @param request
	 * @return
	 */
	@RequestMapping(value = "/newPptnInfo", method = RequestMethod.GET)
	@Log(operationType = "雨情信息",operationName="获取最新雨情")
	public Object getNewRiverInfo(HttpServletRequest request) {
		String stcd = request.getParameter("stcd");
		List<ResultPptnInfoModel> list = pptnService.getNewPptnInfo(stcd);		
		return ResponseModel.Success(list.size() > 0 ? list.get(0) : "");
	}
	
	/**
	 * 根据条件查询所有的河流信息
	 * @throws Exception
	 */
	@RequestMapping(value = "/getPPtnList", method = RequestMethod.GET)
	@Log(operationType = "雨情信息",operationName="查询河流信息")
	public Object getRains(QueryReadingModel model,HttpServletRequest request) throws Exception {
		JSONObject map = new JSONObject();
		map = InitParams(model);
		RequestInitRanges(map,true,QueryReadingModel.class);
		SysUsers user = SecurityUtil.getSessionUser();
		map.put(RequestModel.SQLID, PptnMapper.class.getName()+ ".getRains");
		map.put("keyword", model.getKeyword());// 关键字
		if(null == model.getStm()){
			model.setStm(DateUtil.convertDateToString(DateUtil.getNextDay(new Date()), 10));// 开始时间
		}
		if(null == model.getEtm()){		
			model.setEtm(DateUtil.convertDateToString(new Date(), 10));
		}
		if(user != null && StringUtils.isNotBlank(user.getUserAddvcd())){
			map.put("adcd", AdcdUtil.getPrefixAdcd(user.getUserAddvcd(),true));
		}
		Page page = pptnService.selectList(map);
		return ResponseModel.Success(page);
	}
	
	/**
	 * 获取图表
	 * @throws ParseException 
	 */
	@RequestMapping(value = "/getChartRain", method = RequestMethod.GET)
	public Object getChartRain(HttpServletRequest request){
		JSONObject map = new JSONObject();
		// 默认采用第一条数据
		String stcd = request.getParameter("stcd");
		String tm = request.getParameter("tm");
		map.put("stcd", stcd);		
		if(StringUtils.isNotBlank(tm)){
			Date date = new Date(Long.valueOf(tm));
			String etm = DateUtil.sdf.format(date);
			String stm = DateUtil.sdf.format(DateUtil.getNextDay(date));
			map.put("stm", stm);
			map.put("etm", etm);
		}
		map.put(RequestModel.SQLID, PptnMapper.class.getName()+ ".getDyp");		
		List<ResultPptnInfoModel> dypList = pptnService.selectLists(map);
		return ResponseModel.Success(dypList);
	}
	
	
	
	/**
	 * 导出excel表
	 * @param model
	 * @param request
	 * @return
	 * @throws Exception
	 */
     
     @RequestMapping(value = "/export", method = RequestMethod.POST)
     @Log(operationType = "雨情",operationName="导出excel表")
 	public void export(QueryReadingModel model, HttpServletRequest request,HttpServletResponse response) throws Exception {
    	 Map<String, List<ResultPptnInfoModel>> map_data = new HashMap<String, List<ResultPptnInfoModel>>();
 		JSONObject map = new JSONObject();
 		map = InitParams(model);
 		map.put(RequestModel.SQLID, PptnMapper.class.getName()+ ".getRains");
 		map.put("keyword", model.getKeyword());// 关键字
 		map.put("startTime", model.getStm());// 开始时间
 		map.put("endTime", model.getEtm());// 结束时间
 		List<ResultPptnInfoModel> list= pptnService.selectLists(map);
 		for (ResultPptnInfoModel rpm : list) {
 			rpm.setStnm(rpm.getStnm().trim());
 			rpm.setRvnm(rpm.getRvnm().trim());
 			SimpleDateFormat df = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
 			if(rpm.getTm()!=null){
 				rpm.setDataTm(df.format(rpm.getTm()));
 			}else{
 				rpm.setDataTm(null);
 			}			
 			if(rpm.getDap()!=null){
 				rpm.setDapFormat(String.format("%.3f",rpm.getDap()));
 			}else{
 				rpm.setDapFormat(null);
 			}			
		}
 		map_data.put("list", list);
 		String title="雨情信息汇总表";
 		String xmlName="rainInfo";
 		JxlsUtils.export(map_data, title, xmlName,request, response);
     } 
     
     /**
 	 * 获取图表
 	 * @throws ParseException 
 	 */
 	@RequestMapping(value = "/getRainData", method = RequestMethod.GET)
 	public Object getRainData(HttpServletRequest request){
 		JSONObject map = new JSONObject();			
 		Date date=new Date();//开始时间
		String etm = DateUtil.sdf.format(date);
		String stm = DateUtil.sdf.format(DateUtil.getNextDay(date));
		map.put("stm", stm);
 		map.put("etm", etm);
 		map.put(RequestModel.SQLID, PptnMapper.class.getName()+ ".getRainData");		
 		List<PptnResultModel> list = pptnService.selectLists(map);
 		int num = 0;
 		int count = 0;
 		for (int i = 0; i < list.size(); i++) {
 			num ++;
			if(i+1 < list.size() && !list.get(i).getStcd().equals(list.get(i+1).getStcd())){
				list.get(count).setNum(num);
				count = i+1;
				num = 0;
			}else{
				list.get(count).setNum(num); 
			}
		}
 		return ResponseModel.Success(list);
 	}

}
