package com.gxhy.routine.domain;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Table;

/**
 * 巡检问题记录
 * @author cr
 *
 */
@Table(name = "CHECK_ISSUES_RECORD")
public class CheckIssuesRecordModel {
	@Column(name="UUID")
	private String uuid;
	
	@Column(name="STCD")
	private String stcd;
	
	@Column(name="FINDUSER")
	private String findUser;
	
	@Column(name="REPORTUSER")
	private String reportUser;
	
	@Column(name="ADDVCD")
	private String addvcd;
	
	@Column(name="ADDVNM")
	private String addvnm;
	
	@Column(name="ISSUES_TYPE")
	private String issuesType;
	
	@Column(name="REPORT_TIME") 
	private Date reportTime;
	
	@Column(name="PARTROL_UUID")
	private String partrolUuid;

	public String getUuid() {
		return uuid;
	}

	public void setUuid(String uuid) {
		this.uuid = uuid;
	}

	public String getStcd() {
		return stcd;
	}

	public void setStcd(String stcd) {
		this.stcd = stcd;
	}

	public String getFindUser() {
		return findUser;
	}

	public void setFindUser(String findUser) {
		this.findUser = findUser;
	}

	public String getReportUser() {
		return reportUser;
	}

	public void setReportUser(String reportUser) {
		this.reportUser = reportUser;
	}

	public String getAddvcd() {
		return addvcd;
	}

	public void setAddvcd(String addvcd) {
		this.addvcd = addvcd;
	}

	public String getAddvnm() {
		return addvnm;
	}

	public void setAddvnm(String addvnm) {
		this.addvnm = addvnm;
	}

	public String getIssuesType() {
		return issuesType;
	}

	public void setIssuesType(String issuesType) {
		this.issuesType = issuesType;
	}

	public Date getReportTime() {
		return reportTime;
	}

	public void setReportTime(Date reportTime) {
		this.reportTime = reportTime;
	}

	public String getPartrolUuid() {
		return partrolUuid;
	}

	public void setPartrolUuid(String partrolUuid) {
		this.partrolUuid = partrolUuid;
	}

}
