var addSystem={
		saveOrUpdateFile:function(id){
			var fileType=$("#fileType").val();
		/*	var fileGrade=$(".red").length;//评星等级
*/			var fileGradeType=$('#fileGradeType option:selected').val();
			if(fileGradeType=="请选择"){
				fileGradeType==null;
			}
			var fileOpen=$("input[type='radio']:checked").val();
			var fileTitle=$("#fileTitle").val();
			var ue = UE.getEditor('container');//编辑器内容
			var fileContent=ue.getContent();
			if(fileType==null||fileType==""){
				layer.msg('请填写完整后再保存！', {icon: 5});
				return;
			}
			if(fileTitle==null||fileTitle==""){
				layer.msg('请填写完整后再保存！', {icon: 5});
				return;
			}
			if(fileContent==null||fileContent==""){
				layer.msg('请填写完整后再保存！', {icon: 5});
				return;
			}else{
				 var data={'fileType':fileType,'fileGradeType':fileGradeType,'fileOpen':fileOpen,'fileTitle':fileTitle,'fileContent':fileContent,'uuid':id};
				 commonUtils.post(WEB_ROOT+"/file/system/saveOrUpdateFile",data,false,"保存");
					if(commonUtils.flag){
						layer.msg('保存成功！', {icon: 1});
						setTimeout(function(){location.href=WEB_ROOT+"/filemanage/systemFile/systemFile.jsp";},1000);
			        }
			}
	  },
	  /*optionClass:function(){
		  $('#fileGradeType').change(function(){ 
				if($(this).children('option:selected').val()==1){
					$("#star").show();
					$("#star a span").click(function(){
						if($(this).hasClass("glyphicon glyphicon-star red")){
							$(this).attr("class","glyphicon glyphicon-star-empty");
						}else{
							$(this).attr("class","glyphicon glyphicon-star red");
						}
					});
				}else{
					$("#star").hide();
				}
			});
	  }
*/
}	
$(function(){	
	/*addSystem.optionClass();*/
	var h= window.screen.height;
 	if(h>=1050){
 		$("#container").height(h/2);
 	}else{
 		$("#container").height(h/2-80);
 	}
 	$(".content").height(h - 40);
 	$("#saveFile").click(function(){
		addSystem.saveOrUpdateFile();	
	});
})