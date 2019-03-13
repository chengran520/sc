var role={	   
	data:null,	
	loadRoleData:function(opt){
		formatter_date_utils.initDatePickerTm("creatTime");
		easyui_datagrid_util.fit=false;
		easyui_datagrid_util.singleSelect=true;
		easyui_datagrid_util.pageSize = 20;
		easyui_datagrid_util.create_datagrid_options("patrol_catalogRole", WEB_ROOT+ "/role/work/getRoleList",role,opt);
	},
	QueryRole:function(){
		var keyword = $("#keyword").val();
		var creatTime=$("#creatTime").val();
		var data = {'keyword':keyword,'creatTime':creatTime};
		 var opt={data:data}; 
		 this.loadRoleData(opt);
	},
	formatRoleTm:function(value, row, index){
		return formatter_date_utils.formatterStrTime(value,0,0);
	},
	formatRoleDesc:function(value, row, index){
		if(value==null||value==""){
			return "暂无";
		}else{
			return value;
		}
	},
	formatRoleRepeat:function(value, row, index){
		var uuid=row.uuid;
		var roleId=row.roleId;
        //分配权限
        var colorPermission="#FD5F3B";
        var permission="分配权限";
        var id1="permission";
        //修改
        var colorUpdate="#008B00";
        var strUpdate="修改";
        var id2="UpdateId";
        //删除
        var colorDelete="#9B30FF";
        var strDelete="删除";
        var id3="DeleteId";
        var role =uuid+"," +roleId;
		return "<a style='color:"+colorPermission+";'  class='colorDetail'   id="+id1+" onclick='rolePermission(\""+roleId+"\");'>"+permission+"</a>|<a class='colorUpdate'  style='color:"+colorUpdate+";'  id="+id2+" onclick='role.updateRoles(\""+uuid+"\")'>"+strUpdate+"</a>|<a   class='colorDelete'  style='color:"+colorDelete+";'   id="+id3+" onclick='role.deleteRole(\""+role+"\");'>"+strDelete+"</a>";
	},
	updateRoles:function(uuid){
		 $("#UpdateModal").modal();
		 var result= commonUtils.get(WEB_ROOT+"/role/work/roleDetail",{"uuid":uuid},null); 
		 if(result.flag){
			 $("#uuid").val(result.data.uuid);
			 $("#roleId_update").val(result.data.roleId);
			 $("#roleName_update").val(result.data.roleName);
			 $("#roleDes_update").val(result.data.roleDes);	
			//修改
			$("#UpdateRole").click(function(){
		   	    var roleId=$("#roleId_update").val();
		   	    var roleName=$("#roleName_update").val();
		   		var roleDes=$("#roleDes_update").val();
		   	    if(roleId==null||roleId==""){
		   	    	layer.msg('请填写完整后保存！', {icon: 5});
	        		return;
		   	    }else{
		   	    	var resultData=commonUtils.post(WEB_ROOT+"/role/work/saveRole",{uuid:uuid,roleId:roleId,roleName:roleName,roleDes:roleDes,sroleId:result.data.roleId},false,"保存");
					if(resultData.flag){	
						 layer.msg('保存成功！', {icon: 1});
						setTimeout(function(){location.href=WEB_ROOT+"/module/sysmanager/role/roleInfo.jsp";},1000);
					}else{
						 layer.msg('保存失败！', {icon: 5});
					}
		   		}	
			});
		 }   
	 },
	deleteRole:function(role){
		var uuid=role.split(",")[0];
		var roleId=role.split(",")[1];
		 var result=commonUtils.post(WEB_ROOT+"/role/work/selectUserByRoleId",{"roleId":roleId},null);
    	 //有用户
         if(result.data>0){
        	 layer.alert('此角色下有用户不能删除！', {
    			 icon: 6,
    			 title: "提示"
    		 });
         }else{
        	layer.alert('你确定要删除吗？', {
    		    skin: 'layui-layer-molv' 
    		    ,closeBtn: 1    
    		     ,btn: ['确定','取消']
    		     ,icon: 5   // icon
    		     ,yes:function(){
    	        	 commonUtils.post(WEB_ROOT+"/role/work/deleteRole",{uuid:uuid,roleId:roleId},false,"删除");
					 layer.msg('删除成功！', {icon: 1});
					 setTimeout(function(){
    						location.href=WEB_ROOT+"/module/sysmanager/role/roleInfo.jsp";},1000);
    				 }    		              		    	 
    			    ,btn2:function(){
    			   	     layer.close();
    			    }
    	     });
         }	
   }
}
$(function(){
	var p = $(window).height();	
	var contextH =$("#headerRolediv").height();
	$("#patrol_catalogRole").height(p-contextH); 
	   role.loadRoleData(null);
	$("#queryRole").click(function(){
		role.QueryRole();
	});
	$('#keyword').bind('keypress',function(event){
        if(event.keyCode == "13") {
        	role.QueryRole();
        }
    });
    $('#creatTime').bind('keypress',function(event){
        if(event.keyCode == "13"){
        	role.QueryRole();
        }
    });
    $("#refreshRole").click(function(){
    	 role.loadRoleData(null);
    });
});