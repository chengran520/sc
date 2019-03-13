var menu={
		data:null,	
		menuList:function(opt){
			easyui_datagrid_util.fit=false;
			easyui_datagrid_util.singleSelect=true;
			easyui_datagrid_util.pageSize = 20;
			easyui_datagrid_util.create_datagrid_options("Menu", WEB_ROOT+ "/menu/work/getMenuList",menu, opt);
		},
		QueryMenu:function(){
			var keyword = $("#keywo").val();
			var data = {"keyword":keyword};
			 var opt={data:data}; 
			 this.menuList(opt);
		},
		formatMenuRepeat:function(value, row, index){
			var uuid=row.uuid;
			var menuId=row.menuId;
	        var colorUpdate="#008B00";
	        var strUpdate="修改";
	        var id2="UpdateId";
	        var colorDelete="#9B30FF";
	        var strDelete="删除";
	        var id3="DeleteId";
	        var menu=uuid+","+menuId;
			return "<a class='colorUpdate'  style='color:"+colorUpdate+";'  id="+id2+" onclick=' menu.updateMenu(\""+uuid+"\")'>"+strUpdate+"</a>|<a   class='colorDelete'  style='color:"+colorDelete+";'   id="+id3+" onclick='menu.deleteMenu(\""+menu+"\");'>"+strDelete+"</a>";
		},
		formatMenuParent:function(value, row, index){
			if(value==null||value==""){
				return  "暂无";
			}else{
				return value;
			}
		},
		//删除菜单
		deleteMenu:function(menu){
			var uuid=menu.split(",")[0];
			var menuId=menu.split(",")[1];
			layer.alert('你确定要删除吗？', {
    		    skin: 'layui-layer-molv' 
    		    ,closeBtn: 1    
    		     ,btn: ['确定','取消']
    		     ,icon: 5   // icon
    		     ,yes:function(){
    	        	 var resultData=commonUtils.post(WEB_ROOT+"/menu/work/deleteMenu",{uuid:uuid,menuId:menuId},false,"删除");
    	        	 if(resultData.data>0){	
    					 layer.msg('删除成功！', {icon: 1});
    					 $('#Menu').datagrid('load');  
    				 }else{
    					 layer.msg('删除失败！', {icon: 5});
    					 layer.close();
    				 }      		    	 
    		       }
    			    ,btn2:function(){
    			   	     layer.close();
    			    }
    	   });
		},
		//修改菜单详情
		updateMenu:function(uuid){
			 $("#modalMenu").modal();
			 $("#insertMenu").hide();
			 $("#updateMenu").show();
			 var resultData=commonUtils.get(WEB_ROOT+"/menu/work/selectMenuById",{uuid:uuid},false,"删除"); 
			 if(resultData.flag){
				 var menu=resultData.data;
				 $("#uuid").val(menu.uuid);
				 $("#menuId").val(menu.menuId);
				 $("#menuNm").val(menu.menuNm);
				 $("#menuUrl").val(menu.menuUrl);
				 $("#pmenuId").val(menu.pmenuId);
				 $("#sort").val(menu.sort);
				 var menu=this.menuIdCheck(menu.pmenuId);
				 $("#pmenuIdName").val(menu.menuNm);		
				  var treeObj = $.fn.zTree.getZTreeObj("menuZtree");
				  treeObj.checkNode(treeObj.getNodeByParam("id", ''+menu.menuId+'', null), true, true); 
			 }
		},
		//根据menuId获取数据
		menuIdCheck:function(menuId){
			 var result=commonUtils.get(WEB_ROOT+"/menu/work/selectMenuName",{menuId:menuId},null);
			 return result.data;
		},
		//保存菜单
		saveMenu:function(){
				var uuid=$("#uuid").val();
				var menuId=$("#menuId").val();
				var menuNm=$("#menuNm").val();
				var pmenuId=$("#pmenuId").val();
				var menuUrl=$("#menuUrl").val();
				var sort=$("#sort").val();
				if(menuId==null||menuId==""){
					 layer.msg('请填写完整后保存！', {icon: 5});
	        		 return;
				}
				if(menuNm==null||menuNm==""){
					layer.msg('请填写完整后保存！', {icon: 5});
	        		return;
				}else{
			    	var data={"uuid":uuid,"menuId":menuId,"menuNm":menuNm,"pmenuId":pmenuId,"menuUrl":menuUrl,"sort":sort};
			    	var result=commonUtils.post(WEB_ROOT+"/menu/work/saveMenu",data,false,"保存");
					if(result.data>0){	
						layer.msg('保存成功！', {icon: 1});
						setTimeout(function(){location.href=WEB_ROOT+"/module/sysmanager/menu/menuInfo.jsp";},1000);
					}
			    }
				
		}

}
$(function(){
	var p = $(window).height();	
	var contextH = p-$("#headerMenudiv").height();
	//此处因easyui样式导致自适应高度加上头部后显示不出来，所以将window高度减去头部高度
	$("#Menu").height(contextH); 
	menu.menuList();
	$("#queryMenu").click(function(){
		menu.QueryMenu();
	});
	$("#refreshMenu").click(function(){
		menu.menuList(null);
	});
	
	$('#keywo').bind('keypress',function(event){
        if(event.keyCode == "13") {
        	menu.QueryMenu();
        }
    });
	$("#saveMenu").click(function(){
		$("#modalMenu").modal();
		$("#insertMenu").show();
		$("#updateMenu").hide();
		$('#form_data_Menu')[0].reset();
		//取消所有选中事件
		var treeObj = $.fn.zTree.getZTreeObj("menuZtree");//根据 treeId 获取 zTree 对象   
		treeObj.expandAll(false);//折叠全部节点,参数为true时表示展开全部节点  
		$("#pmenuId").val("");
		//treeObj.refresh();//刷新zTree，实现不选中任何节点 
		treeObj.cancelSelectedNode();//取消选中状态
		var nodes = treeObj.getSelectedNodes();
		treeObj.checkNode(nodes);
		
	});
	$("#insertMenu").click(function(){
		var menuId=$("#menuId").val();
		var result=commonUtils.get(WEB_ROOT+"/menu/work/selectMenuName",{menuId:menuId},null);
		//查询数据库是否已有此菜单
		if(result.data!=null){
				 layer.alert('此菜单重复,请重新填写！', {
	    			 icon: 5,
	    			 title: "提示"
	    		 });
		}else{
			menu.saveMenu();
		}		
	});
	//修改菜单
	$("#updateMenu").click(function(){
		$("#insertMenu").hide();
		$("#updateMenu").show();
		menu.saveMenu();
	});
});