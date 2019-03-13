var lawAccept={
	map:null,
	count:null,
	urlArr:[],
	index:'',
	showMap:function(data){			
			var maps = new BMap.Map("mapDiv");
			if(data!=null){
				var busineAddress=data.busineAddress;
				var myGeo = new BMap.Geocoder();
				myGeo.getPoint(busineAddress, function(point){
					if (point) {
						//经度
					    var pointx = point.lng;
					    //纬度
					    var pointy = point.lat;	
					    var point = new BMap.Point(pointx,pointy);
						var marker = new BMap.Marker(point);
						maps.centerAndZoom(point, 15);
						maps.addOverlay(marker);
					}
				}, ""); 
			}else{
				maps.centerAndZoom("石城",15);	
			}
		 },
	loadData:function(opt){
		formatter_date_utils.initDatePickerTm("time");
		easyui_datagrid_util.fit=false;
		easyui_datagrid_util.singleSelect=true;
		easyui_datagrid_util.data={"isFilling":"1"};
		easyui_datagrid_util.create_datagrid_options("lawAccept", WEB_ROOT+ "/law/enforment/getLawEnMentList", lawAccept, opt);
	},	
    querylawAccept:function(){
    	var lawSource=$("#type option:selected").val();
		var lawTm=$("#time").val();
		var keyword=$("#keywordLaw").val();
		var data = {'lawSource':lawSource,'lawTm':lawTm,'keyword':keyword};
		$('#lawAccept').datagrid('load',data); 
	},
	loadSuccess:function(rowData){
		var data=rowData.data[0];
		lawAccept.showData(data);
		lawAccept.showMap(data);
		lawAccept.loadImages(data);
		lawAccept.loadWorkFlow(data);		
	},
	onClickRowHandle:function(rowIndex,rowData){
		this.showData(rowData);
		this.loadWorkFlow(rowData);
		lawAccept.showMap(rowData);
		lawAccept.loadImages(rowData);
	},
	showData:function(data){
		if(data!=null){
			$("#lawId").html(data.lawId);
			$("#lawSource").html(data.busineId);
			$("#lawAdres").html(data.busineAddress);
			$("#reportUser").html(data.reportUser);
			$("#reportTm").html(formatter_date_utils.formatterStrTime(data.reportTm,0,0));
			$("#reportPh").html(data.reportUserPhone);
			$("#lawNt").html(data.busineDesc);
			$("#handleUser").html(data.handleUser);
			$("#handleTmMit").html(data.handleTmmit+"天");
			$("#lianUser").html(data.registerUserNm);
			$("#lianTm").html(formatter_date_utils.formatterStrTime(data.registerTm,0,0));	
			if(data.isFiling==0){
				$("#isFiling").html("未立案");
			}else if(data.isFiling==1){
				$("#isFiling").html("已立案");
			}else{}
			
			if(data.isFilClose==0){
				$("#isFilClose").html("未结案");
			}else if(data.isFilClose==1){
				$("#isFilClose").html("已结案");
			}else{}	
			
			//处理时间
			if(data.handleTm==0||data.registerTm==0){
				$("#shijian").html("0天");
			}else{
				var shijian=((data.handleTm - data.registerTm) / 1000 / 60/24).toFixed(2);//两个时间相差的小时数
				$("#shijian").html(shijian+"天");
			}
		}else{
			$("#lawId").html("暂无");
			$("#lawSource").html("暂无");
			$("#lawAdres").html("暂无");
			$("#reportUser").html("暂无");
			$("#reportTm").html("暂无");
			$("#reportPh").html("暂无");
			$("#lawNt").html("暂无");
			$("#handleUser").html("暂无");
			$("#handleTmMit").html("暂无");
			$("#lianUser").html("暂无");
			$("#lianTm").html("暂无");
			$("#isFiling").html("暂无");
			$("#isFilClose").html("暂无");
			$("#shijian").html("暂无");
		}
	
		
	},
	formatterTM:function(value, row, index){
		return formatter_date_utils.formatterStrTime(value,0,0);
	},
	formatterDetail:function(value, row, index){
		var lawId=row.lawId;
		var registerUserId=row.registerUserId;
		var status=row.status;
		var isFiling=row.isFiling;
		 var html="";
		 if(row.status==2){
			 html ="<a style='color:#00CD00;' class='colorDetail'>已处理</a>";			 
		 }else{
			 var num=0;
				if(row.registerUserId.indexOf(",")!=-1){
					var arr = row.registerUserId.split(',');
					num=$.inArray(userId,arr);
				}
			 if((num!=-1&&isFiling==1)||(isFiling==1&&userjob==14)){
				 html ="<a style='color:#D02090;' class='colorDetail' onclick='lawAccept.handleLaw(\""+lawId+"\",\""+registerUserId+"\");'>处理</a>";
			 }
		 }    
	     return html;
	},
	handleLaw:function(lawId,registerUserId){
		$("#lawId_model").val(lawId);
		if(registerUserId.indexOf(",")!=-1){
			var arr = registerUserId.split(',');
			num=$.inArray(userId,arr);
		}
		if((status==0&&userjob==14)||num!=-1){//如果上报受理人和当前用户一样
			$("#handleLawModal").modal();
		}else{
			 layer.msg('对不起！您没有操作此功能的权限');
		}
	},
	setMapWith:function(){
		var div2 = $("#law-div2").width();
		var divH = $(".demo").height();
		var divH1 = $(".law-div-div1").height();
		var div3 = $("#law-div-div2").width();
		$("#mapDiv").width(div2-div3);
		$("#mapDiv").height(divH-divH1-33);
		$("#law-div-div3").height(divH-divH1-40);
	},
	updateLaw:function(){
		var lawId=$("#lawId_model").val();
		var handleView=$("#handleView").val();
		var resultData=commonUtils.post(WEB_ROOT+"/law/enforment/updateLaw",{"lawId":lawId,"handleView":handleView},false,"保存");
		if(resultData.data==1){
			 layer.msg('保存成功！', {icon: 1});
			 $('#handleLawModal').modal('hide');
			 $('#lawAccept').datagrid('load');  
		}else{
			 layer.msg('保存失败！', {icon: 5});
			 $('#handleLawModal').modal('hide');
			 layer.close();
		}
	},
	loadWorkFlow:function(data){
		if(data!=null){
			var resultData=commonUtils.post(WEB_ROOT+"/law/enforment/getLawWorkFlows",{"lawId":data.lawId},false,"保存");
			if(resultData.flag){
				var html="";
				if(resultData!=null){
					html+="<div class='oneNode'>";
					html+="<div class='check check-prime'>发起</div>";
				    html+="<div class='tag-boder'>";
				    html+="<div class='tag'></div>";
				    html+="</div>";
				    html+="<div class='NodeDetail'>";
				    html+="<div class='NodeDetail-title'>";
				    html+="<span>"+resultData.data[0].reportUser+"&nbsp;&nbsp;&nbsp;（<span class='getclolr'>部门：</span><span class='getclolr'>县河长办</span><span class='getclolr' style='padding-left:5px;'>职务：河长办</span>）"+"</span>";
				    html+="</div>";
				    html+="<div class='NodeDetail-content'>";
				    html+="</div>";
				    html+="<div class='NodeDetail-footer'>";
				    html+="<span>"+formatter_date_utils.formatterStrTime(resultData.data[0].reportTm,0,0)+"</span>";
				    html+="</div></div></div>";
					
					
					$.each(resultData.data,function(i,v){
						html+="<div class='oneNode'>";
					    if(this.status==1){
					    	html+="<div class='check check-prime'>执法</div>";
					    }else if(this.status==2){
					    	html+="<div class='check check-prime'>处理</div>";
					    }else{}
					    html+="<div class='tag-boder'>";
					    html+="<div class='tag'></div>";
					    html+="</div>";
					    html+="<div class='NodeDetail'>";
					    html+="<div class='NodeDetail-title'>";
					    html+="<span>"+this.handleUser+"&nbsp;&nbsp;&nbsp;（<span class='getclolr'>部门：</span><span class='getclolr'>"+this.dept+"</span><span class='getclolr' style='padding-left:5px;'>职务：</span><span class='getclolr'>"+this.job+"</span>）"+"</span>";
					    html+="</div>";
					    html+="<div class='NodeDetail-content'>";
					    html+="<span class='badge'>描述:</span>";
					    if(this.handleView==null||this.handleView==""){
					    	html+="<p>暂无！</p>";	
					    }else{
					    	html+="<p>"+this.handleView+"</p>";	
					    }
					    html+="</div>";
					    html+="<div class='NodeDetail-footer'>";
					    html+="<span>"+formatter_date_utils.formatterStrTime(this.handleTm,0,0)+"</span>";
					    html+="</div></div></div>";
					});
				}
				$(".flowChart-right").html(html);
			}
		}else{
			$(".flowChart").html("暂无数据！");
		}
		
	},
	loadImages:function(data){
		if(data!=null){
			lawAccept.count=0;
			lawAccept.urlArr=[];
			var result=commonUtils.get(WEB_ROOT+"/busine/accept/getBusineImgs",{"busineId":data.busineId},null);
			if(result.flag){
				if(result.data.length>0){
					result.data.forEach((item) =>{
						var url = dbPath.imgPath(path,item);
						lawAccept.urlArr.push(url);	        	
			        });
					lawAccept.count = lawAccept.urlArr.length;
					lawAccept.index = 0;
					$("#left_img").attr("src",lawAccept.urlArr[0]);
				}else{
					var moUrl = WEB_ROOT + "/common/images/bussine/101.png";
			    	$("#left_img").attr("src",moUrl);
				}
			}
		}else{
			var moUrl = WEB_ROOT + "/common/images/bussine/101.png";
	    	$("#left_img").attr("src",moUrl);
		}
		
	},
	next(){
		  if(lawAccept.index != undefined){
			  lawAccept.index++;
			  	if(lawAccept.index == lawAccept.count){
			  		lawAccept.index = 0;
			  	}
			  	$("#left_img").attr("src",lawAccept.urlArr[lawAccept.index]);
		  }else{
			  return;
		  }
	}
}
$(function(){
	var p = $(window).height();	
	var contextH = $("#LawheaderDiv").height();
	//此处因easyui样式导致自适应高度加上头部后显示不出来，所以将window高度减去头部高度
	$("#lawAccept").height(p-contextH); 
	$("#querylawAccept").click(function(){
		lawAccept.querylawAccept();
	});
	$("#updateLaw").click(function(){
		lawAccept.updateLaw();
	});
	lawAccept.loadData();
	lawAccept.setMapWith();
	$("#refreshlawAccept").click(function(){
		$("#type").val();
		$("#time").val("");
		$("#keywordLaw").val("");
		lawAccept.loadData();
	});
});