package com.gxhy.file.domain;
import java.util.Date;
import javax.persistence.Column;
import javax.persistence.Id;
import javax.persistence.Table;

@Table(name = "IOT_PROJECT_FILE")
public class ProjectFileModel {
	@Column(name ="UUID")
	private String uuid;
	
	@Column(name ="PROJECT_NAME")
	private String projectName;//项目名称
	
	@Column(name ="START_TIME")
	private String startTime;//项目开始时间
	
	@Column(name ="END_TIME")
	private String endTime;//项目结束时间
	
	@Column(name ="CREAT_TIME")
	private Date creatTime;//项目创建时间
    
	@Column(name ="UPDATE_TIME")
	private Date updateTime;//项目更新时间
	
	@Column(name ="DESCRIBE")
	private String describe;//项目描述
	
	@Column(name ="APPLICANT")
	private String applicant;//项目申请人id
		
	private String applicantNm;//项目申请人名称
	
	@Column(name ="TYPE")
	private String type;//项目类型
	
	private String typeNm;//类型名称
	
	@Column(name ="ISFOREVER")
	private String isForever;//是否永久
	
	@Column(name ="FILETYPE")
	private String fileType;//文案类型
	
	public String getUuid() {
		return uuid;
	}

	public void setUuid(String uuid) {
		this.uuid = uuid;
	}

	public String getProjectName() {
		return projectName;
	}

	public void setProjectName(String projectName) {
		this.projectName = projectName;
	}
	
	public String getDescribe() {
		return describe;
	}

	public void setDescribe(String describe) {
		this.describe = describe;
	}
	
	public String getApplicant() {
		return applicant;
	}

	public void setApplicant(String applicant) {
		this.applicant = applicant;
	}
	public Date getCreatTime() {
		return creatTime;
	}

	public void setCreatTime(Date creatTime) {
		this.creatTime = creatTime;
	}

	public String getEndTime() {
		return endTime;
	}

	public void setEndTime(String endTime) {
		this.endTime = endTime;
	}

	public void setStartTime(String startTime) {
		this.startTime = startTime;
	}

	public String getStartTime() {
		return startTime;
	}

	public Date getUpdateTime() {
		return updateTime;
	}

	public void setUpdateTime(Date updateTime) {
		this.updateTime = updateTime;
	}

	public String getType() {
		return type;
	}

	public void setType(String type) {
		this.type = type;
	}

	public String getTypeNm() {
		return typeNm;
	}

	public void setTypeNm(String typeNm) {
		this.typeNm = typeNm;
	}

	public String getApplicantNm() {
		return applicantNm;
	}

	public void setApplicantNm(String applicantNm) {
		this.applicantNm = applicantNm;
	}

	public String getIsForever() {
		return isForever;
	}

	public void setIsForever(String isForever) {
		this.isForever = isForever;
	}

	public String getFileType() {
		return fileType;
	}

	public void setFileType(String fileType) {
		this.fileType = fileType;
	}

	
}
