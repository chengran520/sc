var log={
		logInfo:function(){
			formatter_date_utils.initDatePicker2("startTm","endTm");
			easyui_datagrid_util.fit=false;
			easyui_datagrid_util.singleSelect=false;
			easyui_datagrid_util.pageSize = 20;
			easyui_datagrid_util.create_datagrid_options("patrol_catalogLog", WEB_ROOT+ "/log/work/getLogList",log, null);
		},
		QueryLog:function(){
			var startTm = $("#startTm").val();
			var endTm = $("#endTm").val();
			var createBy=$("#createBy").val();
			var data = {startTm:startTm,endTm:endTm,createBy:createBy};
			$('#patrol_catalogLog').datagrid('load',data); 
		},
		formatterLogTm:function(value, row, index){
			return formatter_date_utils.formatterStrTime(value,0,6);
		},
		deleteCheckboxData:function(){
			var rows = $('#patrol_catalogLog').datagrid('getSelections');
	        if(rows.length>0){
	        	var idd=[];
		        for(var i = 0;i<rows.length;i++){  
		        	var id= $.trim(rows[i].uuid);  
		        	idd.push(id);
			           
		        }
		        var ids = idd.join(",");
	        	layer.alert('你确定要删除吗？', {
	    		    skin: 'layui-layer-molv' 
	    		    ,closeBtn: 1    
	    		     ,btn: ['确定','取消']
	    		     ,icon: 5   // icon
	    		     ,yes:function(){
	    	        	 commonUtils.post(WEB_ROOT+"/log/work/deleteLogList",{ids:ids},false,"删除");
						 layer.msg('删除成功！', {icon: 1});
						 setTimeout(function(){
	    				   location.href=WEB_ROOT+"/module/sysmanager/log/logInfo.jsp";},1000);
	    				 }    		              		    	 
	    			    ,btn2:function(){
	    			   	     layer.close();
	    			    }
	    	     }); 
	        	
	        }else{
	        	layer.alert('请先选择要删除的日志！', {
	    			 icon: 6,
	    			 title: "提示"
	    		 });
	        }
	        
		},
		promptMessage(value, row, index) {
			var width = $(window).width(),maxNum;	
			if(width > 1466){
				maxNum = 50;
			}else{
				maxNum = 40;
			}
			var content = '';   
			var abValue = value +'';   
			if(value != undefined){      
				if(value.length >= maxNum) {         
					abValue = value.substring(0,maxNum) + "...";         
					content = '<a href="javascript:;"  title="' + value + '" class="easyui-tooltip">' + abValue + '</a>';      
				}else{         
					content = '<a href="javascript:;"  title="' + abValue + '" class="easyui-tooltip">' + abValue + '</a>';      
					}   
			}   
			return content;
		},
}
$(function(){
	var p = $(window).height();	
	var contextH = p-$("#headerLogdiv").height();
	//此处因easyui样式导致自适应高度加上头部后显示不出来，所以将window高度减去头部高度
	$("#patrol_catalogLog").height(contextH); 
   log.logInfo();
   $("#queryLog").click(function(){
	   log.QueryLog();
   });
   $("#deleteLog").click(function(){
	   log.deleteCheckboxData();
   });
   $("#refreshLog").click(function(){
	   log.logInfo();
   }); 
});