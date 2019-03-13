var TiandtMap = {
	map:null,
	data:null,
	rvData:null,//河流数据
	rvUserData:null,//河长数据
	markers:[],
	opts:null,
	riverOpts:null,
	overlays:null,
	videoOpts:null,
	stOpts:null,
	zoom:13,
	labColor:"#EEEE00",
	rlabColor:"#00FF00",
	layer_img:null,
	layer_cva:null,
	layer_ann:null,
	lay:null,
	lay1:null,
	maxZoom:16,
	polyLine:null,//河流线的事件
	LocationRiver:[],//每条河流弹出定位点
	pointEvent:[],
	initLay:function(){
		this.layer_img = "http://t0.tianditu.cn/img_w/wmts?" +
	        "SERVICE=WMTS&REQUEST=GetTile&VERSION=1.0.0&LAYER=img&STYLE=default&TILEMATRIXSET=w&FORMAT=tiles" +
	        "&TILEMATRIX={z}&TILEROW={y}&TILECOL={x}";
		this.layer_cva = "http://t0.tianditu.cn/vec_w/wmts?"+
			"SERVICE=WMTS&REQUEST=GetTile&VERSION=1.0.0&LAYER=vec&STYLE=default&TILEMATRIXSET=w&FORMAT=tiles"+
			"&TILEMATRIX={z}&TILEROW={y}&TILECOL={x}";
	    this.layer_ann ="http://t0.tianditu.cn/cia_w/wmts?" +
	        "SERVICE=WMTS&REQUEST=GetTile&VERSION=1.0.0&LAYER=cia&STYLE=default&TILEMATRIXSET=w&FORMAT=tiles" +
	        "&TILEMATRIX={z}&TILEROW={y}&TILECOL={x}";
	},
	initMap:function(){
		this.initLay();
		this.lay = new T.TileLayer(this.layer_img, {minZoom: 1, maxZoom: this.maxZoom});
		this.lay1 = new T.TileLayer(this.layer_ann, {minZoom: 1, maxZoom: this.maxZoom});
		this.map = new T.Map('map');
		this.map.addLayer(this.lay);//影像图
		this.map.addLayer(this.lay1);//中文标注图
        this.map.centerAndZoom(new T.LngLat(116.172180,26.290950), 11);
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
        var str = "精度：0.000000，纬度：0.000000";
    	$("#lgt").html(str);
        var tbZoom = "缩放："+this.map.getZoom();
    	$("#tb-zoom").html(tbZoom);
        //鼠标在地图区域移动过程中触发此事件
        this.map.addEventListener("mousemove",function(e){
        	var obj = e.lnglat;
        	var str = "精度："+obj.lng+"，纬度："+obj.lat;
        	$("#lgt").html(str);
        });
        //地图更改缩放级别开始时触发触发此事件
        this.map.addEventListener("zoomend",function(e){
        	var tbZoom = "缩放："+this.getZoom();
        	$("#tb-zoom").html(tbZoom);
        });
        this.opts = {
    		minWidth : 394,     // 信息窗口宽度
    		maxHeight: 270,     // 信息窗口高度
    		autoPan : true,  
    		closeOnClick:true
		};
        this.stOpts={
        		minWidth : 700,     // 信息窗口宽度
    			maxHeight: 500,     // 信息窗口高度
    			autoPan : true, 
    			closeOnClick:true//设置关闭按钮	
        };
		this.riverOpts = {
			minWidth : 700,     // 信息窗口宽度
			maxHeight: 600,     // 信息窗口高度
			autoPan : true, 
			offset:new T.Point(200,200),
			closeOnClick:true//设置关闭按钮
		}
        //获取屏幕分辨率
		var screenWidth=screen.width;
		if(screenWidth==1920){
			this.videoOpts = {
				minWidth : 1300,     // 信息窗口宽度
				maxHeight:700,     // 信息窗口高度
				autoPan : true,  
				offset:new T.Point(200,350),
				closeOnClick:true
			}
		}else if(screenWidth==1680){
			this.videoOpts = {
				minWidth : 1200,     // 信息窗口宽度
				maxHeight: 650,     // 信息窗口高度
				autoPan : true, 
				offset:new T.Point(150,350),
				closeOnClick:true
			}
		}else if(screenWidth==1600){
			this.videoOpts = {
				minWidth : 1000,     // 信息窗口宽度
				maxHeight: 600,     // 信息窗口高度
				offset:new T.Point(140,310),
				autoPan : true,  
				closeOnClick:true
			}
		}else if(screenWidth==1440){
			this.videoOpts = {
				minWidth : 900,     // 信息窗口宽度
				maxHeight: 600,     // 信息窗口高度
				autoPan : true,  
				offset:new T.Point(140,310),
				closeOnClick:true
			}
		}else{
			this.videoOpts = {
					minWidth : 700,     // 信息窗口宽度
					maxHeight: 600,     // 信息窗口高度
					autoPan : true,  
					offset:new T.Point(140,240),
					closeOnClick:true
				}
		}
	},
	loadData:function(){
		var data = {'stnm':''};
		var reulst = commonUtils.get(WEB_ROOT+"/hydro/stbprp/getStbprpInfo",data,false);
		if(reulst.flag){
			this.data = reulst.data;
		}
	},
	localUrl:function(stcd,opt){
		if(opt == 0){			
			location.href=WEB_ROOT+"/basicSite/basicSiteInfo.jsp?stcd="+stcd;
		}else if(opt == 1){
			location.href=WEB_ROOT+"/data_center/water/rain/rain_info.jsp?stcd="+stcd;
		}else if(opt == 2){
			location.href=WEB_ROOT+"/data_center/water/river/river_info.jsp?stcd="+stcd;
		}else if(opt == 3){
			location.href=WEB_ROOT+"/data_center/water/quality/quality_info.jsp";
		}else if(opt == 4){
			location.href=WEB_ROOT+"/reservoir/reservoirInfo.jsp?stcd="+stcd;
		}
	},
	showPptnInfo:function(){
		var datas =  this.data.stbprp
		var vs = 0;
		if(datas.length > 0 ){
			for(var i= 0;i <datas.length;i++){
				var pt = new T.LngLat(datas[i].lgtd,datas[i].lttd);
				var sttp = datas[i].sttp;
				var images = "";
				var w = 15;
				var h = 15;
				if(sttp == 'PP'){
					w = 10;
					h = 10;
					images = WEB_ROOT+"/common/images/river/pp_0.png";
				}else if(sttp == 'SP'){
					w = 20;
					h = 20;
					images = WEB_ROOT+"/common/images/river/video.png";
				}else if(sttp == "SZ"){
					images = WEB_ROOT+"/common/images/river/shuiz.png";
				}else if(sttp == 'SY'){
					images = WEB_ROOT+"/common/images/river/dbsyd.png";
				}else if(sttp == 'RR'){
					images = WEB_ROOT+"/common/images/river/sk.png";
				}else if(sttp == 'ST'){
					images = WEB_ROOT+"/common/images/river/st.png";
				}else{
					images = WEB_ROOT+"/common/images/river/sk1.png";
				}
				var icon = new T.Icon({
	                iconUrl: images,
	                iconSize: new T.Point(w,h),
	                iconAnchor: new T.Point(2,2)
	            });
				var marker = new T.Marker(pt,{icon:icon,tp:sttp});  // 创建标注
				this.markers.push(marker);
				this.map.addOverLay(marker);// 将标注添加到地图中
				if(sttp == "SP"){
					this.addVideoClickHandler(datas[i],marker,vs,datas[i].stnm);
					vs++;
					console.log(vs);
				}else{					
					this.addClickHandler(datas[i].stcd,sttp,marker,datas[i].stnm);
				}
			}
		}
	},
	addVideoClickHandler:function(listData,marker){
		var _this = this;
		marker.addEventListener("click",function(e){
				_this.mapLocation(listData.lgtd,listData.lttd);
				var channerId=listData.channerId;
				var content = mapMroe.appendVideoOpenInfo(channerId,listData.stnm);
				_this.openInfo(content,e,3);
			}
		);
	},
	addClickHandler:function(stcd,sttp,marker,stnm){
		var _this = this;
		marker.addEventListener("click",function(e){
			var url = WEB_ROOT+"/hydro/river/newRiverInfo";
			if(sttp == 'PP'){
				url = WEB_ROOT+"/hydro/pptn/newPptnInfo";
			}else if(sttp == 'SZ'){
				url = WEB_ROOT+"/data_monitor/quality/getQualityObj";
			}else if(sttp == 'RR'){
				url = WEB_ROOT+"/data/reservoir/getRvvrById";
			}else if(sttp == 'ST'){
				url = WEB_ROOT+"/data/pool/getPoolById";
			}else{}
			var data = {stcd:stcd};
			var reulst = commonUtils.get(url,data,false);
			if(reulst.flag){
				var datas = reulst.data;
				var content = mapMroe.appendOpenInfo(datas,stnm,sttp);
				if(sttp=='RR'||sttp == 'ST'){
					TiandtMap.openInfo(content,e,2,datas[0].lgtd,datas[0].lttd);
				}else{
					if(sttp!='SP'){
						TiandtMap.openInfo(content,e,0,datas.lgtd,datas.lttd);
					}
				 }
				}
			}
		);
	},
	clickWindow:function(obj,type,listData){
		var active = $(obj).hasClass("active");
		if(!active){
			$(obj).addClass('active').siblings().removeClass("active");
			$("#Section"+type+"").addClass("in active").siblings().removeClass("in active");
			var content = mapMroe.addRiverOpen();
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
		var opt=null;
		if(tp==0){
			opt=this.opts;
		}else if(tp == 1){
			opt=this.riverOpts;
		}else if(tp == 2){
			opt=this.stOpts;
		}else{
			opt=this.videoOpts;
		}
		var infoWindow = new T.InfoWindow(content,opt); 
		this.map.openInfoWindow(infoWindow,point); //开启信息窗口
	},	
	
	mapLocation:function(lgtd,lttd){
		this.map.centerAndZoom(new T.LngLat(lgtd,lttd), this.zoom);
		this.map.panTo(new T.LngLat(lgtd,lttd),this.zoom);
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
	           this.zoomInButton = _this.createButton("图层", "图层切换", 'a', container, zicsstext,src);
	           this.zoomInButton.onmouseover = _this.zoomLayer;
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
		var docElm = document.documentElement;
        //W3C
        if (docElm.requestFullscreen) {
            docElm.requestFullscreen();
        }
        //FireFox
        else if (docElm.mozRequestFullScreen) {
            docElm.mozRequestFullScreen();
        }
        else if (docElm.msRequestFullscreen) {
            docElm.msRequestFullscreen();
        }
        //Chrome等
        else if (docElm.webkitRequestFullScreen) {
            docElm.webkitRequestFullScreen();
        }
	},
    zoomIn:function() {
    	TiandtMap.map.centerAndZoom(new T.LngLat(116.328390,26.303110), 10);
    },
    zoomLayer:function(){
    	var display = $(".layer-pop").css("display");
    	if(display == 'none'){
			$(".layer-pop").toggle(500);
		}else{
			$(".layer-pop").toggle(500);
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
    //显示河流的详情
    showRiverInfo:function(rvCD,listData){
		//河流信息定位
    	var points = new T.LngLat(116.335430,26.341110);
		this.map.centerAndZoom(points, 11);
		var data = {rvCd:rvCD};
		var rt = commonUtils.get(WEB_ROOT+"/data/monitor/getAdcdRiverByRvUser",data,false);
		this.rvUserData = rt.data;
		this.rvData = listData;
		var content = mapMroe.addRiverOpen();
		this.openInfo(content,null,1,points.lng,points.lat);
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
                     color: "#00FF00",
                     fillColor:"#AFEEEE",
                     weight: 3,
                     opacity: 1,
                     fillOpacity:0,
                     lineStyle: "solid"
                 });
				this.map.addOverLay(poly); 
			} 
		} 
	},
	flagRiverInfo:function(data,rvcd){
		if(data != null){
			for(var i = 0 ;i < data.length ;i++){
				if(data[i].rvCd == rvcd){
					return true;
				}
			}
		}
		return false;
	},
	drawLine:function(json,Linew){
		var line = json.line; 
		var points = line.points; 
		var rvNm = json.riverNm;
		var rvCd = json.riverCd;
		var flag = this.flagRiverInfo(TiandtData.rvData,rvCd);
		//如果有区域坐标信息，画出此行政区的多边形。 
		if(flag && points && points.length != 0){ 
	        for(var i = 0;i < points.length;i++){ 
				var region = points[i].region;//单个面 
				var pointArr = region.split(","); 
				var pointsz = []; 
				var pointLine = [];
				for(var j = 0;j < pointArr.length - 1;j++){ 
					var p = pointArr[j]; 
					var pArr = p.split(" "); 
					var point = new T.LngLat(pArr[0],pArr[1]); 
					pointsz.push(point);
					if(j == parseInt(pointArr.length/2)){
						 pointLine = point;
						 var lactionR = {};
						 lactionR.rvcd=rvCd;
						 lactionR.point=point;
						 //this.map.addOverLay(label);
						 this.LocationRiver.push(lactionR);
					}
				} 
				//线的样式 
				this.polyLine = new T.Polyline(pointsz, {
                     color: "#00F5FF",
                     weight: Linew,
                     opacity: 1,
                     lineStyle: "solid",
                     tp:'line',
                     rvCd:rvCd
                 });
				 this.map.addOverLay(this.polyLine); 
				 var _this = this;
			} 
		} 
	},
	//河流线的点击事件
	EventPolyLine:function(tp,rvNm,lnglat,label,rvCd){
		if(tp == 0){
			this.map.removeOverLay(label);
		}else{
			label.setLabel(rvNm);
			label.setLngLat(lnglat);
			label.setBackgroundColor("#0099FF");
			label.setFontColor("#FFF");
			label.setBorderLine(0)
			label.setZindex(1000);
			this.map.addOverLay(label);
		}
	},
	handData:function(){
		var areaArr = [shichengArea];//边界坐标数组。
		for (var i = 0,aLen = areaArr.length; i < aLen; i++) {
			this.drawArea(areaArr[i]);
		};
	},
	riverData:function(){
		var lineArr = [qingjiangLine,qtsLine,hjhLine,pshLine,ghhLine,xchLine,gthLine,dqjLine,mnhLine,sthLine,lthLine,ldhLine,txhLine,sylhLine,lyphLine,shlhLine,clhLine,bsLine,sbhLine,plhLine,ytlLine,zpkhLine,dqhLine,zbhLine,qxhLine,gxhLine,lxhLine,gjhLine,xjhLine,zkhLine,xshLine,zlhLine,nthLine,slhLine,nljhLine,hkhLine,sbehLine,smhLine,xdhLine,lsLine,hkehLine,ashLine,stkhLine];
		var Linew = 3;
		for (var i = 0,aLen = lineArr.length; i < aLen; i++) {
			var tp = lineArr[i].linetp;
			if(tp == 11){
				Linew = 2;
			}
			if(tp == 22){
				Linew = 1;
			}
			this.drawLine(lineArr[i],Linew);
		};
	},
	checkOverlayTp:function(checked,type){
		var overlay = TiandtMap.map.getOverlays();
		if(this.overlays == null){			
			this.overlays = overlay;
		}
		if(!checked){
    		if(this.overlays.length > 0){
    			for(var i =0 ;i < this.overlays.length;i++){
    				var tp = this.overlays[i].options.tp;
    				if(tp ==  type){
    					TiandtMap.map.removeOverLay(this.overlays[i]);
    				}
    			}
    		}
    	}else{
    		if(this.overlays.length > 0){
    			for(var i =0 ;i < this.overlays.length;i++){
    				var tp = this.overlays[i].options.tp;
    				if(tp == type){
    					TiandtMap.map.addOverLay(this.overlays[i]);
    				}
    			}
    		}
    	}
	}
}
$(function(){
	var zt = 0;
	$("#tab-resizer").css("background-image","url("+WEB_ROOT+"/common/images/gis/arrow21.png)");
	//初始化地图
	TiandtMap.initMap();
	layer.close();
	//加载地图行政区面
	TiandtMap.handData();
	//加载河流相关数据
	TiandtData.initData('',0);
	//加载地图河流线
	TiandtMap.riverData();
	$(".win_div_map").show();
	$(".tab-tl-div").show();
	//动态却换“更多”功能
	$("#stationList_defaultView").on("click","div div",function(e){
		var id = $(this).attr("id");
		var html = "";
		var div = "";
		if(id == undefined){
			return;
		}else if(id == "rvInfo"){
			div += '<div class="more_show_div actice" id="rvInfo">河流网络</div><div class="more_show_div" id="adInfo">行政区域</div><div class="more_show_div" id="ztInfo">一河一档</div></div>';
			var data = TiandtData.rvData;
			if(data.length > 0){
				for(var i = 0 ;i < data.length;i++){
					html+='<span  id="'+data[i].rvCd+'"   style="width:48%;line-height:3em;display:inline-block;color:#0099ff;">'+data[i].rvNm+'</span>';
				}
			}else{
				html += "<li>当前暂无河流网络信息</li>";
			}
		}else if(id == "adInfo"){
			div += '<div class="more_show_div" id="rvInfo">河流网络</div><div class="more_show_div actice" id="adInfo">行政区域</div><div class="more_show_div" id="ztInfo">一河一档</div></div>';
			var data = TiandtData.adData;
			if(data.length > 0){
				for(var i = 0 ;i < data.length;i++){
					html+='<span class="more_span" id="'+data[i].addvcd+'">'+data[i].addvnm+'</span>';
				}
			}else{
				html += "<li>当前暂无行政区划信息</li>";
			}
		}else{
			div += '<div class="more_show_div"  id="rvInfo">河流网络</div><div class="more_show_div " id="adInfo">行政区域</div><div class="more_show_div actice" id="ztInfo">一河一档</div></div>';
			html +='<div class="more_zt_div" onclick="mapMroe.showMoreInfo(1);" style="margin-left: 0px;"><lable>雨量分布</lable><lable class="more-lab" >+</lable></div>';
			html +='<div class="more_zt_div" onclick="mapMroe.showMoreInfo(2);"style="margin-left: 0px;"><lable>监测站点统计</lable><lable class="more-lab" >+</lable></div>';
			html +='<div class="more_zt_div" onclick="mapMroe.showMoreInfo(3);"style="margin-left: 0px;"><lable>水功能区划专题</lable><lable class="more-lab">+</lable></div>';
			html +='<div class="more_zt_div" onclick="mapMroe.showMoreInfo(4);"style="margin-left: 0px;"><lable>河流事件专题</lable><lable class="more-lab">+</lable></div>';
			html +='<div class="more_zt_div" onclick="mapMroe.showMoreInfo(5);"style="margin-left: 0px;"><lable>水质监测专题</lable><lable class="more-lab">+</lable></div>';
			html +='<div class="more_zt_div" onclick="mapMroe.showMoreInfo(6);" style="margin-left: 0px;"><lable>水生态功能专题</lable><lable class="more-lab">+</lable></div>';
			html +='<div class="more_zt_div" onclick="mapMroe.showMoreInfo(7);"style="margin-left: 0px;"><lable>水污染源专题</lable><lable class="more-lab">+</lable></div>';
			html +='<div class="more_zt_div" onclick="mapMroe.showMoreInfo(8);"style="margin-left: 0px;"><lable>人口分布专题</lable><lable class="more-lab">+</lable></div>';
			html +='<div class="more_zt_div" onclick="mapMroe.showMoreInfo(9);"style="margin-left: 0px;"><lable>水域岸线利用</lable><lable class="more-lab">+</lable></div>';
			html +='<div class="more_zt_div" onclick="mapMroe.showMoreInfo(10);"style="margin-left: 0px;"><lable>水污染治理专题 </lable><lable class="more-lab">+</lable></div>';
		}
		
		$("#inpt_query").hide();
		$("#all_div").css("top","0px");
		TiandtData.inintLeftMore(html,div);
		$("#more_div").css("margin-left","6px");
		$(".more_span").css({"width":"48%","line-height":"3em","display": "inline-block","color":"#0099ff"});
		$(".more_show_div").css("margin-left","0px");
		$(".more_slgz_div").css("margin-left","0px");
		 $(".well_li").css({"cursor":"initial","padding":" 10px 0px","height":"98%","border":"0"});
	});
	//左侧菜单选择，如：流河、测站、行政区
	$("#content_list_div").on("click","div",function(){
		var activeDiv = $(this).hasClass("rdijit-state-selected");
		var all = $(this).hasClass("all");
		var fav = $(this).hasClass("fav");
		var more = $(this).hasClass("more");
		$("#keyText").val('');
		if(!activeDiv){
			$(this).addClass('rdijit-state-selected').siblings().removeClass("rdijit-state-selected");
		}
		if(all){
			TiandtData.initData('',0);
			zt = 0;
		}
		if(fav){
			TiandtData.initData('',1);
			zt = 1;
		}
		if(more){
			TiandtData.initData('',2);
			zt = 2;
		}
	});
	//点击操作“河流、站点信息”
	$("#stationList_defaultView").on("click","li div",function(e){
		if($(this).find("span")[0] != undefined){
			if($(this).siblings().attr('id') != "more_div"){
				$(this).parent().siblings().removeClass('leftactive');
				$(this).parent().addClass('leftactive');
			}else{
				$(this).parent().siblings().removeClass('leftactive');
				$(this).parent().removeClass('leftactive');
			}
			var activeStcd = $(this).find("span")[0].innerHTML;
			var activeStnm = $(this).find("span")[1].innerHTML;
			var id = $(this).find("span")[0].id;
			var sttp = $(this).find("span")[0].title;
			var listData = TiandtData.data;
			var isStcd;
			if(listData.length > 0){
				for(var i = 0 ;i < listData.length;i++){
					if(listData[i].sttp == 'RR'){
						isStcd = listData[i].rsCd;
					}else if(listData[i].sttp == 'ST'){
						isStcd = listData[i].damcd;
					}else{
						isStcd = listData[i].rvCd;
					}
					if((id == 'rv_stcd' ? isStcd : listData[i].stcd) == activeStcd){
						if(id == 'rv_stcd' && sttp != 'RR' && sttp != 'ST'){
							var rvCD = listData[i].rvCd;
							var locatrvs = TiandtMap.LocationRiver;
							var points = [];
							//河流信息定位
							TiandtMap.showRiverInfo(rvCD,listData[i]);
							break;
						}
						//如果是视频站的话
						if(sttp == 'SP'){
							TiandtMap.mapLocation(listData[i].lgtd,listData[i].lttd);
							var channerId=listData[i].channerId;
							var content = mapMroe.appendVideoOpenInfo(channerId,activeStnm);
							TiandtMap.openInfo(content,e,3,listData[i].lgtd,listData[i].lttd);
						}
						var url = WEB_ROOT+"/hydro/river/newRiverInfo";
						if(sttp == 'PP'){
							url = WEB_ROOT+"/hydro/pptn/newPptnInfo";
						}else if(sttp == 'SZ'){
							url = WEB_ROOT+"/data_monitor/quality/getQualityObj";
						}else if(sttp == 'RR'){
							url = WEB_ROOT+"/data/reservoir/getRvvrById";
						}else if(sttp == 'ST'){
							url = WEB_ROOT+"/data/pool/getPoolById";
						}else{}
						var data = {stcd:activeStcd};
						var reulst = commonUtils.get(url,data,false);
						if(reulst.flag){
							var datas = reulst.data;
							TiandtMap.mapLocation(listData[i].lgtd,listData[i].lttd);
							var  content = mapMroe.appendOpenInfo(datas,activeStnm,sttp);
							if(sttp=='RR'||sttp == 'ST'){
								TiandtMap.openInfo(content,e,2,listData[i].lgtd,listData[i].lttd);
							}else{
								if(sttp!='SP'){
									TiandtMap.openInfo(content,e,0,listData[i].lgtd,listData[i].lttd);
								}
							}
														
						}
						break;
					}
				}
			}
		}
	});
	//查询
	$("#rv_btn").click(function(){
		var key = $("#keyText").val();
		TiandtData.initData(key,zt);
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
			$(".tab-resizer").css("left","282px");
			$("#tab-resizer").css("background-image","url("+WEB_ROOT+"/common/images/gis/arrow21.png)");
		}else{
			$("#win_div_map").toggle(700);
			$(".tab-resizer").css("left","0px");
			$("#tab-resizer").css("background-image","url("+WEB_ROOT+"/common/images/gis/arrow22.png)");
		}
	});
	$(".layer-pop").mouseleave(function(){
		$(".layer-pop").toggle(200);
	});
	//图层却换，卫星图
	$("#img_type").click(function(){
		TiandtMap.map.removeLayer(TiandtMap.lay);
		TiandtMap.map.removeLayer(TiandtMap.lay1);
		TiandtMap.lay = new T.TileLayer(TiandtMap.layer_img, {minZoom: 1, maxZoom: TiandtMap.maxZoom});
		TiandtMap.lay1 = new T.TileLayer(TiandtMap.layer_ann, {minZoom: 1, maxZoom: TiandtMap.maxZoom});
		TiandtMap.map.addLayer(TiandtMap.lay);
		TiandtMap.map.addLayer(TiandtMap.lay1);
		TiandtMap.map.clearOverLays();
		TiandtMap.labColor="#EEEE00";
		TiandtMap.handData();
		TiandtMap.riverData();
		TiandtMap.showPptnInfo(TiandtMap.data.stbprp);
		$(".tab-div-yjya").css("color","#FF0000");
		$(".tab-div-hezs").css("backgroundColor","#fff");
		$(".tab-div-hezs").css("color","#0099ff");
		$(".tab-div-yhyc").css("backgroundColor","#fff");
		$(".tab-div-yhyc").css("color","#0099ff");
	});
	//图层却换，矢量图
	$("#ter_type").click(function(){
		TiandtMap.map.removeLayer(TiandtMap.lay);
		TiandtMap.map.removeLayer(TiandtMap.lay1);
		TiandtMap.map.clearLayers();
		TiandtMap.lay = new T.TileLayer(TiandtMap.layer_cva, {minZoom: 1, maxZoom: TiandtMap.maxZoom});
		TiandtMap.lay1 = new T.TileLayer(TiandtMap.layer_ann, {minZoom: 1, maxZoom: TiandtMap.maxZoom});
		TiandtMap.map.clearOverLays();
		TiandtMap.labColor="#000000";
		TiandtMap.handData();
		TiandtMap.riverData();
		TiandtMap.showPptnInfo(TiandtMap.data.stbprp);
		$(".tab-div-hezs").css("backgroundColor","#0099ff");
		$(".tab-div-hezs").css("color","#fff");
		$(".tab-div-yhyc").css("backgroundColor","#0099ff");
		$(".tab-div-yhyc").css("color","#fff");
	});
	//图层显示
	$(".tab-div-img").on("click","img",function(){
		if($("#divImg").css("display") == "block"){
			$("#divImg").hide();
			$("#ts_div").hide();
			$("#img1").hide();
			$("#img2").show();
		}else{
			$("#divImg").show();
			$("#ts_div").show();
			$("#img2").hide();
			$("#img1").show();
		}
	});
	//图层事件
	$("input[type=checkbox]").click(function(){
		$('input:checkbox').each(function() {
			var val = $(this).val();
			var checked = $(this).is(":checked");
            if(val == "pp"){
            	//雨量图例
            	TiandtMap.checkOverlayTp(checked,"PP");
            }else if(val == 'zz'){
            	//河道水位图例
            	TiandtMap.checkOverlayTp(checked,"ZZ");
            }else if(val == 'sp'){
            	//视频图例
            	TiandtMap.checkOverlayTp(checked,"SP");
            }else if(val == 'sz'){
            	//水质图例
            	TiandtMap.checkOverlayTp(checked,"SZ");
            }else if(val == 'sy'){
            	//水源地
            	TiandtMap.checkOverlayTp(checked,"SY");
            }/*else if(val == 'rr'){
            	//水库
            	TiandtMap.checkOverlayTp(checked,"RR");
            }else if(val == 'st'){
            	//山塘
            	TiandtMap.checkOverlayTp(checked,"ST");
            }*/
        });
	});
	$(document).on("show.bs.modal", ".modal", function(){
	    $(this).draggable({
	    	handle: ".modal-header"   // 只能点击头部拖动
	    });
	    $(this).css("overflow-y", "hide");  // 防止出现滚动条，出现的话，你会把滚动条一起拖着走的
	});
	//河长树
	$(".tab-div-hezs").click(function(){
		var p = $(window).height();	
		var w = $(window).width();	
		var index = layer.open({
		  title :'河长树',
		  type: 2,
		  content: 'previewRv.jsp',
		  area: [''+w+'px', ''+p+'px'],
		  maxmin: true
		});
	});
	 //加载测站基础信息
	TiandtMap.loadData();
	TiandtMap.showPptnInfo();
})
