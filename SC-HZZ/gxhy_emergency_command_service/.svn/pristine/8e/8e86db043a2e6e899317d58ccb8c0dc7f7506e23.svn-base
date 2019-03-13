package com.gxhy.emergency.service;
import java.util.Date;
import java.util.HashMap;
import java.util.Map;
import java.util.UUID;

import javax.servlet.http.HttpServletRequest;

import org.apache.commons.lang3.StringUtils;
import org.junit.runner.Request;
import org.springframework.stereotype.Service;

import com.gxhy.base.domain.SysUsers;
import com.gxhy.base.model.RequestModel;
import com.gxhy.base.security.util.SecurityUtil;
import com.gxhy.base.service.BaseService;
import com.gxhy.base.util.Constants;
import com.gxhy.base.util.DateUtil;
import com.gxhy.emergency.domain.MeetingModel;
import com.gxhy.emergency.persistence.MeetingMapper;

@Service
@SuppressWarnings({ "unchecked", "rawtypes" })
public class MeetingService extends BaseService{
	/**
	 * 增加会议
	 * @param model
	 * @return
	 */
	public int insertMeeting(HttpServletRequest  request) {
		int num=0;
		SysUsers user = (SysUsers) SecurityUtil.getSessionAttr(Constants.CURRENT_USER);
		Map<String,Object> map =new HashMap<String,Object>();
		map.put("meetingName",request.getParameter("meetingName"));
	    map.put("venue", request.getParameter("venue"));
		map.put("applyTm",new Date());
		map.put("applyMen", user.getUserId());
		Date startTm=DateUtil.convertStringToDate(request.getParameter("meetingStm"));
		Date endTm=DateUtil.convertStringToDate(request.getParameter("meetingEtm"));
		map.put("meetingStm",startTm);
     	map.put("meetingEtm",endTm);
        map.put("meetingStatus", "a");//表示未开始
     	map.put("paticipants",request.getParameter("paticipants"));
    	if(StringUtils.isBlank(request.getParameter("uuid"))){			
			map.put("uuid", UUID.randomUUID().toString().replace("-", ""));
			map.put(RequestModel.SQLID,MeetingMapper.class.getName() + ".insertMeeting");
			num = this.insert(map);
		}
		return num;
	}

}
