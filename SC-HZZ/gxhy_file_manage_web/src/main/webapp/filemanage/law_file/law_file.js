var LawFile={
    data:null,
	loadLaw_Data:function(opt){
		//formatter_date_utils.initDatePicker2("startTm","endTm");
		formatter_date_utils.initDatePickerTm("creatTm");
		easyui_datagrid_util.fit=false;
		easyui_datagrid_util.singleSelect=true;
		easyui_datagrid_util.data={fileType:"02"};
		easyui_datagrid_util.create_datagrid_options("patrol_law", WEB_ROOT+ "/file/projectFile/getProjectList", LawFile, opt);
	},
	QueryLaw:function(){
		//var startTm = $("#startTm").val();
		//var endTm = $("#endTm").val();
		//var data = {'startTm':startTm,'endTm':endTm,'keyword':keyword,"fileType":"02"};
		var creatTm = $("#creatTm").val();
		var keyword = $("#keyword").val();
		var data = {'creatTm':creatTm,'keyword':keyword,"fileType":"02"};
		var opt={data:data}; 
		this.loadLaw_Data(opt);
	},	
	formatLawOperation:function(value, row, index){
        var html="<a style='color:#0066cc;'  class='formatFont' id='previewFile'  onclick='LawFile.previewLaw(\""+row.uuid+"\");'>预览</a>";
            html+="|<a style='color:#FD5F3B' class='formatFont' id='downloadFile' onclick='LawFile.downloadLaw(\""+row.uuid+"\");'>下载</a>";
            html+="|<a style='color:#008B00;' class='formatFont' id='updateFile' onclick='LawFile.updateLaw(\""+row.uuid+"\")'>修改</a>|";
	        html+=" <a style='color:#9B30FF;' class='formatFont' id='deleteFile'  onclick='LawFile.deLaw(\""+row.uuid+"\");'>删除</a>";
	        return html;
	},
	previewLaw:function(uuid){
		location.href=WEB_ROOT+"/filemanage/law_file/LawDetailFile.jsp?uuid="+uuid;
	},	
	formatterCreateTm:function(value, row, index){
		return formatter_date_utils.formatterStrTime(value,0,0);
	},
	//下载文件
	downloadLaw:function(uuid){
		// 提交表单
        var url = WEB_ROOT+"/file/projectFile/downloadFile";
        var form = $("<form></form>").attr("action", url).attr("method", "post");
        form.append($("<input></input>").attr("type", "hidden").attr("name", "uuid").attr("value", uuid));
        form.appendTo('body').submit().remove();
	},
	deLaw:function(uuid){
		layer.alert('你确定要删除吗？', {
		    skin: 'layui-layer-molv' 
		    ,closeBtn: 1    
		     ,btn: ['确定','取消']
		     ,icon: 5  // icon
		     ,yes:function(){
	        	 var resultData=commonUtils.post(WEB_ROOT+"/file/projectFile/deleteProject",{uuid:uuid},false,"删除");
	        	 if(resultData.data>0){	
					 layer.msg('删除成功！', {icon: 1});
					 $('#patrol_law').datagrid('load'); 
				 }else{
					 layer.msg('删除失败！', {icon: 5});
					 layer.close();
				 }      		    	 
		       },btn2:function(){
			   	     layer.close();
			    }
	   });
	},
	//修改文件
	updateLaw:function(uuid){
		location.href=WEB_ROOT+"/filemanage/law_file/updateLaw.jsp?uuid="+uuid;
	}
	
}
$(function(){
	var p = $(window).height();	
	var contextH = p-$("#headerDiv").height();
	//此处因easyui样式导致自适应高度加上头部后显示不出来，所以将window高度减去头部高度
	$("#patrol_law").height(contextH); 
	//项目列表
	LawFile.loadLaw_Data();
	//条件查询
	$("#queryProject").click(function(){
		LawFile.QueryLaw();
	});
	//回车查询
	$('#keyword').bind('keypress',function(event){
        if(event.keyCode == "13") {
        	LawFile.QueryLaw();
        }
    });
	$('#startTm').bind('keypress',function(event){
        if(event.keyCode == "13") {
        	LawFile.QueryLaw();
        }
    });
	$('#endTm').bind('keypress',function(event){
        if(event.keyCode == "13") {
        	LawFile.QueryLaw();
        }
    });
	$('#creatTm').bind('keypress',function(event){
        if(event.keyCode == "13") {
        	projectFile.QueryProject();
        }
    });
	//跳转增加页面
	$("#addProject").click(function(){
		location.href=WEB_ROOT+"/filemanage/law_file/addLaw.jsp";
	});
	$("#refreshLaw").click(function(){
		LawFile.loadLaw_Data();
	});
	
});