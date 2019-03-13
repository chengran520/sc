<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<jsp:include page="/common/base/include_BaseCommon.jsp"></jsp:include>
<link href="<%=request.getContextPath() %>/common/css/commonView.css" rel="stylesheet">
<link rel="stylesheet" href="<%=request.getContextPath() %>/common/ueditor/themes/default/css/ueditor.css">
<script src="<%=request.getContextPath() %>/common/ueditor/ueditor.config.js"></script>  
<script src="<%=request.getContextPath() %>/common/ueditor/ueditor.all.js"></script> 
<script src="<%=request.getContextPath() %>/emergency/resourceShare/updateProject.js"></script> 
<style>
	body{
	    overflow: hidden;
	    }
	#insert1Project {
	    background-color: #009f95;
	    border: 0px;
	    color: #fff;
	    width: 74px;
	    height: 36px;
	    border-radius: 6px;
	    text-align: center;
	    position: fixed;
	    bottom: 10px;
	    left: 62%;
	    z-index: 99999;
    }
</style>
<script type="text/javascript">
 	var WEB_ROOT = "<%=request.getContextPath()%>";
    var ue = UE.getEditor('describe1');
    var id="<%=request.getParameter("uuid")%>"; 
 </script>
<div style="height: 40px;" id="headerDiv">
	<div class="header-content">
			<h2>
				<i class="fa icon-th-large"></i>
				<c><a style="text-decoration: none;" href="./resourceShare.jsp">资源共享</a>
				<span style="margin-left: 5px;margin-right: 5px;">></span>修改制度文件</c>
			</h2>
	</div>
</div>
<div style="margin-top:10px;overflow-x:hidden; overflow-y:auto;" class="content">
	<form class="form-horizontal" role="form" id="form_project1" style="width:96%;">
	       <input type="hidden"  value=""   name="uuid"  id="uuid">
	        <div class="form-group">
				<label class="col-sm-1 control-label"><span style="color: red;" id="stat_span">★</span>&nbsp;&nbsp;资源类型</label>
	             <div class="col-sm-2">
				   <select class="form-control" name="type" id="type1">
		           </select>	
				</div>
			</div>
			<div class="form-group">
				<label class="col-sm-1 control-label"><span style="color: red;" id="stat_span">★</span>&nbsp;&nbsp;资源名称</label>
				<div class="col-sm-4">
				  	<input class="form-control" name="projectName" id="projectName1" type="text"  placeholder="资源文案名称" maxlength="40">
				</div>
			</div>
			<div class="form-group">
				<label class="col-sm-1 control-label"><span style="color: red;" id="stat_span">★</span>&nbsp;&nbsp;时&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;间</label>
				<div>
				   <div class="col-sm-2">
		                <input class="form-control" name="startTime" id="startTime1" type="text"  placeholder="开始时间" >
		           </div>
				   <div class="col-sm-2">
		              <input class="form-control" name="endTime" id="endTime1" type="text"  placeholder="结束时间" >
		           </div>
		            <div class="col-sm-2">
		              <p class="label-control" id="time1"></p>
		           </div>
				</div>
			</div>
			<div class="form-group">
				<label class="col-sm-1 control-label"><span style="color: red;" id="stat_span">★</span>&nbsp;&nbsp;资源描述</label>
				<div class="col-sm-8">
			       <script id="describe1" name="describe" type="text/plain" style="border-width: 0 0 1px 0;"></script>
				</div>
			</div>
			<div class="form-group">
				<div class="col-sm-offset-2 col-sm-10">
					<button id="insert1Project"  type="button" class="btn btn-default btns">&nbsp;保&nbsp;存</button>
				</div>
			</div>
	  </form>
</div>