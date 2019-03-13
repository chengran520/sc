<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<jsp:include page="/common/base/include_BaseCommon.jsp"></jsp:include>
<link href="<%=request.getContextPath() %>/common/css/commonView.css" rel="stylesheet">
<script src="<%=request.getContextPath() %>/filemanage/systemFile/fileDeatil.js"></script>
<script src="<%=request.getContextPath() %>/filemanage/systemFile/systemFile.js"></script>
<style>
body{
	overflow: hidden;
}
.bodyContent{
	overflow-y: auto;
    overflow-x: hidden;
}
</style>
<script type="text/javascript">
 	var WEB_ROOT = "<%=request.getContextPath() %>";
 	var uuid="<%=request.getParameter("uuid")%>";
 </script>
<div style="height: 36px;" id="headerDiv">
	<div class="header-content" style="height: 36px;">
			<h2>
			<i class="fa icon-th-large"></i>
			  <c>
				<a style="text-decoration: none;" href="systemFile.jsp">制度文件</a>
				<span style="margin-left: 5px;margin-right: 5px;">></span>查看制度文件
			 </c>
			 <button id="delete_system" class="btn-sm" type="button" style="background-color:#9B30FF;border: 0px;color:#fff;float:right;margin-left: 8px;margin-top:-5px;">
			    &nbsp;删&nbsp;除
			 </button>
			  <button id="update_system" class="btn-sm" type="button" style="background-color:#008B00;border: 0px;color:#fff;float:right;margin-left: 8px;margin-top:-5px;">
	            &nbsp;修&nbsp;改
			 </button>
	</div>
</div>
<div style="margin-top:10px;" class="bodyContent">
        <h1 style="text-align:center;color:red;" id="title"></h1>
        <div style="text-align:center;color:#888;margin-top:10px;">
		     <span id="issuser"></span>
		     <span id="creatTime"  style="margin-left:10px;"></span>         
        </div>
        <div align="right" style="margin-right:20px;" id="divFont">
                           【文字
          <a class="bigger">大</a>
          <a class="midden">中</a>
          <a class="smaller">小</a>】
                         【<span id="close">关闭窗口</span>】
        </div>
   	<div>
	   <div align="right" style="font-size: 9pt;margin-right:28px;" id="div_color">
	      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;保护视力色： 
	            <a class="color_xrh">
	                 <img height="10" alt="杏仁黄" title="杏仁黄"  src="<%=request.getContextPath() %>/common/images/file_images/color1.gif" width="10" border="0"></a>
	            <a class="color_qyh">
	                <img height="10" alt="秋叶褐" title="秋叶褐"   src="<%=request.getContextPath() %>/common/images/file_images/color2.gif" width="10" border="0"></a>
	            <a class="color_yzh">
	                <img height="10" alt="胭脂红" title="胭脂红"   src="<%=request.getContextPath() %>/common/images/file_images/color3.gif" width="10" border="0"></a>
	            <a class="color_jml">
	                <img height="10" alt="芥末绿" title="芥末绿"   src="<%=request.getContextPath() %>/common/images/file_images/color4.gif" width="10" border="0"></a>
	            <a class="color_tl">
	                <img height="10" alt="天蓝" title="天蓝"     src="<%=request.getContextPath() %>/common/images/file_images/color5.gif"" width="10" border="0"></a>
	            <a class="color_xq">
	                <img height="10" alt="雪青" title="雪青"     src="<%=request.getContextPath() %>/common/images/file_images/color6.gif" width="10" border="0"></a>
	            <a class="color_hui">
	                <img height="10" alt="灰"  title="灰"       src="<%=request.getContextPath() %>/common/images/file_images/color7.gif" width="10" border="0"></a>
	            <a  class="color_yhb">
	                <img height="10" alt="银河白(默认色)" title="银河白(默认色)"  src="<%=request.getContextPath() %>/common/images/file_images/color8.gif" width="10" border="0"></a>
	        </div> 
	        <div style="font-size:13px;margin:0 30px;" id="content"></div>
        </div>
</div>
