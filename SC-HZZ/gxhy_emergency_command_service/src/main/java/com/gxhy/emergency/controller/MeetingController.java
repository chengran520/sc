package com.gxhy.emergency.controller;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import javax.servlet.http.HttpServletRequest;

import org.apache.commons.lang3.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.alibaba.fastjson.JSONObject;
import com.gxhy.adcd.domain.AdcdModel;
import com.gxhy.adcd.service.AdcdService;
import com.gxhy.base.domain.SysUsers;
import com.gxhy.base.model.RequestModel;
import com.gxhy.base.model.ResponseModel;
import com.gxhy.base.persistence.SysUsersMapper;
import com.gxhy.base.security.util.SecurityUtil;
import com.gxhy.base.util.AdcdUtil;
import com.gxhy.base.util.Constants;
import com.gxhy.base.util.DateUtil;
import com.gxhy.base.util.EhCacheUtils;
import com.gxhy.base.util.SysCacheType;
import com.gxhy.emergency.domain.AdcdTreeModel;
import com.gxhy.emergency.domain.MeetingModel;
import com.gxhy.emergency.persistence.MeetingMapper;
import com.gxhy.emergency.service.MeetingService;

@RestController
@RequestMapping("meeting")
@SuppressWarnings("unchecked")
public class MeetingController {
	
	@Autowired
	private MeetingService  meetingService;
	
	@Autowired
	private AdcdService adcdService;
	
	/**
	 *  ztree加载地区和对应的人
     *
	 * @return
	 * @throws Exception 
	 */

	@RequestMapping(value = "/getMeetingZtree", method = RequestMethod.GET)
	public Object getMeetingZtree(HttpServletRequest request) throws Exception{
		//先从缓存中获取行政区，没有就从库里面取
		List<AdcdTreeModel> listTree = (List<AdcdTreeModel>) EhCacheUtils.get(SysCacheType.CACHADCD, SysCacheType.ADCD_USER);
		if(listTree == null){
			listTree = new ArrayList<AdcdTreeModel>();
			SysUsers user = SecurityUtil.getSessionUser();
			String adcd = user.getUserAddvcd();
			int it = AdcdUtil.getRegionLevel(adcd);
			if(it > 1){
				AdcdTreeModel amodel = new AdcdTreeModel();
				List<AdcdModel> list = adcdService.getAdcdZtree(AdcdUtil.addZeroToAdcd(adcd.substring(0,2),12));
				amodel.setId(list.get(0).getAddvcd());
				amodel.setPid("-1");
				amodel.setName(list.get(0).getAddvnm());
				amodel.setNocheck(true);
				listTree.add(amodel);
			}
			if(it > 2){
				AdcdTreeModel amodel = new AdcdTreeModel();
				List<AdcdModel> list = adcdService.getAdcdZtree(AdcdUtil.addZeroToAdcd(adcd.substring(0,4),12));
				amodel.setId(list.get(0).getAddvcd());
				amodel.setPid(AdcdUtil.addZeroToAdcd(list.get(0).getAddvcd().substring(0,2),12));
				amodel.setName(list.get(0).getAddvnm());
				amodel.setNocheck(true);
				listTree.add(amodel);
			}
			List<AdcdModel> list = adcdService.getAdcdZtree(AdcdUtil.getPrefixAdcd(adcd, false));
			if(list.size() > 0){
				for(int i = 0 ;i<list.size();i++){
					AdcdModel model = list.get(i);
					AdcdTreeModel admodel = new AdcdTreeModel();
					admodel.setId(model.getAddvcd());
					admodel.setName(model.getAddvnm());
					int is = AdcdUtil.getRegionLevel(model.getAddvcd());
					if(is == 1){
						admodel.setPid("-1");
					}else if(is == 2){
						admodel.setPid(AdcdUtil.addZeroToAdcd(model.getAddvcd().substring(0,2),12));
					}else if(is == 3){
						admodel.setPid(AdcdUtil.addZeroToAdcd(model.getAddvcd().substring(0,4),12));
					}else if(is == 4){
						admodel.setPid(AdcdUtil.addZeroToAdcd(model.getAddvcd().substring(0,6),12));
					}else if(is == 5){
						admodel.setPid(AdcdUtil.addZeroToAdcd(model.getAddvcd().substring(0,9),12));
					}
					admodel.setNocheck(true);
					listTree.add(admodel);
				}
				JSONObject map = new JSONObject();
				map.put(RequestModel.SQLID,MeetingMapper.class.getName()+ ".getZtreeUsers");
				List<AdcdTreeModel> listUser=meetingService.selectLists(map);	
				listTree.addAll(listUser);
				EhCacheUtils.put(SysCacheType.CACHADCD, SysCacheType.ADCD_USER,listTree);
			}
		}
		     return ResponseModel.Success(listTree);

	}	
	/**
	 * 申请会议
	 * @param request
	 * @return
	 */
	@RequestMapping(value = "/insertMeeting", method = RequestMethod.POST)
	public Object insertMeeting(HttpServletRequest request){
		JSONObject map = new JSONObject();
		int count=meetingService.insertMeeting(request);
		if( count >0){
			map.put("num",  count);
			map.put( "success", "信息成功！");
			return ResponseModel.Success(map);
		}else{
			map.put( "success", "信息失败！");
			return ResponseModel.Success(map);
		}
    }
	
