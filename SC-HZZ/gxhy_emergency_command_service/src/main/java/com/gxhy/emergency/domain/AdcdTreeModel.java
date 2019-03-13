package com.gxhy.emergency.domain;

import java.io.Serializable;


public class AdcdTreeModel implements Serializable{
	
	private static final long serialVersionUID = 1L;

	private String id;
	
	private String pid;
	
	private String name;
	
	private Boolean nocheck=false;

	public String getId() {
		return id;
	}

	public void setId(String id) {
		this.id = id;
	}

	public String getPid() {
		return pid;
	}

	public void setPid(String pid) {
		this.pid = pid;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public boolean isNocheck() {
		return nocheck;
	}

	public void setNocheck(boolean nocheck) {
		this.nocheck = nocheck;
	}



}
