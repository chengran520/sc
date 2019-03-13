package com.gxhy.iot.river;

import java.util.Date;

/**
 * 河流基础信息
 * @author yb
 *
 */
public class StRiverB{
	//河流编码
	private String rvCd;
	//河流名称
	private String rvNm;
	//所属水系
	private String hnnm;
	//所属流域
	private String bsnm;
	//河流岸别
	private String stbk;
	//河流长度
	private Double rvlt;
	//河流面积
	private Double draArea;
	//上级河流编码
	private String prvCd;
	//上级河流名称
	private String prvNm;
	//河源
	private String rvOn;
	//河源经度
	private Double rvOnLgtd;
	//河源纬度
	private Double rvOnLttd;
	//河口
	private String rvMh;
	//河口经度
	private Double rvMhLgtd;
	//河口纬度
	private Double rvMhLttd;
	//行政区
	private String addvcd;
	//行政区名称
	private String addvnm;
	//创建时间
	private Date crtTm;
	//更新时间
	private Date updTm;
	//操作人员
	private String OperUser;
	//备注
	private String dt;
	//对应预案文件地址
	private String prewAddes;
	
	//类别  1：河流，2：水库
	private String tp;
	
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
	public String getHnnm() {
		return hnnm;
	}
	public void setHnnm(String hnnm) {
		this.hnnm = hnnm;
	}
	public String getBsnm() {
		return bsnm;
	}
	public void setBsnm(String bsnm) {
		this.bsnm = bsnm;
	}
	public String getStbk() {
		return stbk;
	}
	public void setStbk(String stbk) {
		this.stbk = stbk;
	}
	public Double getRvlt() {
		return rvlt;
	}
	public void setRvlt(Double rvlt) {
		this.rvlt = rvlt;
	}
	public Double getDraArea() {
		return draArea;
	}
	public void setDraArea(Double draArea) {
		this.draArea = draArea;
	}
	public String getRvOn() {
		return rvOn;
	}
	public void setRvOn(String rvOn) {
		this.rvOn = rvOn;
	}
	public Double getRvOnLgtd() {
		return rvOnLgtd;
	}
	public void setRvOnLgtd(Double rvOnLgtd) {
		this.rvOnLgtd = rvOnLgtd;
	}
	public Double getRvOnLttd() {
		return rvOnLttd;
	}
	public void setRvOnLttd(Double rvOnLttd) {
		this.rvOnLttd = rvOnLttd;
	}
	public String getRvMh() {
		return rvMh;
	}
	public void setRvMh(String rvMh) {
		this.rvMh = rvMh;
	}
	public Double getRvMhLgtd() {
		return rvMhLgtd;
	}
	public void setRvMhLgtd(Double rvMhLgtd) {
		this.rvMhLgtd = rvMhLgtd;
	}
	public Double getRvMhLttd() {
		return rvMhLttd;
	}
	public void setRvMhLttd(Double rvMhLttd) {
		this.rvMhLttd = rvMhLttd;
	}
	public String getAddvcd() {
		return addvcd;
	}
	public void setAddvcd(String addvcd) {
		this.addvcd = addvcd;
	}
	public String getAddvnm() {
		return addvnm;
	}
	public void setAddvnm(String addvnm) {
		this.addvnm = addvnm;
	}
	public Date getCrtTm() {
		return crtTm;
	}
	public void setCrtTm(Date crtTm) {
		this.crtTm = crtTm;
	}
	public Date getUpdTm() {
		return updTm;
	}
	public void setUpdTm(Date updTm) {
		this.updTm = updTm;
	}
	public String getOperUser() {
		return OperUser;
	}
	public void setOperUser(String operUser) {
		OperUser = operUser;
	}
	public String getDt() {
		return dt;
	}
	public void setDt(String dt) {
		this.dt = dt;
	}
	public String getTp() {
		return tp;
	}
	public void setTp(String tp) {
		this.tp = tp;
	}
	public String getPrvCd() {
		return prvCd;
	}
	public void setPrvCd(String prvCd) {
		this.prvCd = prvCd;
	}
	public String getPrvNm() {
		return prvNm;
	}
	public void setPrvNm(String prvNm) {
		this.prvNm = prvNm;
	}
	public String getPrewAddes() {
		return prewAddes;
	}
	public void setPrewAddes(String prewAddes) {
		this.prewAddes = prewAddes;
	}
	
}
