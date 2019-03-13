<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<jsp:include page="/common/base/include_BaseCommon.jsp"></jsp:include>
<link href="<%=request.getContextPath() %>/common/css/commonView.css" rel="stylesheet">
<link rel="stylesheet" href="<%=request.getContextPath()%>/css/public.css" >   
<script src="<%=request.getContextPath()%>/module/sysmanager/users/usersVerify.js"></script>
<script type="text/javascript">
 	var WEB_ROOT = "<%=request.getContextPath() %>";
</script>
<div class="headerDiv" id="headerVerifydiv">
	<div class="header-content">
		<h2>
			<i class="fa icon-th-large"></i>
			<c>用户审核</c>
			<span ></span>
		</h2>
	</div> 
</div>
<table id="patrol_catalogVerif"  style="text-overflow:ellipsis;">
	<thead>
		<tr>
            <th field="uuid"        hidden="true" width="1">用户</th>
            <th field="userId"      width="10"    align="center" >用户编码</th>
            <th field="userName"    width="10"    align="center" halign="center">用户姓名</th>
            <th field="userPhone"   width="10"    align="center" >手机号</th>
            <th field="regTp"  width="10"    align="center" >注册类型</th>
            <th field="createTime"  width="10"    align="center" formatter="usersVerify.formatterDataTm">注册时间</th>
            <th field="isCheck"     width="10"    align="center" formatter="usersVerify.formatterIscheck">是否锁定</th>
            <th field="11" width="10"    align="center" formatter="usersVerify.formatterCheck">操作</th>
		</tr>
	</thead>
</table>

<div class="modal fade" id="ModalVerify" tabindex="-1" role="dialog" aria-labelledby="myModalLabel"  style="overflow: hidden;">
	<div class="modal-dialog" role="document">
		<div class="modal-content" style="width:700px;overflow-y: auto;overflow-x: hidden;">
			<div class="modal-header" style="padding:10px;background-color: #009f95;color: #fff;">
				<button type="button" class="close" data-dismiss="modal" aria-label="Close">
					<span aria-hidden="true" style="font-size: 32px;margin-right: 10px;">×</span>
				</button>
				<h4 class="modal-title" id="myModalLabel">用户注册审核</h4>
			</div>
		<form class="form-horizontal" role="form" id="form_data_user">
		<input class="form-control" name="uuid" id="uuid" type="hidden">
		   <div class="form-group" style="margin-top: 14px;">
			   <label class="col-sm-3 control-label">&nbsp;&nbsp;用户编码</label>
			   <div class="col-sm-7">
				  <input class="form-control" name="userId" id="userId" type="text" readonly="readonly">
			  </div>
		  </div>	
		  <div class="form-group">
			  <label class="col-sm-3 control-label">&nbsp;&nbsp;用户名称</label>
			 <div class="col-sm-7">
			     <input class="form-control" name="userName" id="userName" type="text"  readonly="readonly">
			</div>
	      </div>
		  <div class="form-group">
			  <label class="col-sm-3 control-label">&nbsp;&nbsp;注册类型</label>
			 <div class="col-sm-7">
			     <input class="form-control" name="regTp" id="regTp" type="text"  readonly="readonly">
			</div>
	      </div>
		  <div class="form-group">
			  <label class="col-sm-3 control-label">&nbsp;&nbsp;注册时间</label>
			 <div class="col-sm-7">
			     <input class="form-control" name="crtTm" id="crtTm" type="text"  readonly="readonly">
			</div>
	      </div>
	      <div class="form-group">
			 <label class="col-sm-3 control-label">&nbsp;&nbsp;手机号</label>
			 <div class="col-sm-7">
				<input class="form-control" name="userPhone" id="userPhone" type="text"   readonly="readonly">
			 </div>
		 </div>
		   <div class="modal-footer" id="foot">
				<button  class="btn btn-default btns" id="checkBtn" type="button">
				    &nbsp;通&nbsp;过
				</button>
				<button class="btn btn-default btns" type="button" data-dismiss="modal">
					&nbsp;拒&nbsp;绝
				</button>
			</div>
	</form>
		</div>
	</div>
</div>
