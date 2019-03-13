<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@page import="org.apache.shiro.SecurityUtils"%>
<jsp:include page="/common/base/include_BaseCommon.jsp"></jsp:include>
<link href="<%=request.getContextPath()%>/common/css/commonView.css"
	rel="stylesheet">
<link rel="stylesheet"
	href="<%=request.getContextPath()%>/css/public.css">
<link href="<%=request.getContextPath() %>/common/fileupdate/fileinput.css" rel="stylesheet">
<script src="<%=request.getContextPath()%>/common/fileupdate/fileinput.js"></script>
<script src="<%=request.getContextPath()%>/common/fileupdate/fileinput-zh.js"></script>
<script src="<%=request.getContextPath()%>/common/fileupdate/jquery.media.js"></script>
<script src="<%=request.getContextPath()%>/common/fileupdate/jquery.form.js"></script>
<script type="text/javascript" src="<%=request.getContextPath()%>/module/js/jquery.ztree.core.js"></script>
<script type="text/javascript" src="<%=request.getContextPath()%>/module/js/jquery.ztree.excheck.min.js"></script>
<script type="text/javascript" src="<%=request.getContextPath()%>/data_monitor/riverBuild/riverBuild.js"></script>
<script type="text/javascript">
 	var WEB_ROOT = "<%=request.getContextPath()%>";
</script>
<div class="headerDiv" id="headerRolediv">
	<div class="header-content">
		<h2>
			<i class="fa icon-th-large"></i>
			<c>一河一建</c>
			<span></span>
		</h2>
	</div>
	<div style="background-color: #FFFFFF;" class="" id="user_div_manager">
		<form class="form-inline" method="post" id="form_data_info">
			<div style="padding: 10px; border-bottom: 1px solid #dddddd;">
				<div class="col-xs-2.2" style="display: inline;">
					<div class="input-group">
						<span class="input-group-addon">项目名称:</span> <input type="text"
							class="form-control" id="keyword" placeholder="请输入项目名称">
					</div>
				</div>
				<button id="queryInfo" class="btn btn-primary"
					style="background-color: #0ab1f8; border: 0px;" type="button">
					<span class="glyphicon glyphicon-search "></span>&nbsp;查&nbsp;询
				</button>
				<button id="add" class="btn btn-primary" data-toggle="modal"
					type="button" style="background-color: #43CD80; border: 0px;">
					<span class="glyphicon glyphicon-plus "></span>&nbsp;添&nbsp;加
				</button>
			</div>
		</form>
	</div>
</div>
<table id="patrol_catalogInfo"	style="text-overflow: ellipsis; width: 100%;">
	<thead>
		<tr>
			<th field="uuid" hidden="true" width="1"></th>
			<th field="projectName" width="30" align="center">项目名称</th>
			<th field="buildContent" width="50" align="center" halign="center">建设内容</th>
			<th field="investTotal" width="30" align="center">投资总额（万元）</th>
			<th field="finishTotalSchedule" width="40" align="center">完成总进度</th>
			<th field="planStime" width="40" align="center"
				formatter="riverBuild.formatterDataTm">计划开始时间</th>
			<th field="planEtime" width="40" align="center"
				formatter="riverBuild.formatterDataTm">计划结束时间</th>
			<th field="buildUnitName" width="40" align="center">建设单位名称</th>
			<th field="buildUnitContacts" width="40" align="center">建设单位联系人</th>
			<th field="buildUnitContactsTel" width="40" align="center">建设单位联系人电话</th>
			<th field="file" width="20" align="center" formatter="riverBuild.isFile">审核文件</th>
			<th field="roleStatus" width="40" align="center"
				formatter="riverBuild.formatterUser">操作</th>
		</tr>
	</thead>
</table>


