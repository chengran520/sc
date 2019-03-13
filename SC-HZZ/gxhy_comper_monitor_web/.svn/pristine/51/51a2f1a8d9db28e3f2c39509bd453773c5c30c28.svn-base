var mapViewInfo = {
	rvData:null,
	adData:null,
	quaData:null,
	data:null,
	lgtd:null,
	lttd:null,
	inintLeftInfo:function(tp){
		var data = this.data;
		var html = "<ul class='well' id='well_div' style='overflow: auto;'>";
		if(data.length > 0){
			for(var i = 0 ;i < data.length;i++){
				if(tp == 0){
					html += "<li><span><img src="+WEB_ROOT+"/common/images/water_quality/";
					if(i % 2 == 0){
						html += "1.png>";
					}else if(i % 3 == 0){
						html += "2.png>";
					}else if(i % 5 == 0){
						html += "3.png>";
					}else if(i % 7 == 0){
						html += "4.png>";
					}else if(i % 9 == 0){
						html += "5.png>";
					}else{
						html += "6.png>";
					}
					html += "</span><div><span style='display:none' id='rv_stcd'>"+data[i].rvCd+"</span><span class='colorGreen'>"+data[i].rvNm+"</span><div style='clear: both;'></div>";
					html += "<p class='view_span_defalut'>上级河流："+(data[i].prvNm == null ? "暂无":data[i].prvNm)+"</p><p class='view_span_defalut'>河流长度："+data[i].rvlt+" km</p></div></li>";
				}else if(tp == 1){
					var sttp = data[i].sttp;
					if(sttp == 'SZ'){
						html += "<li><span><img style='width:16px;height:16px;' src='"+WEB_ROOT+"/common/images/river/shuiz.png' >";
					}else if(sttp == 'SP'){
						html += "<li><span><img style='width:14px;height:14px;' src="+WEB_ROOT+"/common/images/river/video_1.svg"+">";
					}else{
						html += "<li><span><img style='width:13px;height:13px;' src='"+WEB_ROOT+"/common/images/river/"+(sttp == 'PP' ? (i % 3 != 0 ? 'pp_0.png':'pp_1.png'): 'sk1.png')+"' >";
					}
					html += "</span><div><span style='display:none' id='stcd' title='"+sttp+"'>"+data[i].stcd+"</span><span class='colorBlack'>"+data[i].stnm+"</span><div style='clear: both;'></div></li>";
				}else{
					
				}
			}
		}else{
			if(tp == 0){				
				html += "<li>当前暂无河流信息</li>";
			}else {
				html += "<li>当前暂无站点信息</li>";
			}
		}
		html += "</ul>";
		$("#stationList_defaultView").html(html);
	},
	inintLeftMore:function(opt,div){
		var html = "<ul class='well' id='well_div' style='overflow: auto;'>";
		html+='<li class="well_li" ><div  id="more_div" class="moreDiv_well">';
		html+=div;
		html+='<div style="height: 430px;">';
		html+=opt;
		html+='</div></li>';
		html+='<li class="well_li" id="more_well_li"><div class="more_slgz_div">管理范围水利工程</div><div><div class="more_glshow headr" style=""><img  style="position: inherit;" class="more_img" src="'+WEB_ROOT+'/common/images/river/sk.png"><p class="more_p1">121座</p><p style="padding: 18px 0 0 3px;">大型水库</p></div>';
		html+='<div class="more_glshow headr glscor1" style=""><img class="more_img" style="position: inherit;" src="'+WEB_ROOT+'/common/images/river/sk.png"><p class="more_p1">198座</p><p style="padding: 18px 0 0 3px;">小型水库</p></div>'
		html+='<div class="more_glshow headr glscor2" style=""><img class="more_img" style="position: inherit;" src="'+WEB_ROOT+'/common/images/river/hddm.png"><p class="more_p1">59段</p><p style="padding: 18px 0 0 3px;">河道断面</p></div>'
		html+='<div class="more_glshow glscor1 " style=""><img class="more_img"  style="position: inherit;" src="'+WEB_ROOT+'/common/images/river/hdxx.png"><p class="more_p1" >78条</p><p style="padding: 18px 0 0 12px;">河&nbsp;&nbsp;段</p></div>'
		html+='<div class="more_glshow glscor2" style=""><img class="more_img"  style="position: inherit;" src="'+WEB_ROOT+'/common/images/river/hl.png"><p class="more_p1">12条</p><p style="padding: 18px 0 0 12px;">河&nbsp;&nbsp;流</p></div>'
		html+='<div class="more_glshow glscor3" style=""><img class="more_img" style="position: inherit;" src="'+WEB_ROOT+'/common/images/river/pwk.png"><p class="more_p1">68个</p><p style="padding: 18px 0 0 8px;">排污口</p></div>'
		html+='<div class="more_glshow glscor1" style=""><img class="more_img"  style="position: inherit;"src="'+WEB_ROOT+'/common/images/river/gsgc.png"><p class="more_p1">355座</p><p style="padding: 18px 0 0 3px;">供水工程</p></div>'
		html+='<div class="more_glshow glscor3" style=""><img class="more_img"  style="position: inherit;"src="'+WEB_ROOT+'/common/images/river/gq.png"><p class="more_p1">223座</p><p style="padding: 18px 0 0 3px;">灌区工程</p></div>'
		html+='<div class="more_glshow" style=""><img class="more_img" style="position: inherit;" src="'+WEB_ROOT+'/common/images/river/syd.png"><p class="more_p1">26座</p><p style="padding: 18px 0 0 8px;">水源地</p></div>'
		html+='<div class="more_glshow glscor3" style=""><img class="more_img" style="position: inherit;" src="'+WEB_ROOT+'/common/images/river/sk.png"><p class="more_p1">108座</p><p style="padding: 18px 0 0 12px;">泵&nbsp;&nbsp;站</p></div>'
		html+='<div class="more_glshow" style=""><img class="more_img" style="position: inherit;" src="'+WEB_ROOT+'/common/images/river/qsk.png"><p class="more_p1">38个</p><p style="padding: 18px 0 0 3px;">取水口</p></div>'
		html+='<div class="more_glshow glscor2" style=""><img class="more_img"  style="position: inherit;"src="'+WEB_ROOT+'/common/images/river/ntqs.png"><p class="more_p1">12个</p><p style="padding: 18px 0 0 3px;">农田供水</p></div></div></li>'
		html += "</ul>";
		$("#stationList_defaultView").html(html);
	},
	//获取河道信息
	initData:function(key,isTp){
		$("#inpt_query").show();
		$("#all_div").css("top","40px");
		//isTp:0 查询河流，1查询测站，3查询行政区
		if(isTp == 0){
			var data = {key:key};
			var reulst = commonUtils.get(WEB_ROOT+"/data/monitor/riverDataInfo",data,false);
			if(reulst.flag){
				this.rvData = reulst.data;
				this.data = reulst.data;
				this.inintLeftInfo(isTp);
			}
			var adReultst = commonUtils.get(WEB_ROOT+"/data/monitor/getUserAdcdRiver",null,false);
			if(adReultst.flag){
				this.adData = adReultst.data;
			}
		}else if (isTp == 1){
			var data = {key:key};
			var reulst = commonUtils.get(WEB_ROOT+"/hydro/stbprp/getStbprpInfo",data,false);
			if(reulst.flag){
				this.data = reulst.data.stbprp;
				this.inintLeftInfo(isTp);
			}
		}else{
			$("#inpt_query").hide();
			$("#all_div").css("top","0px");
			var data = this.rvData;
			var html ="";
			var div = '<div class="more_show_div actice" id="rvInfo">河流网络</div><div class="more_show_div" id="adInfo">行政区域</div><div class="more_show_div" id="ztInfo">专题管理</div></div>';
			if(data.length > 0){
				for(var i = 0 ;i < data.length;i++){
					html+='<span class="more_span">'+data[i].rvNm+'</span>';
				}
			}else{
				html += "<li>当前暂无河流信息</li>";
			}
			this.inintLeftMore(html,div);
			$("#more_div").css("margin-left","6px");
			$(".more_span").css({"width":"30%","margin-left":"6px","line-height":"3em","display": "inline-block"});
			$(".more_show_div").css("margin-left","0px");
			$(".more_slgz_div").css("margin-left","0px");
			$(".well_li").css({"cursor":"initial","padding":" 10px 0px"});
		}
	},
	//获取河段水质情况,参数河段编码
	getWaterQuality:function(stcd){
		var listData = this.data;
		if(listData.length > 0){
			for(var i = 0 ;i < listData.length;i++){
				if(listData[i].stcd == stcd){
					var html = "<span class='colorGreen'>河道编码："+stcd+"</span><br>";
					html += "<span class='colorGreen'>河流名称："+listData[i].rvnm+"</span><br>";
					html += "<span class='colorGreen'>河段名称："+listData[i].stnm+"</span><br>";
					html += "<span class='colorGreen'>所属区县："+listData[i].addvcdNm+"</span><br>";
					html += "<span class='colorGreen'>河道等级："+listData[i].grade+"</span><br>";
					html += "<span class='colorGreen'>河道长度："+listData[i].lengthRv+" km</span><br>";
					html += "<span class='colorGreen'>起点经度："+listData[i].startLgtd+"</span><br>";
					html += "<span class='colorGreen'>起点纬度："+listData[i].startLttd+"</span><br>";
					html += "<span class='colorGreen'>终点经度："+listData[i].endLgtd+"</span><br>";
					html += "<span class='colorGreen'>终点纬度："+listData[i].endLttd+"</span><br>";
					var htmlRv = "<span class='colorGreen'>县级河长："+listData[i].countyRvNm+"</span><br>";
					htmlRv += "<span class='colorGreen'>县级河长电话："+listData[i].countryPhone+"</span><br>";
					htmlRv += "<span class='colorGreen'>镇级河长："+listData[i].countryRvNm+"</span><br>";
					htmlRv += "<span class='colorGreen'>镇级河长电话："+listData[i].countryPhone+"</span><br>";
					htmlRv += "<span class='colorGreen'>村级河长："+listData[i].villageRvNm+"</span><br>";
					htmlRv += "<span class='colorGreen'>村级河长电话："+listData[i].villagePhone+"</span><br>";
					htmlRv += "<span class='colorGreen'>管理单位："+listData[i].managerUnit+"</span><br>";
					htmlRv += "<span class='colorGreen'>管理单位负责人："+listData[i].managerUser+"</span><br>";
//					htmlRv += "<span class='colorGreen'>管理单位电话："+listData[i].managerPhone+"</span><br>";
					htmlRv += "<span class='colorGreen'>管理单位电话："+listData[i].managerFphone+"</span><br>";
					$("#river_info_div").html(html);
					$("#river_rvth_div").html(htmlRv);
					//调用地图上定位
					this.lgtd = listData[i].lgtd;
					this.lttd = listData[i].lttd;
					mapViewGis.mapLocation(listData[i].lgtd,listData[i].lttd);
					break;
				}
			}
		}
		var reulst = commonUtils.get(WEB_ROOT+"/data/monitor/getRvierQuality",{stcd:stcd},false);
		if(reulst.flag){
			$("#rv_do_span").html(0.000);
			$("#rv_cod_span").html(0.000);
			$("#rv_nh_span").html(0.000);
			$("#rv_tp_span").html(0.000);
			this.quaData = reulst.data;
			if(this.quaData.length > 0){
				var obj = this.quaData[0];
				$("#rv_do_span").html(obj.dos);
				$("#rv_cod_span").html(obj.cod);
				$("#rv_nh_span").html(obj.nh);
				$("#rv_tp_span").html(obj.tp);
			}
			$("#dos").addClass('active').siblings().removeClass("active");
			mapViewEchart.initChartWater(this.quaData,'dos');
		}
	},
	isFvaInfo:function(stcd,fav){
		commonUtils.get(WEB_ROOT+"/data/monitor/isFvaInfo",{stcd:stcd,fav:fav},false);
	},
	dynamicEvent:function(obj){
		var ifao = $(obj).hasClass("fa-heart-o");
		var ifa = $(obj).hasClass('fa-heart');
		var stcd = $(obj).attr("val");
		if(ifao){
			$(obj).addClass('fa-heart') .removeClass('fa-heart-o');
			mapViewInfo.isFvaInfo(stcd,1);
			return;
		}
		if(ifa){
			$(obj).addClass('fa-heart-o') .removeClass('fa-heart');
			mapViewInfo.isFvaInfo(stcd,0);
			return;
		}
	},
	//水质标准
	showDialog:function(){
		var reulst = commonUtils.get(WEB_ROOT+"/data/monitor/getWaterQuaDesc",null,false);
		if(reulst.flag){
			var datas = reulst.data;
			if(datas.length > 0 ){
				var html = "<caption style='text-align: center;color:#FFFFFF;background-color: #63B8FF;'>水质指标项目标准限值</caption><thead style='color:#FFFFFF;background-color: #63B8FF;'><tr><td>标准值(MG/L)</td><td>Ⅰ类</td>" +
						"<td>Ⅱ类</td><td>Ⅲ类</td><td>Ⅳ类</td><td>Ⅴ类</td><td>劣Ⅴ类</td></tr></thead>";
				$(datas).each(function(index,domEle){
					if(index % 2 != 0){
						html += "<tr style='background-color: #D9D9D9;'><td>"+this.quaNm+"</td><td>"+this.oneVal+"</td><td>"+this.twoVal+"</td><td>"+this.threeVal+"</td>";
						html +="<td>"+this.fourVal+"</td><td>"+this.fiveVal+"</td><td>"+this.sixVal+"</td></tr>"
					}else{
						html += "<tr><td>"+this.quaNm+"</td><td>"+this.oneVal+"</td><td>"+this.twoVal+"</td><td>"+this.threeVal+"</td>";
						html +="<td>"+this.fourVal+"</td><td>"+this.fiveVal+"</td><td>"+this.sixVal+"</td></tr>"
					}
				});
				$("#qua_des_tab").html(html);
			}
		}
	}
}