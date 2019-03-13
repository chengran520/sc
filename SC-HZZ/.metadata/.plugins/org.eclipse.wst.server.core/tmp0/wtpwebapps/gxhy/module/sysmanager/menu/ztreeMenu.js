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
	            idKey: "id",
	             pIdKey: "pid",
	             rootPId: ""
	         }
	    },
        callback: {
	    	beforeClick: zTreeBeforeClick,
	    	beforeCheck: zTreeBeforeCheck
	     }
   };

  $(function(){
	//初始化ztree树
		var zNodes= commonUtils.post(WEB_ROOT+ "/menu/work/getMenuZtree",null,null);
		if(zNodes.flag){
			data=zNodes.data;
			InitialZtree();
		}	
	});
  
//点击显示
 function showMenu(){
	 var nameObj = $("#pmenuIdName");  
     var nameOffset = $("#pmenuIdName").offset();  
     $("#menuContent").css({ left: "15px", top: 5+ nameObj.outerHeight() + "px" }).slideDown("fast");  
     $("#modalMenu").bind("mousedown", onBodyDown); 
     $("#div_fro").height(300);
 };
 
  //回调点击事件
 function zTreeBeforeClick(treeId, treeNode, clickFlag) {
	  $("#pmenuIdName").val(treeNode.name);
	  $("#pmenuId").val(treeNode.id);
	  var zTree = $.fn.zTree.getZTreeObj("menuZtree");
	  zTree.checkNode(zTree.getNodeByParam("id", ''+treeNode.id+'', null), true, true); 
 };

  //模糊查找
  function AutoMatch(txtObj) {	
    if (txtObj.value.length > 0) {
        InitialZtree();
        var zTree = $.fn.zTree.getZTreeObj("menuZtree");
        var nodeList = zTree.getNodesByParamFuzzy("name", txtObj.value);
        $.fn.zTree.init($("#menuZtree"), setting, nodeList);  
      }else{
    	 
    	  hideMenu();
    	  InitialZtree();
      }
   };
   
 //zTree的初始数据
  function InitialZtree() {
       $.fn.zTree.init($("#menuZtree"), setting, data);
  };
  
  
  //隐藏树
 function hideMenu() {
    $("#menuContent").fadeOut("fast");
    $("#modalMenu").unbind("mousedown", onBodyDown);
  };
  
  
 //当点击窗口其他区域时zTree消息框隐藏  
 function onBodyDown(event) {  
    if (!(event.target.id == "pmenuIdName" || event.target.id == "menuContent" || $(event.target).parents("#menuContent").length > 0)) {
    	$("#div_fro").height(34);
        hideMenu();  
       
    }  
}; 
//回掉选中事件
function zTreeBeforeCheck(treeId, treeNode){
	  var checked = treeNode.checked;
	  if(!checked){
		  $("#pmenuIdName").val(treeNode.name);
		  $("#pmenuId").val(treeNode.id);
	  }else{
		  $("#pmenuIdName").val("");
		  $("#pmenuId").val("");
	  }
	  return true;
};