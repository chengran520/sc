<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<jsp:include page="/common/base/include_BaseCommon.jsp"></jsp:include>
<link href="<%=request.getContextPath() %>/common/css/commonView.css" rel="stylesheet">
<link rel="stylesheet" href="<%=request.getContextPath() %>/notice_issued/css/noticeView.css">
<link rel="stylesheet" href="<%=request.getContextPath() %>/notice_issued/css/style.css">
<link rel="stylesheet" href="<%=request.getContextPath() %>/common/ueditor/themes/default/css/ueditor.css">
<script src="<%=request.getContextPath() %>/common/ueditor/ueditor.config.js"></script>  
<script src="<%=request.getContextPath() %>/common/ueditor/ueditor.all.js"></script> 
<script type="text/javascript" src="<%=request.getContextPath() %>/notice_issued/noticeView.js"></script>
<script type="text/javascript" src="<%=request.getContextPath() %>/notice_issued/multiselect.js"></script>
<script type="text/javascript">
 	var WEB_ROOT = "<%=request.getContextPath() %>";
    var ue = UE.getEditor('container_msg');
</script>
<div style="height: 13%;" id="msg_headerDiv">
	<div class="header-content">
		<h2>
			<i class="fa icon-th-large"></i>
				<c><a style="text-decoration: none;" href="./noticeView.jsp">信息发布</a>
			<span ></span>
		</h2>
	</div> 
</div>
<div class="demo" id="div_msg" style="overflow: hidden;">
		<div class="row" style="margin: 7px 0px;">
			<div class="col-md-offset col-md-12">
				<div class="tab" role="tabpanel">
					<!-- Nav tabs -->
					<ul class="nav nav-tabs" role="tablist" id="tablist">
						<li role="presentation" class="select"><a href="#Section0" style="background-color: #03a9f5;color: #FFF" aria-controls="home" role="tab" data-toggle="tab"><i class="fa fa-commenting"></i>信息发布</a></li>
						<li role="presentation"><a href="#Section1" id='histy' style="color: #242424;" aria-controls="home"  role="tab" data-toggle="tab"><i class="fa fa-history"></i>历史信息</a></li>
					</ul>
					<!-- Tab panes -->
					<div class="tab-content">
						<div role="tabpanel" class="tab-pane fade in active" id="Section0">
							<form class="form-horizontal" id="formMsgSend">
								<div style="float: left;width: 55%;margin: 16px;">
										<div class="form-group">
											<label for="tbxReceiver" class="col-sm-2 control-label">
													选择人员：<span style="color: red">*</span>
											</label>
											<div class="col-sm-8">
											    <input type="hidden" name="receiveUserId" id="receiveUserId" value=""> 
												<input type="text" class="form-control" name="receiveUser" id="receiveUser" value="" require="true" datatype="Require" msg="必填项" placeholder="请选择发送人员" readonly="readonly" > 
													<span id="errmsg" style="color: red"></span>
											</div>
											<div class="col-sm-2" id="add">
												<a  style="color: #fd9701;text-decoration: none;"> <i class="fa fa-user-plus" style="font-size: 25px;"></i><span style="font-size: 17px;">添加</span></a>
											</div>
										</div>
										<div class="form-group">
											<label for="tbxContent" class="col-sm-2 control-label">信息类型：<span style="color: red">*</span></label>
											<div class="col-sm-10">
												<select class="form-control" id="newsType">	
												       <option disabled="" selected="" value="">请选择</option>
												       <option value="01">通知公告</option>
												       <option value="02">治水新闻</option>
												       <option value="03">新闻动态</option>									
											    </select>
											</div>
										</div>
										<div class="form-group">
											<label for="tbxContent" class="col-sm-2 control-label">标题内容：<span style="color: red">*</span></label>
											<div class="col-sm-10">
												<input id="msgTitle" class="form-control" name="msgTitle" max="60" datatype="CharLen" msg="标题字符长度不能超过60个" placeholder="请填写标题内容">
											</div>
										</div>
										<div class="form-group">
											<label for="tbxContent" class="col-sm-2 control-label">发送内容：<span style="color: red">*</span></label>
											<div class="col-sm-10">											
												 <!-- 加载编辑器的容器 -->
	    										 <script id="container_msg" name="content" type="text/plain" style="width:125%;border-width: 0 0 1px 0;"></script>
											</div>
										</div>
										<div class="form-group">
											<div class="col-sm-offset-2 col-sm-10">
												<button id="btnSaveMsg"  type="button" class="btn btn-default btns" >&nbsp;保&nbsp;存</button>
											</div>
										</div>
								</div>
							</form>
						</div>
						<div class="tab-pane" id="Section1">
						</div>
						<div role="tabpanel" class="tab-pane" id="Section2">
							定时通知目前暂不开放.....
						</div>
					</div>
				</div>
			</div>
		</div>
