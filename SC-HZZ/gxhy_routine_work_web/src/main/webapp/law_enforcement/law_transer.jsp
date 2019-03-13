<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<jsp:include page="/common/base/include_BaseCommon.jsp"></jsp:include>
<link href="<%=request.getContextPath() %>/common/css/commonView.css" rel="stylesheet">
<script src="law_transer.js"></script>
<script type="text/javascript">
 	var WEB_ROOT = "<%=request.getContextPath() %>";
</script>
<div class="headerDiv" id="LawheaderDiv">
	<div class="header-content">
		<h2>
			<i class="fa icon-th-large"></i>
			<c>执法移交</c>
			<span ></span>
		</h2>
	</div> 
	<div style="background-color: #FFFFFF;"class="" id="divLawQuery">
		<form class="form-inline" method="post">
			<div style="padding: 10px;border-bottom: 1px solid #dddddd;">
			    <div class="col-xs-1.5" style="display: inline;" id="adcd1_div">
					<div class="input-group">
						<div class="input-group-addon">事件类型：</div>
					    <select class="form-control" id="adcd1"   class="form-control" style="width: 150px;">
					       <option value="" selected="selected">—— 全部   ——</option>
					       <option value="">巡河上报 </option>
					       <option value="">移动上报</option>
					       <option value="">公众举报</option>
					       <option value="">领导抽查</option>
					    </select>
					</div>
				</div>
				 <div class="col-xs-1.5" style="display: inline; ">
					<div class="input-group">
						<div class="input-group-addon">执法时间:</div>
						<input id="startTm" type="text" class="form-control" style="width: 150px;">
					</div>
				</div>
				<div class="col-xs-1.5" style="display: inline;">
					<div class="input-group">
					  <span class="input-group-addon" >关键字:</span>
					  <input type="text" class="form-control" id="keyword"  placeholder="请输入关键字" style="width: 170px;">
					</div>
				</div>
				<button id="query" class="btn btn-primary" style="background-color: #88D44E;border: 0px;margin-left:10px;" type="button" >
					<span class="glyphicon glyphicon-search " ></span>&nbsp;查&nbsp;询
				</button>
				<button  id="refreshLawTranser"   class="btn btn-primary" type="button" style="background-color:#EE82EE;border: 0px;">
					<span class="glyphicon glyphicon-refresh" ></span>&nbsp;刷&nbsp;新
				</button>			
			</div>
		</form>
	</div>
</div>
<div class="demo" style="overflow: hidden;width: 100%;float: left;border-right: 1px solid #dbdbdb;">
	<div class="row">
		<div class="col-md-offset col-md-12">
			<div class="tab" role="tabpanel">
				<!-- Tab panes -->
				<div class="tab-content">
						<table id="lawTranser"  style=" text-overflow:ellipsis;">
							<thead>
								<tr>
						            <th field="uuid" hidden="true" width="1">主那家</th>
						            <th field="lawSource"  hidden="true" align="center" >案件来源</th>
						            <th field="reportSource" hidden="true"align="center" >上报事件</th>
						            <th field="reportPh" hidden="true" align="center" >上报人员电话</th>
						            <th field="lawNt"" hidden="true" align="center" >案件描述</th>
						            <th field="handleUser"  hidden="true" align="center" >处理人员</th>
						            <th field="handleTmMit"  hidden="true" align="center" >当前处理限时</th>
						            <th field="isFiling"  hidden="true" align="center" >是否立案</th>
						            <th field="filCloseTerm" hidden="true" align="center" >结案条件</th>
						            <th field="workFlowId" hidden="true" align="center" >处理流程</th>
						           	<th field="isFilClose" hidden="true" align="center" >是否结案</th>
						            <th field="filCloseTerm" hidden="true" align="center" >结案条件</th>
						            
						            <th field="lawId"  width="25" align="center" >案件编号</th>
						            <th field="lawAdres" width="30" align="center" >案件发生地点</th>
						            <th field="reportUser" width="18" align="center" >上报人员</th>
						            <th field="reportTm" width="35" align="center"  formatter="lawTranser.formatterTM" >上报时间</th>
						            <th field="12" width="18" align="center" >立案人员</th>
						            <th field="22" width="35" align="center" formatter="lawTranser.formatterTM">立案时间</th>
						            <th field="pHandleUser" width="20" align="center" >上次处理人员</th>
						            <th field="123" width="18" align="center" formatter="lawTranser.formatterDetail" >操作</th>
								</tr>
							</thead>
						</table>
					</div>
				</div>
			</div>
		</div>
	</div>
