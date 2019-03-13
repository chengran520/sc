<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<jsp:include page="/common/base/include_BaseCommon.jsp"></jsp:include>
<script type="text/javascript">
 	 var WEB_ROOT = "<%=request.getContextPath() %>";
 	 $(function() { 
 		var p = $(window).height();	
 		 $(".panel-body").height(p-43);
     });  
</script>
<div class="panel panel-primary">
    <div class="panel-body" style="width: 20%;float: left;margin: 0 15px 0 0px;">
    	<div style="border: 1px solid #DBDBDB;height: 38px;padding: 10px 0 0 10px;">
    		<img src="images/adcd_gis.png" style="margin: -5px 4px 0 0;width: 15px;height: 15px;">
    		<span>行政地区</span>
    	</div>
    	 <ul id="pewZtree" class="ztree" ></ul>
	</div>
	<div class="panel-body">
		<table id="fillTab"  style="text-overflow:ellipsis;">
			<thead>
				<tr>
		             <th field="rvCd" width="8%" align="center">河流编码</th>
		             <th field="rvNm" width="8%" align="center" >河流名称</th>
		             <th field="hnnm"  width="8%" align="center">所属水系</th>
		             <th field="bsnm"  width="8%" align="center">所属流域</th>
		             <th field="stbk"  width="8%" align="center">汇入岸别</th>
		             <th field="rvlt"  width="8%" align="center">河流长度(km)</th>
		             <th field="draArea"  width="8%" align="center">流域面积(km2)</th>
		             <th field="addvcd" width="8%" align="center">行政区划</th>
		             <th field="tp" width="8%" align="center" formatter="dataFill.formatterCz">操作</th>
				</tr>
			</thead>
		</table>
	</div>
</div>
