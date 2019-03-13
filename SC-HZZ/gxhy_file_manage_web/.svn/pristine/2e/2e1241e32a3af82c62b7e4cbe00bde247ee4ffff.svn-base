var rptDeatil={
	initPptnData:function(){
		var reulst = commonUtils.get(WEB_ROOT+"/hydro/stbprp/getStbprpInfo",data,false);
		if(reulst.flag){
			var data = reulst.data;
			if(data.length > 0){
				var html="";
				for(var i=0;i<data.length;i++){
					html +="<tr style='height:19px'>";
					html +="<td class='fh bw p12 b1'>"+data.stcd+"</td>";
					html +="<td class='fh bw p12 b1'>"+data.stnm+"</td>";
					html +="<td class='fh tac bw pl2 b1'></td>";
					html +="<td class='fh tac bw pl2 b1'></td>";
					html +="<td class='fh tac bw pl2 b1'></td>";
					html +="<td class='fh tac bw pl2 b1'></td>";
					html +="<td class='fh tac bw pl2 b1'></td>";
					html +="<td class='fh tac bw pl2 b1'></td>";
					html +="<td class='fh tac bw pl2 b1'></td>";
					html +="<td class='fh tac bw pl2 b1'></td>";
					html +="<td class='fh tac bw pl2 b1'></td>";
					html +="<td class='fh tac bw pl2 b1'></td>";
					html +="<td class='fh tac bw pl2 b1'></td>";
					html +="<td class='fh tac bw pl2 b1'></td>";
					html +="<td class='fh tac bw pl2 b1'></td>";
					html +="<td class='fh tac bw pl2 b1'></td>";
					html +="<td class='fh tac bw pl2 b1'></td>";
					html +="<td class='fh tac bw pl2 b1'></td>";
					html +="<td class='fh tac bw pl2 b1'></td>";
					html +="<td class='fh tac bw pl2 b1'></td>";
					html +="<td class='fh tac bw pl2 b1'></td>";
					html +="<td class='fh tac bw pl2 b1'></td>";
					html +="<td class='fh tac bw pl2 b1'></td>";
					html +="<td class='fh tac bw pl2 b1'></td>";
					html +="<td class='fh tac bw pl2 b1'></td>";
					html +="<td class='fh tac bw pl2 b1'>0</td>";
					html +="<td class='fh tac bw pl2 b1'>0</td>";
					html +="</tr>";
				}
				$("#r-2-0").appent(html);
			}
		}
	}
	
}

$(function(){
	$("#D2-0-27").html(formatter_date_utils.formatterStrTime(null,0,null));
	$("#L2-0-27").html(formatter_date_utils.formatterStrTime(null,0,3));
})