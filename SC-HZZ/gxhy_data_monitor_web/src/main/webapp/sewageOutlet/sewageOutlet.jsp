<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<jsp:include page="/common/base/include_BaseCommon.jsp"></jsp:include>
<link href="<%=request.getContextPath() %>/common/css/commonView.css" rel="stylesheet">
<link href="<%=request.getContextPath() %>/basicSite/css/basicSite.css" rel="stylesheet">
<script src="<%=request.getContextPath() %>/sewageOutlet/sewageOutlet.js"></script>
<script type="text/javascript">
 	var WEB_ROOT = "<%=request.getContextPath()%>";
</script>
<div class="headerDiv" id="headerRvdiv">
	<div class="header-content">
		<h2>
			<i class="fa icon-th-large"></i>
			<c>排污口基础信息</c>
		</h2>
	</div> 
	<div style="background-color: #FFFFFF;"class="" >
		<div class="form-inline" method="post" id="form_data_info">
			<div id="siteDiv" style="padding: 10px;border-bottom: 1px solid #dddddd;">
				<div class="col-xs-2.5" style="display: inline;">
					<div class="input-group">
					  <span class="input-group-addon" >排污口信息:</span>
					  <input type="text" class="form-control" id="keyword"  placeholder="请输入排污口名称">
					</div>
				</div>		
				<button id="querySewage" class="btn btn-primary" style="background-color: #0ab1f8;border: 0px;" type="button" >
					<span class="glyphicon glyphicon-search " ></span>&nbsp;查&nbsp;询
				</button>
				<button  id="refreshSewage"   class="btn btn-primary" type="button" style="background-color:#EE82EE;border: 0px;">
					<span class="glyphicon glyphicon-refresh" ></span>&nbsp;刷&nbsp;新
				</button>
			</div>
		</div>
	</div>
</div>
 <table id="patrol_sewage"  style="text-overflow:ellipsis;">
   <thead>
	 <tr>
         <th field="name" width="60" align="left">排污口名称</th>
         <th field="unit" width="60" align="left" >设置单位</th>
         <th field="stand" width="40"  align="center">法人代表</th>
         <th field="compDt" width="40" align="center">建成使用时间</th>
         <th field="industry" width="40" align="center">所属行业</th>
         <th field="waterIntake" width="40" align="center">年取水量（万立方米）</th>
         <th field="rvNm" width="40"  align="center">所在河流</th>
         <th field="emisTp" width="40" align="center">排放方式</th>
         <th field="desRhhfwsl" width="20" align="center">设计排污量</th>
         <th field="appRhhfwsl" width="20" align="center">审批排污量</th>
         <th field="reaRhhfwsl" width="20" align="center">实际排污量</th>
         <th field="pollutant" width="40" align="center">主要污染物</th>
	 </tr>
   </thead>
  </table>

