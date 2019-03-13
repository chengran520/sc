var addResource={
		//类型
		typeResource:function(){
			var dictTp="PROJECT";
			var result=commonUtils.get(WEB_ROOT+"/dict/work/getBusineTypes",{"dictTp":dictTp},null);	
			if(result.flag){
				var html="<option selected  disabled='disabled'>请选择</option>";
			 	$.each(result.data,function(i,v){
			 		html+="<option value="+this.dictVal+">"+this.dictNm+"</option>";
			 	});
			 	$("#type").html(html);
			}
		},
		addResource:function(){
			var type=$("#type").val();
			var projectName=$("#projectName").val();
			var startTime=$("#startTime").val();
			var endTime=$("#endTime").val();
			var isForever=$('input[name="isForever"]:checked').val();
			var describe=ue.getContent();
			var fileType=$("#fileType").val();
			if(type==null||type==""){
			   layer.msg('请填写完整后保存！',{icon: 5});
    		   return;
			}
			if(projectName==null||projectName==""){
			   layer.msg('请填写完整后保存！',{icon: 5});
    		   return;
			}
			if(describe==null||describe==""){
				layer.msg('请填写完整后保存！',{icon: 5});
	    		return;
			}else{
				var data={"type":type,"projectName":projectName,"startTime":startTime,"endTime":endTime,"isForever":isForever,"describe":describe,"fileType":fileType};
				commonUtils.post(WEB_ROOT+"/file/projectFile/saveOrUpdateProject",data,false,"保存");
    		    if(commonUtils.flag){	
       				layer.msg('保存成功！', {icon: 1});
       				setTimeout(function(){location.href=WEB_ROOT+"/emergency/resourceShare/resourceShare.jsp";},1000);
       			} 
			}
		}
}

$(function(){
	formatter_date_utils.initDatePicker2("startTime","endTime");
	addResource.typeResource();	
	var h= window.screen.height;
 	if(h>=1050){
 		$("#container").height(h/2 - 20);
 	}else{
 		$("#container").height(h/2-80);
 	}
	  //方法名称：获取当前选中的值；icheck-radio change事件；点击事件;
	$("#forever :radio").change(function (){               
	   var value=$(this).val();
		if(value==0){ 
			$("#dispdiv").hide();
		}else{
			$("#dispdiv").show();
		}                     
	 });
	$("#saveResource").click(function(){
		addResource.addResource();
	});
	
});