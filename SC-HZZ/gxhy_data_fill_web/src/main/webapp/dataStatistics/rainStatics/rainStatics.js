var rainStatics={
	getRainData:function(){
		var result=commonUtils.get(WEB_ROOT+"/hydro/pptn/getRainData",null,null);	
		var html="<tr style='height:30px;line-height: 30px;background:#bfe9fc;color: #000;text-transform: uppercase;font-weight:bold;'><td>测站编码</td><td>测站名称</td><td>上报时间</td><td>时段雨量(mm)</td><td>日雨量(mm)</td></tr>";
		var flag=true;
		if(result.flag){
			var data = result.data;
			for(var i=0 ;i<data.length ; i++){ 
				html+="<tr>";
				html+="<td>"+data[i].stcd+"</td>";
				html+="<td>"+data[i].stnm+"</td>";
				html+="<td>"+formatter_date_utils.formatterStrTime(data[i].tm,null,5)+"</td>";
				html+="<td>"+data[i].drp+"</td>";
				if(data[i].num != 0){
					html+="<td rowspan='"+data[i].num+"'>"+(data[i].dyp==null?0:data[i].dyp)+"</td>";
				}
				html+="</tr>";
			 };
		    $("#rainLiist").html(html);
		}
	}	
}
$(function(){
	var height=$(window).height() - 130;
	$("#raintable").height(height);
	$("#rainLiist").height(height);
	rainStatics.getRainData();
	$("#printRain").click(function(){
		$(".noprint").css("display","none");
		window.print();

	});
});
