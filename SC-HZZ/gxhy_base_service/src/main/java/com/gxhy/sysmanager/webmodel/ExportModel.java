package com.gxhy.sysmanager.webmodel;

import java.util.Date;

public class ExportModel {
	
    private String userId;//编码
    
    private String userName;//名称

    private String userPhone;//电话
    
    private String createTime;//创建时间
    
    private String addvnm;//行政区名称
    
    private Integer userSex;//性别
    
    private String updateTime;//更新时间
   
    private String deptNm;//部门名称
      
    private String roleName;//角色名称
     
    private int jobName;//职务名称


	public String getUserId() {
		return userId;
	}

	public void setUserId(String userId) {
		this.userId = userId;
	}

	public String getUserName() {
		return userName;
	}

	public void setUserName(String userName) {
		this.userName = userName;
	}

	public String getUserPhone() {
		return userPhone;
	}

	public void setUserPhone(String userPhone) {
		this.userPhone = userPhone;
	}

	public String getAddvnm() {
		return addvnm;
	}

	public void setAddvnm(String addvnm) {
		this.addvnm = addvnm;
	}

	public String  getUserSex() {
		String userS="";
		if(userSex==1){
			userS="男";
		}else{
			userS="女";
		}
		return  userS;
	}
	public String getDeptNm() {
		return deptNm;
	}

	public void setDeptNm(String deptNm) {
		this.deptNm = deptNm;
	}

	public String getRoleName() {
		return roleName;
	}

	public void setRoleName(String roleName) {
		this.roleName = roleName;
	}

	public String getJobName() {
		String job="";
		switch(jobName) {
		case 1:
			job="市第一总河长";
			break;
		case 2:
			job="市总河长";
			break;
		case 3:
			job="市副总河长";
			break;
		case 4:
			job="市河长";
			break;
		case 5:
			job="县总河长";
			break;
		case 6:
			job="县副总河长";
			break;
		case 7:
			job="县河长";
			break;
		case 8:
			job="乡(镇)河长";
			break;
		case 9:
			job="村河长";
			break;
		case 10:
			job="保洁员";
			break;
		case 11:
			job="巡查员";
			break;
		}
		return job;
	}

	public void setJobName(int jobName) {
		this.jobName = jobName;
	}

	public String getCreateTime() {
		return createTime;
	}

	public void setCreateTime(String createTime) {
		this.createTime = createTime;
	}

	public String getUpdateTime() {
		return updateTime;
	}

	public void setUpdateTime(String updateTime) {
		this.updateTime = updateTime;
	}

	public void setUserSex(Integer userSex) {
		this.userSex = userSex;
	}
}
