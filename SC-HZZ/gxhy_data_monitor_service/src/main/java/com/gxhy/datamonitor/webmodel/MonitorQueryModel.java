package com.gxhy.datamonitor.webmodel;

import java.util.Date;

import org.apache.commons.lang3.StringUtils;

import com.gxhy.base.util.AdcdUtil;
import com.gxhy.base.util.DictUtil;

/**
 * 河道相关信息查询model
 * @author yb
 * @2017年7月13日下午4:23:22   
 * @CopyRight gxhy
 */
public class MonitorQueryModel {
	
	//河道编码
	private String stcd;
	//河道名称
	private String stnm;
	//河道等级
	private String grade;
	//所属河流
	private String rvnm;
	//所属水系
	private String hnnm;
	//经度
	private Double lgtd;
	//纬度
	private Double lttd;
	//河段起点经度
	private Double startLgtd;
	//河段起点纬度
	private Double startLttd;
	//河段终点经度
	private Double endLgtd;
	//河段终点纬度
	private Double endLttd;
	//河道长度
	private String lengthRv;
	//河道宽度
	private String widthRv;
	//河道所属行政区
	private String addvcd;
	//创建时间
	private Date createTm;
	//更新时间
	private Date updateTm;
	//县级河长
	private String countyRvNm;
	//县级河长电话
	private String countyPhone;
	//县级副河长
	private String countyVRvNm;
	//县级副河长电话
	private String countyVPhone;
	//乡级河长
	private String countryRvNm;
	//乡级河长电话
	private String countryPhone;
	//村级河长
	private String villageRvNm;
	//村级河长电话
	private String villagePhone;
	//市级河长
	private String cityRvNm;
	//市级河长电话
	private String cityPhone;
	//市级副河长
	private String cityVRvNm;
	//市级副河长电话
	private String cityVPhone;
	//省级总级河长
	private String provinceRvNm;
	//省级总级河长电话
	private String provincePhone;
	//省级副总河长
	private String provinceVRvNm;
	//省级副总河长电话
	private String provinceVPhone;
	//管理单位
	private String managerUnit;
	//管理单负责人
	private String managerUser;
	//管理负责人手机
	private int managerPhone;
	//管理单位座机
	private String managerFphone;
	//是否关注
	private int isFollow;
	//行政区名称
	private String addvcdNm;
	//整体水质
	private String totalQua;
	

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
	public String getGrade() {
		if(StringUtils.isNotBlank(grade)){
			grade = DictUtil.RiverGradeValToNm(grade);
		}
		return grade;
	}
	public void setGrade(String grade) {
		this.grade = grade;
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
	public String getLengthRv() {
		return lengthRv;
	}
	public void setLengthRv(String lengthRv) {
		this.lengthRv = lengthRv;
	}
	public String getWidthRv() {
		return widthRv;
	}
	public void setWidthRv(String widthRv) {
		this.widthRv = widthRv;
	}
	public String getAddvcd() {
		return addvcd;
	}
	public void setAddvcd(String addvcd) {
		this.addvcd = addvcd;
	}
	public Date getCreateTm() {
		return createTm;
	}
	public void setCreateTm(Date createTm) {
		this.createTm = createTm;
	}
	public Date getUpdateTm() {
		return updateTm;
	}
	public void setUpdateTm(Date updateTm) {
		this.updateTm = updateTm;
	}
	public String getCountyRvNm() {
		return countyRvNm;
	}
	public void setCountyRvNm(String countyRvNm) {
		this.countyRvNm = countyRvNm;
	}
	public String getCountryRvNm() {
		return countryRvNm;
	}
	public void setCountryRvNm(String countryRvNm) {
		this.countryRvNm = countryRvNm;
	}
	public String getVillageRvNm() {
		return villageRvNm;
	}
	public void setVillageRvNm(String villageRvNm) {
		this.villageRvNm = villageRvNm;
	}
	public String getCityRvNm() {
		return cityRvNm;
	}
	public void setCityRvNm(String cityRvNm) {
		this.cityRvNm = cityRvNm;
	}
	public String getProvinceRvNm() {
		return provinceRvNm;
	}
	public void setProvinceRvNm(String provinceRvNm) {
		this.provinceRvNm = provinceRvNm;
	}
	public String getManagerUnit() {
		return managerUnit;
	}
	public void setManagerUnit(String managerUnit) {
		this.managerUnit = managerUnit;
	}
	public String getManagerUser() {
		return managerUser;
	}
	public void setManagerUser(String managerUser) {
		this.managerUser = managerUser;
	}

	public String getManagerFphone() {
		return managerFphone;
	}
	public void setManagerFphone(String managerFphone) {
		this.managerFphone = managerFphone;
	}
	public int getIsFollow() {
		return isFollow;
	}
	public void setIsFollow(int isFollow) {
		this.isFollow = isFollow;
	}
	public String getAddvcdNm() {
		addvcdNm = AdcdUtil.getStrAdcdNm(addvcd,2);
		return addvcdNm;
	}
	public void setAddvcdNm(String addvcdNm) {
		this.addvcdNm = addvcdNm;
	}
	public String getTotalQua() {
		return totalQua;
	}
	public void setTotalQua(String totalQua) {
		this.totalQua = totalQua;
	}
	
	public String getCountyVRvNm() {
		return countyVRvNm;
	}
	public void setCountyVRvNm(String countyVRvNm) {
		this.countyVRvNm = countyVRvNm;
	}

	public String getCityVRvNm() {
		return cityVRvNm;
	}
	public void setCityVRvNm(String cityVRvNm) {
		this.cityVRvNm = cityVRvNm;
	}
	
	public String getProvinceVRvNm() {
		return provinceVRvNm;
	}
	public void setProvinceVRvNm(String provinceVRvNm) {
		this.provinceVRvNm = provinceVRvNm;
	}
	public int getManagerPhone() {
		return managerPhone;
	}
	public void setManagerPhone(int managerPhone) {
		this.managerPhone = managerPhone;
	}
	public String getCountyPhone() {
		return countyPhone;
	}
	public void setCountyPhone(String countyPhone) {
		this.countyPhone = countyPhone;
	}
	public String getCountyVPhone() {
		return countyVPhone;
	}
	public void setCountyVPhone(String countyVPhone) {
		this.countyVPhone = countyVPhone;
	}
	public String getCountryPhone() {
		return countryPhone;
	}
	public void setCountryPhone(String countryPhone) {
		this.countryPhone = countryPhone;
	}
	public String getVillagePhone() {
		return villagePhone;
	}
	public void setVillagePhone(String villagePhone) {
		this.villagePhone = villagePhone;
	}
	public String getCityPhone() {
		return cityPhone;
	}
	public void setCityPhone(String cityPhone) {
		this.cityPhone = cityPhone;
	}
	public String getCityVPhone() {
		return cityVPhone;
	}
	public void setCityVPhone(String cityVPhone) {
		this.cityVPhone = cityVPhone;
	}
	public String getProvincePhone() {
		return provincePhone;
	}
	public void setProvincePhone(String provincePhone) {
		this.provincePhone = provincePhone;
	}
	public String getProvinceVPhone() {
		return provinceVPhone;
	}
	public void setProvinceVPhone(String provinceVPhone) {
		this.provinceVPhone = provinceVPhone;
	}
	public Double getStartLgtd() {
		return startLgtd;
	}
	public void setStartLgtd(Double startLgtd) {
		this.startLgtd = startLgtd;
	}
	public Double getStartLttd() {
		return startLttd;
	}
	public void setStartLttd(Double startLttd) {
		this.startLttd = startLttd;
	}
	public Double getEndLgtd() {
		return endLgtd;
	}
	public void setEndLgtd(Double endLgtd) {
		this.endLgtd = endLgtd;
	}
	public Double getEndLttd() {
		return endLttd;
	}
	public void setEndLttd(Double endLttd) {
		this.endLttd = endLttd;
	}
	public String getHnnm() {
		return hnnm;
	}
	public void setHnnm(String hnnm) {
		this.hnnm = hnnm;
	}

	
}
