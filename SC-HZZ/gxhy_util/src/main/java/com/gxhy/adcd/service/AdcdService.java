package com.gxhy.adcd.service;

import java.util.Hashtable;
import java.util.List;
import java.util.Map;

import org.springframework.stereotype.Service;

import com.alibaba.fastjson.JSONObject;
import com.gxhy.adcd.domain.AdcdModel;
import com.gxhy.adcd.persistence.AdcdMapper;
import com.gxhy.base.model.RequestModel;
import com.gxhy.base.service.BaseService;

@SuppressWarnings({"rawtypes","unchecked"})
@Service
public class AdcdService extends BaseService{
	
	/**
	 * 根据编码获取名称 
	 * @param adcds
	 * @return
	 */
	public List<AdcdModel> getAdcdNm(String adcd){
		Map<String, Object> map = new Hashtable<String, Object>();
		map.put("adcd", adcd);
		map.put(RequestModel.SQLID, AdcdMapper.class.getName() + ".getAdcdNm");
		List<AdcdModel> list= this.selectLists(map);
		return list;
	}

	/**
	 * 根据行政区编码获取名称
	 * @param ADDVCD
	 * @return
	 */
	public String getAddvnm(String ADDVCD){
        JSONObject map = new JSONObject();
        map.put("ADDVCD",ADDVCD);
		map.put(RequestModel.SQLID, AdcdMapper.class.getName() + ".getAddvnm");	
		String ADDVNM=(String) this.selectOne(map);
		return ADDVNM;
	}
	
	/**
	 * 获取当前用户所在行政区域
	 * @param adcd
	 * @return
	 */
	public List<AdcdModel> getAdcdZtree(String adcd){
		JSONObject map = new JSONObject();
        map.put("adcd",adcd);
		map.put(RequestModel.SQLID, AdcdMapper.class.getName() + ".getUserAdcdZtree");	
		List<AdcdModel> list = this.selectLists(map);
		return list;
	}
	
}
