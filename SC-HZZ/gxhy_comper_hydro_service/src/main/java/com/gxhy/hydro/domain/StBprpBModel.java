package com.gxhy.hydro.domain;

import java.util.Date;

/**
 * 测站基础信息表
 * @author yb
 * @2017年9月19日上午10:14:35   
 * @CopyRight gxhy
 */
public class StBprpBModel {
	
	private String stcd;//测站编码
	private String stnm;//测站名称
	private String rvnm;//河流名称
	private Double lgtd;// 经度
	private Double lttd;//纬度
	private String sttp;//站类
	private String addvcd;//政区编码
	private String addvnm;//政区编码
	private String admauth;//建站单位
	private Date ptm;//最新雨量时间
	private Date ztm;//最新水位时间
	private Double z;//水位值
	private Double drp;//时段雨量值
	private String stlc;//测站位置
	private String  esstym;//建站年月
	private int channerId;//通道id
	public String getStcd() {
		return stcd;
	}
	public void setStcd(String stcd) {
		this.stcd = stcd;
	}
	public String getStnm() {
		return stnm;
	}
	public void setStnm(String stnm) {
		this.stnm = stnm;
	}
	public String getRvnm() {
		return rvnm;
	}
	public void setRvnm(String rvnm) {
		this.rvnm = rvnm;
	}
	public Double getLgtd() {
		return lgtd;
	}
	public void setLgtd(Double lgtd) {
		this.lgtd = lgtd;
	}
	public Double getLttd() {
		return lttd;
	}
	public void setLttd(Double lttd) {
		this.lttd = lttd;
	}
	public String getSttp() {
		return sttp;
	}
	public void setSttp(String sttp) {
		this.sttp = sttp;
	}
	public String getAddvcd() {
		return addvcd;
	}
	public void setAddvcd(String addvcd) {
		this.addvcd = addvcd;
	}
	public String getAdmauth() {
		return admauth;
	}
	public void setAdmauth(String admauth) {
		this.admauth = admauth;
	}
	public Date getPtm() {
		return ptm;
	}
	public void setPtm(Date ptm) {
		this.ptm = ptm;
	}
	public Date getZtm() {
		return ztm;
	}
	public void setZtm(Date ztm) {
		this.ztm = ztm;
	}
	public Double getDrp() {
		return drp;
	}
	public void setDrp(Double drp) {
		this.drp = drp;
	}
	public Double getZ() {
		return z;
	}
	public void setZ(Double z) {
		this.z = z;
	}
	public String getAddvnm() {
		return addvnm;
	}
	public void setAddvnm(String addvnm) {
		this.addvnm = addvnm;
	}
	public int getChannerId() {
		return channerId;
	}
	public void setChannerId(int channerId) {
		this.channerId = channerId;
	}
	public String getStlc() {
		return stlc;
	}
	public void setStlc(String stlc) {
		this.stlc = stlc;
	}
	public String getEsstym() {
		return esstym;
	}
	public void setEsstym(String esstym) {
		this.esstym = esstym;
	}
	
}
