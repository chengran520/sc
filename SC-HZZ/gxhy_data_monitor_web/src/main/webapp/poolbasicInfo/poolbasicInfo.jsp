<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<jsp:include page="/common/base/include_BaseCommon.jsp"></jsp:include>
<link href="<%=request.getContextPath() %>/common/css/commonView.css" rel="stylesheet">
<link href="<%=request.getContextPath() %>/basicSite/css/basicSite.css" rel="stylesheet">
<script src="<%=request.getContextPath() %>/poolbasicInfo/poolbasicInfo.js"></script>
<script type="text/javascript">
 	var WEB_ROOT = "<%=request.getContextPath()%>";
</script>
<div class="headerDiv" id="headerPooldiv">
	<div class="header-content">
		<h2>
			<i class="fa icon-th-large"></i>
			<c>山塘基础信息</c>
		</h2>
	</div> 
	<div style="background-color: #FFFFFF;"class="" >
		<div class="form-inline" method="post" id="form_data_info">
			<div id="siteDiv" style="padding: 10px;border-bottom: 1px solid #dddddd;">
				<div class="col-xs-2.5" style="display: inline;">
					<div class="input-group">
					  <span class="input-group-addon" >山塘信息:</span>
					  <input type="text" class="form-control" id="keyword"  placeholder="请输入编码、名称">
					</div>
				</div>		
				<button id="queryPool" class="btn btn-primary" style="background-color: #0ab1f8;border: 0px;" type="button" >
					<span class="glyphicon glyphicon-search " ></span>&nbsp;查&nbsp;询
				</button>
				<button  id="refreshPool"   class="btn btn-primary" type="button" style="background-color:#EE82EE;border: 0px;">
					<span class="glyphicon glyphicon-refresh" ></span>&nbsp;刷&nbsp;新
				</button>
			</div>
		</div>
	</div>
</div>
 <table id="patrol_catalogPool"  style="text-overflow:ellipsis;">
   <thead>
	 <tr>
         <th field="damcd"  width="30" align="center">山塘编码</th>
         <th field="damname" width="40" align="center">山塘名称</th>
         <th field="hnnm" width="40" align="center" >河流水系</th>
         <th field="stlc" width="40" align="left">所在地</th>
         <th field="lttd" width="40" align="center">纬度</th>
         <th field="lgtd" width="40" align="center">经度</th>
         <th field="xhst" width="40" align="center">库容（万m³）</th>
         <th field="drna" width="40"  align="center">集雨面积(km2)</th>  
         <th field="repeat" width="40" align="center"  formatter="poolBasicInfo.formatPool">操作</th>
	 </tr>
   </thead>
  </table>


<!-- 山塘详情 -->
<div class="modal fade" id="poolDetail" tabindex="-1" role="dialog" aria-labelledby="myModalLabel"  style="overflow-y: hidden;">
	<div class="modal-dialog" role="document">
		<div class="modal-content" style="height: 470px;width:550px;overflow-y: auto;overflow-x: hidden;">
			<div class="modal-header"  style="padding:10px;background-color: #009f95;color: #fff;">
				<button type="button" class="close" data-dismiss="modal" aria-label="Close">
					<span aria-hidden="true" style="font-size: 32px;margin-right: 10px;">×</span>
				</button>
				<h4 class="modal-title" id="myModalLabel">基本信息</h4>
			</div>
			<div>
			  <table class="siteTable">
			      <caption class='caption'>山塘基本信息</caption>
			       <tr>
			           <td class="leftTr">山塘编码：</td>
			           <td  id="damcd_detail" class="rightTr"></td>
			           <td class="leftTr">山塘名称：</td>
			           <td id="damname_detail" class="rightTr"></td>
			       </tr>
			        <tr>
			           <td class="leftTr">河流水系：</td>
			           <td id="hnnm_detail" class="rightTr"></td>
			           <td class="leftTr">所在地：</td>
			           <td id="stlc_detail" class="rightTr"></td>
			       </tr>
			        <tr>
			           <td class="leftTr">纬度：</td>
			           <td  id="lttd_detail" class="rightTr"></td>
			           <td class="leftTr">经度：</td>
			           <td id="lgtd_detail"  class="rightTr"></td>
			       </tr>
			       <tr>
			           <td class="leftTr">库容：</td>
			           <td  id="xhst_detail" class="rightTr"></td>
			           <td class="leftTr">集雨面积：</td>
			           <td id="drna_detail"  class="rightTr"></td>
			       </tr>
			        <tr>
			           <td class="leftTr">功能：</td>
			           <td  id="signer_detail" class="rightTr"></td>
			       </tr>	
			  </table>	
			  <table  class="siteTable" id="poolUsers">
			  </table>		
			</div>
		</div>
	</div>
</div>

