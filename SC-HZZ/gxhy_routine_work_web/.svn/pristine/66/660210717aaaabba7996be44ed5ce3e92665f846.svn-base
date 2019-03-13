var myRoutineWork={
	myRoutine:function(opt){
	    formatter_date_utils.initDatePicker2("patrolStartTm","patrolEndTm");
		easyui_datagrid_util.fit=false;
		easyui_datagrid_util.singleSelect=true;
		easyui_datagrid_util.pageSize=20;
		easyui_datagrid_util.create_datagrid_options("myRoutineWork", WEB_ROOT+ "/routine/work/getMyRoutineWorks",myRoutineWork, opt);
	},
	QueryRoutine:function(){
		var patrolStartTm = $("#patrolStartTm").val();
		var patrolEndTm=$("#patrolEndTm").val();
		var data = {'patrolStartTm':patrolStartTm,'patrolEndTm':patrolEndTm};
		$('#myRoutineWork').datagrid('load',data); 
	},
	formatterTm:function(value, row, index){			
		return formatter_date_utils.formatterStrTime(value,0,5);
	},
	formatterTraject:function(value, row, index){
		return "<img style='width:25px;height:25px;cursor:pointer' src='"+WEB_ROOT+"/common/images/rutinework/xjgj.png' onclick='myRoutineWork.showMapTraject(\""+row.uuid+"\")' >";
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
				var tm2=(value/1).toFixed(2);
				return value+"秒";
			}	
		}
	},
/*	formatterPatrolMileage:function(value, row, index){
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
	showMapTraject:function(obj){
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
    }
}
$(function(){
	var p = $(window).height();	
	var contextH =$("#myRoutine_headerDiv").height();
	$("#myRoutineWork").height(p-contextH); 
	myRoutineWork.myRoutine();
	$("#query_myRoutine").click(function(){
		myRoutineWork.QueryRoutine();
	});
	$("#reflush_myRoutine").click(function(){
		location.href=WEB_ROOT+"/routine_work/my_routine_work/myRoutineWork.jsp";
	});
	$('#patrolStartTm').bind('keypress',function(event){
        if(event.keyCode == "13")    
        {
        	myRoutineWork.QueryRoutine();
        }
    });
	
	$("#refreshRoutineWork").click(function(){
		$("#patrolStartTm").val("");
		$("#patrolEndTm").val("");
		myRoutineWork.myRoutine();
	});
	
	/**
	 * 导出巡河纪录
	 */
	 $("#exportRoutineWork").click(function(event) {
		 	var patrolStartTm = $("#patrolStartTm").val();
			var patrolEndTm=$("#patrolEndTm").val();
			var data = {'patrolStartTm':patrolStartTm,'patrolEndTm':patrolEndTm};
			// 修改form中的action动作
			var url = WEB_ROOT+'/routine/work/exportRoutineWork?stm='+patrolStartTm+'&etm='+patrolEndTm;
			$("form").attr("action", url);
			// 提交表单
			$("form").submit();
		});
	
	$('#patrolEndTm').bind('keypress',function(event){
        if(event.keyCode == "13")    
        {
        	myRoutineWork.QueryRoutine();
        }
    });
});
