package com.gxhy.base.util;

import javax.servlet.ServletRequest;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

/**
 * 
 * @author yb
 * @2017年7月10日上午9:50:41   
 * @CopyRight gxhy
 */
public class HttpSessionUtil {

	/**
	 *  HttpSession
	 * @param request
	 * @param key
	 * @param value
	 * @param interval
	 */
	public static void setAttribute(ServletRequest request, String key, Object value,int interval) {
		HttpSession session = getHttpSession(request);
		if(session!=null){
			session.setAttribute(key, value);
			session.setMaxInactiveInterval(interval);
		}
	}

	
	public  static Object getAttribute(ServletRequest request, String key) {
		HttpSession session = getHttpSession(request);
		if(session!=null)
		return session.getAttribute(key);
		return null;
	}

	public static void removeAttribute(ServletRequest request, String key) {
		HttpSession session = getHttpSession(request);
		if(session!=null)
		session.removeAttribute(key);
	}
	
	public static  HttpSession getHttpSession(ServletRequest request) {
			try {
				HttpServletRequest req = (HttpServletRequest) request;
				if(req.getSession().getAttribute("httpSession")==null){
					return req.getSession();
				}else{
					return (HttpSession) req.getSession().getAttribute("httpSession");
				}
				
			} catch (Exception e) {
				e.printStackTrace();
				return null;
			}
	}
}
