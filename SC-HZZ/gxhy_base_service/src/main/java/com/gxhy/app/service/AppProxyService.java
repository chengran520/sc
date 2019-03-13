package com.gxhy.app.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.alibaba.fastjson.JSONObject;
import com.gxhy.base.domain.SysUsers;
import com.gxhy.base.model.RequestModel;
import com.gxhy.base.security.util.SecurityUtil;
import com.gxhy.base.service.BaseService;
import com.gxhy.base.util.DictUtil;
import com.gxhy.base.util.EhCacheUtils;
import com.gxhy.base.util.SysCacheType;
import com.gxhy.framework.domain.SysMenuModel;
import com.gxhy.framework.persistence.SysMenuMapper;

/**
 * 菜单功能
 * @author yb
 * @2017年9月8日上午9:14:15   
 * @CopyRight gxhy
 */
@SuppressWarnings({"rawtypes","unchecked"})
@Service
public class AppProxyService extends BaseService {
	
	/**
	 * 获取权限菜单功能
	 * @return
	 * @throws Exception
	 */
	public String getHeadMenu() throws Exception{
		SysUsers user = SecurityUtil.getSessionUser();
		if(user != null){		
			List<SysMenuModel> listData =getMenuDataFromCache(user.getUserId());
			int level = 2;	//菜单层级记录
			return getTopChildren("-1",listData,level);
		}else{
			SecurityUtil.removeSession();
			return null;
		}
	}
	
	/**
	 * 获取下级以及下级的子级
	 * @param strPar
	 * @param listData
	 * @param level
	 * @return
	 */
	private String getTopChildren(String strPar,List listData,int level){
		StringBuilder sbMenu = new StringBuilder();
		int it = 0;
		for(int i=0;i<listData.size();i++){
			SysMenuModel objMap=(SysMenuModel)listData.get(i);
			String strThisPar=objMap.getpMenuId();
			//判断一级菜单
			if(strThisPar.equals(strPar)){
				String strThisId=objMap.getMenuId();
				//有子菜单
				if(isHaveChild(strThisId,listData)){
					StringBuilder sbChild = new StringBuilder();
					//回调子菜单，递归操作
					sbChild.append(getTopChildren(strThisId,listData,level+1));
					if(level>=3){
						sbMenu.append("<li class='dropdown-submenu menu_select_child' ><a  style='padding: 0 0 0 0;' href=\"javascript:;\" ><i class='fa fa-"+DictUtil.menuManagerIcon(strThisId)+"'></i>");
						sbMenu.append("<span>"+objMap.getMenuNm()+"</span><b class='arrow fa fa-angle-right level-2'></b></a>");
					}else{
						sbMenu.append("<li class=\"dropdown \" ><a style='padding: 0 0 0 0;' class=\"dropdown-toggle\" data-toggle=\"dropdown\" href=\"javascript:void(0);\" ><i class='menu_"+strThisId+"'></i>");
						sbMenu.append("<span>"+objMap.getMenuNm()+"</span></a>");
					}
					sbMenu.append("<ul class='dropdown-menu menu_child_ul' role='menu'>");
					sbMenu.append(sbChild.toString());
					sbMenu.append("</ul></li>");
				}else{
					//有菜单，但没有子菜单
					if("-1".equals(strPar)){
						sbMenu.append("<li class='"+(it == 0 ?"menu_select":"")+"' id='"+strThisId+"'><a  target='framework' style='padding: 0 0 0 0;' href='"+objMap.getMenuUrl()+"' ><i class='menu_"+strThisId+"'></i>");
						sbMenu.append("<span>"+objMap.getMenuNm()+"</span></a></li>");
					}else{
						sbMenu.append("<li class='menu_select_child' id='"+strThisId+"'><a  target='framework' style='padding: 0 0 0 0;' href='"+objMap.getMenuUrl()+"' ><i class='fa fa-"+DictUtil.menuManagerIcon(strThisId)+"'></i>");
						sbMenu.append("<span>"+objMap.getMenuNm()+"</span></a></li>");
					}
				}
				it++;
			}
		}
		return sbMenu.toString();
	}
	
	@Deprecated
	private String getTopChildren1(String strPar,List listData,int level){
		StringBuilder sbMenu = new StringBuilder();
		for(int i=0;i<listData.size();i++){
			SysMenuModel objMap=(SysMenuModel)listData.get(i);
			String strThisPar=objMap.getpMenuId();
			if(strThisPar.equals(strPar)){
				//是子
				String strThisId=objMap.getMenuId();
				//有子
				if(isHaveChild(strThisId,listData)){
					StringBuilder sbChild = new StringBuilder();
					sbChild.append(getTopChildren(strThisId,listData,level+1));
					if(level>=3){
						sbMenu.append("<li class=\"dropdown-submenu \" ><a   href=\"javascript:;\" >");
						sbMenu.append(""+objMap.getMenuNm()+"</a>");
					}else{
						sbMenu.append("<li class=\"dropdown \" ><a class=\"dropdown-toggle\" data-toggle=\"dropdown\" href=\"javascript:void(0);\" >");
						sbMenu.append(""+objMap.getMenuNm()+"<span class=\"caret\"></span></a>");
					}
					sbMenu.append("<ul class=\"dropdown-menu\" role=\"menu\">");
					sbMenu.append(sbChild.toString());
					sbMenu.append("</ul></li>");
				}else{
					//没有子了
					sbMenu.append("<li><i class='fa icon-th-large'></i><a  target='framework' href='"+objMap.getMenuUrl()+"' >");
					sbMenu.append(""+objMap.getMenuNm()+"</a></li>");
				}
			}
		}
		return sbMenu.toString();
	}
	/**
	 * 当前用户所有的权限菜单
	 * @param userId
	 * @return
	 */
	private List<SysMenuModel> getMenuDataFromCache(String userId){
		//分别获取信息
		JSONObject js= new JSONObject();
		String sqlId= SysMenuMapper.class.getName()+".getMenuPageById";
		js.put(RequestModel.SQLID, sqlId);
		js.put("userId", userId);
		List<SysMenuModel> listData=  (List<SysMenuModel>)this.selectListsNoPage(js);
		
		return listData; 
	}
	
	/**
	 * 判断是否有下级菜单
	 * @param strId
	 * @param listData
	 * @return
	 */
	private boolean isHaveChild(String strId,List listData){
		for(int i=0;i<listData.size();i++){
			SysMenuModel objMap=(SysMenuModel)listData.get(i);
			if(objMap.getpMenuId() != null && objMap.getpMenuId().equals(strId)){				
				return true;
			}
		}
		return false;
	}
	
	
}