</div>
<div style="display: none;width: 100%" id="div_histy">
	<table id="notice_catalog" style=" text-overflow:ellipsis;width: 100%">
			<thead>
				<tr>
		            <th field="msgTitle" width="50" align="center" formatter="noticeMap.infotitleFormatter">信息标题</th>
		            <th field="msgContent" width="50" align="center" halign="center" >信息内容</th>
		            <th field="sendTm" width="30" align="center" formatter="noticeMap.sendTimeFormatter">发送时间</th>
		            <th field="newsTypeNm"  width="40" align="center"  formatter="noticeMap.getnewsType">消息类型</th>
		            <th field="receiveUsers"  width="40" align="center"   formatter="noticeMap.formatUsers">接收人员</th>
				</tr>
			</thead>
		</table>
</div>
<!-- 用户增加 -->
<div class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
	<div class="modal-dialog" role="document">
		<div class="modal-content" style="height:500px;width:600px;overflow-y: auto;overflow-x: hidden;"  style="overflow-y: hidden;">
			<div class="modal-header" style="padding:10px;background-color: #009f95;color:#fff;">
				<button type="button" class="close" data-dismiss="modal" aria-label="Close">
					<span aria-hidden="true" style="font-size: 32px;margin-right: 10px;">×</span>
				</button>
				<h4 class="modal-title" id="myModalLabel">选择人员</h4>
			</div>
        <!-- 左右人员选择 -->
            <div class="row" style="margin-left:30px;margin-right:30px;">
			    <div class="col-xs-5" style="margin-top:10px;">
			        <div  class="selecteddiv">可选人员</div>
			        <select name="from[]" id="search" class="form-control" size="8" multiple="multiple" style="height:300px;">
			        </select>
			    </div>
			    <div class="col-xs-2">
			        <button type="button" id="search_rightAll" class="btn btn-block a"><i  style="color:white;"   class="glyphicon glyphicon-forward"></i></button>
			        <button type="button" id="search_rightSelected" class="btn btn-block a"><i style="color:white;" class="glyphicon glyphicon-chevron-right"></i></button>
			        <button type="button" id="search_leftSelected" class="btn btn-block a"><i style="color:white;"  class="glyphicon glyphicon-chevron-left"></i></button>
			        <button type="button" id="search_leftAll" class="btn btn-block a"><i style="color:white;"      class="glyphicon glyphicon-backward"></i></button>
			    </div>
			    
			    <div class="col-xs-5" style="margin-top:10px;">
			    <div class="selecteddiv">选择人员</div>
			        <select name="to[]" id="search_to" class="form-control" size="8" multiple="multiple" style="height:300px;"></select>
			    </div>
			</div>
			<div class="form-group" style="margin-top:15px;margin-right:40px;">
				<div style="text-align:right;">
					<button type="button" class="btn btn-default btns" data-dismiss="modal"  style="color: #333;background-color: #fff;border-color: #adadad;">
						&nbsp;关&nbsp;闭
					</button>
					<button  class="btn btn-default btns" id="addUser" type="button" style="border: 0px;background-color: #009f95;color:#fff;margin-left:5px;">
					    &nbsp;保&nbsp;存
					</button>
				</div>
		    </div> 
	   </div>
   </div>
 </div>