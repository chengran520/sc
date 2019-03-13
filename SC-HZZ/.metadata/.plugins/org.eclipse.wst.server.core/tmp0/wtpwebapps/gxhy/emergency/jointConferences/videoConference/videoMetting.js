$(function(){
	 $('#tubia li').click(function(){
        $(this).addClass("red").siblings("li").removeClass("red");     
    });  
	 //结束会议
	 $("#endMeeting").click(function(){
		 //更新会议状态
		commonUtils.post(WEB_ROOT+"/meeting/updateMeeting",{"uuid":uuid},false,"保存");
			location.href=WEB_ROOT+"/emergency/jointConferences/jointConferenceInfo.jsp";
	 });
	 
	 //参会人员
	 $("#chMens").click(function(){
		 var result=commonUtils.post(WEB_ROOT+"/meeting/getChMens",{"uuid":uuid},false,"保存");
		 if(result.flag){
			 $("#chMensModal").modal();
			 var userModels=result.data.userModels;
			 var html="";
			 for(var i=0;i<userModels.length;i++){
				   if(i%8==5&&i>0){
						html+="</tr><tr>";	
					}
					html+="<td style='width:70px;'>"+userModels[i]+"</td>";
		         }   
			 $("#meetingtable").html(html);
		 }
		;
	 });
	//返回列表页面
	 $("#returnMeeting").click(function(){
		location.href=WEB_ROOT+"/emergency/jointConferences/jointConferenceInfo.jsp";
	 });
});