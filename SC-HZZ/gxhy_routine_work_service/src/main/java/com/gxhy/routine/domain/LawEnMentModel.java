package com.gxhy.routine.domain;

import java.util.Date;

import javax.persistence.Table;

/**
 * 执法监管
 * @author yb
 *
 */
@Table(name = "IOT_LAW_MENT")
public class LawEnMentModel {
	
	private String uuid;
	//事件编号
	private String lawId;
	//事件来源
	private String lawSource;
	//事件发生地址
	private String lawAdres;
	//上报人员
	private String reportUser;
	//上报地址
	private String reportSource;
	//上报时间
	private Date reportTm;
	//上报人员电话
	private String reportPh;
	//事件描述
	private String lawNt;
	//处理人员
	private String handleUser;
	//上次处理人员
	private String pHandleUser;
	//当前处理环节
	private String handleLink;
	//处理事件限时
	private String handleTmMit;
	//是否立案
	private String isFiling;
	//是否结案
	private String isFilClose;
	//结案理由
	private String filCloseTerm;
	//处理流程ID
	private String workFlowId;
	//上报图片对应Id
	private String imageId;
	//处理图片对应Id
	private String lawImgId;
	
	private String reportUserId;

	public String getUuid() {
		return uuid;
	}
	public void setUuid(String uuid) {
		this.uuid = uuid;
	}
	public String getLawId() {
		return lawId;
	}
	public void setLawId(String lawId) {
		this.lawId = lawId;
	}
	public String getLawSource() {
		return lawSource;
	}
	public void setLawSource(String lawSource) {
		this.lawSource = lawSource;
	}
	public String getLawAdres() {
		return lawAdres;
	}
	public void setLawAdres(String lawAdres) {
		this.lawAdres = lawAdres;
	}
	public String getReportUser() {
		return reportUser;
	}
	public void setReportUser(String reportUser) {
		this.reportUser = reportUser;
	}
	public String getReportSource() {
		return reportSource;
	}
	public void setReportSource(String reportSource) {
		this.reportSource = reportSource;
	}
	public Date getReportTm() {
		return reportTm;
	}
	public void setReportTm(Date reportTm) {
		this.reportTm = reportTm;
	}
	public String getReportPh() {
		return reportPh;
	}
	public void setReportPh(String reportPh) {
		this.reportPh = reportPh;
	}
	public String getLawNt() {
		return lawNt;
	}
	public void setLawNt(String lawNt) {
		this.lawNt = lawNt;
	}
	public String getHandleUser() {
		return handleUser;
	}
	public void setHandleUser(String handleUser) {
		this.handleUser = handleUser;
	}
	public String getpHandleUser() {
		return pHandleUser;
	}
	public void setpHandleUser(String pHandleUser) {
		this.pHandleUser = pHandleUser;
	}
	public String getHandleLink() {
		return handleLink;
	}
	public void setHandleLink(String handleLink) {
		this.handleLink = handleLink;
	}
	public String getHandleTmMit() {
		return handleTmMit;
	}
	public void setHandleTmMit(String handleTmMit) {
		this.handleTmMit = handleTmMit;
	}
	public String getIsFiling() {
		return isFiling;
	}
	public void setIsFiling(String isFiling) {
		this.isFiling = isFiling;
	}
	public String getIsFilClose() {
		return isFilClose;
	}
	public void setIsFilClose(String isFilClose) {
		this.isFilClose = isFilClose;
	}
	public String getFilCloseTerm() {
		return filCloseTerm;
	}
	public void setFilCloseTerm(String filCloseTerm) {
		this.filCloseTerm = filCloseTerm;
	}
	public String getWorkFlowId() {
		return workFlowId;
	}
	public void setWorkFlowId(String workFlowId) {
		this.workFlowId = workFlowId;
	}
	public String getImageId() {
		return imageId;
	}
	public void setImageId(String imageId) {
		this.imageId = imageId;
	}
	public String getLawImgId() {
		return lawImgId;
	}
	public void setLawImgId(String lawImgId) {
		this.lawImgId = lawImgId;
	}
	public String getReportUserId() {
		return reportUserId;
	}
	public void setReportUserId(String reportUserId) {
		this.reportUserId = reportUserId;
	}
	
}
