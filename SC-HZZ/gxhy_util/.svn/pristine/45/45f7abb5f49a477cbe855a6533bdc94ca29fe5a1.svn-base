package com.gxhy.base.service;

import java.util.Date;
import java.util.UUID;

import org.springframework.stereotype.Service;

import com.alibaba.fastjson.JSONObject;
import com.gxhy.base.model.LogModel;
import com.gxhy.base.model.RequestModel;
import com.gxhy.base.persistence.LogMapper;

@SuppressWarnings("rawtypes")
@Service
public class LogService extends BaseService{
	
	public void insertLog(LogModel model){
		JSONObject map = new JSONObject();
	    map.put("uuid",UUID.randomUUID().toString().replace("-", ""));
	    map.put("method",model.getMethod());
	    map.put("requestIp", model.getRequestIp());
	    map.put("createBy", model.getCreateBy());
	    map.put("createDate", new Date());
	    map.put("logLevel", model.getLogLevel());
	    map.put("logType", model.getLogType());
	    map.put("logClass", model.getLogClass());
	    map.put("operContent", model.getOperContent());
	    map.put("logException", model.getLogException());
	    map.put(RequestModel.SQLID,LogMapper.class.getName() + ".insertLog");
	    this.insert(map);
	}
}
