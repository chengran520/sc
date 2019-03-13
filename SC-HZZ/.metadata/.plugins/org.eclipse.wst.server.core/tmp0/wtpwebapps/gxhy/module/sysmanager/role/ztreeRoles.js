var setting = {
	  check: {
		    enable: true,
            chkboxType:{ "Y":"ps", "N":"ps" }
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
             var zTree = $.fn.zTree.getZTreeObj("tree");
             if (treeNode.isParent) {
                 zTree.expandNode(treeNode);
                 return false;
             } else {
                 return true;
             }
         }
     }
 };
$(function(){
	$("#addRole").click(function(){
		$("#modalRole").modal();
		$("#uuid").val("");
		$("#roleId").val("");
		$("#roleName").val("");
		$("#roleDes").val("");
		var zNodes= commonUtils.post(WEB_ROOT+ "/menu/work/getMenuZtree",null,null);
		if(zNodes.flag){
		   var t = $("#tree");
	       t = $.fn.zTree.init(t, setting, zNodes.data);
	       t.expandAll(true);
		}
	});
});	
//判断是否有此角色
 function checkRole(roleId,roleName){
		var result= commonUtils.get(WEB_ROOT+"/role/work/selectRole",{"roleId":roleId,"roleName":roleName},null);
		return result.data;
  }
 
//全选
function checkAll(){
	 var treeObj = $.fn.zTree.getZTreeObj("tree");
     treeObj.checkAllNodes(true);
}
//反选
function checkFalse(){
	  var treeObj = $.fn.zTree.getZTreeObj("tree");
      treeObj.checkAllNodes(false);
}

//保存角色基本信息
function saveRole(uuid) {
	   var roleId=$("#roleId").val();
	   var roleName=$("#roleName").val();
		var roleDes=$("#roleDes").val();
		if(roleId==""||roleName==""){
			 layer.alert('请填写完整后保存！', {
				 icon: 5,
				 title: "提示"
			 });
		}else{
			//检查角色信息
			var data= checkRole(roleId,roleName);
			
			if(data==null){
				 layer.alert('该角色没有赋予任何权限,确定要保存吗？', {
		    	     skin: 'layui-layer-molv' 
		    	     ,closeBtn: 1    
		    	      ,btn: ['确定','取消']
		    	      ,icon: 6    // icon
		    	      ,yes:function(){
			    			var resultData=commonUtils.post(WEB_ROOT+"/role/work/saveRole",{uuid:uuid,roleId:roleId,roleName:roleName,roleDes:roleDes},false,"保存");
			    			if(resultData.flag){	
							    layer.msg('保存成功！', {icon: 1});
			       					setTimeout(function(){
			       						location.href=WEB_ROOT+"/module/sysmanager/role/roleInfo.jsp";},1000);
			       			}else{
			       					 layer.msg('保存失败！', {icon: 5});
			       			}
		    	      }
		    	     ,btn2:function(){
		    	    	 layer.close();
		    	      }
		    	});
			}else{
				layer.alert('此角色已有,请重新填写！', {
					 icon: 5,
					 title: "提示"
				 });
			}		
		}
};
//保存角色和权限
function savePermission(){	
	    var roleId=$("#roleId").val();
	    var roleName=$("#roleName").val();
		var roleDes=$("#roleDes").val();
		var treeObj = $.fn.zTree.getZTreeObj("tree");
	    var nodes = treeObj.getCheckedNodes(true);
	    var menuId="";
	    for (var i = 0; i < nodes.length; i++) {
	        menuId+=nodes[i].id+",";
	    }
		if(roleId==""||roleName==""){
			 layer.alert('请填写完整后保存！', {
				 icon: 6,
				 title: "提示"
			 });
		}else{
			var data= checkRole(roleId,roleName);
			if(data==null){
				var resultData=commonUtils.post(WEB_ROOT+"/role/work/saveRole",{roleId:roleId,roleName:roleName,roleDes:roleDes,menuId:menuId},false,"保存");
				if(resultData.flag){
					 layer.msg('保存成功！', {icon: 1});
					 layer.close();
					 setTimeout(function(){
    				location.href=WEB_ROOT+"/module/sysmanager/role/roleInfo.jsp";},1000);
				}else{
					 layer.msg('保存失败！', {icon: 5});	
					 layer.close();
			    }
			}else{
				layer.alert('此角色已有,请重新填写！', {
					 icon: 5,
					 title: "提示"
				 });
			}	
		}
}