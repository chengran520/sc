package com.gxhy.hydro.webmodel;
import java.util.ArrayList;
import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

public class PptnResultModel {
	
	  private String stcd;//测站编码
	  
	  private String stnm;//测站名称
	  
	  private Date tm;//上报时间
	  
	  private Double drp;//小时雨量
	  
	  private Double dyp;//日雨量
	  
	  private int num;//单元格合并数量


	public int getNum() {
		return num;
	}

	public void setNum(int num) {
		this.num = num;
	}

	public String getStcd() {
		return stcd;
	}
	
	public void setStcd(String stcd) {
		this.stcd = stcd;
	}
	
	public String getStnm() {
		return stnm;
	}
	
	public void setStnm(String stnm) {
		this.stnm = stnm;
	}
	
	public Date getTm() {
		return tm;
	}
	
	public void setTm(Date tm) {
		this.tm = tm;
	}
	
	public Double getDrp() {
		return drp;
	}
	
	public void setDrp(Double drp) {
		this.drp = drp;
	}
	
	public Double getDyp() {
		return dyp;
	}
	
	public void setDyp(Double dyp) {
		this.dyp = dyp;
	}


}
