var subRoutineWork={
	subRoutine:function(){
	    formatter_date_utils.initDatePicker2("patrolStartTm","patrolEndTm");
		easyui_datagrid_util.fit=false;
		easyui_datagrid_util.singleSelect=true;
		easyui_datagrid_util.pageSize=20;
		var patrolStartTm = $("#patrolStartTm").val();
		var patrolEndTm=$("#patrolEndTm").val();
		easyui_datagrid_util.data={'patrolStartTm':patrolStartTm,'patrolEndTm':patrolEndTm};
		easyui_datagrid_util.create_datagrid_options("subRoutineWork", WEB_ROOT+ "/routine/work/getSubRoutineWorks",subRoutineWork, null);
	},
	QuerysubRoutine:function(){
		var patrolStartTm = $("#patrolStartTm").val();
		var patrolEndTm=$("#patrolEndTm").val();
		var patrolUser=$("#patrolUser").val();
		var data = {'patrolStartTm':patrolStartTm,'patrolEndTm':patrolEndTm,"patrolUser":patrolUser};
		$('#subRoutineWork').datagrid('load',data); 
	},
	formatterTm:function(value, row, index){			
		return formatter_date_utils.formatterStrTime(value,0,5);
	},
	formatterAdress:function(value, row, index){
		if(value!=null&&value!=""){
			return value;
		}else{
			return "江西省赣州市石城县";
		}
	},
	formatterTraject_sub:function(value, row, index){
		return "<img style='width:25px;height:25px;cursor:pointer' src='"+WEB_ROOT+"/common/images/rutinework/xjgj.png' onclick='subRoutineWork.showMapTraject_sub(\""+row.uuid+"\")' >";
	},
	formatterPatrolTmLt:function(value, row, index){
		if(value>0){
			if(value>60){
				return parseInt(value/60)+"分"+value%60+"秒";	
			}else{
				return value+"秒";
			}	
		}
	},
	formatterPatrolMileage:function(value, row, index){
		if(value>0){
			if(value>1000){
				var k=(value/1000).toFixed(2);
				return k+"公里";
			}else if(value<1000){
				var k2=(value/500).toFixed(2);
				return k2+"里";
			}
		}
	},
	showMapTraject_sub:function(obj){
    	var p = $(window).height();	
		var w = $(window).width();	
		var toUrl = WEB_ROOT+"/routine_work/my_routine_work/trajectory.jsp?routineId="+obj;
    	var index = layer.open({
		  title:"巡河轨迹",
		  type: 2,
		  content: toUrl,
		  area: [''+w+'px', ''+p+'px'],
		  maxmin: true
		});
    },
    showRoutineTm:function(){
    	var startDate=formatter_date_utils.getCurrentMonthFirst();
    	$("#patrolStartTm").val(startDate);
    	var endDate=formatter_date_utils.getCurrentEndDate();
    	$("#patrolEndTm").val(endDate);
    	$("#patrolStartTm,#patrolEndTm").css("color","red");
    }
}
$(function(){
	var p = $(window).height();	
	var contextH =$("#subRoutine_headerDiv").height();
	$("#subRoutineWork").height(p-contextH); 
	subRoutineWork.showRoutineTm();
	subRoutineWork.subRoutine();
	$("#query_subRoutine").click(function(){
		subRoutineWork.QuerysubRoutine();
	});
	$("#reflush_subRoutine").click(function(){
		location.href=WEB_ROOT+"/routine_work/sub_routine_work/subRoutineView.jsp";
	});
	$('#patrolStartTm').bind('keypress',function(event){
        if(event.keyCode == "13"){
        	subRoutineWork.QuerysubRoutine();
        }
    });
	$("#refreshSubRoutine").click(function(){
		subRoutineWork.showRoutineTm();
		$("#patrolUser").val("");
		subRoutineWork.subRoutine();
	});	
	 // 导出巡河纪录
	 $("#exportSubRoutine").click(function(event) {
		 var patrolStartTm = $("#patrolStartTm").val();
		 var patrolEndTm=$("#patrolEndTm").val();
		 var patrolUser=$("#patrolUser").val();
		 var url = WEB_ROOT+'/routine/work/exportSubRoutine?stm='+patrolStartTm+'&etm='+patrolEndTm+'&patrolUser='+patrolUser;
		 $("form").attr("action", url);
		 // 提交表单
		 $("form").submit();
	 });
    //导出统计按角色统计
	 $("#exportTj").click(function(event) {
		   var patrolStartTm = $("#patrolStartTm").val();
		   var patrolEndTm=$("#patrolEndTm").val();
		   var patrolUser=$("#patrolUser").val();
		   var url = WEB_ROOT+'/routine/work/exportTj?stm='+patrolStartTm+'&etm='+patrolEndTm+'&patrolUser='+patrolUser;
		   $("form").attr("action", url);
			// 提交表单
		    $("form").submit();
	  });
	//导出报表2
	 $("#exportTj2").click(function(event) {
		 var patrolStartTm = $("#patrolStartTm").val();
		 var patrolEndTm=$("#patrolEndTm").val();
		 var patrolUser=$("#patrolUser").val();
		 var count=formatter_date_utils.checkTime(patrolStartTm,patrolEndTm);
		 if(count>3){
			 layer.msg('请重新选择时间!(时间不大于3个自然月之间)');
		 }else{
			 var startMonth=new Date(patrolStartTm);  
			 var url = WEB_ROOT+'/routine/work/exportTj2?stm='+patrolStartTm+'&etm='+patrolEndTm+'&patrolUser='+patrolUser+'&count='+count;
			 $("form").attr("action", url);
			// 提交表单
			 $("form").submit();
		 }
	  });	 
	$('#patrolEndTm').bind('keypress',function(event){
        if(event.keyCode == "13"){
        	subRoutineWork.QuerysubRoutine();
        }
    });
});
