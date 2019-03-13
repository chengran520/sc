package com.gxhy.app.tag;

import javax.servlet.jsp.JspWriter;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.servlet.tags.RequestContextAwareTag;

import com.gxhy.app.service.AppProxyService;
import com.gxhy.base.util.SpringUtils;

/**
 * spring mvc 标签
 * @author yb
 * @2017年9月5日下午4:47:37   
 * @CopyRight gxhy
 */
@Service
public class IndexHeaderMenuTag extends RequestContextAwareTag{
	private static final long serialVersionUID = -3871349438550690979L;
	
	@Autowired
	private AppProxyService appProxyService;
	
	@Override
	protected int doStartTagInternal() throws Exception {
		
		if(appProxyService==null){
			appProxyService=(AppProxyService)SpringUtils.getBean("appProxyService");
		}
		
		String headList=appProxyService.getHeadMenu();
		
		JspWriter out = this.pageContext.getOut();
		out.println(headList);
		return 0;
	}

	@Override
	public void doCatch(Throwable throwable) throws Throwable {
		throw throwable;
	}
	
}
