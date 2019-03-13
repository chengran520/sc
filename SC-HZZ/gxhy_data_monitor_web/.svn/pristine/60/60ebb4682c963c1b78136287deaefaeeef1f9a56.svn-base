var riverLength={
	riverLength:function(){
		easyui_datagrid_util.fit=false;
		easyui_datagrid_util.singleSelect=true;
		easyui_datagrid_util.create_datagrid_options("RiverLength", WEB_ROOT+ "/riverLength/work/riverLengthList",riverLength,null);
	},
	QueryRiverLength:function(){
		var keyword = $("#keyword").val();
		var data = {'keyword':keyword};
		$('#RiverLength').datagrid('load',data); 
	}
}
$(function(){
	riverLength.riverLength();
	$("#queryRiverLength").click(function(){
		riverLength.QueryRiverLength();
	});
	$("#refreshRiverLength").click(function(){
		$('#RiverLength').datagrid('load'); 
	});
});