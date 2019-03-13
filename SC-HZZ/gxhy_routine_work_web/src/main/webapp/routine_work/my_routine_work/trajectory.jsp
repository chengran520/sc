<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<jsp:include page="/common/base/include_BaseCommon.jsp"></jsp:include>  
<link href="<%=request.getContextPath() %>/common/css/commonView.css" rel="stylesheet"> 
<link href="<%=request.getContextPath() %>/routine_work/css/routine_work.css" rel="stylesheet"> 
<script type="text/javascript" src='http://webapi.amap.com/maps?v=1.4.3&key=832085f1e357efae7eb7e34449ac1a36'></script>
<script src="http://webapi.amap.com/ui/1.0/main.js?v=1.0.11"></script>
<script type="text/javascript" src="<%=request.getContextPath() %>/routine_work/my_routine_work/trajectory.js"></script>
<script type="text/javascript">
 	var WEB_ROOT = "<%=request.getContextPath() %>";
 	var routineId="<%=request.getParameter("routineId")%>"; 
</script>    
<div id="container"></div>
<div id="tip" style="position: absolute;top: 52px;right: 40px">
	<div id="hf_div" style="float: left;width: 88px;cursor:pointer;background-color: #6495ED;letter-spacing: 4px;border-radius: 3px;height: 30px;color: #FFF;font-size: 16px;text-align: center;padding-top: 4px;">回放</div>
</div>