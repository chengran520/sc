var map;
var featureLayer;
//引入基础类包，具体看官方API
require([
	 "esri/basemaps",
	 "esri/map", 
	 "esri/dijit/OverviewMap", 
	 "esri/dijit/Scalebar", 
	 "esri/arcgis/utils",
	 "esri/layers/FeatureLayer", 
	 "esri/dijit/Legend", 
	 "dojo/_base/array",
	 "dojo/parser",
	 "esri/dijit/HomeButton",
	 "esri/dijit/LocateButton",
	 "esri/dijit/BasemapToggle", 
	 "dijit/layout/BorderContainer", 
	 "dijit/layout/ContentPane",
	 "dijit/TitlePane",
	 "dijit/layout/AccordionContainer",
	 "dojo/domReady!",
  ], function (
		  esriBasemaps,Map, OverviewMap, Scalebar, arcgisUtils, FeatureLayer, Legend, arrayUtils,
		  parser,HomeButton,LocateButton,BasemapToggle){ 
	esriBasemaps.delorme = {
        baseMapLayers: [
            //中国矢量地图服务
            { url: "http://cache1.arcgisonline.cn/arcgis/rest/services/ChinaOnlineCommunity/MapServer" }
        ],
        //缩略图
        thumbnailUrl: "img/shiliang.jpg",
        title: "矢量图"
    };
	
	parser.parse();
	 var bounds = new Extent({  
         "xmin": -128.816, "ymin": 25.076, "xmax": -72.855, "ymax": 51.385,  
         "spatialReference": { "wkid": 4326 }  
     });
	//创建地图，并添加"topo"为底图
	map = new Map("map", {
	    basemap: "delorme",
	    extent: bounds,  
	    center: [116.365673,26.368832],
	    zoom: 12
	});
	
	 var tileInfo1 = new TileInfo({  
         "dpi": 96,  
         "format": "tiles",  
         "compressionQuality": 0,  
         "spatialReference": new SpatialReference({  
             "wkid": 4326  
         }),  
         "rows": 256,  
         "cols": 256,  
         "origin": {  
             "x": -180,  
             "y": 90  
         },  
         "lods": [{  
             "level": "1",  
             "scale": 295829355.455,  
             "resolution": 0.703914402554  
         }, {  
             "level": "2",  
             "scale": 147914677.727,  
             "resolution": 0.351957201277  
         }, {  
             "level": "3",  
             "scale": 73957338.8636,  
             "resolution": 0.175978600638  
         }, {  
             "level": "4",  
             "scale": 36978669.4318,  
             "resolution": 0.0879893003192  
         }, {  
             "level": "5",  
             "scale": 18489334.7159,  
             "resolution": 0.0439946501596  
         }, {  
             "level": "6",  
             "scale": 9244667.35796,  
             "resolution": 0.0219973250798  
         }, {  
             "level": "7",  
             "scale": 4622333.67898,  
             "resolution": 0.0109986625399  
         }, {  
             "level": "8",  
             "scale": 2311166.83949,  
             "resolution": 0.00549933126995  
         }, {  
             "level": "9",  
             "scale": 1155583.41974,  
             "resolution": 0.00274966563497  
         }, {  
             "level": "10",  
             "scale": 577791.709872,  
             "resolution": 0.00137483281749  
         }]  
     });  
     var tileExtent1 = new Extent(-179.99999, -89.99999, 179.99999, 89.99999, new SpatialReference({  
         wkid: 4326  
     }));  
     var layerInfo1 = new WMTSLayerInfo({  
         tileInfo: tileInfo1,  
         fullExtent: tileExtent1,  
         initialExtent: tileExtent1,  
         identifier: "vec",  
         tileMatrixSet: "c",  
         format: "png",  
         style: "default"  
     });  

     var resourceInfo = {  
         version: "1.0.0",  
         layerInfos: [layerInfo1],  
         copyright: "天地图"  
     };  

     var options = {  
         serviceMode: "KVP",  
         resourceInfo: resourceInfo,  
         layerInfo: layerInfo1  
     };  

     wmtsLayer = new WMTSLayer("http://t0.tianditu.com/vec_c/wmts", options);  
     map.addLayer(wmtsLayer);  
     
     var baseMapMarker = new WebTiledLayer("http://\${subDomain}.tianditu.com/DataServer?T=cva_c&X=\${col}&Y=\${row}&L=\${level}" , {  
         "copyright" : "Tianditu",  
         "id": "Tianditu2" ,  
         "subDomains" : ["t0", "t1", "t2" ],  
         "tileInfo" :tileInfo  
     });  
     map.addLayer(baseMapMarker);  
	
	//新建rivers图层
	var rivers = new FeatureLayer("https://sampleserver3.arcgisonline.com/ArcGIS/rest/services/Hydrography/Watershed173811/MapServer/1", {
	    mode: FeatureLayer.MODE_ONDEMAND,
	    outFields: ["*"]
	});
	//新建waterbodies图层
	var waterbodies = new FeatureLayer("https://sampleserver3.arcgisonline.com/ArcGIS/rest/services/Hydrography/Watershed173811/MapServer/0", {
	    mode: FeatureLayer.MODE_ONDEMAND,
	    outFields: ["*"]
	});
	//把图层加入到地图
	map.addLayers([waterbodies, rivers]);
	//底图却坏
	var toggle = new BasemapToggle({
       map: map,
       basemap: "satellite"
	}, "BasemapToggle");
    toggle.startup();
	//添加图例
	map.on("layers-add-result", function (evt) {
	    var layerInfo = arrayUtils.map(evt.layers, function (layer, index) {
	        return { layer: layer.layer, title: layer.layer.name };
	    });
	    if (layerInfo.length > 0) {
	        var legendDijit = new Legend({
	            map: map,
	            layerInfos:layerInfo
	        }, "legendDiv");
	        legendDijit.startup();
	    }
	});
	//添加鹰眼图
	var overviewMapDijit = new OverviewMap({
    	map: map,   // 必要的  
        visible: true,  // 初始化可见，默认为false  
        attachTo: "bottom-right",   // 默认右上角  
        width: 150, // 默认值是地图高度的 1/4th  
        height: 150, // 默认值是地图高度的 1/4th   
        opacity: .40,    // 透明度 默认0.5  
        maximizeButton: true,   // 最大化,最小化按钮，默认false  
        expandFactor: 3,    //概览地图和总览图上显示的程度矩形的大小之间的比例。默认值是2，这意味着概览地图将至少是两倍的大小的程度矩形。  
        color: "red"    // 默认颜色为#000000  
    });
	overviewMapDijit.startup();

	//添加比例尺
	var scalebar = new Scalebar({
	    map: map,
	    //比例尺单位
	    scalebarUnit: "dual",
	    //放置的位置
	    attachTo:"bottom-left"
	}); 
	//返回主视图
	  var home = new HomeButton({
	      map: map,
	      attachTo:"bottom-rigth"
	  }, "HomeButton");
	  home.startup();
	  //定位
	  geoLocate = new LocateButton({
	      map: map
	  }, "LocateButton");
	  geoLocate.startup();
});


