var yhyc={
	getYhycOptions:function(){
		var result=commonUtils.get(WEB_ROOT+ "/dict/work/getBusineTypes",{"dictTp":"YHYC"},null);
		var html="";
		if(result.flag){
			$.each(result.data,function(i,v){
				html+="<div class='hy_div color'  id="+(i+1)+"><a>"+this.dictNm+"</a></div>";
			});
			$("#stadiv").html(html);
		}
	},
	loadStraData:function(opt){
		easyui_datagrid_util.fit=false;
		easyui_datagrid_util.singleSelect=true;
		easyui_datagrid_util.create_datagrid_options("strtable", WEB_ROOT+ "/data/StraRiver/getStraRivers", yhyc, opt);
	},
	formatLoad:function(value, row, index){
		return "5次";
	},
	formatCount:function(value, row, index){
		return "3次";
	}
	
}
$(function(){
	var p = $(window).height();	
	var contextH =$("#str_headerDiv").height();
	var userH = $("#user_div_manager").height();
	//此处因easyui样式导致自适应高度加上头部后显示不出来，所以将window高度减去头部高度
	$("#div_users").height(p-contextH); 
	$("#strtable").height(p-contextH-userH); 
	yhyc.getYhycOptions();
	yhyc.loadStraData();
	$("#insert_straFile").click(function(){
		location.href=WEB_ROOT+"/straRiver/zhcl/addStraRiver.jsp";
	});
 	/*$("#stadiv  div").click(function(){
	 	 $(this).addClass("color").siblings().removeClass("selected");
	 });*/
	$("#stadiv  div").click(function(){
		var id=$(this).attr("id");
		if(id=="1"){
			yhyc.loadStraData();
		}else{
			var data={"type":id};
			var opt={data:data};
			yhyc.loadStraData(opt);
		}
	});
});