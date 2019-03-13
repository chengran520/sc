var addStraFile={
		riverArr:[],
       //查询河流信息
     	selectRiverInfoList:function(){	
     		 var result= commonUtils.get(WEB_ROOT+"/merit/perf/selectRiverInfoList",null,null);
     	    	 if(result.flag){
     	    		 for ( var i = 0; i <result.data.length; i++){
     	    			     this.riverArr.push(result.data[i].rvNm);
     	    			 	$("#riverInfoList").append("<option value='"+result.data[i].rvNm+"' data-id='"+result.data[i].rvCd+"'>"); 
     	    		 }
     	    			 		 
     	    	}
     	},
     	insertStraRiver:function(){
    		var data = $("#form_str").serializeArray();
    		var straFileTitle = $("#straFileTitle").val();
    		if(straFileTitle == null || straFileTitle == ''){
    			layer.msg('策略名称为为必填项!', {icon: 5});
    			return;
    		}
    		var straFileContent=ue.getContent(); 		
    		if(straFileContent == null || straFileContent == ''){
    			layer.msg('策略内容为必填项!', {icon: 5});
    			return;
    		}
    		var riverInfo=$("#rvNm").val();
    		if(riverInfo == null || riverInfo == ''){
    			layer.msg('河流名称为必填项!', {icon: 5});
    			return;
    		}
    		var type=$("#type option:selected");
    		if(type == null || type == ''){
    			layer.msg('类型为必选项!', {icon: 5});
    			return;
    		}
    		
    		var index = $.inArray(riverInfo, addStraFile.riverArr);   //结果：index=1
        	if(index<0){
        		 layer.msg('不存在此河流，请重新选择！', {icon: 5});
        		 return;
        	}     
    		var resultData=commonUtils.post(WEB_ROOT+"/data/StraRiver/insertStRiver",data,false,"保存");
    		if(resultData.flag){	
    			layer.msg('保存成功！', {icon: 1});
    			setTimeout(function(){location.href=WEB_ROOT+"/straRiver/zhcl/straRiver.jsp";},1000);
    		}else{
    			layer.alert('请填写完整信息！', {
    	   			 icon: 5,
    	   			 title: "提示"
      		    });
    		}	
    	}
 
	}

 $(function(){
	 addStraFile.selectRiverInfoList();
	 	$("#saveStrFile").click(function(){
	 		addStraFile.insertStraRiver();
	 	});

	 	//将河流输入隐藏的input
	 	$("#rvNm").on("input",function(){
	 	    var $options=$("#riverInfoList").children();
	 	    for(var i=0;i<$options.length;i++){
	 	        if($options.eq(i).val().trim()==$(this).val().trim()){
	 	            $("#rvCd").val($options.eq(i).attr("data-id"));
	 	            break;
	 	        }else{
	 	            $("#rvCd").val($(this).val());
	 	        }
	 	    }
	 	});
	}); 

