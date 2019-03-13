package com.gxhy.sysmanager.domain;

import org.apache.commons.lang3.StringUtils;

public class ZtreeMenuModel implements java.io.Serializable{
	private String id;
	
	private String pid;
	
	private String name;
	
	private String job;
	
	private String nm;
	
	@SuppressWarnings("unused")
	private boolean nocheck=false;
	
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
		if(StringUtils.isNotBlank(job)){
			String str=nm+"("+job+")";
			return str;
		}else{
			return nm;
		}
		
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

	public boolean equals(Object obj){
		boolean flag=false;
		//判断对像是否相同，基本是不可能的
		if(obj==this){
		 flag=true;
		}
		if(!(obj instanceof ZtreeMenuModel)){
		 flag=false;
		}else{
			ZtreeMenuModel model=(ZtreeMenuModel)obj;
		    if(model.getId().equals(this.id) && model.getName().equals(this.name)){
	            flag=true;
	         }
		 }
		    System.out.println(flag);
		    return flag;
		 }
	
	public int hashCode() {  
		  int result = 17;  
		 result = result * 31 + name.hashCode();    
		  return result;  
	}
	public String getJob() {
		return job;
	}
	public void setJob(String job) {
		this.job = job;
	}
	public String getNm() {
		return nm;
	}
	public void setNm(String nm) {
		this.nm = nm;
	}
}
 


