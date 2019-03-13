<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<jsp:include page="/common/base/include_BaseCommon.jsp"></jsp:include>
<link rel="stylesheet" href="<%=request.getContextPath()%>/css/public.css" >  
<link rel="stylesheet" href="css/riverway.css" >  
<link href="<%=request.getContextPath() %>/common/css/commonView.css" rel="stylesheet">
<link href="<%=request.getContextPath() %>/common/fileupdate/fileinput.css" rel="stylesheet">
<script src="<%=request.getContextPath()%>/common/fileupdate/fileinput.js"></script>
<script src="<%=request.getContextPath()%>/common/fileupdate/fileinput-zh.js"></script>
<script src="<%=request.getContextPath()%>/common/fileupdate/jquery.media.js"></script>
<script src="<%=request.getContextPath()%>/common/fileupdate/jquery.form.js"></script>
<script src="<%=request.getContextPath()%>/data_center/water/riverway/riverway.js"></script>
<script type="text/javascript">
 	var WEB_ROOT = "<%=request.getContextPath() %>";
</script>
<div class="headerDiv" id="headerwaydiv">
	<div class="header-content">
		<h2>
			<i class="fa icon-th-large"></i>
			<c>河流基础信息</c>
			<span ></span>
		</h2>
	</div> 
	<div style="background-color: #FFFFFF;"class="" id="user_div_manager">
		<form class="form-inline" method="get" id="form_river" >
			<div style="padding: 10px;border-bottom: 1px solid #dddddd;">
				<div class="col-xs-2.2" style="display: inline;">
					<div class="input-group">
					  <span class="input-group-addon" >河流信息:</span>
					  <input type="text" class="form-control" id="queryKey"  placeholder="请输入河流编码、名称">
					</div>
				</div>
				<button id="Query" class="btn btn-primary" style="background-color: #0ab1f8;border: 0px;" type="button" >
					<span class="glyphicon glyphicon-search " ></span>&nbsp;查&nbsp;询
				</button>
<!-- 				<button id="addFill" class="btn btn-primary" type="button" style="background-color:#43CD80;border: 0px;">
					<span class="glyphicon glyphicon-plus " ></span>&nbsp;添&nbsp;加
				</button>	 -->
				<button  id="exportRiver"   class="btn btn-primary" type="button" style="background-color:#FABC29;border: 0px;">
						<span class="glyphicon glyphicon-download-alt" ></span>&nbsp;导&nbsp;出
					</button>
				<button  id="refreshBasicInfo"   class="btn btn-primary" type="button" style="background-color:#EE82EE;border: 0px;">
					<span class="glyphicon glyphicon-refresh" ></span>&nbsp;刷&nbsp;新
				</button>
			</div>
		</form>
	</div>
</div>
<table id="wayTab"  style="text-overflow:ellipsis;">
	<thead>
		<tr>
             <th field="rvCd" width="10" align="center">河流编码</th>
             <th field="rvNm" width="10" align="center" >河流名称</th>
             <th field="bsnm"  width="10" align="center" >所属流域</th>
             <th field="rvlt"  width="10" align="center">河流长度(km)</th>
             <th field="draArea"  width="10" align="center">流域面积(km2)</th>
             <th field="rvOn" width="20" align="left"  halign="center">河源</th>
             <th field="rvOnLgtd" width="10" align="center">河源经度</th>
             <th field="rvOnLttd" width="10" align="center">河源纬度</th>
             <th field="rvMh" width="20" align="left"  halign="center">河口</th>
             <th field="rvMhLgtd" width="10" align="center">河口经度</th>
             <th field="rvMhLttd" width="10" align="center">河口纬度</th>
             <th field="prewAddes" width="8" align="center"  formatter="wayTab.formatterYJYA">应急预案</th> 
             <th field="addvnm" width="8" align="center">行政区划</th>
             <th field="tp" width="20" align="center" formatter="wayTab.formatterCz">操作</th>
		</tr>
	</thead>
</table>


