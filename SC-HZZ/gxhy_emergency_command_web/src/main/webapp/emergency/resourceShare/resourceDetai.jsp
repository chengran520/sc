<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<jsp:include page="/common/base/include_BaseCommon.jsp"></jsp:include>
<link href="<%=request.getContextPath() %>/common/css/commonView.css" rel="stylesheet">
<link href="<%=request.getContextPath() %>/filemanage/css/project.css" rel="stylesheet">
<script src="<%=request.getContextPath() %>/emergency/resourceShare/resourceDetai.js"></script> 
<script type="text/javascript">
 	var WEB_ROOT = "<%=request.getContextPath()%>";
 	var uuid="<%=request.getParameter("uuid")%>";
 </script>
<div style="height: 13%;" id="headerDiv">
	<div class="header-content">
		<h2>
			<i class="fa icon-th-large"></i>
			<c>
				<a style="text-decoration: none;" href="resourceShare.jsp">资源共享</a>
				<span style="margin-left: 5px;margin-right: 5px;">></span>
				预览
			</c>
		</h2>
	</div>
</div>
<div style="margin-top:10px;">
	<div id="printDiv">
	   <div  id="projectName"></div>
	    <div class="divss">
	    	<span id="creatTime"></span>
	    	<span id="applicantNm" style="margin-left:20px;"></span>
	    	<span class="fr">【字体：&nbsp;
	    	      <span id="big">大</span>&nbsp; 
	    	      <span id="middle">中</span>&nbsp; 
	    	      <span id="small">小</span> 】&nbsp;&nbsp;&nbsp;&nbsp;
		    </span>
	    </div>
        <div id="describe" ></div>
    </div>
</div>
