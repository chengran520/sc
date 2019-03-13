package com.gxhy.routine.webmodel;

import java.io.Serializable;
import java.io.UnsupportedEncodingException;
import java.util.Date;

import org.apache.commons.lang3.StringUtils;

/**
 * 查询参数
 * @author yb
 * @2017年7月28日下午6:50:58   
 * @CopyRight gxhy
 */
public class QueryModel implements Serializable{
	
	private String id;
	
	private String stm;
	
	private String etm;
	
	private String keyword;

	private String adcd;
	
	private String addvcd1;
	
	private String addvcd2;
	
	private Integer type;
	
	private Date reportTime;
	
	
	public String getStm() {
		return stm;
	}

	public void setStm(String stm) {
		this.stm = stm;
	}

	public String getEtm() {
		return etm;
	}

	public void setEtm(String etm) {
		this.etm = etm;
	}

	public String getKeyword() {
		
		return keyword;
	}

	public void setKeyword(String keyword) {
		try {
			if(StringUtils.isNotBlank(keyword)){				
				keyword =  new String(keyword.getBytes("ISO-8859-1"),"UTF-8");
			}
		} catch (UnsupportedEncodingException e) {
			e.printStackTrace();
		}
		this.keyword = keyword;
	}

	public String getAdcd() {
		return adcd;
	}

	public void setAdcd(String adcd) {
		this.adcd = adcd;
	}

	public String getId() {
		return id;
	}

	public void setId(String id) {
		this.id = id;
	}

	public String getAddvcd1() {
		return addvcd1;
	}

	public void setAddvcd1(String addvcd1) {
		this.addvcd1 = addvcd1;
	}

	public String getAddvcd2() {
		return addvcd2;
	}

	public void setAddvcd2(String addvcd2) {
		this.addvcd2 = addvcd2;
	}

	public Integer getType() {
		return type;
	}

	public void setType(Integer type) {
		this.type = type;
	}

	public Date getReportTime() {
		return reportTime;
	}

	public void setReportTime(Date reportTime) {
		this.reportTime = reportTime;
	}


}
