var checkQuery={
	/**
	 * 列表
	 */	
    riverArr:[],
    userArr:[],
	checkData:function(){
		easyui_datagrid_util.fit=false;
		easyui_datagrid_util.singleSelect=true;
		easyui_datagrid_util.pageSize=20;
		easyui_datagrid_util.create_datagrid_options("merit_perf", WEB_ROOT+"/merit/perf/getMeritList", checkQuery, null);
	},
	/**
	 * 条件查询
	 */
	Query:function(){
		var createTm = $("#createTm").val();
		var meritNm= $("#meritNm").val();
		var data = {createTm:createTm,meritNm:meritNm};
		$('#merit_perf').datagrid('load',data); 
	},
	/**
	 * 格式化考核状态
	 */
	formatterMeritstatus:function(value,row,index){
		var html="";
		if(value=="0"){
			html="<span class='status' style='background-color: #0099CC;'>未考核</span>";
		}else if(value=="1"){
		    html="<span class='status'>已考核</span>";
		}else{}
		
		return html;
  },
  
  //如果考核分数为0的话，显示暂无
  formatterTotalScore:function(value,row,index){
	  if(value==0){
		  return "暂无";
	  }else{
		  return  value;  
	  }
  },
    /**
     * 格式化申请时间
     */
    formatterMeritmeritTm:function(value, row, index){
    	return value.substring(0,value.length-2);
    },
    /**
     * 申请绩效信息
     */
	insertMerit:function(){
		var data = $("#form_data_Merit").serializeArray();
		var meritNm = $("#meritName").val();
		if(meritNm == null || meritNm == ''){
			layer.msg('考核名称为必填项!', {icon: 5});
			return;
		}
		var riverInfo=$("#riverInfo").val();
		if(riverInfo == null || riverInfo == ''){
			layer.msg('河流信息为必填项!', {icon: 5});
			return;
		}
		var index = $.inArray(riverInfo, checkQuery.riverArr);   //结果：index=1
    	if(index<0){
    		 layer.msg('不存在此河流，请重新选择！', {icon: 5});
    		 return;
    	}
		var parentRiver=$("#parentRiver").val();
		if(parentRiver == null || parentRiver == ''){
			layer.msg('上级河长为必填项!', {icon: 5});
			return;
		}
		var index = $.inArray(parentRiver, checkQuery.userArr);   //结果：index=1
    	if(index<0){
    		 layer.msg('不存在此河长，请重新选择！', {icon: 5});
    		 return;
    	}        
		var resultData=commonUtils.post(WEB_ROOT+"/merit/perf/insertMerit",data,false,"保存");
		if(resultData.flag){	
			layer.msg('保存成功！', {icon: 1});
			setTimeout(function(){location.href=WEB_ROOT+"/check/query/checkQuery.jsp";},1000);
		}else{
			layer.alert('请填写完整信息！', {
	   			 icon: 5,
	   			 title: "提示"
  		    });
		}	
	},
	/**
	 * 格式化操作列：修改删除
	 */
	formatterMeritRep:function(value, row, index){
		var strDetail = "详情";
		var id1="DetailId";
		var uuid=row.uuid;
        var strUpdate="修改";
        var id2="UpdateId";
        var strDelete="删除";
        var id3="DeleteId";
        var html="<span  class='detail-span'><a   id="+id1+" onclick='checkQuery.detailMreit(\""+uuid+"\");'>"+strDetail+"</a></span>";
        if(row.meritStatus=="未审核"&&row.creUserName==userName){
        	 html+="<span  class='update-span'><a  id="+id2+" onclick='checkQuery.updateMreit(\""+uuid+"\")'>"+strUpdate+"</a></span>";
        	 html+="<span class='delete-span'><a   id="+id3+" onclick='checkQuery.deleteMreit(\""+uuid+"\");'>"+strDelete+"</a></span>";
        }       
	       
	    return html;
	},
	/**
	 * 详情
	 */
	detailMreit:function(uuid){
		 var result= commonUtils.post(WEB_ROOT+"/merit/perf/getMeritDetail",{"uuid":uuid},null);
		 if(result.flag){
			 console.log(JSON.stringify(result.data));
			 $("#checkDetail").modal();
			 $("#merit1").text(result.data.meritNm);
	    	 $("#meritTm1").text(result.data.meritTm);
	    	 $("#rvCd1").text(result.data.rvCd);
	    	 $("#rvNm1").text(result.data.rvNm);
	    	 $("#rvUserName").text(result.data.rvUserName);
	    	 $("#NSolvePrm1").text(result.data.nsolvePrm);
	    	 if(result.data.meritStatus==0){
	    		 $("#meritStatus").text('未审批');
	    	 }else{
	    		 $("#meritStatus").text('已审批');
	    	 }
	    	 $("#creUserName").text(result.data.creUserName);
	    	 if(result.data.rcxcScore==null||result.data.rcxcScore==""){
	    		 $("#rcxcScore").text("暂无");
	    	 }else{
	    		 $("#rcxcScore").text(result.data.rcxcScore+"分");
	    	 }
	    	
	    	 if(result.data.sjclvScore==null||result.data.sjclvScore==""){
	    		 $("#sjclvScore").text("暂无");
	    	 }else{
	    		 $("#sjclvScore").text(result.data.sjclvScore+"分");
	    	 }	    	 
	    	 if(result.data.szbhScore==null||result.data.szbhScore==""){
	    		 $("#szbhScore").text("暂无");
	    	 }else{
	    		 $("#szbhScore").text(result.data.szbhScore+"分");
	    	 }
	    	 
	    	 if(result.data.gztsScore==null||result.data.gztsScore==""){
	    		 $("#gztsScore").text("暂无");
	    	 }else{
	    		 $("#gztsScore").text(result.data.gztsScore+"分");
	    	 }
	    	 
	    	 if(result.data.xcjyScore==null||result.data.xcjyScore==""){
	    		 $("#xcjyScore").text("暂无");
	    	 }else{
	    		 $("#xcjyScore").text(result.data.xcjyScore+"分");
	    	 }

	    	 if(result.data.jlfScore==null||result.data.jlfScore==""){
	    		 $("#jlfScore").text("暂无");
	    	 }else{
	    		 $("#jlfScore").text(result.data.jlfScore+"分");
	    	 }
	    	 
	    	 if(result.data.ldzhScore==null||result.data.ldzhScore==""){
	    		 $("#ldzhScore").text("暂无");
	    	 }else{
	    		 $("#ldzhScore").text(result.data.ldzhScore+"分");
	    	 }
	    	
	    	 if(result.data.totalScore==null||result.data.totalScore==""){
	    		 $("#totalScore").text("暂无");
	    	 }else{
	    		 $("#totalScore").text(result.data.totalScore+"分");
	    	 }
	    	 
	    	 if(result.data.solvePrm==null||result.data.solvePrm==""){
	    		 $("#solvePrm1").text("暂无");
	    	 }else{
	    		 $("#solvePrm1").text(result.data.solvePrm);
	    	 }
	    	 
	    	 if(result.data.nsolvePrm==null||result.data.nsolvePrm==""){
	    		 $("#nSolvePrm1").text("暂无");
	    	 }else{
	    		 $("#nSolvePrm1").text(result.data.nsolvePrm);
	    	 }
	    	 
	    	 if(result.data.explain==null||result.data.explain==""){
	    		 $("#explain1").text("暂无");
	    	 }else{
	    		 $("#explain1").text(result.data.explain);
	    	 }
	    	 
	      }
	},
	/**
	 * 修改绩效信息
	 */
	updateMreit:function(uuid){	
		 var result= commonUtils.post(WEB_ROOT+"/merit/perf/getMeritDetail",{"uuid":uuid},null);
	     if(result.flag){
	    		 $("#myModalMerit").modal();
    			 $("#insertMerit").hide();
    			 $("#updateMerit").show();   			 
		    	 $("#uuid").val(uuid);
		    	 $("#merit").val(result.data.meritNm);
		    	 $("#meritTm").val(result.data.meritTm);
		    	 $("#riverInfo").val(result.data.rvCd+"("+result.data.rvNm+")");
		    	 $("#solvePrm").val(result.data.solvePrm);
		    	 $("#nSolvePrm").val(result.data.nsolvePrm);
		    	 $("#explain").val(result.data.explain);
		    	 $("#parentRiver").val(result.data.rvUserName+"("+result.data.rvUserId+")");  
    	 }
	},
	/**
	 * 查询上级河长
	 */
	selectRiverNmList:function(){	
		 var result= commonUtils.get(WEB_ROOT+"/merit/perf/selectRiverNmList",null,null);
	    	 if(result.flag){
	    		 for ( var i = 0; i <result.data.length; i++){
	    			    this.userArr.push(result.data[i].userNm);
	    			 	$("#riverList").append("<option value='"+result.data[i].userNm+"' data-id='"+result.data[i].userId+"'/>"); 
	    		 }
	    			 		 
	    	}
	},
	
	//查询河流信息
	selectRiverInfoList:function(){	
		 var result= commonUtils.get(WEB_ROOT+"/merit/perf/selectRiverInfoList",null,null);
	    	 if(result.flag){
	    		 for ( var i = 0; i <result.data.length; i++){
	    			     this.riverArr.push(result.data[i].rvNm);
	    			 	$("#riverInfoList").append("<option value='"+result.data[i].rvNm+"' data-id='"+result.data[i].rvCd+"'>"); 
	    		 }
	    			 		 
	    	}
	},
	
	/**
	 * 删除绩效信息
	 */
	deleteMreit:function(uuid){
		 var result= commonUtils.post(WEB_ROOT+"/merit/perf/getMeritDetail",{"uuid":uuid},null);
	     if(result.flag){
	    		 layer.alert('你确定要删除吗？', {
	    			    skin: 'layui-layer-molv' 
	    			    ,closeBtn: 1    
	    			     ,btn: ['确定','取消']
	    			     ,icon: 5  
	    			     ,yes:function(){
	    		        	 commonUtils.post(WEB_ROOT+"/merit/perf/deleteMerit",{uuid:uuid},false,"删除");
	    		        	 if(commonUtils.flag){	
	    						 layer.msg('删除成功！', {icon: 1});
	    						 $('#merit_perf').datagrid('load');  
	    					 }else{
	    						 layer.msg('删除失败！', {icon: 5});
	    						 layer.close();
	    					 }      		    	 
	    			       }
	    				    ,btn2:function(){
	    				   	     layer.close();
	    				    }
	    		    });
	    	   } 	      
	  }
}

