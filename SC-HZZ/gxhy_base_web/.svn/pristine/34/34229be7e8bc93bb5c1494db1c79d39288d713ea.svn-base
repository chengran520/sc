<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<jsp:include page="/common/base/include_BaseCommon.jsp"></jsp:include>
<link href="<%=request.getContextPath() %>/common/css/commonView.css" rel="stylesheet">
<link href="<%=request.getContextPath() %>/css/public.css" rel="stylesheet">
<script src="<%=request.getContextPath()%>/module/sysmanager/log/logoInfo.js"></script>
<script type="text/javascript">
 	var WEB_ROOT = "<%=request.getContextPath() %>";
</script>
<div class="headerDiv" id="headerLogdiv">
	<div class="header-content">
		<h2>
			<i class="fa icon-th-large"></i>
			<c>日志管理</c>
			<span ></span>
		</h2>
	</div> 
	<div style="background-color: #FFFFFF;"class="" id="user_div_manager">
		<form class="form-inline" method="post" id="form_data_info">
			<div style="padding: 10px;border-bottom: 1px solid #dddddd;">
				<div class="col-xs-2.2" style="display: inline;">
					<div class="input-group">
					  <span class="input-group-addon" >操作人:</span>
					  <input type="text" class="form-control" id="createBy"  placeholder="请输入操作人名称">
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
				 </div>
				<button id="queryLog" class="btn btn-primary" style="background-color: #0ab1f8;border: 0px;" type="button" >
					<span class="glyphicon glyphicon-search " ></span>&nbsp;查&nbsp;询
				</button>
				<button id="deleteLog" class="btn btn-primary" type="button" style="background-color: #f25f00;border: 0px;">
					<span class="glyphicon glyphicon-refresh " ></span>&nbsp;删&nbsp;除
				</button>
				<button  id="refreshLog"   class="btn btn-primary" type="button" style="background-color:#EE82EE;border: 0px;">
					<span class="glyphicon glyphicon-refresh" ></span>&nbsp;刷&nbsp;新
				</button>	
			</div>
		</form>
	</div>
</div>
<table id="patrol_catalogLog"  style="text-overflow:ellipsis;">
	<thead>
		<tr>
            <th field="uuid"    hidden="true" width="10">日志</th>  
            <th field="ck" checkbox="true"  width="1"></th>
            <th field="createBy"  width="10"    align="center" >操作人</th>
            <th field="logLevel" width="10"   align="center" >日志级别</th>
            <th field="logType" width="10"   align="center">日志类型</th>
            <th field="method"   width="30"    align="left"  formatter="log.promptMessage">操作方法</th>    
            <th field="logException"   width="30"  align="center"  formatter="log.promptMessage">异常信息</th>    
            <th field="requestIp" width="10"    align="center" >客户端IP</th>
            <th field="createDate" width="20"    align="center" >发生时间</th>
		</tr>
	</thead>
</table>
