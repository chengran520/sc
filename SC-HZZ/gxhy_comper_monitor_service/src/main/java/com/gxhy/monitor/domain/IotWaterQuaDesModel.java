package com.gxhy.monitor.domain;

import javax.persistence.Column;
import javax.persistence.Id;
import javax.persistence.Table;

/**
 * 水质类别说明
 * @author yb
 * @2017年7月27日上午10:08:34   
 * @CopyRight gxhy
 */
@Table(name = "IOT_QUA_CLA_DESC")
public class IotWaterQuaDesModel {
	
	@Id
    @Column(name = "UUID")
	private String uuid;
	
	@Column(name = "QUA_NM")
	private String quaNm;
	
	@Column(name = "ONE_VAL")
	private String oneVal;
	
	@Column(name = "TWO_VAL")
	private String twoVal;
	
	@Column(name = "THREE_VAL")
	private String threeVal;
	
	@Column(name = "FOUR_VAL")
	private String fourVal;
	
	@Column(name = "FIVE_VAL")
	private String fiveVal;
	
	@Column(name = "SIX_VAL")
	private String sixVal;

	public String getQuaNm() {
		return quaNm;
	}

	public void setQuaNm(String quaNm) {
		this.quaNm = quaNm;
	}

	public String getOneVal() {
		return oneVal;
	}

	public void setOneVal(String oneVal) {
		this.oneVal = oneVal;
	}

	public String getTwoVal() {
		return twoVal;
	}

	public void setTwoVal(String twoVal) {
		this.twoVal = twoVal;
	}

	public String getThreeVal() {
		return threeVal;
	}

	public void setThreeVal(String threeVal) {
		this.threeVal = threeVal;
	}

	public String getFourVal() {
		return fourVal;
	}

	public void setFourVal(String fourVal) {
		this.fourVal = fourVal;
	}

	public String getFiveVal() {
		return fiveVal;
	}

	public void setFiveVal(String fiveVal) {
		this.fiveVal = fiveVal;
	}

	public String getSixVal() {
		return sixVal;
	}

	public void setSixVal(String sixVal) {
		this.sixVal = sixVal;
	}

	
}
