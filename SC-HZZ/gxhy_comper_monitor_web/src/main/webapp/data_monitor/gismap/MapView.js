var mapViewGis={
	opts:null,
	riverOpts:null,
	map:null,
	data:null,
	blist:[],
	markers:[],
	districtLoading:0,
	initMap:function(data_info){
		//设置地图最大、最小缩放范围
		this.map = new BMap.Map("allmap",{enableMapClick: false});
		//设置地图显示样式
		this.map.setMapStyle({
			style:'googlelite',
		    styleJson: [
				{
                    "featureType": "water",
                    "elementType": "all",
                    "stylers": {
                          "color": "#63B8FF"
                    }
				}
		    ]
		});
		this.map.enableScrollWheelZoom(true);
		setTimeout(function () {
			//行政区划分
			mapViewGis.getBoundary(data_info);
		}, 100);
		// 比例尺
		var top_left_control = new BMap.ScaleControl({anchor: BMAP_ANCHOR_TOP_LEFT,offset:new BMap.Size(5,10)});
		// 标尺
		var top_right_navigation = new BMap.NavigationControl({anchor:BMAP_ANCHOR_TOP_RIGHT,offset:new BMap.Size(5,50), enableGeolocation: true}); 
		// 缩略图
		var overView = new BMap.OverviewMapControl({isOpen:true});
		this.map.centerAndZoom(new BMap.Point(116.353456,26.339955), 13);
		//添加默认缩略地图控件
		this.map.addControl(overView);          
		//添加地图类型控件
		this.map.addControl(new BMap.MapTypeControl({mapTypes: [BMAP_NORMAL_MAP,BMAP_SATELLITE_MAP]}));  
		this.map.addControl(top_left_control);        
		this.map.addControl(top_right_navigation);  
		//this.polygon();
		this.ZoomControl();
		this.showZoomPrototype();
		this.opts = {
			width : 395,     // 信息窗口宽度
			height: 270,     // 信息窗口高度
			title : "" , // 信息窗口标题
			enableMessage:true//设置允许信息窗发送短息
		};
		this.riverOpts = {
			width : 800,     // 信息窗口宽度
			height: 450,     // 信息窗口高度
			title : "" , // 信息窗口标题
			enableMessage:true//设置允许信息窗发送短息
		}
		this.videoOpts = {
			width : 800,     // 信息窗口宽度
			height: 400,     // 信息窗口高度
			title : "" , // 信息窗口标题
			enableMessage:true//设置允许信息窗发送短息
		}
		//对图标进行显示如：水位、雨量，等
		this.showPptnInfo(data_info.stbprp);
		//显示河长图标信息
		this.showRvLtInfo();
		//点聚合
		//最简单的用法，生成一个marker数组，然后调用markerClusterer类即可。
		var markerClusterer = new BMapLib.MarkerClusterer(this.map, {markers:this.markers});
	    var myStyles = [{
            url: WEB_ROOT+"/common/images/river/gisshow.png",
            size: new BMap.Size(25, 25),
            opt_anchor: [16, 0],
            textColor: '#fff',
            opt_textSize: 10
         }];
	    markerClusterer.setStyles(myStyles);
	},
	loadData:function(){
		var reulst = commonUtils.get(WEB_ROOT+"/hydro/stbprp/getStbprpInfo",null,false);
		if(reulst.flag){
			this.data = reulst.data;
			this.initMap(this.data);
		}
	},
	showPptnInfo:function(datas){
		var vs = 0;
		if(datas.length > 0 ){
			for(var i= 0;i <datas.length;i++){
				var pt = new BMap.Point(datas[i].lgtd,datas[i].lttd);
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
				var myIcon = new BMap.Icon(images, new BMap.Size(w,h),{
					anchor: new BMap.Size(2, 2)
				});
				var label = new BMap.Label(sttp, { offset: new BMap.Size(20, -10) });
		        label.hide();
				myIcon.setImageSize({width: w, height: h});
				var marker = new BMap.Marker(pt,{icon:myIcon});  // 创建标注
				marker.setLabel(label);
				this.markers.push(marker);
				this.map.addOverlay(marker);               // 将标注添加到地图中
				if(sttp == "SP"){
					this.addVideoClickHandler(datas[i],marker,vs);
					vs++;
				}else{					
					this.addClickHandler(datas[i].stcd,sttp,marker);
				}
			}
		}
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
	getBoundary:function(datas){
		var cityNames = datas.adcds;
		var level = datas.level;
		var it = 0;
		var citNm = "";
		if(level <= 2){
			//it = 0;
			citNm = cityNames[0].addvnm;
		}
//		var cityNames = ["石城县宛城区","石城县卧龙区","石城县西峡县","石城县新野县","石城县唐河县","石城县淅川县","石城县镇平县","石城县内乡县","石城县南召县","石城县方城县","石城县社旗县","石城县桐柏县","石城县邓州市"];
		for(var i = it;i < cityNames.length;i++){
			this.addDistrict(citNm+cityNames[i].addvnm);
		}
	},
	addDistrict:function(districtName){
		//使用计数器来控制加载过程
		mapViewGis.districtLoading++;
	    var bdary = new BMap.Boundary();
	    bdary.get(districtName, function (rs) {       //获取行政区域
	        var count = rs.boundaries.length; //行政区域的点有多少个
	        if (count === 0) {
	            return;
	        }
	        for (var i = 0; i < count; i++) {
	        	mapViewGis.blist.push({ points: rs.boundaries[i], name: districtName });
	        };
	        //加载完成区域点后计数器-1
	        mapViewGis.districtLoading--;
	        if (mapViewGis.districtLoading == 0) {
	            //全加载完成后画端点
	        	mapViewGis.drawBoundary();
	        }
	    });
	},
	drawBoundary:function(){
		 //包含所有区域的点数组
	    var pointArray = [];

	    /*画遮蔽层的相关方法
	    *思路: 首先在中国地图最外画一圈，圈住理论上所有的中国领土，然后再将每个闭合区域合并进来，并全部连到西北角。
	    *      这样就做出了一个经过多次西北角的闭合多边形*/
	    //定义中国东南西北端点，作为第一层
	    var pNW = { lat: 59.0, lng: 73.0 }
	    var pNE = { lat: 59.0, lng: 136.0 }
	    var pSE = { lat: 3.0, lng: 136.0 }
	    var pSW = { lat: 3.0, lng: 73.0 }
	    //向数组中添加一次闭合多边形，并将西北角再加一次作为之后画闭合区域的起点
	    var pArray = [];
	    pArray.push(pNW);
	    pArray.push(pSW);
	    pArray.push(pSE);
	    pArray.push(pNE);
	    pArray.push(pNW);
		var colors = ["#FFFF00","#1C86EE","#008B00","#00C5CD","#00FA9A","#1E90FF","#548B54","#87CEEB","#43CD80","#698B22","#66CD00","#20B2AA"];
	    //循环添加各闭合区域
	    for (var i = 0; i < mapViewGis.blist.length; i++) {
	        //添加显示用标签层
	        var label = new BMap.Label(mapViewGis.blist[i].name, { offset: new BMap.Size(20, -10) });
	        label.hide();
	        this.map.addOverlay(label);
	        //添加多边形层并显示
	        var ply = new BMap.Polygon(mapViewGis.blist[i].points, { strokeWeight: 3, strokeColor: "#A020F0", fillOpacity: 0.2, fillColor: colors[i]}); //建立多边形覆盖物
	        ply.name = mapViewGis.blist[i].name;
	        ply.label = label;
		
	        this.map.addOverlay(ply);
	        
	        //添加名称标签层
	        //var centerlabel = new BMap.Label(mapViewGis.blist[i].name, { offset: new BMap.Size(0, 0) });
	        //centerlabel.setPosition(ply.getBounds().getCenter());
	        //this.map.addOverlay(centerlabel);

	        //将点增加到视野范围内
	        var path = ply.getPath();
	        pointArray = pointArray.concat(path);
	        //将闭合区域加到遮蔽层上，每次添加完后要再加一次西北角作为下次添加的起点和最后一次的终点
	        pArray = pArray.concat(path);
	        pArray.push(pArray[0]);
	    }

	    //限定显示区域，需要引用api库
	    var boundply = new BMap.Polygon(pointArray);
	    //BMapLib.AreaRestriction.setBounds(this.map, boundply.getBounds());
	    this.map.setViewport(pointArray);    //调整视野 

	    //添加遮蔽层
	    var plyall = new BMap.Polygon(pArray, { strokeOpacity: 0.0000001, strokeColor: "#000000", strokeWeight: 0.00001, fillColor: "#ffffff", fillOpacity: 0.4 }); //建立多边形覆盖物
	   // this.map.addOverlay(plyall);
	},
	//地图上显示管理人员所管理河道面
	polygon:function(){
		var polygon = new BMap.Polygon([
    		new BMap.Point(112.605686,33.350284),
    		new BMap.Point(112.567167,33.313122),
    		
    		new BMap.Point(111.98237,32.738708),
    		new BMap.Point(111.981149,32.740591),
    		
    		new BMap.Point(111.985065,32.738556),
    		new BMap.Point(111.985353,32.740014),
    	], {strokeColor:"blue", strokeWeight:1, strokeOpacity:0.5});  //创建多边形
		this.map.addOverlay(polygon);   //增加多边形
		polygon.enableEditing();
	},
	ZoomControl:function(){
		// 默认停靠位置和偏移量
		this.defaultAnchor = BMAP_ANCHOR_TOP_LEFT;
		this.defaultOffset = new BMap.Size(5, 50);
		// 通过JavaScript的prototype属性继承于BMap.Control
	},
	showZoomPrototype:function(){
		mapViewGis.ZoomControl.prototype = new BMap.Control();
		// 在本方法中创建个div元素作为控件的容器,并将其添加到地图容器中
		mapViewGis.ZoomControl.prototype.initialize = function(map){
		  // 创建一个DOM元素
		  var div = document.createElement("div");
		  var div1 = document.createElement("div");
		  var lab = document.createElement("lable");
		  lab.id="lab";
		  lab.style.fontSize="16px";
		  lab.style.fontWeight="bold";
		  lab.appendChild(document.createTextNode("＋"));
		  // 添加文字说明
		  //div.appendChild(document.createTextNode("图例"));
		  var tl = document.createElement("lable");
		  tl.id="tl";
		  tl.style.margin='0 74% 0px 0px';
		  tl.appendChild(document.createTextNode("图例"));
		  div1.appendChild(tl);
		  div1.appendChild(lab);
		  div.appendChild(div1);
		  // 设置样式
		  div1.style.cursor = "pointer";
		  div.style.width = "243px";
		  div.style.height = "30px";
		  div.style.backgroundColor = "#BFEFFF";
		  div.style.color = "#436EEE";
		  div.style.paddingTop = "3px";
		  div.style.paddingLeft = "8px";
		  div.style.borderRadius = "3px";
		  var dv = document.createElement("div");
		  dv.style.display = "block";
		  dv.style.width = "243px";
		  dv.style.height = "200px";
		  dv.style.backgroundColor = "#BFEFFF";
		  dv.style.marginLeft = "-8px";
		  dv.style.marginTop = "6px";
		  dv.id = "sk";
		  var sp1 = document.createElement("span");
		  var sp2 = document.createElement("span");
		  var sp3 = document.createElement("span");
		  var dsp = document.createElement("div");
		  var img1 = document.createElement("img");
		  var img2 = document.createElement("img");
		  var img3 = document.createElement("img");
		  
		  var lab1 = document.createElement("lable");
		  var lab2 = document.createElement("lable");
		  var lab3 = document.createElement("lable");
		  lab1.style.fontSize='12px';
		  lab1.style.color='#D15FEE';
		  lab1.appendChild(document.createTextNode("正常"));
		  
		  lab2.style.color='#D15FEE';
		  lab2.style.fontSize='12px';
		  lab2.appendChild(document.createTextNode("异常"));
		  
		  lab3.style.color='#D15FEE';
		  lab3.style.fontSize='12px';
		  lab3.appendChild(document.createTextNode("预警"));
		  
		  img1.style.width = '14px';
		  img1.style.margin = '0px 4px 3px 0px';
		  img1.src=WEB_ROOT+"/common/images/river/pp_0.png";
		  
		  img2.style.width = '14px';
		  img2.style.margin = '0px 4px 3px 0px';
		  img2.src=WEB_ROOT+"/common/images/river/pp_2.png";
		  
		  img3.style.width = '14px';
		  img3.style.margin = '0px 4px 3px 0px';
		  img3.src=WEB_ROOT+"/common/images/river/pp_1.png";
		  
		  sp1.style.lineHeight='32px';
		  sp1.style.margin='5px 6px 0px 22px';
		  sp1.appendChild(img1);
		  sp1.appendChild(lab1);
		  
		  sp2.style.lineHeight='32px';
		  sp2.style.margin='5px 6px 0px 22px';
		  sp2.appendChild(img2);
		  sp2.appendChild(lab2);
		  
		  sp3.style.lineHeight='32px';
		  sp3.style.margin='5px 6px 0px 22px';
		  sp3.appendChild(img3);
		  sp3.appendChild(lab3);
		  
		  dv.appendChild(sp1);
		  dv.appendChild(sp2);
		  dv.appendChild(sp3);
		  
		  var dsp1 = document.createElement("div");
		  var inpt1 = document.createElement("input");
		  var dimg1 = document.createElement("img");
		  dimg1.style.width = '12px';
		  dimg1.style.margin = '-4px 4px 0px 3px';
		  dimg1.src=WEB_ROOT+"/common/images/river/pp_0.png";
		  inpt1.type='checkbox';
		  var dlab1 = document.createElement("lable");
		  dlab1.appendChild(document.createTextNode("雨量站"));
		  dsp1.appendChild(inpt1);
		  dsp1.appendChild(dimg1);
		  dsp1.appendChild(dlab1);
		  
		  var dsp2 = document.createElement("div");
		  var inpt2 = document.createElement("input");
		  var dimg2 = document.createElement("img");
		  dimg2.style.width = '14px';
		  dimg2.style.margin = '-4px 3px 0px 3px';
		  dimg2.src=WEB_ROOT+"/common/images/river/sk1.png";
		  inpt2.type='checkbox';
		  var dlab2 = document.createElement("lable");
		  dlab2.appendChild(document.createTextNode("水位站"));
		  dsp2.appendChild(inpt2);
		  dsp2.appendChild(dimg2);
		  dsp2.appendChild(dlab2);
		  
		  var dsp3 = document.createElement("div");
		  var inpt3 = document.createElement("input");
		  var dimg3 = document.createElement("img");
		  dimg3.style.width = '14px';
		  dimg3.style.height = '10px';
		  dimg3.style.margin = '-4px 3px 0px 3px';
		  dimg3.src=WEB_ROOT+"/common/images/river/video.png";
		  inpt3.type='checkbox';
		  var dlab3 = document.createElement("lable");
		  dlab3.appendChild(document.createTextNode("视频站"));
		  dsp3.appendChild(inpt3);
		  dsp3.appendChild(dimg3);
		  dsp3.appendChild(dlab3);
		  
		  var dsp4 = document.createElement("div");
		  var inpt4 = document.createElement("input");
		  var dimg4 = document.createElement("img");
		  dimg4.style.width = '14px';
		  dimg4.style.height = '14px';
		  dimg4.style.margin = '-6px 3px 0px 3px';
		  dimg4.src=WEB_ROOT+"/common/images/river/shuiz.png";
		  inpt4.type='checkbox';
		  var dlab4 = document.createElement("lable");
		  dlab4.appendChild(document.createTextNode("水质站"));
		  dsp4.appendChild(inpt4);
		  dsp4.appendChild(dimg4);
		  dsp4.appendChild(dlab4);
		  
		  var dsp5 = document.createElement("div");
		  var inpt5 = document.createElement("input");
		  var dimg5 = document.createElement("img");
		  dimg5.style.width = '12px';
		  dimg5.style.margin = '-4px 3px 0px 3px';
		  dimg5.src=WEB_ROOT+"/common/images/river/paiwk.png";
		  inpt5.type='checkbox';
		  var dlab5 = document.createElement("lable");
		  dlab5.appendChild(document.createTextNode("排污口"));
		  dsp5.appendChild(inpt5);
		  dsp5.appendChild(dimg5);
		  dsp5.appendChild(dlab5);
		  
		  var dsp6 = document.createElement("div");
		  var inpt6 = document.createElement("input");
		  var dimg6 = document.createElement("img");
		  dimg6.style.width = '12px';
		  dimg6.style.margin = '-4px 3px 0px 3px';
		  dimg6.src=WEB_ROOT+"/common/images/river/qsk.png";
		  inpt6.type='checkbox';
		  var dlab6 = document.createElement("lable");
		  dlab6.appendChild(document.createTextNode("取水口"));
		  dsp6.appendChild(inpt6);
		  dsp6.appendChild(dimg6);
		  dsp6.appendChild(dlab6);
		  
		  var dsp7 = document.createElement("div");
		  var inpt7 = document.createElement("input");
		  var dimg7 = document.createElement("img");
		  dimg7.style.width = '12px';
		  dimg7.style.margin = '-4px 3px 0px 3px';
		  dimg7.src=WEB_ROOT+"/common/images/river/syd.png";
		  inpt7.type='checkbox';
		  var dlab7 = document.createElement("lable");
		  dlab7.appendChild(document.createTextNode("水源地"));
		  dsp7.appendChild(inpt7);
		  dsp7.appendChild(dimg7);
		  dsp7.appendChild(dlab7);
		  
		  
		  var dsp8 = document.createElement("div");
		  var inpt8 = document.createElement("input");
		  var dimg8 = document.createElement("img");
		  dimg8.style.width = '12px';
		  dimg8.style.margin = '-4px 3px 0px 3px';
		  dimg8.src=WEB_ROOT+"/common/images/river/rvLt.png";
		  inpt8.type='checkbox';
		  inpt8.id='jchz';
		  var dlab8 = document.createElement("lable");
		  dlab8.appendChild(document.createTextNode("基层河长"));
		  dsp8.appendChild(inpt8);
		  dsp8.appendChild(dimg8);
		  dsp8.appendChild(dlab8);
		  
		  var dsp9 = document.createElement("div");
		  var inpt9 = document.createElement("input");
		  var dimg9 = document.createElement("img");
		  dimg9.style.width = '12px';
		  dimg9.style.margin = '-4px 3px 0px 3px';
		  dimg9.src=WEB_ROOT+"/common/images/river/rvLt2.png";
		  inpt9.type='checkbox';
		  var dlab9 = document.createElement("lable");
		  dlab9.appendChild(document.createTextNode("保洁员"));
		  dsp9.appendChild(inpt9);
		  dsp9.appendChild(dimg9);
		  dsp9.appendChild(dlab9);
		  
		  var dsp10 = document.createElement("div");
		  var inpt10 = document.createElement("input");
		  var dimg10 = document.createElement("img");
		  dimg10.style.width = '12px';
		  dimg10.style.margin = '-4px 3px 0px 3px';
		  dimg10.src=WEB_ROOT+"/common/images/river/rvLt3.png";
		  inpt10.type='checkbox';
		  var dlab10 = document.createElement("lable");
		  dlab10.appendChild(document.createTextNode("巡查员"));
		  dsp10.appendChild(inpt10);
		  dsp10.appendChild(dimg10);
		  dsp10.appendChild(dlab10);
		  
		  dsp1.style.float="left";
		  dsp1.style.margin="10px 11px 0 10px";
		  dsp2.style.float="left";
		  dsp2.style.margin="10px 11px 0 43px";
		  dsp3.style.float="left";
		  dsp3.style.margin="10px 11px 0 10px";
		  dsp4.style.float="left";
		  dsp4.style.margin="10px 11px 0 42px";
		  dsp5.style.float="left";
		  dsp5.style.margin="10px 11px 0 10px";
		  dsp6.style.float="left";
		  dsp6.style.margin="10px 11px 0 44px";
		  dsp7.style.float="left";
		  dsp7.style.margin="10px 11px 0 10px";
		  dsp8.style.float="left";
		  dsp8.style.margin="10px 11px 0 44px";
		  dsp9.style.float="left";
		  dsp9.style.margin="10px 11px 0 10px";
		  dsp10.style.float="left";
		  dsp10.style.margin="10px 11px 0 44px";
		  
		  dsp.appendChild(dsp1);
		  dsp.appendChild(dsp2);
		  dsp.appendChild(dsp3);
		  dsp.appendChild(dsp4);
		  dsp.appendChild(dsp5);
		  dsp.appendChild(dsp6);
		  dsp.appendChild(dsp7);
		  dsp.appendChild(dsp8);
		  dsp.appendChild(dsp9);
		  dsp.appendChild(dsp10);
		  
		  dsp.style.borderTop='1px solid #DBDBDB';
		  dsp.style.margin='0px 0 0 5px';
		  dv.appendChild(dsp);
		  
		  div.appendChild(dv);
		  // 绑定事件,点击一次放大两级
		  div1.onclick = function(e){
			  if($("#sk").css("display") == "none"){
				  $("#sk").css("display","block");
				  $("#lab").remove();
				  var lab = document.createElement("lable");
				  lab.id="lab";
				  lab.style.fontSize="16px";
				  lab.style.fontWeight="bold";
				  lab.appendChild(document.createTextNode("＋"));
				  div1.prepend(lab);
				  div1.prepend(tl);
			  }else{
				  $("#sk").css("display","none");
				  $("#lab").remove();
				  var labe = document.createElement("lable");
				  labe.appendChild(document.createTextNode("─"));
				  labe.id="lab";
				  labe.style.fontSize="16px";
				  div1.append(labe);
			  }
		  }
		  // 添加DOM元素到地图中
		  map.getContainer().appendChild(div);
		  // 将DOM元素返回
		  return div;
		}
		// 创建控件
		var myZoomCtrl = new mapViewGis.ZoomControl();
		// 添加到地图当中
		this.map.addControl(myZoomCtrl);
	},
	localUrl:function(stcd,opt){
		if(opt == 0){			
			location.href=WEB_ROOT+"/basicSite/basicSiteInfo.jsp?stcd="+stcd;
		}else{
			location.href=WEB_ROOT+"/data_center/water/rain/rain_info.jsp?stcd="+stcd;
		}
	},
	addVideoClickHandler:function(listData,marker,i){
		var _this = this;
		marker.addEventListener("click",function(e){
				_this.mapLocation(listData.lgtd,listData.lttd);
				var content = mapMroe.appendVideoOpenInfo(i);
				mapViewGis.openInfo(content,e,2)
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
				mapViewGis.openInfo(content,e,0)}
			}
		);
	},
	clickWindow:function(obj,type,listData){
		var active = $(obj).hasClass("active");
		if(!active){
			$(obj).addClass('active').siblings().removeClass("active");
			$("#Section"+type+"").addClass("in active").siblings().removeClass("in active");
			var content = mapMroe.addRiverOpen();
			mapViewGis.openInfo(content,obj,1);
		}
	},
	openInfo:function(content,e,tp,lng,lat){
		var p = e.target;
		if(lng == null){
			lng = p.getPosition().lng;
		}
		if(lat == null){
			lat = p.getPosition().lat;
		}
		var point = new BMap.Point(lng,lat);
		var infoWindow = new BMap.InfoWindow(content,tp == 0 ? this.opts : (tp == 1 ? this.riverOpts:this.videoOpts));  // 创建信息窗口对象 
		this.map.openInfoWindow(infoWindow,point); //开启信息窗口
	},	
	mapLocation:function(lgtd,lttd){
		this.map.centerAndZoom(new BMap.Point(lgtd,lttd), 13);
		this.map.panTo(new BMap.Point(lgtd,lttd));
	},
};	
$(function(){
	mapViewInfo.initData(null,0);
	$("#tab-resizer").css("background-image","url("+WEB_ROOT+"/common/images/gis/arrow21.png)");
	//关闭
	$("#close_img_info").click(function(){
		$("#all_div").show();
		$("#info_div").hide();
		$("#river_info_one").hide();
		$("#river_info_all").show();
	});
	//动态却换“更多”功能
	$("#stationList_defaultView").on("click","div div",function(e){
		var id = $(this).attr("id");
		var html = "";
		var div = "";
		var w = "30%"
		if(id == undefined){
			return;
		}else if(id == "rvInfo"){
			div += '<div class="more_show_div actice" id="rvInfo">河流网络</div><div class="more_show_div" id="adInfo">行政区域</div><div class="more_show_div" id="ztInfo">专题管理</div></div>';
			var data = mapViewInfo.rvData;
			if(data.length > 0){
				for(var i = 0 ;i < data.length;i++){
					html+='<span class="more_span" id="'+data[i].rvCd+'">'+data[i].rvNm+'</span>';
				}
			}
		}else if(id == "adInfo"){
			div += '<div class="more_show_div" id="rvInfo">河流网络</div><div class="more_show_div actice" id="adInfo">行政区域</div><div class="more_show_div" id="ztInfo">专题管理</div></div>';
			var data = mapViewInfo.adData;
			if(data.length > 0){
				for(var i = 0 ;i < data.length;i++){
					html+='<span class="more_span" id="'+data[i].addvcd+'">'+data[i].addvnm+'</span>';
				}
			}
			w = "45%";
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
		mapViewInfo.inintLeftMore(html,div);
		$("#more_div").css("margin-left","6px");
		$(".more_span").css({"width":""+w+"","margin-left":"6px","line-height":"3em","display": "inline-block"});
		$(".more_show_div").css("margin-left","0px");
		$(".more_slgz_div").css("margin-left","0px");
		$(".well_li").css({"cursor":"initial","padding":" 10px 0px"});
	});
	var vi = 0;
	$("#stationList_defaultView").on("click","li",function(e){
		if($(this).find("div span")[0] != undefined){
			var activeStcd = $(this).find("div span")[0].innerHTML;
			var id = $(this).find("div span")[0].id;
			var sttp = $(this).find("div span")[0].title;
			var listData = mapViewInfo.data;
			if(listData.length > 0){
				for(var i = 0 ;i < listData.length;i++){
					if((id == 'rv_stcd' ? listData[i].rvCd:listData[i].stcd) == activeStcd){
						if(id == 'rv_stcd'){
							mapViewGis.map.centerAndZoom(new BMap.Point(listData[i].rvOnLgtd,listData[i].rvOnLttd), 11);
							var data = {rvCd:listData[i].rvCd};
							var reulst = commonUtils.get(WEB_ROOT+"/data/monitor/getAdcdRiverByRvUser",data,false);
							var rvUserData = reulst.data;
							var content = mapMroe.addRiverOpen(listData[i],rvUserData);
							mapViewGis.openInfo(content,e,1,listData[i].rvOnLgtd,listData[i].rvOnLttd);
							break;
						}
						if(sttp == 'SP'){
							mapViewGis.mapLocation(listData[i].lgtd,listData[i].lttd);
							var content = mapMroe.appendVideoOpenInfo(vi);
							mapViewGis.openInfo(content,e,2,listData[i].lgtd,listData[i].lttd)
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
							mapViewGis.mapLocation(listData[i].lgtd,listData[i].lttd);
							var content = mapMroe.appendOpenInfo(datas);
							mapViewGis.openInfo(content,e,0,listData[i].lgtd,listData[i].lttd)
						}
						break;
					}
				}
			}
		}
	});
	//动态绑定，水质
	$("#river_water_quality").on("click","span",function(){
		var active = $(this).hasClass("active");
		var id = $(this).attr("id");
		if(!active){
			$(this).addClass('active').siblings().removeClass("active");
		}
		mapViewEchart.initChartWater(mapViewInfo.quaData,id);
	});
	var zt = 0;
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
			mapViewInfo.initData(null,0);
			zt = 0;
		}
		if(fav){
			mapViewInfo.initData(null,1);
			zt = 1;
		}
		if(more){
			mapViewInfo.initData(null,2);
			zt = 2;
		}
	});
	//查询
	$("#rv_btn").click(function(){
		var key = $("#keyText").val();
		mapViewInfo.initData(key,zt);
	});
	$(document).keydown(function(event){
		//alert(event.keyCode);//弹出按键的对应值 
		var code=event.keyCode;
		if(code==13){
			var key = $("#keyText").val();
			mapViewInfo.initData(key,zt);
		}
	});
	//水质说明
	$("#water_qua_spec").click(function(){
		$('#myModal').modal();
		mapViewInfo.showDialog();
	});
	//隐藏左侧菜单
	$("#tab-resizer").click(function(){
		var display = $("#left_menu_div").css("display");
		if(display == 'none'){
			$("#left_menu_div").show();
			var st = $("#left_menu_div").width();
			var ts = $("#tab-resizer").width();
			var  w = $(window).width();
			$("#right_menu_div").css("width",w-ts-st);
		}else{
			$("#left_menu_div").hide();
			$("#right_menu_div").css("width","98%");
		}
	});
	//初始化加载地图
	mapViewGis.loadData();
	$('.tab ul.menu li').click(function(){
        //获得当前被点击的元素索引值
        var Index = $(this).index();
		//给菜单添加选择样式
	    $(this).addClass('active').siblings().removeClass('active');
		//显示对应的div
		$('.tab').children('div').eq(Index).show().siblings('div').hide();
   });
	$("input:checkbox").change(function(e) { 
		var flag=$(this).is(":checked");
		var id = $(this).attr("id");
		if(flag){
			if(id == 'jchz'){
				var allOverlay = mapViewGis.map.getOverlays();
				for (var i = 0; i < allOverlay.length -1; i++){
					var tp = allOverlay[i].content;
					if(tp == "hz"){	
						mapViewGis.map.removeOverlay(allOverlay[i]);
					}
				}
			}
		}
	}); 
});
