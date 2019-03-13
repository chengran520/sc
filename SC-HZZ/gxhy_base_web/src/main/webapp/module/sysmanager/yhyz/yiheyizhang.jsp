
<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@page import="org.apache.shiro.SecurityUtils"%>
<jsp:include page="/common/base/include_BaseCommon.jsp"></jsp:include>
<link href="<%=request.getContextPath() %>/common/css/commonView.css" rel="stylesheet">
<link rel="stylesheet" href="<%=request.getContextPath()%>/css/public.css" >   
<link rel="stylesheet" href="<%=request.getContextPath()%>/module/sysmanager/users/css/userInfo.css" >      
<link rel="stylesheet" href="<%=request.getContextPath()%>/css/bootstrapStyle.css" >
<link rel="stylesheet" href="<%=request.getContextPath()%>/css/menu.css" >
<script type="text/javascript" src="<%=request.getContextPath() %>/common/js/adcdUtil/adcd.js"></script>
<script type="text/javascript" src="<%=request.getContextPath()%>/module/js/jquery.ztree.core.js"></script>
<script type="text/javascript" src="<%=request.getContextPath()%>/module/js/jquery.ztree.excheck.min.js"></script>
<%-- <script type="text/javascript" src="<%=request.getContextPath()%>/module/sysmanager/users/roleZtree.js"></script> --%>
<script type="text/javascript" src="<%=request.getContextPath() %>/module/sysmanager/users/select.js"></script>
<script src="<%=request.getContextPath()%>/module/sysmanager/yhyz/yiheyizhang.js"></script>
<script src="<%=request.getContextPath()%>/module/sysmanager/users/adcd_user.js"></script>
<script type="text/javascript">
 	var useradcd = '<%=SecurityUtils.getSubject().getSession().getAttribute("useradcd")%>';
 	var WEB_ROOT = "<%=request.getContextPath() %>";
</script>
<div class="headerDiv" id="headerUserdiv">
	<div class="header-content">
		<h2>
			<i class="fa icon-th-large"></i>
			<c>一河一长</c>
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
	  <div id="ulDiv">
	      <table>
	         <tr>
	            <td>省级河长：<span id="sjhz" class='count'>0</span></td>
	            <td>市级河长：<span id="sjhz" class='count'>0</span></td>
	            <td>县级河长：<span id="xjhz" class='count'></span></td>
	            <td>镇级河长：<span id="zjhz" class='count'></span></td>
	            <td>村级河长：<span id="cjhz" class='count'></span><td>
	         </tr>
	         <tr>
	            <td>巡河员：<span id="xhy" class='count'></span></td>
	            <td>保洁员：<span id="bjy" class='count'></span></td>
	            <td>县河长办：<span id="xhzb" class='count'></span></td>
	            <td>乡河长办：<span id="xhz" class='count'></span></td>
	            <td>成员单位：<span id="cydw" class='count'></span></td>
	         </tr>
	      </table>
	   </div>
		<div style="background-color: #FFFFFF;" id="user_div_manager">
			<form class="form-inline" method="post" id="form_data_info" >
				<div style="padding: 10px;border-bottom: 1px solid #dddddd;">
					<div class="col-xs-2.2" style="display: inline;">
						<div class="input-group">
						  <span class="input-group-addon" >用户信息:</span>
						  <input type="text" class="form-control" id="keyword"  placeholder="请输入编码或名称">
						</div>
						<div class="input-group">
						  <span class="input-group-addon" >手机号码:</span>
						  <input type="text" class="form-control" id="phone_query"  placeholder="请输入手机号码">
						</div>
					</div>
					<button id="query" class="btn btn-primary" style="background-color: #0ab1f8;border: 0px;" type="button" >
						<span class="glyphicon glyphicon-search" ></span>&nbsp;查&nbsp;询
					</button>
<!-- 					<button  id="add" class="btn btn-primary" data-toggle="modal"  type="button" style="background-color: #43CD80;border: 0px;" > -->
<!-- 						<span class="glyphicon glyphicon-plus" ></span>&nbsp;添&nbsp;加 -->
<!-- 					</button> -->
					<button  id="exportUsers"   class="btn btn-primary" type="button" style="background-color:#FABC29;border: 0px;">
						<span class="glyphicon glyphicon-download-alt" ></span>&nbsp;导&nbsp;出
					</button>
