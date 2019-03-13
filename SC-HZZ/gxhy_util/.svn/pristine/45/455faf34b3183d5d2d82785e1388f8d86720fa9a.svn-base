package com.gxhy.base.security.realm;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.apache.shiro.SecurityUtils;
import org.apache.shiro.authc.AuthenticationException;
import org.apache.shiro.authc.AuthenticationInfo;
import org.apache.shiro.authc.AuthenticationToken;
import org.apache.shiro.authc.SimpleAuthenticationInfo;
import org.apache.shiro.authc.UsernamePasswordToken;
import org.apache.shiro.authz.AuthorizationException;
import org.apache.shiro.authz.AuthorizationInfo;
import org.apache.shiro.authz.SimpleAuthorizationInfo;
import org.apache.shiro.realm.AuthorizingRealm;
import org.apache.shiro.subject.PrincipalCollection;

import com.alibaba.fastjson.JSONObject;
import com.gxhy.base.domain.SysMenu;
import com.gxhy.base.domain.SysRole;
import com.gxhy.base.domain.SysUsers;
import com.gxhy.base.model.RequestModel;
import com.gxhy.base.persistence.SysMenuMapper;
import com.gxhy.base.persistence.SysRoleMapper;
import com.gxhy.base.persistence.SysUsersMapper;
import com.gxhy.base.service.BaseService;
import com.gxhy.base.util.SpringUtils;

/**
 * 自定义控制权限
 * @author yb
 * @2017年8月5日下午2:41:03   
 * @CopyRight gxhy
 */
@SuppressWarnings({ "unchecked", "rawtypes" })
public class GxhySystemRealm extends AuthorizingRealm{
	
	@Override
	protected AuthorizationInfo doGetAuthorizationInfo(PrincipalCollection arg0) {
	    String currentUsername = (String)super.getAvailablePrincipal(arg0);  
	    List<String> roleList = new ArrayList<String>();  
		BaseService baseService=SpringUtils.getBean("baseService");
		Map<String,String> jsMap=new HashMap<String,String>();
		String sqlId=SysRoleMapper.class.getName()+".querySysRoleByUserId";
		jsMap.put("sqlid", sqlId);
		jsMap.put("userId", currentUsername);
		List<SysRole> roleCodes = (List<SysRole>) baseService.selectLists(jsMap);
        if(null != roleCodes){  
	    	  SimpleAuthorizationInfo simpleAuthorInfo = new SimpleAuthorizationInfo();  
	              //获取当前登录用户的角色  
	        	  for(SysRole roleCode : roleCodes){  
	                  roleList.add(roleCode.getRoleId());  
	                  //实体类Role中包含有角色权限的实体类信息  
	              	} 
	        	  //为当前用户设置角色和权限  
		          simpleAuthorInfo.addRoles(roleList);  
			      JSONObject js= new JSONObject();
			  	  sqlId= SysMenuMapper.class.getName()+".getMenuPageById";
			  	  js.put(RequestModel.SQLID, sqlId);
			  	  js.put("userId", currentUsername);
			  	  List<SysMenu> listData=  (List<SysMenu>)baseService.selectListsNoPage(js);
			  	  menuTopChildren("-1", listData);
		          return simpleAuthorInfo;  
	      }else{  
	          throw new AuthorizationException();  
	      }  
	}
	
	/**
	 * 获取当前用户菜单首页
	 * @param strPar
	 * @param listData
	 */
	private void menuTopChildren(String strPar,List<SysMenu> listData){
		int it = 0;
		if(listData != null){
			for(int i=0;i<listData.size();i++){
				SysMenu objMap=(SysMenu)listData.get(i);
				String strThisPar=objMap.getpMenuId();
				//判断一级菜单
				if(strThisPar.equals(strPar)){
					String strThisId=objMap.getMenuId();
					if(it == 0 && "-1".equals(strPar)){
						SecurityUtils.getSubject().getSession().setAttribute("index", objMap.getMenuUrl());
					}
					if(isHaveChild(strThisId,listData)){
						//回调子菜单，递归操作
						menuTopChildren(strThisId,listData);
					}
					it++;
				}
			}
		}
	}
	
	private boolean isHaveChild(String strId,List listData){
		for(int i=0;i<listData.size();i++){
			SysMenu objMap=(SysMenu)listData.get(i);
			if(objMap.getpMenuId() != null && objMap.getpMenuId().equals(strId)){				
				return true;
			}
		}
		return false;
	}
	
	@Override
	protected AuthenticationInfo doGetAuthenticationInfo(
			AuthenticationToken authcToken) throws AuthenticationException {
		UsernamePasswordToken token = (UsernamePasswordToken) authcToken;
		BaseService baseService=SpringUtils.getBean("baseService");
		String userName = token.getUsername();
		JSONObject paramMap = new JSONObject();
		paramMap.put(RequestModel.SQLID, SysUsersMapper.class.getName() + ".querySysUsersById");
		paramMap.put("userId", userName);
	    SysUsers user = (SysUsers) baseService.selectOne(paramMap);
        if(user != null){
        	SimpleAuthenticationInfo simpleAuthent = new SimpleAuthenticationInfo(user.getUserId(), user.getUserPwd(), getName());
        	doGetAuthorizationInfo(simpleAuthent.getPrincipals());
            return simpleAuthent;  
        }else{
            throw new AuthenticationException();  
        }
	}

}
