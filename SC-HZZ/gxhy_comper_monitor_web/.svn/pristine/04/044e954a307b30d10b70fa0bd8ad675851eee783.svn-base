<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@page import="org.apache.shiro.SecurityUtils"%>
<jsp:include page="/common/base/include_BaseCommon.jsp"></jsp:include>
<link href="<%=request.getContextPath() %>/common/css/commonView.css" rel="stylesheet">
<link href="<%=request.getContextPath() %>/emergency/jointConferences/jointConference.css" rel="stylesheet">
<link rel="stylesheet" href="<%=request.getContextPath()%>/css/public.css" > 
<link rel="stylesheet" href="<%=request.getContextPath()%>/straRiver/zhcl/stra.css" >
<link href="<%=request.getContextPath() %>/common/fileupdate/fileinput.css" rel="stylesheet">
<script src="<%=request.getContextPath()%>/common/fileupdate/fileinput.js"></script>
<script src="<%=request.getContextPath()%>/common/fileupdate/fileinput-zh.js"></script>
<script src="<%=request.getContextPath()%>/common/fileupdate/jquery.media.js"></script>
<script src="<%=request.getContextPath()%>/common/fileupdate/jquery.form.js"></script> 
<script src="<%=request.getContextPath()%>/straRiver/zhcl/staRiver.js"></script>
<script type="text/javascript">
	var username = '<%=SecurityUtils.getSubject().getSession().getAttribute("username")%>';
 	var WEB_ROOT = "<%=request.getContextPath() %>";
 	var returnId="<%=request.getParameter("returnId")%>"; 
</script>
<div style="height: 36px;" id="str_headerDiv">
	<div class="header-content" style="height: 36px;">
		<h2 class="paramTp1">
			<i class="fa icon-th-large"></i>
			<c><a style="text-decoration: none;color:#000;" href="<%=request.getContextPath()%>/emergency/jointConferences/jointConferenceInfo.jsp">一河一策</a></c>
		</h2>
		<h2 class="paramTp2">
			<i class="fa icon-th-large"></i>
			  <c>
				一河一策
			 </c>
		</h2>
	</div> 
</div>
<div class="container" style="width: 100%;">
	 	<div id="stadiv">
       </div>
      <div  id="div_users" style="float: left;width:90%;height: 100%;overflow-y:auto;overflow-x:hidden;border-left: 1px solid #eee;text-indent: 5px;">
       <div style="background-color: #FFFFFF;" id="user_div_manager">
       <form class="form-inline" method="post" id="form_data_info" >
       	  <div style="padding: 10px;border-bottom: 1px solid #dddddd;" id="dic">
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
				<button id="queryStra" class="btn btn-primary" style="background-color:#0ab1f8;border: 0px;margin:-4px 0 0 10px;" type="button" >
				  <span class="glyphicon glyphicon-search" ></span>&nbsp;查&nbsp;询
				</button>
				<button  id="insert_straFile" class="btn btn-primary" data-toggle="modal"  type="button" style="background-color: #43CD80;margin-top:-4px;border: 0px;" >
					<span class="glyphicon glyphicon-plus" ></span>&nbsp;新&nbsp;增&nbsp;
				</button>	
				<button  id="refreshStra"   class="btn btn-primary" type="button" style="background-color:#EE82EE;border: 0px;margin-top:-4px;">
					<span class="glyphicon glyphicon-refresh" ></span>&nbsp;刷&nbsp;新
				</button>		   
		  </div>
		 </form>
		 </div>
		 <div style="width: 100%;">
		  	<table id="strtable"  style="text-overflow:ellipsis;">
				<thead>
					<tr>
			            <th field="uuid"  width="1">主那家</th>
			            <th field="rvNm" width="50" align="center" align="center">河流名称</th>
			            <th field="straFileTitle" width="60" align="center" >文件名称</th>
			            <th field="creatTm" width="30" align="center" formatter="yhyc.formatTm">创建时间</th>
			            <!-- <th field="downloadNum" width="20" align="center" >下载量</th> -->
			            <th field="checkNum" width="20" align="center" >查看次数</th>
			            <th field="straFileContent" width="20" hidden="true" ></th>
			            <th field="operation" width="40"  align="center" formatter="yhyc.formatOperation">操作</th>
					</tr>
				</thead>
			</table>
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
				<h4 class="modal-title" id="myModalLabel">一河一策新增</h4>
			</div>
				<form  id="Form2" name="Form2"  method="post"  enctype="multipart/form-data">
					<input type="hidden" value="" id="type" name="type">
					<div class="modal-body" id="modal-content-file" style="height:400px;">
						  <div class="form-group">
					    	  <label for="straFileTitle" class="col-sm-2 control-label" style="margin: 9px 0 0 0;"><span style="color: red;">★</span>&nbsp;&nbsp文件名称</label>
					    	   <div class="col-sm-9">
					    	    	 	<input class="form-control" name="straFileTitle" id="straFileTitle" type="text"  placeholder="请输入文件名称"  maxlength="40">
					    	   </div>					         
					       </div>
					        <div class="form-group" style="margin-top:45px;margin-bottom:45px;">
							   <label for="firstname" class="col-sm-2 control-label"><span style="color: red;">★</span>&nbsp;&nbsp;河流名称</label>
							   <div class="col-sm-9">
							     <input type="hidden" name="rvCd" value="" id="rvCd">
							     <input list="riverInfoList" type="text" class="form-control" id="rvNm"  name="rvNm"  placeholder="请选择河流名称" >
							     <datalist id="riverInfoList">
								</datalist>
							   </div>
							 </div> 
	  						<div class="form-group">
							    <label for="firstname" class="col-sm-2 control-label" style="margin: 9px 0 0 0;"><span style="color: red;">★</span>&nbsp;&nbsp;预案文件</label>
							    <div class="col-sm-9" style="margin-top:15px;">
							    	 <input id="straFileContent" name="straFileContent" type="file" class="file" multiple data-show-upload="false" data-show-caption="true" data-msg-placeholder="请选择要上传的文件...">
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



