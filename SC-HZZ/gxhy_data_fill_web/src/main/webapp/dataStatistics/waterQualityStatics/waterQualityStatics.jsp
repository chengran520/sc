<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<jsp:include page="/common/base/include_BaseCommon.jsp"></jsp:include>
<link href="<%=request.getContextPath() %>/common/css/commonView.css" rel="stylesheet">
<link href="<%=request.getContextPath() %>/dataStatistics/waterQualityStatics/quality.css" rel="stylesheet">

<script src="<%=request.getContextPath()%>/dataStatistics/waterQualityStatics/quality.js"></script>
<script type="text/javascript">
 	var WEB_ROOT = "<%=request.getContextPath() %>";
</script>
<div class="headerDiv noprint" id="headerDiv" style="height: 36px;">
	<div class="header-content" style="height: 36px;">
		<h2>
			<i class="fa icon-th-large"></i>
			<c>水质日报表</c>
			<span ></span>
		</h2>
	</div> 	
</div>
<button style="float: right;margin-right:65px;background-color:#00b0da;border: 0px;margin-top: 5px;"  class="btn btn-primary noprint" type="button"  id="print">打&nbsp;印</button>
  <table id="qualitytable" border="1" style="width:94%;margin:40px 3% 10px;text-align: center;">
      <caption style="text-align: center;">水质日报表</caption>
       <thead>
           <tr>
		      <th>测站编码</th>
		      <th>测站名称</th>
		      <th>采集时间</th>
		      <th>温度(℃)</th>
		      <th>浊度(度)</th>
		      <th>电导率(µS/cm)</th>
		      <th>PH</th>
		      <th>溶解氧(mg/L)</th>
	   		</tr>
       </thead>
       <tbody id="qualityList" style="display:block;overflow:hidden;overflow-y:scroll;">
       </tbody>
       <tfoot></tfoot>
  </table>