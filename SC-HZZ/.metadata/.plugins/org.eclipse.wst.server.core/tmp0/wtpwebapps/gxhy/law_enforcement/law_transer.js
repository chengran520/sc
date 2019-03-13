var lawTranser={
	map:null,
	initMap:function(){
		 this.map = new T.Map("mapDiv");
         //设置显示地图的中心点和级别
		 this.map.centerAndZoom(new T.LngLat(116.40969, 39.89945), 12);
         //创建标注对象
         var marker = new T.Marker(new T.LngLat(116.411794, 39.9068));
         //向地图上添加标注
         this.map.addOverLay(marker);
	},
	loadData:function(opt){
		formatter_date_utils.initDatePickerTm("startTm");
		easyui_datagrid_util.fit=false;
		easyui_datagrid_util.singleSelect=true;
		easyui_datagrid_util.create_datagrid_options("lawTranser", WEB_ROOT+ "/law/enforment/getLawEnMentList", lawTranser, opt);
	},	
	loadSuccess:function(rowData){
		if(rowData.data.length>0){
			var data=rowData.data[0];
			lawTranser.showData(data);
		}
	},
	onClickRowHandle:function(rowIndex,rowData){
		this.showData(rowData);
	},
	showData:function(data){
		$("#lawId").html(data.lawId);
		$("#lawSource").html(data.lawSource);
		$("#lawAdres").html(data.lawAdres);
		$("#reportUser").html(data.reportUser);
		$("#reportTm").html(formatter_date_utils.formatterStrTime(data.reportTm,0,0));
		$("#reportPh").html(data.reportPh);
		$("#handleLink").html(data.handleLink);
		$("#lawNt").html(data.lawNt);
		$("#handleUser").html(data.handleUser);
		$("#pHandleUser").html(data.pHandleUser);
		$("#handleTmMit").html(data.handleTmMit);
		$("#isFiling").html(data.isFiling);
		$("#isFilClose").html(data.isFilClose);
		$("#filCloseTerm").html(data.filCloseTerm);
	},
	formatterTM:function(value, row, index){
		return formatter_date_utils.formatterStrTime(value,0,0);
	},
	formatterDetail:function(value, row, index){
	     var html ="<a style='color:#D02090;' class='colorDetail' onclick='lawViewMap.detailUser();'>处理</a>";
	     return html;
	},
	setMapWith:function(){
		var div2 = $("#law-div2").width();
		var divH = $(".demo").height();
		var divH1 = $(".law-div-div1").height();
		var div3 = $("#law-div-div2").width();
		$("#mapDiv").width(div2-div3);
		$("#mapDiv").height(divH-divH1-33);
		$("#law-div-div3").height(divH-divH1-40);
	}
}
$(function(){
	var p = $(window).height();	
	var contextH = $("#LawheaderDiv").height();
	//此处因easyui样式导致自适应高度加上头部后显示不出来，所以将window高度减去头部高度
	$("#lawTranser").height(p-contextH); 
	
	lawTranser.loadData();
	lawTranser.setMapWith();
	lawTranser.initMap();
	$("#refreshLawTranser").click(function(){
		lawTranser.loadData();
	})；
});