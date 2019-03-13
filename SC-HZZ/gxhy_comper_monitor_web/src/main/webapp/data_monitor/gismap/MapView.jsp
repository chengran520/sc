<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<link rel="stylesheet" href="<%=request.getContextPath()%>/common/jqfloat/style.css" >
<% request.setCharacterEncoding("UTF-8");%>
<script type="text/javascript">
 	var WEB_ROOT = "<%=request.getContextPath() %>";
</script>
<div id="left_menu_div">
	<div class="content-list">
		<div class="content-node" style="display: block;">
			<div class="content-pane">
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
								<span class="input-group-btn" id="rv_btn">
									<button class="btn btn-primary pull-right" type="button" style="width: 70px;"><i class="fa"></i>查询</button>
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
	</div>
</div>
<div class="tab-resizer" id="tab-resizer" style="float: left;display:block;" >
   	<div class="action-node" ></div>
 </div>
<div id="right_menu_div">
	<div id="allmap" class="all_map"></div>
<!-- 	<div style="height: 30%;width: 100%;"> -->
<!-- 		<div id="river_info_all" style="display: block;"> -->
<!-- 			<div  id="initChartPptn"  ></div> -->
<!-- 			<div  id="initChart"  ></div> -->
<!-- 		</div> -->
<!-- 		<div id="river_info_one" style="display: none;"> -->
<!-- 			<div class="river_info_one_div"> -->
<!-- 				<ul class="well"> -->
<!-- 					<li data-index="0" id="st_li_1"> -->
<!-- 						<span style="position: relative; left: -5px;"> -->
<!-- 							<i style="font-size: 18px;" class="fa span-info fa-tint" ></i> -->
<!-- 						</span> -->
<!-- 						<div> -->
<!-- 							<span class="colorGreen" style="color: #4A4A4A">河道水质状况</span> -->
<!-- 							<span class="colorGreen"><a id="water_qua_spec">水质类别说明</a> </span> -->
<!-- 						</div> -->
<!-- 					</li> -->
<!-- 					<li data-index="3" id="st_li_4"> -->
<!-- 						<div style="margin-top: 7px;"> -->
<!-- 								<span id="fv-z">Ⅰ</span> -->
<!-- 								<hr style="border:3px solid #12c7f9;"> -->
<!-- 								<span id="fv-o" style="color:#14abf1;">Ⅱ</span> -->
<!-- 								<hr style="border:3px solid #14abf1;"> -->
<!-- 								<span  id="fv-t"  style="color: #5ed522;">Ⅲ</span> -->
<!-- 								<hr style="border:3px solid #5ed522;"> -->
<!-- 								<span  id="fv-s"  style="color: #24b562;">Ⅳ</span> -->
<!-- 								<hr style="border:3px solid #24b562;"> -->
<!-- 								<span  id="fv-f"  style="color: #ffc30c;">Ⅴ</span> -->
<!-- 								<hr style="border:3px solid #ffc30c;"> -->
<!-- 								<span id="fv-x">劣Ⅴ</span> -->
<!-- 								<hr style="border:3px solid #ff5604;"> -->
<!-- 								<br> -->
<!-- 								<br> -->
<!-- 								<div id="rv_do_div"> -->
<!-- 									<span class="rv_span" >DO</span><br> -->
<!-- 									<span class="rv_span" >溶解氧</span> -->
<!-- 									<span id="rv_do_span"></span> -->
<!-- 								</div> -->
<!-- 								<div id="rv_cod_div"> -->
<!-- 									<span class="rv_span" >COD</span><br> -->
<!-- 									<span class="rv_span" >华学需氧量</span> -->
<!-- 									<span id="rv_cod_span"></span> -->
<!-- 								</div> -->
<!-- 								<div id="rv_nh_div"> -->
<!-- 									<span class="rv_span nh">NH3-N</span><br> -->
<!-- 									<span class="rv_span" >氨氮</span> -->
<!-- 									<span id="rv_nh_span"></span> -->
<!-- 								</div> -->
<!-- 								<div id="rv_tp_div"> -->
<!-- 									<span class="rv_span" >TP</span><br> -->
<!-- 									<span class="rv_span" >总磷</span> -->
<!-- 									<span id="rv_tp_span"></span> -->
<!-- 								</div> -->
<!-- 						</div> -->
<!-- 					</li> -->
<!-- 				</ul> -->
<!-- 			</div> -->
<!-- 			<div class="river_info_two_div" style="float: right;margin-top:-221px;"> -->
<!-- 				<ul class="well"> -->
<!-- 					<li data-index="0" id="st_li_1"> -->
<!-- 						<div class="showcase showcase-content background-light"></div> -->
<!-- 					</li> -->
<!-- 					<li data-index="3" id="st_li_4"> -->
<!-- 						<div style="margin-left: 7px;" id="river_water_quality"> -->
<!-- 							<span id="dos" class="active">DO</span> -->
<!-- 							<span id="cod" >COD</span> -->
<!-- 							<span id="nh" >NH3-N</span> -->
<!-- 							<span id="tp" >TP</span> -->
<!-- 						</div> -->
<!-- 					</li> -->
<!-- 					<li> -->
<!-- 						<div id="initChartWater" class="chart_water"></div> -->
<!-- 					</li> -->
<!-- 				</ul> -->
<!-- 			</div> -->
<!-- 		</div> -->
<!-- 	</div> -->  
</div>
<!--  <div id="fd_holder"> -->
<!--      <div  id="fd_font_v" style="text-align: center;"> -->
<!--       	  <div class="fd_jiandu"><font id="fd_fo">投诉处理</font></div> -->
<!--       	  <div id="fd_div_four"> -->
<!--        	  <div><i class="fa fa-warning fd_red" ></i>&nbsp;&nbsp;湍河一号至二号橡胶坝段<font>2017-08-05</font></div> -->
<!-- 		  <div><i class="fa fa-warning fd_red"></i>&nbsp;&nbsp;湍河二号至三号橡胶坝段<font>2017-08-05</font></div> -->
<!-- 		  <div><i class="fa fa-warning fd_red"></i>&nbsp;&nbsp;湍河三号至四号橡胶坝段<font>2017-08-05</font></div> -->
<!-- 		  <div style="border-bottom: 0px;"><i class="fa fa-warning fd_red"></i>&nbsp;&nbsp;湍河四号至五号橡胶坝段<font>2017-08-05</font></div> -->
<!--       	  </div>  -->
<!--  	 </div> -->
<!--  </div> -->
<div class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel"  style="overflow-y: hidden;">
	<div class="modal-dialog" role="document">
		<div class="modal-content" >
			<div class="modal-header" style="padding:8px;">
				<button type="button" class="close" data-dismiss="modal" aria-label="Close">
					<span aria-hidden="true" style="font-size: 32px;margin-right: 10px;">×</span>
				</button>
				<h4 class="modal-title" id="myModalLabel">水质类别说明</h4>
			</div>
			<form class="form-horizontal" role="form" >
			  <div class="form-group" style="padding-top: 9px;margin-bottom:5px;"> 
			    <label class="col-sm-2 control-label" style="padding-top: 0px;"><img alt="" src="<%=request.getContextPath() %>/common/images/water_quality/1.png"></label>
			    <div class="col-sm-9">
			     	<p class="label-control">主要适用于源头水、国家自然保护区;</p>  
			    </div>
			  </div>
			  <div class="form-group" style="margin-bottom:5px;">
			    <label  class="col-sm-2 control-label" style="padding-top: 2px;"><img alt="" src="<%=request.getContextPath() %>/common/images/water_quality/2.png"></label>
			    <div class="col-sm-9">
			     	<p class="label-control ">主要适用于集中式生活引用水地表水源地一级保护区、珍稀水生生物栖息地、鱼虾类产场、仔稚幼鱼的索铒场等;</p>  
			    </div>
			  </div>
			  <div class="form-group" style="margin-bottom:5px;">
			    <label class="col-sm-2 control-label" style="padding-top: 2px;"><img alt="" src="<%=request.getContextPath() %>/common/images/water_quality/3.png"></label>
			    <div class="col-sm-9">
			     	<p class="label-control">主要适用于集中式生活引用水地表水源地二级保护区、鱼虾类越冬汤、洄游通道、水产养殖等渔业水域及游戏区;</p>  
			    </div>
			  </div>
			  <div class="form-group" style="margin-bottom:5px;">
			    <label  class="col-sm-2 control-label" style="padding-top: 0px;"><img alt="" src="<%=request.getContextPath() %>/common/images/water_quality/4.png"></label>
			    <div class="col-sm-9">
			     	<p class="label-control">主要适用于一般工业用水区及人体非直接接触的娱乐用水区;</p>  
			    </div>
			  </div>
			  <div class="form-group" style="margin-bottom:5px;">
			    <label  class="col-sm-2 control-label" style="padding-top: 0px;"><img alt="" src="<%=request.getContextPath() %>/common/images/water_quality/5.png"></label>
			    <div class="col-sm-9">
			     	<p class="label-control">主要适用于农业用户区及一般景观要求水域;</p>  
			    </div>
			  </div>
			  <div class="form-group" style="margin-bottom:5px;">
			    <label  class="col-sm-2 control-label" style="padding-top: 0px;"><img alt="" src="<%=request.getContextPath() %>/common/images/water_quality/6.png"></label>
			    <div class="col-sm-9">
			     	<p class="label-control">污染程度已超过V类的水;</p>  
			    </div>
			  </div>
			  <hr style="margin-top:0px;margin-bottom:5px;">
			    <div class="form-group" style="margin-bottom:5px;">
				    <label  class="col-sm-1 control-label" style="padding-top: 0px;"></label>
				    <div class="col-sm-11">
				     	<p class="label-control">对应地表水上述六类水域功能，将地表水环境质量标准基本项目标准值分为六类，不同功能类别分别执行相应类别的标准值。水域功能类别高的标准值严于水域功能类别低的标准值。同一水域兼有多类使用功能，执行最高功能类别对应的标准值。实现水域功能与达功能类别标准为同一含义。注：水质分类方案依据国家地表水环境质量标准(GB3838-2002)</p>  
				    </div>
			  </div>
			  <hr style="margin-top:0px;margin-bottom:5px;">
			  <div class="table-responsive">
			 	 <table class="table" id="qua_des_tab" style="font-size: 14px;font-weight: 500;"></table>
			  </div>
			</form>
		</div>
	</div>
</div>
<jsp:include page="/common/base/include_BaseCommon.jsp"></jsp:include>
<link href="css/MapView.css" rel="stylesheet">
<link href="css/styles.css" rel="stylesheet">
<script src="MapView.js"></script>
<script src="MapInfoView.js"></script>
<script src="MapMroe.js"></script>
<script type="text/javascript" src="<%=request.getContextPath() %>/common/gis/js/api.js?v=2.0&ak=4j9eufpmmKzjMLo2l2Q3VvOBGCDDQC03"></script>
<script type="text/javascript" src="http://api.map.baidu.com/library/AreaRestriction/1.2/src/AreaRestriction_min.js"></script>
<script src="<%=request.getContextPath() %>/common/gis/js/TextIconOverlay_min.js"></script>
<script src="<%=request.getContextPath() %>/common/gis/js/MarkerClusterer_min.js"></script>
