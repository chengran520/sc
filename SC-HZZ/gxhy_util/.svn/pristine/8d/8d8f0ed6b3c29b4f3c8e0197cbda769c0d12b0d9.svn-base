package com.gxhy.iot.river;

import org.apache.commons.lang3.StringUtils;

/**
 * 河流对应河长
 * @author yb
 *
 */
public class StRvUser {
	
	//河流编码
	private String rvCd;
	//用户ID
	private String userId;
	//用户名称
	private String userNm;
	//河长职位
	private String userJob;
	//河长职位名称
	private String userJobNm;
	//河长所在部门
	private String deptNm;
	//河长手机号码
	private String userPhone;
	//用户性别
	private String sex;
	
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

	public String getUserJob() {
		return userJob;
	}

	public void setUserJob(String userJob) {
		this.userJob = userJob;
	}

	public String getUserJobNm() {
		if(!StringUtils.isNotBlank(userJob)){
			return null;
		}
		switch (userJob) {
    	 case "1":
    		userJobNm = "市第一总河长";
    		break;
    	 case "2":
    		userJobNm = "市第总河长";
    		break;
    	 case "3":
    		userJobNm = "市第副总河长";
    		break;
    	 case "4":
    		 userJobNm = "市河长";
    		break;
    	 case "5":
    		 userJobNm = "县总河长";
    		break;
    	 case "6":
    		 userJobNm = "县副总河长";
    		break;
    	 case "7":
    		 userJobNm = "县河长";
    		 break;
    	 case "8":
    		 userJobNm = "乡(镇)河长";
    		 break;
    	 case "9":
    		 userJobNm = "村河长";
    		 break;
    	 case "10":
    		 userJobNm = "保洁员";
    		 break;
    	 case "11":
    		 userJobNm = "巡查员";
    		 break;
    	 case "13":
    		 userJobNm = "乡镇管理所";
    		 break;
    	 case "14":
    		 userJobNm = "河长办";
    		 break;
    	 default:
    		 userJobNm = "巡查员";
		}
		return userJobNm;
	}

	public void setUserJobNm(String userJobNm) {
		this.userJobNm = userJobNm;
	}

	public String getDeptNm() {
		return deptNm;
	}

	public void setDeptNm(String deptNm) {
		this.deptNm = deptNm;
	}

	public String getUserPhone() {
		return userPhone;
	}

	public void setUserPhone(String userPhone) {
		this.userPhone = userPhone;
	}

	public String getSex() {
		return sex;
	}

	public void setSex(String sex) {
		this.sex = sex;
	}
	
	
}
