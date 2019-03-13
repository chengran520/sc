var eventInfo={
	eventData:function(){
		easyui_datagrid_util.fit=false;
		easyui_datagrid_util.singleSelect=true;
		easyui_datagrid_util.create_datagrid_options("riverCourse", WEB_ROOT+ "/event/riverCourse/getRiverCourses?type=1", eventInfo, null);
	},
	formatterTime:function(value, row, index){
	   return formatter_date_utils.formatterStrTime(value,0,3);
	},
	formatterDesc:function(value, row, index){
		var content = '';   
		var abValue = value +'';   
		if(value != undefined){      
			if(value.length >= 10) {         
				abValue = value.substring(0,10) + "...";         
				content = '<a href="javascript:;"  title="' + value + '" class="easyui-tooltip">' + abValue + '</a>';      
			}else{         
				content = '<a href="javascript:;"  title="' + abValue + '" class="easyui-tooltip">' + abValue + '</a>';      
				}   
		}   
		return content;
	},
	loadSuccess:function(rowData){
		this.getPollTimeAxis(rowData.data[0]);
	},
	 onClickRowHandle:function(rowIndex,rowData){
		 this.getPollTimeAxis(rowData);
	 },
	 getPollTimeAxis:function(data){
		 var busineId=data.busineId;
			var busineUnm=data.busineUm;
			var createTm=data.createTm;
			var busineOrigin=data.busineOrigin;
			var job=data.job;
			var dept=data.dept;
			var result= commonUtils.get(WEB_ROOT+"/busine/accept/getTimeAxis",{busineId:busineId},null);
			if(result.flag){
				  if(result.data.length>0){
					    if(busineUnm==""){
					    	busineUnm="匿名用户";
					    }
					  	var html="<div class='flowChart'><div class='flowChart-left'><div class='dashed'></div></div>";
					  	html+="<div class='flowChart-right'><div class='oneNode'><div class='check check-danger'>";
						html+="上报人";
						html+="</div><div class='tag-boder'><div class='tag'></div></div>";
						html+="<div class='NodeDetail'><div class='NodeDetail-content'>";
						html+="<p>"+busineUnm+"&nbsp;&nbsp;&nbsp;（<span class='getclolr'>部门：</span><span class='getclolr'>"+dept+"</span><span class='getclolr' style='padding-left:5px;'>职务：</span><span class='getclolr'>"+job+"</span>）</p><p>"+result.data[0].handleView+"</p></div>";
						html+="<div class='NodeDetail-footer'><span>"+formatter_date_utils.formatterStrTime(createTm,null,null)+"</span></div></div></div></div></div>";	
						if(busineOrigin=="hzxh"){
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
	getPieRiverWay:function(){
		var data = {'type':1};
		var result=commonUtils.get(WEB_ROOT+"/event/riverCourse/getPieRiverCourse",data,false,"");
		if(result.flag){
			return result.data;
		}
	},
	echartsPieSite:function(data){
		var myCharts = echarts.init(document.getElementById('pie'));
		var option = {
				   title : {
				       text: '专题事件分布图',
				       x:'center'
				   },
				   tooltip : {
				       trigger: 'item',
				       formatter: "{a} <br/>{b} : {c} ({d}%)"
				   },
				   legend: {
				       orient: 'vertical',
				       left: 'right',
				       data: data.names
				   },
				   series : [
				       {
				           name: '数据来源',
				           type: 'pie',
				           radius : '55%',
				           center: ['50%', '60%'],
				           data:data.models,
				           itemStyle: {
				           normal:{
				             label:{
				             show:true,
				             formatter: '{b} : {c} \n ({d}%)'
				             },
				             labelLine:{
				             show:true
				             }
				             },
				               emphasis: {
				                   shadowBlur: 10,
				                   shadowOffsetX: 0,
				                   shadowColor: 'rgba(0, 0, 0, 0.5)'
				               }
				           }
				       }
				   ],
				   color: ['#00CC00','#0066CC','#99CCCC']
				};
	    myCharts.setOption(option);
	}
}

$(function(){
	var height=$(window).height();
	$("#Div0,#Div1,#Div2").height(height - 40);
	$("#pie").height((height - 40) * 0.5);
	$("#timeAxis").height((height - 40) * 0.5 - 50);
	$("#riverCourse").height(height - 40);
	eventInfo.eventData();
	var data=eventInfo.getPieRiverWay();
	eventInfo.echartsPieSite(data);
});