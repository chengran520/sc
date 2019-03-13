<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<jsp:include page="/common/base/include_BaseCommon.jsp"></jsp:include>
<link href="<%=request.getContextPath() %>/common/css/commonView.css" rel="stylesheet">
<link href="<%=request.getContextPath() %>/emergency/jointConferences/videoConference/videoMetting.css" rel="stylesheet">
<script src="<%=request.getContextPath() %>/emergency/jointConferences/videoConference/videoMetting.js"></script>
<script type="text/javascript">
 	var WEB_ROOT = "<%=request.getContextPath() %>";
 	var uuid="<%=request.getParameter("uuid")%>";
 	var paramTp="<%=request.getParameter("tp")%>";
</script>
<div style="height: 13%;" id="msg_headerDiv">
	<div class="header-content">	
		<h2 class="paramTp1">
			<i class="fa icon-th-large"></i>
			<c><a style="text-decoration: none;color:#000;" href="<%=request.getContextPath()%>/emergency/jointConferences/videoConference/videoMetting.jsp">视频监控</a></c>
				<button class="btn-sm" id="returnMeeting" type="button" style="background-color: #EE7600;border: 0px;color:#fff;float:right;margin-top:-5px;">&nbsp;返&nbsp;回</button>
		</h2>	
		<h2 class="paramTp2">
			<i class="fa icon-th-large"></i>
			  <c>
				<a style="text-decoration: none;" href="javascript:history.back(-1)">工作台</a>
				<span style="margin-left: 5px;margin-right: 5px;">></span>
					视频监控
			   </c>
			 <button class="btn-sm" id="returnMeeting" type="button" style="background-color: #EE7600;border: 0px;color:#fff;float:right;margin-top:-5px;">&nbsp;返&nbsp;回</button>
		</h2>
	</div> 
</div>
<div class="spjk">
	<div>
	    <ul style="text-align: center;" id="tubia">
	       <li>
	          <img src="<%=request.getContextPath() %>/common/images/videoMetting/actualTime.png"/>
	          <p>实时会议</p>
	       </li>
	       <li id="chMens">
	          <img src="<%=request.getContextPath() %>/common/images/videoMetting/participants.png"/>
	          <p>参会人员</p>
	       </li>
	       <li id="endMeeting">
	          <img src="<%=request.getContextPath() %>/common/images/videoMetting/end.png"/>
	          <p>结束会议</p>
	       </li>
	    </ul>
	</div>
	<div>
	   <div  id="head_div">
	      <img src="<%=request.getContextPath() %>/common/images/videoMetting/metting1.jpg"/>
	   </div>
	   <div  id="middle_div" >
		   <div class="mide-div">
		       <div>
			      <img src="<%=request.getContextPath() %>/common/images/videoMetting/metting2.jpg"/>
			   </div>
			     <div>
			      <img src="<%=request.getContextPath() %>/common/images/videoMetting/metting3.jpg"/>
			   </div>
		   </div>
		   <div  class="mide-div">
		       <div>
		         <img src="<%=request.getContextPath() %>/common/images/videoMetting/metting4.jpg" />
		       </div>
		       <div>
		         <img src="<%=request.getContextPath() %>/common/images/videoMetting/metting5.jpg"/>
		      </div>
		   </div>
	   </div>
	</div>
</div>

<!-- 参会人员 -->
<div class="modal fade" id="chMensModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
    <div class="modal-dialog" role="document">
        <div class="modal-content" style="width:380px;height:auto;">
            <div class="modal-header" style="padding:10px;background-color: #009f95;color: #fff;">
                <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                <h4 class="modal-title" id="myModalLabel" >参会人员</h4>
            </div>
            <div class="modal-body" style="height:330px;margin-left:10px;">	 
            <table id="meetingtable"></table>
            </div>
           <div class="modal-footer">
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
