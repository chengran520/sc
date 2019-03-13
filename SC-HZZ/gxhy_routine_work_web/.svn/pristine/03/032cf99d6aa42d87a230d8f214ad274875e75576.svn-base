<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@page import="org.apache.shiro.SecurityUtils"%>
<jsp:include page="/common/base/include_BaseCommon.jsp"></jsp:include>
<link rel="stylesheet" href="<%=request.getContextPath()%>/css/public.css" >   
<link href="<%=request.getContextPath() %>/common/css/commonView.css" rel="stylesheet">
<link href="<%=request.getContextPath() %>/law_enforcement/css/playBox.css" rel="stylesheet">
<link href="<%=request.getContextPath() %>/law_enforcement/css/law.css" rel="stylesheet">
<link rel="stylesheet" href="css/flowChart.css" />
<script type="text/javascript" src="<%=request.getContextPath() %>/common/gis/js/api.js?v=2.0&ak=4j9eufpmmKzjMLo2l2Q3VvOBGCDDQC03"></script>
<script src="playBox.js"></script>
<script src="law_accept.js"></script>
<script src="<%=request.getContextPath()%>/common/js/contentPath/db.js"></script>
<script type="text/javascript">
 	var WEB_ROOT = "<%=request.getContextPath() %>";
 	var userId = '<%=SecurityUtils.getSubject().getSession().getAttribute("userId")%>';
 	var userjob = '<%=SecurityUtils.getSubject().getSession().getAttribute("userjob")%>';
 	var path = "<%=request.getScheme() + "://"+ request.getServerName() + ":" + request.getServerPort()%>";
</script>
<div class="headerDiv" id="LawheaderDiv">
	<div class="header-content">
		<h2>
			<i class="fa icon-th-large"></i>
			<c>执法受理</c>
			<span ></span>
		</h2>
	</div> 
	<div style="background-color: #FFFFFF;"class="" id="divLawQuery">
		<form class="form-inline" method="post">
			<div style="padding: 10px;border-bottom: 1px solid #dddddd;">
			    <div class="col-xs-1.5" style="display: inline;" id="adcd1_div">
					<div class="input-group">
						<div class="input-group-addon">事件类型：</div>
					    <select class="form-control" id="type"   class="form-control" style="width: 150px;">
					       <option value="" selected="selected">—— 全部   ——</option>
					        <option value="1">河长巡河 </option>
					        <option value="2">公众举报</option>
					    </select>
					</div>
				</div>
				 <div class="col-xs-1.5" style="display: inline; ">
					<div class="input-group">
						<div class="input-group-addon">执法时间:</div>
						<input id="time" type="text" class="form-control" style="width: 150px;">
					</div>
				</div>
				<div class="col-xs-1.5" style="display: inline;">
					<div class="input-group">
					  <span class="input-group-addon" >地点:</span>
					  <input type="text" class="form-control" id="keywordLaw"  placeholder="请输入关键字" style="width: 170px;">
					</div>
				</div>
				<button id="querylawAccept" class="btn btn-primary" style="background-color:#0ab1f8;border: 0px;margin-left:10px;" type="button" >
					<span class="glyphicon glyphicon-search " ></span>&nbsp;查&nbsp;询
				</button>
				<button  id="refreshlawAccept"   class="btn btn-primary" type="button" style="background-color:#EE82EE;border: 0px;">
					<span class="glyphicon glyphicon-refresh" ></span>&nbsp;刷&nbsp;新
				</button>
			</div>
		</form>
	</div>
