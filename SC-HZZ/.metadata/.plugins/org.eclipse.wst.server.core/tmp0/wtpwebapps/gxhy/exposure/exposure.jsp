<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<jsp:include page="/common/base/include_BaseCommon.jsp"></jsp:include>
<link href="<%=request.getContextPath() %>/common/css/commonView.css" rel="stylesheet">
<link href="<%=request.getContextPath() %>/exposure/exposure.css" rel="stylesheet">
<script src="<%=request.getContextPath() %>/common/js/contentPath/db.js"></script>
<script src="<%=request.getContextPath() %>/exposure/exposure.js"></script>
<script type="text/javascript">
 	var WEB_ROOT = "<%=request.getContextPath() %>";
 	/*网路路径*/
	var path = "<%=request.getScheme() + "://"+ request.getServerName() + ":" + request.getServerPort()%>";
</script>
<div class="headerDiv" id="headerDiv" style="height: 80px;">
	<div class="header-content">
		<h2>
			<i class="fa icon-th-large"></i>
			<c>曝光台</c>
			<span ></span>
		</h2>
	</div> 
	<div style="background-color: #FFFFFF;"class="" id="hydrologic_rain_rainQueryInfo_1">
		<form class="form-inline" method="post">
			<div style="padding: 6px 10px;border-bottom: 1px solid #dddddd;">
				<div class="col-xs-2.2" style="display: inline;">
					<div class="input-group">
					  <span class="input-group-addon" >污染类型:</span>
				      <select  class="form-control" id="pollutionType" class="form-control"  placeholder="请选择类型" style="width: 190px;">
					  </select>
					</div>
				</div>
				<div class="col-xs-2.2" style="display: inline; ">
					<div class="input-group">
						<div class="input-group-addon">时间:</div>
						<input id="report" type="text" class="form-control" style="width: 190px;">
					</div>
				</div>
				<button id="queryExposure" class="btn btn-primary" style="background-color: #0ab1f8;border: 0px;" type="button" >
					<span class="glyphicon glyphicon-search " ></span>&nbsp;查&nbsp;询
				</button>
				<button  id="refreshExposure"   class="btn btn-primary" type="button" style="background-color:#EE82EE;border: 0px;">
					<span class="glyphicon glyphicon-refresh" ></span>&nbsp;刷&nbsp;新
				</button>
				</div>
			</form>
		</div>
</div>
<div class="exposureFat">
	<div id="exposure"></div>
</div>
