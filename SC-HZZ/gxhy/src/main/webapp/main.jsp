<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ include file="/common/base/taglibs_logout.jsp"%>
<!DOCTYPE html>
<html>
<head>
	<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
	<meta name="viewport" content="width=device-width,initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no,minimal-ui">
	<title class="noprint">石城县水质水量水环境监测平台</title>
	<jsp:include page="/common/base/include_BootStrap.jsp"></jsp:include>
	<jsp:include page="/common/base/include_Common.jsp"></jsp:include>
	<link rel="icon" href="${basePath}common/images/favicon.ico" type="image/x-icon" />
	<link rel="shortcut icon" href="${basePath}common/images/favicon.ico" type="image/x-icon" />
	<link rel="bookmark" href="${basePath}common/images/favicon.ico" type="image/x-icon" />
	<style>
		.layui-layer-dialog .layui-layer-padding {
		    text-align: center;
		}
		.layui-layer-dialog .layui-layer-content .layui-layer-ico {
		    left: 40px;
		}
	</style>
	<script type="text/javascript">
		 var WEB_ROOT = "${basePath}";
		 var APP_ROOT = "${appPath}"; 
		 window.onresize = function() {
	         resizeIframe();
	     };
	     function resizeIframe(){ 
           if ($(this).width() < 769) {
               $('body').addClass('body-small')
           } else {
               $('body').removeClass('body-small')
           }
           var P = $(window).height();
           var mapH = P-65;
           var headerH = P-mapH;
           var header = $("#header");
           var mapInfo=$("#masterContent");
           mapInfo.height(mapH); 
           mapInfo.css({height: mapH});  
           header.height(headerH);
           header.css({height:headerH});
        }
	    window.onload=function(){ 
	   		var menu_url = '<%=SecurityUtils.getSubject().getSession().getAttribute("index")%>';
			layer.msg('加载中', {
			   icon: 16
			  ,shade: 0.01
			}); 
		   document.getElementById('framework').src= WEB_ROOT+"/"+menu_url;
    	} 
	</script>
</head>
<body id="body" class="body" style="background-color: white;"> 
	<div class="header" id="header" style="z-index:999;padding: 0px 0px;">
	    <header class="header" >
	        <jsp:include page="/common/base/header.jsp"></jsp:include>
	    </header>
	</div>
     <div id="masterContent" style="width: 100%;overflow: hidden;height: 100%;">
         <iframe id="framework"  name="framework" style="height: 100%;width: 100%;" class="embed-responsive-item" border="0" frameSpacing="0" frameBorder="0" vspace="0"  onload="javascript:resizeIframe();" ></iframe>
     </div> 
</body>
</html>