package com.gxhy.sysmanager.domain;


public class Reservoir {
	private String RS_NM;//水库名称
	
	private String RS_TP;//水库类别
	
	private String ESSTYM;//建设时间
	
	private String RECEMTM;//完成除险加固时间
	
	private String AD_NM;//行政区域
	
	private String AD_CD;//行政区编码
	
	private String CITY;//所在县（市)
	
	private String COUNTRY;//所在乡镇
	
	private String COUNTY;//所在村
	
	private String RVNM;//所属河流
	
	private String ADMAUTH;//管理单位
	
	private String RS_DEPT;//主管部门

	public String getRS_NM() {
		return RS_NM;
	}

	public void setRS_NM(String rS_NM) {
		RS_NM = rS_NM;
	}

	public String getRS_TP() {
		return RS_TP;
	}

	public void setRS_TP(String rS_TP) {
		RS_TP = rS_TP;
	}

	public String getRECEMTM() {
		return RECEMTM;
	}

	public void setRECEMTM(String rECEMTM) {
		RECEMTM = rECEMTM;
	}

	public String getAD_NM() {
		return AD_NM;
	}

	public void setAD_NM(String aD_NM) {
		AD_NM = aD_NM;
	}

	public String getAD_CD() {
		return AD_CD;
	}

	public void setAD_CD(String aD_CD) {
		AD_CD = aD_CD;
	}

	public String getCITY() {
		return CITY;
	}

	public void setCITY(String cITY) {
		CITY = cITY;
	}

	public String getCOUNTRY() {
		return COUNTRY;
	}

	public void setCOUNTRY(String cOUNTRY) {
		COUNTRY = cOUNTRY;
	}

	public String getCOUNTY() {
		return COUNTY;
	}

	public void setCOUNTY(String cOUNTY) {
		COUNTY = cOUNTY;
	}

	public String getRVNM() {
		return RVNM;
	}

	public void setRVNM(String rVNM) {
		RVNM = rVNM;
	}

	public String getADMAUTH() {
		return ADMAUTH;
	}

	public void setADMAUTH(String aDMAUTH) {
		ADMAUTH = aDMAUTH;
	}

	public String getRS_DEPT() {
		return RS_DEPT;
	}

	public void setRS_DEPT(String rS_DEPT) {
		RS_DEPT = rS_DEPT;
	}

	public String getESSTYM() {
		return ESSTYM;
	}

	public void setESSTYM(String eSSTYM) {
		ESSTYM = eSSTYM;
	}
}
