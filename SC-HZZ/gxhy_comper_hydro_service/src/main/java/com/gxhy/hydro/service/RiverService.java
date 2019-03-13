package com.gxhy.hydro.service;

import java.util.Date;
import java.util.Hashtable;
import java.util.List;
import java.util.Map;

import org.springframework.stereotype.Service;

import com.alibaba.fastjson.JSONObject;
import com.gxhy.base.domain.SysUsers;
import com.gxhy.base.model.RequestModel;
import com.gxhy.base.security.util.SecurityUtil;
import com.gxhy.base.service.BaseService;
import com.gxhy.hydro.persistence.RiverMapper;
import com.gxhy.hydro.webmodel.QueryReadingModel;
import com.gxhy.hydro.webmodel.ResultRiverInfoModel;
import com.gxhy.iot.river.StRiverB;

@SuppressWarnings({"rawtypes","unchecked"})
@Service
public class RiverService extends BaseService{

	/**
	 * 根据测站ID查询实时水情信息
	 * @param stcd
	 * @return
	 */
	public List<QueryReadingModel> getNewRiverInfo(String stcd){
		Map<String, Object> map = new Hashtable<String, Object>();
		map.put("stcd", stcd);
		map.put(RequestModel.SQLID, RiverMapper.class.getName() + ".getRiverDataInfo");
		List<QueryReadingModel> list= this.selectLists(map);
		return list;
	}
	/**
	 * 查询水位、流量
	 * @param stcd
	 * @return
	 */
  public List<ResultRiverInfoModel> getZlist(String stcd,String stm,String etm) {
	    Map<String, Object> map = new Hashtable<String, Object>();
		map.put("stcd", stcd);
		map.put("stm", stm);
		map.put("etm", etm);
		map.put(RequestModel.SQLID, RiverMapper.class.getName() + ".getZqlist");
		List<ResultRiverInfoModel> list=this.selectList(map);
	    return list;
  }
  
  /**
   * 查询流量
   * @param stcd
   * @return
   */
	public List<String> getQlist(String stcd) {
		 Map<String, Object> map = new Hashtable<String, Object>();
			map.put("stcd", stcd);
			map.put(RequestModel.SQLID, RiverMapper.class.getName() + ".getQlist");
			List<String> list=this.selectList(map);
		    return list;
	}

	/**
	 * 查询所有河湖信息
	 * @param is_follow 
	 * @param model
	 * @throws Exception 
	 * @throws Exception 
	 */
	public List<StRiverB> getRiverDataInfo(StRiverB model,SysUsers user) throws Exception{
		JSONObject map = new JSONObject();
		map.put(RequestModel.SQLID, RiverMapper.class.getName() + ".getAllRvInfo");	
		map.put("key", model.getRvNm());
		List<StRiverB> list= this.selectLists(map);
		return list;
	}
}
