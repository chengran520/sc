var leadGrade={
	mark:0,
	leaderData:function(){
		easyui_datagrid_util.fit=false;
		easyui_datagrid_util.singleSelect=true;
		easyui_datagrid_util.pageSize=20;
		easyui_datagrid_util.create_datagrid_options("leaderGrade", WEB_ROOT+"/merit/perf/getLeaderGrades", leadGrade, null);
	},
	QueryData:function(){
		var keyword= $("#keyword").val();
		var data = {keyword:keyword};
		$('#leaderGrade').datagrid('load',data); 
	},
    formatterMeritmeritTm:function(value, row, index){
    	return value.substring(0,value.length-2);
    },
	formatterMeritRep:function(value, row, index){
		var uuid = row.uuid;
        var id1 = "UpdateId";
        var leadMark = "领导打分";
        var  html="<span class='status_span'><i class='icon-star st'></i><a  style='color:black;' id="+id1+" onclick='leadGrade.updateGrade(\""+uuid+"\")'>"+leadMark+"</a></span>";
	    return html;
	},
	updateGrade:function(uuid){
		 var result= commonUtils.post(WEB_ROOT+"/merit/perf/getMeritDetail",{"uuid":uuid},null);
		 if(result.flag){
			$("#uuid").val(result.data.uuid);
			$("#solvePrm").html(result.data.solvePrm);
			$("#nSolvePrm").html(result.data.nsolvePrm);
		 }
		$("#myModalLeader").modal();
		
	},

	updateLeader:function(){
		
		var data = $("#form_data_leader").serializeArray();
		if(data!=null){
			var rcxcScore=$("#rcxcScore").val();
			var sjclvScore=$("#sjclvScore").val();
			var szbhScore=$("#szbhScore").val();
			var gztsScore=$("#gztsScore").val();
			var xcjyScore=$("#xcjyScore").val();
			var jlfScore=$("#jlfScore").val();
			var ldzhScore=$("#ldzhScore").val();
			if(rcxcScore==""||sjclvScore==""||szbhScore==""||gztsScore==""||xcjyScore==""||jlfScore==""||ldzhScore==""){
				layer.msg('请将分数填写完整！', {icon: 5});
				return false;
			}
			var resultData=commonUtils.post(WEB_ROOT+"/merit/perf/insertMerit",data,false,"保存");
			if(resultData.flag){	
				layer.msg('保存成功！', {icon: 1});
				layer.close();
				setTimeout(function(){location.href=WEB_ROOT+"/check/leaderGrade/leaderGrade.jsp";},1000);
			}				
		}else{
			layer.msg('请将分数填写完整！', {icon: 5});
			return false;
		}
	}
}


$(function(){
	formatter_date_utils.initDatePickerTm("createTm");
	var p = $(window).height();	
	var contextH = p-$("#headerleaderGradeDiv").height();
	//此处因easyui样式导致自适应高度加上头部后显示不出来，所以将window高度减去头部高度
	/**
	 * 初始化
	 */
	$("#leaderGrade").height(contextH); 
	leadGrade.leaderData();
	/**
	 * 条件查询
	 */
	$("#leader_query").click(function(){
		 leadGrade.QueryData();
	});
	/**
	 * 刷新
	 */
	$("#refreshLeadGrade").click(function(){
		$("#keyword").val("");
		leadGrade.leaderData();
	});
	
	/**
	 * 失去光标事件
	 */
	$("#rcxcScore").blur(function(){
		var rcxcScore=$(this).val();
		if(rcxcScore>20){
			 layer.alert('该分数超过上限！', {
	   			 icon: 5,
	   			 title: "提示"
	         });
		}
	});
	$("#sjclvScore").blur(function(){
		var sjclvScore=$(this).val();
		if(sjclvScore>15){
			 layer.alert('该分数超过上限！', {
	   			 icon: 5,
	   			 title: "提示"
	         });
		}
	});
	$("#szbhScore").blur(function(){
		var szbhScore=$(this).val();
		if(szbhScore>15){
			 layer.alert('该分数超过上限！', {
	   			 icon: 5,
	   			 title: "提示"
	         });
		}
	});
	
	$("#gztsScore").blur(function(){
		var gztsScore=$(this).val();
		if(gztsScore>10){
			 layer.alert('该分数超过上限！', {
	   			 icon: 5,
	   			 title: "提示"
	         });
		}
	});
	
	$("#xcjyScore").blur(function(){
		var xcjyScore=$(this).val();
		if(xcjyScore>20){
			 layer.alert('该分数超过上限！', {
	   			 icon: 5,
	   			 title: "提示"
	         });
		}
	});
	
	$("#jlfScore").blur(function(){
		var jlfScore=$(this).val();
		if(jlfScore>10){
			 layer.alert('该分数超过上限！', {
	   			 icon: 5,
	   			 title: "提示"
	         });
		}
	});
	
	$("#ldzhScore").blur(function(){
		var ldzhScore=$(this).val();
		if(ldzhScore>10){
			 layer.alert('该分数超过上限！', {
	   			 icon: 5,
	   			 title: "提示"
	         });
		}
	});
	
	/***
	 * 修改
	 */
	$("#updateLeader").click(function(){
		leadGrade.updateLeader();
	});
	
	$("input[class='mark']").change(function(){ 
	    var sum=0; 
	    $("input[class='mark']").each(function(){ 
	      var r = /^-?\d+$/ ;　//正整数 
	      if($(this).val() !=''&&!r.test($(this).val())){ 
	       $(this).val("");  //正则表达式不匹配置空 
	      }else if($(this).val() !=''){ 
	       sum+=parseInt($(this).val()); 
	      } 
	        $("#mark").html(sum+"分"); 
	      }); 
	    }); 
});

