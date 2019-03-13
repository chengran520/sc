<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<jsp:include page="/common/base/include_BaseCommon.jsp"></jsp:include>
<link href="<%=request.getContextPath() %>/common/css/commonView.css" rel="stylesheet">
<link href="<%=request.getContextPath() %>/busine_accept/css/busineView.css" rel="stylesheet">
<script type="text/javascript" src="busineChart.js"></script>
<script type="text/javascript" src="busineView.js"></script>
<script src="<%=request.getContextPath() %>/filemanage/projectCopywriter/projectFile.js"></script> 
<script type="text/javascript">
 	var WEB_ROOT = "<%=request.getContextPath() %>";
</script>
<div class="headerDiv" id="headerDiv">
	<div class="header-content">
		<h2>
			<i class="fa icon-th-large"></i>
			<c>业务受理</c>
			<span ></span>
		</h2>
	</div> 
</div>
<div class="tab_div">
	<div class="row gray-bg overViewWrap">
		<div class="row" style="margin-bottom: 10px;">
	 		<ul class="panel_cont">
	 			<li class="sta_total"><img src="<%=request.getContextPath() %>/common/images/bussine/jr.png" ><span><i id="img_count"></i>今日事件</span></li>
	 			<li class="warn"><img src="<%=request.getContextPath() %>/common/images/bussine/dc.png"><span><i id="img_stay"></i>待处理事件</span></li>
	 			<li class="normal"><img src="<%=request.getContextPath() %>/common/images/bussine/yc.png"><span><i id="img_complte"></i>已处理事件</span></li>
	 			<li class="prompt"><img src="<%=request.getContextPath() %>/common/images/bussine/zf.png" ><span><i id="img_law"></i>执法事件</span></li>
	 			<li class="fault"><img src="<%=request.getContextPath() %>/common/images/bussine/wj.png" ><span><i id="img_bak"></i>待处理文案</span></li>
	 			<li class="reult"><img src="<%=request.getContextPath() %>/common/images/bussine/pro.png"><span><i id="img_mq"></i>通知公告</span></li>
	 		</ul>
	 	</div>
	</div>
<!-- 	<div class="div_chart_sj"> -->
<!-- 		<div id="initChartsj" style="height: 200px;"></div> -->
<!-- 	</div> -->
<!-- 	<div class='div_chart_zf'> -->
<!-- 		<div id="initChartzf" style="height: 200px;"></div> -->
<!-- 	</div> -->
	<div class="table_div_db">
		<table class="table table-hover"  >
		  <caption class="tab_caption"><i class="fa fa-clock-o" style="padding-right: 8px;"></i><span>待处理事项</span><!-- <span class="tab_move" >更多</span> --></caption>
		  <thead>
		    <tr>
		      <th class="tb_tr_th">待办事项</th>
		      <th>接收时间</th>
		      <th>报送人员</th>
		      <th>操作</th>
		    </tr>
		  </thead>
		  <tbody id="tb_bus_db"></tbody>
		</table>
	</div>
	
	<div class="tb_div_yc">
	<table class="table table-hover" style="width: 95%;margin-left: 18px;margin-top:1px;">
		  <caption class="tab_caption_yc"><i class="fa fa-check-square-o" style="padding-right: 8px;"></i><span>处理事项</span><!-- <span class="tab_move_yc" >更多</span> --></caption>
		  <thead>
		    <tr>
		      <th class="tb_tr_th">处理事项</th>
		      <th>接收时间</th>
		      <th>报送人员</th>
		      <th>处理时间</th>
		      <th>处理人员</th>
		      <th>处理过程</th>
		    </tr>
		  </thead>
		  <tbody id="tb_bus_yb"></tbody>
		</table>
	</div>
	<div class="tb_div_zf">
		<table class="table table-hover" style="width: 97%;margin-left: 18px;margin-top:1px;">
		  <caption class="tab_caption_zf"><i class="fa fa-rebel" style="padding-right: 8px;"></i><span>执法监管</span><!-- <span class="tab_move_zf" >更多</span> --></caption>
		  <thead>
		    <tr>
		      <th class="tb_tr_th">执法事件</th>
		      <th>执法制度文件</th>
		      <th>上报时间</th>
		      <th>上报人员</th>
		      <th>建义执法部门</th>
		      <th>备注</th>
		      <th>操作</th>
		    </tr>
		  </thead>
		  <tbody id="tb_bus_zf">
		  </tbody>
		</table>
	</div>
	<div class="tb_div_tz">
		<table class="table table-hover" style="width: 95%;margin-left: 18px;margin-top:1px;">
		  <caption class="tab_caption_tz"><i class="fa fa-commenting" style="padding-right: 8px;"></i><span>通知公告</span><!-- <span class="tab_move_tz" >更多</span> --></caption>
		  <thead>
		    <tr>
		      <th class="tb_tr_th">通知内容</th>
		      <th>通知时间</th>
		      <th>发送人员</th>
		    </tr>
		  </thead>
		  <tbody id="tb_bus_gg">
		  </tbody>	
		</table>
	</div>
	<div class="tb_div_wj">
		<table class="table table-hover" style="width: 98%;margin-left: 18px;margin-top:1px;">
		  <caption class="tab_caption_wa"><i class="fa fa-folder-open" style="padding-right: 8px;"></i><span>待处理文案文件</span><span class="tab_move_wa" >更多</span></caption>
		  <thead>
		    <tr>
		     <!--  <th class="tb_tr_th">文件编号</th> -->
		      <th>文件名称</th>
		      <th>文件类型</th>
		      <th>接收时间</th>
		      <th>审批人员</th>
		      <!-- <th>备注</th> -->
		      <th>操作</th>
		    </tr>
		  </thead>
		  <tbody id="tb_bus_wj">
		  </tbody>
		</table>
	</div>