<!-- 模态框（Modal） -->
<div class="modal fade" id="riverwayModel" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true" style="overflow: auto;">
	<div class="modal-dialog">
		<div class="modal-content" style="width:750px;height: auto;">
			<div class="modal-header" style="padding:10px;background-color: #009f95;color: #fff;">
				<button type="button" class="close" data-dismiss="modal" aria-label="Close">
					<span aria-hidden="true" style="font-size: 32px;margin-right: 10px;">×</span>
				</button>
				<h4 class="modal-title" id="myModalLabel">河库基础信息</h4>
			</div>
			<div class="modal-body" id="modal-body">
				<form class="form-horizontal" role="form"  id="form_data_riverway">
				  <div class="form-group">
				    <label for="firstname" class="col-sm-3 control-label"><span style="color: red;">★</span>&nbsp;&nbsp;河流编码</label>
				    <div class="col-sm-8">
				      <input type="text" class="form-control" name="rvCd" id="rvCd" placeholder="请输入河流编码，保存后不允许修改">
				    </div>
				  </div>
				  <div class="form-group">
				    <label for="lastname" class="col-sm-3 control-label"><span style="color: red;">★</span>&nbsp;&nbsp;河流名称</label>
				    <div class="col-sm-8">
				      <input type="text" class="form-control" name="rvNm" id="rvNm" placeholder="请输入河流名称">
				    </div>
				  </div>
				  <div class="form-group">
				    <label for="lastname" class="col-sm-3 control-label">所属水系</label>
				    <div class="col-sm-8">
				      <input type="text" class="form-control" name="hnnm" id="hnnm" placeholder="请输入所属水系">
				    </div>
				  </div>
				  <div class="form-group">
				    <label for="lastname" class="col-sm-3 control-label">所属流域</label>
				    <div class="col-sm-8">
				      <input type="text" class="form-control" name="bsnm" id="bsnm" placeholder="请输入所属流域">
				    </div>
				  </div>
				  <div class="form-group">
				    <label for="lastname" class="col-sm-3 control-label">河流岸别</label>
				    <div class="col-sm-8">
				      <input type="text" class="form-control" name="stbk" id="stbk" placeholder="请输入河流岸别">
				    </div>
				  </div>
				  <div class="form-group">
				    <label for="lastname" class="col-sm-3 control-label">河流长度</label>
				    <div class="col-sm-8">
				      <input type="text" class="form-control" name="rvlt" id="rvlt" placeholder="请输入河流长度">
				    </div>
				  </div>
				  <div class="form-group">
				    <label for="lastname" class="col-sm-3 control-label">河流面积</label>
				    <div class="col-sm-8">
				      <input type="text" class="form-control"  name="draArea" id="draArea" placeholder="请输入姓河流面积">
				    </div>
				  </div>
				  <div class="form-group">
				    <label for="lastname" class="col-sm-3 control-label"><span style="color: red;">★</span>&nbsp;&nbsp;上级河流编码</label>
				    <div class="col-sm-8">
				      <input type="text" class="form-control" name="prvCd" id="prvCd" placeholder="请输入上级河流编码">
				    </div>
				  </div>
				  <div class="form-group">
				    <label for="lastname" class="col-sm-3 control-label"><span style="color: red;">★</span>&nbsp;&nbsp;上级河流名称</label>
				    <div class="col-sm-8">
				      <input type="text" class="form-control" name="prvNm" id="prvNm" placeholder="请输入上级河流名称">
				    </div>
				  </div>
				  <div class="form-group">
				    <label for="lastname" class="col-sm-3 control-label"><span style="color: red;">★</span>&nbsp;&nbsp;河源</label>
				    <div class="col-sm-8">
				      <input type="text" class="form-control" name="rvOn" id="rvOn" placeholder="请输入河源">
				    </div>
				  </div>
				  <div class="form-group">
				    <label for="lastname" class="col-sm-3 control-label"><span style="color: red;">★</span>&nbsp;&nbsp;河源经度</label>
				    <div class="col-sm-8">
				      <input type="text" class="form-control" name="rvOnLgtd" id="rvOnLgtd" placeholder="请输入河源经度,格式：116.526726" maxlength="10"  onblur="check(this)"  onkeyup="this.value=this.value.replace(/[^0-9.]/g,'')">
				    </div>
				  </div>
				  <div class="form-group">
				    <label for="lastname" class="col-sm-3 control-label"><span style="color: red;">★</span>&nbsp;&nbsp;河源纬度</label>
				    <div class="col-sm-8">
				      <input type="text" class="form-control" name="rvOnLttd" id="rvOnLttd" placeholder="请输入河源纬度,格式：40.007181" maxlength="10"  onblur="check(this)"  onkeyup="this.value=this.value.replace(/[^0-9.]/g,'')">
				    </div>
				  </div>
				  <div class="form-group">
				    <label for="lastname" class="col-sm-3 control-label"><span style="color: red;">★</span>&nbsp;&nbsp;河口</label>
				    <div class="col-sm-8">
				      <input type="text" class="form-control" name="rvMh"  id="rvMh" placeholder="请输入河口">
				    </div>
				  </div>
				  <div class="form-group">
				    <label for="lastname" class="col-sm-3 control-label"><span style="color: red;">★</span>&nbsp;&nbsp;河口经度</label>
				    <div class="col-sm-8">
				      <input type="text" class="form-control" name="rvMhLgtd" id="rvMhLgtd" placeholder="请输入河口经度,格式：116.526726" maxlength="10"  onblur="check(this)"  onkeyup="this.value=this.value.replace(/[^0-9.]/g,'')">
				    </div>
				  </div>
				  <div class="form-group">
				    <label for="lastname" class="col-sm-3 control-label"><span style="color: red;">★</span>&nbsp;&nbsp;河口纬度</label>
				    <div class="col-sm-8">
				      <input type="text" class="form-control" name="rvMhLttd" id="rvMhLttd" placeholder="请输入河口纬度,格式：40.007181"  maxlength="10"  onblur="check(this)"  onkeyup="this.value=this.value.replace(/[^0-9.]/g,'')">
				    </div>
				  </div>
				  </form>
			</div>
			<div class="modal-footer">
			    <button class="btn btn-default btns" type="button" data-dismiss="modal"  style="color: #333;background-color: #fff;border-color: #adadad;">
					&nbsp;关&nbsp;闭
				</button>
				<button   class="btn btn-default btns" id="saveRiverWay" type="button">
				    &nbsp;保&nbsp;存
				</button>
				<button   class="btn btn-default btns" id="updateRiverWay" style="display: none" type="button">
				    &nbsp;修&nbsp;改
				</button>
				
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
				<h4 class="modal-title" id="myModalLabel">河流应急预案</h4>
			</div>
				<form  id="Form2" name="Form2"  method="post"  enctype="multipart/form-data">
					<div class="modal-body" id="modal-content-file">
							  <div class="form-group">
							    <label for="firstname" class="col-sm-2 control-label" style="margin: 9px 0 0 0;"><span style="color: red;">★</span>&nbsp;&nbsp;预案文件</label>
							    <div class="col-sm-9">
							    	 <input id="fileRvCd" type="hidden" name="fileRvCd">
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
