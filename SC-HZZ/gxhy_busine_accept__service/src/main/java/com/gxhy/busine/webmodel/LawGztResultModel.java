package com.gxhy.busine.webmodel;

import java.util.Date;

public class LawGztResultModel {
    
	private String uuid;
	
	private String busineDesc;
	
	private Date updateTm;


	public String getBusineDesc() {
		return busineDesc;
	}

	public void setBusineDesc(String busineDesc) {
		this.busineDesc = busineDesc;
	}

	public Date getUpdateTm() {
		return updateTm;
	}

	public void setUpdateTm(Date updateTm) {
		this.updateTm = updateTm;
	}

	public String getUuid() {
		return uuid;
	}

	public void setUuid(String uuid) {
		this.uuid = uuid;
	}
	
	
	
}
