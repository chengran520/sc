package com.gxhy.monitor.service;
import java.util.Date;
import java.util.List;

import org.springframework.stereotype.Service;

import com.alibaba.fastjson.JSONObject;
import com.gxhy.base.model.RequestModel;
import com.gxhy.base.service.BaseService;
import com.gxhy.monitor.domain.IotRiverBuildModel;
import com.gxhy.monitor.persistence.IotRiverBuildMapper;
@Service
public class IotRiverBuildService  extends BaseService{

	public String selectBuild(String uuid) {
		JSONObject map = new JSONObject();
		map.put("uuid",uuid);
		map.put(RequestModel.SQLID, IotRiverBuildMapper.class.getName() + ".selectBuild");
		String url =(String) this.selectOne(map);
		return url;
	}

	public void saveOrUpBuider(String uuid, String url) {		
		JSONObject map = new JSONObject();
		map.put("uuid",uuid);
		map.put("updateTime", new Date());
		map.put("url", url);
		map.put(RequestModel.SQLID, IotRiverBuildMapper.class.getName() + ".saveOrUpBuider");
		this.update(map);
	}

}
