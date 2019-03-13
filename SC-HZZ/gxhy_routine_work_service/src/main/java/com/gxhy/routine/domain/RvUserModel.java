package com.gxhy.routine.domain;

import javax.persistence.Column;
import javax.persistence.Table;
/**
 * 河长表
 * @author Wjh
 *
 */
@Table(name = "ST_RV_USER")
public class RvUserModel {
	
	@Column(name = "UUID")
	private String uuid;
	
	@Column(name = "RV_CD")
	private String rvcd;
	
	@Column(name = "USER_ID")
	private String userId;
	
	@Column(name = "USER_NM")
	private String userNm;

	public String getUuid() {
		return uuid;
	}

	public void setUuid(String uuid) {
		this.uuid = uuid;
	}

	public String getRvcd() {
		return rvcd;
	}

	public void setRvcd(String rvcd) {
		this.rvcd = rvcd;
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


	
	
	
}
