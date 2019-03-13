<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<jsp:include page="/common/base/include_BaseCommon.jsp"></jsp:include>
<link href="<%=request.getContextPath() %>/common/css/commonView.css" rel="stylesheet">
<script src="<%=request.getContextPath() %>/filemanage/systemFile/allFile.js"></script> 
<script type="text/javascript">
 	var WEB_ROOT = "<%=request.getContextPath() %>";
 	var paramTp = "<%=request.getParameter("tp")%>";
</script>
<div class="headerDiv" id="headerDiv">
	<div class="header-content">
		<!-- <h2>
			<i class="fa icon-th-large"></i>
			<c>
			     <a style="text-decoration: none;" href="systemFile.jsp">制度文件</a>
				<span style="margin-left: 5px;margin-right: 5px;">></span>更多
			</c>
			<span ></span>
		</h2> -->
		<h2 class="paramTp1">
			<i class="fa icon-th-large"></i>
			<c>
			<a style="text-decoration: none;" href="systemFile.jsp">制度文件</a>
				<span style="margin-left: 5px;margin-right: 5px;">></span>更多
			</c>
		</h2>
		<h2 class="paramTp2">
			<i class="fa icon-th-large"></i>
			  <c>	  
				<a style="text-decoration: none;color: #337ab7;" href="javascript:history.back(-1)">工作台</a>
				<a style="text-decoration: none;" href="systemFile.jsp">>制度文件</a>
				<span style="margin-left: 5px;margin-right: 5px;">></span>更多
			 </c>
		</h2>
	</div> 
<!--查询  -->
	<div style="background-color: #FFFFFF;"class="" id="hydrologic_rain_rainQueryInfo_1">
		<form class="form-inline" method="post">
			<div style="padding: 10px;border-bottom: 1px solid #dddddd;">
				<div class="col-xs-2.2" style="display: inline;">
					<div class="input-group">
					  <span class="input-group-addon" >文件标题:</span>
					  <input type="text" class="form-control" id="keyword"  placeholder="请输入文件标题">
					</div>
				</div>
				<div class="col-xs-2.2" style="display: inline; ">
					<div class="input-group">
						<div class="input-group-addon">起始时间:</div>
						<input id="startTm" type="text" class="form-control" style="width: 190px;">
					</div>
				</div>
				<div class="col-xs-2.2" style="display: inline;">
					<div class="input-group">
						<div class="input-group-addon">结束时间:</div>
						<input id="endTm"  type="text" class="form-control" style="width: 190px;">
					</div>
				</div>
				<button id="queryFile" class="btn btn-primary" style="background-color:#0ab1f8;border: 0px;" type="button" >
					<span class="glyphicon glyphicon-search " ></span>&nbsp;查&nbsp;询
				</button>
				<button  id="refreshFile"   class="btn btn-primary" type="button" style="background-color:#EE82EE;border: 0px;">
					<span class="glyphicon glyphicon-refresh" ></span>&nbsp;刷&nbsp;新
				</button>
				</div>
			</form>
		</div>
</div>

<!--列表  -->
<table id="fileTable"  style="text-overflow:ellipsis;">
	<thead>
		<tr>
            <th field="uuid" hidden="true" width="1">主那家</th>
            <th field="fileTitle" width="60" align="center" align="center">文件标题</th>
            <th field="issuser" width="20" align="center" >文件作者</th>
            <th field="creatTime" width="20" align="center"   formatter="allFile.formatTm">创建时间</th>
		</tr>
	</thead>
</table>
<script type="text/javascript">
if(parseInt(paramTp)){
	$(".paramTp1").hide();
	$(".paramTp2").show();
}
</script>
