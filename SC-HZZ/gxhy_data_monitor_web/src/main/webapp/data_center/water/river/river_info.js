var RiverManager={
	data:null,	
	loadData:function(opt){
		easyui_datagrid_util.fit=false;
		easyui_datagrid_util.singleSelect=true;
		easyui_datagrid_util.pageSize = 20;
		easyui_datagrid_util.create_datagrid_options("patrol_catalogRiver", WEB_ROOT+"/hydro/river/getriverInfoList",RiverManager,opt);
	},
	loadSuccess:function(rowData){
		if(rowData.data.length>0){
			$('.datagrid-btable> tbody > tr:first-of-type').addClass('datagrid-row-checked datagrid-row-selected');
			var row=rowData.data;
			var stcd=row[0].stcd;
			var tms=row[0].tm;
			var datas ={stcd:stcd,tm:tms};
			var data = this.getChartData(datas);
			riverChartMap.initRiverChart(data,row[0].stnm);
		}else{
			riverChartMap.initRiverChart(null);
		}
	},
	getChartData:function(data){
		var reulst = commonUtils.get(WEB_ROOT+"/hydro/river/echartRiver",data,false);
		if(reulst.flag){
			return reulst.data;
		}
		return null;
	},
	query:function(){
		var keyword = (paramStcd == "null" ? $("#keyword").val():paramStcd);
		var stm=$("#stm").val();
		var etm=$("#etm").val();
		var data = {'keyword':keyword,'stm':stm,'etm':etm};
		var opt={data:data}; 
		this.loadData(opt);
	},
	
	formatterDataRiverTm:function(value, row, index){
		return formatter_date_utils.formatterStrTime(value,0,5);
	},
	formatterZ:function(value, row, index){
		if(value!=null){
			return parseFloat(value).toFixed(2)+"m";
		}
	},
    onClickRowHandle:function(rowIndex,rowData){
    	var datas ={stcd:rowData.stcd,tm:rowData.tm};
		var data=this.getChartData(datas);
		riverChartMap.initRiverChart(data,rowData.stnm);
	},
	refreshRiver:function(){
		location.href=WEB_ROOT+"/data_center/water/rain/rain_info.jsp";
	},
	loadCheckBoxData:function(){
		var datas=$('#patrol_catalogRiver').datagrid("getData").data; 
		$("#patrol_aa").datagrid({
			height:300,
			width:440,
			rownumbers:true,
			showHeader:true,
			data:datas,
			method:"POST"
		});
		$("#compareModal .datagrid-view").height(300);
		$("#compareModal .datagrid-header").height(35);
     }
}
$(function(){
	var p = $(window).height();	//窗口高度
	var r_height =$("#headerRiverdiv").height();//头部高度
	//此处因easyui样式导致自适应高度加上头部后显示不出来，所以将window高度减去头部高度
	$("#initRiverInfoChart").height(p/2-106);
	var v_height =$("#river_info_r").height();//查询条件框高度
	var c_height =$("#initRiverInfoChart").height();//折线图高度
	$("#patrol_catalogRiver").height(p-r_height-v_height-c_height-5);//表格高度 
	
	formatter_date_utils.initDatePicker("stm","etm");
	var data = {keyword : paramStcd == "null" ? null:paramStcd};
	var opt = {data:data};
	RiverManager.loadData(opt);
	$("#queryRiver").click(function(){
		RiverManager.query();
	});
	$("#refreshRiverInfo").click(function(){
		$('#keyword').val('');
		$('#stm').val('');
		$('#etm').val('');
		RiverManager.refreshRiver(); 
	});
	
	//点击对比先加载数据-弹窗
	$("#compareadd").click(function(){
		$('#compareModal').modal('show');
		RiverManager.loadCheckBoxData();
		
	});
	$("#compare").click(function(){
		$('#myModalCompare').modal('show');
		$('#compareModal').modal('hide');
		RiverManager.loadCheckBoxData();
		   riverChartMap.compareChart();
	});
	$("#export").click(function(event) {
		var keyword = $("#keyword").val();
		var stm=$("#stm").val();
		var etm=$("#etm").val();
		var url = WEB_ROOT+'/hydro/river/export?keyword='+keyword+'&stm='+stm+'&etm='+etm;
		// 修改form中的action动作
		$("form").attr("action", url);
		// 提交表单
		$("form").submit();
	});
});

