var addLawFile={
		//类型
		typeData:function(){
			var dictTp="PROJECT";
			var result=commonUtils.get(WEB_ROOT+"/dict/work/getBusineTypes",{"dictTp":dictTp},null);	
			if(result.flag){
				return result.data;
			}
		},
	   	saveOrUpdateLaw:function(){
        	   var data = $("#form_project").serializeArray();
        	   var id={name:"uuid",value:id};
        	   var content=ue.getContent();
    		   var type=$("#type").val();
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
        	  if(content==null|| content==""){
    			   layer.msg('请填写完整后保存！', {icon: 5});
        		   return;
	   		}else{
    		   commonUtils.post(WEB_ROOT+"/file/projectFile/saveOrUpdateProject",data,false,"保存");
    		   if(commonUtils.flag){	
       				layer.msg('保存成功！', {icon: 1});
       				setTimeout(function(){location.href=WEB_ROOT+"/filemanage/law_file/law_file.jsp";},1000);
       			} 
    	     }
         }
 
	}

 $(function(){
	 	var data=addLawFile.typeData();
	 	var html="<option selected  disabled='disabled'>请选择</option>";
	 	$.each(data,function(i,v){
	 		html+="<option value="+this.dictVal+">"+this.dictNm+"</option>";
	 	});
	 	$("#type").html(html);
		var h= window.screen.height;
	 	if(h>=1050){
	 		$("#container").height(h/2);
	 	}else{
	 		$("#container").height(h/2-40);
	 	}
		$(".content").height(h - 40);
		//formatter_date_utils.initDatePicker2("startTime","endTime");
	    //增加执法文件
		$("#saveLawProject").click(function(){
			addLawFile.saveOrUpdateLaw();
		}); 
	   
	}); 
	