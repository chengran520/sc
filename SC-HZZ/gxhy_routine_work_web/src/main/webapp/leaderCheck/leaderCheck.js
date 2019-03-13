var leaderCheck={
	initData:function(opt){
		easyui_datagrid_util.fit=false;
		easyui_datagrid_util.singleSelect=true;
		easyui_datagrid_util.create_datagrid_options("patrol_catalogUser", WEB_ROOT+ "/userManager/work/getUserList",userManager, opt);
	}
}

$(function(){
	var p = $(window).height();	
	var contextH = $("#check_headerDiv").height();
	$("#div").height(p-contextH);
	$("#tree,#div-right").height(p-contextH);
})