package com.gxhy.sysmanager.domain;

/**
 * 河长对应河流
 * @author yb
 *
 */
public class StRvUser {
	
	//河流编码
	private String rvCd;
	//河流名称
	private String rvNm;
	//用户ID
	private String userId;
	//用户名称 
	private String userNm;

	public String getRvCd() {
		return rvCd;
	}

	public void setRvCd(String rvCd) {
		this.rvCd = rvCd;
	}

	public String getUserId() {
		return userId;
	}

	public void setUserId(String userId) {
		this.userId = userId;
	}

	public String getUserNm() {
		return userNm;
	}

	public void setUserNm(String userNm) {
		this.userNm = userNm;
	}

	public String getRvNm() {
		return rvNm;
	}

	public void setRvNm(String rvNm) {
		this.rvNm = rvNm;
	}
	
	
}
