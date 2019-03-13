package com.gxhy.hydro.webmodel;

import java.io.UnsupportedEncodingException;
import java.util.Date;

/**
 * 条件查询model
 * @author yb
 * @2017年8月7日下午2:11:44   
 * @CopyRight gxhy
 */
public class QueryReadingModel {
	
	private String rvMeasId;
	
	private String stnm;//测站名称
	
	private Date tm;//日期
	
	private String  val;

    private String stcd;//测站编码
    
    private String stm;//开始时间
    
    private String etm;//结束时间
    
    private String keyword;//关键字
    
	public String getRvMeasId() {
		return rvMeasId;
	}

	public void setRvMeasId(String rvMeasId) {
		this.rvMeasId = rvMeasId;
	}

	public Date getTm() {
		return tm;
	}

	public void setTm(Date tm) {
		this.tm = tm;
	}

	public String getVal() {
		return val;
	}

	public void setVal(String val) {
		this.val = val;
	}

	public String getStnm() {
		
		return stnm;
	}

	public void setStnm(String stnm) {
		this.stnm = stnm;
	}

	public String getStcd() {
		return stcd;
	}

	public void setStcd(String stcd) {
		this.stcd = stcd;
	}
	public String getKeyword() throws Exception {
		return keyword;
	}

	public void setKeyword(String keyword) {
		this.keyword = keyword;
	}

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
	
	
}
