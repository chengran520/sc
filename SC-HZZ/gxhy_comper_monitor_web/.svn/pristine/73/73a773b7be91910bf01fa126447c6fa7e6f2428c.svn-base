<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<% request.setCharacterEncoding("UTF-8");%>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<jsp:include page="/common/base/include_BaseCommon.jsp"></jsp:include>
<script src="http://api.tianditu.com/api?v=4.0" type="text/javascript"></script>
<link href="css/MapView.css" rel="stylesheet">
<link href="css/Tiandt.css" rel="stylesheet">
<script src="TiandtMap.js"></script>
<script src="TiandtData.js"></script>
<script src="js/tdtData.js"></script>
<script src="MapMroe.js"></script>
<script type="text/javascript">
 	var WEB_ROOT = "<%=request.getContextPath() %>";
</script>
<div id="mapDiv" class="all_map"></div>
<div id="win_div_map" style="display: block;position: absolute;bottom: 0px;top: 0px;left: 0px;right: auto;z-index: 100;box-shadow: 0px 0px 5px 0px rgba(191, 191, 191, 0);background-color: rgba(236, 234, 249, 0);">
	<div style="width: 350px;height: 100%;background-color: #FFF;">
		<div style="width: 100%; height: 100%; display: block;" class="rdijit-layout-tab3"  >
			<div id="mapHread" style="width: 100%; height: 50px; background-color: white; text-align: center;box-shadow: 0 0 1px #888;">
				<div style="display: table; width: 100%; height: 100%" id = "content_list_div">
					<div class="iconItem all rdijit-state-selected">
						<i class="fa fa-ship"></i><span > 河流</span>
					</div>
					<div class="iconItem fav">
						<i class="fa fa-group"></i><span > 测站</span>
					</div>
					<div class="iconItem more">
						<i class="fa fa-align-justify"></i><span > 更多...</span>
					</div>
				</div>
			</div>
			<div  class="rdijit-layout-viewstack">
				<div style="position: relative; display: block;">
					<div class="input-group" id="inpt_query">
						<input type="text" class="form-control" id="keyText" placeholder="输入查询关键字...">
						<span class="input-group-btn" id="rv_btn" >
							<button class="btn btn-primary pull-right" type="button" style="width: 70px;background-color: #1C86EE;border: 0px;"><i class="fa"></i>查&nbsp;询</button>
						</span>
					</div>
					<div id="all_div">
						<div class="data_monitor_stationList_defaultView" id="stationList_defaultView" ></div>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
<div class="tab-resizer" id="tab-resizer" style="float: left;display:block;" >
	<div class="action-node" ></div>
</div>

<div class="layer-pop" style="display: none;">
	<div class="layer_container">
		<div class="layer-items clearfix">
			<!---->
			<a href="javascript:void(0);" id="img_type" class="layer-item"><div class="layer_bg"></div> <span class="layer-tip">影像</span></a>
			<a href="javascript:void(0);" id="ter_type" class="layer-item"><div class="layer_bg"></div> <span class="layer-tip">地形</span></a>
			<a href="javascript:void(0);" id="sw_type" class="layer-item"><div class="layer_bg"></div> <span class="layer-tip">三维</span></a>
		</div>
	</div>
	<div class="layer-arguments">
		<span>地名</span>
		<!---->
		<span id="cn_name" class="check"></span>
	</div>
	<div class="layer-arguments">
		<span>English</span>
		<!---->
		<span id="cn_name" class="uncheck"></span>
	</div>
</div>
