var meeting={
	/*	getUsers:function(){
			 var result= commonUtils.post(WEB_ROOT+"/userManager/work/getUsers",null,null);
			 if(result.flag){
				 var html="";
				 $.each(result.data, function (i) {
					  html+="<option value="+this.value+">" +this.text+ "</option>";
				 });
				 $('#pat').html(html);
			 }
		},*/
		addMeeting:function(){
			var meetingName=$("#meetingName").val();//会议名称
			if(meetingName == null || meetingName ==""){
				 layer.msg('会议名称为必填项！', {icon: 5});
				return;
			}
			var venue=$("#venue").val();//会议地址
			if(venue == null || venue ==""){
				 layer.msg('会议地址为必填项！', {icon: 5});
				return;
			}
            var paticipants=$("#resultUser").val();
            if(paticipants == null || paticipants ==""){
				 layer.msg('参会人员为必选项！', {icon: 5});
				return;
			}
			var meetingStm=$("#meetingStm").val();//会议开始时间
			if(meetingStm == null || meetingStm ==""){
				 layer.msg('会议开始时间必选项！', {icon: 5});
				return;
			}
			var meetingEtm=$("#meetingEtm").val();//会议结束时间
			if(meetingEtm == null || meetingEtm ==""){
				 layer.msg('会议结束时间必选项！', {icon: 5});
				return;
			}
			var data=[];
			data.push({name:'meetingName',value: meetingName});
			data.push({name:'venue',value: venue});
			data.push({name:'paticipants',value: paticipants});
			data.push({name:'meetingStm',value: meetingStm});
			data.push({name:'meetingEtm',value: meetingEtm});
		    var resultData=commonUtils.post(WEB_ROOT+"/meeting/insertMeeting",data,false,"保存");
	       	 if(resultData.data.num==1){	
					 layer.msg('保存成功！', {icon: 1});
					 $('#MeetingAdd').modal('hide');
					 meeting.getMeetings();//获取所有的会议
					 $("#form_data_user")[0].reset();
					 $("#paticipantsName").val('');
					 $("#pat").val('');
					 
				 }else{
					 layer.msg('保存失败！', {icon: 5});
					 $('#MeetingAdd').modal('hide');
					 layer.close();
					 $("#form_data_user")[0].reset();
					 $("#paticipantsName").val('');
					 $("#pat").val('');
			  }  				
		},
		getMeetings:function(meetingStatus,applyTm){
			var result= commonUtils.get(WEB_ROOT+"/meeting/getMeetings",{"meetingStatus":meetingStatus,"applyTm":applyTm},null);
			if(result.flag){
				var html="";
				var width = $(window).width(),styleHed;
				if(width > 1466){
					styleHed = "width:24%;padding:3px;float:left;";
				}else{
					styleHed = "width:32%;padding:3px;float:left;";
				}
				$.each(result.data,function(i,v){
					html+="<div style="+styleHed+" class='styleHed'>";
					if(this.meetingStatus=="c"){
						bgc="#CDCDCD";
					}else{
						bgc="#00CD99";
					}
					html+="<div  class='divMeeting1' style='background-color:"+bgc+";'>";
					var meetingStatusNM="";
					if(this.meetingStatus=="a"){
						meetingStatusNM="未开始";
					}else if(this.meetingStatus=="b"){
						meetingStatusNM="进行中";
					}else if(this.meetingStatus=="c"){
						meetingStatusNM="已结束";
					}else{}
					html+="<div style='height:20px;'><span class='spanMeeting1'>"+meetingStatusNM+"</span></div>";
					html+="<div  class='divMeeting2'>";
					var src=WEB_ROOT+"/common/images/videoMetting/moreUser.png";
					html+="<img src="+src+" class='imgMeeting'/>";
					html+="<span style='font-size: 16px;'>"+formatter_str_util.formatMeetingName(this.meetingName)+"</span></div></div>";
					html+="<div class='divMeeting3'>";
					html+="<div class='divMeeting4'>";
					var participants=this.participants;
					var count=participants.split(",").length;//参会人数
					html+="<div  class='divMeeting5'>"+count+"人</div>";			
					html+="<div style='text-align: center;'>会议总人数</div></div>";
					html+="<div  class='divMeeting6'>";
					html+="<div class='divMeeting7'>会议发起人："+this.applyMen+"</div>";
					html+="<div class='divMeeting7'>会议地点："+this.venue+"</div>";
					html+="<div class='divMeeting7'>会议发起时间："+formatter_date_utils.formatterStrTime(this.applyTm,null,5)+"</div>";
					html+="<div class='divMeeting7'>会议使用日期："+formatter_date_utils.formatterStrTime(this.meetingStm,null,8)+"</div>";
					html+="<div class='divMeeting7'>会议使用时间："+formatter_date_utils.formatterStrTime(this.meetingStm,null,7)+"~"+formatter_date_utils.formatterStrTime(this.meetingEtm,null,7)+"</div>";
					html+="<div class='divMeeting8'>";
					if(this. meetingStatus=="b"){
						html+="<span  class='enterSpan_video'  onclick='meeting.openMeeting(\""+this.uuid+"\")''><a>进入</a></span>";
					}else if(this. meetingStatus=="a"){
						html+="<span  class='enterSpan_video2'><a></a></span>";
					}else if(this. meetingStatus=="c"){
						html+="<span  class='enterSpan_video2'><a>已结束</a></span>";
					}else{}				
					html+="</div>";
					html+="</div>";
					html+="</div>";
					html+="</div>";
				});
				if(result.data.length  == 0){
					html = "当前暂无会议";
				}
				$("#eachMeeting").html(html);
			}
		},
		//点击进入会议
		openMeeting:function(uuid){
			location.href= WEB_ROOT+"/emergency/jointConferences/videoConference/videoMetting.jsp?uuid="+uuid;
		}
}


