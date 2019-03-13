<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<jsp:include page="/common/base/include_BaseCommon.jsp"></jsp:include>
<link href="<%=request.getContextPath() %>/common/css/commonView.css" rel="stylesheet">   
<link rel="stylesheet" href="<%=request.getContextPath()%>/css/bootstrapStyle.css" >
<link rel="stylesheet" href="<%=request.getContextPath()%>/css/public.css" >      
<script src="<%=request.getContextPath()%>/module/sysmanager/role/roleInfo.js"></script>
<script type="text/javascript" src="<%=request.getContextPath()%>/module/js/jquery.ztree.core.js"></script>
<script type="text/javascript" src="<%=request.getContextPath()%>/module/js/jquery.ztree.excheck.min.js"></script>
<script src="<%=request.getContextPath()%>/module/sysmanager/role/ztreeRoles.js"></script>
<script src="<%=request.getContextPath()%>/module/sysmanager/role/UpdateztreeRoles.js"></script>
<script type="text/javascript">
    var WEB_ROOT = "<%=request.getContextPath() %>";
</script>
<div class="headerDiv" id="headerRolediv">
	<div class="header-content">
		<h2>
			<i class="fa icon-th-large"></i>
			<c>角色管理</c>
			<span ></span>
		</h2>
	</div> 
	<div style="background-color: #FFFFFF;"class="" id="user_div_manager">
		<form class="form-inline" method="post" id="form_data_info">
			<div style="padding: 10px;border-bottom: 1px solid #dddddd;">
				<div class="col-xs-2.2" style="display: inline;">
					<div class="input-group">
					  <span class="input-group-addon" >角色信息:</span>
					  <input type="text" class="form-control" id="keyword"  placeholder="请输入编码或名称">
					</div>
					<div class="input-group">
					  <span class="input-group-addon" >创建时间:</span>
					  <input type="text" class="form-control" id="creatTime"  placeholder="请选择时间">
					</div>
				</div>
				<button id="queryRole" class="btn btn-primary" style="background-color: #0ab1f8;border: 0px;" type="button" >
					<span class="glyphicon glyphicon-search " ></span>&nbsp;查&nbsp;询
				</button>
				<button  id="addRole" class="btn btn-primary" data-toggle="modal"  type="button" style="background-color: #43CD80;border: 0px;" >
					<span class="glyphicon glyphicon-plus " ></span>&nbsp;添&nbsp;加
				</button>
				<button  id="refreshRole"   class="btn btn-primary" type="button" style="background-color:#EE82EE;border: 0px;">
					<span class="glyphicon glyphicon-refresh" ></span>&nbsp;刷&nbsp;新
				</button>
			</div>
		</form>
	</div>
</div>
<table id="patrol_catalogRole"  style="text-overflow:ellipsis;height:300px;">
	<thead>
		<tr>
            <th field="uuid"     hidden="true" width="1">角色</th>
            <th field="roleId"   width="30"    align="center" >角色编码</th>
            <th field="roleName" width="50"    align="center" halign="center">角色名称</th>
            <th field="createTime"   width="30"    align="center" formatter="role.formatRoleTm">创建时间</th>
            <th field="roleDes"      width="40"    align="center" formatter="role.formatRoleDesc" >角色描述</th>
            <th field="updateTime"   width="40"    align="center"  formatter="role.formatRoleTm">更新时间</th>
            <th field="roleStatus"  width="40"    align="center"  formatter="role.formatRoleRepeat">操作</th>
		</tr>
	</thead>
</table>


