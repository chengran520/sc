package com.gxhy.routine.domain;
import java.util.Date;
/**
 * 通知消息
 * @author yb
 * @2017年8月11日下午4:09:42   
 * @CopyRight gxhy
 */
public class MsgInfoModel {
	private String uuid;
	
	private String msgContent;//通知内容 	
	
	private Date sendTm;//发送时间
	
	private String sendUser;//发送人员
	
	private String sendUserId;//发送人员Id
	
    private String msgType;//类型  0app ,1微信,2平台
 
    private String newsType;//消息类型    {"通知公告""01"},{"治水新闻",:"02"},{"dictNm":"新闻动态":"03"}
    
    private String newsTypeNm;//消息类型    {"通知公告""01"},{"治水新闻",:"02"},{"dictNm":"新闻动态":"03"}
    
	private String msgTitle;//消息标题
	
	private String msgId;//接收表里的id
	
	private String receiveUser;//接收人员
	
	private String receiveUsers;//接收人员字符串
	
	private String receiveUserId;//接上人员ID
	
	private Integer isStatus;//是否已读

	private Date receivceTm;//接收时间
	
	public String getUuid() {
		return uuid;
	}
	public void setUuid(String uuid) {
		this.uuid = uuid;
	}
	public String getMsgContent() {
		return msgContent;
	}
	public void setMsgContent(String msgContent) {
		this.msgContent = msgContent;
	}
	public Date getSendTm() {
		return sendTm;
	}
	public void setSendTm(Date sendTm) {
		this.sendTm = sendTm;
	}
	public String getSendUser() {
		return sendUser;
	}
	public void setSendUser(String sendUser) {
		this.sendUser = sendUser;
	}
	public String getMsgType() {
		return msgType;
	}
	public void setMsgType(String msgType) {
		this.msgType = msgType;
	}
	public String getMsgTitle() {
		return msgTitle;
	}
	public void setMsgTitle(String msgTitle) {
		this.msgTitle = msgTitle;
	}
	public String getReceiveUser() {
		return receiveUser;
	}
	public void setReceiveUser(String receiveUser) {
		this.receiveUser = receiveUser;
	}
	public String getReceiveUserId() {
		return receiveUserId;
	}
	public void setReceiveUserId(String receiveUserId) {
		this.receiveUserId = receiveUserId;
	}
	public String getSendUserId() {
		return sendUserId;
	}
	public void setSendUserId(String sendUserId) {
		this.sendUserId = sendUserId;
	}
	public String getMsgId() {
		return msgId;
	}
	public void setMsgId(String msgId) {
		this.msgId = msgId;
	}
	public Integer getIsStatus() {
		return isStatus;
	}
	public void setIsStatus(Integer isStatus) {
		this.isStatus = isStatus;
	}
	public Date getReceivceTm() {
		return receivceTm;
	}
	public void setReceivceTm(Date receivceTm) {
		this.receivceTm = receivceTm;
	}
	public String getReceiveUsers() {
		return receiveUsers;
	}
	public void setReceiveUsers(String receiveUsers) {
		this.receiveUsers = receiveUsers;
	}
	public String getNewsType() {
		return newsType;
	}
	public void setNewsType(String newsType) {
		this.newsType = newsType;
	}
	public String getNewsTypeNm() {
		return newsTypeNm;
	}
	public void setNewsTypeNm(String newsTypeNm) {
		this.newsTypeNm = newsTypeNm;
	}
	
}
