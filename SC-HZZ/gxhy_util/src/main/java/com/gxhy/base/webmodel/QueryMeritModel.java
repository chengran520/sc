package com.gxhy.base.webmodel;

import java.util.Date;

public class QueryMeritModel {
	
	private String uuid;
	//行政区代码
	private String adcd;
	//行政区名称
	private String adcdNm;
	//河流名称
	private String rvNm;
	//绩效申请时间
	private Date meritTm;
	//河长名称
	private String rvUserNm;
	//河长的职务
	private String rvUserPt;
	//考核得分
	private String optScore;
	//绩效考核内容
	private String meritDesc;
	//主要解决的问题
	private String solveProblem;
	//未解决的问题
	private String unSolveProblem;
	//上级河长批示
	private String pRvUserEvaluate;
	//上级河长办领导批示
	private String pRvOfficeEvaluate;
	//下月计划
	private String nextMonthPlan;
	//执法问题
	private String lawProblem;
	private String status;
	private String meritNm;

	public String getUuid() {
		return uuid;
	}

	public void setUuid(String uuid) {
		this.uuid = uuid;
	}

	public String getMeritNm() {
		return meritNm;
	}

	public void setMeritNm(String meritNm) {
		this.meritNm = meritNm;
	}

	public String getAdcd() {
		return adcd;
	}

	public void setAdcd(String adcd) {
		this.adcd = adcd;
	}

	public String getAdcdNm() {
		return adcdNm;
	}

	public void setAdcdNm(String adcdNm) {
		this.adcdNm = adcdNm;
	}

	public String getRvNm() {
		return rvNm;
	}

	public void setRvNm(String rvNm) {
		this.rvNm = rvNm;
	}

	public Date getMeritTm() {
		return meritTm;
	}

	public void setMeritTm(Date meritTm) {
		this.meritTm = meritTm;
	}

	public String getRvUserNm() {
		return rvUserNm;
	}

	public void setRvUserNm(String rvUserNm) {
		this.rvUserNm = rvUserNm;
	}

	public String getRvUserPt() {
		return rvUserPt;
	}

	public void setRvUserPt(String rvUserPt) {
		this.rvUserPt = rvUserPt;
	}

	public String getOptScore() {
		return optScore;
	}

	public void setOptScore(String optScore) {
		this.optScore = optScore;
	}

	public String getMeritDesc() {
		return meritDesc;
	}

	public void setMeritDesc(String meritDesc) {
		this.meritDesc = meritDesc;
	}

	public String getSolveProblem() {
		return solveProblem;
	}

	public void setSolveProblem(String solveProblem) {
		this.solveProblem = solveProblem;
	}

	public String getUnSolveProblem() {
		return unSolveProblem;
	}

	public void setUnSolveProblem(String unSolveProblem) {
		this.unSolveProblem = unSolveProblem;
	}

	public String getpRvUserEvaluate() {
		return pRvUserEvaluate;
	}

	public void setpRvUserEvaluate(String pRvUserEvaluate) {
		this.pRvUserEvaluate = pRvUserEvaluate;
	}

	public String getpRvOfficeEvaluate() {
		return pRvOfficeEvaluate;
	}

	public void setpRvOfficeEvaluate(String pRvOfficeEvaluate) {
		this.pRvOfficeEvaluate = pRvOfficeEvaluate;
	}

	public String getNextMonthPlan() {
		return nextMonthPlan;
	}

	public void setNextMonthPlan(String nextMonthPlan) {
		this.nextMonthPlan = nextMonthPlan;
	}

	public String getLawProblem() {
		return lawProblem;
	}

	public void setLawProblem(String lawProblem) {
		this.lawProblem = lawProblem;
	}

	public String getStatus() {
		return status;
	}

	public void setStatus(String status) {
		this.status = status;
	}

	
}
