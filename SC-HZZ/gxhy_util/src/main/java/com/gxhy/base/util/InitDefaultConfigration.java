package com.gxhy.base.util;

import javax.servlet.ServletContext;
import javax.servlet.ServletException;

import org.springframework.web.WebApplicationInitializer;

import com.gxhy.base.util.CustomPropertyConfigurer;


/**
 * 启动类
 * @author yb
 *
 */
public class InitDefaultConfigration implements WebApplicationInitializer{

	@Override
	public void onStartup(ServletContext context) throws ServletException {
		System.out.println("=======================CustomPropertyConfigurer初始化");	
		
		CustomPropertyConfigurer.setPrefilesConfigProperty();
		System.out.println("=======================CustomPropertyConfigurer初始化结束");
		
		System.out.println(context.getContextPath()+"信息初始化");		
		
	}
	
} 