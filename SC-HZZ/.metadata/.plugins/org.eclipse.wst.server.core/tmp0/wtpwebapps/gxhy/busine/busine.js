var busineEvent={
    count:null,
    urlArr:[],
    map:null,
    index:'',
    userArr:[],
	getBusineCount:function(){
		var result=commonUtils.post(WEB_ROOT+"/busine/accept/getBusineSize",null,null);		
		if(result.flag){
			/*$("#todayCount").html(result.data[0]);*/		 		
			$("#noCount").html(result.data[0]);
			$("#handleCount").html(result.data[1]);
         }
   },
	busineInfo:function(opt){
		easyui_datagrid_util.fit=false;
		easyui_datagrid_util.singleSelect=true;
		easyui_datagrid_util.data={btype:"a1","paramType":"a"};
		easyui_datagrid_util.create_datagrid_options("patrol_busine", WEB_ROOT+ "/busine/accept/getBusines", busineEvent, opt);
	},
	queryBusineInfo:function(){
		var orginType=$("#busineTypeO option:selected").val();
		var busineId=$("#busineId").val();
		var busineUNm=$("#busineUNm").val();
		var createTm=$("#createTm").val();
		var data={"orginType":orginType,"busineId":busineId,"busineUNm":busineUNm,"createTm":createTm,"paramType":"b"};
		var opt={data:data};
		busineEvent.busineInfo(opt);
	},
	formatBusineRepeat:function(value, row, index){
		if(row.busineStatus!="1"){
			if(row.busineStatus=="3"||row.busineStatus=="4"){
				return "<span class='btn_span'>详情</span></td>";
			}else{
				if((row.handleUserIdOne==userId)||(row.status=="4"&&row.busineStatus=="2"&&row.handleUserIdOne==row.lastHandleUserId)||(row.status=="3"&&row.lastHandleUserId!=userId&&row.busineStatus=="2")||(row.status=="4"&&row.busineStatus=="2"&&userId!=row.lastHandleUserId)){
					return "<span class='btn_span'>处理</span></td>";
				}else{
					return "<span class='btn_span'>详情</span></td>";
				}
			}
			
		}else{
			return "<span class='btn_span'>处理</span></td>";
		}		
	},
	formatUser:function(value, row, index){
		if(row.busineUnm!=""){
			return value;
		}else{
			return "匿名用户";
		}
	},
	formatBusineColor:function(value, row, index){
		if(value=="未处理"){
			return "<a style='color:red;'>"+value+"</a>";
		}else if(value=="已处理"){
			return "<a style='color:green;'>"+value+"</a>";
		}else if(value=="处理中"){
			return "<a style='color:#FF7F00;'>"+value+"</a>";
		}else if(value=="无效"){
			return "<a style='color:#FF00FF;'>"+value+"</a>";
		}else{
			return "<a style='color:#A52A2A;'>"+value+"</a>";
		}
	},
	formatDate:function(value, row, index){
		return formatter_date_utils.formatterStrTime(value,null,null);
	},
	formatHandel:function(value, row, index){
		if(value==null||value==""){
			return "暂无";
		}else{
			return  value;
		}
	},
	loadSuccess:function(rowData){
		if(rowData.data.length>0){
			var busineId=rowData.data[0].busineId;
			busineEvent.getBusine(rowData.data[0]);
			var busineUnm=rowData.data[0].busineUnm;
			var createTm=rowData.data[0].createTm;
			var job=rowData.data[0].job;
			var dept=rowData.data[0].dept;
			var busineOrigin=rowData.data[0].busineOrigin;
			busineEvent.getTimeAxis(busineId,busineUnm,createTm,busineOrigin,job,dept);
		}else{
			busineEvent.getBusine(null);
			busineEvent.getTimeAxis(null);
		}
	},
	onClickRowHandle:function(rowIndex,rowData){
	    busineEvent.getBusine(rowData);
		var busineId=rowData.busineId;
		var busineUnm=rowData.busineUnm;
		var createTm=rowData.createTm;
		var job=rowData.job;
		var dept=rowData.dept;
		var busineOrigin=rowData.busineOrigin;
		busineEvent.getTimeAxis(busineId,busineUnm,createTm,busineOrigin,job,dept);
	},
	 getBusine:function(data){
		    if(data!=null){
		    	$("#busineId2").html(data.busineId);
				$("#busineOri2").html(data.busineOrigin);
				$("#busineTy2").html(data.busineType);
				if(data.busineUnm==""){
					$("#busineUN2").html("匿名用户");
				}else{
					$("#busineUN2").html(data.busineUnm);
				}
				$("#busineDesc2").html(data.busineDesc);
				$("#createT2").html(formatter_date_utils.formatterStrTime(data.createTm,null,null));
				$("#busineAddress2").html(data.busineAddress);
				//图片
				this.getImages(data.busineId);
		    }else{
		    	$("#busineId2").html("暂无");
				$("#busineOri2").html("暂无");
				$("#busineTy2").html("暂无");
				$("#busineUN2").html("暂无");
				$("#busineDesc2").html("暂无");
				$("#createT2").html("暂无");
				$("#busineAddress2").html("暂无");
				//图片
				var moUrl = WEB_ROOT + "/common/images/bussine/101.png";
		    	$("#left_img").attr("src",moUrl);
		    }
			
	  }, 
	//获取上报图片
	  getImages:function(busineId,id){
		  busineEvent.count=0;
		  busineEvent.urlArr=[];
		  var result=commonUtils.get(WEB_ROOT+"/busine/accept/getBusineImgs",{"busineId":busineId},null);
			if(result.flag){
				if(result.data.length>0){
					result.data.forEach((item) =>{
						var url = dbPath.imgPath(path,item);
			        	busineEvent.urlArr.push(url);	        	
			        });
					busineEvent.count = busineEvent.urlArr.length;
					busineEvent.index = 0;
					$("#left_img").attr("src",busineEvent.urlArr[0]);
				}else{
					var moUrl = WEB_ROOT + "/common/images/bussine/101.png";
			    	$("#left_img").attr("src",moUrl);
				}
			}else{
				var moUrl = WEB_ROOT + "/common/images/bussine/101.png";
		    	$("#left_img").attr("src",moUrl);
			}
	  },
	  next(){
		  if(busineEvent.index != undefined){
			  busineEvent.index++;
			  	if(busineEvent.index == busineEvent.count){
			  		busineEvent.index = 0;
			  	}
			  	$("#left_img").attr("src",busineEvent.urlArr[busineEvent.index]);
		  }else{
			  return;
		  }
	   },
	   getTimeAxis:function(busineId,busineUnm,createTm,busineOrigin,job,dept){
		   if(dept==null||dept==""){
			   dept="--";
		   }
			var result= commonUtils.get(WEB_ROOT+"/busine/accept/getTimeAxis",{busineId:busineId},null);
			if(result.flag){
				  if(result.data.length>0){
					    if(busineUnm==""){
					    	busineUnm="匿名用户";
					    }
					  	var html="<div class='flowChart'><div class='flowChart-left'><div class='dashed'></div></div>";
					  	html+="<div class='flowChart-right'><div class='oneNode'><div class='check check-danger'>";
				    	var status=result.data[0].status;
						html+="上报人";
						html+="</div><div class='tag-boder'><div class='tag'></div></div>";
						html+="<div class='NodeDetail'><div class='NodeDetail-content'>";
						html+="<p>"+busineUnm+"&nbsp;&nbsp;&nbsp;（<span class='getclolr'>部门：</span><span class='getclolr'>"+dept+"</span><span class='getclolr' style='padding-left:5px;'>职务：</span><span class='getclolr'>"+job+"</span>）</p><p>"+result.data[0].handleView+"</p></div>";
						html+="<div class='NodeDetail-footer'><span>"+formatter_date_utils.formatterStrTime(createTm,null,null)+"</span></div></div></div></div></div>";	
						if(busineOrigin=="河长巡河"){
							for(var i=0;i<result.data.length;i++){
								html+="<div class='flowChart'><div class='flowChart-left'><div class='dashed'></div></div>";
								html+="<div class='flowChart-right'><div class='oneNode'><div class='check check-danger'>";
								var status=result.data[i].status;
								if(status=="1"){
									html+="未处理";
								}else if(status=="2"){
									html+="退回";
								}else if(status=="3"){
									html+="转交";
								}else{
									html+="处理";
								}
								html+="</div><div class='tag-boder'><div class='tag'></div></div>";
								html+="<div class='NodeDetail'><div class='NodeDetail-content'>";
								html+="<p>"+result.data[i].busineUnm+"&nbsp;&nbsp;&nbsp;（<span class='getclolr'>部门：</span><span class='getclolr'>"+result.data[i].dept+"</span><span class='getclolr' style='padding-left:5px;'>职务：</span><span class='getclolr'>"+result.data[i].job+"</span>）</p><p>"+result.data[i].handleView+"</p></div>";
								html+="<div class='NodeDetail-footer'><span>"+formatter_date_utils.formatterStrTime(result.data[i].handleTm,null,null)+"</span></div></div></div></div></div>";				
							}
						}else{
							for(var i=0;i<result.data.length;i++){
								html+="<div class='flowChart'><div class='flowChart-left'><div class='dashed'></div></div>";
								html+="<div class='flowChart-right'><div class='oneNode'><div class='check check-danger'>";
								var status=result.data[i].status;
								if(status=="1"){
									html+="未处理";
								}else if(status=="2"){
									html+="退回";
								}else if(status=="3"){
									html+="转交";
								}else{
									html+="处理";
								}
								html+="</div><div class='tag-boder'><div class='tag'></div></div>";
								html+="<div class='NodeDetail'><div class='NodeDetail-content'>";
								html+="<p>"+result.data[i].busineUnm+"&nbsp;&nbsp;&nbsp;（<span class='getclolr'>部门：</span><span class='getclolr'>"+result.data[i].dept+"</span><span class='getclolr' style='padding-left:5px;'>职务：</span><span class='getclolr'>"+result.data[i].job+"</span>）</p><p>"+result.data[i].handleView+"</p></div>";
								html+="<div class='NodeDetail-footer'><span>"+formatter_date_utils.formatterStrTime(result.data[i].handleTm,null,null)+"</span></div></div></div></div></div>";				
							}
						}
						$("#timeAxis").html(html);
				}else{
					$("#timeAxis").html("<div style='heigth:500px;line-heigth:500px;text-align:center;'>暂无!</div>");
				}
			}		
	  },
  busineDetail:function(data){
		$("#handleView").val("");
		var address="";
		var desc="";
		var dateTime="";
		$("#busineModel").modal();
		var busineOrigin=data.busineOrigin;
		var orginId=data.originId;
		//如果当前登录人为上报人，只能查看不可处理
		 if(data.busineStatus!="1"){
			 if(data.busineStatus=="3"||data.busineStatus=="4"){
				 $("#view").hide();
				 $(".btns").hide();	
			 }else{
				 if((data.handleUserIdOne==userId)||(data.status=="4"&&data.busineStatus=="2"&&data.handleUserIdOne==data.lastHandleUserId)||(data.status=="3"&&data.lastHandleUserId!=userId&&data.busineStatus=="2")||(data.status=="4"&&data.busineStatus=="2"&&userId!=data.lastHandleUserId)){
						$("#view").show();
						$("#checkBusine").show();	
						$("#deliverBusine,#invalidBusine").hide();
				 }else{
						$("#view").hide();
						$(".btns").hide();	
				}	
			 }
			 	  
		 }else{
			 $("#reportImg").show();
			 $("#view").show();
			 $(".btns").show();	
			 $("#returnBusine").hide();
		 } 
		$("#busineI").val(data.busineId);
		$("#busineUid").val(data.busineUid);
		$("#busineOrgin").val(busineOrigin);
		$("#status").val(data.status);
		$("#orginId").val(orginId);
		$("#busineStatus").val(data.busineStatus);
		$("#handleUserIdOne").val(data.handleUserIdOne);
		address= data.busineAddress;
		desc= data.busineDesc;
		dateTime=formatter_date_utils.formatterStrTime(data.createTm,null,null);
		$("#busineIdS").html(data.busineId);		
		$("#busineOri").html(data.busineOrigin);
		$("#busineTypeS").html(data.busineType);
		if(data.busineUnm==""){
			$("#busineUN").html("匿名用户");
		}else{
			$("#busineUN").html(data.busineUnm);
		}		
		$("#busineUid").html();
		$("#busineDesc").html(data.busineDesc);
		$("#createT").html(dateTime);
		$("#busineAddress").html(data.busineAddress);					
		$("#busineDesc").html(data.busineDesc);
		var str=data.lastHandleUserNm;
		if(str==null||str==""){
			$("#lastHandleUserNm").html("暂无");
		}else{
			$("#lastHandleUserNm").html(data.lastHandleUserNm);
		}
		var htm="";	
		//上报图片
	   var result=commonUtils.get(WEB_ROOT+"/busine/accept/getBusineImgs",{"busineId":data.busineId},null);
	   if(result.data.length>0){
		   for(var i=0;i<result.data.length;i++){
				var url = dbPath.imgPath(path,result.data[i]);
				htm+="<img src="+url+" style='width:60px;height:60px;margin-right:20px;'  class='zoomify'>";			
			}
			$("#url").html(htm);
	   }else{
		   $("#url").html("暂无图片");
	   }
			
		$('.zoomify').zoomify();
		if(userjob==10||userjob==11||userjob==9||userjob==null||userjob==""){
			$("#deliverBusine").hide();
		}
		busineEvent.map = new AMap.Map('container', {
	        resizeEnable: true,
	        zoom:16
	    });
	    var geocoder = new AMap.Geocoder({
	        radius: 1000 //范围，默认：500
	    });
	    //地理编码,返回地理编码结果
	    geocoder.getLocation(address, function(status, result) {
	        if (status === 'complete' && result.info === 'OK') {
	            geocoder_CallBack(result,desc,dateTime);
	        }
	    });

	},
	//当前人可以直接处理
	checkBusine:function(status,busineStatus,lastHandleUserId,handleUserId,type){
		var busineOrgin=$("#busineOrgin").val();
		var handleView=$("#handleView").val();
		var busineId=$("#busineIdS").text();//事件id
		var workflowId=$("#workflowId").val();//如果用户选择图片的话
		var busineOrgin=$("#busineOrgin").val();
		var orginId=$("#orginId").val();
		var result= commonUtils.post(WEB_ROOT+"/busine/accept/insertWorkFlow",{handleView:handleView,busineId:busineId,status:status,busineStatus:busineStatus,handleUserId:handleUserId,type:type,workflowId:workflowId,busineOrgin:busineOrgin,orginId:orginId},null);
		if(result.flag){
			if(type==1){
				layer.msg('已处理!');
			}else if(type==2){
				layer.msg('已转交!');
			}else if(type==3){
				layer.msg('已退回!');
			}
			setTimeout(function(){location.href=WEB_ROOT+"/busine/busine.jsp";},1000);
		}else{
	        senderMsg("请填写完整信息，确认后保存！", false);	
	     }	
	},
	//无效事件
	invalidBusine:function(busineId,status,busineStatus,busineOrgin,orginId){
		var handleView=$("#handleView").val();	
		var result= commonUtils.get(WEB_ROOT+"/busine/accept/invalidBusine",{busineId:busineId,status:status,busineStatus:busineStatus,handleView:handleView,busineOrgin:busineOrgin,orginId:orginId},null);
		if(result.flag){
			layer.msg('此事件立案无效事件!');
			setTimeout(function(){location.href=WEB_ROOT+"/busine/busine.jsp";},1000);
		}
	}
}
$(function(){
	var p = $(window).height();	
	var contextH =$("#headerUserdiv").height();
	//此处因easyui样式导致自适应高度加上头部后显示不出来，所以将window高度减去头部高度
	$("#patrol").height(p-contextH); 
	formatter_date_utils.initDatePickerTm("createTm");
	var height = $(window).height();	
	var c=height-$("#chart").height()-$("#headerDiv").height();
	$(".main").height(c);
	$("#createTm_div").hide();
	var test1Hit = $(".test1").height();
	$("#patrol_busine").height(test1Hit * 0.99);
	busineEvent.getBusineCount();
	if(busineId!=null&&busineId!=""&&busineId!="null"){
		$("#busineId").val(busineId);
		busineEvent.queryBusineInfo();
	}else{
		//待处理事件
		busineEvent.busineInfo();
	}
	//点击待处理事件
	$("#untreatedBusine").click(function(){
		var opt={data:{btype:"a1","paramType":"a"}};
		busineEvent.busineInfo(opt);
	});
	//已处理事件
	$("#handledBusine").click(function(){
		var opt={data:{btype:"a3","paramType":"a"}};
		busineEvent.busineInfo(opt);
	});
	
	//直接处理
	$("#checkBusine").click(function(){
		var s=$("#status").val();//目前处于什么状态
		var busineSta=$("#busineStatus").val();
		var handleUserIdOne=$("#handleUserIdOne").val();
		var busineStatus="";//事件状态
		if(handleUserIdOne==userId){
			busineStatus="3";
		}else if(s==3||(s==4&&busineSta==2)){
			busineStatus="2";
		}else{
			busineStatus="3";
		}
		var status="4";//流程
		var lastHandleUserId=$("#busineUid").val(); //上次处理人
		var type=1;//表示这是直接处理
		busineEvent.checkBusine(status,busineStatus,lastHandleUserId,null,type);
	});
	//转交操作
	$("#conBusine").click(function(){
		var handleUserId=$("#resultUser").val();
		if(handleUserId == null || handleUserId == ''){
			layer.msg('成员单位为必选项!', {icon: 5});
			return;
		} 
		var status="3";//流程处理中状态
		var busineStatus="2";//事件状态
		var type=2;//表示转交
		busineEvent.checkBusine(status,busineStatus,null,handleUserId,type);
	});
	//无效事件
	$("#invalidBusine").click(function(){
		var busineStatus="4";//无效状态
		var status='5';//流程无效
		var busineId=$("#busineIdS").text();//事件id
		var busineOrgin=$("#busineOrgin").val(); 
		var orginId=$("#orginId").val(); 
		busineEvent.invalidBusine(busineId,status,busineStatus,busineOrgin,orginId);
	});
	//退回事件
	$("#returnBusine").click(function(){
		var status="2";//退回状态
		var busineStatus="2";//事件状态
		var type=3;//表示退回了
		busineEvent.checkBusine(status,busineStatus,null,null,type);
	});
	 //条件查询
	$("#queryBusine").click(function(){
		busineEvent.queryBusineInfo();
	});
	
	//刷新
	$("#refreshBusine").click(function(){
		$("#busineTypeO option:selected").val("");
		$("#busineId").val("");
		$("#busineUNm").val("");
		$("#createTm").val("");
		busineEvent.busineInfo();
	});
	
	$('#patrol_busine').datagrid({
		onClickCell: function(index,field,value){
			var rows = $('#patrol_busine').datagrid('getRows');   
			if(field == "repeat"){
				var row = rows[index];  
				busineEvent.busineDetail(row);
			}
			
		  }
	});
});
//地理编码返回结果展示
function geocoder_CallBack(data,desc,dateTime) {
    var resultStr = "";
    //地理编码结果数组
    var geocode = data.geocodes;
    for (var i = 0; i < geocode.length; i++) {
        busineEvent.marker = new AMap.Marker({
            map: busineEvent.map,
            position: [ geocode[i].location.getLng(), geocode[i].location.getLat()]
        });
        var info = [];
        info.push("<div  style='width:200px;heigth:50px;'><div><b>"+geocode[i].formattedAddress+"</b></div> ");
        info.push("<div style=\"padding:0px 0px 0px 4px;\">"+desc+"</div>");
        info.push("<div style='float:right;'>"+dateTime+"</div></div>");
        var infoWindow = new AMap.InfoWindow({
            content:info.join("<br/>"),
            offset: {x: 0, y: -30}
        });
         infoWindow.open(busineEvent.map, busineEvent.marker.getPosition());
    }
    busineEvent.map.setFitView();
}
