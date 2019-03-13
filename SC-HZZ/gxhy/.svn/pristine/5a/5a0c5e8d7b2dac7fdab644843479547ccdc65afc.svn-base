<%@page import="org.apache.shiro.subject.Subject"%>
<%@page import="org.apache.shiro.SecurityUtils"%>
<%@page import="com.gxhy.base.domain.SysUsers"%>
<%
	String appPath = request.getScheme() + "://"+ request.getServerName() + ":" + request.getServerPort();
	pageContext.setAttribute("appPath", appPath);
    pageContext.setAttribute("basePath", request.getContextPath()+"/");
	SysUsers user = (SysUsers)request.getSession().getAttribute("user");
    if(user !=null && user.getUserId() != null){
  		  pageContext.setAttribute("username", user.getUserName());
    }else{
    	 Subject currentUser = SecurityUtils.getSubject();
    	 currentUser.getSession().removeAttribute("user");
    	 currentUser.getSession().removeAttribute("username");
    	 currentUser.getSession().removeAttribute("userId");
    	 request.getSession().removeAttribute("user");
    }
%>
