var allFile={
	allFiles:function(opt){
		easyui_datagrid_util.fit=false;
		easyui_datagrid_util.singleSelect=true;
		easyui_datagrid_util.create_datagrid_options("fileTable", WEB_ROOT+ "/file/system/getSysFiles", allFile, opt);
	},
	/*formatTitle:function(value, row, index){
		location.href=WEB_ROOT+"/filemanage/systemFile/fileDeatil.jsp?uuid="+row.uuid;
	},*/
	formatTm:function(value, row, index){
		var str=formatter_date_utils.formatterStrTime(value,null,5);
		return str;
	},
	queryFile:function(){
		var keyword=$("#keyword").val();
		var startTm=$("#startTm").val();
		var endTm=$("#endTm").val();
		var data={"keyword":keyword,"startTm":startTm,"endTm":endTm};
		var opt={data:data};
		this.allFiles(opt);
	}
		
}

$(function(){
	formatter_date_utils.initDatePicker2("startTm","endTm");
	var p = $(window).height();	
	var contextH = p-$("#headerDiv").height();
	//此处因easyui样式导致自适应高度加上头部后显示不出来，所以将window高度减去头部高度
	$("#fileTable").height(contextH);
	allFile.allFiles();
	$("#queryFile").click(function(){
		allFile.queryFile();
	});
	$("#refreshFile").click(function(){
		allFile.allFiles();
	});
});