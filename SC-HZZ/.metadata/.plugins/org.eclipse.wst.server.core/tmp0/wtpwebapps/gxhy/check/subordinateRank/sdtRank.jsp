<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<jsp:include page="/common/base/include_Layui.jsp"></jsp:include>
<jsp:include page="/common/base/include_BaseCommon.jsp"></jsp:include>
<link href="<%=request.getContextPath() %>/common/css/commonView.css" rel="stylesheet">
<link href="<%=request.getContextPath() %>/css/public.css" rel="stylesheet">
<script src="<%=request.getContextPath()%>/check/subordinateRank/sdtRank.js"></script>
<script type="text/javascript">
 	var WEB_ROOT = "<%=request.getContextPath() %>";
</script>
<div style="height: 13%;" id="headerSubRankDiv">
	<div class="header-content">
		<h2>
			<i class="fa icon-th-large"></i>
			<c>下级排名</c>
			<span ></span>
		</h2>
	</div> 
	<div style="background-color: #FFFFFF;" id="hydrologic_rain_rainQueryInfo_1">
		<form class="form-inline" method="post">
			<div style="padding-top: 10px;">
				<div class="col-xs-2.2" style="display: inline;">
					<div class="input-group">
						<div class="input-group-addon">申请人名称:</div>
						<input id="createNm_SDT" type="text" class="form-control" style="width: 190px;">
					</div>
				</div>
				<div class="col-xs-2.2" style="display: inline; ">
					<div class="input-group">
						<div class="input-group-addon">绩效名称:</div>
						<input id="meritNm_SDT" type="text" class="form-control" style="width: 190px;">
					</div>
				</div>
				<button id="sdtRank_query" class="btn btn-primary" style="background-color:#0ab1f8;border:none;" type="button" >
					<span class="glyphicon glyphicon-search " ></span>&nbsp;查&nbsp;询
				</button>
				<button  id="refreshStRank"   class="btn btn-primary" type="button" style="background-color:#EE82EE;border: 0px;">
					<span class="glyphicon glyphicon-refresh" ></span>&nbsp;刷&nbsp;新
				</button>
			</div>
		</form>
		<table class="layui-hide" id="sdtaRank" ></table> 
	</div>
</div>
	


