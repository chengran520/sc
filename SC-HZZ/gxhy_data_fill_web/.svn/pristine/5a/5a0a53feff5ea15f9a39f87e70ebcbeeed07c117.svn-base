var water = {
		//查询水情
		selectRiver:function(){
			var result = commonUtils.get(WEB_ROOT+"/data/riverStatics/getRiverList",null,false);
			if(result.flag){
				this.apendRiver(result.data);
			}
		},
		// 拼接表格数据
		apendRiver:function(data){
			var tableStr = "";  
			if(data.length > 0){
				  for(var i=0 ;i<data.length; i++){  
					    var z=parseFloat(data[i].z).toFixed(2);
				        tableStr += "<tr><td>"+data[i].stcd+"</td><td>"+data[i].stnm+"</td><td>"+data[i].tm+"</td><td>"+z+"</td></tr>"
				    }  
			}else{
				tableStr += "<tr><td colspan='4'>当日暂无数据</td></tr>";
			}
			 $("#riverbody").html(tableStr);
		}
}
$(function(){
	var height=$(window).height() - 130;
	$("#rivertable").height(height);
	$("#riverbody").height(height - 34);
	// 查询当天水情
	water.selectRiver();
	$("#riverprint").click(function(){
		$(".noprint").css("display","none");
		window.print();
	});
});