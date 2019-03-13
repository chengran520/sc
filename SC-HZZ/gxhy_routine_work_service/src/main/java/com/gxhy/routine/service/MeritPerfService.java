package com.gxhy.routine.service;

import java.util.Date;
import java.util.HashMap;
import java.util.Map;
import java.util.UUID;

import org.apache.commons.lang3.StringUtils;
import org.springframework.stereotype.Service;

import com.gxhy.base.domain.SysUsers;
import com.gxhy.base.model.RequestModel;
import com.gxhy.base.service.BaseService;
import com.gxhy.base.util.StringUtil;
import com.gxhy.base.webmodel.QueryMeritModel;
import com.gxhy.routine.persistence.MeritPerfMapper;

@SuppressWarnings({"rawtypes","unchecked"})
@Service
public class MeritPerfService extends BaseService{
	
	/**
	 * 保存或更新绩效信息
	 * @param model
	 * @return
	 */
	public int saveOrUpdateMerit(QueryMeritModel model,SysUsers user){
		int num = 0;
		Map<String,Object> map =new HashMap<String,Object>();
		map.put("adcd", user.getUserAddvcd());
		map.put("adcdNm", model.getAdcdNm());
		map.put("rvNm", model.getRvNm());
		map.put("meritTm", new Date());
		map.put("rvUserNm", model.getRvUserNm());
		map.put("rvUserPt", model.getRvUserPt());
		map.put("meritDesc", model.getMeritDesc());
		map.put("solveProblem", model.getSolveProblem());
		map.put("unSolveProblem", model.getUnSolveProblem());
		map.put("lawProblem", model.getLawProblem());
		map.put("nextMonthPlan", model.getNextMonthPlan());
		map.put("meritNm", model.getMeritNm());
		map.put("createTm", new Date());
		map.put("updateTm", new Date());
		map.put("rvUserNm", user.getUserName());
		map.put("rvUserPt", "总河长");
		map.put("status", "1");
		map.put(RequestModel.SQLID,MeritPerfMapper.class.getName() + ".insertMeritPerf");
		if(StringUtils.isBlank(model.getUuid())){			
			String id = UUID.randomUUID().toString().replace("-", "");
			map.put("uuid", id);
			num = this.insert(map);
			if(num > 0){
				map.put("id", UUID.randomUUID().toString().replace("-", ""));
				map.put("cd", id);
				map.put("nm", model.getMeritNm());
				map.put("tm", new Date());
				map.put("uNm", user.getUserName());
				map.put("adcd",user.getUserAddvcd());
				map.put("type", "1");
				map.put("msgTp", 1);
				map.put("stm", new Date());
				map.put("etm", new Date());
				map.put(RequestModel.SQLID,MeritPerfMapper.class.getName() + ".insertBusine");
				this.insert(map);
			}
		}else {
			num = this.update(map);
		}
		return num;
	}
	
	/**
	 * 根据ID删除绩效考核
	 * @param id
	 * @return
	 */
	public int deleteMeritInfo(String id){
		int num=0;
		Map<String,String> paramMap =new HashMap<String,String>();
		if(StringUtil.isNotBlank(id)){
			paramMap.put("id", id);
			paramMap.put(RequestModel.SQLID,MeritPerfMapper.class.getName() + ".deleteMeritInfo");
			num = this.delete(paramMap);
		}
		return num;
	}
	
}