	/**
	 * 会议列表
	 * @param request
	 * @return
	 */
	@RequestMapping(value = "/getMeetings",  method = RequestMethod.GET)
	public Object getMeetings(String applyTm,String meetingStatus){
		JSONObject map = new JSONObject();
 		if(applyTm!=null&&applyTm!=""){
			Date startTm=DateUtil.getStartToTime(applyTm);
			Date endTm=DateUtil.getEndToTime(applyTm);
			map.put("startTm", startTm);
			map.put("endTm", endTm);	
		}	
		if(meetingStatus!=null&&meetingStatus!=""){
			map.put("meetingStatus", meetingStatus);
		}
		SysUsers user = (SysUsers) SecurityUtil.getSessionAttr(Constants.CURRENT_USER);
		map.put("userId", user.getUserId());
		map.put(RequestModel.SQLID,MeetingMapper.class.getName() + ".getMeetings");
		List<MeetingModel> models=meetingService.selectLists(map);
		List<MeetingModel> list=new ArrayList<MeetingModel>();
		//每次刷新页面的时候去比较当前时间和数据库时间
		for(MeetingModel meeting:models){
			//如果没有状态传入
			if(StringUtils.isBlank(meetingStatus)){
				 list.add(meeting);
			}
			Date startTm=meeting.getMeetingStm();
			Date endTm=meeting.getMeetingEtm();
			int num=0;
			int count=0;
			if(startTm!=null){
				num=DateUtil.compare_date(startTm,new Date());
			}
			if(startTm!=null){
				count=DateUtil.compare_date(endTm, new Date());
			}
			
			map.put("uuid", meeting.getUuid());
			if(num==-1){
				if(!meeting.getMeetingStatus().equals("c")){
					if(count==1){
						map.put("meetingStatus", "b");//进行中				
						if(!meeting.getMeetingStatus().equals("b")){
							meeting.setMeetingStatus("b");
							map.put(RequestModel.SQLID,MeetingMapper.class.getName() + ".updateMeeting");
							int n=meetingService.update(map);
						}
					}else if(count==-1){
						map.put("meetingStatus", "c");//已结束
						if(!meeting.getMeetingStatus().equals("c")){
							meeting.setMeetingStatus("c");
							map.put(RequestModel.SQLID,MeetingMapper.class.getName() + ".updateMeeting");
							int n=meetingService.update(map);
						}
						meeting.setMeetingStatus("c");
					}else{}
				}
			}
		  if(StringUtils.isNotBlank(meetingStatus))	{
			  if(meetingStatus.equals("a")){
					if(meeting.getMeetingStatus().equals("a")){//未开始
						list.add(meeting);
					}
				 }
			if(meetingStatus.equals("b")){
					if(meeting.getMeetingStatus().equals("b")){//进行中
						list.add(meeting);
					}
			}
			if(meetingStatus.equals("c")){
				if(meeting.getMeetingStatus().equals("c")){//进行中
					list.add(meeting);
				}
			}
		  }	  
		}
		 
		return ResponseModel.Success(list);		
    }
	
	/**
	 * 更新会议状态
	 * @param request
	 * @return
	 */
	@RequestMapping(value = "/updateMeeting", method = RequestMethod.POST)
	public Object updateMeeting(HttpServletRequest request,String uuid){		
		JSONObject map = new JSONObject();
		map.put("uuid", uuid);
		map.put("meetingStatus", "c");
		map.put(RequestModel.SQLID,MeetingMapper.class.getName() + ".updateMeeting");
		int count=meetingService.update(map);
		if( count >0){
			map.put( "success", "信息成功！");
			return ResponseModel.Success(map);
		}else{
			map.put( "success", "信息失败！");
			return ResponseModel.Success(map);
		}
    }
	

	/**
	 * 获取参会人员
	 * @param request
	 * @return
	 */
	@RequestMapping(value = "/getChMens", method = RequestMethod.POST)
	public Object getChMens(HttpServletRequest request,String uuid){		
		JSONObject map = new JSONObject();
		map.put("uuid", uuid);
		map.put(RequestModel.SQLID,MeetingMapper.class.getName() + ".getChMens");
		MeetingModel model=(MeetingModel) meetingService.selectOne(map);
		String users=model.getParticipants();
		String[] userIds=users.split(",");
		List<String> userModels=new ArrayList<String>();
		for(int i=0;i<userIds.length;i++){
			map.put("userId", userIds[i]);
			map.put(RequestModel.SQLID,SysUsersMapper.class.getName() + ".getUserName");
			SysUsers usermodel=(SysUsers) meetingService.selectOne(map);
			String userName=usermodel.getUserName();
			userModels.add(userName);
		}
		map.put( "userModels", userModels);
		return ResponseModel.Success(map);
    }
	
}
