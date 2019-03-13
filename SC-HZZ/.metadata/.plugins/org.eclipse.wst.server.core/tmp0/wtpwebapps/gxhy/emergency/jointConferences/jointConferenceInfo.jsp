<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@page import="org.apache.shiro.SecurityUtils"%>
<jsp:include page="/common/base/include_BaseCommon.jsp"></jsp:include>
<link href="<%=request.getContextPath() %>/common/css/commonView.css" rel="stylesheet">
<link href="<%=request.getContextPath() %>/emergency/jointConferences/jointConference.css" rel="stylesheet">
<link rel="stylesheet" href="<%=request.getContextPath()%>/css/public.css" >   
<link  href="<%=request.getContextPath()%>/css/bootstrapStyle.css"  rel="stylesheet">
<script src="<%=request.getContextPath()%>/module/js/jquery.ztree.core.js"></script>
<script src="<%=request.getContextPath()%>/module/js/jquery.ztree.excheck.min.js"></script>
<script src="<%=request.getContextPath() %>/emergency/jointConferences/meeting.js"></script>
<script src="<%=request.getContextPath() %>/emergency/jointConferences/ztreeMetting.js"></script>
<script type="text/javascript">
	var useradcd = '<%=SecurityUtils.getSubject().getSession().getAttribute("useradcd")%>';
	var username = '<%=SecurityUtils.getSubject().getSession().getAttribute("username")%>';
 	var WEB_ROOT = "<%=request.getContextPath() %>";
 	var paramTp = "<%=request.getParameter("tp")%>";
</script>
<div style="height: 36px;" id="msg_headerDiv">
	<div class="header-content" style="height: 36px;">
		<h2 class="paramTp1">
			<i class="fa icon-th-large"></i>
			<c><a style="text-decoration: none;color:#000;" href="<%=request.getContextPath()%>/emergency/jointConferences/jointConferenceInfo.jsp">联席会议</a></c>
		</h2>
		<h2 class="paramTp2">
			<i class="fa icon-th-large"></i>
			  <c>
				<a style="text-decoration: none;" href="javascript:history.back(-1)">工作台</a>
				<span style="margin-left: 5px;margin-right: 5px;">></span>
				联席会议
			 </c>
		</h2>
	</div> 
</div>
<div class="container" style="width: 100%;">
	 	<div style="float: left;width:10%;height: 100%;overflow-x:hidden;overflow-y:auto;">
	 		<div class="hy_div" style="background-color: #66CD66;" id="totalMeeting"><a>全部会议</a></div>
	 		<div class="hy_div" style="background-color: #0ab1f8;" id="nostartMeeting"><a>未开始会议</a></div>
	 		<div class="hy_div" style="background-color: #00CD99;" id="goingMeeting"><a>进行中会议</a></div>
	 		<div class="hy_div" style="background-color: #CDCDCD;" id="endMeeting"><a>已结束会议</a></div>
       </div>
       <div style="float: left;width:90%;height: 100%;overflow-y:auto;overflow-x:hidden;border-left: 1px solid #eee;text-indent: 5px;">
       	  <div style="height:45px;line-height: 45px;" class="form-inline" >
		  		<div class="form-group">
					 <label for="createTm">&nbsp;发起时间:&nbsp;</label>
					 <input id="applyTm" type="text" class="form-control" style="margin-right:10px;">
				</div>
				<button id="query_meeting" class="btn btn-primary" style="background-color:#0ab1f8;border: 0px;margin:-4px 0 0 10px;" type="button" >
				  <span class="glyphicon glyphicon-search" ></span>&nbsp;查&nbsp;询
				</button>
				<button  id="insert_meeting" class="btn btn-primary" data-toggle="modal"  type="button" style="background-color: #43CD80;margin-top:-4px;border: 0px;" >
					<span class="glyphicon glyphicon-plus" ></span>&nbsp;发&nbsp;起
				</button>	
				<button  id="refreshMeeting"   class="btn btn-primary" type="button" style="background-color:#EE82EE;border: 0px;margin-top:-4px;">
					<span class="glyphicon glyphicon-refresh" ></span>&nbsp;刷&nbsp;新
				</button>		   
		  </div>
		  <div style="width:100%;padding:10px 0px 0px 10px;"  id="eachMeeting">		 	     
		  </div>
      </div>
