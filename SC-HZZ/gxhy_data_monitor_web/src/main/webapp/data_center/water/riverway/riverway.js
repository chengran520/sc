var wayTab={
	initData:function(){
		easyui_datagrid_util.fit=false;
		easyui_datagrid_util.singleSelect=true;
		easyui_datagrid_util.pageSize=20;
		easyui_datagrid_util.create_datagrid_options("wayTab", WEB_ROOT+ "/data/center/monitor/getAllLakes",wayTab,null);
	},
	Query:function(){
		var queryKey= $("#queryKey").val();
		var data = {'rvNm':queryKey};
		$('#wayTab').datagrid('load',data); 
	},
	formatterDataTm:function(value, row, index){
		return formatter_date_utils.formatterStrTime(value,0,6);
	},
	formatterYJYA:function(value, row, index){
		return ((value == null  || value == "")? "无":"<p style='color:#ff0000'>有</p>");
	},
	formatterCz:function(value, row, index){
		var html="<a class='colorUpdate'  style='color:#FF0000;'  onclick='wayTab.showRiverYa(\""+row.rvCd+"\",\""+row.rvNm+"\",\""+row.prewAddes+"\")'>预案</a>";
         html+="<a  class='colorDelete'  style='color:#008B00;'  onclick='wayTab.updateRiverway("+index+");'>修改</a>|";
	     html+="<a  class='colorDelete'  style='color:#9B30FF;'  onclick='wayTab.deleteRiverway(\""+row.rvCd+"\");'>删除</a>";
         return html;
	},
	showRiverYa:function(rvCd,rvNm,prewAddes){
		$("#fileRvCd").val(rvCd);
		$("#input-b3").fileinput('clear');
		if(prewAddes == "" || prewAddes == "null"){
			$("#fileModel").modal();
		}else{
			layer.confirm('当前河流已有预案！', {
			  skin: 'layui-layer-molv' 
			  ,closeBtn: 1    
			  ,btn: ['预览','关闭'] //按钮
			}, function(index){
				layer.close(index);
				var p = $(window).height();	
				var w = $(window).width();	
				var index = layer.open({
				  title :rvNm+' 应急预案',
				  type: 2,
				  content: 'preview.jsp?prewAddes='+prewAddes,
				  area: [''+w+'px', ''+p+'px'],
				  maxmin: true
				});
			},function(){
				layer.close();
			});
		}
	},
	deleteRiverway:function(rvCd){
    	layer.alert('你确定要删除吗？', {
		    skin: 'layui-layer-molv' 
		    ,closeBtn: 1    
		     ,btn: ['确定','取消']
		     ,icon: 5   // icon
		     ,yes:function(index){
	        	 commonUtils.post(WEB_ROOT+"/data/center/monitor/deleteRiverLake",{"rvCd":rvCd},false,"删除");
	        	 layer.msg('删除成功！', {icon: 1});
	        	 $('#wayTab').datagrid('load'); 
	        	 layer.close(index);
		     },btn2:function(){
			   	 layer.close();
		     }
	     }); 
	},
	updateRiverway:function(index){
		var row = $('#wayTab').datagrid('getRows');
		var data = row[index]; 
		$("#rvCd").attr("disabled",true);
		$("#updateRiverWay").show();
		$("#saveRiverWay").hide();
		$("#riverwayModel").modal();
		if(data != null){			
			$("#rvCd").val(data.rvCd);
			$("#rvNm").val(data.rvNm);
			$("#hnnm").val(data.hnnm);
			$("#bsnm").val(data.bsnm);
			$("#stbk").val(data.stbk);
			$("#rvlt").val(data.rvlt);
			$("#draArea").val(data.draArea);
			$("#prvCd").val(data.prvCd);
			$("#prvNm").val(data.prvNm);
			$("#rvOn").val(data.rvOn);
			$("#rvOnLgtd").val(data.rvOnLgtd);
			$("#rvOnLttd").val(data.rvOnLttd);
			$("#rvMh").val(data.rvMh);
			$("#rvMhLgtd").val(data.rvMhLgtd);
			$("#rvMhLttd").val(data.rvMhLttd);
		}
	},
	saveOrUpRiverWay:function(data,str){
		commonUtils.post(WEB_ROOT+"/data/center/monitor/saveRiverLake",data,false,"保存");
		if(commonUtils.flag){	
			 $('#riverwayModel').modal('hide');
			 layer.msg(str+'成功！', {icon: 1});
			 $('#wayTab').datagrid('load'); 
		}
	}
}
$(function(){
	var p = $(window).height();	
	var contextH = p-$("#headerwaydiv").height();
	//此处因easyui样式导致自适应高度加上头部后显示不出来，所以将window高度减去头部高度
	$("#wayTab").height(contextH); 
	$("#modal-body").height((p/2) + 150);
	$("#modal-content-file").height((p/2) + 50);
	wayTab.initData();
	$("#Query").click(function(){
		wayTab.Query();
	});
	 $('#queryKey').bind('keypress',function(event){
         if(event.keyCode == "13"){
        	wayTab.Query();
         }
	 });
	 $("#refreshBasicInfo").click(function(){
		 $('#queryKey').val('');
		 wayTab.initData();
	 });
	//添加弹出
	$("#addFill").click(function(){
		$("#form_data_riverway").form("clear");
		$("#rvCd").attr("disabled",false);
		$("#updateRiverWay").hide();
		$("#saveRiverWay").show();
		$("#riverwayModel").modal();
	});
	 //河流导出
    $("#exportRiver").click(function(event) {
    	var rvNm = $("#queryKey").val();
		// 修改form中的acton动作
		var url = WEB_ROOT+'/data/center/monitor/exportRivers?&rvNm='+rvNm;
		$("#form_river").attr("action", url);
		// 提交表单
		$("#form_river").submit();
	});
	//保存
	$("#saveRiverWay").click(function(){
		var rvCd = $("#rvCd").val();
		var vrNm = $("#rvNm").val();
		var prvCd = $("#prvCd").val();
		var prvNm = $("#prvNm").val();
		var rvOn = $("#rvOn").val();
		var rvonlgtd = $("#rvOnLgtd").val();
		var rvonlttd = $("#rvOnLttd").val();
		var rvmh = $("#rvMh").val();
		var rvmhlgtd = $("#rvMhLgtd").val();
		var rvmhlttd = $("#rvMhLttd").val();
		if(rvCd == "" || vrNm == "" || prvCd == "" || prvNm == "" || rvOn == "" || rvonlgtd == "" || rvonlttd == "" || rvmh == "" || rvmhlgtd == "" || rvmhlttd == ""){
			layer.msg('带 * 为必填项，请填写完整后保存!', {icon: 5});
			return;
		}
		var data = $('#form_data_riverway').serializeArray();
		data.push({name:'tp',value:1});
		wayTab.saveOrUpRiverWay(data,"保存");
	})
	//河库信息修改
	$("#updateRiverWay").click(function(){
		var vrNm = $("#rvNm").val();
		var prvCd = $("#prvCd").val();
		var prvNm = $("#prvNm").val();
		var rvOn = $("#rvOn").val();
		var rvonlgtd = $("#rvOnLgtd").val();
		var rvonlttd = $("#rvOnLttd").val();
		var rvmh = $("#rvMh").val();
		var rvmhlgtd = $("#rvMhLgtd").val();
		var rvmhlttd = $("#rvMhLttd").val();
		if(vrNm == "" || prvCd == "" || prvNm == "" || rvOn == "" || rvonlgtd == "" || rvonlttd == "" || rvmh == "" || rvmhlgtd == "" || rvmhlttd == ""){
			layer.msg('带 * 为必填项，请填写完整后保存!', {icon: 5});
			return false;
		}
		var data = $('#form_data_riverway').serializeArray();
		data.push({name:'tp',value:0});
		data.push({name:'rvCd',value:$("#rvCd").val()});
		wayTab.saveOrUpRiverWay(data,"修改");
	});
	var index;
	var options = {   
        type: 'POST',  
        url: WEB_ROOT+"/data/center/monitor/UploadFile",  
        dataType: 'json',  
        success:function(){
        	layer.close(index);    
        	$('#fileModel').modal('hide');
        	$('#wayTab').datagrid('load'); 
        	layer.msg('上传成功！', {icon: 1});
        },    
        error : function(xhr, status, err) {    
        	layer.close(index);    
        	layer.msg('上传失败，请检查后再重新上传！', {icon: 5});
        }  
    };   
    $("#Form2").submit(function(){   
    	index = layer.load(0);
    	var f = document.getElementById("input-b3").files;  
	    var size = f[0].size;  
	    var upFileName = $("#input-b3").val();
	    var index1=upFileName.lastIndexOf(".");
	    var index2=upFileName.length;
	    var src=upFileName.substring(index1,index2);
    	var type=(src.substr(src.lastIndexOf("."))).toLowerCase();
	    if(type!=".jpg" && type!=".jpeg" && type!=".png" && type !=".doc" && type!= ".docx" && type != ".pdf"){
	    	layer.msg('上传文件格式不正确！', {icon: 5});
	    	return false;
    	}
	    if((size/1024) > (1024 * 5)){
	    	layer.msg('上传的文件大小不超过5.0M！', {icon: 5});
	    	return false;
	    }
        $(this).ajaxSubmit(options);   
        return false;   //防止表单自动提交  
    }); 
});