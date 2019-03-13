
package com.gxhy.busine.service;

import java.util.Date;
import java.util.Hashtable;
import java.util.Map;

import org.springframework.stereotype.Service;

import com.gxhy.base.model.RequestModel;
import com.gxhy.base.service.BaseService;
import com.gxhy.busine.persistence.BusineMapper;
import com.gxhy.busine.webmodel.BusineWebModel;

@SuppressWarnings({"rawtypes","unchecked"})
@Service
public class BusineService extends BaseService{
	/**
	 * 
	 * @param model
	 * @return
	 */
	public Integer handleMeritUpdata(BusineWebModel model,String userNm){
		int it = 0;
		Map<String, Object> params = new Hashtable<String, Object>();
		params.put("tm", new Date());
		params.put("userNm", userNm);
		params.put("cd", model.getId());
		params.put("status", "1");
		params.put("upDt", new Date());
		params.put(RequestModel.SQLID, BusineMapper.class.getName() + ".updateBusineInfo");
		it = this.update(params);
		params.put("pUevl", model.getCountent());
		params.put("score", model.getScore());
		params.put("upDt", new Date());
		params.put(RequestModel.SQLID,BusineMapper.class.getName() + ".updateMeritInfo");
		it = this.update(params);
		return it;
	}
	
}
