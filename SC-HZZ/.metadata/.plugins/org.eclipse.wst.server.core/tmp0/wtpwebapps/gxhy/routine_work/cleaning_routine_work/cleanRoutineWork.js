var cleanLog={
	cleanRoutine:function(){
		    formatter_date_utils.initDatePicker2("patrolStartTm","patrolEndTm");
			easyui_datagrid_util.fit=false;
			easyui_datagrid_util.singleSelect=true;
			easyui_datagrid_util.pageSize=20;
			var patrolStartTm = $("#patrolStartTm").val();
			var patrolEndTm=$("#patrolEndTm").val();
			easyui_datagrid_util.data={'patrolStartTm':patrolStartTm,'patrolEndTm':patrolEndTm};
			easyui_datagrid_util.create_datagrid_options("cleanRoutineWork", WEB_ROOT+ "/routine/work/getCleanRoutineWorks",cleanLog, null);
	},
	QuerycleanRoutine:function(){
		var patrolStartTm = $("#patrolStartTm").val();
		var patrolEndTm=$("#patrolEndTm").val();
		var patrolUser=$("#patrolUser").val();
		var data = {'patrolStartTm':patrolStartTm,'patrolEndTm':patrolEndTm,"patrolUser":patrolUser};
		$('#cleanRoutineWork').datagrid('load',data); 
	},
	formatterTm:function(value, row, index){			
		return formatter_date_utils.formatterStrTime(value,0,5);
	},
	formatterTraject_sub:function(value, row, index){
		return "<img style='width:25px;height:25px;cursor:pointer' src='"+WEB_ROOT+"/common/images/rutinework/xjgj.png' onclick='cleanLog.showMapTraject_sub(\""+row.uuid+"\")' >";
	},
	formatterAdress:function(value, row, index){
		if(value!=null&&value!=""){
			return value;
		}else{
			return "江西省赣州市石城县";
		}
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
	/*formatterPatrolMileage:function(value, row, index){
		if(value>0){
			if(value>1000){
				var k=(value/1000).toFixed(2);
				return k+"公里";
			}else if(value<1000){
				var k2=(value/500).toFixed(2);
				return k2+"里";
			}
		}
	},*/
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
	showTm:function(){
		var startDate=formatter_date_utils.getCurrentMonthFirst();
		$("#patrolStartTm").val(startDate);
		var endDate=formatter_date_utils.getCurrentEndDate();
		$("#patrolEndTm").val(endDate);
		$("#patrolStartTm,#patrolEndTm").css("color","red");
	}
}
$(function(){
	var p = $(window).height();	
	var contextH =$("#clean_headerDiv").height();
	$("#cleanRoutineWork").height(p-contextH); 
	cleanLog.showTm();
	cleanLog.cleanRoutine();
	$("#query_cleanRoutine").click(function(){
		cleanLog.QuerycleanRoutine();
	});
	$("#reflush_cleanRoutin").click(function(){
		location.href=WEB_ROOT+"/routine_work/cleaning_routine_work/cleaningRoutine.jsp";
	});
	$('#patrolStartTm').bind('keypress',function(event){
        if(event.keyCode == "13")    
        {
        	cleanLog.QuerycleanRoutine();
        }
    });
	$('#patrolEndTm').bind('keypress',function(event){
        if(event.keyCode == "13")    
        {
        	cleanLog.QuerycleanRoutine();
        }
    });
	$("#refreshCleanRou").click(function(){
		cleanLog.showTm();
		$("#patrolUser").val("");
		cleanLog.cleanRoutine();
	});
});
