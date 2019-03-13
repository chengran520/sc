package com.gxhy.routine.domain;

import javax.persistence.Column;
import javax.persistence.Table;

/**
 * 图片，语音，视频
 * @author yb
 *
 */
@Table(name="IOT_IMAGE_V_S")
public class ImageVideoModel {
	
    @Column(name="ACCEPTID")
	private String acceptId;
    
    @Column(name="URL")
	private String url;
    /**
     * 01代表图片，11代表举报人上传的图片，12代表受理人上传的图片
     * 02代表视频，21代表举报人上传的视频，22代表受理人上传的视频
     * 03代表语音,31代表举报人上传的语音，32代表受理人上传的语音
     */
    @Column(name="TYPE")
	private int type;
    
	public String getAcceptId() {
		return acceptId;
	}
	public void setAcceptId(String acceptId) {
		this.acceptId = acceptId;
	}
	public String getUrl() {
		return url;
	}
	public void setUrl(String url) {
		this.url = url;
	}
	public int getType() {
		return type;
	}
	public void setType(int type) {
		this.type = type;
	} 
}
