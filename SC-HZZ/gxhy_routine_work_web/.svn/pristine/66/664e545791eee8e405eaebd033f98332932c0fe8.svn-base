<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@page import="org.apache.shiro.SecurityUtils"%>
<jsp:include page="/common/base/include_BaseCommon.jsp"></jsp:include>
<link rel="stylesheet" href="<%=request.getContextPath()%>/css/public.css" >   
<link href="<%=request.getContextPath() %>/common/css/commonView.css" rel="stylesheet">
<link rel="stylesheet" href="<%=request.getContextPath()%>/css/bootstrapStyle.css" > 
<script type="text/javascript" src="<%=request.getContextPath()%>/module/js/jquery.ztree.core.js"></script>
<script type="text/javascript" src="<%=request.getContextPath()%>/module/js/jquery.ztree.excheck.min.js"></script>
<script type="text/javascript" src="<%=request.getContextPath() %>/common/js/ztree.js"></script>
<script type="text/javascript" src="<%=request.getContextPath() %>/common/js/randomNumber.js"></script>
<script type="text/javascript" src="<%=request.getContextPath() %>/law_enforcement/law_list.js"></script>
<script type="text/javascript" src="<%=request.getContextPath() %>/law_enforcement/ztreeLaw.js"></script>
<script type="text/javascript">
 	var WEB_ROOT = "<%=request.getContextPath() %>";
 	var userId = '<%=SecurityUtils.getSubject().getSession().getAttribute("userId")%>';
 	var userjob = '<%=SecurityUtils.getSubject().getSession().getAttribute("userjob")%>';
 	var paramTp = "<%=request.getParameter("tp")%>";
 	var uuid="<%=request.getParameter("uuid")%>";
</script>
<div class="headerDiv" id="LawheaderDiv">
	<div class="header-content">
		<h2 class="paramTp1">
			<i class="fa icon-th-large"></i>
			<c><a style="text-decoration: none;color:#000;" href="<%=request.getContextPath()%>/law_enforcement/law_list.jsp">执法监管</a></c>
		</h2>
		<h2 class="paramTp2">
			<i class="fa icon-th-large"></i>
			  <c>
				<a style="text-decoration: none;" href="javascript:history.back(-1)">工作台</a>
				<span style="margin-left: 5px;margin-right: 5px;">></span>
				执法监管
			 </c>
		</h2>
	</div> 
	<div style="background-color: #FFFFFF;"class="" id="divLawQuery">
		<form class="form-inline" method="post">
			<div style="padding: 10px;border-bottom: 1px solid #dddddd;">
			    <div class="col-xs-1.5" style="display: inline;" id="adcd1_div">
					<div class="input-group">
						<div class="input-group-addon">案件来源：</div>
					    <select class="form-control" id="source"   class="form-control" style="width: 150px;">
					       <option value="" selected="selected">—— 全部   ——</option>
					       <option value="1">河长巡河 </option>
					       <option value="2">公众举报</option>
					    </select>
					</div>
				</div>
				 <div class="col-xs-1.5" style="display: inline; ">
					<div class="input-group">
						<div class="input-group-addon">执法时间:</div>
						<input id="Tm" type="text" class="form-control" style="width: 150px;">
					</div>
				</div>
				<div class="col-xs-1.5" style="display: inline;">
					<div class="input-group">
					  <span class="input-group-addon" >发生地址:</span>
					  <input type="text" class="form-control" id="keyword"  placeholder="请输入关键字" style="width: 170px;">
					</div>
				</div>
				<button id="queryLaw" class="btn btn-primary" style="background-color: #0ab1f8;border: 0px;margin-left:10px;" type="button" >
					<span class="glyphicon glyphicon-search " ></span>&nbsp;查&nbsp;询
				</button>
				<button id="add_law" class="btn btn-primary" type="button" style="background-color: #43CD80;border: 0px;">
					<span class="glyphicon glyphicon-plus"></span>&nbsp;发&nbsp;起
				</button>
				<button  id="refreshLaw"   class="btn btn-primary" type="button" style="background-color:#EE82EE;border: 0px;">
					<span class="glyphicon glyphicon-refresh" ></span>&nbsp;刷&nbsp;新
				</button>
			</div>
		</form>
	</div>
</div>
<table id="lawCatalog"  style=" text-overflow:ellipsis;">
	<thead>
		<tr>
	           <th field="lawId"  width="30" align="center" >案件编号</th>
	           <th field="busineId" width="30" align="center" >事件来源</th>
	           <th field="busineAddress" width="60" align="center" >事件发生地点</th>
	           <th field="reportUser" width="20" align="center" >申请人员</th>
	           <th field="reportTm" width="40" align="center" formatter="lawViewMap.formatterDataTm">上报时间</th>
	           <th field="registerUserNm" width="50" align="center">执法人员</th>
	            <th field="registerUserId" width="20" hidden="true"></th>
	           <th field="reportUserPhone" width="30" align="center" >上报人员电话</th>
	           <th field="handleTmmit" width="20" align="center" formatter="lawViewMap.formatterTmMit">处理时长</th>
	           <th field="isFiling" width="20" align="center" formatter="lawViewMap.formatterFil">是否执法</th>
	           <!-- <th field="isFilClose" width="20" align="center" formatter="lawViewMap.formatterFilClose">是否结案</th> -->
	           <!-- <th field="status" width="25" align="center" formatter="lawViewMap.formatterStatus">处理环节</th> -->
	            <th field="uuid" width="15" align="center" formatter="lawViewMap.formatterDetail" >操作</th>
			</tr>
	</thead>
