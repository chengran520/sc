package com.gxhy.monitor.service;
import java.util.Date;
import java.util.List;
import java.util.UUID;

import org.apache.commons.lang3.StringUtils;
import org.springframework.stereotype.Service;

import com.alibaba.fastjson.JSONObject;
import com.gxhy.base.model.RequestModel;
import com.gxhy.base.service.BaseService;
import com.gxhy.monitor.domain.StraRiverModel;
import com.gxhy.monitor.persistence.StraRiverMapper;
@Service
public class StraRiverService extends BaseService{

	public String selectFile(String uuid) {
		JSONObject map = new JSONObject();
		map.put("uuid",uuid);
		map.put(RequestModel.SQLID, StraRiverMapper.class.getName() + ".selectFile");
		List<StraRiverModel> list =this.selectLists(map);
		if(list.size()>0){
			return list.get(0).getStraFileContent();
		}
		return null;
	}

	public void saveOrUpStaRiver(int type, String straFileTitle, String rvCd,
			String straFileContent, String uuid) {
		JSONObject map = new JSONObject();
		map.put("rvCd", rvCd);
	    map.put("straFileTitle", straFileTitle);
	    map.put("straFileContent", straFileContent);
	    map.put("type",type);
	    map.put("downloadNum",0);
	    map.put("checkNum",0);
	    map.put("creatTm", new Date());
	    map.put("uuid", uuid);
		map.put(RequestModel.SQLID,StraRiverMapper.class.getName() + ".insertStRiver");
		this.insert(map);
		
	}


	

}