</div>
<div class="modal fade" id="busineModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
	<div class="modal-dialog" role="document">
		<div class="modal-content" style="width: 837px;margin-left:-111px;">
			<div class="modal-header" style="padding:8px;">
				<button type="button" class="close" data-dismiss="modal" aria-label="Close">
					<span aria-hidden="true" style="font-size: 32px;margin-right: 10px;">×</span>
				</button>
				<h4 class="modal-title" id="myModalLabel"><span id="move_traject_span"></span>绩效审核</h4>
			</div>
		 	<div style="margin: 6px 30px;color: #707070">
				<form class="form-horizontal" role="form" id="merit_data_info">
					<div class="form-group">
						<label class="col-xm-1 control-label" style="font-size: 20px;margin-left: 200px;">
						<span id="merit_context"></span>
						<input type="hidden" id="busine_cd">
						</label>
					</div>
					<div class="form-group">
						<label for="inputPassword" class="col-sm-2 control-label"><i class="fa fa-asterisk" style="font-size: 8px;margin: 3px; padding: 0px;color: red;"></i>巡检工作内容</label>
						<div class="col-sm-4">
							<textarea class="form-control" id="meritDesc" rows="6" disabled="disabled"></textarea>
						</div>
						<label for="inputPassword" class="col-sm-2 control-label"><i class="fa fa-asterisk" style="font-size: 8px;margin: 3px; padding: 0px;color: red;"></i>主要解决问题</label>
						<div class="col-sm-4">
							<textarea class="form-control" id="solveProblem" rows="6" disabled="disabled"></textarea>
						</div>
					</div>
					<div class="form-group">
						<label for="inputPassword" class="col-sm-2 control-label"><i class="fa fa-asterisk" style="font-size: 8px;margin: 3px; padding: 0px;color: red;"></i>未解决问题</label>
						<div class="col-sm-4">
							<textarea class="form-control" id="unSolveProblem" rows="6"  disabled="disabled"></textarea>
						</div>
						<label for="inputPassword" class="col-sm-2 control-label"><i class="fa fa-asterisk" style="font-size: 8px;margin: 3px; padding: 0px;color: red;"></i>巡检执法问题</label>
						<div class="col-sm-4">
							<textarea class="form-control" rows="6" id="lawProblem" disabled="disabled"></textarea>
						</div>
					</div>
					<div class="form-group">
						<label for="inputPassword" class="col-sm-3 control-label"><i class="fa fa-asterisk" style="font-size: 8px;margin: 3px; padding: 0px;color: red;"></i>下个月计划</label>
						<div class="col-sm-8">
							<textarea class="form-control" rows="6" id="nextMonthPlan" disabled="disabled"></textarea>
						</div>
					</div>
					<div class="form-group">
						<label for="inputPassword" class="col-sm-3 control-label">上级河长评价</label>
						<div class="col-sm-8">
							<textarea class="form-control" id="countent" rows="6" placeholder="填写审核及评价结果..." ></textarea>
						</div>
					</div>
					<div class="form-group">
						<label for="disabledTextInput" class="col-sm-3 control-label">绩效评分</label>
						<div class="col-sm-8">
						    <label class="radio-inline">
						        <input type="radio"  id="optionsRadios1" name="optionsRadiosinline"  value="1" > 优秀
						    </label>
						    <label class="radio-inline">
						        <input type="radio"  id="optionsRadios2" name="optionsRadiosinline" value="2" > 良好
						    </label>
						    <label class="radio-inline">
						        <input type="radio" id="optionsRadios3" name="optionsRadiosinline"  value="3" > 合格
						    </label>
						    <label class="radio-inline">
						        <input type="radio" id="optionsRadios4" name="optionsRadiosinline" value="4" > 不合格
						    </label>
						</div>
					</div>
					<div style="background-color: #FFFFFF;">
							<div style="padding: 10px;border-bottom: 1px solid #dddddd;text-align:center;">
								<button  class="btn btn-primary" id="updateBusine" type="button" style="background-color: #5CB75C;border: 0px;">
									<span class="glyphicon glyphicon-saved "></span>&nbsp;处&nbsp;理
								</button>
								<button class="btn btn-primary" type="button" id="returnMerit" style="background-color: #BA55D3;border: 0px;margin-left: 66px;">
									<span class="glyphicon glyphicon-log-out " ></span>&nbsp;转&nbsp;交
								</button>
							</div>
					</div>
					<div class="form-group"></div>
				</form>
			</div>
		</div>
	</div>
