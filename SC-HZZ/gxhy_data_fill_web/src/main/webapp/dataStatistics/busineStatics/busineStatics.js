var busineInfo = {
	getBusineData:function(){
		var startTm=$("#startTm").val();
		var endTm=$("#endTm").val();
		var busineType=$('#busineType option:selected').val();//选中的值
		var type=$('#type option:selected').val();
		var result=commonUtils.get(WEB_ROOT+"/busine/accept/getBusineStatics",{"startTm":startTm,"endTm":endTm,"busineType":busineType,"type":type},null);
		var html = ""; 
		if(result.data.length > 0){
			$.each(result.data,function(i,v){
				html+="<tr>";
			    html+="<td  class='td1'>"+this.busineId+"</td>";
			    var busineOrigin="";
			    if(this.busineOrigin=="hzxh"){
			    	busineOrigin="日常巡河";
			    }else{
			    	busineOrigin="公众举报";
			    }
			    html+="<td  class='td1'>"+busineOrigin+"</td>";
			    html+="<td  class='td1'>"+this.busineType+"</td>";
			    html+="<td  class='td1'>"+this.busineUnm+"</td>";
			    var busineAddress="";
			    if(this.busineAddress.length>20){
			    	busineAddress=this.busineAddress.substring(0,20)+"...";
			    }else{
			    	busineAddress=this.busineAddress;
			    }
			    html+="<td  class='td2' style='text-align:left;'><a style='color:#000;'  title="+this.busineAddress+">"+busineAddress+"</a></td>";
			    var busineDesc="";
			    if(this.busineDesc.length>20){
			    	busineDesc=this.busineDesc.substring(0,20)+"...";
			    }else{
			    	busineDesc=this.busineDesc;
			    }
			    html+="<td  class='td3' style='text-align:left;'><a  style='color:#000;' title="+this.busineDesc+">"+busineDesc+"</a></td>";
			    html+="<td  class='td4'>"+formatter_date_utils.formatterStrTime(this.createTm,null,5)+"</td>"; 
			    html+="</tr>";
			});
		}else{
			html += "<tr><td colspan='6'>暂无数据</td></tr>";
		}
		 $("#busineList").html(html);
	},
	getBusineTypes:function(){   
		var result=commonUtils.get(WEB_ROOT+"/dict/work/getBusineTypes",{"dictTp":"BZTP"},null);
		if(result.flag){
			var html="<option disabled='disabled' selected='selected' value=''>请选择</option> <option value=''>全部</option>";
			$.each(result.data,function(i,v){
				 html+="<option value="+this.dictVal+">"+this.dictNm+"</option>";
			});
			$("#busineType").html(html);
		}
	}
}
$(function(){
	var h=$("#div1").height();
	var height=$(window).height() - h-10;
	$("#rivertable").height(height);
	$("#riverbody").height(height - 34);
	formatter_date_utils.initDatePicker2("startTm","endTm");
	busineInfo.getBusineTypes();
	busineInfo.getBusineData();
	$("#queryBusine").click(function(){
		busineInfo.getBusineData();
	});
	$("#printBusine").click(function(){
		$(".noprint").css("display","none");
		window.print();
	});
});