package com.gxhy.base.model;

import java.util.Date;

/**
 * 日志记录表
 * @author yb
 *
 */
public class LogModel {
  
	private String uuid;
	
	private String method;
	
	private String requestIp;
	
	private String createBy;
	
	private String createDate;
	
	private String operationName;
	
	private String operationType;
	
	//日志级别
	private String logLevel;
	
	//日志类别（1、人工，2、系统）
	private String logType;
	
	//日志操作Class
	private String logClass;
	
	//日志内容 
	private String operContent;
	
	//日志异常
	private String logException;
	
	public String getUuid() {
		return uuid;
	}
	public void setUuid(String uuid) {
		this.uuid = uuid;
	}
	public String getMethod() {
		return method;
	}
	public void setMethod(String method) {
		this.method = method;
	}

	public String getRequestIp() {
		return requestIp;
	}
	public void setRequestIp(String requestIp) {
		this.requestIp = requestIp;
	}
	public String getCreateBy() {
		return createBy;
	}
	public void setCreateBy(String createBy) {
		this.createBy = createBy;
	}

	public String getOperationName() {
		return operationName;
	}
	public void setOperationName(String operationName) {
		this.operationName = operationName;
	}
	public String getOperationType() {
		return operationType;
	}
	public void setOperationType(String operationType) {
		this.operationType = operationType;
	}
	public String getCreateDate() {
		return createDate;
	}
	public void setCreateDate(String createDate) {
		this.createDate = createDate;
	}
	public String getLogLevel() {
		return logLevel;
	}
	public void setLogLevel(String logLevel) {
		this.logLevel = logLevel;
	}
	public String getLogType() {
		return logType;
	}
	public void setLogType(String logType) {
		this.logType = logType;
	}
	public String getLogClass() {
		return logClass;
	}
	public void setLogClass(String logClass) {
		this.logClass = logClass;
	}
	public String getOperContent() {
		return operContent;
	}
	public void setOperContent(String operContent) {
		this.operContent = operContent;
	}
	public String getLogException() {
		return logException;
	}
	public void setLogException(String logException) {
		this.logException = logException;
	}
	
}
   