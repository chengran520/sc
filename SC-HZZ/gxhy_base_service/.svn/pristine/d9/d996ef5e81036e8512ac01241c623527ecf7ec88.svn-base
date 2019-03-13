package com.gxhy.sysmanager.service;

import java.util.Date;
import java.util.HashMap;
import java.util.Hashtable;
import java.util.List;
import java.util.Map;
import java.util.UUID;

import org.apache.commons.lang3.StringUtils;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;

import com.gxhy.base.domain.SysUsers;
import com.gxhy.base.model.RequestModel;
import com.gxhy.base.security.util.SecurityUtil;
import com.gxhy.base.service.BaseService;
import com.gxhy.base.util.AdcdUtil;
import com.gxhy.base.util.MD5Util;
import com.gxhy.base.util.StringUtil;
import com.gxhy.sysmanager.domain.SysManageUser;
import com.gxhy.sysmanager.persistence.SysManagerUserMapper;

@SuppressWarnings({"rawtypes","unchecked"})
@Service
public class SysMangerService extends BaseService{
	
	private static final Logger logger = LoggerFactory.getLogger(SysMangerService.class);
	
	/**
	 * 增加用户
	 * @param model
	 * @param addvcd3 
	 * @param addvcd2 
	 * @param addvcd1 
	 * @return
	 */
	public int insertUser(SysManageUser model, String addvcd1, String addvcd2, String addvcd3,String addvcd4,String addvcd5) {
		int num=0;
		Map<String,Object> map =new HashMap<String,Object>();
		map.put("uuid", model.getUuid());
		map.put("userId", model.getUserId());
		map.put("userName", model.getUserName());
		map.put("userPhone", model.getUserPhone());
		map.put("userSex", model.getUserSex());
     	map.put("deptId", model.getDeptId());
     	map.put("job", model.getJob());
     	map.put("roleId", model.getRoleId());
     	if(StringUtils.isNotBlank(addvcd5)){
     		map.put("userAddvcd",addvcd5);
     	}//如果用户的省市县都不为空
     	else if(StringUtils.isNotBlank(addvcd4)){
     		map.put("userAddvcd",addvcd4);
     	}else if(StringUtils.isNotBlank(addvcd3)){
     		map.put("userAddvcd",addvcd3);
     	}//如果用户的省市不为空，市不为空，县为空
     	else if(StringUtils.isNotBlank(addvcd2)){
     		map.put("userAddvcd",addvcd2);
     	}//如果用户的省不为空，市为空，县为空
     	else if(StringUtils.isNotBlank(addvcd1)){
     		map.put("userAddvcd",addvcd1);
     	}
     	map.put("userPassword", MD5Util.CustomMD5(model.getUserPassword()));
     	map.put("createTime", new Date());
     	map.put("updateTime", new Date());
    	if(StringUtils.isBlank(model.getUuid())){			
			map.put("uuid", UUID.randomUUID().toString().replace("-", ""));
			map.put(RequestModel.SQLID,SysManagerUserMapper.class.getName() + ".insertUser");
			num = this.insert(map);
			map.put(RequestModel.SQLID,SysManagerUserMapper.class.getName() + ".insertRoleUser");
			num = this.insert(map);
			String rvList = model.getRiver_select();
			if(StringUtils.isNotBlank(rvList)){
				String[] lists = rvList.split(",");
				for (int i = 0; i < lists.length; i++) {
					if(StringUtils.isNotBlank(lists[i])){
						map.put("rvCd", lists[i]);
						map.put("uuid", UUID.randomUUID().toString().replace("-", ""));
						map.put(RequestModel.SQLID,SysManagerUserMapper.class.getName() + ".insertRvUser");
						num = this.insert(map);
					}else{
						logger.info("异常河流>>>>>>>>>>>>>>>>>"+lists[i]+">>>>>>>>用户："+model.getUserId());
					}
				}
			}
		}else {
		 map.put(RequestModel.SQLID,SysManagerUserMapper.class.getName() + ".updateUser");
			num = this.update(map);
			map.put(RequestModel.SQLID,SysManagerUserMapper.class.getName() + ".deleteRvUser");
			this.delete(map);
			String rvList = model.getRiver_select();
			if(StringUtils.isNotBlank(rvList)){
				String[] lists = rvList.split(",");
				for (int i = 0; i < lists.length; i++) {
					map.put("rvCd", lists[i]);
					map.put("uuid", UUID.randomUUID().toString().replace("-", ""));
					map.put(RequestModel.SQLID,SysManagerUserMapper.class.getName() + ".insertRvUser");
					num = this.insert(map);
				}
			}
		}
		return num;
	}
	
	
	/**
	 * 更新
	 * @param userId
	 * @return
	 */
	public int UpdateUserVerify(String userId) {
		int num=0;
		SysUsers users = SecurityUtil.getSessionUser();
		Map<String,Object> map =new HashMap<String,Object>();
		map.put("userId", userId);
     	map.put("etm", new Date());
     	map.put("adcd", users.getUserAddvcd());
		map.put(RequestModel.SQLID,SysManagerUserMapper.class.getName() + ".inertUserVerify");
		num = this.update(map);
		return num;
	}
	
	/**
	 * 验证用户输入的密码是否正确
	 * @param userId
	 * @param pwd
	 * @return
	 */
	public boolean isUserPwd(String userId,String pwd){
		Map<String,Object> map =new HashMap<String,Object>();
		map.put("userId", userId);
		map.put(RequestModel.SQLID,SysManagerUserMapper.class.getName() + ".selectUserById");
		SysManageUser user=(SysManageUser) this.selectOne(map);
		if(pwd.equals(MD5Util.decode(user.getUserPassword()))){
			return true;
		}
		return false;
	}
	
	/**
	 * 更新密码
	 * @param userId
	 * @return
	 */
	public int updatePwdUserId(String userId,String pwd) {
		Map<String,Object> map =new HashMap<String,Object>();
		map.put("userId", userId);
		map.put("userPwd", pwd);
		map.put("etm",new Date());
		map.put(RequestModel.SQLID,SysManagerUserMapper.class.getName() + ".updatePwdUserId");
		int count=this.update(map);
		return count;
	}
	
	/**
	 * 删除用户
	 * @param uuid
	 * @return
	 */
	public int deleteUser(String uuid) {
		int num=0;
		Map<String,String> paramMap =new HashMap<String,String>();
		if(StringUtil.isNotBlank(uuid)){
			paramMap.put("id",uuid);
			paramMap.put(RequestModel.SQLID,SysManagerUserMapper.class.getName() + ".deleteUser");
			num = this.delete(paramMap);
		}
		return num;
	}
	
	
	public List<SysManageUser> getsuperiorUser(String adcd) {
		Map<String, Object> params = new Hashtable<String, Object>();
		//上级
		String superiorAdcd = AdcdUtil.getPrefixAdcd(adcd,true).substring(0,4);
		params.put("adcd", adcd);
		params.put("superiorAdcd", superiorAdcd);
		params.put(RequestModel.SQLID, SysManagerUserMapper.class.getName() + ".getsuperiorUser");
		List<SysManageUser> list= this.selectLists(params);
		return list;
	}
	
}