</table>
<!-- 模态框（Modal） -->
<div class="modal fade" id="lawModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true" style="overflow-y: hidden;">
	<div class="modal-dialog">
		<div class="modal-content" style="width:750px;heigth:auto;">
			<div class="modal-header" style="padding:10px;background-color: #009f95;color: #fff;">
				<button type="button" class="close" data-dismiss="modal" aria-label="Close">
					<span aria-hidden="true" style="font-size: 32px;margin-right: 10px;">×</span>
				</button>
				<h4 class="modal-title" id="myModalLabel">发起执法</h4>
			</div> 
			<div class="modal-body">
				<form class="form-horizontal" role="form" id="form_data_user">
				   <input class="form-control" name="uuid" id="uuid" type="hidden">
				   <div class="form-group" style="margin-top: 14px;" id="userDiv">
					   <label class="col-sm-3 control-label"><span style="color: red;" id="stat_span">★</span>&nbsp;&nbsp;案件编号</label>
					   <div class="col-sm-7">
						  <input class="form-control" name="lawId" id="lawId" type="text" disabled="disabled">
					  </div>
				  </div>
				  <div class="form-group">
					  <label class="col-sm-3 control-label"><span style="color: red;">★</span>&nbsp;&nbsp;案件来源</label>
					 <div class="col-sm-7">
					    <select class="form-control" id="orgins"   class="form-control" name="selectSource">
					       <option value="1" selected="selected">河长巡河 </option>
					       <option value="2">公众举报</option>
					    </select>
					</div>
			      </div>
			      <div class="form-group">
					 <label class="col-sm-3 control-label"></label>
					 <div class="col-sm-7">
					    <select class="form-control" id="busines"   class="form-control" name="busineId">
					    </select>
					</div>
			      </div>			      
			      <div class="form-group">
				    <label for="lastname" class="col-sm-3 control-label"><span style="color: red;">★</span>&nbsp;&nbsp;执法人员</label>
				    <div class="col-sm-8">
						   <!--  <input type="hidden" name="registerUserId"  value="" id="registerUserId">
						    <input id="registerUser" name ="registerUser" placeholder="请输入执法人员" class="form-control"  readonly="readonly"  style="width: 406px;"/>
							<div class="col-sm-6" style="margin-top:10px;border: 1px solid #000;padding-right:0px;">
						        <ul id="laweZtree"  class="ztree" style="margin-top:0;overflow: auto;height:250px">
						        </ul>
						    </div> -->
				<div>
				    <span  class='titlespan'>石城县成员单位</span>
				    <span  class='titlespan' style="padding-left:115px;">处理人员</span>
				</div>    
				<div class="col-xs-5" style="margin-top:10px;border: 1px solid #000;padding-right:0px;">
			        <ul id="laweZtree"  class="ztree" style="margin-top:0;overflow: auto;height:300px">
			        </ul>
			    </div>
			    <div  class="col-xs-1"  style="margin-top:200px;margin-right:15px;"> 
			       <img src="<%=request.getContextPath()%>/common/images/bussine/addicon.jpg" style="width:45px;height:45px;margin-left: -14px;">
			    </div>
			    <div class="col-xs-5" style="margin-top:10px;border: 1px solid #000;padding-right:0px;">
			       <input  id="registerUserId" type="hidden" value="">
			       <input  id="registerUserNm" type="hidden" value="">
			       <ul class="ztree" style="margin-top:0;overflow: auto;height:300px" id="registerUser"> 
			       </ul>
			    </div>	    
						    
						    
				    </div>
			      </div>
			      <div class="form-group">
					 <label class="col-sm-3 control-label"><span style="color: red;">★</span>&nbsp;&nbsp;执法限时</label>
					 <div class="col-sm-7">
						 <input class="form-control"  id="handleTmmit"  name="handleTmMit" type="text" style="display:inline;width:60px;" onkeyup="value=value.replace(/[^\d]/g,'')">&nbsp;&nbsp;天
					 </div>
				 </div>
			   </form>
			</div>
			<div class="modal-footer">
			    <button class="btn btn-default btns" type="button" data-dismiss="modal"  style="color: #333;background-color: #fff;border-color: #adadad;">
					&nbsp;关&nbsp;闭
				</button>
				<button  class="btn btn-default btns" id="saveLaw" type="button">
				    &nbsp;保&nbsp;存
				</button>	
			</div>
		</div>
	</div>
</div>

<!--  审核-->
<div class="modal fade" id="checkModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
    <div class="modal-dialog" role="document">
        <div class="modal-content" style="width:500px;height:auto;">
            <div class="modal-header" style="padding:10px;background-color: #009f95;color: #fff;">
                <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                <h4 class="modal-title" id="myModalLabel" >执法</h4>
            </div>
            <div class="modal-body" style="height:250px;margin-left:10px;">
			  <form class="form-horizontal" role="form" id="form-update-pwd">
				  <input class="form-control" id="lawId2" type="hidden">
				  <div class="form-group">
					  <label class="col-sm-3 control-label">&nbsp;&nbsp;执法意见</label>
					  <div class="col-sm-7">
						 <textarea rows="10" cols="40" id="handleView2"></textarea>
					   </div>
			      </div>
			   </form>
            </div>
           <div class="modal-footer">
                <button type="button" class="btn btn-default btns" data-dismiss="modal"   style="color: #333;background-color: #fff;border-color: #adadad;">关 闭</button>
		        <button type="button" class="btn btn-default btns" id="addLaw">保存</button>  
           </div>
        </div>
    </div>
</div>
<script type="text/javascript">
	if(parseInt(paramTp)){
		$(".paramTp1").hide();
		$(".paramTp2").show();
	}
</script>