</div>
<div class="demo" style="overflow: hidden;width: 55%;float: left;border-right: 1px solid #dbdbdb;">
	<div class="row">
		<div class="col-md-offset col-md-12">
			<div class="tab" role="tabpanel">
				<!-- Tab panes -->
				<div class="tab-content">
						<table id="lawAccept"  style=" text-overflow:ellipsis;">
							<thead>
								<tr>						            
						            <th field="lawId"  width="20" align="center" >案件编号</th>
	          						<th field="busineId" width="30" align="center" >事件来源</th>
						            <th field="busineAddress" width="50" align="center" >案件发生地点</th>
						            <th field="registerUserNm" width="20" align="center" >立案人员</th>
						            <th field="registerUserId" width="20" align="center" hidden="true">立案人员</th>
						            <th field="reportTm" width="35" align="center" formatter="lawAccept.formatterTM">立案时间</th>
						            <th field="handleTm" width="35" align="center" hidden="true">处理时间</th>
						            <th field="123" width="15" align="center" formatter="lawAccept.formatterDetail" >操作</th>
								</tr>
							</thead>
						</table>
					</div>
				</div>
			</div>
		</div>
	</div>
	<div class="law-div1">
		<div class="law-div-div1">
			<div style="height: 30px;border-bottom: 1px solid #dbdbdb;padding: 4px 0 0 8px;color:#228B22;letter-spacing: 1px;">案件详情</div>
			<div style="width: 100%">
				<div id="container">
					 <div id="playBox">
					    <div id="leftContent" onclick="lawAccept.next()">
					  		<img id="left_img"  style='cursor:pointer;' src='<%=request.getContextPath() %>/common/images/bussine/101.png'>
					 </div>
				  	</div>
				  	 
					<div id="rightContent">
						<div style="float: left;width:50%;">
							<p class="hzz_p pa">
								案件编号：<span id="lawId"></span>
							</p>
							<p class="hzz_p">案件来源：<span id="lawSource"></span></p>
							<p class="hzz_p">案件发生地点：<span id="lawAdres"></span></p>
							<p class="hzz_p pa">
								上报人员：<span id="reportUser"></span>
							</p>
							<p class="hzz_p pa">上报时间：<span id="reportTm"></span></p>
							<p class="hzz_p">上报人员电话：<span id="reportPh"></span></p>
							<p class="hzz_p">案件描述：<span id="lawNt"></span></p>
						</div>
						<div  style="float: left">
							<p class="hzz_p">案件限时：<span id="handleTmMit"></span></p>
							<p class="hzz_p">处理时长：<span id="shijian"></span></p>
							<p class="hzz_p">是否立案：<span id="isFiling"></span></p>
							<p class="hzz_p pa">立案人员：<span id="lianUser"></span></p>
							<p class="hzz_p pa">立案时间：<span id="lianTm"></span></p>
							<p class="hzz_p">是否结案：<span id="isFilClose"></span></p>
						</div>
					</div>
				</div>
			</div>
	</div>
	<div id="law-div2">
		<div style="float: left;width: 60%;" id="law-div-div2">
			<div style="height: 30px;border-bottom: 1px solid #dbdbdb;border-right: 1px solid #dbdbdb;padding: 4px 0 0 8px;color:#EE5C42;letter-spacing: 1px;">
				处理流程 
			</div>
			<div id="law-div-div3" style="overflow: auto;">
				<div class="flowChart">
					<!--左侧轴-->
					<div class="flowChart-left">
						<!--虚线-->
						<div class="dashed"></div>
					</div>
					<!--右侧内容-->
					<div class="flowChart-right">
					</div>
				</div>
			</div>
		</div>
		<div style="float: left;">
			<div style="height: 30px;border-bottom: 1px solid #dbdbdb;padding: 4px 0 0 8px;color:rgb(0, 136, 165);letter-spacing: 1px;">案件发生地点</div>
			<div id="mapDiv" style="position:absolute;"></div>
		</div>
	</div>
</div>

<div class="modal fade" id="handleLawModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true"   style="overflow-y: hidden;">
    <div class="modal-dialog" role="document">
        <div class="modal-content" style="width:500px;height:auto;">
            <div class="modal-header" style="padding:10px;background-color: #009f95;color: #fff;">
                <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                <h4 class="modal-title" id="myModalLabel" >处理</h4>
            </div>
            <div class="modal-body" style="height:330px;margin-left:10px;">
			  <form class="form-horizontal" role="form" id="form-update-pwd">
				   <input class="form-control" name="uuid" id="id-pwd" type="hidden">
				   <div class="form-group" style="margin-top: 14px;" id="userDiv">
					   <label class="col-sm-3 control-label">&nbsp;&nbsp;案件编码</label>
					   <div class="col-sm-7">
						  <input class="form-control" id="lawId_model" type="text" maxlength="12" style="width:300px;" disabled="disabled"> 
					   </div>
				  </div>
				  <div class="form-group">
					  <label class="col-sm-3 control-label">&nbsp;&nbsp;处理意见</label>
					  <div class="col-sm-7">
						 <textarea rows="10" cols="40" id="handleView"></textarea>
					   </div>
			      </div>
			   </form>
            </div>
           <div class="modal-footer">
                <button type="button" class="btn btn-default btns" data-dismiss="modal"  style="color: #333;background-color: #fff;border-color: #adadad;">
					&nbsp;关&nbsp;闭
				</button>
		        <button type="button" class="btn btn-default btns" id="updateLaw">保存</button>  
           </div>
        </div>
    </div>
</div>