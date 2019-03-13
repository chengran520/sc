<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<jsp:include page="/common/base/include_BaseCommon.jsp"></jsp:include>
<link href="<%=request.getContextPath() %>/common/css/commonView.css" rel="stylesheet">
<link href="<%=request.getContextPath() %>/css/pollution.css" rel="stylesheet">
<link href="<%=request.getContextPath() %>/busine/css/flowChart.css" rel="stylesheet">
<script type="text/javascript" src="<%=request.getContextPath() %>/riverwaySpecial/riverway.js"></script>
<script type="text/javascript">
 	var WEB_ROOT = "<%=request.getContextPath() %>";
</script>
<div class="headerDiv" id="headriverway" style="height:36px;">
	<div class="header-content">
		<h2>
			<i class="fa icon-th-large"></i>
			<c>河道专题</c>
		</h2>
	</div>
</div> 
<div id="Div0">
   <div id="Div1">
       <div id="pie"></div>
       <div class="titlediv">处理事件流程</div>
	   <div id="timeAxis"></div>
   </div>
   <div id="Div2">
        <table id="riverCourse"  style=" text-overflow:ellipsis;">
			<thead>
				<tr>
			           <th field="busineId"  width="25" align="center" >事件编号</th>
			           <th field="busineDesc" width="40" align="left" formatter="eventInfo.formatterDesc">事件描述</th>
			           <th field="busineTypeNm" width="20" align="center" >事件类型</th>
			           <th field="busineUm" width="20" align="center" >上报人</th>
			           <th field="handleUserNm" width="20" align="center">处理人</th>
			           <th field="createTm" width="25" align="center"  formatter="eventInfo.formatterTime">上报时间</th>
			           <th field="updateTm" width="25" align="center" formatter="eventInfo.formatterTime">处理时间</th>
			           <th field="busineAddress" width="55" align="left">发生地点</th>
					</tr>
			</thead>
		</table>
   </div>
</div>
	
	
	
	
	

				