<!-- 					<button  id="refreshMeeting"   class="btn btn-primary" type="button" style="background-color:#EE82EE;border: 0px;"> -->
<!-- 						<span class="glyphicon glyphicon-refresh" ></span>&nbsp;刷&nbsp;新 -->
<!-- 					</button> -->
				</div>
			</form>
		</div>
		<div style="width: 100%;">
			<table id="patrol_catalogUser"  style="text-overflow:ellipsis;width: 100%;">
				<thead>
					<tr>
			            <th field="uuid"  hidden="true" width="1">用户</th>
			            <th field="userId"    width="30"    align="center" >用户编码</th>  
			            <th field="userName"  width="20"    align="center" halign="center">用户姓名</th>
			            <th field="deptNm"    width="25"    align="center" halign="center">部门</th>
			            <th field="jobName"    width="25"    align="center" halign="center">职务</th>
			            <th field="userPhone"  width="30"    align="center" >手机号</th>
			            <th field="addvnm"      width="25"    align="center" >所辖行政区</th>
			             <!-- <th field="updateTime"  width="40"    align="center" formatter="userManager.formatterDataTm">更新时间</th>
			            <th field="auditStatus" width="60"    align="center" formatter="userManager.formatterUser">操作</th> -->
					</tr>
				</thead>
			</table>
		</div>
	</div>
</div>


<!-- 模态框（Modal） -->
<div class="modal fade" id="myModalAdd" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true"  style="overflow: hidden;">
	<div class="modal-dialog">
		<div class="modal-content" style="width:750px;heigth:auto;">
			<div class="modal-header" style="padding:10px;background-color: #009f95;color: #fff;">
				<button type="button" class="close" data-dismiss="modal" aria-label="Close">
					<span aria-hidden="true" style="font-size: 32px;margin-right: 10px;">×</span>
				</button>
				<h4 class="modal-title" id="myModalLabel">用户信息</h4>
			</div>
			<div class="modal-body">
				<form class="form-horizontal" role="form" id="form_data_user">
				   <input class="form-control" name="uuid" id="uuid" type="hidden">
				   <div class="form-group" style="margin-top: 14px;" id="userDiv">
					   <label class="col-sm-3 control-label"><span style="color: red;" id="stat_span">★</span>&nbsp;&nbsp;用户编码</label>
					   <div class="col-sm-7">
						  <input class="form-control" name="userId" id="userId" type="text" placeholder="输入用户编码,一旦确定不能更改" maxlength="15">
					  </div>
				  </div>
				  <div class="form-group">
					  <label class="col-sm-3 control-label"><span style="color: red;">★</span>&nbsp;&nbsp;用户名称</label>
					 <div class="col-sm-7">
					     <input class="form-control" name="userName" id="userName" type="text" placeholder="输入用户名称，要求中文" maxlength="4">
					</div>
			      </div>
			       <div class="form-group" id="pwd">
					  <label class="col-sm-3 control-label"><span style="color: red;">★</span>&nbsp;&nbsp;用户密码</label>
					 <div class="col-sm-7">
					     <input class="form-control" name="userPassword" id="userPassword" type="Password" placeholder="请输入密码">
					</div>
			      </div> 
			      <div class="form-group">
					 <label class="col-sm-3 control-label"><span style="color: red;">★</span>&nbsp;&nbsp;手&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;机</label>
					 <div class="col-sm-7">
						<input class="form-control" name="userPhone" id="userPhone" type="text"  placeholder="请输入手机号">
					 </div>
				 </div>
				 <div class="form-group" id="roleDiv">
					  <label class="col-sm-3 control-label"><span style="color: red;">★</span>&nbsp;&nbsp;角&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;色</label>
					  <div class="col-sm-7">
					      <select class="form-control" id="roleId" name="roleId">
					      </select>
					</div>
			      </div>
			       <div class="form-group">
					  <label class="col-sm-3 control-label"><span style="color: red;">★</span>&nbsp;&nbsp;部&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;门</label>
					 <div class="col-sm-7">
					      <select class="form-control" id="deptId" name="deptId">
					      </select>
					</div>
			      </div>
			      <div class="form-group">
					  <label class="col-sm-3 control-label"><span style="color: red;">★</span>&nbsp;&nbsp;职&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;务</label>
					 <div class="col-sm-7">
						 <select class="form-control" id="job" name="job">
					      </select>
					</div>
			      </div>
				 <div class="form-group">
				   <label class="col-sm-3 control-label"><span style="color: red;">★</span>&nbsp;&nbsp;行政区域</label>
					   <div class="col-sm-2">
						  <select class="form-control" name="addvcd1"   id="province"  class="form-control" style="width: 125px;">					
					      </select>
					   </div>
					   <div class="col-sm-2" style="margin-left:14px;">
					      <select class="form-control" name="addvcd2"  id="city" class="form-control" style="width: 125px;">
							<option disabled="disabled"  value=''  selected="selected">-----市-----</option>
					      </select>
					   </div>
					   <div class="col-sm-2" style="margin-left:14px;">
					      <select  name="addvcd3"  id="district" class="form-control" style="width: 125px;">
							<option  disabled="disabled" value=''   selected="selected">-----县区-----</option>
					      </select>
					   </div>
				 </div>		
				  <div class="form-group">
				   	   <label class="col-sm-3 control-label"></label>
					   <div class="col-sm-2">
					      <select  name="addvcd4"  id="country" class="form-control" style="width: 125px;">
							<option  disabled="disabled" value=''   selected="selected" id="countryOption">-----乡镇-----</option>
					      </select>
					   </div>
					   <div class="col-sm-2" style="margin-left:14px;">
					      <select  name="addvcd5"  id="village" class="form-control" style="width: 125px;">
							<option  disabled="disabled" value=''   selected="selected" id="villageOption">-----村-----</option>
					      </select>
					   </div>
				 </div>				
				 <div class="form-group">
					<label for="inputPassword" class="col-sm-3 control-label"><span style="color: red;display: none;">★</span>&nbsp;&nbsp;管理河湖</label>
					<div class="col-sm-7">
						<div class="row">
						    <div class="col-xs-4" style="margin-top:10px;">
						        <div  class="selecteddiv">可选河流</div>
						        <select name="fromRiver" id="search" class="form-control" size="8" multiple="multiple" style="height:130px;width:150px;">
						        </select>
						    </div>
						    <div class="col-xs-1" style="margin-top:30px;margin-right: 30px;margin-left:30px;">
						        <button type="button" id="search_rightAll" class="btn btn-block a" style="width:50px;background-color:#009f95;"><i  style="color:white;"   class="glyphicon glyphicon-forward"></i></button>
						        <button type="button" id="search_rightSelected" class="btn btn-block a"  style="width:50px;background-color:#009f95;"><i style="color:white;" class="glyphicon glyphicon-chevron-right"></i></button>
						        <button type="button" id="search_leftSelected" class="btn btn-block a"  style="width:50px;background-color:#009f95;"><i style="color:white;"  class="glyphicon glyphicon-chevron-left"></i></button>
						        <button type="button" id="search_leftAll" class="btn btn-block a"  style="width:50px;background-color:#009f95;"><i style="color:white;"      class="glyphicon glyphicon-backward"></i></button>
						    </div>
						    <div class="col-xs-4" style="margin-top:10px;">
						    <div class="selecteddiv">选择河流</div>
						        <select name="toRiver" id="search_to" class="form-control" size="8" multiple="multiple" style="height:130px;background-color: #fff;width:150px;"></select>
						    </div>
					  </div>
					</div>
				 </div>
				 <div class="form-group">
				   <label for="inputPassword" class="col-sm-3 control-label">性&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;别</label>
				   <div class="col-sm-7">
				       <label>
		                  <input type="radio" value="1" name="userSex">&nbsp;男&nbsp;&nbsp;&nbsp;
		               </label>
		               <label>
		                 <input type="radio"  value="2" name="userSex">&nbsp;女&nbsp;&nbsp;&nbsp;
		               </label>
		          </div>
		        </div>
			   </form>
			</div>
			<div class="modal-footer">
			    <button class="btn btn-default btns" type="button" data-dismiss="modal" style="color: #333;background-color: #fff;border-color: #adadad;">
					&nbsp;关&nbsp;闭
				</button>
				<button  class="btn btn-default btns" id="saveUser" type="button">
				    &nbsp;保&nbsp;存
				</button>
				<button class="btn btn-default btns" type="button" id="updateUser1" style="display:none;">
					&nbsp;确&nbsp;定
				</button>
				
			</div>
		</div>
	</div>
