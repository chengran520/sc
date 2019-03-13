package com.gxhy.framework.domain;

import javax.persistence.Column;
import javax.persistence.Id;
import javax.persistence.Table;

/**
 * 功能菜单
 * @author yb
 * @2017年9月5日下午5:11:20   
 * @CopyRight gxhy
 */
@Table(name="SYS_MENU")
public class SysMenuModel implements java.io.Serializable {
	
	@Id
	@Column(name="UUID")
	private String uuid;
	//菜单ID
	@Column(name="MENU_ID")
	private String menuId;
	//父级菜单ID
	@Column(name="P_MENU_ID")
	private String pMenuId;
	//菜单名称
	@Column(name="MENU_NM")
	private String menuNm;
	//菜单地址
	@Column(name="MENU_URL")
	private String menuUrl;
	//排序
	@Column(name="SORT")
	private String sort;

	public String getUuid() {
		return uuid;
	}

	public void setUuid(String uuid) {
		this.uuid = uuid;
	}

	public String getMenuId() {
		return menuId;
	}

	public void setMenuId(String menuId) {
		this.menuId = menuId;
	}

	public String getpMenuId() {
		return pMenuId;
	}

	public void setpMenuId(String pMenuId) {
		this.pMenuId = pMenuId;
	}

	public String getMenuNm() {
		return menuNm;
	}

	public void setMenuNm(String menuNm) {
		this.menuNm = menuNm;
	}

	public String getMenuUrl() {
		return menuUrl;
	}

	public void setMenuUrl(String menuUrl) {
		this.menuUrl = menuUrl;
	}

	public String getSort() {
		return sort;
	}

	public void setSort(String sort) {
		this.sort = sort;
	}
	
	
}
