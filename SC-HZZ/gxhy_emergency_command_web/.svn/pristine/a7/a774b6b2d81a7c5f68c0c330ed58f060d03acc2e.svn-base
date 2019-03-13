<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@page import="org.apache.shiro.SecurityUtils"%>
<jsp:include page="/common/base/include_BaseCommon.jsp"></jsp:include>
<link href="<%=request.getContextPath() %>/common/css/commonView.css" rel="stylesheet">   
<link rel="stylesheet" href="<%=request.getContextPath()%>/css/bootstrapStyle.css" >
<link rel="stylesheet" href="<%=request.getContextPath()%>/css/public.css" >
<link rel="stylesheet" href="<%=request.getContextPath()%>/emergency/plan/css/plan.css" > 
<link rel="stylesheet" href="<%=request.getContextPath()%>/module/sysmanager/users/css/userInfo.css" >  
<link href="<%=request.getContextPath() %>/common/fileupdate/fileinput.css" rel="stylesheet">
<script src="<%=request.getContextPath()%>/common/fileupdate/fileinput.js"></script>
<script src="<%=request.getContextPath()%>/common/fileupdate/fileinput-zh.js"></script>
<script src="<%=request.getContextPath()%>/common/fileupdate/jquery.media.js"></script>
<script src="<%=request.getContextPath()%>/common/fileupdate/jquery.form.js"></script>
<script type="text/javascript" src="<%=request.getContextPath()%>/module/js/jquery.ztree.core.js"></script>
<script type="text/javascript" src="<%=request.getContextPath()%>/module/js/jquery.ztree.excheck.min.js"></script>  
<script type="text/javascript" src="<%=request.getContextPath()%>/emergency/plan/ztreePlan.js"></script>
<script type="text/javascript" src="<%=request.getContextPath()%>/emergency/plan/plan.js"></script>
<script type="text/javascript">
	var useradcd = '<%=SecurityUtils.getSubject().getSession().getAttribute("useradcd")%>';
 	var WEB_ROOT = "<%=request.getContextPath()%>";
</script>
<div class="headerDiv" id="plan_headerDiv">
	<div class="header-content">
		<h2>
			<i class="fa icon-th-large"></i>
			<c>应急预案</c>
			<span ></span>
		</h2>
	</div> 
</div>
<div class="container" style="width: 100%;overflow: hidden;" id="div">
	 	<div style="width: 15%;float: left;" id="div-left">
			<div class="left-div">
				<i class="fa fa-home left-div-i"></i>
				<span class="left-div-span">行政区域</span>			
			</div>
			<div >
		   		 <ul id="tree" class="ztree tree" style="margin-left:5px;border: 0px;overflow: auto;width: 97%;"></ul>   
			</div>
		</div>
       <div style="float: left;width:85%;border-left: 1px solid rgb(204, 204, 204);" id="div-right"> 
       	 <div id="formdiv">
		   <form class="form-inline" method="post">
				<div style="padding: 10px;border-bottom: 1px solid #dddddd;">
					<div class="col-xs-2.2" style="display: inline;">
						<div class="input-group">
						  <span class="input-group-addon" >河流:</span>
					      <input type="text" class="form-control" id="keyword"  placeholder="输入预案相关河流名称或编码" style="width: 210px;">
						</div>
					</div>
					<button id="queryPlan" class="btn btn-primary" style="background-color:#0ab1f8;border: 0px;" type="button" >
						<span class="glyphicon glyphicon-search" ></span>&nbsp;查&nbsp;询
					</button>
					<button  id="addPlan" class="btn btn-primary" type="button" style="background-color: #43CD80;border: 0px;" >
						<span class="glyphicon glyphicon-plus"></span>&nbsp;新&nbsp;建
					</button>
					<button  id="refreshPlan"   class="btn btn-primary" type="button" style="background-color:#EE82EE;border: 0px;">
						<span class="glyphicon glyphicon-refresh" ></span>&nbsp;刷&nbsp;新
					</button>	
					</div>
			 </form>
		 </div>  
		 <div id="plandiv"></div>
      </div>
</div>


