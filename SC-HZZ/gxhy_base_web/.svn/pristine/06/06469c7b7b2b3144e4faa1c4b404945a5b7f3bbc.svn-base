<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<jsp:include page="/common/base/include_BaseCommon.jsp"></jsp:include>
<link href="<%=request.getContextPath() %>/common/css/commonView.css" rel="stylesheet">
<link href="<%=request.getContextPath() %>/css/public.css" rel="stylesheet">
<script src="<%=request.getContextPath()%>/module/sysmanager/dept/deptInfo.js"></script>
<script type="text/javascript">
 	var WEB_ROOT = "<%=request.getContextPath() %>";
</script>
<div class="headerDiv" id="headerDeptdiv">
	<div class="header-content">
		<h2>
			<i class="fa icon-th-large"></i>
			<c>部门管理</c>
			<span ></span>
		</h2>
	</div> 
	<div style="background-color: #FFFFFF;"class="" id="user_div_manager">
		<div class="form-inline"   style="padding: 10px;border-bottom: 1px solid #dddddd;">
			<div class="col-xs-2.2" style="display: inline;">
				<div class="input-group">
				  <span class="input-group-addon" >部门信息:</span>
				  <input type="text" class="form-control" id="keywordDept"  placeholder="请输入编码或名称">
				</div>
			</div>
			<button id="queryDept" class="btn btn-primary" style="background-color:#0ab1f8;border: 0px;" type="button" >
				<span class="glyphicon glyphicon-search " ></span>&nbsp;查&nbsp;询
			</button>
			<button  id="saveDept" class="btn btn-primary" data-toggle="modal"  type="button" style="background-color:#43cd80;border: 0px;" >
				<span class="glyphicon glyphicon-plus " ></span>&nbsp;添&nbsp;加
			</button>
			<button  id="refreshDept"   class="btn btn-primary" type="button" style="background-color:#EE82EE;border: 0px;">
				<span class="glyphicon glyphicon-refresh" ></span>&nbsp;刷&nbsp;新
			</button>
		</div>
	</div>
</div>
<table id="patrol_catalogDept"  style="text-overflow:ellipsis;">
	<thead>
		<tr>
            <th field="uuid"     hidden="true" width="1">部门</th>
            <th field="deptId"   width="30"    align="center" >部门编码</th>
            <th field="deptNm"   width="30"    align="center" >部门名称</th>
            <th field="orderNum" width="20"    align="center" >排序</th>
            <th field="creatTm"  width="20"    align="center"  formatter="dept.formatterDeptTm">创建时间</th>
            <th field="deptStatus" width="20"    align="center"  formatter="dept.formatDeptRepeat">操作</th>
		</tr>
	</thead>
</table>
<!-- 角色增加 -->
<div class="modal fade" id="modalDept" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" style="overflow-y: hidden;">
	<div class="modal-dialog" role="document">
		<div class="modal-content" style="width:600px;height:330px;overflow-y: auto;overflow-x: hidden;">
			<div class="modal-header" style="padding:10px;background-color: #009f95;color: #fff;">
				<button type="button" class="close" data-dismiss="modal" aria-label="Close">
					<span aria-hidden="true" style="font-size: 32px;margin-right: 10px;">×</span>
				</button>
				<h4 class="modal-title" id="myModalLabel">部门信息</h4>
			</div>
		<form class="form-horizontal" role="form" id="form_data_Dept">
		<input class="form-control" name="uuid" id="uuid" type="hidden" value="">
		   <div class="form-group" style="margin-top: 14px;">
			   <label class="col-sm-3 control-label"><span style="color: red;">★</span>&nbsp;&nbsp;部门编码</label>
			   <div class="col-sm-7">
				  <input class="form-control" name="deptId"  id="deptId" type="text" placeholder="请输入部门编码" maxlength="7">
			  </div>
		  </div>	
		  <div class="form-group">
			  <label class="col-sm-3 control-label"><span style="color: red;">★</span>&nbsp;&nbsp;部门名称</label>
			 <div class="col-sm-7">
			     <input class="form-control" name="deptNm" id="deptNm"  type="text" placeholder="请输入部门名称" maxlength="10">
			</div>
	      </div>
	     <div class="form-group">
			  <label class="col-sm-3 control-label"><span></span>&nbsp;&nbsp;上级部门</label>
			  <div class="col-sm-7">
			      <select class="form-control" id="pdeptId">
			      </select>
			</div>
	      </div>
	      <div class="form-group">
			  <label class="col-sm-3 control-label">排序</label>
			 <div class="col-sm-7">
			     <input class="form-control" name="orderNum" id="orderNum"  type="text" placeholder="请输入排序号，如：1，2，3">
			</div>
	      </div>
  			<div class="modal-footer">
  			    <button class="btn btn-default btns" type="button" data-dismiss="modal"  style="color: #333;background-color: #fff;border-color: #adadad;">
					&nbsp;关&nbsp;闭
				</button>
				<button class="btn btn-default btns" type="button" id="insertDept">
					&nbsp;确&nbsp;定
				</button>
				<button class="btn btn-default btns" type="button" id="updateDept" style="display:none;">
					&nbsp;修&nbsp;改
				</button>
				
			</div>
	</form>
		</div>
	</div>
</div>