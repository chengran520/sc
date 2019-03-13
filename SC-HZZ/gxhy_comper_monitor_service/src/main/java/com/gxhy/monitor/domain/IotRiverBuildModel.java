package com.gxhy.monitor.domain;

import java.util.Date;

public class IotRiverBuildModel {
    private String uuid;

    private String projectName;

    private String buildContent;

    private String investTotal;

    private String finishTotalSchedule;

    private Date planStime;

    private Date planEtime;

    private String buildUnitName;

    private String buildUnitContacts;

    private String buildUnitContactsTel;

    private Date createTime;

    private Date updateTime;
    
    private String url;
    
    public String getUuid() {
        return uuid;
    }

    public void setUuid(String uuid) {
        this.uuid = uuid == null ? null : uuid.trim();
    }

    public String getProjectName() {
        return projectName;
    }

    public void setProjectName(String projectName) {
        this.projectName = projectName == null ? null : projectName.trim();
    }

    public String getBuildContent() {
        return buildContent;
    }

    public void setBuildContent(String buildContent) {
        this.buildContent = buildContent == null ? null : buildContent.trim();
    }

    public String getInvestTotal() {
        return investTotal;
    }

    public void setInvestTotal(String investTotal) {
        this.investTotal = investTotal == null ? null : investTotal.trim();
    }

    public String getFinishTotalSchedule() {
        return finishTotalSchedule;
    }

    public void setFinishTotalSchedule(String finishTotalSchedule) {
        this.finishTotalSchedule = finishTotalSchedule == null ? null : finishTotalSchedule.trim();
    }

    public Date getPlanStime() {
        return planStime;
    }

    public void setPlanStime(Date planStime) {
        this.planStime = planStime;
    }

    public Date getPlanEtime() {
        return planEtime;
    }

    public void setPlanEtime(Date planEtime) {
        this.planEtime = planEtime;
    }

    public String getBuildUnitName() {
        return buildUnitName;
    }

    public void setBuildUnitName(String buildUnitName) {
        this.buildUnitName = buildUnitName == null ? null : buildUnitName.trim();
    }

    public String getBuildUnitContacts() {
        return buildUnitContacts;
    }

    public void setBuildUnitContacts(String buildUnitContacts) {
        this.buildUnitContacts = buildUnitContacts == null ? null : buildUnitContacts.trim();
    }

    public String getBuildUnitContactsTel() {
        return buildUnitContactsTel;
    }

    public void setBuildUnitContactsTel(String buildUnitContactsTel) {
        this.buildUnitContactsTel = buildUnitContactsTel == null ? null : buildUnitContactsTel.trim();
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

	public String getUrl() {
		return url;
	}

	public void setUrl(String url) {
		this.url = url;
	}
}