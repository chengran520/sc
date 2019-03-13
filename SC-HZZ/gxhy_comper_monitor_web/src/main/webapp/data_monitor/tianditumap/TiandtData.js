var TiandtData = {
	rvData:null,
	data:null,
	adData:null,
	quaData:null,
	showDataDiv:function(tp){
		var data = this.data;
		var html = "<ul class='well' id='well_div' style='overflow: auto;height: 94%;margin: 5px auto;'>";
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
			}else{
				html += "<li>当前暂无站点信息</li>";
			}
		}
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
				this.showDataDiv(isTp);
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
				this.showDataDiv(isTp);
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
			}
			this.inintLeftMore(html,div);
			$("#more_div").css("margin-left","6px");
			$(".more_span").css({"width":"30%","margin-left":"6px","left":"14px","line-height":"3em","display": "inline-block","color":"#3CB371"});
			$(".more_show_div").css("margin-left","0px");
			$(".more_slgz_div").css("margin-left","0px");
			$(".well_li").css({"cursor":"initial","padding":" 10px 0px"});
		}
	},
	inintLeftMore:function(opt,div){
		var html = "<ul class='well' id='well_div' style='height: 100%;'>";
		html+='<li class="well_li" ><div  id="more_div" class="moreDiv_well">';
		html+=div;
		html+='<div>';
		html+=opt;
		html+='</div></li>';
		html+='<li class="well_li" id="more_well_li"><div class="more_slgz_div">管理范围水利工程</div><div><div class="more_glshow headr" style=""><img  style="position: inherit;" class="more_img" src="'+WEB_ROOT+'/common/images/river/sk.png"><p class="more_p1">121座</p><p style="padding: 17px 0 0 14px;">大型水库</p></div>';
		html+='<div class="more_glshow headr glscor1" style=""><img class="more_img" style="position: inherit;" src="'+WEB_ROOT+'/common/images/river/sk.png"><p class="more_p1">198座</p><p style="padding: 17px 0 0 14px;">小型水库</p></div>'
		html+='<div class="more_glshow headr glscor2" style=""><img class="more_img" style="position: inherit;" src="'+WEB_ROOT+'/common/images/river/hddm.png"><p class="more_p1">59段</p><p style="padding: 17px 0 0 14px;">河道断面</p></div>'
		html+='<div class="more_glshow glscor1 " style=""><img class="more_img"  style="position: inherit;" src="'+WEB_ROOT+'/common/images/river/hdxx.png"><p class="more_p1" >78条</p><p style="padding: 17px 0 0 25px;">河&nbsp;&nbsp;段</p></div>'
		html+='<div class="more_glshow glscor2" style=""><img class="more_img"  style="position: inherit;" src="'+WEB_ROOT+'/common/images/river/hl.png"><p class="more_p1">12条</p><p style="padding: 17px 0 0 25px;">河&nbsp;&nbsp;流</p></div>'
		html+='<div class="more_glshow glscor3" style=""><img class="more_img" style="position: inherit;" src="'+WEB_ROOT+'/common/images/river/pwk.png"><p class="more_p1">68个</p><p style="padding: 17px 0 0 22px;">排污口</p></div>'
		html+='<div class="more_glshow glscor1" style=""><img class="more_img"  style="position: inherit;"src="'+WEB_ROOT+'/common/images/river/gsgc.png"><p class="more_p1">355座</p><p style="padding: 17px 0 0 14px;">供水工程</p></div>'
		html+='<div class="more_glshow glscor3" style=""><img class="more_img"  style="position: inherit;"src="'+WEB_ROOT+'/common/images/river/gq.png"><p class="more_p1">223座</p><p style="padding: 17px 0 0 14px;">灌区工程</p></div>'
		html+='<div class="more_glshow" style=""><img class="more_img" style="position: inherit;" src="'+WEB_ROOT+'/common/images/river/syd.png"><p class="more_p1">26座</p><p style="padding: 17px 0 0 22px;">水源地</p></div>'
		html+='<div class="more_glshow glscor3" style=""><img class="more_img" style="position: inherit;" src="'+WEB_ROOT+'/common/images/river/sk.png"><p class="more_p1">108座</p><p style="padding: 17px 0 0 25px;">泵&nbsp;&nbsp;站</p></div>'
		html+='<div class="more_glshow" style=""><img class="more_img" style="position: inherit;" src="'+WEB_ROOT+'/common/images/river/qsk.png"><p class="more_p1">38个</p><p style="padding: 17px 0 0 14px;">取水口</p></div>'
		html+='<div class="more_glshow glscor2" style=""><img class="more_img"  style="position: inherit;"src="'+WEB_ROOT+'/common/images/river/ntqs.png"><p class="more_p1">12个</p><p style="padding: 17px 0 0 14px;">农田供水</p></div></div></li>'
		html += "</ul>";
		$("#stationList_defaultView").html(html);
	}
}