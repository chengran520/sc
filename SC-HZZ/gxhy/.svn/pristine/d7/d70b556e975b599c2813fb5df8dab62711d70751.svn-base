<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ include file="/common/base/taglibs_logout.jsp"%>
<%@ taglib uri="/GXHY_MENU" prefix="menu"%> 
<link rel="stylesheet" href="<%=request.getContextPath()%>/common/css/showBo.css" >
<link rel="stylesheet" href="<%=request.getContextPath()%>/common/css/header.css" >
<link rel="stylesheet" href="<%=request.getContextPath()%>/common/css/screen.css" >
<link rel="stylesheet" href="<%=request.getContextPath()%>/common/css/header-icon.css" >
<script src="<%=request.getContextPath()%>/common/js/showBo.js"></script>
<script src="<%=request.getContextPath()%>/common/js/header.js"></script>
<script type="text/javascript">
	var userId = '<%=SecurityUtils.getSubject().getSession().getAttribute("username")%>';
	var WEB_ROOT = "<%=request.getContextPath() %>";
</script>
<style>
</style>
<nav class="navbar-gxhy" id="menu_wrap"> 
       <div class="navbar-header">
           <img src='${basePath}common/images/schzz_logo.png' style="width:40px;height:35px;margin-top: -5px;vertical-align:middle;"/>
          	<span style="color: #FFFFFF;font-size: 20px;">石城县水质水量水环境监测平台</span>
       </div> 
       <div class="collapse navbar-collapse navbar-menu" id="header-menu-div" style="float: left;">
           <ul class="nav navbar-nav navbar-menu navber-menu-ul" id="navLinks">
         			<menu:indexHeaderMenu/>
		</ul> 
       </div>
       <div class="navber-menu-div">
       	<ul>
       		<li>
       			<a>
	               	<i  class="fa fa-user-circle-o" style=""></i>
	             	<span >${username}</span>
       			</a>
       		</li>
       		<li id="logOut">
       			<a>
	               	<i  class="fa fa-power-off"></i>
	             	<span>安全退出</span>
       			</a>
       		</li>
       	</ul>
       </div>
</nav>
