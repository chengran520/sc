<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<jsp:include page="/common/base/include_BaseCommon.jsp"></jsp:include>
<link href="<%=request.getContextPath() %>/common/css/commonView.css" rel="stylesheet">
<script type="text/javascript" src="<%=request.getContextPath() %>/data_center/water/riverway/select.js"></script>
<script type="text/javascript" src="<%=request.getContextPath() %>/basicSite/addSite.js"></script>
<script type="text/javascript">
 	var WEB_ROOT = "<%=request.getContextPath() %>";
</script>
<div style="height: 13%;" id="headerDiv">
	<div class="header-content">
			<h2>
				<i class="fa icon-th-large"></i>
				<c><a style="text-decoration: none;" href="RoutineView.jsp">基础测站</a><span style="margin-left: 5px;margin-right: 5px;">></span>添加巡查记录</c>
				<span ></span>
			</h2>
	</div> 
	<div style="background-color: #FFFFFF;">
		<form class="form-inline">
			<div style="padding: 10px;border-bottom: 1px solid #dddddd;text-align:right;">
<!-- 				<button  class="btn btn-primary" id="insertSite" type="button" style="background-color: #5CB75C;border: 0px;">
					<span class="glyphicon glyphicon-saved "></span>&nbsp;保&nbsp;存
				</button> -->
				<button class="btn btn-primary" type="button" id="returnSite" style="background-color: #BA55D3;border: 0px;">
					<span class="glyphicon glyphicon-log-out " ></span>&nbsp;返&nbsp;回
				</button>
			</div>
		</form>
	</div>
</div>
<form class="form-horizontal" role="form" id="form_data_Site">
	<div class="div-add-view">
	    <span class="title">基本信息</span>
		<div class="form-group">
			<label class="col-sm-1 control-label">测站编码</label>
			<div class="col-sm-2">
				<input class="form-control" name="stcd" id="stcd" type="text" placeholder="测站编码..." >
			</div>
			<label class="col-sm-1 control-label">测站名称</label>
			<div class="col-sm-2">
				<input class="form-control" name="stnm" id="stnm" type="text" placeholder="测站名称..." >
			</div>
			<label class="col-sm-1 control-label">河流名称</label>
			<div class="col-sm-2">
				<input class="form-control" name="rvnm" id="rvnm" type="text" placeholder="河流名称..." >
			</div>
			<label for="inputPassword" class="col-sm-1 control-label">水系名称</label>
			<div class="col-sm-2">
				<input class="form-control" name="hnnm" id="hnnm" type="text" placeholder="水系名称...">
			</div>
		</div>
		<div class="form-group">
			<label for="disabledTextInput" class="col-sm-1 control-label">流域名称</label>
			<div class="col-sm-2">
				<input class="form-control" type="text" id="focusedInput_lgtd"  name="bsnm" class="bsnm" placeholder="流域名称...">
			</div>
			<label for="disabledTextInput" class="col-sm-1 control-label">经度</label>
			<div class="col-sm-2">
				<input type="text" id="lgtd" name="lgtd" class="form-control" placeholder="经度...">
			</div>
			<label for="inputPassword" class="col-sm-1 control-label">纬度</label>
			<div class="col-sm-2">
				<input class="form-control" name="lttd" id="lttd" type="text" placeholder="纬度...">
			</div>
			<label for="disabledTextInput" class="col-sm-1 control-label">站址</label>
		    <div  class="col-sm-2">
				<input type="text" id="stlc"  name="stlc" class="form-control" placeholder="站址...">
			</div>
		</div>
		<div class="form-group">
			
			<label class="col-sm-1 control-label">站类</label>
			<div class="col-sm-2">
				<select class="form-control" name="sttp">
			      	<option value="" selected="selected">请选择</option>
			      	<option value="PP" >雨量站</option>
			      	<option value="SS" >墒情站</option>
			      	<option value="ZQ" >河道水文站</option>
			      	<option value="RR" >水库水位站</option>
			      	<option value="DD" >堰闸水文站</option>
		   		 </select>
			</div>
			<label for="disabledTextInput" class="col-sm-1 control-label">行政区划码</label>
			 <div  class="col-sm-3">
			     <div class="form-inline">  
				  <select class="form-control" name="addvcd1"   id="province"  class="form-control" style="width: 90px;">
					<option value="-1">—省 —</option>
			      </select>
			      <select class="form-control" name="addvcd2"  id="city" class="form-control" style="width:90px;">
					<option value="-1">—市—</option>
			      </select>
			      <select id="district" name="addvcd3"  id="district" class="form-control" style="width:90px;">
					<option value="-1">—县区—</option>
			      </select>
			   </div>	
		   </div>	
		</div>