</div>

<!-- 用户详情 -->
<div class="modal fade" id="myModalDetail" tabindex="-1" role="dialog" aria-labelledby="myModalLabel"  style="overflow: hidden;">
	<div class="modal-dialog" role="document">
		<div class="modal-content" style="width:600px;height: auto;overflow-y: auto;overflow-x: hidden;">
			<div class="modal-header" style="padding:8px;background-color: #009f95;color: #fff;">
				<button type="button" class="close" data-dismiss="modal" aria-label="Close">
					<span aria-hidden="true" style="font-size: 32px;margin-right: 10px;">×</span>
				</button>
				<h4 class="modal-title" id="myModalLabel">用户信息</h4>
			</div>
			<div>
			    <table  id="ditable">
				   <tr>
				      <td class="leftTr">用户编码：</td>
				      <td id="userId_detail" class="rightTr"></td>
				      <td class="leftTr">用户名称：</td>
				      <td id="userName_detail" class="rightTr"></td>
				   </tr>
				   <tr>
				      <td  class="leftTr">部&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;门：</td>
				      <td  id="deptName_detail" class="rightTr"></td>
				      <td  class="leftTr">职&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;务：</td>
				      <td id="jobName_detail" class="rightTr"></td>
				   </tr>
				   <tr>
				      <td  class="leftTr">角&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;色：</td>
				      <td   id="roleName_detail" class="rightTr"></td>
			          <td  class="leftTr">行政区划：</td>
				      <td   id="addvnm_detail" class="rightTr"></td>	     
				   </tr>
				    <tr>
				      <td  class="leftTr">手&nbsp;&nbsp;机&nbsp;&nbsp;号：</td>
				      <td   id="phone_detail" class="rightTr"></td>
				      <td  class="leftTr">性&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;别：</td>
				      <td   id="sex_detail" class="rightTr"></td>
				   </tr>
				    <tr>
				      <td  class="leftTr">注册时间：</td>
				      <td   id="createTime_detail"  class="rightTr"></td>
				      <td  class="leftTr">更新时间：</td>
				      <td id="updateTime_detail"  class="rightTr"></td>
				   </tr>
			  </table>
			  <div>
				    <div style="margin-left:30px;heigth:40px;line-height:40px;">管理河湖：</div>
				    <table id="river_detail"></table>
			  </div>
			</div>		  		  
		</div>
	</div>
