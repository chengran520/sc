<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<jsp:include page="/common/base/include_BaseCommon.jsp"></jsp:include>
<link href="<%=request.getContextPath() %>/common/css/commonView.css" rel="stylesheet">
<script src="<%=request.getContextPath() %>/routine_work/my_routine_work/myRoutineWork.js"></script>
<script type="text/javascript">
 	var WEB_ROOT = "<%=request.getContextPath() %>";
</script>    
<div class="headerDiv" id="myRoutine_headerDiv">
	<div class="header-content">
		<h2>
			<i class="fa icon-th-large"></i>
			<c>我的巡河日志</c>
			<span ></span>
		</h2>
	</div> 
	<div style="background-color: #FFFFFF;"class="" id="hydrologic_rain_rainQueryInfo_1">
		<form class="form-inline" method="post">
			<div style="padding: 10px;border-bottom: 1px solid #dddddd;">
				 <div class="col-xs-1.5" style="display: inline; ">
					<div class="input-group">
						<div class="input-group-addon">开始时间:</div>
						<input id="patrolStartTm" type="text" class="form-control" style="width: 180px;">
					</div>
				</div>
				 <div class="col-xs-1.5" style="display: inline; ">
					<div class="input-group">
						<div class="input-group-addon">结束时间:</div>
						<input id="patrolEndTm" type="text" class="form-control" style="width: 180px;">
					</div>
				</div>
				<button id="query_myRoutine" class="btn btn-primary" style="background-color: #0ab1f8;border: 0px;margin-left:10px;" type="button" >
					<span class="glyphicon glyphicon-search " ></span>&nbsp;查&nbsp;询
				</button>
				<button  id="exportRoutineWork"   class="btn btn-primary" type="button" style="background-color:#FABC29;border: 0px;">
						<span class="glyphicon glyphicon-download-alt" ></span>&nbsp;导&nbsp;出
				</button>
				<button  id="refreshRoutineWork"   class="btn btn-primary" type="button" style="background-color:#EE82EE;border: 0px;">
					<span class="glyphicon glyphicon-refresh" ></span>&nbsp;刷&nbsp;新
				</button>
			</div>
		</form>
	</div>
</div>
<table id="myRoutineWork"  style=" text-overflow:ellipsis;">
	<thead>
		<tr>
            <th field="uuid" hidden="true" width="1">主那家</th>
            <th field="patrolTm" width="40" align="center" formatter="myRoutineWork.formatterTm">巡河开始时间</th>
            <th field="patrolEndTm" width="40" align="center" formatter="myRoutineWork.formatterTm">巡河结束时间</th>
            <th field="patrolStartPoint" width="40" align="center" formatter="myRoutineWork.formatterAdress">巡河起点</th>
            <th field="patrolEndPoint" width="40" align="center" formatter="myRoutineWork.formatterAdress">巡河终点</th>           
            <th field="patrolTmLt" width="30" align="center"  formatter="myRoutineWork.formatterPatrolTmLt">巡河时长</th>
            <!-- <th field="patrolMileage" width="30" align="center"  formatter="myRoutineWork.formatterPatrolMileage">巡河里程</th> -->
            <th field="patrolMileage" width="30" align="center">巡河里程(米)</th>
            <th field="guiji" width="20" align="center" formatter="myRoutineWork.formatterTraject">巡河轨迹</th>
		</tr>
	</thead>
</table>