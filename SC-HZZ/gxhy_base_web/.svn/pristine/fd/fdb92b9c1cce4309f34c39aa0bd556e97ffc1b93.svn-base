<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<jsp:include page="/common/base/include_BaseCommon.jsp"></jsp:include>
<link href="<%=request.getContextPath() %>/common/css/commonView.css" rel="stylesheet">   
<link rel="stylesheet" href="<%=request.getContextPath()%>/css/bootstrapStyle.css" >
<link rel="stylesheet" href="<%=request.getContextPath()%>/css/public.css" >    
<link rel="stylesheet" href="<%=request.getContextPath()%>/css/menu.css" >       
<script type="text/javascript" src="<%=request.getContextPath()%>/module/js/jquery.ztree.core.js"></script>
<script type="text/javascript" src="<%=request.getContextPath()%>/module/js/jquery.ztree.excheck.min.js"></script>
<script type="text/javascript" src="<%=request.getContextPath()%>/module/sysmanager/menu/ztreeMenu.js"></script>
<script type="text/javascript" src="<%=request.getContextPath()%>/module/sysmanager/menu/menuInfo.js"></script>
<script type="text/javascript">
 	var WEB_ROOT = "<%=request.getContextPath() %>";
</script>
<div class="headerDiv" id="headerMenudiv">
	<div class="header-content">
		<h2>
			<i class="fa icon-th-large"></i>
			<c>菜单管理</c>
			<span ></span>
		</h2>
	</div> 
	<div style="background-color: #FFFFFF;"class="" id="menu_div_manager">
			<div class="form-inline" style="padding: 10px;border-bottom: 1px solid #dddddd;">
				<div class="col-xs-2.2" style="display: inline;">
					<div class="input-group">
					  <span class="input-group-addon" >菜单信息:</span>
					  <input type="text" class="form-control" id="keywo"  placeholder="请输入编码或名称">
					</div>
				</div>
				<button id="queryMenu" class="btn btn-primary" style="background-color: #0ab1f8;border: 0px;" type="button" >
					<span class="glyphicon glyphicon-search " ></span>&nbsp;查&nbsp;询
				</button>
				<button  id="saveMenu" class="btn btn-primary" type="button" style="background-color: #43CD80;border: 0px;" >
					<span class="glyphicon glyphicon-plus " ></span>&nbsp;添&nbsp;加
				</button>	
				<button  id="refreshMenu"   class="btn btn-primary" type="button" style="background-color:#EE82EE;border: 0px;">
					<span class="glyphicon glyphicon-refresh" ></span>&nbsp;刷&nbsp;新
				</button>	
			</div>
		
	</div>
</div>
<table id="Menu"  style="text-overflow:ellipsis;">
	<thead>
		<tr>
            <th field="uuid"    hidden="true" width="1">权限</th>
            <th field="menuId"   width="20"    align="center" >菜单编码</th>
            <th field="menuNm"    width="20"    align="center">菜单名称</th>
            <th field="menuUrl"    width="60"    align="left" halign="center" formatter="menu.formatMenuParent">菜单URL</th>
            <th field="pmenuId"    width="20"    align="center">上级菜单编码</th>
            <th field="pMenuNm"    width="20"    align="center" formatter="menu.formatMenuParent">上级菜单名称</th>
            <th field="sort"       width="20"    align="center" >排序</th>
            <th field="roleStatus" width="30"    align="center"  formatter="menu.formatMenuRepeat">操作</th>
		</tr>
	</thead>
</table>
<!-- 菜单增加 -->
<div class="modal fade" id="modalMenu" tabindex="-1" role="dialog" aria-labelledby="myModalLabel"  style="overflow-y: hidden;">
	<div class="modal-dialog" role="document">
		<div class="modal-content" style="width:600px;height:auto;overflow-y: auto;overflow-x: hidden;">
			<div class="modal-header" style="padding:10px;background-color: #009f95;color: #fff;">
				<button type="button" class="close" data-dismiss="modal" aria-label="Close">
					<span aria-hidden="true" style="font-size: 32px;margin-right: 10px;">×</span>
				</button>
				<h4 class="modal-title" id="myModalLabel">菜单信息</h4>
			</div>
		<form class="form-horizontal" role="form" id="form_data_Menu">
		   <input class="form-control" name="uuid" id="uuid" type="hidden">
		   <div class="form-group" style="margin-top: 14px;">
			   <label class="col-sm-3 control-label"><span style="color: red;">★</span>&nbsp;&nbsp;菜单编码</label>
			   <div class="col-sm-7">
				  <input class="form-control" name="menuId"  id="menuId" type="text" placeholder="请输入菜单编码"  maxlength="5">
			  </div>
		  </div>	
		  <div class="form-group">
			  <label class="col-sm-3 control-label"><span style="color: red;">★</span>&nbsp;&nbsp;菜单名称</label>
			 <div class="col-sm-7">
			     <input class="form-control" name="menuNm" id="menuNm"  type="text" placeholder="请输入菜单名称" maxlength="8">
			</div>
	      </div>
	       <div class="form-group" id="div_fro">
			  <label class="col-sm-3 control-label">父菜单</label>
			  <div class="col-sm-7">
			     <input class="form-control"  id="pmenuIdName" type="text" placeholder="请选 择父级菜单地址"  onclick="showMenu();" onkeyup="AutoMatch(this)" >
			     <input name="pmenuId" id="pmenuId"  type="hidden">
			     <div id="menuContent" class="menuContent" style="display: none; position: absolute;">
			        <ul id="menuZtree" class="ztree" style="margin-top:0;"></ul>
			     </div>			   
			 </div>
	      </div> 
	      <div class="form-group">
			  <label class="col-sm-3 control-label">&nbsp;&nbsp;菜单地址</label>
			 <div class="col-sm-7">
			     <input class="form-control" name="menuUrl" id="menuUrl"  type="text" placeholder="请输入菜单地址">
			</div>
	      </div>
	       <div class="form-group">
			  <label class="col-sm-3 control-label">排序</label>
			 <div class="col-sm-7">
			     <input class="form-control" name="sort" id="sort"  type="text" placeholder="请输入排序号，如：1，2，3">
			</div>
	      </div>
		 <div class="modal-footer">
		        <button class="btn btn-default btns" type="button" data-dismiss="modal"  style="color: #333;background-color: #fff;border-color: #adadad;">
					&nbsp;关&nbsp;闭
				</button>
				<button class="btn btn-default btns" type="button" id="insertMenu" >
					&nbsp;确&nbsp;定
				</button>
				<button class="btn btn-default btns" type="button" id="updateMenu">
					&nbsp;修&nbsp;改
				</button>
				
			</div>
	    </form>
		</div>
	</div>
</div>
	