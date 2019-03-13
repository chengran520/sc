package com.gxhy.file.domain;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Id;
import javax.persistence.Table;

@Table(name = "SYS_SYSTEM")
public class FileModel {
	@Id
	@Column(name ="UUID")
	 private String uuid;
	
	@Column(name ="FILE_ID")
	 private String fileId;
	
	@Column(name ="FILE_TITLE")
	 private String fileTitle;
	
	@Column(name ="FILE_CONTENT")
	 private String fileContent;
	
	@Column(name ="FILE_TYPE")
	 private int fileType;
	
	@Column(name ="CREAT_TM")
	 private Date creatTime;
	
	@Column(name ="UPDATE_TM")
	 private Date updateTime;
	
	@Column(name ="ISSUSER")
	 private String issuser;
	
	@Column(name ="FILE_OPEN")
	 private int fileOpen;
	
	@Column(name ="FILE_GRADE")
	 private int fileGrade;
	
	@Column(name ="FILE_GRADE_TYPE")
	 private int fileGradeType;
	
	public String getUuid() {
		return uuid;
	}
	public void setUuid(String uuid) {
		this.uuid = uuid;
	}
	public String getFileId() {
		return fileId;
	}
	public void setFileId(String fileId) {
		this.fileId = fileId;
	}
	public String getFileTitle() {
		return fileTitle;
	}
	public void setFileTitle(String fileTitle) {
		this.fileTitle = fileTitle;
	}
	public String getFileContent() {
		return fileContent;
	}
	public void setFileContent(String fileContent) {
		this.fileContent = fileContent;
	}
	public int getFileType() {
		return fileType;
	}
	public void setFileType(int fileType) {
		this.fileType = fileType;
	}
	public String getIssuser() {
		return issuser;
	}
	public void setIssuser(String issuser) {
		this.issuser = issuser;
	}
	public Date getCreatTime() {
		return creatTime;
	}
	public void setCreatTime(Date creatTime) {
		this.creatTime = creatTime;
	}
	public Date getUpdateTime() {
		return updateTime;
	}
	public void setUpdateTime(Date updateTime) {
		this.updateTime = updateTime;
	}
	public int getFileOpen() {
		return fileOpen;
	}
	public void setFileOpen(int fileOpen) {
		this.fileOpen = fileOpen;
	}
	public int getFileGrade() {
		return fileGrade;
	}
	public void setFileGrade(int fileGrade) {
		this.fileGrade = fileGrade;
	}
	public int getFileGradeType() {
		return fileGradeType;
	}
	public void setFileGradeType(int fileGradeType) {
		this.fileGradeType = fileGradeType;
	}	
 
}
