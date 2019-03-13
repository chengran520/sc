package com.gxhy.routine.service;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.stereotype.Service;

import com.alibaba.fastjson.JSONObject;
import com.gxhy.base.model.RequestModel;
import com.gxhy.base.service.BaseService;
import com.gxhy.routine.domain.RankTopModel;
import com.gxhy.routine.persistence.RankTopMapper;

@SuppressWarnings({"rawtypes","unchecked"})
@Service
public class RankTopService extends BaseService{
	
	/**
	 * 获取排行榜
	 * @param key
	 * @return
	 */
	public Map<String, Object> getRankTopAll(String key){
		Map<String, Object> map = new HashMap<String, Object>();
		JSONObject params = new JSONObject();
		params.put("sortKey", key);
		params.put(RequestModel.SQLID, RankTopMapper.class.getName() + ".getRankTopAllCount");
		List<RankTopModel> list= this.selectLists(params);
		map.put("data", list);
		params.put(RequestModel.SQLID, RankTopMapper.class.getName() + ".rankTopListToNum");
		List<RankTopModel> count= this.selectLists(params);
		map.put("count", count);
		params.put(RequestModel.SQLID, RankTopMapper.class.getName() + ".getRankTypeList");
		List<RankTopModel> tpCount= this.selectLists(params);
		map.put("tpCount", tpCount);
		return map;
	}
}
