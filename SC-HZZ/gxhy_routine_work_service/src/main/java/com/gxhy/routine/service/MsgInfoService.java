package com.gxhy.routine.service;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.UUID;

import org.springframework.mail.javamail.JavaMailSenderImpl;
import org.springframework.stereotype.Service;

import com.alibaba.fastjson.JSONObject;
import com.gxhy.base.domain.SysUsers;
import com.gxhy.base.model.RequestModel;
import com.gxhy.base.service.BaseService;
import com.gxhy.routine.domain.MsgInfoModel;
import com.gxhy.routine.persistence.MeritPerfMapper;
import com.gxhy.routine.persistence.MsgInfoMapper;
import com.gxhy.routine.webmodel.ResultReceModel;

@SuppressWarnings({"rawtypes","unchecked"})
@Service
public class MsgInfoService extends BaseService{
	
	/**
	 * 发送消息
	 * @param model
	 * @return
	 */
	public int insertMsgInfo(MsgInfoModel model,SysUsers user){
		JSONObject map = new JSONObject();
		String msgType=model.getMsgType();
		String id = UUID.randomUUID().toString().replace("-", "");
		map.put("id",id);
		map.put("msgContent", model.getMsgContent());
		map.put("sendTm", new Date());
		map.put("sendUser",user.getUserName());
		map.put("sendUserId",user.getUserId());
		map.put("msgType", msgType);
		map.put("newsType",model.getNewsType());
		map.put("msgTitle", model.getMsgTitle());
		map.put("reUsers", model.getReceiveUser());
		String[] receiverUsersIds=model.getReceiveUserId().split(",");//接收人员id
		String[] receiveUsers=model.getReceiveUser().split(",");//接收人员名称
		map.put(RequestModel.SQLID, MsgInfoMapper.class.getName() + ".insertMsg");
		int num = this.insert(map);
	   
    	//批量
    	List<ResultReceModel>  recevies=new ArrayList<ResultReceModel>();
        for(int i=0;i<receiverUsersIds.length;i++){
        	ResultReceModel us=new ResultReceModel();
        	us.setReceiveUserId(receiverUsersIds[i]);
        	us.setReceiveUser(receiveUsers[i]);
        	us.setMsgId(id);
        	us.setIsStatus(0);
        	us.setReceivceTm( new Date());
        	recevies.add(us);   
        }	
        map.put("list", recevies);
    	map.put(RequestModel.SQLID, MsgInfoMapper.class.getName() + ".insertReceive");
    	this.insert(map);
		return num;
	}
	
}
