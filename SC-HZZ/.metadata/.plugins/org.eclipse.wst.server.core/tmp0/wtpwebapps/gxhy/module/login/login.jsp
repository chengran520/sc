<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
	<%
		String appPath = request.getScheme() + "://"+ request.getServerName() + ":" + request.getServerPort();
		pageContext.setAttribute("appPath", appPath);
	    pageContext.setAttribute("basePath", request.getContextPath()+"/"); 
    %>
    <meta name="viewport" contents="width=device-width,initial-scale=1">
    <title>石城县水质水量水环境监测平台</title>
	<script src="${basePath}common/js/md5/md5.js"></script>
    <jsp:include page="/common/base/include_BootStrap.jsp"></jsp:include>
    <jsp:include page="/common/base/include_Common.jsp"></jsp:include>
    <script src="${basePath}module/js/login.js"></script>
    <link rel="stylesheet" href="${basePath}module/login/css/login.css" >
   	<link rel="icon" href="${basePath}common/images/favicon.ico" type="image/x-icon" />
	<link rel="shortcut icon" href="${basePath}common/images/favicon.ico type="image/x-icon" />
	<link rel="bookmark" href="${basePath}common/images/favicon.ico" type="image/x-icon" />
    <script type="text/javascript">
    	var WEB_ROOT = "${basePath}";
    	var APP_ROOT = "${appPath}"; 
    	$(function(){
    		if (top != window){    			
   		      top.location.href = window.location.href;    
    		} 
    		var h = window.screen.height; 
    		var i = 7;
    		if(h < 900){
    			i = 11;
    		}
    		$("#login_img").css("margin",""+h/i+"px auto");
    		$(".weixin").css("top",h/3);
    		$(".hzzapp").css("top",h/3+10);
    	});
    </script>
</head>

<body>
	<div  class="loginDiv" ></div>
	<div class="div-ul">
		<ul>
			<li>
				<label class="li_tab">河长制信息管理系统登录</label>
			</li>
			<li>
				<label class="login_lab lab_pas">账&nbsp;&nbsp;号：</label>
				<input type="text" id="UserName" class="form-control titl login_ipt" placeholder="用户名或手机号" >
			</li>
			<li>
				<label  class="login_lab lab_pas">密&nbsp;&nbsp;码：</label>
				<input type="password" id="Password" class="form-control titl login_ipt" placeholder="请输入密码"  >
			</li>
			<li>
				<label class="login_lab lab_yz">验证码：</label>
				<input type="text" id="verifyCode" class="form-control titl login_ipt" placeholder="请输入验证码">
				<p style="margin: 10px 0 0 88px;">					
					<img src="${basePath}base/api/login/getVerifyCodeImage" id="verifyCodeImage">
					<a class="pass-change-verifyCode" href="javascript:void(0)" onclick="loginInfo.reloadVerifyCode()" >换一张</a>
				</p>
			</li>
			<li>
				<input type="submit" value="登&nbsp;&nbsp;&nbsp;&nbsp;录"  class="btn btn-primary btn-login" onclick="loginInfo.login();" >
			</li>
		</ul>
	</div>
	<div class="logo_bj_div"></div>
	<div class="weixin" onmouseover="this.className = 'weixin on';" onmouseout="this.className = 'weixin';">
		<a href="javascript:;"></a>
	    <div class="weixin_nr">
	    	<div class="arrow"></div>
	    	<p class="logo-ewm">扫描二维码</p>
	        <p class="logo-gz">关注河长制公众号</p>
	        <img src="${basePath}module/login/images/hzz-wechat.jpg" style="width:150px; height:150px; "/>
	    </div>
	</div>
	<div class="hzzapp" onmouseover="this.className = 'hzzapp on';" onmouseout="this.className = 'hzzapp';">
		<a href="javascript:;"></a>
	    <div class="hzzapp_nr">
	    	<div class="arrow"></div>
	    	<p class="logo-ewm">扫描二维码</p>
	        <p class="logo-gz">下载Android河长版</p>
	        <img src="${basePath}module/login/images/hzz-app.jpg" style="width:150px; height:150px;"/>
	    </div>
	</div>
	<div class="tab-gxhy">
		<span id="tb-zoom" class="tab-gxhy-g gx"></span>
		<span id="lgt" class="tab-gxhy-g gx" ></span>
		<div class="tab-gxhy-v">
			<span class="tab-gxhy-g">技术支持：北京国信华源科技有限公司   <a href="http://www.bjgxhy.com" target="blank" style="color: #fff;text-decoration: none;">www.bjgxhy.com</a>&nbsp;&nbsp;|&nbsp;&nbsp; 服务热线：4008-762-395</span> 
		</div>
	</div>
</body>
</html>