$(function(){
	var height=$(window).height() - 40;
	$(".container").height(height);
	formatter_date_utils.initDatePickerTm("applyTm");
	meeting.getMeetings();
	$("#totalMeeting").css("background-color","#FF7F50");
     $("#totalMeeting").click(function(){
    	$(this).css("background-color","#FF7F50");
    	$("#nostartMeeting").css("background-color","#0ab1f8");
    	$("#goingMeeting").css("background-color","#00CD99");
    	$("#endMeeting").css("background-color","#CDCDCD");
    });
    $("#nostartMeeting").click(function(){
    	$(this).css("background-color","#FF7F50");
    	$("#totalMeeting").css("background-color","#66CD66");
    	$("#goingMeeting").css("background-color","#00CD99");
    	$("#endMeeting").css("background-color","#CDCDCD");
    });
    $("#goingMeeting").click(function(){
    	$(this).css("background-color","#FF7F50");
    	$("#totalMeeting").css("background-color","#66CD66");
    	$("#nostartMeeting").css("background-color","#0ab1f8");
    	$("#endMeeting").css("background-color","#CDCDCD");
    });
    $("#endMeeting").click(function(){
    	$(this).css("background-color","#FF7F50");
    	$("#totalMeeting").css("background-color","#66CD66");
    	$("#nostartMeeting").css("background-color","#0ab1f8");
    	$("#goingMeeting").css("background-color","#00CD99");
    });
	
	$("#saveMeeting").click(function(){
		meeting.addMeeting();
	});	

	$(".enterSpan_speech").click(function(){
		location.href= WEB_ROOT+"/emergency/jointConferences/speechConferce/speechMetting.jsp";
	});
	
	//点击全部会议
	$("#totalMeeting").click(function(){
		meeting.getMeetings();
	});
	//未开始会议
	$("#nostartMeeting").click(function(){
		var meetingStatus="a";
		meeting.getMeetings(meetingStatus,null);
	});
	//点击进行中会议
	$("#goingMeeting").click(function(){
		var applyTm=$("#applyTm").val();
		var meetingStatus="b";
		meeting.getMeetings(meetingStatus,null);
	});
	//点击已结束会议
	$("#endMeeting").click(function(){
		var applyTm=$("#applyTm").val();
		var meetingStatus="c";
		meeting.getMeetings(meetingStatus,null);
		
		
	});
	//查询指定会议
	$("#query_meeting").click(function(){
		var applyTm=$("#applyTm").val();
		meeting.getMeetings(null,applyTm);
	});

     $("#refreshMeeting").click(function(){
    	 meeting.getMeetings();
     });
     
     /*setTimeout(meeting.getUsers,1000);*/
});

