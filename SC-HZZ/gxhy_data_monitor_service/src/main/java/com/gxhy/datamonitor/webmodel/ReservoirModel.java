package com.gxhy.datamonitor.webmodel;

import org.apache.commons.lang3.StringUtils;

import com.gxhy.base.util.BasicSiteUtil;

public class ReservoirModel {
	
	
	private String rsCd;//水库编码
	
	private String rsName;//水库名称
	
	private String sttp;//站点类型
	
	private String engGrad;//工程类别 
	
	private String signer;//工程功能
	
	private double totCap; //总库容
	
	private String hnnm;//河流水系
	
	private String stlc;//所在地址
	
	private double lttd;//纬度
	
	private double lgtd;//经度
	
	private double drna;//集雨面积、

	private String esstym;//建站年月

    private String userNm;
	
	private String userPhone;
	
	private String sttpNm;
	
	public String getRsCd() {
		return rsCd;
	}

	public void setRsCd(String rsCd) {
		this.rsCd = rsCd;
	}
	
	public String getSigner() {
		return signer;
	}

	public void setSigner(String signer) {
		this.signer = signer;
	}

	public double getTotCap() {
		return totCap;
	}

	public void setTotCap(double totCap) {
		this.totCap = totCap;
	}

	public String getHnnm() {
		return hnnm;
	}

	public void setHnnm(String hnnm) {
		this.hnnm = hnnm;
	}

	public String getStlc() {
		return stlc;
	}

	public void setStlc(String stlc) {
		this.stlc = stlc;
	}

	public double getLttd() {
		return lttd;
	}

	public void setLttd(double lttd) {
		this.lttd = lttd;
	}

	public double getLgtd() {
		return lgtd;
	}

	public void setLgtd(double lgtd) {
		this.lgtd = lgtd;
	}

	public double getDrna() {
		return drna;
	}

	public void setDrna(double drna) {
		this.drna = drna;
	}

	public String getRsName() {
		return rsName;
	}

	public void setRsName(String rsName) {
		this.rsName = rsName;
	}

	public String getEngGrad() {
		String str="";
		if(engGrad.equals("1")){
			str="大（1）型";
		}else if(engGrad.equals("2")){
			str="大（2）型";
		}else if(engGrad.equals("3")){
			str="中型";
		}else if(engGrad.equals("4")){
			str="小（1）型";
		}else if(engGrad.equals("5")){
			str="小（2）型";
		}else{
			
		}
		return str;
	}

	public void setEngGrad(String engGrad) {
		this.engGrad = engGrad;
	}

	public String getUserNm() {
		return userNm;
	}

	public void setUserNm(String userNm) {
		this.userNm = userNm;
	}

	public String getUserPhone() {
		return userPhone;
	}

	public void setUserPhone(String userPhone) {
		this.userPhone = userPhone;
	}

	public String getEsstym() {
		return esstym;
	}

	public void setEsstym(String esstym) {
		this.esstym = esstym;
	}

	public String getSttp() {
		return sttp;
	}

	public void setSttp(String sttp) {
		this.sttp = sttp;
	}

	public String getSttpNm() {
		if(StringUtils.isNotBlank(sttp)){
			return BasicSiteUtil.getSttpNm(sttp);
		}else{
			return null;
		}
	}

	public void setSttpNm(String sttpNm) {
		this.sttpNm = sttpNm;
	}
}
