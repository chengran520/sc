var setting2= {
	  check: {
	        enable: true,
	        chkboxType:  { "Y": "ps", "N": "ps" } //勾选时影响子节点，取消勾选时影响父子节点
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
        beforeClick: function(treeId, treeNode) {
             var zTree = $.fn.zTree.getZTreeObj("Updatetree");
             if (treeNode.isParent) {
                 zTree.expandNode(treeNode);
                 return false;
             } else {
                 return true;
             }
          }
     }
 };
//全选
function checkAllUpdate(){
	 var treeObj = $.fn.zTree.getZTreeObj("Updatetree");
     treeObj.checkAllNodes(true);
}
//反选
function checkFalseUpdate(){
	  var treeObj = $.fn.zTree.getZTreeObj("Updatetree");
      treeObj.checkAllNodes(false);
}
//加载树
function rolePermission(roleId){
	$("#ztresModal").modal();
	$("#roleZtreeId").val(roleId);
	var zNodes= commonUtils.post(WEB_ROOT+"/menu/work/getMenuZtree",null,null);
	 if(zNodes.flag){
		 var t = $("#Updatetree");
	     t = $.fn.zTree.init(t, setting2, zNodes.data);
	     t.expandAll(true);
	 }
    var treeObj = $.fn.zTree.getZTreeObj("Updatetree");
	 var result= commonUtils.post(WEB_ROOT+"/menu/work/getMenuByRole",{"roleId":roleId},null);
	 if(result.flag){
             var authSelected=result.data;
	        //遍历勾选项  
	        for(var i in authSelected){  
	            var checkedNode = treeObj.getNodeByParam("id", authSelected[i].id, null);   
	            if(checkedNode!=null)  
	            //将第三个参数改为false,表示不去勾选父节点下的所有子节点  
	            	treeObj.checkNode(checkedNode, true, false);//checkTypeFlag = false 表示只修改此节点勾选状态，无任何勾选联动操作  
	        	}    
     } 
}
//更新权限
function updatePermission(){
	var roleId=$("#roleZtreeId").val();
	//获取角色选中的权限
	var treeObj = $.fn.zTree.getZTreeObj("Updatetree");
    var nodes = treeObj.getCheckedNodes(true);
    var menuId="";
    for (var i = 0; i < nodes.length; i++) {
        menuId+=nodes[i].id+",";
    }
    if(menuId.length>0){
    	var result= commonUtils.post(WEB_ROOT+"/menu/work/UpdateMenuByRole",{"roleId":roleId,menuId:menuId},null);
        if(result.flag){
    		 $('#ztresModal').modal('hide');
    		 layer.close();
    		 layer.msg('保存成功！', {icon: 1});
        	
        }else{
        	 layer.msg('保存失败！', {icon: 5});	
    		 layer.close();
        }
    }else{
    	layer.alert('请选择相关权限后再保存！', {
			 icon: 6,
			 title: "提示"
		 });
    }
    
}

