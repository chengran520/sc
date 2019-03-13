<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<jsp:include page="/common/base/include_BaseCommon.jsp"></jsp:include>
<link href="<%=request.getContextPath() %>/common/css/commonView.css" rel="stylesheet">
<link href="<%=request.getContextPath() %>/dataStatistics/busineStatics/busineStatic.css" rel="stylesheet">
<script src="<%=request.getContextPath()%>/dataStatistics/busineStatics/busineStatics.js"></script>
<script type="text/javascript">
 	var WEB_ROOT = "<%=request.getContextPath() %>";
</script>
<div class="headerDiv noprint" id="headerDiv" style="height: 36px;">
	<div class="header-content" style="height: 36px;">
		<h2>
			<i class="fa icon-th-large"></i>
			<c>业务信息统计报表</c>
			<span ></span>
		</h2>
	</div> 	
</div>
<div style="background-color: #FFFFFF;"class="noprint" id="div1">
	<form class="form-inline" method="post">
		<div style="padding: 10px;border-bottom: 1px solid #dddddd;">
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
			<div class="col-xs-2.2" style="display: inline;">
				<div class="input-group">
				  <span class="input-group-addon" >上报类型:</span>
				  <select class="form-control" id="busineType">
				  </select>
				</div>
			</div>
			<div class="col-xs-2.2" style="display: inline;margin-left:8px; ">
				<div class="input-group">
					<div class="input-group-addon">处理状态:</div>
					<select class="form-control" id="type">
			          <option disabled="disabled" selected="selected" value="">请选择</option>
			          <option value="">全部</option>
	      	          <option value="1">已处理</option>
	      	          <option value="2">未处理</option>
	      	          <option value="3">处理中</option>
	      	          <option value="4">无效</option>
	      	          <option value="5">执法</option>
                    </select>
				</div>
			</div>
			<button id="queryBusine" class="btn btn-primary" style="background-color:#0ab1f8;border: 0px;" type="button" >
				<span class="glyphicon glyphicon-search " ></span>&nbsp;查&nbsp;询
			</button>
			<button id="printBusine" class="btn btn-primary" style="background-color:#0ab1f8;border: 0px;" type="button" >
				<span class="glyphicon glyphicon-search " ></span>&nbsp;打&nbsp;印
			</button>
		</div>
	</form>
</div>
  <table id="businetable" border="1" style="width:94%;margin:10px 3% 10px;text-align: center;border-collapse:collapse;border-spacing:0;border-left:1px solid #888;border-top:1px solid #888;"  cellspacing="0">
   <caption style="text-align: center;">业务信息统计报表</caption>
       <thead>
            <tr>
			  <th class="td1">事件编号</th>        
              <th class="td1">事件来源</th> 
              <th class="td1">事件类型</th>   
              <th class="td1">上报人</th>     
              <th class="td2">发生地址</th>     
              <th class="td3">事件描述</th>     
              <th class="td4">上报时间</th>    
            </tr>
       </thead>
       <tbody id="busineList"  style="display:block;overflow:hidden;overflow-y:scroll;"> 
       </tbody>
       <tfoot></tfoot>
  </table>