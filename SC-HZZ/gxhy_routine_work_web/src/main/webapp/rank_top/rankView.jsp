<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<jsp:include page="/common/base/include_BaseCommon.jsp"></jsp:include>
<link href="<%=request.getContextPath() %>/common/css/commonView.css" rel="stylesheet">
<link rel="stylesheet" href="<%=request.getContextPath() %>/rank_top/css/rank.css">
<script type="text/javascript" src="<%=request.getContextPath() %>/rank_top/rankView.js"></script>
<script type="text/javascript" src="<%=request.getContextPath() %>/rank_top/rankChart.js"></script>
<script type="text/javascript">
 	var WEB_ROOT = "<%=request.getContextPath() %>";
</script>
<div style="height: 13%;" id="merit_headerDiv">
	<div class="header-content">
		<h2>
			<i class="fa icon-th-large"></i>
			<c>投诉排行</c>
			<span ></span>
		</h2>
	</div> 
</div>
<div>
	<div class="info_div">
		<div class="info_div_div">
			<div class="info_div_data" style="line-height:90px;">
				<label class="div_div_lab1" >投诉总量</label>
				<label class="div_div_lab2 count_lab" >0次</label>
			</div>
			<div class="info_div_data" style="line-height:60px;">
				<label class="div_div_lab1" >&nbsp;&nbsp;&nbsp;已处理</label>
				<label class="div_div_lab2 colse_lab" >0次</label>
			</div>
			<div class="info_div_data" style="line-height:40px;">
				<label class="div_div_lab1" >&nbsp;&nbsp;&nbsp;未处理</label>
				<label class="div_div_lab2 not_lab" >0次</label>
			</div>
		</div>
	</div>
	<div style="float: left;width: 80%">
		<div id="initRankChart" style="height: 240px;float: left;width: 45%;border-right: 1px solid #DDD;padding-left: 20px;"></div>
		<div id="initRankChart2" style="height: 240px;float: left;width: 55%;"></div>
	</div>
</div>
<div class="div_rank_top">
	<table class="table table-condensed" id="rankTab" style="border-top: 1px solid #DDD;">
		<thead>
			<tr>
				<th class="tb_tr_th">排名</th>
				<th class="tb_tr_th">河湖编码</th>
				<th class="tb_tr_th">河湖名称</th>
				<th class="tb_tr_th sort_th active"><a href="javasrcipt:void(0)" id="tsl">投诉总量<i class="fa fa-long-arrow-down" ></i></a></th>
				<th class="tb_tr_th sort_th"><a href="javasrcipt:void(0)" id="ycl">已处理<i class="fa fa-long-arrow-down" ></i></a></th>
				<th class="tb_tr_th sort_th"><a href="javasrcipt:void(0)" id="wcl">未处理<i class="fa fa-long-arrow-down" ></i></a></th>
			    <th class="tb_tr_th sort_th"><a href="javasrcipt:void(0)" id="wyd">处理率<i class="fa fa-long-arrow-down" ></i></a></th>
				<th class="tb_tr_th">最新投诉时间</th>
			</tr>
		</thead>
		<tbody class="div_tab_tbody"  id="div_tab_tbody"></tbody>
	</table>
</div>