<!-- 角色增加 -->
<div class="modal fade" id="modalRole" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true" style="overflow-y: hidden;">
    <div class="modal-dialog">
       <div class="modal-content" style="height:auto;width:450px;">
             <div  class="modal-header" style="padding:3px;">
                 <button type="button" class="close" data-dismiss="modal" aria-hidden="true" style='margin-right:10px;margin-top:10px;'>&times;</button>
	             <ul class="nav nav-tabs" role="tablist">  
					  <li role="presentation" class="active" ><a href="#home" role="tab" data-toggle="tab">基本信息</a></li>  
					  <li role="presentation" ><a href="#profile" role="tab" data-toggle="tab">角色权限</a></li>    
			     </ul>  
            </div>
            <div class="modal-body">
				<div class="tab-content">  
				<!--面板1  -->
				  <div role="tabpanel" class="tab-pane active" id="home">
				  <form class="form-horizontal" role="form" id="form_data_Role">
					<input class="form-control" name="uuid" id="uuid" type="hidden">
					   <div class="form-group" style="margin-top: 14px;">
						   <label class="col-sm-3 control-label"><span style="color: red;">★</span>&nbsp;&nbsp;角色编码</label>
						   <div class="col-sm-7">
							  <input class="form-control" name="roleId"  id="roleId" type="text" placeholder="角色编码"  maxlength="5">
						  </div>
					  </div>	
					  <div class="form-group">
						  <label class="col-sm-3 control-label"><span style="color: red;">★</span>&nbsp;&nbsp;角色名称</label>
						 <div class="col-sm-7">
						     <input class="form-control" name="roleName" id="roleName"  type="text" placeholder="角色名称" maxlength="5">
						</div>
				      </div>
				       <div class="form-group" id="pwd">
						  <label class="col-sm-3 control-label">角色描述</label>
						 <div class="col-sm-7">
						     <textarea  class="form-control"   name="roleDes"  id="roleDes"  placeholder="角色描述" cols="30" rows="5" maxlength="50"></textarea>
						</div>
				      </div>
				 </form>
			       <div class="modal-footer">
			          <button type="button" class="btn btn-default btns" data-dismiss="modal"  style="color: #333;background-color: #fff;border-color: #adadad;">&nbsp;返&nbsp;回</button> 
	                  <button type="button"  id="" class="btn btn-default btns" onclick="saveRole();">&nbsp;保&nbsp;存</button>
			      </div>
				  </div>
				 <!--面板2 --> 
				  <div role="tabpanel" class="tab-pane" id="profile">
				    <input id="roleCheck"   type="hidden" value=""/>
				      <ul id="tree" class="ztree"  style="height:235px;"></ul> 
				     <div class="modal-footer">
				         <button type="button" class="btn btn-default btns" onclick="savePermission();" style="color: #333;background-color: #fff;border-color: #adadad;">&nbsp;保&nbsp;存</button>  
				         <button type="button" class="btn btn-default btns" data-dismiss="modal"  style="color: #333;background-color: #fff;border-color: #adadad;">&nbsp;关&nbsp;闭</button>
		                 <button type="button" class="btn btn-default btns" onclick="checkAll();">&nbsp;全&nbsp;选</button>
		                 <button type="button" class="btn btn-default btns" onclick="checkFalse();">&nbsp;全&nbsp;清</button>
                    </div>  
				  </div>  
				</div>
            </div>
        </div>
    </div>
</div>
<!-- 角色修改 -->
<div class="modal fade" id="UpdateModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel"  style="overflow-y: hidden;">
	<div class="modal-dialog" role="document">
		<div class="modal-content" style="width:450px;height:auto;overflow-y: auto;overflow-x: hidden;">
			<div class="modal-header" style="padding:10px;">
				<button type="button" class="close" data-dismiss="modal" aria-label="Close">
					<span aria-hidden="true" style="font-size: 32px;margin-right: 10px;">×</span>
				</button>
				<h4 class="modal-title" id="myModalLabel">角色信息</h4>
			</div>
			<form class="form-horizontal" role="form" id="">
				<input class="form-control" name="uuid" id="uuid" type="hidden">
				   <div class="form-group" style="margin-top: 14px;">
					   <label class="col-sm-3 control-label"><span style="color: red;">★</span>&nbsp;&nbsp;角色编码</label>
					   <div class="col-sm-7">
						  <input class="form-control" name="roleId_update"  id="roleId_update" type="text" placeholder="角色编码">
					  </div>
				  </div>	
				  <div class="form-group">
					  <label class="col-sm-3 control-label"><span style="color: red;">★</span>&nbsp;&nbsp;角色名称</label>
					 <div class="col-sm-7">
					     <input class="form-control" name="roleName_update" id="roleName_update"  type="text" placeholder="角色名称" >
					</div>
			      </div>
			       <div class="form-group" id="pwd">
					  <label class="col-sm-3 control-label">角色描述</label>
					 <div class="col-sm-7">
					     <textarea  name="roleDes_update"  id="roleDes_update"  placeholder="角色描述" cols="30" rows="5"></textarea>
					</div>
			      </div> 				
		    </form>
		    <div  class="modal-footer" id="foot">
		    	<button class="btn btn-default btns" type="button" data-dismiss="modal"  style="color: #333;background-color: #fff;border-color: #adadad;">&nbsp;关&nbsp;闭</button>			
				<button class="btn btn-default btns" type="button" id="UpdateRole">&nbsp;修&nbsp;改</button>
			</div>
		</div>
	</div>
</div>

<!--修改权限树-->
<div class="modal fade" id="ztresModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true" style="overflow-y: hidden;">
    <div class="modal-dialog">
        <div class="modal-content" style="width:380px;height:500px;">
            <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                <h4 class="modal-title" id="myModalLabel" >分配权限</h4>
            </div>
            <div class="modal-body">
                 <input id="roleZtreeId"   type="hidden" value=""/>
                 <ul id="Updatetree" class="ztree" style="height: 350px;"></ul>
            </div>
            <div class="modal-footer" id="foot">
                 <button class="btn btn-default btns" type="button" data-dismiss="modal"   style="color: #333;background-color: #fff;border-color: #adadad;">&nbsp;关&nbsp;闭</button>
                 <button type="button" class="btn btn-default btns"  onclick="checkAllUpdate();">全选</button>
                 <button type="button" class="btn btn-default btns"  onclick="checkFalseUpdate();">全清</button>
                 <button type="button" class="btn btn-default btns"  onclick="updatePermission();">保存</button> 
            </div> 
        </div>
    </div>
</div>
