package com.gxhy.base.security.util;

import java.util.List;

import javax.servlet.http.HttpServletRequest;

import org.apache.shiro.SecurityUtils;
import org.apache.shiro.subject.Subject;

import com.gxhy.base.domain.SysRole;
import com.gxhy.base.domain.SysUsers;
import com.gxhy.base.util.Constants;

public class SecurityUtil {
	
	/**
	 * 通过传值 获取session信息
	 * @param key
	 * @return
	 */
	public static Object getSessionAttr(String key) {
		Subject subject = SecurityUtils.getSubject();
		if(subject!=null){
			return subject.getSession().getAttribute(key);
		}else{
			return null;
		}
	}
	
	/**
	 * 获取当前用户信息
	 * @return
	 */
	public static SysUsers getSessionUser(){
		SysUsers user = (SysUsers) getSessionAttr(Constants.CURRENT_USER);
		if(user != null){
			return user;
		}else{
			return null;
		}
	}
	
	/**
	 * 判断当前用户是否为管理员角色
	 * @return
	 */
	public static boolean IsSessionUserSys(){
		SysUsers user = getSessionUser();
		if(user != null){
			List<SysRole> roles = user.getRoles();
			if(roles.size() > 0){
				for (int i = 0; i < roles.size(); i++) {
					if("system".equals(roles.get(i).getRoleId())){
						return true;
					}
				}
			}
		}
		return false;
	}
	
	/**
	 * 清空当前用户信息
	 */
	public static void removeSessionUser(HttpServletRequest request){
		Subject subject = SecurityUtils.getSubject();
		subject.getSession().removeAttribute(Constants.CURRENT_USER);
		request.getSession().removeAttribute(Constants.CURRENT_USER);
		subject.getSession().removeAttribute(Constants.CURRENT_USERNM);
	}
	
	/**
	 * 清空当前用户信息
	 */
	public static void removeSession(){
		Subject subject = SecurityUtils.getSubject();
		subject.getSession().removeAttribute(Constants.CURRENT_USER);
	}
}
