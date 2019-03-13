<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<% request.setCharacterEncoding("UTF-8");%>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<jsp:include page="/common/base/include_BaseCommon.jsp"></jsp:include>
<link rel="stylesheet" href="<%=request.getContextPath()%>/css/bootstrapStyle.css" >
<link href="css/MapView.css" rel="stylesheet">
<link href="css/Tiandt.css" rel="stylesheet">
<script type="text/javascript">
 	var WEB_ROOT = "<%=request.getContextPath() %>";
</script>
<div id="map" class="all_map"></div>
<div id="win_div_map" class="win_div_map">
	<div style="width: 290px;height: 97%;background-color: #FFF;">
		<div style="width: 100%; height: 100%; display: block;" class="rdijit-layout-tab3"  >
			<div id="mapHread">
				<div id="content_list_div">
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
			<div  class="rdijit-layout-viewstack" style="width: 100%">
				<div style="position: relative; display: block;">
					<div class="input-group" id="inpt_query">
						<input type="text" class="form-control" id="keyText" placeholder="输入查询关键字...">
						<span class="input-group-btn" id="rv_btn" >
							<button class="btn btn-primary pull-right" type="button" style="width: 70px;background-color: #1C86EE;border: 0px;height: 34px;"><i class="fa"></i>查&nbsp;询</button>
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
<div class="tab-tl-div">
	<div class="tab-div-img">
		<span style="width: 85%;float: left;margin: 4px 0 0 6px;">图例</span>
		<img id="img1" class="show_img" src="images/del.png">
		<img id="img2" class="show_img" style="display: none;" src="images/add.png">
	</div>
	<%-- <div id="ts_div" class="ts_div">
		<span><img src="<%=request.getContextPath()%>/common/images/river/pp_1.png" class="ts_img" />预警</span><span><img class="ts_img" src="<%=request.getContextPath()%>/common/images/river/pp_0.png" />正常</span>
	</div> --%>
	<div id="divImg"> 
		<label class="demo--label"><input class="demo--radio" type="checkbox" checked="checked" name="demo-checkbox1" value="pp">
	        <span class="demo--checkbox demo--radioInput"></span><img  class="demo-img" src="<%=request.getContextPath() %>/common/images/river/pp_0.png">雨量站
	    </label>
	    <label class="demo--label">
	        <input class="demo--radio" type="checkbox" name="demo-checkbox2" checked="checked" value="zz">
	        <span class="demo--checkbox demo--radioInput"></span><img  class="demo-img" src="<%=request.getContextPath() %>/common/images/river/sk1.png">水位站
	    </label>
	<%--     <label class="demo--label">
	        <input class="demo--radio" type="checkbox" name="demo-checkbox3"  checked="checked"  value="rr">
	        <span class="demo--checkbox demo--radioInput"></span><img  class="demo-img" src="<%=request.getContextPath() %>/common/images/river/sk.png">水库站
	    </label>
	     <label class="demo--label">
	        <input class="demo--radio" type="checkbox" name="demo-checkbox6" checked="checked" value="st">
	        <span class="demo--checkbox demo--radioInput"></span><img    class="demo-img" src="<%=request.getContextPath() %>/common/images/river/st.png">山塘站
	    </label> --%>
	    <label class="demo--label">
	        <input class="demo--radio" type="checkbox" name="demo-checkbox4" checked="checked" value="sz">
	        <span class="demo--checkbox demo--radioInput"></span><img  class="demo-img" src="<%=request.getContextPath() %>/common/images/river/shuiz.png">水质站
	    </label>
	    <label class="demo--label">
	        <input class="demo--radio" type="checkbox" name="demo-checkbox5" checked="checked" value="sp">
	        <span class="demo--checkbox demo--radioInput"></span><img  class="demo-img" style="height: 14px;" src="<%=request.getContextPath() %>/common/images/river/video.png">视频站
	    </label>
	    <label class="demo--label">
	        <input class="demo--radio" type="checkbox" name="demo-checkbox6" value="pw">
	        <span class="demo--checkbox demo--radioInput"></span><img    class="demo-img" src="<%=request.getContextPath() %>/common/images/river/paiwk.png">排污口
	    </label>
	    <label class="demo--label">
	        <input class="demo--radio" type="checkbox" name="demo-checkbox6" value="sy">
	        <span class="demo--checkbox demo--radioInput"></span><img    class="demo-img" src="<%=request.getContextPath() %>/common/images/river/dbsyd.png">水源地
	    </label>
    </div>
</div>

<div class="tab-resizer" id="tab-resizer" style="float: left;display:block;" >
	<div class="action-node" ></div>
</div>
<div class="tab-gxhy">
	<span id="tb-zoom" class="tab-gxhy-g gx"></span>
	<span id="lgt" class="tab-gxhy-g gx" ></span>
	<div class="tab-gxhy-v">
		<span class="tab-gxhy-g">技术支持：北京国信华源科技有限公司   <a href="http://www.bjgxhy.com" target="blank" style="color: #fff;text-decoration: none;">www.bjgxhy.com</a></span>
	</div>
</div>

<div class="layer-pop" style="display: none;">
	<div class="layer_container">
		<div class="layer-items clearfix">
			<!---->
			<a href="javascript:void(0);" id="img_type" class="layer-item"><div class="layer_bg"></div> <span class="layer-tip">影像</span></a>
			<a href="javascript:void(0);" id="ter_type" class="layer-item"><div class="layer_bg"></div> <span class="layer-tip">矢量</span></a>
		</div>
	</div>
</div>
<!-- 全景图 -->
<div class="modal fade"  id="modalAnimate" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
	<div class="modal-dialog" role="document">
		<div class="modal-content" style="width:902px;">
			<div class="modal-header" style="padding:10px;background-color: #009f95;color: #fff;">
				<button type="button" class="close" data-dismiss="modal" aria-label="Close">
					<span aria-hidden="true" style="font-size: 32px;margin-right: 10px;">×</span>
				</button>
				<h4 class="modal-title" id="animate_ModalLabel"></h4>
			</div>
			<div  id="panorama_model" style="width: 900px;height: 550px;"></div>
		</div>
	</div>
</div>

<!-- 应急预案 -->
<div class="modal fade" id="pewModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true" >
    <div class="modal-dialog">
        <div class="modal-content" style="width:480px;height:450px;">
            <div class="modal-header" style="padding:10px;background-color: #009f95;color: #fff;">
                <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                <h4 class="modal-title" id="myModalLabel" >应急预案</h4>
            </div>
            <div class="modal-body" id="pew_div" style="height: 370px;overflow: auto;">
                 <input id="roleZtreeId"   type="hidden" value=""/>
                 <ul id="pewZtree" class="ztree" ></ul>
            </div>
        </div>
    </div>
</div>

<script src="http://api.tianditu.com/api?v=4.0" type="text/javascript"></script>
<script type="text/javascript" src="<%=request.getContextPath()%>/module/js/jquery.ztree.core.js"></script>
<script type="text/javascript" src="<%=request.getContextPath()%>/module/js/jquery.ztree.excheck.min.js"></script>
<script src="js/gismap.js"></script>
<script src="js/TiandtData.js"></script>
<script src="js/MapMroe.js"></script>
<script src="js/tdtData.js"></script>
<script src="js/three.js"></script>
<script src="js/CSS3DRenderer.js"></script>
<script src="js/previewZtree.js"></script>
