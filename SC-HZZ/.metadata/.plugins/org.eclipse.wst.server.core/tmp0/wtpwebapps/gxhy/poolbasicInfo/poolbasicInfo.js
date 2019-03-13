var poolBasicInfo={
		getPoolData:function(){
			easyui_datagrid_util.fit=false;
			easyui_datagrid_util.singleSelect=true;
			easyui_datagrid_util.pageSize=20;
			easyui_datagrid_util.create_datagrid_options("patrol_catalogPool", WEB_ROOT+ "/data/pool/getPools",poolBasicInfo,null);
		},	
		queryData:function(){
			var keyword=$("#keyword").val();
			var data = {'keyword':keyword};
			$('#patrol_catalogPool').datagrid('load',data); 
		},
		formatPool:function(value, row, index){
			var html='<a style="color:#FD5F3B;font-weight:bold;" onclick="poolBasicInfo.detailPool('+JSON.stringify(row).replace(/\"/g,"'")+')">详情</a>';
			return html;
		},
		detailPool:function(data){
			$("#poolDetail").modal();
			$("#damcd_detail").html(data.damcd);
			$("#damname_detail").html(data.damname);
			$("#hnnm_detail").html(data.hnnm);
			$("#stlc_detail").html(data.stlc);
			$("#lttd_detail").html(data.lttd);
			$("#lgtd_detail").html(data.lgtd);
			$("#xhst_detail").html(data.xhst+"（万m³）");
			$("#drna_detail").html(data.drna+"(km2)");
			$("#signer_detail").html(data.signer);
			var result=commonUtils.get(WEB_ROOT+"/data/pool/getPoolUsers",{"id":data.damcd},null);
			var html="<caption class='caption'>山塘领导信息</caption>";
			if(result.flag){
				$.each(result.data,function(index,value){
				    var str="";
					if(index==0){
						str="塘长：";
					}else if(index==1){
						str="巡查员：";
					}else{
						str="保洁员：";
					}
					html+="<tr><td class='leftTr'>"+str+"</td><td class='rightTr'>"+this.userNm+"</td>";
			        html+="<td class='leftTr'>电话号码：</td><td  class='rightTr'>"+this.userPhone+"</td></tr>";   
				});
			}
			$("#poolUsers").html(html);
		}
}
$(function(){
	var p = $(window).height();	
	var contextH =$("#headerPooldiv").height();
	$("#patrol_catalogPool").height(p-contextH);
	poolBasicInfo.getPoolData();
	$("#queryPool").click(function(){
		poolBasicInfo.queryData();
	});
	$("#refreshPool").click(function(){
		$('#keyword').val('');
		poolBasicInfo.getPoolData();
	});
});