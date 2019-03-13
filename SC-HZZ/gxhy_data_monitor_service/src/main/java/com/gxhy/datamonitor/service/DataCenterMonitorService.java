package com.gxhy.datamonitor.service;
import java.util.Date;
import java.util.List;

import org.springframework.stereotype.Service;

import com.alibaba.fastjson.JSONObject;
import com.gxhy.base.model.RequestModel;
import com.gxhy.base.service.BaseService;
import com.gxhy.datamonitor.persistence.DataCenterMonitorMapper;
import com.gxhy.iot.river.StRiverB;

@SuppressWarnings({"rawtypes","unchecked"})
@Service
public class DataCenterMonitorService extends BaseService{
	
	/**
	 * 保存或更新数据
	 * @param riverB
	 * @param adcd
	 * @return
	 */
	public int saveOrUpDataRiver(StRiverB riverB,String adcd,String user){
		JSONObject map = new JSONObject();
		map.put("rvCd", riverB.getRvCd());
		map.put("rvNm", riverB.getRvNm());
		map.put("hnnm", riverB.getHnnm());
		map.put("bsnm", riverB.getBsnm());
		map.put("stbk", riverB.getStbk());
		map.put("rvLt", riverB.getRvlt());
		map.put("draArea", riverB.getDraArea());
		map.put("pRvCd", riverB.getPrvCd());
		map.put("pRvNm", riverB.getPrvNm());
		map.put("rvOn", riverB.getRvOn());
		map.put("rvOnlgtd", riverB.getRvMhLgtd());
		map.put("rvOnlttd", riverB.getRvOnLttd());
		map.put("rvMh", riverB.getRvMh());
		map.put("rvMhlgtd", riverB.getRvMhLgtd());
		map.put("rvMhlttd", riverB.getRvMhLttd());
		map.put("dt", riverB.getDt());
		map.put("adcd", adcd);
		map.put("crtTm", new Date());
		map.put("updTm", new Date());
		map.put("operUser", user);
		int it  = 0;
		if(riverB.getTp().trim().equals("1")){
			map.put(RequestModel.SQLID, DataCenterMonitorMapper.class.getName() + ".insertDataFillRiver");
			it = this.insert(map);
		}else{
			map.put(RequestModel.SQLID, DataCenterMonitorMapper.class.getName() + ".updateRiverLake");
			it = this.insert(map);
		}
		return it;
	}
	
	/**
	 * 保存更新河流对应预案
	 * @param riverB
	 * @param adcd
	 * @return
	 */
	public void saveOrUpRvPew(String rvCd,String pewAddes){
		JSONObject map = new JSONObject();
		map.put("rvCd",rvCd);
		map.put("updTm", new Date());
		map.put("prewAddes", pewAddes);
		map.put(RequestModel.SQLID, DataCenterMonitorMapper.class.getName() + ".saveOrUpRvPew");
		this.insert(map);
	}
	
	/**
	 * 查询河流是否有应急预案
	 * @param riverB
	 * @param adcd
	 * @return
	 */
	public String selectRvPew(String rvCd){
		JSONObject map = new JSONObject();
		map.put("rvCd",rvCd);
		map.put(RequestModel.SQLID, DataCenterMonitorMapper.class.getName() + ".selectRvPew");
		List<StRiverB> list =this.selectLists(map);
		if(list != null){
			return list.get(0).getPrewAddes();
		}
		return null;
	}
	
}
