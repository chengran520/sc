<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<jsp:include page="/common/base/include_BaseCommon.jsp"></jsp:include>
<link href="<%=request.getContextPath() %>/common/css/commonView.css" rel="stylesheet">
<script src="<%=request.getContextPath()%>/data_center/water/riverlength/riverLength2.js"></script>
<script type="text/javascript">
 	var WEB_ROOT = "<%=request.getContextPath() %>";
</script>
<div class="headerDiv" id="headerUserdiv">
	<div class="header-content">
		<h2>
			<i class="fa icon-th-large"></i>
			<c>河长信息</c>
			<span ></span>
		</h2>
	</div> 
	<div style="background-color: #FFFFFF;"class="" id="user_div_manager">
		<form class="form-inline" method="post" id="form_data_info">
			<div style="padding: 10px;border-bottom: 1px solid #dddddd;">
				<div class="col-xs-2.2" style="display: inline;">
					<div class="input-group">
					  <span class="input-group-addon" >用户信息:</span>
					  <input type="text" class="form-control" id="keyword"  placeholder="请输入编码或名称">
					</div>
					<div class="input-group">
					  <span class="input-group-addon" >手机号码:</span>
					  <input type="text" class="form-control" id="phone_query"  placeholder="请输入手机号码">
					</div>
				</div>
				<button id="queryRiverLength" class="btn btn-primary" style="background-color: #88D44E;border: 0px;" type="button" >
					<span class="glyphicon glyphicon-search " ></span>&nbsp;查&nbsp;询
				</button>
				<button id="refreshRiverLength" class="btn btn-primary" type="button" style="background-color: #0ab1f8;border: 0px;">
					<span class="glyphicon glyphicon-refresh " ></span>&nbsp;刷&nbsp;新
				</button>	
			</div>
		</form>
	</div>
</div>
<table id="RiverLength"  style="text-overflow:ellipsis;">
	<thead>
		<tr>
            <th field="uuid"        hidden="true" width="1">河长</th>
            <th field="rvUserId"    width="60"    align="center" halign="center">河长登录名</th>
             <th field="rvUserName"       width="30"    align="center" >河长姓名</th>
            <th field="rvcd"      width="30"    align="center" >河流编码</th>
            <th field="rvType"      width="40"    align="center" >河长类型</th>
            <th field="rvUPhone"  width="40"    align="center">河长手机</th>
            <th field="rvUUnit" width="30"    align="center">河长工作单位</th>
		</tr>
	</thead>
</table>
