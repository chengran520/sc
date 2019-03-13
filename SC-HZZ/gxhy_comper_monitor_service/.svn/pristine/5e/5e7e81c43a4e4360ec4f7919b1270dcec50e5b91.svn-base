package com.gxhy.monitor.controller;
import java.util.ArrayList;
import java.util.List;
import javax.servlet.http.HttpServletRequest;
import org.apache.commons.lang3.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import com.gxhy.adcd.domain.AdcdModel;
import com.gxhy.base.controller.BaseController;
import com.gxhy.base.domain.SysUsers;
import com.gxhy.base.model.Log;
import com.gxhy.base.model.ResponseModel;
import com.gxhy.base.security.util.SecurityUtil;
import com.gxhy.base.util.AdcdUtil;
import com.gxhy.iot.river.StRiverB;
import com.gxhy.iot.river.StRvUser;
import com.gxhy.monitor.domain.IotWaterQuaDesModel;
import com.gxhy.monitor.domain.IotWaterQualityModel;
import com.gxhy.monitor.service.DataMonitorSerivce;

/**
 *综合展现数据管理
 * @author yb
 * @2017年8月15日下午1:51:17   
 * @CopyRight gxhy
 */
@RestController
@RequestMapping("data/monitor")
@SuppressWarnings("unchecked")
public class DataMonitorController extends BaseController{
	
	@Autowired
	DataMonitorSerivce monitorSerivce;
	
	/**
	 * 获取河道基础信息
	 * @return
	 * @throws Exception 
	 */
	@RequestMapping(value = "/riverDataInfo", method = RequestMethod.GET)
	@Log(operationType = "综合展现",operationName="获取河道基础信息")
	public Object getRiverDataInfo(HttpServletRequest request,StRiverB model) throws Exception{
		SysUsers user = (SysUsers) SecurityUtil.getSessionAttr("user");
		if(user != null){			
			List<StRiverB> list =  monitorSerivce.getRiverDataInfo(model.getRvNm(),user);			
			return ResponseModel.Success(list);
		}else{
			return ResponseModel.Success("用户不存在！");
		}
	}
	
	/**
	 * 获取当前用户下所有行政区
	 * @return
	 */
	@RequestMapping(value = "/getUserAdcdRiver", method = RequestMethod.GET)
	@Log(operationType = "综合展现",operationName="获取当前用户下所有行政区")
	public Object getUserAdcdRiver(HttpServletRequest reques){
		SysUsers user = (SysUsers) SecurityUtil.getSessionAttr("user");
		List<AdcdModel> list = new ArrayList<AdcdModel>();
		if(user != null){
			list = AdcdUtil.getChildAllAdnm(user.getUserAddvcd());
		}
		return ResponseModel.Success(list);
	}
	
	/**
	 * 获取对应河流下所有的河长信息
	 * @param reques
	 * @return
	 */
	@RequestMapping(value = "/getAdcdRiverByRvUser", method = RequestMethod.GET)
	public Object getAdcdRiverByRvUser(HttpServletRequest reques){
		String rvCd = reques.getParameter("rvCd");
		if(StringUtils.isNotBlank(rvCd)){
			List<StRvUser> list =  monitorSerivce.getAdcdRiverByRvUser(rvCd);
			return ResponseModel.Success(list);
		}
		return ResponseModel.Success("");
	}
	
	/**
	 * 获取河段水质情况
	 * @param request
	 * @param stcd 河段编码
	 * @return
	 */
	@RequestMapping(value = "/getRvierQuality", method = RequestMethod.GET)
	@Log(operationType = "综合展现",operationName="获取河段水质情况")
	public Object getRvierQuality(HttpServletRequest request,String stcd){
		
		List<IotWaterQualityModel> list = monitorSerivce.getRvierQuality(stcd);
		
		return ResponseModel.Success(list);
	}
	
	/**
	 * 水质类别说明-水质标准值
	 * @return
	 */
	@RequestMapping(value = "/getWaterQuaDesc", method = RequestMethod.GET)
	public Object getWaterQuaDesc(){
		
		List<IotWaterQuaDesModel> list = monitorSerivce.getWaterQuaDesc();
		
		return ResponseModel.Success(list);
	}
	

}
