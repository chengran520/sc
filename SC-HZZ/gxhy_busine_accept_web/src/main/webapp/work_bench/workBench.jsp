<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<jsp:include page="/common/base/include_BaseCommon.jsp"></jsp:include>
<link href="<%=request.getContextPath() %>/work_bench/css/workBench.css" rel="stylesheet">
<link href="<%=request.getContextPath() %>/common/css/commonView.css" rel="stylesheet">
<script type="text/javascript" src="workBench.js"></script>
<script type="text/javascript" src="workBenchChart.js"></script>
<script type="text/javascript">
 	var WEB_ROOT = "<%=request.getContextPath() %>";
 	var username="<%=session.getAttribute("username")%>";
</script>
<div class="headerDiv" id="headerDiv" style="height:40px;">
	<div class="header-content">
		<h2>
			<i class="fa icon-th-large"></i>
			<c>工作台</c>
			<span ></span>
		</h2>
	</div> 
</div>
<div class="tab_div">
	<div class="row">
           <ul>
               <li>
                   <div class="col-xs-2 col-o">
                       <div class="card blue">
                           <span>本月全部事件</span>
                           <p ><a href="../busine/busine.jsp" style="color: #439fde;float: left;" id="totalEventCount">0 件</a></p>
                       </div>
                   </div>
               </li>
               <li>
                   <div class="col-xs-2 col-o">
                       <div class="card green">
                           <span>河流数量</span>
                           <p ><a href="../data_center/water/riverway/riverway.jsp" style="color: #1bbc98;float: left;" id="totalReachCount">0 条</a></p>
                       </div>
                   </div>
               </li>
               <li>
                   <div class="col-xs-2 col-o">
                       <div class="card yellow">
                           <span>本月总巡河数</span>
                           <p ><a href="../routine_work/sub_routine_work/subRoutineView.jsp" style="color: #7B68EE;float: left;" id="totalPatrolCount">0 次</a></p>
                       </div>
                   </div>
               </li>
               <li>
                   <div class="col-xs-2 col-o">
                       <div class="card red">
                           <span>本月投诉总数</span>
                           <p ><a href="../rank_top/rankView.jsp" style="color: #e84c3d;float: left;" id="totalMicroCount">0 次</a></p>
                       </div>
                   </div>
               </li>
               <li>
                   <div class="col-xs-2 col-o">
                       <div class="card green_o">
                           <span>本月河长使用APP情况</span>
                           <p ><a href="javascript:currentMonthUse()" style="color: #36b4c5;float: left;" id="totalUseCount">0 人</a></p>
                       </div>
                   </div>
               </li>
               <li>
                   <div class="col-xs-2 col-o">
                       <div class="card pink">
                           <span>本月通知公告</span>
                           <p ><a href="../notice_issued/noticeView.jsp" style="color: #EE82EE;float: left;" id="totalProjectCount">0 项</a></p>
                       </div>
                   </div>
               </li>
           </ul>
       </div>
	<div class="one_div">		
		<div class="tb_div">
			<p class="chart_p"><img  src="image/column.png" style="margin-top: -6px;" ><span>事件汇总</span></p>
			<div id="initChartsj" style="height: 240px;border-top: 1px solid #DBDBDB;"></div>
		</div>
		<div class='tb_div'>
			<p class="chart_p"><img  src="image/column.png" style="margin-top: -6px;" ><span>事件来源</span></p>
			<div id="initChartdf" style="height: 240px;border-top: 1px solid #DBDBDB;"></div>
		</div>
		<div class='tb_div'>
			<p class="chart_p"><img  src="image/column.png" style="margin-top: -6px;" ><span>投诉统计</span></p>
			<div id="initChartzf" style="height: 240px;border-top: 1px solid #DBDBDB;"></div>
		</div>
	</div>
	<div class="one_div">
		<div class="tb_div">
			<p class="tab_caption tb-sx"><i class="fa fa-clock-o" style="padding-right: 8px;"></i><span>业务受理</span><span class="work-moer" onclick="deskMap.workMoreInfo(1)">更多</span></p>
			<div class="div_ul">
				<ul class="one_ul" id="one_ul"></ul>
			</div>
		</div>
		<div class="tb_div">
			<p class="tab_caption tb-dc"><i class="fa fa-check-square-o" style="padding-right: 8px;"></i><span>制度文案</span><span class="work-moer" onclick="deskMap.workMoreInfo(2)">更多</span></p>
			<div class="div_ul div_dc">
				<ul class="one_ul" id="file"></ul>
			</div>
		</div>
		<div class="tb_div">
			<p class="tab_caption tb-hy"><i class="fa fa-video-camera" style="padding-right: 8px;"></i><span>联席会议</span><span class="work-moer" onclick="deskMap.workMoreInfo(3)">更多</span></p>
			<div class="div_ul div_dc">
				<ul class="one_ul" id="lxhy">
				</ul>
			</div>
		</div>
	</div>
	<div class="one_div" style="margin-bottom: 10px;">
			<div class="tb_div" >
				<p class="tab_caption tb-sz"><i class="fa fa-tint" style="padding-right: 8px;"></i><span>水质监测</span><span class="work-moer" onclick="deskMap.workMoreInfo(4)">更多</span></p>
				<div class="div_ul">
					<ul class="one_ul" id='sz'>
					</ul>
				</div>
			</div>
			<div class="tb_div">
				<p class="tab_caption tb-tz"><i class="fa fa-volume-up" style="padding-right: 8px;"></i><span>通知公告</span><span class="work-moer"></span> </p>
				<div class="div_ul div_dc">
					<ul class="one_ul" id='tzgg'>
					</ul>
				</div>
			</div>
			<div class="tb_div">
				<p class="tab_caption tb-zf"><i class="fa fa-rebel" style="padding-right: 8px;"></i><span>执法监管</span><span class="work-moer" onclick="deskMap.workMoreInfo(6)">更多</span></p>
				<div class="div_ul div_dc">
					<ul class="one_ul" id='zfjg'></ul>
				</div>
			</div>
		</div>
</div>