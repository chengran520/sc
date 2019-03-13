package com.gxhy.monitor.domain;

import javax.persistence.Column;
import javax.persistence.Id;
import javax.persistence.Table;

/**
 * 河道水质表
 * @author yb
 * @2017年7月14日上午10:01:53   
 * @CopyRight gxhy
 */
@Table(name = "IOT_RIVER_QUALITY")
public class IotWaterQualityModel {
	@Id
    @Column(name = "UUID")
	private String uuid;
	
	@Column(name = "STCD")
	private String stcd;
	
	@Column(name = "DO")
	private String dos;
	
	@Column(name = "COD")
	private String cod;
	
	@Column(name = "NH3")
	private String nh;
	
	@Column(name = "TP")
	private String tp;
	
	@Column(name = "TM")
	private String tm;
	
	//溶解氧
	@Column(name = "DO_QUA")
	private String doQua;
	//华学需氧量
	@Column(name = "COD_QUA")
	private String codQua;
	//氨氮
	@Column(name = "NH3_QUA")
	private String nhQua;
	//总磷
	@Column(name = "TP_QUA")
	private String tpQua;
	
	public String getDoQua() {
		return doQua;
	}
	public void setDoQua(String doQua) {
		this.doQua = doQua;
	}
	public String getCodQua() {
		return codQua;
	}
	public void setCodQua(String codQua) {
		this.codQua = codQua;
	}
	public String getNhQua() {
		return nhQua;
	}
	public void setNhQua(String nhQua) {
		this.nhQua = nhQua;
	}
	public String getTpQua() {
		return tpQua;
	}
	public void setTpQua(String tpQua) {
		this.tpQua = tpQua;
	}
	public String getStcd() {
		return stcd;
	}
	public void setStcd(String stcd) {
		this.stcd = stcd;
	}
	public String getDos() {
		return dos;
	}
	public void setDos(String dos) {
		this.dos = dos;
	}
	public String getCod() {
		return cod;
	}
	public void setCod(String cod) {
		this.cod = cod;
	}
	public String getNh() {
		return nh;
	}
	public void setNh(String nh) {
		this.nh = nh;
	}
	public String getTp() {
		return tp;
	}
	public void setTp(String tp) {
		this.tp = tp;
	}
	public String getTm() {
		return tm;
	}
	public void setTm(String tm) {
		this.tm = tm;
	}
	
	
}
