package com.gxhy.datafill.service;

import java.util.Date;
import java.util.List;

import org.springframework.stereotype.Service;

import com.alibaba.fastjson.JSONObject;
import com.gxhy.base.model.RequestModel;
import com.gxhy.base.service.BaseService;
import com.gxhy.base.util.AdcdUtil;
import com.gxhy.datafill.persistence.DataFillMapper;
import com.gxhy.iot.river.StRiverB;

@SuppressWarnings({"rawtypes","unchecked"})
@Service
public class DataFillService extends BaseService{
	
	
	/**
	 * 保存或更新数据
	 * @param riverB
	 * @param adcd
	 * @return
	 */
	public int saveOrUpDataFillRiver(StRiverB riverB,String adcd,String user){
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
		if(riverB.getTp().equals("1")){
			map.put(RequestModel.SQLID, DataFillMapper.class.getName() + ".insertDataFillRiver");
			it = this.insert(map);
		}else{
			
		}
		return it;
	}
	
	/**
	 * 删除
	 * @param rvCd
	 * @return
	 */
	public int deleteDataFillRiver(String rvCd){
		JSONObject map = new JSONObject();
		map.put("rvCd", rvCd);
		map.put(RequestModel.SQLID, DataFillMapper.class.getName() + ".deleteDataFillRiver");
		int it = this.insert(map);
		return it;
	}
}	
