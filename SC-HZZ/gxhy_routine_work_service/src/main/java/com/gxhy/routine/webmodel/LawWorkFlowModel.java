package com.gxhy.routine.webmodel;

import java.util.Date;

public class LawWorkFlowModel {
   
	private String  handleUser;
	
	private Date  handleTm;
	
	private Date reportTm;
	
	private String status;
	
	private String handleView;

	private String job;
	
	private String dept;
	
	private String reportUser;
	
	public String getHandleUser() {
		return handleUser;
	}

	public void setHandleUser(String handleUser) {
		this.handleUser = handleUser;
	}

	public Date getHandleTm() {
		return handleTm;
	}

	public void setHandleTm(Date handleTm) {
		this.handleTm = handleTm;
	}

	public String getStatus() {
		return status;
	}

	public void setStatus(String status) {
		this.status = status;
	}

	public String getHandleView() {
		return handleView;
	}

	public void setHandleView(String handleView) {
		this.handleView = handleView;
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

	public String getReportUser() {
		return reportUser;
	}

	public void setReportUser(String reportUser) {
		this.reportUser = reportUser;
	}

	public Date getReportTm() {
		return reportTm;
	}

	public void setReportTm(Date reportTm) {
		this.reportTm = reportTm;
	}
}
