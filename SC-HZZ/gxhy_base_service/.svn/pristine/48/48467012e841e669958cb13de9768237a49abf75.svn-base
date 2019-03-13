package com.gxhy.sysmanager.webmodel;

import java.io.Serializable;
import java.io.UnsupportedEncodingException;
import java.util.Date;

import org.apache.commons.lang3.StringUtils;

/**
 * 查询参数
 * @author yb
 * @2017年7月28日下午6:50:58   
 * @CopyRight gxhy
 */
public class QueryModel implements Serializable{
	
	private String id;
	
	private String keyword;
	
	private String phone;
	
	private String creatTime;
    
	private String userId;
	
	private String roleId;
	
	private String regTp;
	
	public String getKeyword() {
		
		return keyword;
	}

	public void setKeyword(String keyword) {
		try {
			if(StringUtils.isNotBlank(keyword)){				
				keyword =  new String(keyword.getBytes("ISO-8859-1"),"UTF-8");
			}
		} catch (UnsupportedEncodingException e) {
			e.printStackTrace();
		}
		this.keyword = keyword;
	}

	public String getId() {
		return id;
	}

	public void setId(String id) {
		this.id = id;
	}

	public String getPhone() {
		return phone;
	}

	public void setPhone(String phone) {
		this.phone = phone;
	}


	public String getUserId() {
		return userId;
	}

	public void setUserId(String userId) {
		this.userId = userId;
	}

	public String getRoleId() {
		return roleId;
	}

	public void setRoleId(String roleId) {
		this.roleId = roleId;
	}

	public String getCreatTime() {
		return creatTime;
	}

	public void setCreatTime(String creatTime) {
		this.creatTime = creatTime;
	}

	public String getRegTp() {
		return regTp;
	}

	public void setRegTp(String regTp) {
		this.regTp = regTp;
	}

}
