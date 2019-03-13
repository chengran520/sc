package com.gxhy.busine.domain;

import java.util.Date;

public class TimeAxiesModel {
  
	private String busineUnm;
	
	private Date handleTm;
	
	private String handleView;
	
	private String lastHandleUserNm;
	
	private String status;
	
	private String workFlowId;
	
	private String job;
	
	private String dept;
	
	private String url;

	public String getBusineUnm() {
		return busineUnm;
	}

	public void setBusineUnm(String busineUnm) {
		this.busineUnm = busineUnm;
	}
	
	public String getHandleView() {
		return handleView;
	}

	public void setHandleView(String handleView) {
		this.handleView = handleView;
	}

	public String getLastHandleUserNm() {
		return lastHandleUserNm;
	}

	public void setLastHandleUserNm(String lastHandleUserNm) {
		this.lastHandleUserNm = lastHandleUserNm;
	}

	public String getStatus() {
		return status;
	}

	public void setStatus(String status) {
		this.status = status;
	}

	public Date getHandleTm() {
		return handleTm;
	}

	public void setHandleTm(Date handleTm) {
		this.handleTm = handleTm;
	}

	public String getWorkFlowId() {
		return workFlowId;
	}

	public void setWorkFlowId(String workFlowId) {
		this.workFlowId = workFlowId;
	}

	public String getUrl() {
		return url;
	}

	public void setUrl(String url) {
		this.url = url;
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
