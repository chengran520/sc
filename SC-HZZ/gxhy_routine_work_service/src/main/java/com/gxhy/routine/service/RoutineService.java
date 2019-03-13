package com.gxhy.routine.service;

import java.util.HashMap;
import java.util.Map;

import org.springframework.stereotype.Service;

import com.gxhy.base.model.RequestModel;
import com.gxhy.base.service.BaseService;
import com.gxhy.base.util.StringUtil;
import com.gxhy.routine.persistence.RoutineMapper;

@Service
@SuppressWarnings({"rawtypes","unchecked"})
public class RoutineService extends BaseService{
	
	/**
	 * 删除未上报的巡检日志
	 * @param id
	 * @return
	 */
	public int deletePatrolCatalog(String id){
		int num=0;
		Map<String,String> paramMap =new HashMap<String,String>();
		if(StringUtil.isNotBlank(id)){
			paramMap.put("id", id);
			paramMap.put(RequestModel.SQLID,RoutineMapper.class.getName() + ".deletePatrolCatalog");
			num = this.delete(paramMap);
		}
		return num;
	}
	
	/**
	 * 保存或修改巡检基础信息
	 * @param model
	 * @return
	 */
//	public int saveOrUpdateRutine(RiverInfoModel model){
//		int num = 0;
//		Map<String,Object> map =new HashMap<String,Object>();
//		map.put("stcd", model.getStcd());
//		map.put("stnm", model.getStnm());
//		map.put("rvnm", model.getRvnm());
//		map.put("hnnm", model.getHnnm());
//		map.put("patrolTm", model.getPatrolTm());
//		map.put("patrolSpeed", model.getPatrolSpeed());
//		map.put("patrolNm", "王长亮");
//		map.put("adcd", "411300000000");
//		map.put("patrolStartPoint", model.getStartAddress());
//		map.put("patrolEndPoint", model.getEndAddress());
//		map.put("patrolMileage", model.getPatrolMileage());
//		map.put("p_users", model.getReportPNm());
//		map.put("patrolTmlt",model.getPatrolTmlt());
//		map.put("createTm", new Date());
//		map.put("updateTm", new Date());
//		map.put("grade", model.getGrade());
//		map.put("rvlt", model.getLengthRv());
//		map.put("status", 1);
//		map.put(RequestModel.SQLID,RoutineMapper.class.getName() + ".insertPatrolCatalog");
//		if(StringUtils.isBlank(model.getUuid())){			
//			map.put("uuid", UUID.randomUUID().toString().replace("-", ""));
//			num = this.insert(map);
//		}else {
//			num = this.update(map);
//		}
//		return num;
//	}
	
}
