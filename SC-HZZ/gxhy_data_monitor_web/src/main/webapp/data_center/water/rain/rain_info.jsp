<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<jsp:include page="/common/base/include_BaseCommon.jsp"></jsp:include>
<link href="<%=request.getContextPath() %>/common/css/commonView.css" rel="stylesheet">
<script src="<%=request.getContextPath() %>/data_center/water/rain/rain_chart.js"></script>
<script src="<%=request.getContextPath() %>/data_center/water/rain/rain_info.js"></script>
<link href="<%=request.getContextPath() %>/basicSite/css/basicSite.css" rel="stylesheet">
<script src="<%=request.getContextPath() %>/basicSite/basicSite.js"></script>
<script type="text/javascript">
 	var WEB_ROOT = "<%=request.getContextPath()%>";
 	var paramStcd = "<%=request.getParameter("stcd")%>";
</script>
 <div style="height:13%;" id="headerRiverdiv">
	<div class="header-content" >
		<h2>
			<i class="fa icon-th-large"></i>
			<c>雨情监测</c>
			<span ></span>
		</h2>
	</div> 
 </div>
 <div style="background-color: #FFFFFF;"class="" id="river_info_r">
 	<form class="form-inline" method="post" id="form_data_info">
			<div style="padding: 10px;border-bottom: 1px solid #dddddd;">
				<div class="col-xs-2.2" style="display: inline;">
					<div class="input-group">
					  <span class="input-group-addon" >测站信息:</span>
					  <input type="text" class="form-control" id="keyword"  placeholder="请输入编码或名称">
					</div>
				</div>
				<div class="col-xs-2.2" style="display: inline; ">
					<div class="input-group">
						<div class="input-group-addon">起始时间:</div>
						<input id="stm" type="text" class="form-control"   style="width: 190px;">
					</div>
				</div>
				<div class="col-xs-2.2" style="display: inline;">
					<div class="input-group">
						<div class="input-group-addon">结束时间:</div>
						<input id="etm"  type="text" class="form-control" style="width: 190px;">
					</div>
				</div>
				<button id="queryRiver" class="btn btn-primary" style="background-color:#0ab1f8;border:0px;" type="button" >
					<span class="glyphicon glyphicon-search" ></span>&nbsp;查&nbsp;询
				</button>
				<button id="export" class="export-excel btn btn-primary btn-xs" data-table="#nav_table" type="button" style="background-color:#FABC29;border:0px;">
					<span class="glyphicon glyphicon-download-alt" ></span>&nbsp;导&nbsp;出
				</button>
				<button  id="refreshRiver"   class="btn btn-primary" type="button" style="background-color:#EE82EE;border: 0px;">
					<span class="glyphicon glyphicon-refresh" ></span>&nbsp;刷&nbsp;新
				</button>
			</div>
	</form>
</div>
    <div id="initRainInfoChart">
    </div>
    <hr style="height:1px;margin: 0 0 0 0;background-color: #EEDFCC;">
	<table id="patrol_catalogRain"  style="text-overflow:ellipsis;">
	   <thead>
		 <tr>
             <th  id="stcd" field="stcd"  width="30" align="center">测站编码</th>
             <th field="stnm" width="40" align="center">测站名称</th>
             <th field="rvnm" width="40" align="center" >所属河流</th>
             <th field="addvnm" width="40" align="center" >行政区域</th>
             <th field="drp"  width="35" align="center" formatter="RainManager.formatterPptnVal">时段雨量</th>
             <th field="tm" width="45" align="center" formatter="RainManager.formatterDataRiverTm">最新采集时间</th>
             <!-- <th field="dyp" width="35" align="center" formatter="RainManager.formatterPptnVal">日雨量</th> -->
             <!-- <th field="dap" width="40" align="center" formatter="RainManager.formatterPptnVal">平均雨量</th> -->
		</tr>
	  </thead>
   </table>

