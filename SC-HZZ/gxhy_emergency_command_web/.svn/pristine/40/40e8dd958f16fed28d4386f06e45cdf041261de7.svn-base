var zTree;
var zNodes;
var meetingData;
var users=[];
var setting = {
		/*check: {
	        enable: true,
	        chkStyle: "radio",
	        radioType: "all"
	    },*/
		check: {
			enable: true,
			chkStyle: "checkbox",
			chkboxType: { "Y": "s", "N": "ps" }
		},
	    view: {
	       dblClickExpand: false,
	       showLine: true,
	       selectedMulti: false,
	       showIcon: true, //设置是否显示节点图标
	       showLine: true, //设置是否显示节点与节点之间的连线
	    },
        data: {
	        simpleData: {
	             enable:true,
	            idKey: "id",
	             pIdKey: "pid",
	             rootPId: ""
	         }
	    },
        callback: {
	    	beforeCheck: zTreeBeforeCheck
	     }
   };

$(function(){ 
	//发起会议
	$("#insert_meeting").click(function(){	
		$("#MeetingAdd").modal('show');
		 $("#form_data_user")[0].reset();
		 $("#resultUser").val("");
		 $("#busineUserName").empty();
		 formatter_date_utils.initDatePicker4("meetingStm","meetingEtm");
		 var zNodes= commonUtils.get(WEB_ROOT+ "/dept/work/getTreeUsers",null,null);
			if(zNodes.flag){
				meetingData=zNodes.data;	
				$.fn.zTree.init($("#meetingZtree"), setting, meetingData);		  
			}
	});
});  
//回掉选中事件
function zTreeBeforeCheck(treeId, treeNode){
	  var checked = treeNode.checked;
	  if(!checked){
		  if(treeNode.pid!=null&&treeNode.pid!=""){
			  $("#busineUserName").append("<li id="+treeNode.id+"  style='color:red;font-weight:bold;'>"+treeNode.name+"<li>");
			  users.push(""+treeNode.id+"");
			  $("#resultUser").val(users);
		  }
	  }else{
		  $("#busineUserName li").remove("li[id="+treeNode.id+"]");
		  users.remove(""+treeNode.id+"");
		  $("#resultUser").val(users);
	  }
	  return true;
}