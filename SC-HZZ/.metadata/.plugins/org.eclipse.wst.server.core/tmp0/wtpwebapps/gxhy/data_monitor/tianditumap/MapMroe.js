var mapMroe={
		addRiverOpen:function(data,rvUserData){
			var count = "<div class='row'>";
			count += "<div class='col-md-offset col-md-20'>";
			count += "<div class='tab' role='tabpanel'>";
			count += "<ul class='nav nav-tabs' role='tablist' id='tablist'>";
			count += "<li class='active'  onclick='TiandtMap.clickWindow(this,0)' ><a href='javascript:void(0)' data-toggle='tab'><i class='fa icon-fire'></i>河流信息</a></li>";
			count += "<li onclick='TiandtMap.clickWindow(this,1)' ><a href='javascript:void(0)' data-toggle='tab'><i class='fa icon-user'></i>河长信息</a></li>";
			count += "<li onclick='TiandtMap.clickWindow(this,4)' ><a href='javascript:void(0)' data-toggle='tab'><i class='fa icon-twitter'></i>公示牌信息</a></li>";
			count += "<li onclick='TiandtMap.clickWindow(this,2)' ><a href='javascript:void(0)' data-toggle='tab'><i class='fa icon-desktop'></i>全景图</a></li>";
			count += "<li onclick='TiandtMap.clickWindow(this,3)' ><a href='javascript:void(0)' data-toggle='tab'><i class='fa icon-picture'></i>图片</a></li>";
			count += "</ul>";
			count += "<div class='tab-content'>";
			
			count += "<div role='tabpanel' class='tab-pane fade in active' id='Section0'>";
			count += "<ul>";
			count += "<li><label>河流编码：</label>";
			count += "<label class='r-color'></label><label>"+data.rvCd+"</label></li>";
			count += "<li><label>河流名称：</label>";
			count += "<label class='r-color'></label><label class='g-color'>"+data.rvNm+" </label></li>";
			count += "<li><label>行政编码：</label>";
			count += "<label class='r-color'></label><label class='g-color'>"+data.addvcd+"</label></li>";
			count += "<li><label>行政名称：</label>";
			count += "<label class='r-color'></label><label class='g-color'>"+data.addvnm+"</label></li>";
			count += "<li><label>所属流域：</label>";
			count += "<label class='r-color'></label><label>"+data.bsnm+"</label></li>";
			count += "<li><label>所属水系：</label>";
			count += "<label class='r-color'></label><label>"+data.hnnm+"</label></li>";
			count += "<li><label>河流岸别：</label>";
			count += "<label class='r-color'></label><label>"+data.stbk+"</label></li>";
			count += "<li><label>河流长度(km)：</label>";
			count += "<label class='r-color'></label><label >"+data.rvlt+"</label></li>";
			count += "<li><label>流域面积(km2)：</label>";
			count += "<label class='r-color'></label><label >"+data.draArea+"</label></li>";
			count += "</ul>";
			count += "<ul>";
			count += "<li><label>上一级河流编码：</label>";
			count += "<label class='r-color'></label><label>"+data.prvCd+"</label></li>";
			count += "<li><label>上一级河流名称：</label>";
			count += "<label class='r-color'></label><label>"+data.prvNm+"</label></li>";
			count += "<li><label>河源：</label>";
			count += "<label class='r-color'></label><label>"+data.rvOn+"</label></li>";
			count += "<li><label>河源经度：</label>";
			count += "<label class='r-color'></label><label>"+data.rvOnLgtd+"</label></li>";
			count += "<li><label>河源纬度：</label>";
			count += "<label class='r-color'></label><label>"+data.rvOnLttd+"</label></li>";
			count += "<li><label>河口：</label>";
			count += "<label class='r-color'></label><label >"+data.rvMh+"</label></li>";
			count += "<li><label>河口经度：</label>";
			count += "<label class='r-color'></label><label >"+data.rvMhLgtd+"</label></li>";
			count += "<li><label>河口纬度：</label>";
			count += "<label class='r-color'></label><label >"+data.rvMhLttd+"</label></li>";
			count += "</ul>";
			count += "</div>";
			
			count += "<div role='tabpanel' class='tab-pane fade' id='Section1'>";
			if(rvUserData != null ){
				if(rvUserData.length < 0){
					return;
				}
				for(var i = 0 ;i < rvUserData.length ;i++){
					count += "<div id='container'>";
					count += " <div id='leftContent'><img src='"+WEB_ROOT+"/common/images/river/"+(rvUserData[i].sex == 1 ? "sex0.png":"sex1.png")+"'></div>";
					count += " <div id='rightContent'>";
					count += "<p class='hzz_p' style='margin: 0 16px 8px;'><a href='javascript:void(0)'>职务："+rvUserData[i].userJobNm+"</a></p>";
					count += "<p class='hzz_p' style='margin: 0 16px 8px;'>姓名："+rvUserData[i].userNm+"</p>";
					count += "<p class='hzz_p' style='margin: 0 16px 8px;'>所属部门："+rvUserData[i].deptNm+"</p><p class='hzz_p' style='margin: 0 16px 8px;'>联系电话："+rvUserData[i].userPhone+"</p>";
					count += "</div>";
					count += "</div>";
				}
			}
			count += "</div>";
			
			count += "<div role='tabpanel' class='tab-pane fade' id='Section2'>";
			count += "</div>";
			
			count += "<div role='tabpanel' class='tab-pane fade' id='Section3'>";
			count += "<section class='demos'>";
//			count += "<div class='demo-image first' data-image='../img/ny1.jpg' data-title='Beautiful fields' data-caption='With lots of wheaty puffs. Love those puffs.'></div>";
//			count += "<div class='demo-image second' data-image='../img/ny2.jpg' data-title='Fantastic cliffs' data-caption='Longing for exploration. Explore me!'></div>";
//			count += "<div class='demo-image third'  data-image='../img/ny3.jpg' data-title='Chilling sheep' data-caption='To your breed, your fleece, your clan be true!'></div>";
//			count += "<div class='demo-image four' data-image='../img/ny4.jpg' data-title='Beautiful fields' data-caption='With lots of wheaty puffs. Love those puffs.'></div>";
//			count += "<div class='demo-image five' data-image='../img/ny5.jpg' data-title='Fantastic cliffs' data-caption='Longing for exploration. Explore me!'></div>";
//			count += "<div class='demo-image six'  data-image='../img/ny6.jpg' data-title='Chilling sheep' data-caption='To your breed, your fleece, your clan be true!'></div>";
			count += "</section>";
			count += "</div>";
			
			count += "<div role='tabpanel' class='tab-pane fade' id='Section4'>";
			count += "<div id='gspcontainer'>";
			count += " <div id='gspContent'><img src='"+WEB_ROOT+"/common/images/gis/ny3.jpg'></div>";
			count += " <div id='gsprContent'>";
			count += "<div class='gxphzz_p'><a href='javascript:void(0)'>河道名称："+data.rvNm+"</a></div>";
			count += "<div class='gxphzz_p'>河道起点："+data.rvOn+"</div>";
			count += "<div class='gxphzz_p'>河道终点："+data.rvMh+"</div><div class='gxphzz_p'>河道长度："+data.rvlt+" km</div>";
			count += "<div class='gxphzz_p'>县级第一总河长："+"杨兵"+"</div>";
			count += "<div class='gxphzz_p'>县级总河长："+"杨兵"+"</div>";
			count += "<div class='gxphzz_p'>县级副河长："+"杨兵"+"</div>";
			count += "<div class='gxphzz_p'>县级河长："+"杨兵"+"（"+"1371788281"+"）</div>";
			count += "<div class='gxphzz_p'>乡(镇)河长："+"杨兵"+"（"+"1371788281"+"）</div>";
			count += "<div class='gxphzz_p'>村河长："+"杨兵"+"（"+"1371788281"+"）</div>";
			count += "<div class='gxphzz_p'>河长职责：负责流经辖内河道全部清理治理工作</div>";
			count += "</div>";
			count += "</div>";
			count += "</div>";
			count += "</div>";
			count += "</div>";
			count += "</div>";
			count += "</div>";
			return count;
		},
		appendOpenInfo:function(datas){
			var sttp = datas.sttp;
			var content = "";
			if(sttp == 'PP'){
				content = "<div ><div class='div_head'><div class='div_title'>"+datas.stnm+"</div></div>" +
				"<div class='div_info'><div class='div_info_z'>"+datas.stlc+"(雨量站)</div><div style='float: left;'>"+formatter_date_utils.formatterStrTime(datas.tm,0,0)+"</div></div>" +
				"<div class='ribbon-wrapper'><div class='ribbon ribbon-success'>正常</div> </div>" +
				"<div style='background-image:url("+WEB_ROOT+"/common/images/gis/bg_title_note.png);height: 19px !important;'></div><div class='div_div_info'><div ><div class='div_info_common'  style='margin: 7px 10px;'>雨量</div><div class='div_info_common_val'>"+datas.drp+"(mm)</div></div>" +
				"<div><div class='div_info_common ll'></div></div>";
			}else if(sttp == 'ZZ' || sttp == 'ZQ' || sttp == 'RR'){
				content = "<div ><div class='div_head'><div class='div_title'>"+datas.stnm+"</div></div>" +
				"<div class='div_info'><div class='div_info_z'>"+datas.stlc+"(水位站)</div><div style='float: left;'>"+formatter_date_utils.formatterStrTime(datas.tm,0,0)+"</div></div>" +
				"<div class='ribbon-wrapper'><div class='ribbon ribbon-success'>正常</div> </div>" +
				"<div style='background-image:url("+WEB_ROOT+"/common/images/gis/bg_title_note.png);height: 19px !important;'></div><div class='div_div_info'><div ><div class='div_info_common'  style='margin: 7px 10px;'>水位</div><div class='div_info_common_val'>"+datas.z+"(m)</div></div>" +
				"<div><div class='div_info_common ll'>流量</div><div class='div_info_val'>"+datas.q+"m³/s</div></div>";
			}else if(sttp == 'SZ'){
				content = "<div ><div class='div_head'><div class='div_title'>"+datas.stnm+"</div></div>" +
				"<div class='div_info'><div class='div_info_z'>"+datas.stlc+"(水质站)</div><div style='float: left;'>"+formatter_date_utils.formatterStrTime(datas.tm,0,0)+"</div></div>" +
				"<div style='background-image:url("+WEB_ROOT+"/common/images/gis/bg_title_note.png);height: 19px !important;'></div><div class='div_div_info'><div ><div class='div_info_common'  style='margin: 7px 10px;'>温度(AT)</div><div class='div_info_common_val sz-1'>"+datas.z+"(m)</div></div>" +
				"<div><div class='div_info_common ll'>浊度(NTU)</div><div class='div_info_val sz-2'>"+datas.q+"m³/s</div></div>"+
				"<div><div class='div_info_common ss' >电导率(COND)</div><div class='div_info_common_val sz-3'>8(m)</div></div>"+
				"<div><div class='div_info_common jjsw' >氢离子(PH)</div><div class='div_info_common_val sz-4'>12(m)</div></div>"+
				"<div><div class='div_info_common bzsw' >溶解氧(DO)</div><div class='div_info_common_val sz-5' >8.8(m)</div></div>";
			}else{
				content = "<div ><div class='div_head'><div class='div_title'>"+datas.stnm+"</div></div>"+
				"<div class='div_info'><div style='float: left;'>暂无相关实时监测信息</div></div>" +
				"<div class='ribbon-wrapper'><div class='ribbon ribbon-error'>异常</div> </div>" +
				"<div style='background-image:url("+WEB_ROOT+"/common/images/gis/bg_title_note.png);height: 19px !important;'></div><div class='div_div_info'><div ><div class='div_info_common'  style='margin: 7px 10px;'>暂无相关信息</div></div>" +
				"<div><div class='div_info_common ll'></div></div>";
			}
			content += "</div><div style='margin: 11px 43px;'><span class='div_span'><i class='fa fa-warning' class='div_span_i'></i>"+(sttp == 'SZ' ? '水质说明':'预警信息')+"<span class='div_span_pd'>|</span ></span ><span class='div_span'  onclick='TiandtMap.localUrl(\""+datas.stcd+"\",\"1\")'><i class='fa fa-history' class='div_span_i'></i>"+(sttp == 'SZ' ? '历史水质':'历史水位')+"<span class='div_span_pd'>|</span ></span><span class='div_span' onclick='TiandtMap.localUrl(\""+datas.stcd+"\",\"0\")'><i class='fa fa-vcard-o' class='div_span_i'></i>测站信息</span></div>";
			content += "</div>";
			return content;
		},
		appendVideoOpenInfo:function(i){
			var url  = "";
			var w = 700;
			var h = 430;
			var n;
			var top = "-42px";
			if(i == 0){
				url = WEB_ROOT+"/common/video/vi01.webm";
				n = "1号";
			}else if (i == 1){
				url = WEB_ROOT+"/common/video/vi02.webm";
				n = "2号";
			}else{
				url = WEB_ROOT+"/common/video/vi03.webm";
				w = 700;
				h = 440;
				n = "3号";
				var top = "3px";
			}
	 　		var content =  "<div style='letter-spacing: 2px;color: #DBDBDB;height: 35px;padding: 6px 8px 3px 17px;margin: 0 0 6px 0;font-size: 15px;'>河湖视频监控站"+n+"</div>";
	 　			content += "<video style='margin-top: "+top+";' id='my-video' class='video-js' width='"+w+"' height='"+h+"' autoplay='autoplay' loop='loop'>";
	 　			content +=  "<source src='"+url+"' type='video/mp4'>";
	 　			content +=  "</video>";
		   return content;
		}
}