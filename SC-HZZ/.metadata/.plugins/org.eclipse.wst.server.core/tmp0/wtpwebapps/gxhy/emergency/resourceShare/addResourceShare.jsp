<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<jsp:include page="/common/base/include_BaseCommon.jsp"></jsp:include>
<jsp:include page="/common/base/include_Layui.jsp"></jsp:include>
<link href="<%=request.getContextPath() %>/common/css/commonView.css" rel="stylesheet">
<link rel="stylesheet" href="<%=request.getContextPath() %>/common/ueditor/themes/default/css/ueditor.css">
<style>
	body{
	    overflow: hidden;
	    }
	#saveResource {
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
<script src="<%=request.getContextPath() %>/common/ueditor/ueditor.config.js"></script>  
<script src="<%=request.getContextPath() %>/common/ueditor/ueditor.all.js"></script>  
<script src="<%=request.getContextPath() %>/emergency/resourceShare/addResourceShare.js"></script> 
<script type="text/javascript">
 	var WEB_ROOT = "<%=request.getContextPath()%>";
    var ue = UE.getEditor('container');
    ue.setHeight(300);
 </script>
<div style="height: 13%;" id="headerDiv">
	<div class="header-content">
			<h2>
				<i class="fa icon-th-large"></i>
				<c><a style="text-decoration: none;" href="resourceShare.jsp">资源共享</a>
				<span style="margin-left: 5px;margin-right: 5px;">></span>添加制度文件</c>
			</h2>
	</div>
</div>
<div style="margin-top:10px;overflow-x:hidden; overflow-y:auto;" class="content">
	<form class="form-horizontal" role="form" id="formResource">
			<input class="form-control" name="fileType" id="fileType" type="hidden" value="03">
	        <div class="form-group">
				<label class="col-sm-1 control-label"><span style="color: red;" id="stat_span">★</span>&nbsp;&nbsp;资源类型</label>
	             <div class="col-sm-2">
				   <select class="form-control" name="type" id="type">
		           </select>	
				</div>
			</div>
			<div class="form-group">
				<label class="col-sm-1 control-label"><span style="color: red;" id="stat_span" >★</span>&nbsp;&nbsp;资源名称</label>
				<div class="col-sm-4">
				  	<input class="form-control" name="projectName" id="projectName" type="text"  placeholder="资源名称"  maxlength="40">
				</div>
			</div>	
			<div class="form-group">
			    <label class="col-sm-1 control-label">&nbsp;&nbsp;是否永久</label>
				<div class="col-sm-4" id="forever">
				  <label>
		            <input checked="checked"  type="radio" name="isForever" value="0"  checked="checked">是&nbsp;&nbsp;
		          </label>
		          <label>
		            <input  type="radio" name="isForever" value="1" >否&nbsp;&nbsp;
		           </label>
				</div>
			</div>
			<div class="form-group" style="display: none;" id="dispdiv">
			    <label class="col-sm-1 control-label">&nbsp;&nbsp;时&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;间</label>
				<div>
				   <div class="col-sm-2">
		                <input class="form-control" name="startTime" id="startTime" type="text"  placeholder="开始时间" >
		           </div>
				   <div class="col-sm-2">
		              <input class="form-control" name="endTime" id="endTime" type="text"  placeholder="结束时间" >
		            </div>
				</div>
			</div>
			<div class="form-group">
                <label class="col-sm-1 control-label"><span style="color: red;" id="stat_span">★</span>&nbsp;&nbsp;共享内容</label>
				<div class="col-sm-8">
			       <script id="container" name="fileContent" type="text/plain" style="border-width: 0 0 1px 0;"></script>
				</div>
			</div>
			<div class="form-group">
				<div class="col-sm-offset-2 col-sm-10">
					<button id="saveResource"   type="button" class="btn btn-default btns">&nbsp;保&nbsp;存</button>
				</div>
			</div>
	  </form>
</div>