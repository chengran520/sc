package com.gxhy.routine.controller;
import java.util.Date;
import java.util.List;
import java.util.UUID;

import javax.servlet.http.HttpServletRequest;

import org.apache.commons.lang3.StringUtils;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.alibaba.fastjson.JSONObject;
import com.gxhy.base.controller.BaseController;
import com.gxhy.base.domain.SysUsers;
import com.gxhy.base.model.Log;
import com.gxhy.base.model.RequestModel;
import com.gxhy.base.model.ResponseModel;
import com.gxhy.base.security.util.SecurityUtil;
import com.gxhy.base.util.AdcdUtil;
import com.gxhy.base.util.Constants;
import com.gxhy.base.util.DateUtil;
import com.gxhy.base.util.StringUtil;
import com.gxhy.base.webmodel.QueryModel;
import com.gxhy.routine.domain.MeritPerfModel;
import com.gxhy.routine.domain.MsgInfoModel;
import com.gxhy.routine.domain.RiverInfoModel;
import com.gxhy.routine.domain.RvUserModel;
import com.gxhy.routine.persistence.MeritPerfMapper;
import com.gxhy.routine.service.MeritPerfService;
/**
 * 绩效考核
 * @author yb
 * @2017年8月2日上午10:13:52   
 * @CopyRight gxhy
 */
@SuppressWarnings({"unchecked","rawtypes"})
@RestController
@RequestMapping("merit/perf")
public class MeritPerfController extends  BaseController{
	
	private static final Logger logger = LoggerFactory.getLogger(MeritPerfController.class);
	@Autowired
	private MeritPerfService meritService;
	
	
	/**
	 * 曝光台列表
	 * @param request
	 * @param model
	 * @return
	 * @throws Exception 
	 */
	@RequestMapping(value = "/getMeritList", method = RequestMethod.GET)
	@Log(operationType = "绩效考核",operationName="绩效考核列表")
	public Object getMeritList(HttpServletRequest request,QueryModel model) throws Exception{
		JSONObject map = new JSONObject();
		map = InitParams(model);
		RequestInitRanges(map,true,QueryModel.class);
		String createTm=request.getParameter("createTm");
		if(StringUtil.isNotBlank(createTm)){
			Date start=DateUtil.getStartToTime(createTm);
			Date end=DateUtil.getEndToTime(createTm);
			map.put("start", start);
			map.put("end",end);
		}
		SysUsers user = (SysUsers) SecurityUtil.getSessionAttr(Constants.CURRENT_USER);
		if(user!=null){
			map.put("userId", user.getUserId());
		}
		
		String meritNm=request.getParameter("meritNm");
		if(StringUtils.isNotBlank(meritNm)){
			map.put("meritNm", meritNm.trim());
		}
		map.put(RequestModel.SQLID,MeritPerfMapper.class.getName() + ".getMeritList");
		List<MeritPerfModel> page=meritService.selectLists(map);
		logger.info("返回集合成功");
		return ResponseModel.Success(page);
	}
	/**
	 * 申请绩效考核
	 * @param request
	 * @param model
	 * @return
	 */
	@RequestMapping(value = "/insertMerit", method = RequestMethod.POST)
	@Log(operationType = "绩效考核",operationName="申请绩效")
	public  Object insertMerit(HttpServletRequest request,MeritPerfModel model){
		SysUsers user = (SysUsers) SecurityUtil.getSessionAttr(Constants.CURRENT_USER);
		JSONObject map = new JSONObject();
		int num=0;
		map.put("uuid", model.getUuid());
		map.put("creatTm", new Date());//创建时间
		String meritTm=request.getParameter("meritTm");
		map.put("meritTm",DateUtil.convertStringToDate(meritTm));//申请绩效时间
		map.put("solvePrm",model.getSolvePrm());//已解决问题
		map.put("NSolvePrm", model.getNSolvePrm());//未解决问	
		map.put("creatTm", new Date());
		map.put("explain", model.getExplain());	
		//如果是打分列表,则不进if
		if(StringUtils.isBlank(model.getUuid())){
			String rvCd = model.getRvCd();
			String rvNm=model.getRvNm();
			map.put("rvcd", rvCd);//河流编码
			map.put("rvnm", rvNm);//河流名称
			String rvUserId = model.getRvUserId();
			map.put("rvUserId", rvUserId);//上报河长
			map.put("addvcd", user.getUserAddvcd());
			map.put("adcdNm", AdcdUtil.getAdnm(model.getAdcd()));//所属行政名称
    		map.put("createId",user.getUserId());//申请人
    		map.put("meritNm", model.getMeritNm());//绩效名称
    		map.put("meritStatus", "0");
			map.put("uuid", UUID.randomUUID().toString().replace("-", ""));
			map.put(RequestModel.SQLID,MeritPerfMapper.class.getName() + ".insertMerit");
			num = meritService.insert(map);	
		}else {
			map.put("updateTm", new Date());
			int rcxcScore=model.getRcxcScore();
			int gztsScore=model.getGztsScore();
			int jlfScore=model.getJlfScore();
			int sjclvScore=model.getSjclvScore();
			int szbhScore=model.getSzbhScore();
			int xcjyScore=model.getXcjyScore();
			int ldzhScore=model.getLdzhScore();
			map.put("rcxcScore",rcxcScore);
			map.put("gztsScore",gztsScore);
			map.put("jlfScore",jlfScore);
			map.put("sjclvScore",sjclvScore);
			map.put("szbhScore",szbhScore);
			map.put("xcjyScore",xcjyScore);
			map.put("ldzhScore",ldzhScore);
			int totalScore=rcxcScore+ gztsScore+jlfScore+sjclvScore+szbhScore+xcjyScore+ldzhScore;
			map.put("totalScore",totalScore);
			map.put("assess",model.getAssess());
			map.put("meritStatus", "1");
			map.put(RequestModel.SQLID,MeritPerfMapper.class.getName() + ".updateMerit");
			num = meritService.update(map);
		}
    	if(num == 1){
			return ResponseModel.Success("保存成功！");
		}else{
			return ResponseModel.Success("保存失败！");
	    }
    }
	
