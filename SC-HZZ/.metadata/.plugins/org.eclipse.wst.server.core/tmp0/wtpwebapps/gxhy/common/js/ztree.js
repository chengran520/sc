var commonZtree = {
	ztreeNode:null,
	ztree:function(ztreId){
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
		    	beforeClick: commonZtree.zTreeBeforeClick,
		    	beforeCheck: commonZtree.zTreeBeforeCheck
		     }
    	};
    	//初始化ztree树
		var zNodes= commonUtils.get(WEB_ROOT+"/data/adcd/getUserAdcdZtree",null,null);
		if(zNodes.flag){
			treeData = zNodes.data;
			commonZtree.ztreeNode = ztreId;
			var treeObj = $.fn.zTree.init($("#"+ztreId), setting, treeData);
			var node = treeObj.getNodes();
			var nodes = treeObj.transformToArray(node);
	        for (var i = 0; i < nodes.length; i++) { //设置节点展开
	        	//展开至上级菜单为当前用户行政区
	        	if(useradcd == nodes[i].pid){
	        		treeObj.expandNode(nodes[i], false, false, true);
	        		return;
	        	}
	    		treeObj.expandNode(nodes[i], true, false, true);
	        }
		}	
	},
	showMenu:function(){
		 var nameObj = $("#pmenuIdName");  
	     var nameOffset = $("#pmenuIdName").offset();  
	     $("#menuContent").css({ left: "65px", top: 5+ nameObj.outerHeight() + "px" }).slideDown("fast"); 	 
	     $("body").bind("mousedown", this.onBodyDown);
	}, 
	zTreeBeforeClick:function(treeId, treeNode, clickFlag) {
		  $("#pmenuIdName").val(treeNode.name);
		  $("#pmenuId").val(treeNode.id);
		  var zTree = $.fn.zTree.getZTreeObj(commonZtree.ztreeNode);
		  zTree.checkNode(zTree.getNodeByParam("id", ''+treeNode.id+'', null), true, true); 
		  commonZtree.hideMenu();
	 },
	  //隐藏树
	 hideMenu:function () {
	    $("#menuContent").fadeOut("fast");
	    $("body").unbind("mousedown", this.onBodyDown);
	  },
	 //当点击窗口其他区域时zTree消息框隐藏  
	onBodyDown:function (event) {
		 if (!(event.target.id == "pmenuIdName" || event.target.id == "menuContent" || $(event.target).parents("#menuContent").length>0)) {
			 commonZtree.hideMenu();
		 }
	 },
	//回掉选中事件
	 zTreeBeforeCheck:function(treeId, treeNode){
		  var checked = treeNode.checked;
		  if(!checked){
			  $("#pmenuIdName").val(treeNode.name);
			  $("#pmenuId").val(treeNode.id);
		  }else{
			  $("#pmenuIdName").val("");
			  $("#pmenuId").val("");
		  }
		  return true;
	}
}
