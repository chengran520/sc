package com.gxhy.datamonitor.domain;
/**
 * 排污口实体类
 * @author chengran
 *
 */
public class SewageModel {
  
	private String uuid;
	
	private String adcd;
	
	private String name;//排污口名称
	
	private String unit;//设置单位
	
	private String unitAddress;//设置单位地址
	
	private String stand;//法人代表
	
	private String compDt;//建成使用时间
	
	private String industry;//所属行业
	
	private String output;//主要产品及产量
	
	private double waterIntake;//年取水量（万立方米）
	
	private String waterDept;//水利部门是否审批（0审批，1为审批）
	
	private String envirDept;//环保部门是否审批（0审批，1为审批）
	
	private String isProtect;//	是否在饮用水水源保护区（0是，1否）
	
	private double  lttd;//纬度
	
	private double lgtd;//经度
	
	private String address;//所在位置
	
	private String rvCd;//所在河流
	
	private String wfzNm;//所在水功能区
	
	private String emisTp;	//排放方式（0连续排放，1间歇排放）
	
	private double desRhhfwsl;//设计排污量
	
	private double appRhhfwsl;//审批排污量
	
	private double reaRhhfwsl;//实际排污量
	
	private String standard;//排放标准
	
	private String pollutant;//主要污染物
	
    private double rhhfwsl;//排放量（吨）
    
    private String remark;//备注
    
    private String scale;//规模（0代表石城县规模以上，1代表石城县规模以下）
    
    private String rvNm;
    
    private String addvnm;
    
	public String getUuid() {
		return uuid;
	}
	public void setUuid(String uuid) {
		this.uuid = uuid;
	}
	public String getAdcd() {
		return adcd;
	}
	public void setAdcd(String adcd) {
		this.adcd = adcd;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getUnit() {
		return unit;
	}
	public void setUnit(String unit) {
		this.unit = unit;
	}
	public String getUnitAddress() {
		return unitAddress;
	}
	public void setUnitAddress(String unitAddress) {
		this.unitAddress = unitAddress;
	}
	public String getStand() {
		return stand;
	}
	public void setStand(String stand) {
		this.stand = stand;
	}
	public String getCompDt() {
		return compDt;
	}
	public void setCompDt(String compDt) {
		this.compDt = compDt;
	}
	public String getIndustry() {
		return industry;
	}
	public void setIndustry(String industry) {
		this.industry = industry;
	}
	public String getOutput() {
		return output;
	}
	public void setOutput(String output) {
		this.output = output;
	}
	public double getWaterIntake() {
		return waterIntake;
	}
	public void setWaterIntake(double waterIntake) {
		this.waterIntake = waterIntake;
	}
	public String getWaterDept() {
		return waterDept;
	}
	public void setWaterDept(String waterDept) {
		this.waterDept = waterDept;
	}
	public String getEnvirDept() {
		return envirDept;
	}
	public void setEnvirDept(String envirDept) {
		this.envirDept = envirDept;
	}
	public String getIsProtect() {
		return isProtect;
	}
	public void setIsProtect(String isProtect) {
		this.isProtect = isProtect;
	}
	public double getLttd() {
		return lttd;
	}
	public void setLttd(double lttd) {
		this.lttd = lttd;
	}
	public double getLgtd() {
		return lgtd;
	}
	public void setLgtd(double lgtd) {
		this.lgtd = lgtd;
	}
	public String getAddress() {
		return address;
	}
	public void setAddress(String address) {
		this.address = address;
	}
	public String getWfzNm() {
		return wfzNm;
	}
	public void setWfzNm(String wfzNm) {
		this.wfzNm = wfzNm;
	}
	public String getEmisTp() {
		return emisTp;
	}
	public void setEmisTp(String emisTp) {
		this.emisTp = emisTp;
	}
	public double getDesRhhfwsl() {
		return desRhhfwsl;
	}
	public void setDesRhhfwsl(double desRhhfwsl) {
		this.desRhhfwsl = desRhhfwsl;
	}
	public double getAppRhhfwsl() {
		return appRhhfwsl;
	}
	public void setAppRhhfwsl(double appRhhfwsl) {
		this.appRhhfwsl = appRhhfwsl;
	}
	public double getReaRhhfwsl() {
		return reaRhhfwsl;
	}
	public void setReaRhhfwsl(double reaRhhfwsl) {
		this.reaRhhfwsl = reaRhhfwsl;
	}
	public String getStandard() {
		return standard;
	}
	public void setStandard(String standard) {
		this.standard = standard;
	}
	public String getPollutant() {
		return pollutant;
	}
	public void setPollutant(String pollutant) {
		this.pollutant = pollutant;
	}
	public double getRhhfwsl() {
		return rhhfwsl;
	}
	public void setRhhfwsl(double rhhfwsl) {
		this.rhhfwsl = rhhfwsl;
	}
	public String getRemark() {
		return remark;
	}
	public void setRemark(String remark) {
		this.remark = remark;
	}
	public String getScale() {
		return scale;
	}
	public void setScale(String scale) {
		this.scale = scale;
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
	public String getAddvnm() {
		return addvnm;
	}
	public void setAddvnm(String addvnm) {
		this.addvnm = addvnm;
	}
}