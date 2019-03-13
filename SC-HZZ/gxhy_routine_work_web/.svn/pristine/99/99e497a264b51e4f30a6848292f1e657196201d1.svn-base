<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<jsp:include page="/common/base/include_BaseCommon.jsp"></jsp:include>
<link href="<%=request.getContextPath() %>/common/css/commonView.css" rel="stylesheet">
<link href="<%=request.getContextPath() %>/exposure/exposure.css" rel="stylesheet">
<script src="<%=request.getContextPath() %>/exposure/ExposureDetail.js"></script>
<script src="<%=request.getContextPath() %>/common/js/contentPath/db.js"></script>
<script type="text/javascript">
 	var WEB_ROOT = "<%=request.getContextPath() %>";
 	var id="<%=request.getParameter("id")%>"; 
	/*网路路径*/
	var path = "<%=request.getScheme() + "://"+ request.getServerName() + ":" + request.getServerPort()%>";
</script>
<div style="height: 13%;" id="headerDiv">
	<div class="header-content">
			<h2>
				<i class="fa icon-th-large"></i>
				<c>
				   <a style="text-decoration: none; display: inline;color:#000;" href="exposure.jsp">曝光台</a>
				   <span style="margin-left: 5px;margin-right: 5px;">></span>曝光台详情
				</c>
				<span ></span>
				<button id="return_exposure" class="btn-sm" type="button" style="background-color:#4169E1;border: 0px;color:#fff;float:right;margin-left: 8px;margin-top:-5px;">
		            <font style="font-weight: bolder;">&nbsp;返&nbsp;回</font>
				</button>
		</h2>
	</div> 
</div>
	<div class="div-add-view" style="width:45%;margin-left:50px;float:left;border-radius:5px;padding: 5px 30px;border: 1px solid #CDC8B1;margin: 24px 0 0 19px;">
		 <span class="title" style='border-radius: 5px;letter-spacing: 3px;padding-top: 7px;background: #0099ff;'>基本信息</span>
		<form class="form-horizontal" role="form" id="form_data_info">
		    <div class="form-group">
				<label class="col-sm-3 control-label"  style='font-size: 15px;'>河流编码：</label>
				<div class="col-sm-8" >
				     <p id="rvCd1"></p>
				</div>
			</div>
			<div class="form-group">
				<label class="col-sm-3 control-label"  style='font-size: 15px;'>河流名称：</label>
				<div class="col-sm-8" >
				     <p id="rvNm1"></p>
				</div>
			</div>
			<div class="form-group">
				<label class="col-sm-3 control-label"  style='font-size: 15px;'>污染类型：</label>
				<div class="col-sm-8"  >
					<p id="pollutionType1"></p>
				</div>
		    </div>
			<div class="form-group">
				<label class="col-sm-3 control-label"  style='font-size: 15px;'>处理状态：</label>
				<div class="col-sm-8">
					<p id="status1"></p>
				</div>
			</div>
		   <div class="form-group">
				<label  class="col-sm-3 control-label"  style='font-size: 15px;'>问题所在地址：</label>
				<div class="col-sm-8">
					<p id="address1"></p>
				</div>
		  </div>
		   <div class="form-group">
				<label  class="col-sm-3 control-label"  style='font-size: 15px;'>上传图片：</label>
				<div class="col-sm-8" id="url1">
					<!-- <p class="url1" style="text-align: left;" ></p> -->
				</div>
		   </div>
			<div class="form-group">
			    <label  class="col-sm-3 control-label"  style='font-size: 15px;'>问题描述：</label>
		        <div class="col-sm-8">
					<p id="describe1"></p>
				</div>
			</div>
		</form>
	</div>
	<!-- <div class="div-add-view"  style="width: 52%;float:left;border-radius:5px;padding: 5px 30px;border: 1px solid #CDC8B1;margin: 24px 0 0 7px;">
		 <span class="title" style="background:#FFBA2F;border-radius: 5px;letter-spacing: 3px;padding-top: 7px;">事件信息</span>
		 <form class="form-horizontal" role="form" id="form">
	            <div class="history">
					<div class="history-date">			
					</div>
				</div>
		</form>
   </div> -->

