var detail={
	InformDetail:function(uuid){
		var data={"uuid":uuid};
		var result=commonUtils.post(WEB_ROOT+ "/msg/base/getInformDataDetail",data,null);
		if(result.flag){
			var data=result.data;
			$("#msgTitle").html(data.msgTitle);
			$("#sendUser").html("创建人："+data.sendUser);
			$("#sendTm").html("创建时间："+formatter_date_utils.formatterStrTime(data.sendTm.creatTime,null,3));
			$("#msgContent").html(data.msgContent);
		}
	}	
}
	

$(function(){
	detail.InformDetail(uuid);
	$("#returnq_inform").click(function(){
		location.href=WEB_ROOT+"/work_bench/workBench.jsp";
	});

});