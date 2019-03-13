package com.gxhy.hydro.service;

import java.io.UnsupportedEncodingException;
import java.util.Hashtable;
import java.util.List;
import java.util.Map;

import org.apache.commons.lang3.StringUtils;
import org.springframework.stereotype.Service;

import com.gxhy.base.domain.SysUsers;
import com.gxhy.base.model.RequestModel;
import com.gxhy.base.security.util.SecurityUtil;
import com.gxhy.base.service.BaseService;
import com.gxhy.base.util.AdcdUtil;
import com.gxhy.hydro.domain.StBprpBModel;
import com.gxhy.hydro.persistence.StbprpBMapper;

@SuppressWarnings({"rawtypes","unchecked"})
@Service
public class StationService extends BaseService{
	
	/**
	 * 根据行政区域获取指定测站
	 * @param addvcd
	 * @return
	 * @throws UnsupportedEncodingException 
	 */
	public List<StBprpBModel> getStBprpBInfo(String stnm) throws Exception{
		Map<String, Object> map = new Hashtable<String, Object>();
		SysUsers user = SecurityUtil.getSessionUser();
		if(user != null){
			int it =AdcdUtil.getRegionLevel(user.getUserAddvcd());
			if(it >= 3){
				it = 6;
			}else if(it >=2){
				it = 4;
			}
			String adcd = AdcdUtil.addZeroToAdcd(user.getUserAddvcd().substring(0,it), 15);
			map.put("addvcd", AdcdUtil.getPrefixAdcd(adcd, false));
			if(StringUtils.isNotBlank(stnm)){				
				map.put("key",stnm);
			}
			map.put(RequestModel.SQLID, StbprpBMapper.class.getName() + ".getStBprpBInfo");
			List<StBprpBModel> list= this.selectLists(map);
			return list;
		}else{
			return null;
		}
		
	}
	
	
	
}
