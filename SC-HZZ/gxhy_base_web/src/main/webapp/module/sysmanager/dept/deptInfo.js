var dept={
		data:null,	
		deptInfo:function(opt){
			easyui_datagrid_util.fit=false;
			easyui_datagrid_util.singleSelect=true;
			easyui_datagrid_util.pageSize = 20;
			easyui_datagrid_util.create_datagrid_options("patrol_catalogDept", WEB_ROOT+ "/dept/work/getDeptList",dept,opt);
		},
		QueryDept:function(){
			var keyword = $("#keywordDept").val();
			var data = {"keyword":keyword};
			var opt={data:data};
			this.deptInfo(opt);
		},
		selectParentDept:function(){
			var result=commonUtils.get(WEB_ROOT+"/dept/work/getPDept",null,null);			
			if(result.flag){
		        return result.data;
		    }
		},
		optiondata:function(data){
			var html="<option value=''>-------------------------- 请选择  --------------------------</option>";
	    	$.each(data,function(i,v){	
	    		html+="<option value="+this.deptId+">"+this.deptNm+"</option>";
	    	});
	    	$("#pdeptId").html(html);
		},		
		formatDeptRepeat:function(value, row, index){
			var uuid=row.uuid;
	        var colorUpdate="#008B00";
	        var strUpdate="修改";
	        var id2="UpdateId";
	        var colorDelete="#9B30FF";
	        var strDelete="删除";
	        var id3="DeleteId";
			return "<a class='colorUpdate'  style='color:"+colorUpdate+";'  id="+id2+" onclick='dept.updateDept(\""+uuid+"\")'>"+strUpdate+"</a>|<a   class='colorDelete'  style='color:"+colorDelete+";'   id="+id3+" onclick='dept.deleteDept(\""+uuid+"\");'>"+strDelete+"</a>";
		},
		updateDept:function(uuid){
			 var result= commonUtils.get(WEB_ROOT+"/dept/work/deptDetail",{"uuid":uuid},null);	
			 if(result.flag){
				 var deptPId=result.data.deptPId;
				 $("#uuid").val(result.data.uuid);
				 $("#deptId").val(result.data.deptId);
				 $("#deptNm").val(result.data.deptNm);
				 $("#orderNum").val(result.data.orderNum);
				 var data=dept.selectParentDept();
				 dept.optiondata(data);
				 $("#pdeptId option").each(function(){
       			   if($.trim($(this).val()) ==  $.trim(deptPId)){
       			      $(this).attr('selected', 'selected');
	       	      }
	       		}); 
				 $("#modalDept").modal();	
				 $("#insertDept").hide();
				 $("#updateDept").show();
				//修改
				$("#updateDept").click(function(){
					dept.saveDept();
				});
			 }
		},
		deleteDept:function(uuid){
			 var result= commonUtils.get(WEB_ROOT+"/dept/work/selectDeptById",{"uuid":uuid},null);	
			 var count=result.data;
			 if(count>0){
        		 layer.msg('部门有用户存在,不能删除！', {icon: 5});
        	 }else{
        		 layer.alert('你确定要删除吗？', {
         		    skin: 'layui-layer-molv' 
         		    ,closeBtn: 1    
         		     ,btn: ['确定','取消']
         		     ,icon: 5   // icon
         		     ,yes:function(){
         	        	 var resultData=commonUtils.post(WEB_ROOT+"/dept/work/deleteDept",{"uuid":uuid},false,"删除");
         	        	 if(resultData.data>0){	
        					 layer.msg('删除成功！', {icon: 1});
        					 $('#patrol_catalogDept').datagrid('load');  
        				 }else{
        					 layer.msg('删除失败！', {icon: 5});
        					 layer.close();
        				 }
         		       }
         			    ,btn2:function(){
         			   	     layer.close();
         			    }
         	        }); 
                }
		},
		formatterDeptTm:function(value, row, index){
			return formatter_date_utils.formatterStrTime(value,0,0);
		},
		saveDept:function(){
			var uuid=$("#uuid").val();
			var deptId=$("#deptId").val();
			var deptNm=$("#deptNm").val();
			var pdeptId=$("#pdeptId option:selected").val();
			var orderNum=$("#orderNum").val();
			if(deptId==null||deptId==""){
				layer.msg('请填写完整后保存！', {icon: 5});
				return;
			}
			if(deptNm==null||deptNm==""){
				layer.msg('请填写完整后保存！', {icon: 5});
				return;
			}else{
				var data={"uuid":uuid,"deptId":deptId,"deptNm":deptNm,"pdeptId":pdeptId,"orderNum":orderNum};
				var resultData=commonUtils.post(WEB_ROOT+"/dept/work/saveDept",data,false,"保存");
				if(resultData.flag){
					layer.msg('保存成功！', {icon: 1});
					setTimeout(function(){location.href=WEB_ROOT+"/module/sysmanager/dept/deptInfo.jsp";},1000);
				}
			}
			
			
		}	
}
$(function(){
	var p = $(window).height();	
	var contextH = p-$("#headerDeptdiv").height();
	//此处因easyui样式导致自适应高度加上头部后显示不出来，所以将window高度减去头部高度
	$("#patrol_catalogDept").height(contextH); 
    dept.deptInfo();
	$("#queryDept").click(function(){
		dept.QueryDept();
	});
	$("#refreshDept").click(function(){
		 dept.deptInfo();
	});
   $('#keywordDept').bind('keypress',function(event){
	    if(event.keyCode == "13"){
	    	dept.QueryDept();
	    }
   });
	$("#saveDept").click(function(){
		$("#insertDept").show();
		$("#updateDept").hide();
		$("#deptId").val("");
		$("#uuid").val("");
		$("#deptNm").val("");
		$("#orderNum").val("");
		var data=dept.selectParentDept();
		dept.optiondata(data);
		$("#modalDept").modal();
	});
	$("#insertDept").click(function(){
		dept.saveDept();
	});
 
});