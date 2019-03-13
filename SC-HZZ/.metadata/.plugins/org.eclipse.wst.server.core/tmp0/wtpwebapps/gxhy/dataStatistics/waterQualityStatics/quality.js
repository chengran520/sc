var quality={
	getQuality:function(){
		var result=commonUtils.get(WEB_ROOT+"/data_monitor/quality/getQuality",null,null);	
		if(result.flag){
			var html="";
			$.each(result.data,function(i,v){
				if(result.data.length>0){
					var turb=parseFloat(this.turb).toFixed(2);
					var cond=parseFloat(this.cond).toFixed(2);
					var dox=parseFloat(this.dox).toFixed(2);
					var wt=parseFloat(this.wt).toFixed(2);
					html+="<tr>";
				    html+="<td>"+this.stcd+"</td>";
				    html+="<td>"+this.stnm+"</td>";
				    html+="<td>"+formatter_date_utils.formatterStrTime(this.spt,null,null)+"℃</td>";
				    html+="<td>"+wt+"</td>";
				    html+="<td>"+turb+"</td>";
				    html+="<td>"+cond+"</td>";
				    html+="<td>"+this.ph+"</td>";
				    html+="<td>"+dox+"</td>";  
				    html+="</tr>";
				}else{
					html+="<tr><td colspan='8'>当日暂无数据！</td></tr>";
				}	
		  });
			$("#qualityList").html(html);
		}
	}
}
$(function(){
	quality.getQuality();
	var height=$(window).height() - 130;
	$("#qualitytable").height(height);
	$("#qualityList").height(height - 34);
	$("#print").click(function(){
		$(".noprint").css("display","none");
		window.print();
	});
});
