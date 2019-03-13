 var zTree;
 var zNodes;
 var data;
var setting = {
	   check: {
	        enable: true,
	        chkStyle: "radio",
	        radioType: "all"
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
	            idKey: "id"
	         }
	    },
        callback: {
	    	beforeClick: zTreeRoleBeforeClick,
	    	beforeCheck: zTreeBeforeCheck
	     }
   };
  //点击设置角色
  function  setRole(userId){
	var zNodes= commonUtils.get(WEB_ROOT+ "/role/work/getRoleZtree",null,null);
	if(zNodes.flag){
		data=zNodes.data;
		InitialRoleZtree();	
		$("#setRoleModal").modal();
		$("#user_Id").val(userId);
	}
	 var result= commonUtils.get(WEB_ROOT+"/role/work/selectRoleByUserId",{userId:userId},null);
  	 var checkRole=result.data[0].roleId;
  	 $("#role_Id").val(checkRole);
    $.each(data,function(i,e){
	  if(checkRole==this.id){
		  var zTree = $.fn.zTree.getZTreeObj("roleZtree");
		  zTree.checkNode(zTree.getNodeByParam("id", ''+this.id+'', null), true, true); 
		  $("#roleName").val(this.name);
	  }
   });
};
  //zTree的初始数据
  function InitialRoleZtree() {
       $.fn.zTree.init($("#roleZtree"), setting, data);
  };
  
  //回调点击事件
  function zTreeRoleBeforeClick(treeId, treeNode, clickFlag) {
	  $("#roleName").val(treeNode.name);
	  $("#role_Id").val(treeNode.id);
 	  var zTree = $.fn.zTree.getZTreeObj("roleZtree");
 	  zTree.checkNode(zTree.getNodeByParam("id", ''+treeNode.id+'', null), true, true); 
  };
  //回掉选中事件
  function zTreeBeforeCheck(treeId, treeNode){
	  $("#roleName").val(treeNode.name);
	  $("#role_Id").val(treeNode.id);
	  return true;
  };
  
  
//模糊查找
 function AutoMatchRole(txtObj) {	
   if (txtObj.value.length > 0) {
	   InitialRoleZtree();
       var zTree = $.fn.zTree.getZTreeObj("roleZtree");
       var nodeList = zTree.getNodesByParamFuzzy("name", txtObj.value);
       $.fn.zTree.init($("#roleZtree"), setting, nodeList);  
     }else{
    	 InitialRoleZtree();
     }
 };