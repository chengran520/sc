<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<jsp:include page="/common/base/include_BaseCommon.jsp"></jsp:include>
<link href="<%=request.getContextPath() %>/common/css/commonView.css" rel="stylesheet">
<style>
	body{
		overflow:hidden;
	}
	.content{
		overflow-x:hidden;
		overflow-y:auto;
	}
</style>
<script src="<%=request.getContextPath() %>/work_bench/InformDetail.js"></script>
<script type="text/javascript">
 	var WEB_ROOT = "<%=request.getContextPath() %>";
 	var uuid="<%=request.getParameter("uuid")%>";
 </script>
<div style="height: 40px;" id="headerDiv">
	<div class="header-content">
			<h2>
				<i class="fa icon-th-large"></i>
				  <c>
					<a style="text-decoration: none;color: #337ab7;" href="javascript:history.back(-1)">工作台</a>
					<span style="margin-left: 5px;margin-right: 5px;">></span>
						通知公告
				 </c>
			</h2>
	</div>
</div>
    <div style="margin-top:10px;" class="content">
		<div>
		    <h1 style="text-align:center;color:red;" id="msgTitle"></h1>
	        <div style="text-align:center;color:#888;margin-top:10px;">
			     <span id="sendUser"></span>
			     <span id="sendTm"  style="margin-left:10px;"></span>         
	        </div>
	        <div style="font-size:13px;margin:0 30px;" id="msgContent"></div>
        </div>
    </div>
<script type="text/javascript">
	var hit = $(window).height();
 	$(".content").height(hit - 50);
 </script>