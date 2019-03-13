<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<jsp:include page="/common/base/include_BaseCommon.jsp"></jsp:include>
<link href="<%=request.getContextPath() %>/common/css/commonView.css" rel="stylesheet">
<link href="<%=request.getContextPath() %>/filemanage/systemFile/css/system.css" rel="stylesheet">
<link rel="stylesheet" href="<%=request.getContextPath() %>/common/ueditor/themes/default/css/ueditor.css">
<script src="<%=request.getContextPath() %>/common/ueditor/ueditor.config.js"></script>  
<script src="<%=request.getContextPath() %>/common/ueditor/ueditor.all.js"></script> 
<script src="<%=request.getContextPath() %>/filemanage/systemFile/addSystem.js"></script> 
<script type="text/javascript">
 	var WEB_ROOT = "<%=request.getContextPath()%>";
    var ue = UE.getEditor('container');
 </script>
<div style="height: 13%;" id="headerDiv">
	<div class="header-content">
			<h2>
				<i class="fa icon-th-large"></i>
				<c><a style="text-decoration: none;" href="systemFile.jsp">制度文件</a>
				<span style="margin-left: 5px;margin-right: 5px;">></span>发布制度文件</c>
			</h2>
	</div>
</div>
<div style="margin-top:10px;overflow-x:hidden; overflow-y:auto;" class="content">
	<form class="form-horizontal" role="form" id="form_file">
			<div class="form-group">
				<label class="col-sm-1 control-label"><span style="color: red;" id="stat_span">★</span>&nbsp;&nbsp;文件类型</label>
				<div class="col-sm-2">
				   <select class="form-control" name="fileType" id="fileType">
				      <option  disabled="disabled" selected="selected">请选择</option>
		      	      <option value="1">考核制度</option>
	      	          <option value="2">巡检制度</option>
	      	          <option value="3">保洁制度</option>
	      	          <option value="4">管理制度</option>
	      	          <option value="5">工作制度</option>
		           </select>
				</div>
			</div>
			<div class="form-group">
				<label class="col-sm-1 control-label">等级</label>
				<div class="col-sm-2">
				   <select class="form-control" name="fileGradeType" id="fileGradeType">
				      <option  disabled="disabled" selected="selected">请选择</option>
		      	      <option value="0">普通</option>
		      	      <option value="1">重要</option>
		           </select>
		        </div>  
		        <!-- <div  id="star"  class="col-sm-5" style="display:none;margin-top: 13px;">
				               重要程度：
					  <a  style="color:#999999;"><span  class="glyphicon glyphicon-star-empty" aria-hidden="true" style="font-size:18px;"></span></a>
					  <a  style="color:#999999;"><span  class="glyphicon glyphicon-star-empty" aria-hidden="true" style="font-size:18px;"></span></a>
					  <a  style="color:#999999;"><span  class="glyphicon glyphicon-star-empty" aria-hidden="true" style="font-size:18px;"></span></a>
					  <a  style="color:#999999;"><span  class="glyphicon glyphicon-star-empty" aria-hidden="true" style="font-size:18px;"></span></a>
					  <a  style="color:#999999;"><span  class="glyphicon glyphicon-star-empty" aria-hidden="true" style="font-size:18px;"></span></a>
		        </div>  -->
			</div>
			<div class="form-group">
				<label class="col-sm-1 control-label">是否公开</label>
				<div class="col-sm-2">
					<label class="checkbox-inline">
					      <input type="radio" name="fileOpen" value="1" checked > 是
					</label>
					<label class="checkbox-inline">
					      <input type="radio" name="fileOpen" value="2"> 否
					</label>
				</div>
			</div>
			<div class="form-group">
				<label class="col-sm-1 control-label"><span style="color: red;" id="stat_span">★</span>&nbsp;&nbsp;文件标题</label>
				<div class="col-sm-6">
					<input class="form-control" name="fileTitle" id="fileTitle" type="text"  placeholder="文件标题....." maxlength="40">
				</div>
			</div>	
			<div class="form-group">
                <label class="col-sm-1 control-label"><span style="color: red;" id="stat_span">★</span>&nbsp;&nbsp;文件内容</label>
				<div class="col-sm-8">
			         <script id="container" name="content" type="text/plain" style="border-width: 0 0 1px 0;"></script>
				</div>
			</div>
			<div class="form-group">
				<div class="col-sm-offset-2 col-sm-10">
					<button id="saveFile"  type="button" class="btn btn-default btns btnEdit">&nbsp;保&nbsp;存</button>
				</div>
			</div>
	  </form>
 
</div>