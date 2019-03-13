<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<jsp:include page="/common/base/include_BaseCommon.jsp"></jsp:include>
<link href="<%=request.getContextPath() %>/common/css/commonView.css" rel="stylesheet">
<link href="<%=request.getContextPath() %>/check/css/check.css" rel="stylesheet">
<link href="<%=request.getContextPath() %>/css/public.css" rel="stylesheet">
<script src="<%=request.getContextPath()%>/check/myRank/myRank.js"></script>
<script type="text/javascript">
 	var WEB_ROOT = "<%=request.getContextPath() %>";
</script>
<div style="height: 13%;" id="header-rank-Div">
	<div class="header-content">
		<h2>
			<i class="fa icon-th-large"></i>
			<c>我的排名</c>
			<span ></span>
		</h2>
	</div> 
	<div style="background-color: #FFFFFF;width:90%;"class="" id="hydrologic_rain_rainQueryInfo_1">
		<form class="form-inline" method="post">
			<div style="padding: 10px;border-bottom: 1px solid #dddddd;">
				<div class="col-xs-2.2" style="display: inline;">
					<div class="input-group">
						<div class="input-group-addon">考核名称:</div>
						<input id="meritNm_Rank" type="text" class="form-control" style="width: 190px;">
					</div>
				</div>
				<button id="myRank_query" class="btn btn-primary" style="background-color: #0ab1f8;border: 0px;" type="button" >
					<span class="glyphicon glyphicon-search " ></span>&nbsp;查&nbsp;询
				</button>
				<button  id="refreshMyRank"   class="btn btn-primary" type="button" style="background-color:#EE82EE;border: 0px;">
					<span class="glyphicon glyphicon-refresh" ></span>&nbsp;刷&nbsp;新
				</button>
			</div>
		</form>
	</div>
</div>
<table id="myRank"  style="text-overflow:ellipsis;width:100%;overflow-x:hidden;">
	<thead>
		<tr>
            <th field="meritNm"  width="30" align="left"  halign="center">考核名称</th>
            <th field="meritTm"   width="25" align="center"  formatter="myRank.formatterMeritmeritTm">申请时间</th>
            <th field="totalScore" width="25" align="center">考核分数(分)</th>
            <th field="assess" width="35"  align="left"  halign="center">考核评价</th>
            <th field="rankMy"  width="35" align="center" formatter="myRank.formatterRankMy">考核排名</th>
            <th field="uuid" width="45" align="center" formatter="myRank.formatterPf">各指标分</th>
            <th field="rank" width="20" align="center" formatter="myRank.formatterRank">整体排名</th>
		</tr>
	</thead>
</table>