$(function(){
	
	//查询所有河长
	checkQuery.selectRiverNmList();
	//查询所有河流信息
	checkQuery.selectRiverInfoList();
	if(userjob<=7||userjob==14){
		$("#merit_add").hide();
	}	
	formatter_date_utils.initDatePickerTm("createTm");
	var p = $(window).height();	
	var contextH = p-$("#headerMeritDiv").height();
	/**
	 * 初始化
	 */
	$("#merit_perf").height(contextH); 
	checkQuery.checkData();
	
	/**
	 * 条件查询
	 */
	$("#merit_query").click(function(){
		 checkQuery.Query();
	});
	
	/**
	 * 刷新
	 */
	$("#refreshCheck").click(function(){
		$("#createTm").val("");
		$("#meritNm").val("");
		checkQuery.checkData();
	});
	
	/**
	 * 增加
	 */
	$("#merit_add").click(function(){
		$('#form_data_Merit')[0].reset();	
		$("#uuid").val("");
		var hit = $(window).height();
		if(hit < 820){
			$(".modal-dialog").css("margin",'5px auto');
			$(".modal-content").height(hit - 20);
			$("#form_data_Merit").height(hit - 64);
		}else{
			$(".modal-content").height(564);
			$("#form_data_Merit").height(510);
		}
		
		$("#insertMerit").show();
		$("#updateMerit").hide();
		$("#myModalMerit").modal();
		$("#meritTm").val(formatter_date_utils.formatterStrTime(null,0));
	});
	
	/**
	 * 保存
	 */
	$("#insertMerit").click(function(){
		checkQuery.insertMerit();
	});
	
	/**
	 * 修改数据
	 */
	$("#updateMerit").click(function(){
		checkQuery.insertMerit();
	});
    
	//将河流输入隐藏的input
	$("#riverInfo").on("input",function(){
        var $options=$("#riverInfoList").children();
        for(var i=0;i<$options.length;i++){
            if($options.eq(i).val().trim()==$(this).val().trim()){
                $("#resultRiver").val($options.eq(i).attr("data-id"));
                break;
            }else{
                $("#resultRiver").val($(this).val());
            }
        }
    });

	//将人员输入隐藏的input
	$("#parentRiver").on("input",function(){
        var $options=$("#riverList").children();
        for(var i=0;i<$options.length;i++){
            if($options.eq(i).val().trim()==$(this).val().trim()){
                $("#resultUser").val($options.eq(i).attr("data-id"));
                break;
            }else{
                $("#resultUser").val($(this).val());
            }
        }
    });
});

