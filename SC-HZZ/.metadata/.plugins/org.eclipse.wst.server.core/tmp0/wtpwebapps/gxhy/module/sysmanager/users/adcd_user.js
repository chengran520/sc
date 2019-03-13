$(function(){
	var treeData;
	var setting= {
	    view: {
	       dblClickExpand: true,
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
	    usericon:{
            // 折叠icon
            OPEN: "open fa ftopen fa-folder-open", // 打开文件图标
            CLOSE: "close fa ftclose fa-folder",   // 折叠文件图标
            OPENDK:'open icon-folder ace-icon tree-minus',  // 打开状态图标
            CLOSEZD:'close icon-folder ace-icon tree-plus', // 折叠状态图标
            DOCU: "docu",
            // 子节点图标
            CHILDRENNODE: "fa-book",
            // 复选框图标
            UNFACHECK: "fa fa-check",
            FACHECKED: "fa fa-times",
            // 编辑图标
            EDIT: "fa-pencil-square-o",
            // 移除图标
            REMOVE: "fa-eraser",
            // 增加节点图标
            ADDNODE: "fa-plus-square",
            DOCU: "docu"
        },
	    callback: {
	        beforeClick:function(treeId, treeNode) {
	             var treeId = treeNode.id;
	             userManager.Query(treeId);
	          }
	     }
	 };
	var data = commonUtils.get(WEB_ROOT+"/data/center/monitor/getUserAdcdZtree",null,null);
	if(data.flag){
		treeData = data.data;
		var treeObj = $.fn.zTree.init($("#homeTree"),setting,treeData);
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

})
