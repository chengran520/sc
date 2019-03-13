package com.gxhy.busine.service;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.alibaba.fastjson.JSONObject;
import com.gxhy.base.model.RequestModel;
import com.gxhy.base.service.BaseService;
import com.gxhy.base.util.DateUtil;
import com.gxhy.busine.persistence.WaterQualityMapper;

@Service
public class WaterQualityService extends BaseService{
	
	@Autowired
	private BusineService busineService;
	
	
	/**
	 * 获取工作台统计信息
	 * @return
	 */
	public List<Integer> getWorkBeanchCount(){
		JSONObject map = new JSONObject();
		map.put("stm", DateUtil.getMonthFistDay());
		map.put("etm", DateUtil.getMonthLastDay());
	  	map.put(RequestModel.SQLID,WaterQualityMapper.class.getName() + ".getTotalCount");
		List<Integer> count=this.selectList(map);
		return count;
	}
	
	
}