</div>

<!-- 密码修改 -->
<div class="modal fade" id="myModalPwd" tabindex="-1" role="dialog" aria-labelledby="myModalLabel"  style="overflow: hidden;">
	<div class="modal-dialog" role="document">
		<div class="modal-content" style="width:600px;height: auto;overflow-y: auto;overflow-x: hidden;">
			<div class="modal-header" style="padding:8px;background-color: #009f95;color: #fff;">
				<button type="button" class="close" data-dismiss="modal" aria-label="Close">
					<span aria-hidden="true" style="font-size: 32px;margin-right: 10px;">×</span>
				</button>
				<h4 class="modal-title" id="myModalLabel">密码修改</h4>
			</div>
			<div>
			  <form class="form-horizontal" role="form" id="form-update-pwd">
				   <input class="form-control" name="uuid" id="id-pwd" type="hidden">
				   <div class="form-group" style="margin-top: 14px;" id="userDiv">
					   <label class="col-sm-3 control-label"><span style="color: red;" id="stat_span">★</span>&nbsp;&nbsp;旧密码</label>
					   <div class="col-sm-7">
						  <input class="form-control" name="oldPwd" id="oldPwd" type="text" placeholder="旧密码" maxlength="12">
					  </div>  
				  </div>
				  <div class="form-group">
					  <label class="col-sm-3 control-label"><span style="color: red;">★</span>&nbsp;&nbsp;新密码</label>
					 <div class="col-sm-7">
					     <input class="form-control" name="newPwd" id="newPwd" type="Password" placeholder="输入新密码" maxlength="12">
					</div>
			      </div>
			       <div class="form-group" id="pwd">
					  <label class="col-sm-3 control-label"><span style="color: red;">★</span>&nbsp;&nbsp;再次输入</label>
					 <div class="col-sm-7">
					     <input class="form-control" name="aglinPwd" id="aglinPwd" type="Password" placeholder="再次输入新密码" maxlength="12" onkeyup="validate()">
					</div>
			      </div> 
			   </form>
			</div>		
			<div class="modal-footer">
			    <button class="btn btn-default btns" type="button" data-dismiss="modal"  style="color: #333;background-color: #fff;border-color: #adadad;">
					&nbsp;关&nbsp;闭
				</button>
				<button class="btn btn-default btns" type="button" id="updatePwd-id">
					&nbsp;确&nbsp;定
				</button>				
			</div>  		  
		</div>
	</div>
</div>

<!-- <!-- 设置角色 -->
<div class="modal fade" id="setRoleModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true" style="overflow: hidden;">
    <div class="modal-dialog" role="document">
        <div class="modal-content" style="width:380px;height:auto;">
            <div class="modal-header" style="padding:10px;background-color: #009f95;color: #fff;">
                <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                <h4 class="modal-title" id="myModalLabel" >设置角色</h4>
            </div>
            <div class="modal-body" style="height:330px;margin-left:10px;">
                <input class="form-control"  id="roleName" type="text" placeholder="用户角色"  onkeyup="AutoMatchRole(this)"  style="width:220px;">
                <input id='user_Id'  type='hidden' value=""/>
                <input id='role_Id'  type='hidden' value=""/>
                <div id="menuContent" class="menuContent">
			       <ul id="roleZtree"  class="ztree" style="margin-top:0;"></ul>
			    </div>	 
            </div>
           <div class="modal-footer">
                <button type="button" class="btn btn-default btns" data-dismiss="modal"   style="color: #333;background-color: #fff;border-color: #adadad;">关 闭</button>
		        <button type="button" class="btn btn-default btns" id="updateRole">保存</button>
                
           </div>
        </div>
    </div>
</div>