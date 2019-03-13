var exDetail={
		exposureDetail:function(id){
			var result = commonUtils.post(WEB_ROOT+"/exposure/work/getExposureDetail",{"acceptId":id},false);
			if(result.flag){
				$("#rvCd1").html(result.data.model.rvCd);
				$("#rvNm1").html(result.data.model.rvNm);
				$("#pollutionType1").html(result.data.model.pollutionTypeNm);
				if(result.data.model.status=="1"){
					$("#status1").html("待处理");
				}else{
					$("#status1").html("已处理");
				}
				$("#address1").html(result.data.model.address);
				$("#describe1").html(result.data.model.describe);
				var html="";
				$.each(result.data.images,function(i,v){
					 var imgPath=dbPath.imgPath(path,this.url);
					 var imgUrl = this.url  == "" ? "暂无" : imgPath;
					 html+="<img   src="+imgUrl+">";
				});
				$("#url1").append(html);
		     }
		}
}
$(function(){
    var divHeight=$(window).height();
    var nextHeight=divHeight-$("#headerDiv").height();
    $(".div-add-view").height(nextHeight*0.9);
    exDetail.exposureDetail(id);
    $("#return_exposure").click(function(){
    	location.href=WEB_ROOT+"/exposure/exposure.jsp";
    });
	$('img').zoomify();
});