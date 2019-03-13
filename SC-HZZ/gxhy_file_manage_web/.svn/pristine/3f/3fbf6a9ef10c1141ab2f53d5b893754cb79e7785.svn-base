<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<jsp:include page="/common/base/include_BaseCommon.jsp"></jsp:include>
<link href="<%=request.getContextPath() %>/common/css/commonView.css" rel="stylesheet">
<link href="<%=request.getContextPath() %>/filemanage/css/project.css" rel="stylesheet">
<script src="<%=request.getContextPath() %>/filemanage/projectCopywriter/projectFile.js"></script> 
<script type="text/javascript">
 	var WEB_ROOT = "<%=request.getContextPath() %>";
</script>
<div class="headerDiv" id="headerDiv">
	<div class="header-content">
		<h2>
			<i class="fa icon-th-large"></i>
			<c>项目文案</c>
			<span ></span>
		</h2>
	</div> 
<!--查询  -->
	<div style="background-color: #FFFFFF;"class="" id="hydrologic_rain_rainQueryInfo_1">
		<form class="form-inline" method="post">
			<div style="padding: 10px;border-bottom: 1px solid #dddddd;">
				<div class="col-xs-2.2" style="display: inline;">
					<div class="input-group">
					  <span class="input-group-addon" >关键字:</span>
					  <input type="text" class="form-control" id="keyword"  placeholder="请输入项目名称">
					</div>
				</div>
				<div class="col-xs-2.2" style="display: inline;margin-left:8px; ">
					<div class="input-group">
						<div class="input-group-addon">创建时间:</div>
						<input id="creatTm" type="text" class="form-control" style="width: 190px;">
					</div>
				</div>
				<!-- <div class="col-xs-2.2" style="display: inline; ">
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
				</div> -->
				<button id="queryProject" class="btn btn-primary" style="background-color:#0ab1f8;border: 0px;" type="button" >
					<span class="glyphicon glyphicon-search " ></span>&nbsp;查&nbsp;询
				</button>
				<button  id="addProject" class="btn btn-primary" type="button" style="background-color: #43CD80;border: 0px;" >
					<span class="glyphicon glyphicon-plus " ></span>&nbsp;添&nbsp;加
				</button>
				<button  id="refreshProjectFile"   class="btn btn-primary" type="button" style="background-color:#EE82EE;border: 0px;">
					<span class="glyphicon glyphicon-refresh" ></span>&nbsp;刷&nbsp;新
				</button>
				</div>
			</form>
		</div>
</div>

<!--列表  -->
<table id="patrol_project"  style="text-overflow:ellipsis;">
	<thead>
		<tr>
            <th field="uuid" hidden="true" width="1">主那家</th>
            <th field="projectName" width="60" align="center" align="center">项目名称</th>
            <th field="applicantNm" width="20" align="center" >申请人</th>
            <th field="typeNm" width="20" align="center">项目类型</th>
            <!-- <th field="startTime"  width="20" align="center" >开始时间</th>
            <th field="endTime" width="20" align="center" >结束时间</th> -->
             <th field="creatTime" width="30" align="center" formatter="projectFile.formatterCreateTm">创建时间</th>
            <th field="operation" width="40"  align="center" formatter="projectFile.formatOperation">操作</th>
		</tr>
	</thead>
</table>

<!-- 详情 -->
<div class="modal fade" id="projectDetail_model" tabindex="-1" role="dialog" aria-labelledby="myModalLabel"  style="overflow-y: hidden;">
	<div class="modal-dialog" role="document">
		<div class="modal-content" style="height:500px;overflow-y: auto;overflow-x: hidden;">
			<div class="modal-header" style="padding:8px;">
				<button type="button" class="close" data-dismiss="modal" aria-label="Close">
					<span aria-hidden="true" style="font-size: 32px;margin-right: 10px;">×</span>
				</button>
				<h4 class="modal-title" id="myModalLabel">基本信息</h4>
			</div>
			<form class="form-horizontal" role="form" >
				  <div class="form-group" style="padding-top: 9px;margin-bottom:5px;"> 
					    <label class="col-sm-2 control-label" style="padding-top: 0px;margin-left:15px;">项目名称：</label>
					    <div class="col-sm-6">
					     	<p class="label-control" id="projectName"></p>  
					    </div>
				  </div>
				   <div class="form-group" style="padding-top: 9px;margin-bottom:5px;"> 
					    <label class="col-sm-2 control-label" style="padding-top: 0px;margin-left:15px;">项目类型：</label>
					    <div class="col-sm-6">
					     	<p class="label-control" id="type"></p>  
					    </div>
				  </div>
				  <div class="form-group" style="margin-bottom:5px;">
			    	<label class="col-sm-2 control-label" style="padding-top: 0px;margin-left:15px;">项目时间：</label>
				    <div class="col-sm-6">
				     	<p class="label-control" id="time"></p>  
				    </div>
				 </div>
				 <div class="form-group" style="margin-bottom:5px;">  
				    <label class="col-sm-2 control-label" style="padding-top: 0px;margin-left:15px;">审批状态：</label>
				    <div class="col-sm-6">
				     	<p class="label-control" id="approveState"></p>  
				    </div>
			    </div>
			    <div class="form-group" style="margin-bottom:5px;">  
				    <label class="col-sm-2 control-label" style="padding-top: 0px;margin-left:15px;">项目内容：</label>
				    <div class="col-sm-8">
				     	<p class="label-control" id="describe"></p>  
				    </div>
			    </div>
		    </form>
		</div>
	</div>
</div>
