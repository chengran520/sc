package com.gxhy.datamonitor.controller;
import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.alibaba.fastjson.JSONObject;
import com.github.pagehelper.Page;
import com.gxhy.base.controller.BaseController;
import com.gxhy.base.model.RequestModel;
import com.gxhy.base.model.ResponseModel;
import com.gxhy.datamonitor.domain.BasicSiteModel;
import com.gxhy.datamonitor.persistence.BasicSiteMapper;
import com.gxhy.datamonitor.service.BasicSiteService;
import com.gxhy.datamonitor.webmodel.SiteQueryModel;


/**
 * 测站基础信息
 * @author yb
 *
 */
@SuppressWarnings({ "unchecked", "rawtypes" })
@RestController
@RequestMapping("basicSite/work")
public class BasicSiteController extends BaseController{
    
	@Autowired
	private BasicSiteService basicSiteService;
	
	/**
	 * 获取所有的测站
	 * @param request
	 * @return
	 * @throws Exception
	 */
	@RequestMapping(value = "/getBasicSiteList", method = RequestMethod.GET)
	public  Object getBasicSiteList(SiteQueryModel  model,HttpServletRequest request) throws Exception {
		JSONObject map = new JSONObject();
		map = InitParams(model);
		RequestInitRanges(map,true,BasicSiteModel.class);
		map.put("sttp", model.getSttp());
		map.put("stcd", model.getStcd());
		map.put(RequestModel.SQLID, BasicSiteMapper.class.getName()+ ".getBasicSiteList");
		Page page=basicSiteService.selectList(map);
		return ResponseModel.Success(page);
	}

	/**
	 * 新增测站
	 * @param request
	 * @return
	 * @throws Exception
	 */
	@RequestMapping(value = "/saveOrUpBasicSite", method = RequestMethod.POST)
	public  Object saveOrUpBasicSite(BasicSiteModel model,HttpServletRequest request) throws Exception {
		JSONObject map = new JSONObject();
		map.put("stnm",model.getStnm());
		map.put("rvnm",model.getRvnm());
		map.put("hnnm",model.getHnnm());
		map.put("bsnm",model.getBsnm());
		map.put("lgtd",model.getLgtd());
		map.put("lttd",model.getLttd());
		map.put("stlc",model.getStlc());
		map.put("sttp",model.getSttp());
		String addvcd1=request.getParameter("addvcd1");
		String addvcd2=request.getParameter("addvcd2");
        String addvcd3=request.getParameter("addvcd3");
		//如果用户的省市县都不为空
     	if(addvcd1!=null && (addvcd2!=null&&!addvcd2.equals("-1"))&& (addvcd3!=null&&!addvcd3.equals("-1"))){
     		map.put("addvcd",addvcd3);
     	}
     	//如果用户的省市不为空，市不为空，县为空
     	else if(addvcd1!=null&&(addvcd2!=null&&!addvcd2.equals("-1"))&& (addvcd3.equals("-1"))){
     		map.put("addvcd",addvcd2);
     	}
     	//如果用户的省不为空，市为空，县为空
     	else if(addvcd1!=null&&(addvcd2.equals("-1"))&& (addvcd3.equals("-1"))){
     		map.put("addvcd",addvcd1);
     	}
		map.put("dtmnm",model.getDtmnm());
		map.put("dtmel",model.getDtmel());
		map.put("mdpr",model.getMdpr());
		map.put("frgrd",model.getFrgrd());
		map.put("edfrym",model.getEdfrym());
		map.put("bgfrym",model.getBgfrym());
		map.put("atcunit",model.getAtcunit());
		map.put("admauth",model.getAdmauth());
		map.put("locality",model.getLocality());
		map.put("stbk",model.getStbk());
		map.put("stazt",model.getStazt());
		map.put("dstrvm",model.getDstrvm());
		map.put("drna",model.getDrna());
		map.put("phcd",model.getPhcd());
		map.put("usfl",model.getUsfl());
		map.put("comments",model.getComments());		
		map.put("stcd",model.getStcd());
    	if(model.getFollow() == 0){
    		map.put(RequestModel.SQLID,BasicSiteMapper.class.getName() + ".saveBasicSite");
    		basicSiteService.insert(map);	
			return ResponseModel.Success("保存成功！");
		}else{
			map.put("addvcd",model.getAddvcd());
			map.put(RequestModel.SQLID,BasicSiteMapper.class.getName() + ".updateBasicSite");
    		basicSiteService.insert(map);	
			return ResponseModel.Success("修改成功！");
		}
	}

	
	/**
	 * 删除测站
	 * @param request
	 * @return
	 * @throws Exception
	 */
	@RequestMapping(value = "/deleteBasicSite", method = RequestMethod.POST)
	public  Object deleteBasicSite(HttpServletRequest request,String stcd){
		JSONObject map = new JSONObject();
		map.put("stcd", request.getParameter("stcd"));
		map.put(RequestModel.SQLID, BasicSiteMapper.class.getName()+ ".deleteBasicSite");
		int num=basicSiteService.delete(map);
		return ResponseModel.Success(num);
	}
	
	/**
	 * 获取基础测站详情
	 * @param request
	 * @return
	 * @throws Exception
	 */
	@RequestMapping(value = "/getSiteById", method = RequestMethod.GET)
	public  Object getSiteById(HttpServletRequest request,String stcd){
		JSONObject map = new JSONObject();
		map.put("stcd", request.getParameter("stcd"));
		map.put(RequestModel.SQLID, BasicSiteMapper.class.getName()+ ".getSiteById");
		BasicSiteModel model=(BasicSiteModel) basicSiteService.selectOne(map);
		return ResponseModel.Success(model);
	}
	
	
}