</div>
<div class="div-add-view" >
	 <span class="title" style="background:#FFBA2F">其他信息</span>
		<div class="form-group">
			<label class="col-sm-1 control-label">基面名称</label>
			<div class="col-sm-2">
				<input class="form-control" id="dtmnm"  name="dtmnm"   type="text" placeholder="基面名称...">
			</div>
			<label class="col-sm-1 control-label">基面高程</label>
			<div class="col-sm-2">
				<input class="form-control" id="dtmel" name="dtmel"  type="text" placeholder="基面高程...">
			</div>
			<label class="col-sm-1 control-label">基面修正值</label>
			<div class="col-sm-2">
				<input class="form-control" id="mdpr"  name="mdpr"  type="text" placeholder="基面修正值...">
			</div>
			<label for="inputPassword" class="col-sm-1 control-label">报汛等级</label>
			<div class="col-sm-2">
				<select class="form-control" name="frgrd" id="frgrd">
			      	<option value="0" selected="selected">请选择</option>
			      	<option value="1" >中央报汛站</option>
			      	<option value="2" >省级重点报汛站</option>
			      	<option value="3" >省级一般报汛站</option>
			      	<option value="4" >其它报汛站</option>
			      	<option value="5" >山洪报汛站</option>
		   		 </select>
			</div>
		</div>
		<div class="form-group">		
			<label for="inputPassword" class="col-sm-1 control-label">建站年月</label>
			<div class="col-sm-2">
				<input class="form-control" id="edfrym" name="edfrym"   type="text"  placeholder="建站年月..." >
			</div>
			<label for="inputPassword" class="col-sm-1 control-label">始报年月</label>
			<div class="col-sm-2">
				<input class="form-control" id="bgfrym" name="bgfrym" type="text"  placeholder="始报年月..." >
			</div>
			<label for="inputPassword" class="col-sm-1 control-label">隶属行业单位</label>
			<div class="col-sm-2">
				<input class="form-control" id="atcunit" name="atcunit"  type="text"  placeholder="隶属行业单位..." >
			</div>
			<label for="inputPassword" class="col-sm-1 control-label">信息管理单位</label>
			<div class="col-sm-2">
				<input class="form-control" id="admauth"  name="admauth"  type="text" placeholder="信息管理单位..." >
			</div>
		</div>
		<div class="form-group">		
			<label for="inputPassword" class="col-sm-1 control-label">交换管理单位</label>
			<div class="col-sm-2">
				<input class="form-control" id="locality"  name="locality"  type="text" placeholder="交换管理单位..." >
			</div>
			<label for="inputPassword" class="col-sm-1 control-label">测站岸别</label>
			<div class="col-sm-2">
				<input class="form-control" id="stbk" name="stbk"  type="text"  placeholder="测站岸别..." >
			</div>
			<label for="inputPassword" class="col-sm-1 control-label">测站方位</label>
			<div class="col-sm-2">
				<input class="form-control" id="stazt" name="stazt" type="text" placeholder="测站方位..." >
			</div>
			<label for="inputPassword" class="col-sm-1 control-label">至河口距离</label>
			<div class="col-sm-2">
				<input class="form-control" id="dstrvm" name="dstrvm" type="text" placeholder="至河口距离..." >
			</div>
		</div>
		<div class="form-group">			
			<label for="inputPassword" class="col-sm-1 control-label">集水面积</label>
			<div class="col-sm-2">
				<input class="form-control" id="drna" name="drna" type="text" placeholder="集水面积..." >
			</div>
			<label for="inputPassword" class="col-sm-1 control-label">拼音码</label>
			<div class="col-sm-2">
				<input class="form-control" id="phcd" name="phcd" type="text"  placeholder="拼音码..." >
			</div>
			<label for="inputPassword" class="col-sm-1 control-label">启用标志</label>
			<div class="col-sm-2">
				<input class="form-control" id="usfl" name="usfl"  type="text" placeholder="启用标志..." >
			</div>
			<label for="inputPassword" class="col-sm-1 control-label">备注</label>
			<div class="col-sm-2">
				<input class="form-control" id="comments" name="comments"  type="text" placeholder="备注..." >
			</div>
		</div>
	</div>
</form>
