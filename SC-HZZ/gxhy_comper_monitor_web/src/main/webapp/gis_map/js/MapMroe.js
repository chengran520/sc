var mapMroe={
		addRiverOpen:function(){
			var count = "<div class='row'>";
			count += "<div class='col-md-offset col-md-20'>";
			count += "<div class='tab' role='tabpanel'>";
			count += "<ul class='nav nav-tabs' role='tablist' id='tablist'>";
			count += "<li class='active'  onclick='TiandtMap.clickWindow(this,0)' ><a href='javascript:void(0)' data-toggle='tab'><i class='fa fa-address-card'></i>河流信息</a></li>";
			count += "<li onclick='TiandtMap.clickWindow(this,1)' ><a href='javascript:void(0)' data-toggle='tab'><i class='fa icon-user'></i>河长信息</a></li>";
			count += "<li onclick='TiandtMap.clickWindow(this,4)' ><a href='javascript:void(0)' data-toggle='tab'><i class='fa fa-flag'></i>公示牌信息</a></li>";
			count += "<li onclick='TiandtMap.clickWindow(this,3)' ><a href='javascript:void(0)' data-toggle='tab'><i class='fa icon-picture'></i>一河一景</a></li>";
			count += "</ul>";
			count += "<div class='tab-content'>";
			
			count += "<div role='tabpanel' class='tab-pane fade in active' id='Section0'>";
			count += "<ul>";
			count += "<li><label>河流编码：</label>";
			count += "<label class='r-color'></label><label>"+mapMroe.formatValue(TiandtMap.rvData.rvCd)+"</label></li>";
			count += "<li><label>河流名称：</label>";
			count += "<label class='r-color'></label><label class='g-color'>"+mapMroe.formatValue(TiandtMap.rvData.rvNm)+" </label></li>";
			count += "<li><label>行政编码：</label>";
			count += "<label class='r-color'></label><label class='g-color'>"+mapMroe.formatValue(TiandtMap.rvData.addvcd)+"</label></li>";
			count += "<li><label>行政名称：</label>";
			count += "<label class='r-color'></label><label class='g-color'>"+mapMroe.formatValue(TiandtMap.rvData.addvnm)+"</label></li>";
			count += "<li><label>所属流域：</label>";
			count += "<label class='r-color'></label><label>"+mapMroe.formatValue(TiandtMap.rvData.bsnm)+"</label></li>";
			count += "<li><label>所属水系：</label>";
			count += "<label class='r-color'></label><label>"+mapMroe.formatValue(TiandtMap.rvData.hnnm)+"</label></li>";
			count += "<li><label>河流岸别：</label>";
			count += "<label class='r-color'></label><label>"+mapMroe.formatValue(TiandtMap.rvData.stbk)+"</label></li>";
			count += "<li><label>河流长度(km)：</label>";
			count += "<label class='r-color'></label><label >"+mapMroe.formatValue(TiandtMap.rvData.rvlt)+"</label></li>";
			count += "<li><label>流域面积(km2)：</label>";
			count += "<label class='r-color'></label><label >"+mapMroe.formatValue(TiandtMap.rvData.draArea)+"</label></li>";
			count += "</ul>";
			count += "<ul>";
			count += "<li><label>上一级河流编码：</label>";
			count += "<label class='r-color'></label><label>"+mapMroe.formatValue(TiandtMap.rvData.prvCd)+"</label></li>";
			count += "<li><label>上一级河流名称：</label>";
			count += "<label class='r-color'></label><label>"+mapMroe.formatValue(TiandtMap.rvData.prvNm)+"</label></li>";
			count += "<li><label>河源：</label>";
			count += "<label class='r-color'></label><label>"+mapMroe.formatValue(TiandtMap.rvData.rvOn)+"</label></li>";
			count += "<li><label>河源经度：</label>";
			count += "<label class='r-color'></label><label>"+mapMroe.formatValue(TiandtMap.rvData.rvOnLgtd)+"</label></li>";
			count += "<li><label>河源纬度：</label>";
			count += "<label class='r-color'></label><label>"+mapMroe.formatValue(TiandtMap.rvData.rvOnLttd)+"</label></li>";
			count += "<li><label>河口：</label>";
			count += "<label class='r-color'></label><label >"+mapMroe.formatValue(TiandtMap.rvData.rvMh)+"</label></li>";
			count += "<li><label>河口经度：</label>";
			count += "<label class='r-color'></label><label >"+mapMroe.formatValue(TiandtMap.rvData.rvMhLgtd)+"</label></li>";
			count += "<li><label>河口纬度：</label>";
			count += "<label class='r-color'></label><label >"+mapMroe.formatValue(TiandtMap.rvData.rvMhLttd)+"</label></li>";
			count += "</ul>";
			count += "</div>";
			
			count += "<div role='tabpanel' class='tab-pane fade' id='Section1' style='height: 396px;overflow: auto;'>";
			if(TiandtMap.rvUserData != null ){
				if(TiandtMap.rvUserData.length>0){
					var rvUdata = TiandtMap.rvUserData;
					for(var i = 0 ;i < rvUdata.length ;i++){
						count += "<div id='container'>";
						count += "<div id='leftContent'><img src='"+WEB_ROOT+"/common/images/river/"+(rvUdata[i].sex == 1 ? "sex0.png":"sex1.png")+"'></div>";
						count += "<div id='rightContent'>";
						count += "<p class='hzz_p' style='margin: 0 16px 8px;'><a href='javascript:void(0)'>职位："+mapMroe.formatValue(rvUdata[i].userJobNm)+"</a></p>";
						count += "<p class='hzz_p' style='margin: 0 16px 8px;'>姓名："+mapMroe.formatValue(rvUdata[i].userNm)+"</p>";
						count += "<p class='hzz_p' style='margin: 0 16px 8px;'>所属部门："+mapMroe.formatValue(rvUdata[i].deptNm)+"</p><p class='hzz_p' style='margin: 0 16px 8px;'>联系电话："+mapMroe.formatValue(rvUdata[i].userPhone)+"</p>";
						count += "</div>";
						count += "</div>";
					}					
				}else{
			        count += "<ul><li style='border-bottom: 0px;'><label>暂无数据！</label></li></ul>";	
				}
				
			}
			count += "</div>";
			
			count += "<div role='tabpanel' class='tab-pane fade' id='Section3'>";
			count += "<section class='demos'>";
			count += "<img src='"+WEB_ROOT+"/common/images/bussine/101.png'  class='tab-pane-img'>";
			count += "<img src='"+WEB_ROOT+"/common/images/bussine/101.png'  class='tab-pane-img'>";
			count += "<img src='"+WEB_ROOT+"/common/images/bussine/101.png'  class='tab-pane-img'>";
			count += "<img src='"+WEB_ROOT+"/common/images/bussine/101.png'  class='tab-pane-img'>";
			count += "<img src='"+WEB_ROOT+"/common/images/bussine/101.png'  class='tab-pane-img'>";
			count += "<img src='"+WEB_ROOT+"/common/images/bussine/101.png'  class='tab-pane-img'>";
			count += "</section>";
			count += "</div>";		
			count += "<div role='tabpanel' class='tab-pane fade' id='Section4'>";
			count += "<div id='gspcontainer'>";
			count += " <div id='gspContent'><img src='"+WEB_ROOT+"/common/images/bussine/101.png'></div>";
			count += " <div id='gsprContent'>";
			count += "<div class='gxphzz_p'><a href='javascript:void(0)'>河道名称："+mapMroe.formatValue(TiandtMap.rvData.rvNm)+"</a></div>";
			count += "<div class='gxphzz_p'>河道起点："+mapMroe.formatValue(TiandtMap.rvData.rvOn)+"</div>";
			count += "<div class='gxphzz_p'>河道终点："+mapMroe.formatValue(TiandtMap.rvData.rvMh)+"</div><div class='gxphzz_p'>河道长度："+(TiandtMap.rvData.rvlt == null ? "暂无":(TiandtMap.rvData.rvlt)+"km")+"</div>";
			count += "<div class='gxphzz_p'>县级总河长：鲍峰庭</div>";
			count += "<div class='gxphzz_p'>县级副河长：尹忠</div>";
			count += "<div class='gxphzz_p'>县级河长：李正鹏(13970735698)</div>";
			count += "<div class='gxphzz_p'>乡(镇)河长：暂无数据</div>";
			count += "<div class='gxphzz_p'>村河长：暂无数据</div>";
			count += "<div class='gxphzz_p'>保洁员：暂无数据</div>";
			count += "<div class='gxphzz_p'>巡查员：暂无数据</div>";
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
		appendOpenInfo:function(datas,stnm,sttp){
			var content = "";
			if(datas!=null){
				if(sttp == 'PP'){
					content = "<div><div class='div_head'><div class='div_title'>"+stnm+"</div></div>" +
					"<div class='div_info'><div class='div_info_z'>"+datas.stlc+"(雨量站)</div><div style='float: left;'>"+formatter_date_utils.formatterStrTime(datas.tm,0,0)+"</div></div>" +
					"<div class='ribbon-wrapper'><div class='ribbon ribbon-success'>正常</div> </div>" +
					"<div style='background-image:url("+WEB_ROOT+"/common/images/gis/bg_title_note.png);height: 19px !important;'></div><div class='div_div_info'><div ><div class='div_info_common'  style='margin: 7px 10px;'>雨量</div><div class='div_info_common_val'>"+datas.drp+"(mm)</div></div>" +
					"<div><div class='div_info_common ll'></div></div>";
				}else if(sttp == 'ZZ' || sttp == 'ZQ'){
					var z;
					if(datas.z!=null){
						z=parseFloat(datas.z).toFixed(2);
					}				
					content = "<div ><div class='div_head'><div class='div_title'>"+stnm+"</div></div>" +
					"<div class='div_info'><div class='div_info_z'>"+datas.stlc+"(水位站)</div><div style='float: left;'>"+formatter_date_utils.formatterStrTime(datas.tm,0,0)+"</div></div>" +
					"<div class='ribbon-wrapper'><div class='ribbon ribbon-success'>正常</div> </div>" +
					"<div style='background-image:url("+WEB_ROOT+"/common/images/gis/bg_title_note.png);height: 19px !important;'></div><div class='div_div_info'><div ><div class='div_info_common'  style='margin: 7px 10px;'>水位</div><div class='div_info_common_val'>"+(z== null ? "暂无":z+"(m)")+"</div></div>" +
					"<div><div class='div_info_common ll'>流量</div><div class='div_info_val'>"+ (datas.q  == null ? "暂无":datas.q+"m³/s")+"</div></div>";
				}else if(sttp == 'SZ'){
					var turb=parseFloat(datas.turb).toFixed(2);
					var cond=parseFloat(datas.cond).toFixed(2);
					var dox=parseFloat(datas.dox).toFixed(2);
					content = "<div ><div class='div_head'><div class='div_title'>"+stnm+"</div></div>" +
					"<div class='div_info'><div class='div_info_z'>"+datas.stlc+"(水质站)</div><div style='float: left;'>"+formatter_date_utils.formatterStrTime(datas.spt,0,0)+"</div></div>" +
					"<div style='background-image:url("+WEB_ROOT+"/common/images/gis/bg_title_note.png);height: 19px !important;'></div><div class='div_div_info'><div ><div class='div_info_common'  style='margin: 7px 10px;'>温度(WT)</div><div class='div_info_common_val sz-1'>"+datas.wt+"(℃)</div></div>" +
					"<div><div class='div_info_common ll'>浊度(TURB)</div><div class='div_info_val sz-2'>"+mapMroe.formatValue(turb)+ "(度)</div></div>"+
					"<div><div class='div_info_common ss' >电导率(COND)</div><div class='div_info_common_val sz-3'>"+mapMroe.formatValue(cond)+"(µS/cm)</div></div>"+
					"<div><div class='div_info_common jjsw' >PH(PH)</div><div class='div_info_common_val sz-4'>"+mapMroe.formatValue(datas.ph)+"</div></div>"+
					"<div><div class='div_info_common bzsw' >溶解氧(DOX)</div><div class='div_info_common_val sz-5' >"+mapMroe.formatValue(dox)+"(mg/L)</div></div>";
				}else if(sttp == 'SP'){
					   content = "<div style='letter-spacing: 2px;color: #000;height: 35px;padding: 6px 8px 3px 17px;margin: 0 0 6px 0;font-size: 15px;'>"+stnm+"视频监控站</div></div>";
					   content+="<div id='playerContainer' style='height:680px;width:100%;padding:0px;margin:0px;'>";
					   content +="<iframe style='height:680px;width:100%;'   scrolling='no' id='"+datas.channerId+"' frameborder='NO'  border='0'  framespacing='0'  src='"+WEB_ROOT+"/gis_map/video/demo/demo.html'></iframe><div>";
				}else if(sttp=='RR'){
					content = "<div class='row'>"+
					"<div class='col-md-offset col-md-20'>"+
					"<div class='tab' role='tabpanel'>"+
					"<ul class='nav nav-tabs' role='tablist' id='tablist'>"+
					"<li class='active'  onclick='TiandtMap.clickWindow(this,0)' ><a href='javascript:void(0)' data-toggle='tab'><i class='fa fa-address-card'></i>水库信息</a></li>"+
					"<li onclick='TiandtMap.clickWindow(this,1)' ><a href='javascript:void(0)' data-toggle='tab'><i class='fa icon-user'></i>库长信息</a></li>"+
					"</ul>"+
					"<div class='tab-content'>"+			
					"<div role='tabpanel' class='tab-pane fade in active' id='Section0'>"+
					"<ul>"+
					"<li><label>河流编码：</label>"+
					"<label class='r-color'></label><label  class='g-color'>"+mapMroe.formatValue(datas[0].rsCd)+"</label></li>"+
					"<li><label>河流名称：</label>"+
					"<label class='r-color'></label><label class='g-color'>"+mapMroe.formatValue(datas[0].rsName)+"</label></li>"+
					"<li><label>站点位置：</label>"+
					"<label class='r-color'></label><label class='g-color'>"+mapMroe.formatValue(datas[0].stlc)+"</label></li>"+
					"<li><label>河流水系：</label>"+
					"<label class='r-color'></label><label class='r-color'>"+mapMroe.formatValue(datas[0].hnnm)+"</label></li>"+
					"<li><label>站点纬度：</label>"+
					"<label class='r-color'></label><label class='r-color'>"+mapMroe.formatValue(datas[0].lttd)+"</label></li>"+
					"<li><label>站点经度：</label>"+
					"<label class='r-color'></label><label class='r-color'>"+mapMroe.formatValue(datas[0].lgtd)+"</label></li>"+
					"<li><label>站点类型：</label>"+
					"<label class='r-color'></label><label class='r-color'>"+mapMroe.formatValue(datas[0].sttpNm)+"</label></li>"+
					"<li><label>工程类别：</label>"+
					"<label class='r-color'></label><label class='r-color'>"+mapMroe.formatValue(datas[0].engGrad)+"</label></li>"+
					"</ul>"+
					"<ul>"+
					"<li><label>总库容：</label>"+
					"<label class='r-color'></label><label>"+mapMroe.formatValue(datas[0].totCap)+"（万m³）</label></li>"+
					"<li><label>集雨面积：</label>"+
					"<label class='r-color'></label><label>"+mapMroe.formatValue(datas[0].drna)+"(km2)</label></li>"+
					"<li><label>水库功能：</label>"+
					"<label class='r-color'></label><label>"+mapMroe.formatValue(datas[0].signer)+"</label></li>"+
					"<li><label>建站年月：</label>"+
					"<label class='r-color'></label><label>"+(datas[0].esstym == null?"暂无":datas[0].esstym+"年")+"</label></li>"+
					"</ul>"+
					"</div>"+					
					"<div role='tabpanel' class='tab-pane fade' id='Section1' style='height: 396px+overflow: auto+'>"+
					"<ul>"+
					"<li><label>库长名称：</label>"+
					"<label class='r-color'></label><label  class='g-color'>"+mapMroe.formatValue(datas[0].userNm)+"</label></li>"+
					"<li><label>巡查员名称：</label>"+
					"<label class='r-color'></label><label class='g-color'>"+mapMroe.formatValue(datas[1].userNm)+"</label></li>"+
					"<li><label>保洁员名称：</label>"+
					"<label class='r-color'></label><label class='g-color'>"+mapMroe.formatValue(datas[2].userNm)+"</label></li>"+
					"</ul>"+
					"<ul>"+
					"<li><label>联系电话：</label>"+
					"<label class='r-color'></label><label  class='r-color'>"+mapMroe.formatValue(datas[0].userPhone)+"</label></li>"+
					"<li><label>联系电话：</label>"+
					"<label class='r-color'></label><label class='r-color'>"+mapMroe.formatValue(datas[1].userPhone)+"</label></li>"+
					"<li><label>联系电话：</label>"+
					"<label class='r-color'></label><label class='r-color'>"+mapMroe.formatValue(datas[2].userPhone)+"</label></li>"+
					"</ul>"+
					"</div>"+		
					"</div>"+
					"</div>"+
					"</div>"+
					"</div>"+
					"</div>";
				}else if(sttp=='ST'){
					content = "<div class='row'>"+
					"<div class='col-md-offset col-md-20'>"+
					"<div class='tab' role='tabpanel'>"+
					"<ul class='nav nav-tabs' role='tablist' id='tablist'>"+
					"<li class='active'  onclick='TiandtMap.clickWindow(this,0)' ><a href='javascript:void(0)' data-toggle='tab'><i class='fa fa-address-card'></i>山塘信息</a></li>"+
					"<li onclick='TiandtMap.clickWindow(this,1)' ><a href='javascript:void(0)' data-toggle='tab'><i class='fa icon-user'></i>塘长信息</a></li>"+
					"</ul>"+
					"<div class='tab-content'>"+			
					"<div role='tabpanel' class='tab-pane fade in active' id='Section0'>"+
					"<ul>"+
					"<li><label>河流编码：</label>"+
					"<label class='r-color'></label><label  class='g-color'>"+mapMroe.formatValue(datas[0].damcd)+"</label></li>"+
					"<li><label>河流名称：</label>"+
					"<label class='r-color'></label><label class='g-color'>"+mapMroe.formatValue(datas[0].damname)+"</label></li>"+
					"<li><label>站点位置：</label>"+
					"<label class='r-color'></label><label class='g-color'>"+mapMroe.formatValue(datas[0].stlc)+"</label></li>"+
					"<li><label>河流水系：</label>"+
					"<label class='r-color'></label><label class='r-color'>"+mapMroe.formatValue(datas[0].hnnm)+"</label></li>"+
					"<li><label>站点纬度：</label>"+
					"<label class='r-color'></label><label class='r-color'>"+mapMroe.formatValue(datas[0].lttd)+"</label></li>"+
					"<li><label>站点经度：</label>"+
					"<label class='r-color'></label><label class='r-color'>"+mapMroe.formatValue(datas[0].lgtd)+"</label></li>"+
					"<li><label>站点类型：</label>"+
					"<label class='r-color'></label><label class='r-color'>"+mapMroe.formatValue(datas[0].sttpNm)+"</label></li>"+
					"</ul>"+
					"<ul>"+
					"<li><label>总库容：</label>"+
					"<label class='r-color'></label><label>"+mapMroe.formatValue(datas[0].xhst)+"（万m³）</label></li>"+
					"<li><label>集雨面积：</label>"+
					"<label class='r-color'></label><label>"+mapMroe.formatValue(datas[0].drna)+"(km2)</label></li>"+
					"<li><label>山塘功能：</label>"+
					"<label class='r-color'></label><label>"+mapMroe.formatValue(datas[0].signer)+"</label></li>"+
					"</ul>"+
					"</div>"+					
					"<div role='tabpanel' class='tab-pane fade' id='Section1' style='height: 396px+overflow: auto+'>"+
					"<ul>"+
					"<li><label>塘长名称：</label>"+
					"<label class='r-color'></label><label  class='g-color'>"+mapMroe.formatValue(datas[0].userNm)+"</label></li>"+
					"<li><label>巡查员名称：</label>"+
					"<label class='r-color'></label><label class='g-color'>"+mapMroe.formatValue(datas[1].userNm)+"</label></li>"+
					"<li><label>保洁员名称：</label>"+
					"<label class='r-color'></label><label class='g-color'>"+mapMroe.formatValue(datas[2].userNm)+"</label></li>"+
					"</ul>"+
					"<ul>"+
					"<li><label>联系电话：</label>"+
					"<label class='r-color'></label><label  class='r-color'>"+mapMroe.formatValue(datas[0].userPhone)+"</label></li>"+
					"<li><label>联系电话：</label>"+
					"<label class='r-color'></label><label class='r-color'>"+mapMroe.formatValue(datas[1].userPhone)+"</label></li>"+
					"<li><label>联系电话：</label>"+
					"<label class='r-color'></label><label class='r-color'>"+mapMroe.formatValue(datas[2].userPhone)+"</label></li>"+
					"</ul>"+
					"</div>"+		
					"</div>"+
					"</div>"+
					"</div>"+
					"</div>"+
					"</div>";
				}
				else{
				content = "<div ><div class='div_head'><div class='div_title'>"+stnm+"</div></div>"+
				"<div class='div_info'><div style='float: left;'>暂无相关实时监测信息</div></div>" +
				"<div class='ribbon-wrapper'><div class='ribbon ribbon-error'>暂无数据</div> </div>" +
				"<div style='background-image:url("+WEB_ROOT+"/common/images/gis/bg_title_note.png);height: 19px !important;'></div><div class='div_div_info'><div ><div class='div_info_common'  style='margin: 7px 10px;'>暂无相关信息</div></div>" +
				"<div><div class='div_info_common ll'></div></div>";
			}
			if(sttp!='RR'&&sttp!='ST'){
				content += "</div><div style='margin: 11px 106px;'><span class='div_span'  onclick='TiandtMap.localUrl(\""+datas.stcd+"\",\""+(datas.sttp == 'PP' ? '1':(datas.sttp=='SZ'?'3':'2'))+"\")'><i class='fa fa-history' class='div_span_i'></i>"+(sttp == 'SZ' ? '水质监测': (sttp == 'PP'? '历史雨量':'历史水位'))+"<span class='div_span_pd'>|</span ></span><span class='div_span' onclick='TiandtMap.localUrl(\""+datas.stcd+"\",\"0\")'><i class='fa fa-vcard-o' class='div_span_i'></i>测站信息</span></div>";
				//content += "</div><div style='margin: 11px 43px;'><span class='div_span'><i class='fa fa-warning' class='div_span_i'></i>"+(sttp == 'SZ' ? '水质说明':'预警信息')+"<span class='div_span_pd'>|</span ></span ><span class='div_span'  onclick='TiandtMap.localUrl(\""+datas.stcd+"\",\""+(datas.sttp == 'PP' ? '1':'2')+"\")'><i class='fa fa-history' class='div_span_i'></i>"+(sttp == 'SZ' ? '水质标准': (sttp == 'PP'? '历史雨量':'历史水位'))+"<span class='div_span_pd'>|</span ></span><span class='div_span' onclick='TiandtMap.localUrl(\""+datas.stcd+"\",\"0\")'><i class='fa fa-vcard-o' class='div_span_i'></i>测站信息</span></div>";	
			}
			content += "</div>";
			return content;
		  }
		},
		appendVideoOpenInfo:function(channerId,stnm){
		 var content = "<div style='letter-spacing: 2px;color: #000;height: 35px;padding: 6px 8px 3px 17px;margin: 0 0 6px 0;font-size: 15px;'>"+stnm+"视频监控站</div></div>";
		   content+="<div id='playerContainer' style='height:680px;width:100%;padding:0px;margin:0px;'>";
		   content +="<iframe style='height:680px;width:100%;'   scrolling='no' id='"+channerId+"' frameborder='NO'  border='0'  framespacing='0'  src='"+WEB_ROOT+"/gis_map/video/demo/demo.html'></iframe><div>";
		   return content;
		},
		showMoreInfo:function(obj){
			var p = $(window).height();	
			var w = $(window).width();
			var index = layer.open({
			  title :"一河一档",
			  type: 2,
			  skin: 'layui-layer-molv',
			  content: 'moreThematic.jsp?id='+obj,
			  area: [''+(w-200)+'px', ''+(p-100)+'px'],
			  scrollbar: false
			});
		},
		formatValue:function(value){
			if(value==null||value==""||value=="undefined"){
				return "暂无数据";
			}else{
				return value;
			}
		}
}