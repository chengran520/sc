var TiandtMap = {
	map:null,
	data:null,
	markers:[],
	opts:null,
	riverOpts:null,
	videoOpts:null,
	zoom:13,
	initMap:function(){
		this.map = new T.Map('mapDiv');
        this.map.centerAndZoom(new T.LngLat(116.365810,26.332810), 10);
        var miniMap = new T.Control.OverviewMap({
            isOpen: true,
            size: new T.Point(130, 130)
        });
        //地图鹰眼
        this.map.addControl(miniMap);
        //创建比例尺控件对象
        var scale = new T.Control.Scale();
        //添加比例尺控件
        this.map.addControl(scale);
        var control = new T.Control.Zoom();
        control.setPosition(T_ANCHOR_TOP_RIGHT);
        //添加缩放平移控件
        this.map.addControl(control);
        //添加定位控制
        this.showZoomPrototype();
        //添加全屏放大
        this.showScreen();
        //添加图层却换
        this.showLayer();
        this.loadData();
        this.showPptnInfo(this.data.stbprp);
        this.opts = {
    		minWidth : 394,     // 信息窗口宽度
    		maxHeight: 270,     // 信息窗口高度
    		autoPan : true,  
    		closeOnClick:true
		};
		this.riverOpts = {
			minWidth : 700,     // 信息窗口宽度
			maxHeight: 600,     // 信息窗口高度
			autoPan : true, 
			closeOnClick:true//设置关闭按钮
		}
		this.videoOpts = {
			minWidth : 700,     // 信息窗口宽度
			maxHeight: 500,     // 信息窗口高度
			autoPan : true,  
			closeOnClick:true
		}
        //var markerClusterer = new T.MarkerClusterer(this.map, {markers:this.markers});
	},
	loadData:function(){
		var reulst = commonUtils.get(WEB_ROOT+"/hydro/stbprp/getStbprpInfo",null,false);
		if(reulst.flag){
			this.data = reulst.data;
		}
	},
	showPptnInfo:function(datas){
		var vs = 0;
		if(datas.length > 0 ){
			for(var i= 0;i <datas.length;i++){
				var pt = new T.LngLat(datas[i].lgtd,datas[i].lttd);
				var sttp = datas[i].sttp;
				var images = "";
				var w = 15;
				var h = 15;
				if(sttp == 'PP'){
					if(i % 3 != 0){						
						images = WEB_ROOT+"/common/images/river/pp.gif";
						w = 20;
						h = 20;
					}else{
						w = 10;
						h = 10;
						images = WEB_ROOT+"/common/images/river/pp_0.png";
					}
				}else if(sttp == 'SP'){
					w = 15;
					h = 10;
					images = WEB_ROOT+"/common/images/river/video.png";
				}else if(sttp == "SZ"){
					images = WEB_ROOT+"/common/images/river/shuiz.png";
				}else{
					images = WEB_ROOT+"/common/images/river/sk1.png";
				}
				var icon = new T.Icon({
	                iconUrl: images,
	                iconSize: new T.Point(w,h),
	                iconAnchor: new T.Point(2,2)
	            });
				var marker = new T.Marker(pt,{icon:icon});  // 创建标注
				this.markers.push(marker);
				this.map.addOverLay(marker);               // 将标注添加到地图中
				if(sttp == "SP"){
					this.addVideoClickHandler(datas[i],marker,vs);
					vs++;
				}else{					
					this.addClickHandler(datas[i].stcd,sttp,marker);
				}
			}
		}
	},
	addVideoClickHandler:function(listData,marker,i){
		var _this = this;
		marker.addEventListener("click",function(e){
				_this.mapLocation(listData.lgtd,listData.lttd);
				var content = mapMroe.appendVideoOpenInfo(i);
				_this.openInfo(content,e,2)
			}
		);
	},
	addClickHandler:function(stcd,sttp,marker){
		var _this = this;
		marker.addEventListener("click",function(e){
			var url = WEB_ROOT+"/hydro/river/newRiverInfo";
			if(sttp == 'PP'){
				url = WEB_ROOT+"/hydro/pptn/newPptnInfo";
			}
			var data = {stcd:stcd};
			var reulst = commonUtils.get(url,data,false);
			if(reulst.flag){
				var datas = reulst.data;
				var content = mapMroe.appendOpenInfo(datas);
				_this.openInfo(content,e,0)}
			}
		);
	},
	clickWindow:function(obj,type,listData){
		var active = $(obj).hasClass("active");
		if(!active){
			$(obj).addClass('active').siblings().removeClass("active");
			$("#Section"+type+"").addClass("in active").siblings().removeClass("in active");
			var content = mapMroe.addRiverOpen();
			this.openInfo(content,obj,1);
		}
	},
	openInfo:function(content,e,tp,lng,lat){
		if(lng == null){
			lng = e.lnglat.getLng();
		}
		if(lat == null){
			lat = e.lnglat.getLat();
		}
		var point = new T.LngLat(lng,lat);
		var infoWindow = new T.InfoWindow(content,tp == 0 ? this.opts : (tp == 1 ? this.riverOpts:this.videoOpts));  // 创建信息窗口对象 
		this.map.openInfoWindow(infoWindow,point); //开启信息窗口
	},	
	mapLocation:function(lgtd,lttd){
		this.map.centerAndZoom(new T.LngLat(lgtd,lttd), this.zoom);
		this.map.panTo(new T.LngLat(lgtd,lttd));
	},
	showRvLtInfo:function(){
		var videos = [{lgtd:116.358199,lttd:26.336717},{lgtd:116.38867,lttd:26.185603},{lgtd:116.271962,lttd:26.127748},{lgtd:116.271962,lttd:26.127748},{lgtd:116.452486,lttd:26.436659},{lgtd:116.167327,lttd:26.14228},{lgtd:116.28806,lttd:26.495651},{lgtd:116.3513,lttd:26.076875},{lgtd:116.514576,lttd:26.505997},{lgtd:116.367398,lttd:26.387994},{lgtd:116.295534,lttd:26.232539}];
		for(var i =0 ;i < videos.length ;i++){
			var lab = "hz";
			var pt = new BMap.Point(videos[i].lgtd,videos[i].lttd);
			var images = WEB_ROOT+"/common/images/river/rvLt.png";
			if(i % 4 == 0){
				images = WEB_ROOT+"/common/images/river/rvLt2.png"
				lab = "bjy";
			}else if(i % 5 == 0){
				images = WEB_ROOT+"/common/images/river/rvLt3.png"
				lab = "xjy";
			}
			var myIcon = new BMap.Icon(images, new BMap.Size(50,50),{
				anchor: new BMap.Size(2, 2)
			});
			myIcon.setImageSize({width: 35, height: 50});
			var label = new BMap.Label(lab, { offset: new BMap.Size(20, -10) });
	        label.hide();
	        this.map.addOverlay(label);
			var marker = new BMap.Marker(pt,{icon:myIcon});  // 创建标注
			this.map.addOverlay(marker);               // 将标注添加到地图中
		}
	},
	showLayer:function(){
		var newControl = new T.Control({position: T_ANCHOR_TOP_RIGHT});
		 _this = this;
		 newControl.onAdd = function (map) {
	           var container = document.createElement("div");
	           container.style.cssText="background-color: #fff;border: 1px solid #dbdbdb;height: 30px;width: 30px;"
	           var zicsstext = "cursor:pointer;width: 25px; height: 25px; position: absolute;margin: 2px 0 0 2px;";
	           var src = WEB_ROOT+"/common/images/gis/layer.png";
	           this.zoomInButton = _this.createButton("图层", "图层却换", 'a', container, zicsstext,src);
	           this.zoomInButton.onclick = _this.zoomLayer;
	           return container;
	      };
	      this.map.addControl(newControl);
	},
	showScreen:function(){
		 var newControl = new T.Control({position: T_ANCHOR_TOP_RIGHT});
		 _this = this;
		 newControl.onAdd = function (map) {
	           var container = document.createElement("div");
	           container.style.cssText="background-color: #fff;border: 1px solid #dbdbdb;height: 30px;width: 30px;"
	           var zicsstext = "cursor:pointer;width: 25px; height: 25px; position: absolute;margin: 2px 0 0 2px;";
	           var src = WEB_ROOT+"/common/images/gis/screen.png";
	           this.zoomInButton = _this.createButton("全屏", "全屏放大", 'a', container, zicsstext,src);
	           this.zoomInButton.onclick = _this.zoomScreen;
	           return container;
	      };
	      this.map.addControl(newControl);
	},
	showZoomPrototype:function(){
		   var newControl = new T.Control({position: T_ANCHOR_TOP_RIGHT});
		   _this = this;
	       newControl.onAdd = function (map) {
	           var container = document.createElement("div");
	           container.style.cssText="background-color: #fff;border: 1px solid #dbdbdb;height: 30px;width: 30px;"
	           var zicsstext = "cursor:pointer;width: 25px; height: 25px; position: absolute;margin: 2px 0 0 2px;";
	           var src = WEB_ROOT+"/common/images/gis/location.png";
	           this.zoomInButton = _this.createButton("定位", "定位当前范围", 'a', container, zicsstext,src);
	           this.zoomInButton.onclick = _this.zoomIn;
	           return container;
	       };
	       this.map.addControl(newControl);
	},
	zoomScreen:function(){
		 var elem = document.getElementById("mapDiv");
		 this.requestFullScreen(elem);// 某个页面元素
	},
    zoomIn:function() {
    	TiandtMap.map.centerAndZoom(new T.LngLat(116.365810,26.332810), 11);
    },
    zoomLayer:function(){
    	var display = $(".layer-pop").css("display");
    	if(display == 'none'){
			$(".layer-pop").toggle(500);
		}else{
			$(".layer-pop").toggle(500);
		}
    },
    requestFullScreen:function(element) {
        // 判断各种浏览器，找到正确的方法
        var requestMethod = element.requestFullScreen || //W3C
        element.webkitRequestFullScreen ||    //Chrome等
        element.mozRequestFullScreen || //FireFox
        element.msRequestFullScreen; //IE11
        if (requestMethod) {
            requestMethod.call(element);
        }
        else if (typeof window.ActiveXObject !== "undefined") {//for Internet Explorer
            var wscript = new ActiveXObject("WScript.Shell");
            if (wscript !== null) {
                wscript.SendKeys("{F11}");
            }
        }
    },
    //退出全屏 判断浏览器种类
    exitFull:function () {
        // 判断各种浏览器，找到正确的方法
        var exitMethod = document.exitFullscreen || //W3C
        document.mozCancelFullScreen ||    //Chrome等
        document.webkitExitFullscreen || //FireFox
        document.webkitExitFullscreen; //IE11
        if (exitMethod) {
            exitMethod.call(document);
        }
        else if (typeof window.ActiveXObject !== "undefined") {//for Internet Explorer
            var wscript = new ActiveXObject("WScript.Shell");
            if (wscript !== null) {
                wscript.SendKeys("{F11}");
            }
        }
    },
	createButton:function(html, title, className, container, csstext,src) {
        var link = document.createElement("img");
        if (container) {
            container.appendChild(link);
        }
        link.src=src;
        link.innerHTML = html;
        link.title = title;
        link.style.cssText = csstext;
        return link;
    },
    drawArea:function(json){
		var area = json.area; 
		var points = area.points; 
		//如果有区域坐标信息，画出此行政区的多边形。 
		if(points && points.length != 0){ 
	        for(var i = 0;i < points.length;i++){ 
				var region = points[i].region;//单个面 
				var pointArr = region.split(","); 
				var pointsz = []; 
				for(var j = 0;j < pointArr.length - 1;j++){ 
					var p = pointArr[j]; 
					var pArr = p.split(" "); 
					var point = new T.LngLat(pArr[0],pArr[1]); 
					pointsz.push(point);				 
				} 
				//面的线的样式 
				 var poly = new T.Polygon(pointsz, {
                     color: "#EE2C2C",
                     fillColor:"#AFEEEE",
                     weight: 2,
                     opacity: 1,
                     fillOpacity:0.3,
                     lineStyle: "solid"
                 });
				this.map.addOverLay(poly); 
			} 
		} 
	},
	drawLine:function(json,Linew){
		var line = json.line; 
		var points = line.points; 
		//如果有区域坐标信息，画出此行政区的多边形。 
		if(points && points.length != 0){ 
	        for(var i = 0;i < points.length;i++){ 
				var region = points[i].region;//单个面 
				var pointArr = region.split(","); 
				var pointsz = []; 
				for(var j = 0;j < pointArr.length - 1;j++){ 
					var p = pointArr[j]; 
					var pArr = p.split(" "); 
					var point = new T.LngLat(pArr[0],pArr[1]); 
					pointsz.push(point);				 
				} 
				//面的线的样式 
				 var poly = new T.Polyline(pointsz, {
                     color: "#0070FF",
                     weight: Linew,
                     opacity: 1,
                     lineStyle: "solid"
                 });
				this.map.addOverLay(poly); 
			} 
		} 
	},
	handData:function(){
		var areaArr = [shichengArea];//边界坐标数组。
		for (var i = 0,aLen = areaArr.length; i < aLen; i++) {
			this.drawArea(areaArr[i]);
		};
	},
	riverData:function(){
		var lineArr = [qingjiangLine,lskLine,qingjiangZLine,qingjiangZ1Line];
		var Linew = 3;
		for (var i = 0,aLen = lineArr.length; i < aLen; i++) {
			var tp = lineArr[i].linetp;
			if(tp == 11){
				Linew = 1;
			}
			this.drawLine(lineArr[i],Linew);
		};
	}
}
$(function(){
	var zt = 0;
	$("#tab-resizer").css("background-image","url("+WEB_ROOT+"/common/images/gis/arrow21.png)");
	TiandtMap.initMap();
	TiandtMap.handData();
	TiandtMap.riverData();
	TiandtData.initData(null,0);
	//动态却换“更多”功能
	$("#stationList_defaultView").on("click","div div",function(e){
		var id = $(this).attr("id");
		var html = "";
		var div = "";
		if(id == undefined){
			return;
		}else if(id == "rvInfo"){
			div += '<div class="more_show_div actice" id="rvInfo">河流网络</div><div class="more_show_div" id="adInfo">行政区域</div><div class="more_show_div" id="ztInfo">专题管理</div></div>';
			var data = TiandtData.rvData;
			if(data.length > 0){
				for(var i = 0 ;i < data.length;i++){
					html+='<span class="more_span" id="'+data[i].rvCd+'">'+data[i].rvNm+'</span>';
				}
			}
		}else if(id == "adInfo"){
			div += '<div class="more_show_div" id="rvInfo">河流网络</div><div class="more_show_div actice" id="adInfo">行政区域</div><div class="more_show_div" id="ztInfo">专题管理</div></div>';
			var data = TiandtData.adData;
			if(data.length > 0){
				for(var i = 0 ;i < data.length;i++){
					html+='<span class="more_span" id="'+data[i].addvcd+'">'+data[i].addvnm+'</span>';
				}
			}
		}else{
			div += '<div class="more_show_div" id="rvInfo">河流网络</div><div class="more_show_div " id="adInfo">行政区域</div><div class="more_show_div actice" id="ztInfo">专题管理</div></div>';
			html +='<div class="more_zt_div" style="margin-left: 0px;"><lable>雨量分布图</lable><lable class="more-lab" >+</lable></div>';
			html +='<div class="more_zt_div" style="margin-left: 0px;"><lable>监测站点统计图</lable><lable class="more-lab" >+</lable></div>';
			html +='<div class="more_zt_div" style="margin-left: 0px;"><lable>水功能区划专题图</lable><lable class="more-lab">+</lable></div>';
			html +='<div class="more_zt_div" style="margin-left: 0px;"><lable>事件专题图</lable><lable class="more-lab">+</lable></div>';
			html +='<div class="more_zt_div" style="margin-left: 0px;"><lable>水质监测专题图</lable><lable class="more-lab">+</lable></div>';
			html +='<div class="more_zt_div" style="margin-left: 0px;"><lable>污染浓度分布专题图</lable><lable class="more-lab">+</lable></div>';
			html +='<div class="more_zt_div" style="margin-left: 0px;"><lable>水生态功能区划</lable><lable class="more-lab">+</lable></div>';
			html +='<div class="more_zt_div" style="margin-left: 0px;"><lable>水污染源专题图</lable><lable class="more-lab">+</lable></div>';
			html +='<div class="more_zt_div" style="margin-left: 0px;"><lable>人口分布专题图</lable><lable class="more-lab">+</lable></div>';
			html +='<div class="more_zt_div" style="margin-left: 0px;"><lable>水域岸线利用现状图</lable><lable class="more-lab">+</lable></div>';
			html +='<div class="more_zt_div" style="margin-left: 0px;"><lable>水污染治理专题图 </lable><lable class="more-lab">+</lable></div>';
		}
		$("#inpt_query").hide();
		$("#all_div").css("top","0px");
		TiandtData.inintLeftMore(html,div);
		$("#more_div").css("margin-left","6px");
		$(".more_span").css({"width":"30%","margin-left":"6px","line-height":"3em","left":"14px","display": "inline-block","color":"#3CB371"});
		$(".more_show_div").css("margin-left","0px");
		$(".more_slgz_div").css("margin-left","0px");
		$(".well_li").css({"cursor":"initial","padding":" 10px 0px"});
	});
	//左侧菜单选择，如：流河、测站、行政区
	$("#content_list_div").on("click","div",function(){
		var activeDiv = $(this).hasClass("rdijit-state-selected");
		var all = $(this).hasClass("all");
		var fav = $(this).hasClass("fav");
		var more = $(this).hasClass("more");
		if(!activeDiv){
			$(this).addClass('rdijit-state-selected').siblings().removeClass("rdijit-state-selected");
		}
		if(all){
			TiandtData.initData(null,0);
			zt = 0;
		}
		if(fav){
			TiandtData.initData(null,1);
			zt = 1;
		}
		if(more){
			TiandtData.initData(null,2);
			zt = 2;
		}
	});
	var vi = 0;
	$("#stationList_defaultView").on("click","li",function(e){
		if($(this).find("div span")[0] != undefined){
			var activeStcd = $(this).find("div span")[0].innerHTML;
			var id = $(this).find("div span")[0].id;
			var sttp = $(this).find("div span")[0].title;
			var listData = TiandtData.data;
			if(listData.length > 0){
				for(var i = 0 ;i < listData.length;i++){
					if((id == 'rv_stcd' ? listData[i].rvCd:listData[i].stcd) == activeStcd){
						if(id == 'rv_stcd'){
							TiandtMap.zoom = 11;
							TiandtMap.mapLocation(listData[i].rvOnLgtd,listData[i].rvOnLttd);
							var data = {rvCd:listData[i].rvCd};
							var reulst = commonUtils.get(WEB_ROOT+"/data/monitor/getAdcdRiverByRvUser",data,false);
							var rvUserData = reulst.data;
							var content = mapMroe.addRiverOpen(listData[i],rvUserData);
							TiandtMap.openInfo(content,e,1,listData[i].rvOnLgtd,listData[i].rvOnLttd);
							break;
						}
						if(sttp == 'SP'){
							TiandtMap.mapLocation(listData[i].lgtd,listData[i].lttd);
							var content = mapMroe.appendVideoOpenInfo(vi);
							TiandtMap.openInfo(content,e,2,listData[i].lgtd,listData[i].lttd)
							vi++;
							break;
						}
						var url = WEB_ROOT+"/hydro/river/newRiverInfo";
						if(sttp == 'PP'){
							url = WEB_ROOT+"/hydro/pptn/newPptnInfo";
						}
						var data = {stcd:activeStcd};
						var reulst = commonUtils.get(url,data,false);
						if(reulst.flag){
							var datas = reulst.data;
							TiandtMap.mapLocation(listData[i].lgtd,listData[i].lttd);
							var content = mapMroe.appendOpenInfo(datas);
							TiandtMap.openInfo(content,e,0,listData[i].lgtd,listData[i].lttd)
						}
						break;
					}
				}
			}
		}
	});
	$(document).keydown(function(event){
		var code=event.keyCode;
		if(code==13){
			var key = $("#keyText").val();
			TiandtData.initData(key,zt);
		}
	});
	//隐藏左侧菜单
	$("#tab-resizer").click(function(){
		var display = $("#win_div_map").css("display");
		if(display == 'none'){
			$("#win_div_map").toggle(700);
			$(".tab-resizer").css("left","344px");
			$("#tab-resizer").css("background-image","url("+WEB_ROOT+"/common/images/gis/arrow21.png)");
		}else{
			$("#win_div_map").toggle(700);
			$(".tab-resizer").css("left","0px");
			$("#tab-resizer").css("background-image","url("+WEB_ROOT+"/common/images/gis/arrow22.png)");
		}
	});
	$(".layer-pop").mouseleave(function(){
		$(".layer-pop").toggle(500);
	});
})