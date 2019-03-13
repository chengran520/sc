<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<jsp:include page="/common/base/include_BaseCommon.jsp"></jsp:include>
<link href="<%=request.getContextPath() %>/common/css/commonView.css" rel="stylesheet">
<link href="<%=request.getContextPath() %>/css/rainStatics.css" rel="stylesheet">
<link href="<%=request.getContextPath() %>/css/rainStatics.css">
<script src="<%=request.getContextPath()%>/dataStatistics/rainStatics/rainStatics.js"></script>
<script type="text/javascript">
 	var WEB_ROOT = "<%=request.getContextPath() %>";
</script>
<div class="headerDiv noprint" id="headerDiv" style="height: 36px;">
	<div class="header-content" style="height: 36px;">
		<h2>
			<i class="fa icon-th-large"></i>
			<c>雨情日报表</c>
			<span ></span>
		</h2>
	</div> 	
</div>
<button style="float: right;margin-right:65px;background-color:#00b0da;border: 0px;margin-top: 5px;"  class="btn btn-primary noprint" type="button"  id="printRain">打&nbsp;印</button>
  <table id="raintable" border="1" style="width:94%;margin:40px 3% 10px;text-align: center;border-collapse:collapse;border-spacing:0;border-left:1px solid #888;border-top:1px solid #888;"  cellspacing="0">
       <caption style="text-align: center;">雨情日报表</caption>
       <tbody id="rainLiist"  style="display:block;overflow:hidden;overflow-y:scroll;"> 
       </tbody>
       <tfoot></tfoot>
  </table>