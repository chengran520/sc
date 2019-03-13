<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<jsp:include page="/common/base/include_BaseCommon.jsp"></jsp:include>
<link href="<%=request.getContextPath() %>/common/css/commonView.css" rel="stylesheet">
<link href="<%=request.getContextPath() %>/data_center/water/quality/css/quality.css" rel="stylesheet">
<script src="<%=request.getContextPath() %>/data_center/water/quality/quality_chart.js"></script>
<script src="<%=request.getContextPath() %>/data_center/water/quality/quality_info.js"></script>
<script type="text/javascript">
 	var WEB_ROOT = "<%=request.getContextPath()%>";
 	var paramStcd = "<%=request.getParameter("stcd")%>";
	var paramTp = "<%=request.getParameter("tp")%>";
</script>
 <div style="height:13%;" id="headerRiverdiv">
	<div class="header-content" >
		<h2 class="paramTp1">
			<i class="fa icon-th-large"></i>
			<c><a style="text-decoration: none;color:#000;" href="<%=request.getContextPath()%>/data_center/water/quality/quality_info.jsp">水质监测</a></c>
		</h2>
		
		<h2 class="paramTp2">
			<i class="fa icon-th-large"></i>
			  <c>
				<a style="text-decoration: none;" href="javascript:history.back(-1)">工作台</a>
				<span style="margin-left: 5px;margin-right: 5px;">></span>
				水质监测
			 </c>
		</h2>
	</div> 
 </div>
 <div style="background-color: #FFFFFF;"class="" id="river_info_r">
		<form class="form-inline" method="post">
			<div style="padding: 10px;border-bottom: 1px solid #dddddd;">
				<div class="col-xs-2.2" style="display: inline; ">
					<div class="input-group">
						<div class="input-group-addon">采集时间:</div>
						<input id="stm" type="text" class="form-control"  style="width: 180px;">
					</div>
				</div>
				<button id="queryRiver" class="btn btn-primary" style="background-color:#0ab1f8;border:0px;" type="button" >
					<span class="glyphicon glyphicon-search" ></span>&nbsp;查&nbsp;询
				</button>
				<button  id="refreshQuslity"   class="btn btn-primary" type="button" style="background-color:#EE82EE;border: 0px;">
					<span class="glyphicon glyphicon-refresh" ></span>&nbsp;刷&nbsp;新
				</button>
			</div>
		</form>
	</div>
    <div id="chart_div" style="height: 280px;">
    	<div  style="float: left;width: 45%;border-right: 1px solid #dbdbdb;border-bottom: 1px solid #dbdbdb;">
	    	<div style="height: 32px;" id="chart-div-span">
	    		<span class="chart-span chart-1 active" id="wt">WT</span>
	    		<span class="chart-span chart-border" id="turb">TURB</span>
	    		<span class="chart-span chart-border" id="cond">COND</span>
	    		<span class="chart-span chart-border" id="ph">PH</span>
	    		<span class="chart-span chart-border chart-2" id="dox">DOX</span>
	    	</div>
    		<div id="initQualityChart" style="height: 240px;"></div>
    	</div>
   		<div style="border-bottom: 1px solid #dbdbdb;height: 100%;">
			<div class="qua_div ones nexts" id="qua_div_wt"> 
				<span class="rv_span" >WT</span><br>
				<span class="rv_span" >温度</span>
				<span class="qua-span span-1" id="wt_span"></span>
			</div>
			<div class="qua_div nexts" id="qua_div_turb">
				<span class="rv_span" >TURB</span><br>
				<span class="rv_span" >浊度</span>
				<span class="qua-span span-1 quaColor2" id="turb_span"></span>
			</div>
			<div class="qua_div nexts" id="qua_div_cond">
				<span class="rv_span nh">COND</span><br>
				<span class="rv_span" >电导率</span>
				<span class="qua-span span-1 quaColor3" id="cond_span"></span>
			</div>
			<div class="qua_div ones" id="qua_div_ph">
				<span class="rv_span" >PH</span><br>
				<span class="rv_span" >酸碱度</span>
				<span class="qua-span span-2 quaColor4" id="ph_span"></span>
			</div>
			<div class="qua_div" id="qua_div_dox"> 
				<span class="rv_span" >DOX</span><br>
				<span class="rv_span" >溶解氧</span>
				<span class="qua-span span-2 quaColor5"id="dox_span"></span>
			</div>
   		</div>
    </div>
    <table id="patrol_Quality"  style="text-overflow:ellipsis;">
		   <thead>
			 <tr>
	             <th field="stcd"  width="10" align="center">站点编码</th>
	             <th field="stnm" width="10" align="center">站点名称</th>
	             <th field="spt" width="10" align="center" formatter="QualityInfo.formatterDataTm">采集时间</th>
	             <th field="wt" width="10" align="center" formatter="QualityInfo.formatterWt">温度(WT)</th> 
	             <th field="turb"  width="10" align="center" formatter="QualityInfo.formatterTurb">浊度(TRUB)</th>
	             <th field="cond"  width="10" align="center" formatter="QualityInfo.formatterCond">电导率(COND)</th>
	             <th field="ph"  width="10" align="center">酸碱度(PH)</th>
	             <th field="dox"  width="10" align="center" formatter="QualityInfo.formatterDox">溶解氧(DOX)</th>
			</tr>
		  </thead>
	   </table>
	
<script type="text/javascript">
if(parseInt(paramTp)){
	$(".paramTp1").hide();
	$(".paramTp2").show();
}
</script>