	/**
	 * 查询绩效
	 * @param request
	 * @param uuid
	 * @return
	 */
	
	@RequestMapping(value = "/getMeritDetail", method = RequestMethod.POST)
	public  Object getMeritDetail(HttpServletRequest request){
		JSONObject map = new JSONObject();
		map.put("uuid", request.getParameter("uuid"));
		map.put(RequestModel.SQLID,MeritPerfMapper.class.getName() + ".getMeritDetail");
		MeritPerfModel model=(MeritPerfModel) meritService.selectOne(map);
		return ResponseModel.Success(model);	
    }
	
	/**
	 * 删除绩效
	 * @param request
	 * @param uuid
	 * @return
	 */
	@RequestMapping(value = "/deleteMerit", method = RequestMethod.POST)
	@Log(operationType = "绩效考核",operationName="删除绩效")
	public  Object deleteMerit(HttpServletRequest request){
		JSONObject map = new JSONObject();
		map.put("uuid", request.getParameter("uuid"));
		map.put(RequestModel.SQLID,MeritPerfMapper.class.getName() + ".deleteMerit");
		int num=meritService.delete(map);
		if(num == 1){
			return ResponseModel.Success("删除成功！");
		}else{
			return ResponseModel.Success("删除失败！");
	    }
    }
	
	/**
	 *领导打分列表
	 * @param request
	 * @param uuid
	 * @return
	 */
	@RequestMapping(value = "/getLeaderGrades", method = RequestMethod.GET)
	@Log(operationType = "绩效考核",operationName="领导打分")
	public  Object getLeaderGrades(HttpServletRequest request,QueryModel model){
		JSONObject map = new JSONObject();
		List<MeritPerfModel> page=null;
		try {
			map = InitParams(model);
			RequestInitRanges(map,true,QueryModel.class);
			SysUsers user = (SysUsers) SecurityUtil.getSessionAttr(Constants.CURRENT_USER);
			if(user!=null){
				map.put("userId", user.getUserId());
			}  
			map.put("meritStatus", "0");
			map.put("keyword", request.getParameter("keyword"));
			map.put(RequestModel.SQLID,MeritPerfMapper.class.getName() + ".getLeaderGrades");
			page=meritService.selectLists(map);
		} catch (Exception e) {			
			e.printStackTrace();
		}
		logger.info("返回领导打分列表成功");
		return ResponseModel.Success(page);
    }
	
