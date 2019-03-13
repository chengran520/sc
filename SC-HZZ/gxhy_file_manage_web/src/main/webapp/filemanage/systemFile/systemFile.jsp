<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<jsp:include page="/common/base/include_BaseCommon.jsp"></jsp:include>
<link href="<%=request.getContextPath() %>/common/css/commonView.css" rel="stylesheet">
<link href="<%=request.getContextPath() %>/css/public.css" rel="stylesheet">
<link href="<%=request.getContextPath() %>/work_bench/css/workBench.css" rel="stylesheet">
<link href="<%=request.getContextPath() %>/filemanage/systemFile/css/systemIndex.css" rel="stylesheet">
<link href="<%=request.getContextPath() %>/common/fileupdate/fileinput.css" rel="stylesheet">
<script src="<%=request.getContextPath()%>/common/fileupdate/fileinput.js"></script>
<script src="<%=request.getContextPath()%>/common/fileupdate/fileinput-zh.js"></script>
<script src="<%=request.getContextPath()%>/common/fileupdate/jquery.media.js"></script>
<script src="<%=request.getContextPath()%>/common/fileupdate/jquery.form.js"></script> 
<script src="<%=request.getContextPath() %>/filemanage/systemFile/systemFile.js"></script>
<script type="text/javascript">
 	var WEB_ROOT = "<%=request.getContextPath() %>";
 	var paramTp = "<%=request.getParameter("tp")%>";
</script>
<div class="headerDiv" id="headerDiv" style="height: 36px;">
	<div class="header-content" style="height: 36px;">
		<h2 class="paramTp1">
			<i class="fa icon-th-large"></i>
			<c><a style="text-decoration: none;color:#000;" href="<%=request.getContextPath()%>/filemanage/systemFile/systemFile.jsp">制度文案</a></c>
		</h2>
		<h2 class="paramTp2">
			<i class="fa icon-th-large"></i>
			  <c>
				<a style="text-decoration: none;color: #337ab7;" href="javascript:history.back(-1)">工作台</a>
				<span style="margin-left: 5px;margin-right: 5px;">></span>
					制度文案
			 </c>
		</h2>
	</div> 
</div>
<div style="background-color: #FFFFFF;height: 50px;"class="" id="divfon">
		<form class="form-inline" method="post">
			<div style="padding: 10px;border-bottom: 1px solid #dddddd;padding-left: 15px;">
				<button  id="add_system" class="btn btn-primary" type="button" style="background-color: #43CD80;border: 0px;magin-left:3px;" >
					<span class="glyphicon glyphicon-plus"></span>&nbsp;发&nbsp;布
				</button>
				</div>
			</form>
		</div>
<div class="tab_div" style="width:100%;">
	<div class="one_div">		
		<div class="tb_div" style="width:60%;">
			<p class="chart_p"><i class="fa fa-file-text" aria-hidden="true" style="padding-right: 8px;"></i><span>巡河制度</span></p>
			<span class="work-moer" onclick="system.allFiles();" style="margin-top:-11px;font-size: 15px;">更多</span>
			<div class="div_ul div_dc" style="margin-top:6px;">
				<ul class="one_ul" id="xhzd" >
				</ul>
			</div>
		</div>
		<div class='tb_div' style="width:37%;">
			<p class="chart_p"><i class="fa fa-credit-card" aria-hidden="true" style="padding-right: 8px;"></i><span>考核制度</span>
			<span class="work-moer" onclick="system.allFiles();" style="margin-top: 8px;font-size: 15px;
			">更多</span></p>
			<div class="div_ul div_dc">
				<ul class="one_ul" id="khzd">
				</ul>
			</div>
		</div>
	</div>
	<div class="one_div">
		<div class="tb_div">
			<p class="tab_caption tb-sx"><i class="fa fa-clock-o" style="padding-right: 8px;"></i><span>执法制度</span>
			<span class="work-moer" onclick="system.allFiles();" style="margin-top: 6px;font-size:15px;">更多</span></p>
			<div class="div_ul">
				<ul class="one_ul" id="zfzd"></ul>
			</div>
		</div>
		<div class="tb_div">
			<p class="tab_caption tb-dc"><i class="fa fa-check-square-o" style="padding-right: 8px;"></i><span>管理制度</span>
			<span class="work-moer" onclick="system.allFiles();" style="margin-top: 6px;font-size:15px;">更多</span></p>
			<div class="div_ul div_dc">
				<ul class="one_ul" id="glzd"></ul>
			</div>
		</div>
		<div class="tb_div">
			<p class="tab_caption tb-hy"><i class="fa fa-file-archive-o" aria-hidden="true" style="padding-right: 8px;"></i><span>工作制度</span>
			<span class="work-moer" onclick="system.allFiles();" style="margin-top: 6px;font-size:15px;">更多</span></p>
			<div class="div_ul div_dc" >
				<ul class="one_ul" id="gzzd">
				</ul>
			</div>
		</div>
	</div>
