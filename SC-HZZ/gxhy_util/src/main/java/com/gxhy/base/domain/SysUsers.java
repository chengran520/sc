package com.gxhy.base.domain;

import java.util.List;

import javax.persistence.Column;
import javax.persistence.Table;
import javax.persistence.Transient;

@Table(name = "SYS_USER")
public class SysUsers {
	//用户密码
    @Column(name = "USER_PASSWD")
    private String userPwd;
    //用户ID	
    @Column(name = "USER_ID")
    private String userId;
    //用户行政区编码
    @Column(name="USER_ADDVCD")
    private String userAddvcd;
    //用户名称
    @Column(name="USER_NAME")
    private String userName;
    //用户职位
    @Column(name="JOB")
    private String userJob;
    
    @Column(name="DEPTID")
    private String deptId;//部门编码
    //用户角色
    @Transient
    private List<SysRole> roles;
    
	public String getUserPwd() {
		return userPwd;
	}

	public void setUserPwd(String userPwd) {
		this.userPwd = userPwd;
	}

	public String getUserId() {
		return userId;
	}

	public void setUserId(String userId) {
		this.userId = userId;
	}

	public String getUserAddvcd() {
		return userAddvcd;
	}

	public void setUserAddvcd(String userAddvcd) {
		this.userAddvcd = userAddvcd;
	}

	public String getUserName() {
		return userName;
	}

	public void setUserName(String userName) {
		this.userName = userName;
	}

	public String getUserJob() {
		return userJob;
	}

	public void setUserJob(String userJob) {
		this.userJob = userJob;
	}

	public List<SysRole> getRoles() {
		return roles;
	}

	public void setRoles(List<SysRole> roles) {
		this.roles = roles;
	}

	public String getDeptId() {
		return deptId;
	}

	public void setDeptId(String deptId) {
		this.deptId = deptId;
	}

}
