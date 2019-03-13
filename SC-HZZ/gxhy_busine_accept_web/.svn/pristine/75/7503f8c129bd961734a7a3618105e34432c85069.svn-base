var deskMap={
	initData:function(){
		var result=commonUtils.get(WEB_ROOT+ "/water/quality/getWorkBeanchCount",null,null);
		if(result.flag){
			var data = result.data;
			$("#totalEventCount").html(data[0]+" 件");
			$("#totalReachCount").html(data[1]+" 条");
			$("#totalPatrolCount").html(data[2]+" 次");
			$("#totalMicroCount").html(data[3]+" 次");
			$("#totalUseCount").html(data[4]+" 人");
			$("#totalProjectCount").html(data[5]+" 条");
		}
	},
	//待处理事件
	handleBusines:function(){
		var data={btype:"a1","paramType":"a"};
		var result=commonUtils.get(WEB_ROOT+ "/busine/accept/getBusines",data,null);
		if(result.flag){
			var html="";
			if(result.data.length>0){
				$.each(result.data,function(i,v){
					html+="	<li  onclick='deskMap.openBusine(\""+this.busineId+"\")'><i class='fa fa-caret-right' style='padding-right: 8px;'></i><a>"+this.busineDesc+"</a><span style='color: #EE3B3B;font-size: 12px;float:right;margin-right:10px;'>"+this.busineType+"</span></li>";
				});
			    $("#one_ul").html(html);
			}else{
				$("#one_ul").html("<li><i class='fa fa-caret-right' style='padding-right: 8px;'></i>当前暂无待处理的信息</li>");
			}	
		}
	},
	openBusine:function(busineId){
		var state=true;
		var tp=1;
		location.href=WEB_ROOT+"/busine/busine.jsp?busineId="+busineId+"&state="+state+"&tp="+tp;	
	},
	
	//通知公告
	informData:function(){
		var result=commonUtils.get(WEB_ROOT+ "/msg/base/getInformData",null,null);
		if(result.flag){
			var html="";
			if(result.data.length>0){
				$.each(result.data,function(i,v){
					if(this.msgTitle.length>=20 && this.msgTitle != null && this.msgTitle != undefined){
						html+="<li   onclick='deskMap.clickDetail(\""+this.uuid+"\");'><i class='fa fa-caret-right' style='padding-right: 8px;'></i><a>"+this.msgTitle.substring(0,20)+"...</a>";
					}else{
						html+="<li   onclick='deskMap.clickDetail(\""+this.uuid+"\");'><i class='fa fa-caret-right' style='padding-right: 8px;'></i><a>"+this.msgTitle+"</a>";
					}
					html+="<span style='color: #999;font-size: 12px;float:right;margin-right:10px;'>"+formatter_date_utils.formatterStrTime(this.sendTm,null,3)+"</span></li>";
				});
				$("#tzgg").html(html);
			}else{
				$("#tzgg").html("<li><i class='fa fa-caret-right' style='padding-right: 8px;'></i>当前暂无通知公告信息</li>");
			}
		}
	},
	//公告详情
	clickDetail:function(uuid){
		location.href=WEB_ROOT+"/work_bench/InformDetail.jsp?uuid="+uuid;
	},
	//水质数据
	waterQualityData:function(){
		var result=commonUtils.get(WEB_ROOT+ "/data_monitor/quality/getQualityListTop7",null,false);
		if(result.flag){
			var html="";
			if(result.data.length>0){
				$.each(result.data,function(i,v){
					var turb=parseFloat(this.turb).toFixed(0);
					var cond=parseFloat(this.cond).toFixed(0);
					var dox=parseFloat(this.dox).toFixed(2);
					var wt=parseFloat(this.wt).toFixed(1);
					html+="<li><i class='fa fa-caret-right' style='padding-right: 4px;'>&nbsp;</i>";
					html+="<label style='color: #12c7f9;font-size: 12px;'>温度:"+wt+"&nbsp;</label><span></span>";
					html+="<label style='color: #5ed522;font-size: 12px;'>浊度:"+cond+"&nbsp;</label><span></span>";
					html+="<label style='color: #23b562;font-size: 12px;'>电导率:"+turb+"&nbsp;</label><span></span>";
					html+="<label style='color: #ffc30c;font-size: 12px;'>氢离子:"+this.ph+"&nbsp;</label>";
					html+="<label style='color: #ff5604;font-size: 12px;'>溶解氧:"+dox+"</label>";
					html+="<span style='font-size: 12px;color:#999;float:right;margin-right:10px;'>&nbsp;"+formatter_date_utils.formatterStrTime(this.spt,null,5)+"</span></li>";
				});
				$("#sz").html(html);
			}else{
				$("#sz").html("<li><i class='fa fa-caret-right' style='padding-right: 8px;'></i>当前暂无公告信息</li>");
			}
			
		}
	},
	//执法监管
	lawData:function(){
	   var result=commonUtils.get(WEB_ROOT+ "/law/supervise/getLawDataList",null,false); 
	   if(result.flag){
		   var  html="";
		   if(result.data != null && result.data.length>0){
			   $.each(result.data,function(i,val){
				   $.each(val, (i, v) => {  
					   if(this.busineDesc != null && this.busineDesc.length >= 20 && this.busineDesc != undefined){
							 html ="<li onclick='deskMap.clickLaw(\""+this.uuid+"\");'><i class='fa fa-caret-right' style='padding-right: 8px;'></i><a>"+this.busineDesc.substring(0,20)+"...</a>";
						 } 
					   if(this.busineDesc != null && this.busineDesc.length < 20 && this.busineDesc != undefined){
							 html ="<li onclick='deskMap.clickLaw(\""+this.uuid+"\");'><i class='fa fa-caret-right' style='padding-right: 8px;'></i><a>"+this.busineDesc+"</a>";
					   }
					   html+="<span style='color: #999;font-size: 12px;float:right;margin-right:10px;'>"+formatter_date_utils.formatterStrTime(this.updateTm,null,3)+"</span></li>";
					});
				   $("#zfjg").append(html);	
			   });
			 
		   }else{
			   $("#zfjg").html("<li><i class='fa fa-caret-right' style='padding-right: 8px;'></i>当前暂无执法信息</li>");
		   }
		    
	   }
	},
	clickLaw:function(uuid){
		var tp=1;
		location.href=WEB_ROOT+"/law_enforcement/law_list.jsp?uuid="+uuid+"&tp="+tp;	
	},
	jointConference:function(){
		var result=commonUtils.get(WEB_ROOT+ "/law/supervise/getLawDataList",null,false); 
	},
	//最新制度文案
	systemData:function(){
		var result=commonUtils.get(WEB_ROOT+ "/file/system/getSystems",null,false);
		if(result.flag){
			var html="";
			if(result.data.length>0){
				$.each(result.data,function(i,v){
					if(i < 7){
						if(this.fileTitle.length>=20){
							html+="<li onclick='deskMap.clickFile(\""+this.fileTitle+"\",\""+this.fileContent+"\");'><i class='fa fa-caret-right' style='padding-right: 8px;'></i><a>"+this.fileTitle.substring(0,25)+"...</a>";	
						}else{
							html+="<li onclick='deskMap.clickFile(\""+this.fileTitle+"\",\""+this.fileContent+"\");'><i class='fa fa-caret-right' style='padding-right: 8px;'></i><a>"+this.fileTitle+"</a>";	
						}
						html+="<span style='color: #999;font-size: 12px;float:right;margin-right:10px;'>"+formatter_date_utils.formatterStrTime(this.creatTime,null,3)+"</span></li>";
					}
				});
				$("#file").html(html);
			}else{
			    $("#file").html("<li><i class='fa fa-caret-right' style='padding-right: 8px;'></i>当前暂无相关制度信息</li>");
			}
			
		}
	},
	clickFile:function(fileTitle,fileContent){
		/*location.href=WEB_ROOT+"/work_bench/fileDe.jsp?uuid="+uuid;*/
		var p = $(window).height();	
		var w = $(window).width();	
		   layer.open({
			  title :fileTitle+'制度文件',
			  type: 2,
			  content: 'fileDe.jsp?fileContent='+fileContent,
			  area: [''+w+'px', ''+p+'px'],
			  maxmin: true,
			  end: function () {
				 
	            } 
	   });
	},
	//联席会议
	lxhyData:function(){
		var result=commonUtils.get(WEB_ROOT+"/meeting/getMeetings",null,null);
		if(result.flag){
			var html="";
			if(result.data.length>0){
				$.each(result.data,function(i,v){
					if(i < 7){
						if(this.meetingName.length>=20){
							html+="<li onclick='deskMap.clickMeeting(\""+this.uuid+"\",\""+this.meetingStatus+"\");'><i class='fa fa-caret-right' style='padding-right: 8px;'></i><a>"+this.meetingName.substring(0,20)+"...</a>";	
						}else{
							html+="<li onclick='deskMap.clickMeeting(\""+this.uuid+"\",\""+this.meetingStatus+"\");'><i class='fa fa-caret-right' style='padding-right: 8px;'></i><a>"+this.meetingName+"</a>";	
						}
						if(this.meetingStatus=="a"){
							html+="<span style='color: red;font-size: 12px;float:right;margin-right:10px;'>未开始</span></li>";
						}else if(this.meetingStatus=="b"){
							html+="<span style='color:#5ed522;font-size: 12px;float:right;margin-right:10px;'>进行中</span></li>";
						}else if(this.meetingStatus=="c"){
							html+="<span style='color: #ccc;font-size: 12px;float:right;margin-right:10px;'>已结束</span></li>";
						}else{
							
						}
						
					}
				});
				$("#lxhy").html(html);
			}else{
			    $("#lxhy").html("<li><i class='fa fa-caret-right' style='padding-right: 8px;'></i>当前暂无相关联席会议</li>");
			}
		}
	},	
	clickMeeting:function(uuid,meetingStatus){
		if(meetingStatus=="a"){
			layer.msg('未开始');
		}else if(meetingStatus=="b"){
			var tp=1;
			location.href= WEB_ROOT+"/emergency/jointConferences/videoConference/videoMetting.jsp?uuid="+uuid+"&tp="+tp;	
		}else if(meetingStatus=="c"){
			layer.msg('已结束');
		}else{
		}
		
	},
	initBusineChart:function(){
		var data=this.initChartData();
		busineMapChart.initChart(data);
		var resul=this.getinitChartZfData();
		busineMapChart.initChartZf(resul);
		var result=this.inintChartSourceData();
		busineMapChart.initChartSource(result);
	},

	//根据时间查询最近一周内的柱状图	
	initChartData:function(){
		var reulst = commonUtils.get(WEB_ROOT+"/busine/accept/initChart",null,false);
		if(reulst.flag){
			return reulst.data;
		}
		return null;
	},
	
	//投诉统计
	getinitChartZfData:function(){
		var reulst = commonUtils.get(WEB_ROOT+"/busine/accept/initChartZf",null,false);
		if(reulst.flag){
			return reulst.data;
		}
		return null;
	},
	
	//当月事件完成率
	initCharttfData:function(){
		var reulst = commonUtils.get(WEB_ROOT+"/busine/accept/getChartRate",null,false);
		if(reulst.flag){
			return reulst.data;
		}
		return null;
	},
	//事件来源分布
	inintChartSourceData:function(){
		var result= commonUtils.get(WEB_ROOT+"/busine/accept/getSource",null,false);
		if(result.flag){
			return result.data;
		}
		return null;
	},
	workMoreInfo:function(tp){
		if(tp == 1){//业务受理
			location.href=WEB_ROOT+"/busine/busine.jsp?tp=1";
		}else if(tp == 2){//制度文案
			var status=true;
			location.href=WEB_ROOT+"/filemanage/systemFile/systemFile.jsp?tp=2";
		}else if(tp == 3){//联席会议
			location.href=WEB_ROOT+"/emergency/jointConferences/jointConferenceInfo.jsp?tp=3";
		}else if(tp == 4){//水质监测
			location.href=WEB_ROOT+"/data_center/water/quality/quality_info.jsp?tp=4";
		}else{//执法监管
			location.href=WEB_ROOT+"/law_enforcement/law_list.jsp?tp=5";
		}
	}
}
$(function(){
	var h= window.screen.width;
	
	if(h===1920){
		$(".one_div").css("margin-left","6px");
	}
	if(h==1680){
		$(".one_div").css("margin-left","4px");
	}
	if(h==1600){
		$(".one_div").css("margin-left","0px");
		$(".row").css("margin-left","-28px");
	}
	if(h==1440){
		$(".one_div").css("margin-left","-3px");
		$(".row").css("margin-left","-32px");
	}
	var winWidth = $(window).width();
	var winHeight = $(window).height();
	$(".tb_div").height((winHeight - 160) / 3);
	$("#initChartsj,#initChartdf,#initChartzf").width(winWidth * 0.318);
	$("#initChartsj,#initChartdf,#initChartzf").height((winHeight - 160) / 3 - 33);
	deskMap.initData();
	deskMap.initBusineChart();
	deskMap.handleBusines();
	deskMap.informData();
	deskMap.waterQualityData();
	deskMap.lawData();
	deskMap.systemData();
	deskMap.lxhyData();
});