</div>

<!-- 模态框（Modal） -->
<div class="modal fade" id="addFileModel" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true" style="overflow: auto;">
	<div class="modal-dialog">
		<div class="modal-content"  style="width:750px;height: auto;">
			<div class="modal-header" style="padding:10px;background-color: #009f95;color: #fff;">
				<button type="button" class="close" data-dismiss="modal" aria-label="Close">
					<span aria-hidden="true" style="font-size: 32px;margin-right: 10px;">×</span>
				</button>
				<h4 class="modal-title" id="myModalLabel">发布</h4>
			</div>
				<form  id="Form2" name="Form2"  method="post"  enctype="multipart/form-data">
					<input type="hidden" value="" id="type" name="type">
					<div class="modal-body" id="modal-content-file" style="height:400px;">
						  <div class="form-group">
					    	   <label class="col-sm-2 control-label"  style="margin-top: 15px;"><span style="color: red;" id="stat_span">★</span>&nbsp;&nbsp;文件类型</label>
								<div class="col-sm-9">
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
					        <div class="form-group" >
							    <label class="col-sm-2 control-label"  style="margin-top: 20px;">&nbsp;&nbsp;&nbsp;&nbsp;重要程度</label>
								<div class="col-sm-9" style="margin-top:10px;">
								   <select class="form-control" name="fileGradeType" id="fileGradeType">
								      <option  disabled="disabled" selected="selected">请选择</option>
						      	      <option value="0">普通</option>
						      	      <option value="1">重要</option>
						           </select>
						         </div>  
							 </div> 
	  						<div class="form-group">
							    <label class="col-sm-2 control-label"  style="margin-top: 20px;">&nbsp;&nbsp;&nbsp;&nbsp;是否公开</label>
								<div class="col-sm-9"  style="margin-top:10px;">
									<label class="checkbox-inline">
									      <input type="radio" name="fileOpen" value="1" checked > 是
									</label>
									<label class="checkbox-inline">
									      <input type="radio" name="fileOpen" value="2"> 否
									</label>
								</div>
							 </div>
							<div class="form-group" >
								<label class="col-sm-2 control-label"  style="margin-top:20px;"><span style="color: red;" id="stat_span">★</span>&nbsp;&nbsp;文件标题</label>
								<div class="col-sm-9" style="margin-top:10px;">
									<input class="form-control" name="fileTitle" id="fileTitle" type="text"  placeholder="文件标题....." maxlength="40">
								</div>
							</div>	
							<div class="form-group" >
							    <label for="firstname" class="col-sm-2 control-label" style="margin: 9px 0 0 0;"><span style="color: red;">★</span>&nbsp;&nbsp;预案文件</label>
							    <div class="col-sm-9" style="margin-top:10px;">
							    	 <input id="fileContent" name="straFileContent" type="file" class="file" multiple data-show-upload="false" data-show-caption="true" data-msg-placeholder="请选择要上传的文件...">
							   		 <p class="help-block" style="margin-top:10px;">图片jpg、jpeg、png格式，文件doc、pdf格式，大小不超过5.0M</p>  
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

<script type="text/javascript">
if(parseInt(paramTp)){
	$(".paramTp1").hide();
	$(".paramTp2").show();
}
</script>
