package com.gxhy.datamonitor.domain;

import java.util.Date;

import com.gxhy.base.util.BasicSiteUtil;

/**
 * 基本测站信息
 * @author yb
 *
 */
public class BasicSiteModel {

	 private String stcd;//测站编码
	 
	 private String stnm;//测站名称
	 
	 private String rvnm;//河流名称
	 
	 private String hnnm;//水系名称
	 
	 private String bsnm;//流域名称
	 
	 private String lttdOld;//经度
	 
	 private String lgtdOld;//纬度
	 
	 private String stlc;//站址
	 
	 private String addvcd;//行政区划码
	 
	 private String dtmnm;//基面名称
	 
     private Double mdbz;
	 
	 private Double mdpr;//基面修正值
	 
	 private Double dtmel;//基面高程
	 
	 private String sttp;//站类

	 private String sttpNm;//站类名称
	 
	 private int dfrtms;
	 
	 private String fritm;
	 
	 private String frgrd;//报汛等级
	 
	 private String edfrym;
	 
	 private String bgfrym;//始报年月
	 
	 private String admauth;//信息管理单位
	 
	 private String stbk;//测站岸别
	 
	 private Double drna;//集水面积
	 
	 private String phcd;//拼音码
	 
	 private String subnm;
	 
	 private String stcdt;
	 
	 private Double lgtd;//经度
	 
	 private Double lttd;//纬度
	 
	 private Double dtpr;
	 
	 private String esstym;//建站年月
	 
	 private String atcunit;//隶属行业单位
	 
	 private String locality;//交换管理单位
	 
	 private Double stazt;//测站方位
	 
	 private Double dstrvm;//至河口距离
	 
	 private String usfl;//启用标志
	 
	 private String comments;//备注
	 
	 private Date modiTime;
	 
	 private int follow;
	 
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
	public String getLttdOld() {
		return lttdOld;
	}
	public void setLttdOld(String lttdOld) {
		this.lttdOld = lttdOld;
	}
	public String getLgtdOld() {
		return lgtdOld;
	}
	public void setLgtdOld(String lgtdOld) {
		this.lgtdOld = lgtdOld;
	}
	public String getStlc() {
		return stlc;
	}
	public void setStlc(String stlc) {
		this.stlc = stlc;
	}
	public String getAddvcd() {
		return addvcd;
	}
	public void setAddvcd(String addvcd) {
		this.addvcd = addvcd;
	}
	public Double getMdbz() {
		return mdbz;
	}
	public void setMdbz(Double mdbz) {
		this.mdbz = mdbz;
	}
	public Double getMdpr() {
		return mdpr;
	}
	public void setMdpr(Double mdpr) {
		this.mdpr = mdpr;
	}
	public String getDtmnm() {
		return dtmnm;
	}
	public void setDtmnm(String dtmnm) {
		this.dtmnm = dtmnm;
	}
	public Double getDtmel() {
		return dtmel;
	}
	public void setDtmel(Double dtmel) {
		this.dtmel = dtmel;
	}
	public int getDfrtms() {
		return dfrtms;
	}
	public void setDfrtms(int dfrtms) {
		this.dfrtms = dfrtms;
	}
	public String getFritm() {
		return fritm;
	}
	public void setFritm(String fritm) {
		this.fritm = fritm;
	}
	public String getFrgrd() {
		return frgrd;
	}
	public void setFrgrd(String frgrd) {
		this.frgrd = frgrd;
	}
	public String getEdfrym() {
		return edfrym;
	}
	public void setEdfrym(String edfrym) {
		this.edfrym = edfrym;
	}
	public String getBgfrym() {
		return bgfrym;
	}
	public void setBgfrym(String bgfrym) {
		this.bgfrym = bgfrym;
	}
	public String getAdmauth() {
		return admauth;
	}
	public void setAdmauth(String admauth) {
		this.admauth = admauth;
	}
	public String getStbk() {
		return stbk;
	}
	public void setStbk(String stbk) {
		this.stbk = stbk;
	}
	public Double getDrna() {
		return drna;
	}
	public void setDrna(Double drna) {
		this.drna = drna;
	}
	public String getPhcd() {
		return phcd;
	}
	public void setPhcd(String phcd) {
		this.phcd = phcd;
	}
	public String getSubnm() {
		return subnm;
	}
	public void setSubnm(String subnm) {
		this.subnm = subnm;
	}
	public String getStcdt() {
		return stcdt;
	}
	public void setStcdt(String stcdt) {
		this.stcdt = stcdt;
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
	public Double getDtpr() {
		return dtpr;
	}
	public void setDtpr(Double dtpr) {
		this.dtpr = dtpr;
	}
	public String getEsstym() {
		return esstym;
	}
	public void setEsstym(String esstym) {
		this.esstym = esstym;
	}
	public String getAtcunit() {
		return atcunit;
	}
	public void setAtcunit(String atcunit) {
		this.atcunit = atcunit;
	}
	public String getLocality() {
		return locality;
	}
	public void setLocality(String locality) {
		this.locality = locality;
	}
	public Double getStazt() {
		return stazt;
	}
	public void setStazt(Double stazt) {
		this.stazt = stazt;
	}
	public Double getDstrvm() {
		return dstrvm;
	}
	public void setDstrvm(Double dstrvm) {
		this.dstrvm = dstrvm;
	}
	public String getUsfl() {
		return usfl;
	}
	public void setUsfl(String usfl) {
		this.usfl = usfl;
	}
	public String getComments() {
		return comments;
	}
	public void setComments(String comments) {
		this.comments = comments;
	}
	public Date getModiTime() {
		return modiTime;
	}
	public void setModiTime(Date modiTime) {
		this.modiTime = modiTime;
	}
	public int getFollow() {
		return follow;
	}
	public void setFollow(int follow) {
		this.follow = follow;
	}

	public String getSttp() {
		return sttp;
	}

	public void setSttp(String sttp) {
		this.sttp = sttp;
	}


	public void setSttpNm(String sttpNm) {
		this.sttpNm = sttpNm;
	}

	public String getSttpNm() {
		return BasicSiteUtil.getSttpNm(sttp);
	}


}

