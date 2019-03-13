var reservoir={
		getRvvrData:function(){
			easyui_datagrid_util.fit=false;
			easyui_datagrid_util.singleSelect=true;
			easyui_datagrid_util.pageSize=20;
			easyui_datagrid_util.create_datagrid_options("patrol_Reservoir", WEB_ROOT+ "/data/reservoir/getRvvrs",reservoir,null);
		},	
		queryRvData:function(){
			var keyword=$("#keyword").val();
			var data = {'keyword':keyword};
			$('#patrol_Reservoir').datagrid('load',data); 
		},
		formatRepeat:function(value, row, index){
			var html='<a style="color:#FD5F3B;font-weight:bold;" onclick="reservoir.detailInfo('+JSON.stringify(row).replace(/\"/g,"'")+')">详情</a>';
			return html;
		},
		detailInfo:function(data){
			$("#ReservoirDetail").modal();
			$("#rsCd_detail").html(data.rsCd);
			$("#rsName_detail").html(data.rsName);
			$("#hnnm_detail").html(data.hnnm);
			$("#stlc_detail").html(data.stlc);
			$("#lttd_detail").html(data.lttd);
			$("#lgtd_detail").html(data.lgtd);
			$("#totCap_detail").html(data.totCap+"（万m³）");
			$("#drna_detail").html(data.drna+"(km2)");
			$("#signer_detail").html(data.signer);
			$("#engGrad_detail").html(data.engGrad);
			var result=commonUtils.get(WEB_ROOT+"/data/pool/getPoolUsers",{"id":data.rsCd},null);
			var html="<caption class='caption'>水库领导信息</caption>";
			if(result.flag){
				$.each(result.data,function(index,value){
				    var str="";
					if(index==0){
						str="库长：";
					}else if(index==1){
						str="巡查员：";
					}else{
						str="保洁员：";
					}
					html+="<tr><td class='leftTr'>"+str+"</td><td class='rightTr'>"+this.userNm+"</td>";
			        html+="<td class='leftTr'>电话号码：</td><td  class='rightTr'>"+this.userPhone+"</td></tr>";   
				});
			}
			$("#rvvrUsers").html(html);
		}
		
}
$(function(){
	var p = $(window).height();	
	var contextH =$("#headerRvdiv").height();
	$("#patrol_Reservoir").height(p-contextH);
	reservoir.getRvvrData();
	$("#queryReservoir").click(function(){
		reservoir.queryRvData();
	});
	$("#refreshReservoir").click(function(){
		$('#keyword').val('');
		reservoir.getRvvrData();
	});
});