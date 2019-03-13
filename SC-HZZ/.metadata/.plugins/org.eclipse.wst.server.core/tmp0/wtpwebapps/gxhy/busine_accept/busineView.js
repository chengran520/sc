var busineMap = {
	loadData:function(){
		var reulst = commonUtils.get(WEB_ROOT+"/busine/accept/getBusineInfo",null,false);
		if(reulst.flag){
			var data = reulst.data;
			this.showDetail(data);
		}
	},
	loadCountData:function(){
		var reulst = commonUtils.get(WEB_ROOT+"/busine/accept/getBusineAllCount",null,false);
		if(reulst.flag){
			var data = reulst.data;
			$("#img_count").html(data[0]);
			$("#img_stay").html(data[1]);
			$("#img_complte").html(data[2]);
			$("#img_law").html(data[3]);
			$("#img_mq").html(data[4]);
			$("#img_bak").html(data[5]);
			//busineMap.loadData();
		}
	},
	handleBusine:function(id){
		var data = {id:id};
		var reulst = commonUtils.get(WEB_ROOT+"/merit/perf/getMeritPerfById",data,false);
		if(reulst.flag){
			var data = reulst.data;
			$("#busine_cd").val(id);
			$("#meritDesc").val(data.meritDesc);
			$("#solveProblem").val(data.solveProblem);
			$("#unSolveProblem").val(data.unSolveProblem);
			$("#lawProblem").val(data.lawProblem);
			$("#nextMonthPlan").val(data.nextMonthPlan);
			$("#merit_context").html(data.meritNm);
			$('#busineModal').modal();
		}else{
			senderMsg("请求数据信息出现异常，请检查网络是否正常！", false);
		}
	},
	handleProjectFile:function(id){
		var datas = commonUtils.get(WEB_ROOT+"/file/projectFile/DetailProject",{"uuid":id},null);
		if(datas.flag){
			var data = datas.data[0];
			$("#uuid").val(data.uuid);
			$("#projectName1").html(data.projectName);
			$("#type1").html(projectFile.formatType(data.type,0,0));
			$("#manager1").html(data.manager);
			$("#affiliaated1").html(data.affiliaated);
			$("#approveMen1").html(data.approveMen);
			$("#time1").html(data.startTime+"&nbsp;至 &nbsp; "+data.endTime);
			$("#describe1").html(data.describe);
		}else{
			senderMsg("请求数据信息出现异常，请检查网络是否正常！", false);
		}
		$("#project_model").modal();
	},
	update:function(){
		var id = $("#busine_cd").val();
		var countent = $("#countent").val();
		var score = $('input:radio:checked').val();
		if(countent == null || countent == ''){
			senderMsg("请填写评价信息！", false);
			return;
		}
		if(score == null || score == ''){
			senderMsg("请选择绩效评分！", false);
			return;
		}
		var data = {id:id,countent:countent,score:score};
		commonUtils.post(WEB_ROOT+"/busine/accept/updateMeritInfo",data,false,"保存");
		if(commonUtils.flag){
			this.loadData();
			location.reload(false);
		}
	},
	showDetail:function(datas){
		var dbit = 0;
		var ybit = 0;
		var zfit = 0;
		var wjit = 0;
		var ggit = 0;
		if(datas.length > 0){
			var dbhtml ="";
			var ybhtml ="";
			var zfhtml ="";
			var gghtml ="";
			var wjhtml ="";
			for(var i = 0 ;i < datas.length ;i++){
				var type = datas[i].busineType;
				var bstatus = datas[i].busineStatus;
				//type:1、事件，2、执法，3、通知，4、文案
				//bstatus：0、待处理，1、已处理
				if(type == '1' && bstatus == '0' && dbit < 5){
					dbhtml += "<tr>";
					dbhtml += "<td class='tb_tr_td'><a title='"+datas[i].busineNm+"'>"+this.strEllip(datas[i].busineNm,25)+"</a></td>";
					dbhtml += "<td >"+formatter_date_utils.formatterStrTime(datas[i].reportTm,0,0)+"</td>";
					dbhtml += "<td >"+datas[i].reportNm+"</td>";
					dbhtml += "<td class='tb_tr_td_sp'><div style='border: 1px solid ;border-radius: 7px;color: #4EB059;cursor: pointer;' onclick='busineMap.handleBusine(\""+datas[i].busineCd+"\")'>处理</div></td>";
					dbhtml +="</tr>";
					dbit++;
					continue;
				}
				if(type == '1' && bstatus == '1' && ybit < 5){
					ybhtml += "<tr>";
					ybhtml += "<td class='tb_tr_td'><a title='"+datas[i].busineNm+"'>"+this.strEllip(datas[i].busineNm,18)+"</a></td>";
					ybhtml += "<td >"+formatter_date_utils.formatterStrTime(datas[i].reportTm,0,0)+"</td>";
					ybhtml += "<td >"+datas[i].reportNm+"</td>";
					ybhtml += "<td >"+formatter_date_utils.formatterStrTime(datas[i].proceTm,0,0)+"</td>";
					ybhtml += "<td >"+datas[i].proceNm+"</td>";
					ybhtml += "<td ><a>查看进度</a></td>";
					ybhtml += "<td class='tb_tr_td_sp' style='color: #EC494C'>"+datas[i].rpocedStatus == 0 ? '审核中':'已完成'+"</td>";
					ybhtml +="</tr>";
					ybit++;
					continue;
				}
				if(type == '2' && zfit < 5){
					zfhtml += "<tr>";
					zfhtml += "<td class='tb_tr_td'><a title='"+datas[i].busineNm+"'>"+this.strEllip(datas[i].busineNm,15)+"</a></td>";
					zfhtml += "<td class='tb_tr_td'><a>"+datas[i].busineTp+"</a></td>";
					zfhtml += "<td >"+formatter_date_utils.formatterStrTime(datas[i].reportTm,0,0)+"</td>";
					zfhtml += "<td >"+datas[i].reportNm+"</td>";
					zfhtml += "<td >"+datas[i].lawDept+"</td>";
					zfhtml += "<td class='tb_tr_td_sp'><div style='border: 1px solid ;border-radius: 7px;color: #4EB059;cursor: pointer;'>处理</div></td>";
					zfhtml+="</tr>";
					zfit++;
					continue;
				}
				if(type == '3' && ggit < 5){
					gghtml += "<tr>";
					gghtml += "<td class='tb_tr_td'><a title='"+datas[i].busineNm+"'>"+this.strEllip(datas[i].busineNm,20)+"</a></td>";
					gghtml += "<td >"+formatter_date_utils.formatterStrTime(datas[i].reportTm,0,0)+"</td>";
					gghtml += "<td >"+datas[i].reportNm+"</td>";
					gghtml+="</tr>";
					ggit++;
					continue;
				} 
				if(type == '4' && bstatus == '0' && wjit < 5){
					wjhtml += "<tr>";
					wjhtml += "<td class='tb_tr_td' style='text-align:center;'><a title='"+datas[i].busineNm+"'>"+datas[i].busineNm+"</a></td>";
					wjhtml += "<td >"+projectFile.formatType(datas[i].type,0,0)+"</td>";
					wjhtml += "<td >"+formatter_date_utils.formatterStrTime(datas[i].reportTm,0,0)+"</td>";
					wjhtml += "<td >"+datas[i].reportNm+"</td>";
					wjhtml += "<td class='tb_tr_td_sp' style='text-align:center;'><span style='border: 1px solid ;border-radius: 8px;padding:3px 15px;color: #4EB059;cursor: pointer;' onclick='busineMap.handleProjectFile(\""+datas[i].busineCd+"\")'>处理</span></td>";
					wjhtml+="</tr>";
					wjit++;
					continue;
				}
			}
			if(dbit == 0){
				dbhtml+="<tr><td colspan='4' class='tb_tr_td' style='text-align:center'>当前暂无需处理的信息</td></tr>";
			}
			if(ybit == 0){
				ybhtml+="<tr><td colspan='7' class='tb_tr_td' style='text-align:center'>当前暂无已处理的信息</td></tr>";
			}
			if(zfit == 0){
				zfhtml+="<tr><td colspan='7' class='tb_tr_td' style='text-align:center'>当前暂无需执法的信息</td></tr>";
			}
			if(wjit == 0){
				wjhtml+="<tr><td colspan='7' class='tb_tr_td' style='text-align:center'>当前暂无需处理的信息</td></tr>";
			}
			if(ggit == 0){
				gghtml+="<tr><td colspan='3' class='tb_tr_td' style='text-align:center'>当前暂无公告的信息</td></tr>";
			}
			$("#tb_bus_db").html(dbhtml);
			$("#tb_bus_yb").html(ybhtml);
			$("#tb_bus_zf").html(zfhtml);
			$("#tb_bus_gg").html(gghtml);
			$("#tb_bus_wj").html(wjhtml);
		}
	},
	strEllip:function(str,n){  
		var ilen = str.length;  
		if(ilen*2 <= n) return str;  
			n -= 3;  
			var i = 0;  
			while(i < ilen && n > 0)  {  
				if(escape(str.charAt(i)).length>4) n--;  
				n--;  
				i++;  
			}  
		if( n > 0) return str;  
		return str.substring(0,i)+"...";  
	},
	initBusineChart:function(){
		var data = this.getBusineChartData();
		busineMapChart.initChart(data);
		var resul = this.getinitChartZfData();
		busineMapChart.initChartZf(resul);
	},	
	getBusineChartData:function(){
		var reulst = commonUtils.get(WEB_ROOT+"/busine/accept/echartBusine",null,false);
		if(reulst.flag){
			return reulst.data;
		}
		return null;
	},
	getinitChartZfData:function(){
		var reulst = commonUtils.get(WEB_ROOT+"/busine/accept/initChartZf",null,false);
		if(reulst.flag){
			return reulst.data;
		}
		return null;
	},
	updateProjectStatus:function(){
		var id = $("#uuid").val();
		alert(id);
		commonUtils.post(WEB_ROOT+"/busine/accept/updateProject",{"uuid":id},false,"保存");
		if(commonUtils.flag){
			this.loadData();
			location.reload(false);
		}
	}
}
$(function(){
	busineMap.loadCountData();
	//busineMap.initBusineChart();
	$("#updateBusine").click(function(){
		busineMap.update();
	});
	$("#updateProject").click(function(){
		busineMap.updateProjectStatus();
	});
});