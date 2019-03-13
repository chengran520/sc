var noticeMap = {
	saveMsg:function(){
		var data = $("#formMsgSend").serializeArray();
		//选择人员
		var receiveUserId=$("#receiveUserId").val();
		var receiveUser=$("#receiveUser").val();
		//发送消息类型
		var  newsType=$("#newsType option:selected").val();
		//标题内容
		var  msgTitle=$("#msgTitle").val();
		//编辑器内容
		var msgContent=ue.getContent();
		//发送平台类型
		var msgType=$("input[name='msgType']:checked").val();
		if(receiveUser == null || receiveUser == ''){	
			layer.msg('请添加发送的人员！', {icon: 5});
			return;
		}	
		if(newsType==null||newsType==''){
			layer.msg('请选择信息类型！', {icon: 5});
			return;
		}
		if(msgTitle == null || msgTitle == ''){
			layer.msg('请填写标题内容！', {icon: 5});
			return;
		}
		
		if(msgContent==null||msgContent==''){
			layer.msg('请填写发送内容！', {icon: 5});
			return;
		}
		data={'receiveUserId':receiveUserId,'receiveUser':receiveUser,'newsType':newsType,'msgTitle':msgTitle,'msgContent':msgContent,'msgType':msgType};
		console.log(JSON.stringify(data));
		 var resultData=commonUtils.post(WEB_ROOT+"/msg/base/insertMsgInfo",data,false,"发送");
		 if(resultData.data.str=="success"){
			 $("#search_to").empty();
			 layer.msg('保存成功！', {icon: 1});
			 $("#formMsgSend")[0].reset();
			 $("#newsType").val("");
			 ue.setContent("");
		 }else{
			 $("#search_to").empty();
			 layer.msg('保存失败！', {icon: 5});
			 layer.close();
		 }  
		
	},
	loadHistyData:function(){
		easyui_datagrid_util.fit=false;
		easyui_datagrid_util.singleSelect=true;
		easyui_datagrid_util.pageSize=20;
		easyui_datagrid_util.create_datagrid_options("notice_catalog", WEB_ROOT+ "/msg/base/getMsgAllInfo", noticeMap, null);
	},
	ininData:function(){
		var result = commonUtils.post(WEB_ROOT+ "/userManager/work/getNextUsers",null,false);
		var data=result.data;
		return data;
   },
   loadNoticeData:function(data){
		var optionstring="";  
		var userId = $("#receiveUserId").val().split(',');
		console.log(userId);
		if(data!=null){
			$.each(data,function(key,value){ 
				if(userId.indexOf(value.userId) == -1){
					optionstring += "<option value='"+value.userId+"'>"+value.userName+"</option>"; 
				}
                $("#search").html(optionstring); 
		 });
	  }
   },
   sendTimeFormatter:function(value, row, index){
	   return formatter_date_utils.formatterStrTime(value,0,0);
   },
   infotitleFormatter:function(value,row,index){
	   return noticeMap.strEllip(value,30);
   },
   contextFormatter:function(value,row,index){
	   return noticeMap.strEllip(value,55);
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
	formatUsers:function(value,row,index){
		if(value!=null){
			if(value.length>20){
				return "<a   title="+value+">"+value.substring(0,20)+"...</font>";
			}else{
				return value;
			}
		}else{
			return "暂无";
		}
	}
}

$(function(){
	var p = $(window).height();	
	var contextH = $("#msg_headerDiv").height();
	var h = $("#tablist").height()+20;
	//此处因easyui样式导致自适应高度加上头部后显示不出来，所以将window高度减去头部高度
	$("#notice_catalog").height(p-contextH-h);
	var Newdata=noticeMap.ininData();
	if(Newdata==0){
		$("#btnSaveMsg").attr("disabled",false);
		$("#btnSaveMsg").css("background-color","#666");
	}
	$("#container_msg").height(p- 320);
 	$(".edui-editor").height(p- 320);
	
	$(".nav-tabs").on("click","li",function(){
		var cls = $(this).hasClass("select");
		if(!cls){
			$(this).addClass("select").siblings().removeClass("select");
			$(this).find("a").css({"background-color":"#03a9f5","color":"#FFF"});
			$(this).siblings().find("a").css({"background-color":"","color":"#242424"});
			var id = $(this).find("a").attr("id");
			if(id == 'histy'){
				$("#div_histy").show();
				noticeMap.loadHistyData();
			}else{
				$("#div_histy").hide();
			}
		}
	});
	$("#btn_div").click(function(){
		document.getElementById("file").click(); 
	});
	$('#search').multiselect({
		search: {
		    left: '<input type="text" name="q" class="form-control" placeholder="Search..."  autocomplete="on"   value=""/>',
		    right: '<input type="text" name="q" class="form-control" placeholder="Search..." autocomplete="on"   value=""/>',
		}
    });
	
	$("#add").click(function(){
		if(Newdata!=0){
			$('#myModal').modal();
			/*$("#search_to").empty(); */
			noticeMap.loadNoticeData(Newdata);	
		}else{
			layer.msg('暂无下级可发送！', {icon: 5});
		}				
	});
	$("#addUser").click(function(){
		$('#myModal').modal('hide');
		var arr=[];
		var brr=[];
		$("#search_to option").each(function(i){
			    arr[i] = $(this).text();
			    brr[i]=$(this).val();
			 });
		 $("#receiveUser").val(arr.join()); 
		 $("#receiveUserId").val(brr.join()); 
	});
	$("#btnSaveMsg").click(function(){
		var receiveUser=$("#receiveUser").val();
		if(receiveUser!=""){
			noticeMap.saveMsg();
		}else{
			return false;
		}	
	});
});