<!-- 模态框（Modal） -->
<div class="modal fade" id="myModalAdd" tabindex="-1" role="dialog"
	aria-labelledby="myModalLabel" aria-hidden="true"
	style="overflow: hidden;">
	<div class="modal-dialog">
		<div class="modal-content" style="width: 750px; heigth: auto;">
			<div class="modal-header"
				style="padding: 10px; background-color: #009f95; color: #fff;">
				<button type="button" class="close" data-dismiss="modal"
					aria-label="Close">
					<span aria-hidden="true" style="font-size: 32px; margin-right: 10px;">×</span>
				</button>
				<h4 class="modal-title" id="myModalLabel">信息</h4>
			</div>
			<div class="modal-body"  style="height:450px !important;">
				<form class="form-horizontal" role="form" id="form_data_Info">
					<input class="form-control" name="uuid" id="uuid" type="hidden">
					<div class="form-group" style="margin-top: 14px;" id="userDiv">
						<label class="col-sm-3 control-label"><span
							style="color: red;">★</span>&nbsp;&nbsp;项目名称</label>
						<div class="col-sm-7">
							<input class="form-control" name="projectName" id="projectName"
								type="text" placeholder="输入项目名称" maxlength="50">
						</div>
					</div>
					<div class="form-group">
						<label class="col-sm-3 control-label"><span
							style="color: red;">★</span>&nbsp;&nbsp;建设内容</label>
						<div class="col-sm-7">
							<input class="form-control" name="buildContent" id="buildContent"
								type="text" placeholder="输入建设内容">
						</div>
					</div>
					<div class="form-group" id="pwd">
						<label class="col-sm-3 control-label"><span
							style="color: red;"></span>&nbsp;&nbsp;投资总额（万元）</label>
						<div class="col-sm-7">
							<input class="form-control" name="investTotal" id="investTotal">
						</div>
					</div>
					<div class="form-group">
						<label class="col-sm-3 control-label"><span
							style="color: red;"></span>完成总进度</label>
						<div class="col-sm-7">
							<input class="form-control" name="finishTotalSchedule"
								id="finishTotalSchedule" type="text" placeholder="请输入完成总进度">
						</div>
					</div>
					<div class="form-group" id="planS">
						<label class="col-sm-3 control-label"><span
							style="color: red;"></span>计划开始时间</label>
						<div class="col-sm-7">
							<input class="form-control" name="planStime" id="planStime"
								type="text" placeholder="请输入计划开始时间" readonly="readonly">
						</div>
					</div>
					<div class="form-group" id="planE">
						<label class="col-sm-3 control-label"><span
							style="color: red;"></span>计划结束时间</label>
						<div class="col-sm-7">
							<input class="form-control" name="planEtime" id="planEtime"
								type="text" placeholder="请输入计划结束时间" readonly="readonly">
						</div>
					</div>
					<div class="form-group">
						<label class="col-sm-3 control-label"><span
							style="color: red;"></span>建设单位名称</label>
						<div class="col-sm-7">
							<input class="form-control" name="buildUnitName"
								id="buildUnitName" type="text" placeholder="请输入建设单位名称">
						</div>
					</div>
					<div class="form-group">
						<label class="col-sm-3 control-label"><span
							style="color: red;"></span>建设单位联系人</label>
						<div class="col-sm-7">
							<input class="form-control" name="buildUnitContacts"
								id="buildUnitContacts" type="text" placeholder="请输入建设单位联系人">
						</div>
					</div>
					<div class="form-group">
						<label class="col-sm-3 control-label"><span
							style="color: red;"></span>建设单位联系人电话</label>
						<div class="col-sm-7">
							<input class="form-control" name="buildUnitContactsTel"
								id="buildUnitContactsTel" type="text" placeholder="请输入建设单位联系人电话">
						</div>
					</div>
				</form>
			</div>
			<div class="modal-footer">
				<button class="btn btn-default btns" type="button"
					data-dismiss="modal"
					style="color: #333; background-color: #fff; border-color: #adadad;">
					&nbsp;关&nbsp;闭</button>
				<button class="btn btn-default btns" id="saveInfo" type="button">
					&nbsp;保&nbsp;存</button>
				<button class="btn btn-default btns" type="button" id="updateInfo"
					style="display: none;">&nbsp;修&nbsp;改</button>

			</div>
		</div>
	</div>
</div>

<!-- 模态框（Modal） -->
<div class="modal fade" id="fileModel" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true" style="overflow: auto;">
	<div class="modal-dialog">
		<div class="modal-content"  style="width:750px;height: auto;">
			<div class="modal-header" style="padding:10px;background-color: #009f95;color: #fff;">
				<button type="button" class="close" data-dismiss="modal" aria-label="Close">
					<span aria-hidden="true" style="font-size: 32px;margin-right: 10px;">×</span>
				</button>
				<h4 class="modal-title" id="myModalLabel">项目审核</h4>
			</div>
				<form  id="Form2" name="Form2"  method="post"  enctype="multipart/form-data">
				 <input id="fileid" type="hidden" name="fileid" value="">
				    <input id="fileName" type="hidden" name="fileName" value="">
					<div class="modal-body" id="modal-content-file" style="height:350px !important;">
							  <div class="form-group">
							    <label for="firstname" class="col-sm-2 control-label" style="margin: 9px 0 0 0;"><span style="color: red;">★</span>&nbsp;&nbsp;项目文件</label>
							    <div class="col-sm-9"> 	
							    	 <input id="input-b3" name="input-b3" type="file" class="file" multiple data-show-upload="false" data-show-caption="true" data-msg-placeholder="请选择要上传的文件...">
							   		 <p class="help-block">图片jpg、jpeg、png格式，文件doc、pdf格式，大小不超过5.0M</p>  
							    </div>
							  </div>
					</div>
					<div class="modal-footer">
					    <button class="btn btn-default btns" type="button" data-dismiss="modal"  style="color: #333;background-color: #fff;border-color: #adadad;" type="button">
							&nbsp;关&nbsp;闭
						</button>
						<button   class="btn btn-default btns"  type="submit">
						    &nbsp;上&nbsp;传
						</button>
					</div>
				 </form>
		</div>
	</div>
</div>