</div>

<!--发起会议 -->
<div class="modal" id="MeetingAdd" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true" style="overflow-y: hidden;">
	<div class="modal-dialog">
		<div class="modal-content" style="width:750px;heigth:auto;">
			<div class="modal-header" style="padding:10px;background-color: #009f95;color: #fff;">
				<button type="button" class="close" data-dismiss="modal" aria-label="Close">
					<span aria-hidden="true" style="font-size: 32px;margin-right: 10px;">×</span>
				</button>
				<h4 class="modal-title" id="myModalLabel">发起会议</h4>
			</div>
			<div class="modal-body">
				<form class="form-horizontal" role="form" id="form_data_user">
				   <input class="form-control" name="uuid" id="uuid" type="hidden">
				   <div class="form-group" style="margin-top: 14px;" id="userDiv">
					   <label class="col-sm-3 control-label"><span style="color: red;" id="stat_span">★</span>&nbsp;&nbsp;会议名称</label>
					   <div class="col-sm-7">
						  <input class="form-control" name="meetingName" id="meetingName" type="text" placeholder="输入会议名称" maxlength="30">
					  </div>
				  </div>
				  <div class="form-group">
					  <label class="col-sm-3 control-label"><span style="color: red;">★</span>&nbsp;&nbsp;会议地址</label>
					 <div class="col-sm-7">
					     <input class="form-control" name="venue" id="venue" type="text" placeholder="输入会议地址" maxlength="50">
					</div>
			      </div>
				 　 <div class="form-group">
                     <label class="col-sm-3 control-label"><span style="color: red;">★</span>&nbsp;&nbsp;会议参会人</label>
                      <div class="col-sm-7" id="clickBtn">
                         <div>
						    <span  class='titlespan'>石城县成员单位</span>
						    <span  class='titlespan' style="padding-left:115px;">处理人员</span>
						</div>    
						<div class="col-xs-5" style="margin-top:10px;border: 1px solid #000;padding-right:0px;">
					        <ul id="meetingZtree"  class="ztree" style="margin-top:0;overflow: auto;height:300px">
					        </ul>
					    </div>
					    <div  class="col-xs-1"  style="margin-top:200px;margin-right:15px;"> 
					       <img src="<%=request.getContextPath()%>/common/images/bussine/addicon.jpg" style="width:45px;height:45px;margin-left: -14px;">
					    </div>
					    <div class="col-xs-5" style="margin-top:10px;border: 1px solid #000;padding-right:0px;">
					       <input  id="resultUser" type="hidden" value="">
					       <ul class="ztree" style="margin-top:0;overflow: auto;height:300px" id="busineUserName"> 
					       </ul>
					    </div>
                       </div> 
                  </div>
			      <div class="form-group">
					  <label class="col-sm-3 control-label"><span style="color: red;">★</span>&nbsp;&nbsp;会议使用时间</label>
					   <div class="col-sm-9" style="padding-left: 0px;">
							<div>
							   <div class="col-sm-4">
					                <input class="form-control" name="meetingStm" id="meetingStm" type="text"  placeholder="开始时间">
					           </div>
					           <div class="col-sm-1" style="font-size:20px;">
					            ~
					           </div>
							   <div class="col-sm-4">
					              <input class="form-control" name="meetingEtm" id="meetingEtm" type="text"  placeholder="结束时间">
					            </div>
							</div>
					  </div>
			      </div>
			   </form>
			</div>
			<div class="modal-footer">
			    <button class="btn btn-default btns" type="button" data-dismiss="modal"  style="color: #333;background-color: #fff;border-color: #adadad;">
					&nbsp;关&nbsp;闭
				</button>
				<button  class="btn btn-default btns" id="saveMeeting" type="button">
				    &nbsp;保&nbsp;存
				</button>
				
			</div>
		</div>
	</div>
</div>
<script type="text/javascript">
if(parseInt(paramTp)){
	$(".paramTp1").hide();
	$(".paramTp2").show();
}
</script>