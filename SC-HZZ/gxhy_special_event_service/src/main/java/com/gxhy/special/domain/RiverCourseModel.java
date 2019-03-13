package com.gxhy.special.domain;

import java.util.Date;

/**
 * 河道专题事件返回类
 * @author cr
 *
 */
public class RiverCourseModel {

	private String busineId;//事件编码
	
	private String busineDesc;//事件描述
	
	private String busineTypeNm;//上报类型名称
	
	private String busineUm;//上报人姓名
	
	private String handleUserNm;//处理人姓名
	
	private Date createTm;//创建时间
	
	private Date updateTm;//处理时间
	
	private String busineAddress;//发生地点
	
	private String lttd;//所在纬度
	
	private String busineOrigin;//类型
	
	private String lgtd;//所在经度

	private String job;
	
	private String dept;
	
	public String getBusineId() {
		return busineId;
	}

	public void setBusineId(String busineId) {
		this.busineId = busineId;
	}

	public String getBusineDesc() {
		return busineDesc;
	}

	public void setBusineDesc(String busineDesc) {
		this.busineDesc = busineDesc;
	}

	public String getBusineTypeNm() {
		return busineTypeNm;
	}

	public void setBusineTypeNm(String busineTypeNm) {
		this.busineTypeNm = busineTypeNm;
	}

	public String getBusineUm() {
		return busineUm;
	}

	public void setBusineUm(String busineUm) {
		this.busineUm = busineUm;
	}

	public String getHandleUserNm() {
		return handleUserNm;
	}

	public void setHandleUserNm(String handleUserNm) {
		this.handleUserNm = handleUserNm;
	}

	public Date getCreateTm() {
		return createTm;
	}

	public void setCreateTm(Date createTm) {
		this.createTm = createTm;
	}

	public Date getUpdateTm() {
		return updateTm;
	}

	public void setUpdateTm(Date updateTm) {
		this.updateTm = updateTm;
	}

	public String getBusineAddress() {
		return busineAddress;
	}

	public void setBusineAddress(String busineAddress) {
		this.busineAddress = busineAddress;
	}

	public String getLttd() {
		return lttd;
	}

	public void setLttd(String lttd) {
		this.lttd = lttd;
	}

	public String getLgtd() {
		return lgtd;
	}

	public void setLgtd(String lgtd) {
		this.lgtd = lgtd;
	}

	public String getBusineOrigin() {
		return busineOrigin;
	}

	public void setBusineOrigin(String busineOrigin) {
		this.busineOrigin = busineOrigin;
	}

	public String getJob() {
		return job;
	}

	public void setJob(String job) {
		this.job = job;
	}

	public String getDept() {
		return dept;
	}

	public void setDept(String dept) {
		this.dept = dept;
	}
	
	
}

