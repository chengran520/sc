package com.gxhy.routine.domain;

import org.apache.commons.lang3.StringUtils;

import com.gxhy.base.util.Encodes;
import com.gxhy.base.util.FileUtil;

public class ResultMapModel {
	
	private String acceptId;
	
	private String pollutionType;
	
	private String reportTime;
	
	private String rvCd;
	
	private String rvNm;
	
	private int status;
	
	private String url;
	
	private String describe;

	private Double lttd;

	private Double lgtd;

	private String address;


	public String getPollutionType() {
		return pollutionType;
	}
	public void setPollutionType(String pollutionType) {
		this.pollutionType = pollutionType;
	}
	public String getReportTime() {
		return reportTime;
	}
	public void setReportTime(String reportTime) {
		this.reportTime = reportTime;
	}
	public int getStatus() {
		return status;
	}
	public void setStatus(int status) {
		this.status = status;
	}
	public String getUrl() {
		if(StringUtils.isNotBlank(this.url)){
			boolean flag = FileUtil.geContextPath(this.url);
			if(!flag){
				url = Encodes.getImgStr(this.url);
			}else{
				url = null;
			}
		}
		return url;
	}
	public void setUrl(String url) {
		this.url = url;
	}
	public String getAcceptId() {
		return acceptId;
	}
	public void setAcceptId(String acceptId) {
		this.acceptId = acceptId;
	}
	public String getDescribe() {
		return describe;
	}
	public void setDescribe(String describe) {
		this.describe = describe;
	}
	public Double getLttd() {
		return lttd;
	}
	public void setLttd(Double lttd) {
		this.lttd = lttd;
	}
	public Double getLgtd() {
		return lgtd;
	}
	public void setLgtd(Double lgtd) {
		this.lgtd = lgtd;
	}
	public String getAddress() {
		return address;
	}
	public void setAddress(String address) {
		this.address = address;
	}
	public String getRvCd() {
		return rvCd;
	}
	public void setRvCd(String rvCd) {
		this.rvCd = rvCd;
	}
	public String getRvNm() {
		return rvNm;
	}
	public void setRvNm(String rvNm) {
		this.rvNm = rvNm;
	}
}
