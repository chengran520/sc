package com.gxhy.sysmanager.domain;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.persistence.Transient;

import com.gxhy.adcd.domain.AdcdModel;

@Table(name = "SYS_USER")
public class SysUsers {
  
	@Id
    @Column(name="UUID")
    private String uuid;
    
	//密码
    @Column(name = "USER_PASSWD")
    private String userPwd;
    
    //编码
    @Column(name = "USER_ID")
    private String userId;

    //登录名
    @Column(name = "USER_NAME")
    private String userName;

    //性别
    @Column(name = "USER_SEX")
    private Integer sex;
    
    //邮箱
    @Column(name = "USER_EMAIL")
    private String eamil;
    
    //手机号
    @Column(name = "USER_PHONE")
    private String phone;
    
    //所属行政区
    @Column(name = "USER_ADDVCD")
    private String addvcd;
    
    //qq
    @Column(name = "USER_QQ")
    private Integer qq;
    
    //地址
    @Column(name = "USER_ADDRESSS")
    private String address;
    
    //创建时间
    @Column(name = "CREATE_TIME")
    private Date createTime;

    //更新时间
	@Column(name = "UPDATE_TIME")
    private Date updateTime;
    
	//是否锁定
    @Column(name = "IS_CHECK")
    private Integer isCheck;
    
    //
    @Column(name = "REG_TP")
    private String regTp;
    
    //行政区划
    @Column(name="USER_ADDVCD")
    private String userAddvcd;
    
    @Transient
    private AdcdModel adcdModel;
    
    
    
    public String getUuid() {
		return uuid;
	}

	public void setUuid(String uuid) {
		this.uuid = uuid;
	}

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

	public String getUserName() {
		return userName;
	}

	public void setUserName(String userName) {
		this.userName = userName;
	}

	public Integer getSex() {
		return sex;
	}

	public void setSex(Integer sex) {
		this.sex = sex;
	}

	public String getEamil() {
		return eamil;
	}

	public void setEamil(String eamil) {
		this.eamil = eamil;
	}
	public String getAddvcd() {
		return addvcd;
	}

	public void setAddvcd(String addvcd) {
		this.addvcd = addvcd;
	}

	public Integer getQq() {
		return qq;
	}

	public void setQq(Integer qq) {
		this.qq = qq;
	}

	public String getAddress() {
		return address;
	}

	public void setAddress(String address) {
		this.address = address;
	}

	public Date getCreateTime() {
		return createTime;
	}

	public void setCreateTime(Date createTime) {
		this.createTime = createTime;
	}

	public Date getUpdateTime() {
		return updateTime;
	}

	public void setUpdateTime(Date updateTime) {
		this.updateTime = updateTime;
	}

	public Integer getIsCheck() {
		return isCheck;
	}

	public void setIsCheck(Integer isCheck) {
		this.isCheck = isCheck;
	}

	public String getRegTp() {
		return regTp;
	}

	public void setRegTp(String regTp) {
		this.regTp = regTp;
	}

	public String getUserAddvcd() {
		return userAddvcd;
	}

	public void setUserAddvcd(String userAddvcd) {
		this.userAddvcd = userAddvcd;
	}

	public AdcdModel getAdcdModel() {
		return adcdModel;
	}

	public void setAdcdModel(AdcdModel adcdModel) {
		this.adcdModel = adcdModel;
	}

	public String getPhone() {
		return phone;
	}

	public void setPhone(String phone) {
		this.phone = phone;
	}   
}


