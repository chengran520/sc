var zTree;
 var zNodes;
 var lawData;
 var users=[];
 var usersNm=[];
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
	
	//新增执法
	$("#add_law").click(function(){
		//点击时查看是否有可以申请的未处理信息，如果没有则不能点击申请。
		var count=lawViewMap.getCountBusine();
		if(count>0){
			$("#lawModal").modal();
			var lawId="NYSJ"+createRandom2(1,0,10000000);
			$("#lawId").val(lawId);
			lawViewMap.getBusinesByType("1");
			$("#registerUser").val("");
			$("#registerUserId").val("");
			$("#registerUserNm").val("");
			$("#registerUser").empty();
			$("#handleTmmit").val("");
			usersNm=[];
			users=[];
			var zNodes= commonUtils.get(WEB_ROOT+ "/dept/work/getTreeUsers",null,null);
			if(zNodes.flag){
				lawData=zNodes.data;	
				$.fn.zTree.init($("#laweZtree"), setting, lawData);		  
			}
		}else{
			$("").css("")
			$('#add_law').css("background-color","#666");
			layer.msg('沒有当前事件可以选择！', {icon: 5});
		}
	});
});  
//回掉选中事件
function zTreeBeforeCheck(treeId, treeNode){
	  var checked = treeNode.checked;
	  if(!checked){
		  if(treeNode.pid!=null&&treeNode.pid!=""){
			  $("#registerUser").append("<li  id="+treeNode.id+"  style='color:red;font-weight:bold;'>"+treeNode.name+"<li>");
			  usersNm.push(""+treeNode.nm+"");
			  $("#registerUserNm").val(usersNm);
			  users.push(""+treeNode.id+"");
			  $("#registerUserId").val(users);
		  }
	  }else{	  
		  $("#registerUser li").remove("li[id="+treeNode.id+"]");
		  users.remove(""+treeNode.id+"");
		  $("#registerUserId").val(users);
		  usersNm.remove(""+treeNode.nm+"");
		  $("#registerUserNm").val(usersNm);
	  }
	  return true;
}