<!-- 模态框（Modal） -->
<div class="modal fade" id="fileModel" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true" style="overflow-y: hidden;">
	<div class="modal-dialog">
		<div class="modal-content"  style="width:750px;height: auto;'">
			<div class="modal-header" style="padding:10px;background-color: #009f95;color: #fff;">
				<button type="button" class="close" data-dismiss="modal" aria-label="Close">
					<span aria-hidden="true" style="font-size: 32px;margin-right: 10px;">×</span>
				</button>
				<h4 class="modal-title" id="myModalLabel">河流应急预案</h4>
			</div>
				<form  id="Form2" name="Form2"  method="post"  enctype="multipart/form-data">							   
					<div class="modal-body" id="modal-content-file" style="height:300px;">
				         <div class="form-group">
					    	  <label for="firstname" class="col-sm-2 control-label" style="margin: 9px 0 0 0;"><span style="color: red;">★</span>&nbsp;&nbsp;选择河流</label>
					    	   <div class="col-sm-9">
					    	    	<select id="selectRiver" class="form-control"></select>
					    	   </div>					         
					     </div>
						  <div class="form-group" style="margin-top:45px;">
						    <label for="firstname" class="col-sm-2 control-label" style="margin: 9px 0 0 0;"><span style="color: red;">★</span>&nbsp;&nbsp;预案文件</label>
						    <div class="col-sm-9">
						    	 <input id="fileRvCd" type="hidden" name="fileRvCd">
						    	 <input id="input-b3" name="input-b3" type="file" class="file" multiple data-show-upload="false" data-show-caption="true" data-msg-placeholder="请选择要上传的文件...">
						   		 <p class="help-block">图片jpg、jpeg、png格式，文件doc、pdf格式，大小不超过5.0M</p>  
						    </div>
						  </div>
					</div>
					<div class="modal-footer">
					    <button class="btn btn-default btns" type="button" data-dismiss="modal"  style="color: #333;background-color: #fff;border-color: #adadad;">
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


<!--模态框关于响应措施 -->
<div class="modal fade" id="respondModel" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true" style="overflow: auto;">
	<div class="modal-dialog">
		<div class="modal-content" style="width:750px;heigth:auto;">
			<div class="modal-header" style="padding:10px;background-color: #009f95;color: #fff;">
				<button type="button" class="close" data-dismiss="modal" aria-label="Close">
					<span aria-hidden="true" style="font-size: 32px;margin-right: 10px;">×</span>
				</button>
				<h4 class="modal-title" id="myModalLabelyaxy">预案响应</h4>
			</div>
			<div class="modal-body">
				<form class="form-horizontal" role="form" id="form_data_user">
				   <input class="form-control" name="uuid" id="uuid" type="hidden">
				   <div class="form-group" style="margin-top: 14px;" id="userDiv">
					   <label class="col-sm-3 control-label">
					      <span style="color: red;" id="stat_span">★</span>&nbsp;&nbsp;预案名称
					   </label>
					   <div class="col-sm-7">
						  <input class="form-control"  name="name" id="name"  type="text" readonly="readonly">
					   </div>
				   </div>
				   <div class="form-group">
					  <label class="col-sm-3 control-label">
					  	<span style="color: red;">★</span>&nbsp;&nbsp;上报人
					  </label>
					  <div class="col-sm-7">
					     <input class="form-control" name="reportUser" id="reportUser" type="text" readonly="readonly">
					  </div>
			      </div>
			      <div class="form-group">
					 <label class="col-sm-3 control-label"><span style="color: red;">★</span>&nbsp;&nbsp;相关河流</label>
					 <div class="col-sm-7">
						<input class="form-control" name="rvNm" id="rvNm" type="text" readonly="readonly">
					 </div>
				 </div>
			      <div class="form-group" id="div-me">
					 <label class="col-sm-3 control-label">
					    <span style="color: red;">★</span>&nbsp;&nbsp;措施内容
					 </label>
					 <div class="col-sm-7">	
					 	<textarea rows="5" cols="55" id="stepContent"></textarea>	   
					 </div>
				 </div>
			   </form>
			</div>
			<div class="modal-footer" id="footer">
				<button class="btn btn-default btns" type="button" data-dismiss="modal"  style="color: #333;background-color: #fff;border-color: #adadad;">
					&nbsp;关&nbsp;闭
				</button>
				<button  class="btn btn-default btns" id="savePlanStep" type="button">
				    &nbsp;保&nbsp;存
				</button>		
			</div>
		</div>
	</div>
</div>