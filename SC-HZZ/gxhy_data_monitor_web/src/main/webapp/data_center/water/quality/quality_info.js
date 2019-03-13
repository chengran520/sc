var QualityInfo={
	currentTime: null,
	loadData:function(opt){
		formatter_date_utils.initDatePickerTm("stm");
		easyui_datagrid_util.fit=false;
		easyui_datagrid_util.singleSelect=true;
		easyui_datagrid_util.pageSize = 20;
		easyui_datagrid_util.create_datagrid_options("patrol_Quality", WEB_ROOT+"/data_monitor/quality/getQualityList",QualityInfo,opt);
	},
	queryData:function(){
		$("#wt_span").html('');
		$("#turb_span").html('');
		$("#cond_span").html('');
		$("#ph_span").html('');
		$("#dox_span").html('');
		
		var stm=$("#stm").val();
		var data={"stm":stm};
		var opt={data:data};
		this.loadData(opt);
	},
	loadSuccess:function(rowData){
		if(rowData.data.length>0){
			$('.datagrid-btable> tbody > tr:first-of-type').addClass('datagrid-row-checked datagrid-row-selected');
			var row=rowData.data;
			var tms=row[0].spt;
			var turb=parseFloat(row[0].turb).toFixed(2);
			var cond=parseFloat(row[0].cond).toFixed(2);
			var dox=parseFloat(row[0].dox).toFixed(2);
			$("#wt_span").html(row[0].wt);
			$("#turb_span").html(turb);
			$("#cond_span").html(cond);
			$("#ph_span").html(row[0].ph);
			$("#dox_span").html(dox);
			QualityChart.inintChart(row,'wt',3);
		}
	},
	onClickRowHandle:function(rowIndex,rowData){
		var tms=rowData.spt;
		var turb=parseFloat(rowData.turb).toFixed(2);
		var cond=parseFloat(rowData.cond).toFixed(2);
		var dox=parseFloat(rowData.dox).toFixed(2);
		$("#wt_span").html(rowData.wt);
		$("#ph_span").html(rowData.ph);
		$("#turb_span").html(turb);
		$("#cond_span").html(cond);
		$("#dox_span").html(dox);
		var date=rowData.spt;
		QualityInfo.getChartData("wt",date);
		$("#wt").addClass('active').siblings().removeClass("active");
		//QualityChart.inintChart(reulst,'wt');
	},
	getChartData:function(id,date){
		var data = {"id":id,"date":date}
		var reulst = commonUtils.get(WEB_ROOT+"/data_monitor/quality/echartQuality",data,false);
		if(reulst.flag){
			QualityChart.inintChart(reulst.data,id,6);
			return;
		}
	},
	formatterDataTm:function(value, row, index){
		return formatter_date_utils.formatterStrTime(value,0,0);
	},
	formatterWt:function(value, row, index){
		if(value!=null){
			return value+"℃";
		}
	},
	formatterTurb:function(value, row, index){
		if(value!=null){
			return parseFloat(value).toFixed(2)+"度";
		}
	},
	formatterCond:function(value, row, index){
		if(value!=null){
			return parseFloat(value).toFixed(2)+"µS/cm";
		}
	},
	formatterDox:function(value, row, index){
		if(value!=null){
			return parseFloat(value).toFixed(2)+"mg/L";
		}
	}
}
$(function(){
	var p = $(window).height();	//窗口高度
	var r_height =$("#headerRiverdiv").height();//头部高度
	//此处因easyui样式导致自适应高度加上头部后显示不出来，所以将window高度减去头部高度
	var v_height =$("#river_info_r").height();//查询条件框高度
	var c_height =$("#chart_div").height();//折线图高度
	$("#patrol_Quality").height(p-r_height-v_height-c_height-10);//表格高度 
	var current = new Date();
	var stm = formatter_date_utils.formatterStrTime(current,0,3)
	$('#stm').val(stm);
	var data = {'stm':stm};
	var opt = {"data": data};
	QualityInfo.loadData(opt);
	$("#queryRiver").click(function(){
		QualityInfo.queryData();
	});
	$("#refreshQuslity").click(function(){
		//$('#stm').val('');
		QualityInfo.loadData();
	});
	$("#chart-div-span").on("click","span",function(){
		var active = $(this).hasClass("active");
		var id = $(this).attr("id");
		if(!active){
			$(this).addClass('active').siblings().removeClass("active");
		}
		var date=$("#stm").val();
		QualityInfo.getChartData(id,date);
	});
	$("#qua_div_wt").on("click",function(){
		var date=$("#stm").val();
		QualityInfo.getChartData("wt",date);
		$("#wt").addClass('active').siblings().removeClass("active");
	});
	$("#qua_div_turb").on("click",function(){
		var date=$("#stm").val();
		QualityInfo.getChartData("turb",date);
		$("#turb").addClass('active').siblings().removeClass("active");
	});
	$("#qua_div_cond").on("click",function(){
		var date=$("#stm").val();
		QualityInfo.getChartData("cond",date);
		$("#cond").addClass('active').siblings().removeClass("active");
	});
	$("#qua_div_ph").on("click",function(){
		var date=$("#stm").val();
		QualityInfo.getChartData("ph",date);
		$("#ph").addClass('active').siblings().removeClass("active");
	});
	$("#qua_div_dox").on("click",function(){
		var date=$("#stm").val();
		QualityInfo.getChartData("dox",date);
		$("#dox").addClass('active').siblings().removeClass("active");
	});
});

