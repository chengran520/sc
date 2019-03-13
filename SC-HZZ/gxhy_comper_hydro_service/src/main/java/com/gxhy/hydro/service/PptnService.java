package com.gxhy.hydro.service;

import java.util.Hashtable;
import java.util.List;
import java.util.Map;

import org.springframework.stereotype.Service;

import com.gxhy.base.model.RequestModel;
import com.gxhy.base.service.BaseService;
import com.gxhy.hydro.persistence.PptnMapper;
import com.gxhy.hydro.webmodel.ResultPptnInfoModel;

@SuppressWarnings({"rawtypes","unchecked"})
@Service
public class PptnService extends BaseService{

	/**
	 * 根据测站ID查询情信息
	 * @param stcd
	 * @return
	 */
	public List<ResultPptnInfoModel> getNewPptnInfo(String stcd){
		Map<String, Object> map = new Hashtable<String, Object>();
		map.put("stcd", stcd);
		map.put(RequestModel.SQLID, PptnMapper.class.getName() + ".getPptnDataInfo");
		List<ResultPptnInfoModel> list= this.selectLists(map);
		return list;
	}

}
