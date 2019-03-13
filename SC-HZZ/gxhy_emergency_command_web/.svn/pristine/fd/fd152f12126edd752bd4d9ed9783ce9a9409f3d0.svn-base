<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<jsp:include page="/common/base/include_BaseCommon.jsp"></jsp:include>
<link href="<%=request.getContextPath() %>/common/css/commonView.css" rel="stylesheet">
<link href="<%=request.getContextPath() %>/filemanage/css/project.css" rel="stylesheet">
<script src="<%=request.getContextPath() %>/emergency/resourceShare/resourceShare.js"></script>
<script type="text/javascript">
 	var WEB_ROOT = "<%=request.getContextPath()%>";
</script>
<div class="headerDiv" id="Resource_headerDiv">
	<div class="header-content">
		<h2>
			<i class="fa icon-th-large"></i>
			<c>资源共享</c>
			<span ></span>
		</h2>
	</div>  
	<div style="background-color: #FFFFFF;">
		<form class="form-inline" method="post">
			<div style="padding: 10px;border-bottom: 1px solid #dddddd;">
				<div class="col-xs-2.2" style="display: inline;">
					<div class="input-group">
					  <span class="input-group-addon" >资源名称:</span>
					  <input type="text" class="form-control" id="keyword"  placeholder="请输入资源名称">
					</div>
				</div>
				<div class="col-xs-2.2" style="display: inline; ">
					<div class="input-group">
						<div class="input-group-addon">开始时间:</div>
						<input id="startTm" type="text" class="form-control" style="width: 190px;">
					</div>
				</div>
				<div class="col-xs-2.2" style="display: inline;">
					<div class="input-group">
						<div class="input-group-addon">结束时间:</div>
						<input id="endTm"  type="text" class="form-control" style="width: 190px;">
					</div>
				</div>
				<button id="queryResource" class="btn btn-primary" type="button"  style="background-color:#0ab1f8;border: 0px;" >
					<span class="glyphicon glyphicon-search " ></span>&nbsp;查&nbsp;询
				</button>
				<button id="addResource"  class="btn btn-primary" type="button" style="background-color: #43CD80;border: 0px;" >
					<span class="glyphicon glyphicon-plus " ></span>&nbsp;添&nbsp;加
				</button>
				<button  id="refreshResource"   class="btn btn-primary" type="button" style="background-color:#EE82EE;border: 0px;">
					<span class="glyphicon glyphicon-refresh" ></span>&nbsp;刷&nbsp;新
				</button>
			</div>
	    </form>
	</div>
</div>
<!--列表  -->
<table id="patrol_resource"  style="text-overflow:ellipsis;">
	<thead>
		<tr>
            <th field="uuid" hidden="true" width="1">主那家</th>
            <th field="typeNm" width="20" align="center" align="center">资源类型</th>
            <th field="projectName" width="90" align="left" formatter="resource.formatName">资源名称</th>
            <th field="creatTime" width="30" align="center"  formatter="resource.formatDate">共享时间</th>
            <th field="updateTime" width="30" align="center"  formatter="resource.formatDate">更新时间</th>
            <th field="isForever" width="20"  align="center" formatter="resource.formatIsForever">是否永久</th>
            <th field="operation" width="50"  align="center" formatter="resource.formatOperation">操作</th>
		</tr>
	</thead>
</table>
