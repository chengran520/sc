var resource={
	getResources:function(opt){
		formatter_date_utils.initDatePicker2("startTm","endTm");
		easyui_datagrid_util.fit=false;
		easyui_datagrid_util.singleSelect=true;
		easyui_datagrid_util.data={"fileType":"03"};
		easyui_datagrid_util.pageSize = 20;
		easyui_datagrid_util.create_datagrid_options("patrol_resource", WEB_ROOT+ "/file/projectFile/getProjectList", resource, opt);
	},
	QueryResource:function(){
		var startTm = $("#startTm").val();
		var endTm = $("#endTm").val();
		var keyword = $("#keyword").val();
		var data = {'startTm':startTm,'endTm':endTm,'keyword':keyword,"fileType":"03"};
		var opt={data:data}; 
		this.getResources(opt);
	},
	formatIsForever:function(value, row, index){
		if(value==0){
			return "是";
		}else{
			return "否";
		}
	},
	formatDate:function(value, row, index){
		return formatter_date_utils.formatterStrTime(value,0,5);
	},
	formatOperation:function(value, row, index){
        var html="";
            html+="<a style='color:#FD5F3B' class='formatFont' id='downloadFile' onclick='resource.downloadFile(\""+row.uuid+"\");'>下载</a>";
            html+="|<a style='color:#008B00;' class='formatFont' id='updateFile' onclick='resource.updateFile(\""+row.uuid+"\")'>修改</a>|";
	        html+=" <a style='color:#9B30FF;' class='formatFont' id='deleteFile'  onclick='resource.deFile(\""+row.uuid+"\");'>删除</a>";
	        return html;
	},
	previewFile:function(uuid){
		location.href=WEB_ROOT+"/emergency/resourceShare/resourceDetai.jsp?uuid="+uuid;
	},	
	//下载文件
	downloadFile:function(uuid){
		// 提交表单
        var url = WEB_ROOT+"/file/projectFile/downloadFile";
        var form = $("<form></form>").attr("action", url).attr("method", "post");
        form.append($("<input></input>").attr("type", "hidden").attr("name", "uuid").attr("value", uuid));
        form.appendTo('body').submit().remove();
	},
	deFile:function(uuid){
		layer.alert('你确定要删除吗？', {
		    skin: 'layui-layer-molv' 
		    ,closeBtn: 1    
		     ,btn: ['确定','取消']
		     ,icon: 5  // icon
		     ,yes:function(){
	        	 var resultData=commonUtils.post(WEB_ROOT+"/file/projectFile/deleteProject",{uuid:uuid},false,"删除");
	        	 console.log(resultData.data);
	        	 if(resultData.data>0){	
					 layer.msg('删除成功！', {icon: 1});
					 $('#patrol_resource').datagrid('load'); 
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
	updateFile:function(uuid){
		location.href=WEB_ROOT+"/emergency/resourceShare/updateProject.jsp?uuid="+uuid;
	},
	formatName:function(value, row, index){
		var href=WEB_ROOT+"/emergency/resourceShare/resourceDetai.jsp?uuid="+row.uuid;
		return "<a href="+href+" style='color:blue;'>" + value + "</a>";
	}
}

$(function(){
	var p = $(window).height();	
	var contextH = p-$("#Resource_headerDiv").height();
	//此处因easyui样式导致自适应高度加上头部后显示不出来，所以将window高度减去头部高度
	$("#patrol_resource").height(contextH);
	$("#addResource").click(function(){
		location.href=WEB_ROOT+"/emergency/resourceShare/addResourceShare.jsp";
	});
	resource.getResources();
	//查询资源
	$("#queryResource").click(function(){
		resource.QueryResource();
	});
	$("#refreshResource").click(function(){
		resource.getResources();
	});
});