package com.gxhy.monitor.service;
import java.util.List;
import org.springframework.stereotype.Service;
import com.alibaba.fastjson.JSONObject;
import com.gxhy.base.domain.SysUsers;
import com.gxhy.base.model.RequestModel;
import com.gxhy.base.service.BaseService;
import com.gxhy.iot.river.StRiverB;
import com.gxhy.iot.river.StRvUser;
import com.gxhy.monitor.domain.IotWaterQuaDesModel;
import com.gxhy.monitor.domain.IotWaterQualityModel;
import com.gxhy.monitor.persistence.DataMonitorMapper;

@Service
@SuppressWarnings({ "unchecked", "rawtypes" })
public class DataMonitorSerivce extends BaseService{
	
	/**
	 * 查询所有河道信息
	 * @param is_follow 
	 * @param model
	 * @throws Exception 
	 * @throws Exception 
	 */
	public List<StRiverB> getRiverDataInfo(String key,SysUsers user) throws Exception{
		JSONObject map = new JSONObject();
		map.put(RequestModel.SQLID, DataMonitorMapper.class.getName() + ".getRiverDataInfo");
		map.put("key", key);
		map.put("userId", user.getUserId());
		List<StRiverB> list= this.selectLists(map);
		return list;
	}
	
	/**
	 * 获取河流下对应河长
	 * @param rvCd
	 * @return
	 */
	public List<StRvUser> getAdcdRiverByRvUser(String rvCd){
		JSONObject map = new JSONObject();
		map.put(RequestModel.SQLID, DataMonitorMapper.class.getName() + ".getAdcdRiverByRvUser");
		map.put("rvCd", rvCd);
		List<StRvUser> list= this.selectLists(map);
		return list;
	}
	
	/**
	 * 获取河段水质信息
	 * @param stcd
	 * @return
	 */
	public List<IotWaterQualityModel> getRvierQuality(String stcd){
		JSONObject map = new JSONObject();
		map.put(RequestModel.SQLID, DataMonitorMapper.class.getName() + ".getRvierQuality");
		map.put("stcd", stcd);
		List<IotWaterQualityModel> list= this.selectLists(map);
		return list;
	}
	
	/**
	 * 水质类别说明-水质标准
	 * @return
	 */
	public List<IotWaterQuaDesModel> getWaterQuaDesc(){
		JSONObject map = new JSONObject();
		map.put(RequestModel.SQLID, DataMonitorMapper.class.getName() + ".getWaterQuaDesc");
		List<IotWaterQuaDesModel> list= this.selectLists(map);
		return list;
	}
	
}
