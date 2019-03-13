var lawViewMap = {
	loadData:function(opt){
		formatter_date_utils.initDatePickerTm("Tm");
		easyui_datagrid_util.fit=false;
		easyui_datagrid_util.singleSelect=true;
		/*easyui_datagrid_util.data={stat:"0"};*/
		easyui_datagrid_util.pageSize=20;
		easyui_datagrid_util.create_datagrid_options("lawCatalog", WEB_ROOT+ "/law/enforment/getLawEnMentList",lawViewMap, opt);
	},
	Query:function(){
		var lawSource=$("#source option:selected").val();
		var lawTm=$("#Tm").val();
		var keyword=$("#keyword").val();
		var data = {'lawSource':lawSource,'lawTm':lawTm,'keyword':keyword,"stat":"0"};
		$('#lawCatalog').datagrid('load',data); 
	},
	formatterDataTm:function(value, row, index){
		return formatter_date_utils.formatterStrTime(value,0,null);
	},
	formatterFil:function(value, row, index){
		if(value == 0){
			return "未立案";
		}else if(value == 1){
			return "立案";
		}else{
			return "异常";
		}
	},
	formatterFilClose:function(value, row, index){
		if(value == 0){
			return "未结案";
		}else if(value == 1){
			return "结案";
		}else{
			return "异常";
		}
	},
	formatterTmMit:function(value, row, index){
		return value+"天";
	},
	formatterDetail:function(value, row, index){
		var status=row.status;
		var html="";
		var num=0;
		if(row.registerUserId.indexOf(",")!=-1){
			var arr = row.registerUserId.split(',');
			num=$.inArray(userId,arr);
		}
		if((status==0&&userjob==14)||(num!=-1&&status==0)){
			html ="<a style='color:#0000FF;' class='colorDetail' onclick='lawViewMap.check(\""+row.lawId+"\",\""+row.registerUserId+"\");'>执法</a>";
		}else if(status==1){
			html ="<font style='color:#00CD00;' class='colorDetail'>已立案</font>";
		}else if(status==2&&userjob==14){
			html ="<font style='color:#00CD00;' class='colorDetail'>结案</font>";
		}
	  
	     return html;
	},
	check:function(lawId,registerUserId){
		var num=0;
		if(registerUserId.indexOf(",")!=-1){
			var arr = registerUserId.split(',');
			num=$.inArray(userId,arr);
		}
		 if((status==0&&userjob==14)||num!=-1){
			 $("#")
			 $("#checkModal").modal();
	         $("#lawId2").val(lawId);
		 }else{
			 layer.msg('您没有审核权限！');
		 }
       
	},
	//增加执法流程信息
	insertCheck:function(){
		var lawId=$("#lawId2").val();
		var handleView=$("#handleView2").val();
		var result= commonUtils.post(WEB_ROOT+"/law/enforment/updateLawById",{"lawId":lawId,"handleView":handleView},null);
		if(result.data==1){
			 layer.msg('执法成功！', {icon: 1});
			 $("#checkModal").modal('hide');
			 $('#lawCatalog').datagrid('load'); 
		}else{
			 layer.msg('审核失败！', {icon: 5});
			 $("#checkModal").modal('hide');
		}	
	},
	formatterProcess:function(value,row,index){
		 var html ="<a style='color:#20B2AA;' class='colorDetail' onclick='lawViewMap.detailUser();'>查看流程</a>";
	     return html;
	},
	formatterStatus:function(value,row,index){
		var html = "";
		if(value == 0||value==1){
			html = "<span style='color:#EE4000'>待处理";
		}else if(value == 2){
			html = "<span style='color:#9ACD32'>已处理";
		}else{
			html = "<span style='color:#969696'>异常";
		}
		html += "</span>";
		return html;
	},
	getBusinesByType:function(type){
		var result= commonUtils.get(WEB_ROOT+"/busine/accept/getbusins",{"type":type},null);
		var html="";
		if(result.flag){
			$.each(result.data,function(key,value){  
				console.log(JSON.stringify(result.data));
				 html += "<option value="+value+">"+value+"</option>";   
			});
			 $("#busines").html(html); 
		}
	},
	addLaw:function(){
		var lawId=$("#lawId").val();
		var busineId=$("#busines option:selected").val();
		var handleTmmit=$("#handleTmmit").val();
		var data = $("#form_data_user").serializeArray();
		if(busineId == null || busineId ==""){
			 layer.msg('案件来源为必填项!',{icon: 5});
			return;
		}
		if(users.lenght<1){
			 layer.msg('执法人员必填项!',{icon: 5});
			return;
		}
		if(handleTmmit == null || handleTmmit ==""){
			 layer.msg('执法时效为必填项！',{icon: 5});
			return;
		}
		var registerUserId=$("#registerUserId").val();
		var registerUserNm=$("#registerUserNm").val();
		var resultData=commonUtils.post(WEB_ROOT+"/law/enforment/addLaw",{"lawId":lawId,"busineId":busineId,"handleTmmit":handleTmmit,"registerUserId":registerUserId,"registerUserNm":registerUserNm},false,"保存");
		if(resultData.data==1){
			 layer.msg('保存成功！', {icon: 1});
			 $('#lawModal').modal('hide');
			 $('#lawCatalog').datagrid('load');  
		}else{
			 layer.msg('保存失败！', {icon: 5});
			 $('#lawModal').modal('hide');
			 layer.close();
		}
	},
	//查询是否有未处理事件
	getCountBusine:function(){
		var result=commonUtils.post(WEB_ROOT+"/busine/accept/getCountBusine",null,null);		
		if(result.flag){
			var count=result.data;
			return count;
		}
	}
}
$(function(){
	var p = $(window).height();	
	var contextH = $("#LawheaderDiv").height();
	
	//此处因easyui样式导致自适应高度加上头部后显示不出来，所以将window高度减去头部高度
	$("#lawCatalog").height(p-contextH); 
	if(uuid!=null&&uuid!=""&&uuid!="null"){
		var data={"uuid":uuid};
		var opt={data:data};
		lawViewMap.loadData(opt);
	}else{
		lawViewMap.loadData();
	}

	if(userjob==14){
		$("#add_law").show();
	}else{
		$("#add_law").hide();
	}
	$("#orgins").change(function(){  
		var type=$("#orgins option:selected").val();  //获取选中的项
		lawViewMap.getBusinesByType(type);	
	});  
	//保存
	$("#saveLaw").click(function(){
		lawViewMap.addLaw();
	});
	$("#queryLaw").click(function(){
		lawViewMap.Query();
	});
	$("#refreshLaw").click(function(){
		$("#source").val("");
		$("#Tm").val("");
		$("#keyword").val("");
		lawViewMap.loadData();
	});

	$("#addLaw").click(function(){
		$("#orgins").val("");
		$("#busines").val("");
		$("#registerUserId").val();
		$("#registerUser").val();
		$("#handleTmmit").val();
		lawViewMap.insertCheck();
	});
	
	//将人员输入隐藏的input
	/*$("#registerUser").on("input",function(){
        var $options=$("#userList").children();
        for(var i=0;i<$options.length;i++){
            if($options.eq(i).val().trim()==$(this).val().trim()){
                $("#registerUserId").val($options.eq(i).attr("data-id"));
                break;
            }else{
                $("#registerUserId").val($(this).val());
            }
        }
    });*/
});