	/**
	 *我的排名列表
	 * @param request
	 * @param uuid
	 * @return
	 */
	@RequestMapping(value = "/getMyRankList", method = RequestMethod.GET)
	@Log(operationType = "绩效考核",operationName="我的排名")
	public  Object getMyRankList(HttpServletRequest request){
		JSONObject map = new JSONObject();
		SysUsers user = (SysUsers) SecurityUtil.getSessionAttr(Constants.CURRENT_USER);
		if(user!=null){
			map.put("userId", user.getUserId());
		}  
		map.put("keyword", request.getParameter("keyword"));
		map.put(RequestModel.SQLID,MeritPerfMapper.class.getName() + ".getMyRankList");
		List<MeritPerfModel> page=meritService.selectLists(map);
		logger.info("返回我的排名列表成功");
		return ResponseModel.Success(page);
    }
	
	/**
	 *下级排名列表
	 * @param request
	 * @param uuid
	 * @return
	 */
	@RequestMapping(value = "/getSdtRankList", method = RequestMethod.GET)
	public  Object getSdtRankList(HttpServletRequest request){
		JSONObject map = new JSONObject();
		map.put("createNm", request.getParameter("createNm"));
		SysUsers user = (SysUsers) SecurityUtil.getSessionAttr(Constants.CURRENT_USER);
	    map.put("addvcd", AdcdUtil.getPrefixAdcd(user.getUserAddvcd(), false));
        map.put("userId", user.getUserId());
		map.put("meritNm", request.getParameter("meritNm"));
		 //县级转交乡级的//或者乡镇管理所的
        int job=Integer.parseInt(user.getUserJob());
        if(job!=0){
        	if(job<=7||job==14){
        		int[] arr={5,6,7,8,13,14};
    	    	map.put("arr", arr);
    	    }
    	    //乡级转交村级的河长//巡河员
    	    else if(job==8||job==13){
    	    	int[] arr={9,11};
    	    	map.put("arr", arr);
    	    
    	    }else{
    	    	return ResponseModel.Success(null);
    	    }
        	map.put(RequestModel.SQLID,MeritPerfMapper.class.getName() + ".getSdtRankList");
        }else{
	    	map.put(RequestModel.SQLID,MeritPerfMapper.class.getName() + ".getSdtRankList2");
	    }
		
	
		List<MeritPerfModel> page=meritService.selectLists(map);
		logger.info("返回下级排名列表成功");
		return ResponseModel.Success(page);
    }
	
	/**
	 * 上级河长,查询所有河长
	 * @return
	 */
	@RequestMapping(value = "selectRiverNmList" , method = RequestMethod.GET)
	public Object selectRiverNmList (HttpServletRequest request){
		JSONObject map = new JSONObject();
		SysUsers user = (SysUsers) SecurityUtil.getSessionAttr(Constants.CURRENT_USER);
		if(user!=null){
			int job=Integer.parseInt(user.getUserJob());
		    System.out.println(job+"44444");
			map.put("userId", user.getUserId());
			map.put("addvcd",AdcdUtil.getPrefixAdcd(user.getUserAddvcd(), false));
			//如果是巡河员或者村河长/保洁员巡河的话，上报乡河长或者乡镇管理所的人员
			 if(job==11||job==9||job==10){
				 int arr[]={8,13};
				 map.put("arr", arr);	
				 map.put(RequestModel.SQLID,MeritPerfMapper.class.getName() + ".getBusineUser");
			 }
			//如果是乡河长，上报县河长办或者县河长
			 else if(job==8||job==13){
				 int arr[]={14,3,4,5,6,7};
				 map.put("arr", arr);
				 map.put(RequestModel.SQLID,MeritPerfMapper.class.getName() + ".getBusineUser2");
			 }else{
				 map.put(RequestModel.SQLID,MeritPerfMapper.class.getName() + ".getBusineUser3"); 
			 }
			
		}  
		List<RvUserModel> users = meritService.selectLists(map);
		logger.info("返回所有河长信息列表成功");
		return ResponseModel.Success(users);
	}
	
	
	/**
	 * 申请绩效,河流信息
	 * @return
	 */
	@RequestMapping(value = "selectRiverInfoList" , method = RequestMethod.GET)
	public Object selectRiverInfoList (HttpServletRequest request){
		JSONObject map = new JSONObject();
		map.put(RequestModel.SQLID,MeritPerfMapper.class.getName() + ".selectRiverInfoList");
		List<RiverInfoModel> riverList = meritService.selectLists(map);
		logger.info("返回河流信息成功");
		return ResponseModel.Success(riverList);
	}
	
}