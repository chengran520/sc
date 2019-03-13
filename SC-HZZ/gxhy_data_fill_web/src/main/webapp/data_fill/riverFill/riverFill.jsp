<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<jsp:include page="/common/base/include_BaseCommon.jsp"></jsp:include>
<link href="<%=request.getContextPath() %>/common/css/commonView.css" rel="stylesheet">
<script src="<%=request.getContextPath()%>/data_fill/riverFill/riverFill.js"></script>
<script type="text/javascript">
 	var WEB_ROOT = "<%=request.getContextPath() %>";
</script>
<div class="headerDiv" id="headerFilldiv">
	<div class="header-content">
		<h2>
			<i class="fa icon-th-large"></i>
			<c>数据填报-河流录入</c>
			<span ></span>
		</h2>
	</div> 
	<div style="background-color: #FFFFFF;"class="" id="user_div_manager">
		<form class="form-inline" method="post" id="form_data_info">
			<div style="padding: 10px;border-bottom: 1px solid #dddddd;">
				<div class="col-xs-2.2" style="display: inline;">
					<div class="input-group">
					  <span class="input-group-addon" >河流编码、名称:</span>
					  <input type="text" class="form-control" id="queryKey"  placeholder="请输入河流编码、名称">
					</div>
				</div>
				<button id="Query" class="btn btn-primary" style="background-color: #88D44E;border: 0px;" type="button" >
					<span class="glyphicon glyphicon-search " ></span>&nbsp;查&nbsp;询
				</button>
				<button id="refresh" class="btn btn-primary" type="button" style="background-color: #0ab1f8;border: 0px;">
					<span class="glyphicon glyphicon-refresh " ></span>&nbsp;刷&nbsp;新
				</button>	
				<button id="addFill" class="btn btn-primary" type="button" style="background-color: #FABC29;border: 0px;">
					<span class="glyphicon glyphicon-plus " ></span>&nbsp;新&nbsp;增
				</button>	
				<button id="addFill" class="btn btn-primary" type="button" style="background-color: #FF7F24;border: 0px;width: 101px;">
					<span class="glyphicon  glyphicon-open " ></span>&nbsp;数据入库
				</button>	
			</div>
		</form>
	</div>
</div>
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
             <th field="pRvCd" width="8%" align="center">上级河流编码</th>
             <th field="pRvNm" width="8%" align="center">上级河流名称</th>
             <th field="rvOn" width="20%" align="left"  halign="center">河源</th>
             <th field="rvOnLgtd" width="8%" align="center">河源经度</th>
             <th field="rvOnLttd" width="8%" align="center">河源纬度</th>
             <th field="rvMh" width="20%" align="left"  halign="center">河口</th>
             <th field="rvMhLgtd" width="8%" align="center">河口经度</th>
             <th field="rvMhLttd" width="8%" align="center">河口纬度</th>
             <th field="crtTm" width="10%" align="center" formatter="dataFill.formatterDataTm">创建时间</th>
             <th field="updTm" width="10%" align="center" formatter="dataFill.formatterDataTm">更新时间</th>
             <th field="addvcd" width="8%" align="center">行政区划</th>
             <th field="tp" width="8%" align="center" formatter="dataFill.formatterCz">操作</th>
		</tr>
	</thead>
</table>