package com.gxhy.sysmanager.domain;


public class Rsvrfcch {

	private Double   RAINHAV_AREA;//集雨面积
	
	private Double  FLDCP;//总库容
	
	private Double  CKFLZ;//校核洪水位
	
	private String  DSFLZ;//设计洪水位
	
	private String  W;//正常蓄水位
	
	private String  FSLTDZ;//汛限水位
	
	private String  XYFLDCP;//相应库容
	
	private String      DAMTP;//坝型
	
	private Double  MAXDAM;//最大坝高
	
	private Double  DAMLT;//坝顶长度
	
	private Double  DAMALT;//坝顶高程
	
	private Double  SPCRELE;//溢洪道堰顶高程
	
	private String DWLZ;  //设计（防洪标准（年一遇））
	
	private String CWLZ;  //校核（防洪标准（年一遇））
	
	private String PWLZ;  //现状（防洪标准（年一遇））

	public String getFSLTDZ() {
		return FSLTDZ;
	}

	public void setFSLTDZ(String fSLTDZ) {
		FSLTDZ = fSLTDZ;
	}

	public String getDWLZ() {
		return DWLZ;
	}

	public void setDWLZ(String dWLZ) {
		DWLZ = dWLZ;
	}

	public String getCWLZ() {
		return CWLZ;
	}

	public void setCWLZ(String cWLZ) {
		CWLZ = cWLZ;
	}

	public String getPWLZ() {
		return PWLZ;
	}

	public void setPWLZ(String pWLZ) {
		PWLZ = pWLZ;
	}

	public String getDSFLZ() {
		return DSFLZ;
	}

	public void setDSFLZ(String dSFLZ) {
		DSFLZ = dSFLZ;
	}

	public String getW() {
		return W;
	}

	public void setW(String w) {
		W = w;
	}

	public String getXYFLDCP() {
		return XYFLDCP;
	}

	public void setXYFLDCP(String xYFLDCP) {
		XYFLDCP = xYFLDCP;
	}

	public Double getRAINHAV_AREA() {
		return RAINHAV_AREA;
	}

	public void setRAINHAV_AREA(Double rAINHAV_AREA) {
		RAINHAV_AREA = rAINHAV_AREA;
	}

	public Double getFLDCP() {
		return FLDCP;
	}

	public void setFLDCP(Double fLDCP) {
		FLDCP = fLDCP;
	}

	public Double getCKFLZ() {
		return CKFLZ;
	}

	public void setCKFLZ(Double cKFLZ) {
		CKFLZ = cKFLZ;
	}

	public String getDAMTP() {
		return DAMTP;
	}

	public void setDAMTP(String dAMTP) {
		DAMTP = dAMTP;
	}

	public Double getMAXDAM() {
		return MAXDAM;
	}

	public void setMAXDAM(Double mAXDAM) {
		MAXDAM = mAXDAM;
	}

	public Double getDAMLT() {
		return DAMLT;
	}

	public void setDAMLT(Double dAMLT) {
		DAMLT = dAMLT;
	}

	public Double getDAMALT() {
		return DAMALT;
	}

	public void setDAMALT(Double dAMALT) {
		DAMALT = dAMALT;
	}

	public Double getSPCRELE() {
		return SPCRELE;
	}

	public void setSPCRELE(Double sPCRELE) {
		SPCRELE = sPCRELE;
	}
	

}
