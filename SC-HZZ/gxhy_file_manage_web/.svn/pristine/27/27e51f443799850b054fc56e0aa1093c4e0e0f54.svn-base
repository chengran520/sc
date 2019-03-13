var updateProject={
		updateDetail:function(){
			var projectResult=commonUtils.post(WEB_ROOT+"/file/projectFile/DetailProject",{"uuid":id},false);
			if(projectResult.flag){
				//回显部门
			    $("#type1 option").each(function(){
       			   if($.trim($(this).val()) ==  $.trim(projectResult.data.type)){
       			      $(this).attr('selected', 'selected');
	       	        }
		       	});	
			    $("#uuid").val(projectResult.data.uuid);
				$("#projectName1").val(projectResult.data.projectName);
				//$("#startTime1").val(projectResult.data.startTime);
				//$("#endTime1").val(projectResult.data.endTime);   
			     $("#describe1").html(projectResult.data.describe);
			}
		},
		updateProject:function(){
     	   var data = $("#form_project1").serializeArray();
     	   console.log(JSON.stringify(data))
     	   var cont=ue.getContent();
 		   var type=$("#type1").val();
 		   if(type==null||type==""){
 			   layer.msg('请填写完整后保存！', {icon: 5});
     		   return;
 		   }
     	   if(data[0].value == null || data[0].value == ""){
     		   layer.msg('请填写完整后保存！', {icon: 5});
     		   return;
     	   }
     	   if(data[1].value == null || data[1].value == ""){
     		   layer.msg('请填写完整后保存！', {icon: 5});
     		   return;
     	   }
     	   if(data[2].value== null || data[2].value== ""){
     		   layer.msg('请填写完整后保存！', {icon: 5});
     		   return;
     	   }
     	   if(data[3].value== null || data[3].value== ""){
     		   layer.msg('请填写完整后保存！', {icon: 5});
     		   return;
     	   }
     	  if(cont==null|| cont==""){
 			   layer.msg('请填写完整后保存！', {icon: 5});
     		   return;
	   	  }else{
 		   commonUtils.post(WEB_ROOT+"/file/projectFile/saveOrUpdateProject",data,false,"保存");
 		   if(commonUtils.flag){	
    				layer.msg('保存成功！', {icon: 1});
    				setTimeout(function(){location.href=WEB_ROOT+"/filemanage/projectCopywriter/projectFile.jsp";},1000);
    			} 
 	     }
      }

}
$(function(){
	var dictTp="PROJECT";
	var result=commonUtils.get(WEB_ROOT+"/dict/work/getBusineTypes",{"dictTp":dictTp},null);	
	var html="<option selected  disabled='disabled'>请选择</option>";
 	$.each(result.data,function(i,v){
 		html+="<option value="+this.dictVal+">"+this.dictNm+"</option>";
 	});
 	$("#type1").html(html);
	/*$("#startTime1,#endTime1").click(function(){
		$("#change").hide();
	})*/
	var h= window.screen.height;
 	if(h>=1050){
 		$("#describe1").height(h/2);
 	}else{
 		$("#describe1").height(h/2-20);
 	}
	$(".content").height(h- 40);
	
	updateProject.updateDetail();
	//formatter_date_utils.initDatePicker2("startTime1","endTime1");
	 //修改保存
	$("#insert1Project").click(function(){
		updateProject.updateProject();
	});
})