</div>


<!-- 详情 -->
<div class="modal fade" id="project_model" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
	<div class="modal-dialog" role="document">
		<div class="modal-content" style="overflow-y: auto;overflow-x: hidden;">
			<div class="modal-header" style="padding:8px;">
				<button type="button" class="close" data-dismiss="modal" aria-label="Close">
					<span aria-hidden="true" style="font-size: 32px;margin-right: 10px;">×</span>
				</button>
				<h4 class="modal-title" id="myModalLabel">基本信息</h4>
			</div>
			<form class="form-horizontal" role="form" >
				  <div class="form-group" style="padding-top: 9px;margin-bottom:5px;"> 
				        <input type="hidden" value="" id="uuid">
					    <label class="col-sm-3 control-label" style="padding-top: 0px;padding-left:10px;">项目名称：</label>
					    <div class="col-sm-6">
					     	<p class="label-control" id="projectName1"></p>  
					    </div>
				  </div>
				   <div class="form-group" style="padding-top: 9px;margin-bottom:5px;"> 
					    <label class="col-sm-3 control-label" style="padding-top: 0px;padding-left:10px;">项目类型：</label>
					    <div class="col-sm-6">
					     	<p class="label-control" id="type1"></p>  
					    </div>
				  </div>
				  <div class="form-group" style="margin-bottom:5px;">
					    <label class="col-sm-3 control-label" style="padding-top: 0px;padding-left:10px;">负责人：</label>
					    <div class="col-sm-6">
					     	<p class="label-control" id="manager1"></p>  
					    </div>				    
				 </div>
				 <div class="form-group" style="margin-bottom:5px;">
					    <label class="col-sm-3 control-label" style="padding-top: 0px;padding-left:10px;">参与人：</label>
					    <div class="col-sm-6">
					     	<p class="label-control" id="affiliaated1"></p>  
					    </div>
			     </div>
			     <div class="form-group" style="margin-bottom:5px;">
			    	<label class="col-sm-3 control-label" style="padding-top: 0px;padding-left:10px;">审批人：</label>
				    <div class="col-sm-6">
				     	<p class="label-control" id="approveMen1"></p>  
				    </div>
				 </div>
				  <div class="form-group" style="margin-bottom:5px;">
			    	<label class="col-sm-3 control-label" style="padding-top: 0px;padding-left:10px;">项目时间：</label>
				    <div class="col-sm-6">
				     	<p class="label-control" id="time1"></p>  
				    </div>
				 </div>
			    <div class="form-group" style="margin-bottom:5px;">  
				    <label class="col-sm-3 control-label" style="padding-top: 0px;padding-left:10px;">项目内容：</label>
				    <div class="col-sm-8">
				     	<p class="label-control" id="describe1"></p>  
				    </div>
			    </div>
			    <div style="background-color: #FFFFFF;">
					<div style="padding: 10px;border-bottom: 1px solid #dddddd;text-align:center;">
						<button  class="btn btn-primary" id="updateProject" type="button" style="background-color: #5CB75C;border: 0px;text-align:center;">
							<span class="glyphicon glyphicon-saved "></span>&nbsp;审&nbsp;批
						</button>
					</div>
			  </div>
		    </form>
		</div>
	</div>
</div>