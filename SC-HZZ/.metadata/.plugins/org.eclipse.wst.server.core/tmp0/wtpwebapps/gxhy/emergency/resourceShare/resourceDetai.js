var projectDetail={
		projectDetail:function(){
			var result=commonUtils.post(WEB_ROOT+"/file/projectFile/DetailProject",{"uuid":uuid},false);	
			if(result.flag){			
				$("#projectName").html(result.data.projectName);
				$("#applicantNm").html(result.data.applicantNm);
				$("#creatTime").html(formatter_date_utils.formatterStrTime(result.data.creatTime,null,3));
		       $("#describe").html(result.data.describe);
		       if(result.data.describe.indexOf("img")!=-1){
				     var width = $("img").width();    // 图片实际宽度
				     var height = $("img").height();  // 图片实际高度
				     // 检查图片是否超宽
				     var maxWidth = 200; // 图片最大宽度
				     var maxHeight = 200;    // 图片最大高度
				     var ratio = 0;  // 缩放比例
				     if(width > maxWidth){
				         ratio = maxWidth / width;   // 计算缩放比例
				         $("img").css("width", maxWidth); // 设定实际显示宽度
				         height = height * ratio;    // 计算等比例缩放后的高度 
				         $("img").css("height", height);  // 设定等比例缩放后的高度
				     }else{
				    	 $("img").css("width", 300); // 设定实际显示宽度
				     }
				     // 检查图片是否超高
				     if(height > maxHeight){
				         ratio = maxHeight / height; // 计算缩放比例
				         $("img").css("height", maxHeight);   // 设定实际显示高度
				         width = width * ratio;    // 计算等比例缩放后的高度
				         $("img").css("width", width * ratio);    // 设定等比例缩放后的高度
				     }else{
				    	   $("img").css("height", 200);   // 设定实际显示高度
				     }
			   }
			  $("#time").html(result.data.startTime+"&nbsp;至 &nbsp; "+result.data.endTime);
			}
		}
}
$(function(){
	projectDetail.projectDetail();
	//点击变大,中，小
	 $("#big").click(function(){
		  var thisFont = $("#describe").css("font-size");
         var unit =thisFont.slice(-2); //获取单位
         var textFontSize = parseFloat(thisFont , 10);
         $("#describe p").css("font-size", textFontSize+4+unit);
	 });
	 $("#middle").click(function(){
		 var thisFont = $("#describe").css("font-size");
         var unit =thisFont.slice(-2); //获取单位
         var textFontSize = parseFloat(thisFont , 10);
         $("#describe p").css("font-size", textFontSize+2+unit);
	 });
	 $("#small").click(function(){
		 var thisFont = $("#describe").css("font-size");
         var unit =thisFont.slice(-2); //获取单位
         var textFontSize = parseFloat(thisFont , 10);
         $("#describe p").css("font-size", textFontSize-2+unit);
	 });
	 //打印功能
	 $(".print img").click(function(){
		 $("#printDiv").printArea();
	 });
});