var site={
		selectedSttp: null,
		loadSiteData:function(data){
		if(paramStcd != "null"){
			var param = {'stcd':paramStcd}
			data = {data:param};
		}
		easyui_datagrid_util.fit=false;
		easyui_datagrid_util.singleSelect=true;
		easyui_datagrid_util.pageSize=20;
		easyui_datagrid_util.create_datagrid_options("patrol_catalogSite", WEB_ROOT+ "/basicSite/work/getBasicSiteList",site,data);
	},
	Query:function(){
		var stcd = $("#stcdkey").val();
		var data = {'stcd':stcd,'sttp':site.selectedSttp};
		$('#patrol_catalogSite').datagrid('load',data); 
	},
	QuerySttp:function(sttp){
		var stcd = $('#stcdkey').val();
		var data = {'stcd':stcd};
		if(sttp !='' && sttp != null && sttp != undefined){
			data.sttp = sttp
			site.selectedSttp = sttp;
		}
		var opt={data:data}; 
		$('#patrol_catalogSite').datagrid('load',data); 
	},
	formatSiteRepeat:function(value, row, index){
		var stcd=row.stcd;
        var colorUpdate="#008B00";
        var strUpdate="修改";
        var id2="UpdateId";
        var colorDelete="#9B30FF";
        var strDelete="删除";
        var id3="DeleteId";
        var colorDetail = "#FD5F3B";
		var strDetail = "详情";
		var id1="DetailId";
		var html="<a style='color:"+colorDetail+";' class='colorDetail'  id="+id1+" onclick='site.detailSite(\""+stcd+"\");'>"+strDetail+"</a>";
        //html+="|<a class='colorUpdate'  style='color:"+colorUpdate+";'  id="+id2+" onclick='site.editSite("+index+")'>"+strUpdate+"</a>";
		//html+="|<a  class='colorDelete'  style='color:"+colorDelete+";'   id="+id3+" onclick='site.deleteSite(\""+stcd+"\");'>"+strDelete+"</a>";
		return html;
	},
	formatValue:function(value){
		if(value==null||value==""){
			return "暂无";
		}else{
			return  value;
		}
	},
	detailSite:function(stcd){
		$("#SiteDetail").modal();
		 var resultData=commonUtils.get(WEB_ROOT+"/basicSite/work/getSiteById",{stcd:stcd},null);
		 if(resultData.flag){
			 var site=resultData.data;
			 $("#stcd_detail").html(this.formatValue(site.stcd));
			 $("#stnm_detail").html(this.formatValue(site.stnm));
			 $("#rvnm_detail").html(this.formatValue(site.rvnm));
			 $("#hnnm_detail").html(this.formatValue(site.hnnm));
			 $("#bsnm_detail").html(this.formatValue(site.bsnm));
			 $("#lgtd_detail").html(this.formatValue(site.lgtd));
			 $("#lttd_detail").html(this.formatValue(site.lttd));
			 $("#stlc_detail").html(this.formatValue(site.stlc));
			 $("#sttp_detail").html(this.formatValue(site.sttpNm));
			 $("#addvcd_detail").html(this.formatValue(site.addvcd));
			 $("#dtmnm_detail").html(this.formatValue(site.dtmnm));
			 $("#dtmel_detail").html(this.formatValue(site.dtmel));
			 $("#mdpr_detail").html(this.formatValue(site.mdpr));
			 $("#frgrd_detail").html(this.formatValue(site.frgrd));
			 $("#edfrym_detail").html(this.formatValue(site.edfrym));
			 $("#bgfrym_detail").html(this.formatValue(site.bgfrym));
			 $("#atcunit_detail").html(this.formatValue(site.atcunit));
			 $("#admauth_detail").html(this.formatValue(site.admauth));
			 $("#locality_detail").html(this.formatValue(site.locality));
			 $("#stbk_detail").html(this.formatValue(site.stbk));
			 $("#stazt_detail").html(this.formatValue(site.stazt));
			 $("#dstrvm_detail").html(this.formatValue(site.dstrvm));
			 $("#drna_detail").html(this.formatValue(site.drna));
			 $("#phcd_detail").html(this.formatValue(site.phcd));
			 $("#usfl_detail").html(this.formatValue(site.usfl));
			 $("#comments_detail").html(this.formatValue(site.comments));
		 }
	},
	updatSite:function(){
		var reg = /^\s*$/g;
		var stnm=$("#stnm").val();
		var hnnm=$("#hnnm").val();
		var rvnm=$("#rvnm").val();
		var lgtd=$("#lgtd").val();
		var lttd=$("#lttd").val();
		var stlc=$("#stlc").val();
		var addvcd=$("#addvcd").val();
		var sttp=$('#sttp option:selected').val();
		if(stnm=="" || reg.test(stnm)){
			layer.msg('带 * 为必填项，请填写完整后保存!', {icon: 5});
			return false;
		}
		
		if(hnnm == "" || reg.test(hnnm)){
			layer.msg('带 * 为必填项，请填写完整后保存!', {icon: 5});
			return false;
		}
		
		if(rvnm== ""||reg.test(rvnm)){
			layer.msg('带 * 为必填项，请填写完整后保存!', {icon: 5});
			return false;
		}
		
		if(lgtd == ""||reg.test(lgtd)){
			layer.msg('带 * 为必填项，请填写完整后保存!', {icon: 5});
			return false;
		}
		
		if(lttd==""||reg.test(lttd)){
			layer.msg('带 * 为必填项，请填写完整后保存!', {icon: 5});
			return false;
		}
		
		if(stlc==""||reg.test(stlc)){
			layer.msg('带 * 为必填项，请填写完整后保存!', {icon: 5});
			return false;
		}
		
		if(sttp==""||reg.test(sttp)){
			layer.msg('带 * 为必填项，请填写完整后保存!', {icon: 5});
			return false;
		}
		
		if(addvcd==""||reg.test(addvcd)){
			layer.msg('带 * 为必填项，请填写完整后保存！', {icon: 5});
			return false;
		}
		var data = $('#form_data_st').serializeArray();
		data.push({name:'follow',value:1});
		var result=commonUtils.post(WEB_ROOT+"/basicSite/work/saveOrUpBasicSite",data,null);
		if(result.flag){
			$('#stModel').modal('hide');
        	$('#patrol_catalogSite').datagrid('load'); 
			layer.msg('修改成功！', {icon: 1});
		}
	
	},
/*	editSite:function(index){
		$("#sttp").find("option").attr("selected",false);
		var row = $('#patrol_catalogSite').datagrid('getRows');
		var data = row[index]; 
		$("#stModel").modal();
		if(data != null){	
			$("#stcd").val(data.stcd);
			$("#stcd-t").val(data.stcd);
			$("#stnm").val(data.stnm);
			$("#hnnm").val(data.hnnm);
			$("#rvnm").val(data.rvnm);
			$("#lgtd").val(data.lgtd);
			$("#lttd").val(data.lttd);
			$("#stlc").val(data.stlc);
			$("#sttp").find("option[value = '"+data.sttp+"']").attr("selected",true);
			$("#addvcd").val(data.addvcd);
		}
	},*/
/*	deleteSite:function(stcd){
		layer.alert('你确定要删除吗？', {
		    skin: 'layui-layer-molv' 
		    ,closeBtn: 1    
		     ,btn: ['确定','取消']
		     ,icon: 5   // icon
		     ,yes:function(){
	        	 var resultData=commonUtils.post(WEB_ROOT+"/basicSite/work/deleteBasicSite",{stcd:stcd},false,"删除");
	        	 if(resultData.data>0){	
					 layer.msg('删除成功！', {icon: 1});
					 $('#patrol_catalogSite').datagrid('load');  					 
				 }else{
					 layer.msg('删除失败！', {icon: 5});
					 layer.close();
				 }      		    	 
		       }
			    ,btn2:function(){
			   	     layer.close();
			    }
	   });
	}*/
	
}
$(function(){
	var p = $(window).height();	
	var contextH =$("#headerSitediv").height();
	$("#patrol_catalogSite").height(p-contextH);
	$('#siteDiv').on('click','.btnSite',function(){
        $(this).addClass("current").siblings().removeClass("current");
    });
	site.loadSiteData();
	$("#saveSite").click(function(){
		location.href=WEB_ROOT+"/basicSite/addSite.jsp";
	});
	$("#queryBasic").click(function(){
		site.Query();
	});
	$("#updateSt").click(function(){
		site.updatSite();
	});
	$('#stcdkey').bind('keypress',function(event){
        if(event.keyCode == "13") {
        	site.Query();
        }
    });
	$("#refreshBasic").click(function(){
		site.loadSiteData();
	});
	
});
