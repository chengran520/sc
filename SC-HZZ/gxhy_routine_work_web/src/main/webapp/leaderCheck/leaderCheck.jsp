<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@page import="org.apache.shiro.SecurityUtils"%>
<jsp:include page="/common/base/include_BaseCommon.jsp"></jsp:include>
<link href="<%=request.getContextPath() %>/common/css/commonView.css" rel="stylesheet">   
<link rel="stylesheet" href="<%=request.getContextPath()%>/css/bootstrapStyle.css" >
<link rel="stylesheet" href="<%=request.getContextPath()%>/css/public.css" >
<link rel="stylesheet" href="<%=request.getContextPath()%>/module/sysmanager/users/css/userInfo.css" >  
<script type="text/javascript" src="<%=request.getContextPath()%>/module/js/jquery.ztree.core.js"></script>
<script type="text/javascript" src="<%=request.getContextPath()%>/module/js/jquery.ztree.excheck.min.js"></script>  
<script type="text/javascript" src="<%=request.getContextPath()%>/module/sysmanager/users/adcd_user.js"></script>
<script type="text/javascript" src="<%=request.getContextPath()%>/leaderCheck/leaderCheck.js"></script>
<script type="text/javascript">
	var useradcd = '<%=SecurityUtils.getSubject().getSession().getAttribute("useradcd")%>';
 	var WEB_ROOT = "<%=request.getContextPath()%>";
</script>
<div class="headerDiv" id="check_headerDiv">
	<div class="header-content">
		<h2>
			<i class="fa icon-th-large"></i>
			<c>绩效考核</c>
			<span ></span>
		</h2>
	</div> 
</div>
<div id="div_user"  style="overflow: hidden;">
	<div style="width: 15%;float: left;">
		<div class="left-div">
			<i class="fa fa-home left-div-i"></i>
			<span class="left-div-span">行政区域</span>			
		</div>
		<div >
	   		 <ul id="homeTree" class="ztree tree" style="margin-left:5px;border: 0px;overflow: auto;width: 97%;"></ul>   
		</div>
	</div>
	<div id="div_users" style="width: 84%;float: left;overflow: hidden;border-left: 1px solid #ccc;">
		<div style="background-color: #FFFFFF;" id="user_div_manager">
			<form class="form-inline" method="post" id="form_data_info" >
				<div style="padding: 10px;border-bottom: 1px solid #dddddd;">
					<div class="col-xs-2.2" style="display: inline;">
						<div class="input-group">
						  <span class="input-group-addon" >用户信息:</span>
						  <input type="text" class="form-control" id="keyword"  placeholder="请输入用户的编码或名称">
						</div>
						<div class="input-group">
						  <span class="input-group-addon" >手机号码:</span>
						  <input type="text" class="form-control" id="phone_query"  placeholder="请输入手机号码">
						</div>
					</div>
					<button id="query" class="btn btn-primary" style="background-color: #0ab1f8;border: 0px;" type="button" >
						<span class="glyphicon glyphicon-search" ></span>&nbsp;查&nbsp;询
					</button>
					<button  id="add" class="btn btn-primary" data-toggle="modal"  type="button" style="background-color: #43CD80;border: 0px;" >
						<span class="glyphicon glyphicon-plus" ></span>&nbsp;添&nbsp;加
					</button>
					<button  id="exportUsers"   class="btn btn-primary" type="button" style="background-color:#FABC29;border: 0px;">
						<span class="glyphicon glyphicon-download-alt" ></span>&nbsp;导&nbsp;出
					</button>
					<button  id="refreshMeeting"   class="btn btn-primary" type="button" style="background-color:#EE82EE;border: 0px;">
						<span class="glyphicon glyphicon-refresh" ></span>&nbsp;刷&nbsp;新
					</button>
				</div>
			</form>
		</div>
		<div style="width: 100%;">
			<table id="patrol_catalogUser"  style="text-overflow:ellipsis;width: 100%;">
				<thead>
					<tr>
			            <th field="uuid"  hidden="true" width="1">用户</th>
			            <th field="userId"      width="30"    align="center" >用户编码</th>  
			            <th field="userName"    width="20"    align="center" halign="center">用户姓名</th>
			            <th field="deptNm"    width="25"    align="center" halign="center">所属机构</th>
			            <th field="jobName"    width="30"    align="center" halign="center">职务</th>
			            <th field="userPhone"       width="30"    align="center" >手机号</th>
			            <th field="addvnm"      width="30"    align="center" >所辖行政区</th>
			            <th field="updateTime"  width="40"    align="center" formatter="userManager.formatterDataTm">更新时间</th>
			            <th field="auditStatus" width="50"    align="center" formatter="userManager.formatterUser">操作</th>
					</tr>
				</thead>
			</table>
		</div>
	</div>
</div>