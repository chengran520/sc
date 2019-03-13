<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<jsp:include page="/common/base/include_BaseCommon.jsp"></jsp:include>
<link href="<%=request.getContextPath() %>/common/css/commonView.css" rel="stylesheet">
<link href="<%=request.getContextPath() %>/dataStatistics/riverStatics/riverStatics.css" rel="stylesheet">
<script type="text/javascript" src="<%=request.getContextPath()%>/dataStatistics/riverStatics/riverStatics.js"></script>
<script type="text/javascript">
 	var WEB_ROOT = "<%=request.getContextPath() %>";
</script>
<div class="headerDiv noprint" id="headerDiv" style="height: 36px;">
	<div class="header-content" style="height: 36px;">
		<h2>
			<i class="fa icon-th-large"></i>
			<c>水情日报表</c>
			<span ></span>
		</h2>
	</div> 	
</div>
<button style="float: right;margin-right:65px;background-color:#00b0da;border: 0px;margin-top: 5px;"  class="btn btn-primary noprint" type="button"  id="riverprint">打&nbsp;印</button>
 <table id="rivertable" border="1" style="width:94%;margin:40px 3% 10px;text-align: center;">
     <caption style="text-align: center;">水情日报表</caption>
     <thead>
        <tr>
         <th>测站编码</th>
         <th>测站名称</th>
         <th>时间</th>
         <th>水位(m)</th>
        </tr>
     </thead>
     <tbody id="riverbody"  style="display:block;overflow-x:hidden;overflow-y:scroll;"></tbody>
 </table>