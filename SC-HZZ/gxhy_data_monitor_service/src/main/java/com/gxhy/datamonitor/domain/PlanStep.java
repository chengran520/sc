package com.gxhy.datamonitor.domain;
/**
 * 应急预案表
 * @author yb
 *
 */
public class PlanStep {

	private String uuid;//预案的id
	
	private String name;//预案名称

	private String addvnm;//所属行政区
	
	private String rvCd;//河流id
	
	private String rvNm;//河流名称

	private String reportUserNM;//上报人名称
	
	private String prewAddes;//上传地址
	
	private String stepContent;//响应措施内容
	
	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getAddvnm() {
		return addvnm;
	}

	public void setAddvnm(String addvnm) {
		this.addvnm = addvnm;
	}

	public String getRvNm() {
		return rvNm;
	}

	public void setRvNm(String rvNm) {
		this.rvNm = rvNm;
	}

	public String getReportUserNM() {
		return reportUserNM;
	}

	public void setReportUserNM(String reportUserNM) {
		this.reportUserNM = reportUserNM;
	}

	public String getRvCd() {
		return rvCd;
	}

	public void setRvCd(String rvCd) {
		this.rvCd = rvCd;
	}

	public String getPrewAddes() {
		return prewAddes;
	}

	public void setPrewAddes(String prewAddes) {
		this.prewAddes = prewAddes;
	}

	public String getUuid() {
		return uuid;
	}

	public void setUuid(String uuid) {
		this.uuid = uuid;
	}

	public String getStepContent() {
		return stepContent;
	}

	public void setStepContent(String stepContent) {
		this.stepContent = stepContent;
	}
	
}
