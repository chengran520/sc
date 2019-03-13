package com.gxhy.datamonitor.webmodel;

import com.alibaba.fastjson.JSONObject;
import com.gxhy.adcd.persistence.AdcdMapper;
import com.gxhy.adcd.service.AdcdService;
import com.gxhy.base.model.RequestModel;
import com.gxhy.base.util.RvNmUtil;
import com.gxhy.base.util.SpringUtils;

public class RiverModel {

	   private String RV_NM;//水系  1
	  
	   private String RV_CD;//河流编码 2
	    
	   private String RVNM;//河流名称  3
	   
	   private int RV_GRD;//河流级别  4
	   
	   private String STBK;//汇入岸别  5
	   
	   private String RV_LT;//长度(km)  6
	   
	   private Double DRA_AREA;//流域面积(km2)  7
	   
	   private String P_RV_CD;//上一级河流编码   8
	   
	   private String P_RV_NM;//上一级河流   9
	   
	   private String FTREG_AD;//流经    10
	   
	   private String RV_OIGIN;//河源   11
	    
	   private String RV_MTH;//河口    12
	   
	   private String RVNM_CT;//河名备注   13
	   
	   private String CT;//备注
	
	   private String ADDVCD;//行政区编码
       
	   private String ADDVNM;//行政区名称
	   private Double LGTD;
	   
	   private Double LTTD;
	   
	   private String RV_DETAIL;
	   
	   private String RV_USERNM;//河长名称
	   
	   private String RvNmStr;//河长头衔
	   
	   private String RV_TYPE;//类型
	   
	   private String RV_U_PHONE;//河长电话
	   
	   private String RV_U_UNIT;//单位
	   

	   
	   
	   
		public String getRV_CD() {
			return RV_CD;
		}
		public void setRV_CD(String rV_CD) {
			RV_CD = rV_CD;
		}
		public String getRV_NM() {
			return RV_NM;
		}
		public void setRV_NM(String rV_NM) {
			RV_NM = rV_NM;
		}
		public String getRVNM() {
			return RVNM;
		}
		public void setRVNM(String rVNM) {
			RVNM = rVNM;
		}
		public String getSTBK() {
			return STBK;
		}
		public void setSTBK(String sTBK) {
			STBK = sTBK;
		}

		public String getP_RV_CD() {
			return P_RV_CD;
		}
		public void setP_RV_CD(String p_RV_CD) {
			P_RV_CD = p_RV_CD;
		}
		public String getP_RV_NM() {
			return P_RV_NM;
		}
		public void setP_RV_NM(String p_RV_NM) {
			P_RV_NM = p_RV_NM;
		}
		public String getFTREG_AD() {
			return FTREG_AD;
		}
		public void setFTREG_AD(String fTREG_AD) {
			FTREG_AD = fTREG_AD;
		}
		public String getRV_OIGIN() {
			return RV_OIGIN;
		}
		public void setRV_OIGIN(String rV_OIGIN) {
			RV_OIGIN = rV_OIGIN;
		}
		public String getRV_MTH() {
			return RV_MTH;
		}
		public void setRV_MTH(String rV_MTH) {
			RV_MTH = rV_MTH;
		}
		public String getRVNM_CT() {
			return RVNM_CT;
		}
		public void setRVNM_CT(String rVNM_CT) {
			RVNM_CT = rVNM_CT;
		}
		public String getCT() {
			return CT;
		}
		public void setCT(String cT) {
			CT = cT;
		}
		public String getRV_LT() {
			return RV_LT;
		}
		public void setRV_LT(String rV_LT) {
			RV_LT = rV_LT;
		}

		public int getRV_GRD() {
			return RV_GRD;
		}
		public void setRV_GRD(int rV_GRD) {
			RV_GRD = rV_GRD;
		}
		public String getADDVCD() {
			return ADDVCD;
		}
		public void setADDVCD(String aDDVCD) {
			ADDVCD = aDDVCD;
		}
		public Double getLGTD() {
			return LGTD;
		}
		public void setLGTD(Double lGTD) {
			LGTD = lGTD;
		}
		public Double getLTTD() {
			return LTTD;
		}
		public void setLTTD(Double lTTD) {
			LTTD = lTTD;
		}
		public String getRV_DETAIL() {
			return RV_DETAIL;
		}
		public void setRV_DETAIL(String rV_DETAIL) {
			RV_DETAIL = rV_DETAIL;
		}
		public Double getDRA_AREA() {
			return DRA_AREA;
		}
		public void setDRA_AREA(Double dRA_AREA) {
			DRA_AREA = dRA_AREA;
		}
		public String getRV_USERNM() {
			return RV_USERNM;
		}
		public void setRV_USERNM(String rV_USERNM) {
			RV_USERNM = rV_USERNM;
		}
		public String getRV_TYPE() {
			return RV_TYPE;
		}
		public void setRV_TYPE(String rV_TYPE) {
			RV_TYPE = rV_TYPE;
		}
		public String getRV_U_PHONE() {
			return RV_U_PHONE;
		}
		public void setRV_U_PHONE(String rV_U_PHONE) {
			RV_U_PHONE = rV_U_PHONE;
		}
		public String getRV_U_UNIT() {
			return RV_U_UNIT;
		}
		public void setRV_U_UNIT(String rV_U_UNIT) {
			RV_U_UNIT = rV_U_UNIT;
		}
		public String getRvNmStr() {
			RvNmStr=RvNmUtil.getRvNm(RV_TYPE);
			return RvNmStr;
		}
		public void setRvNmStr(String rvNmStr) {
			
			RvNmStr = rvNmStr;
		}
		public String getADDVNM() {
			return ADDVNM;
		}
		public void setADDVNM(String aDDVNM) {
			ADDVNM = aDDVNM;
		}

}
