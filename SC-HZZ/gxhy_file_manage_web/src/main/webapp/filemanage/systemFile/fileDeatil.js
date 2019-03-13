	var fileDetail={
			detailFile:function(){
				var Deatil=commonUtils.get(WEB_ROOT+"/file/system/fileDeatil",{'uuid':uuid},null);
				if(Deatil.flag){
					$("#title").html(Deatil.data.fileTitle);
					$("#issuser").html("创建人:"+Deatil.data.issuser);
					$("#creatTime").text("创建时间 :"+formatter_date_utils.formatterStrTime(Deatil.data.creatTime,null,3));
					$("#content").html(Deatil.data.fileContent.replace("pt",""));
				  
				}
		    },
	        deleteSystem:function(){
	        	layer.alert('你确定要删除吗？', {
	    		    skin: 'layui-layer-molv' 
	    		    ,closeBtn: 1    
	    		     ,btn: ['确定','取消']
	    		     ,icon: 5  // icon
	    		     ,yes:function(){
	    	        	 var resultData=commonUtils.post(WEB_ROOT+"/file/system/deleteSystem",{uuid:uuid},false,"删除");
	    	        	 console.log(resultData.data);
	    	        	 if(resultData.data>0){	
	    					 layer.msg('删除成功！', {icon: 1});
	    					 location.href=WEB_ROOT+"/filemanage/systemFile/systemFile.jsp";
	    				 }else{
	    					 layer.msg('删除失败！', {icon: 5});
	    					 layer.close();
	    				 }      		    	 
	    		       },btn2:function(){
	    			   	     layer.close();
	    			    }
	    	   });
	        
	        }
	}
	$(function(){
		fileDetail.detailFile();	
		var height=$(window).height() - 50;
		$(".bodyContent").height(height);		
		$("#divFont a").click(function(){
			  var contentFont = $("#content").css("font-size");
			  var FontSize = parseFloat(contentFont , 10);
			   var unit =contentFont.slice(-2); //获取单位
			   var cName = $(this).attr("class");
			   if(cName == "bigger"){
				    FontSize+=4;
			    }else if(cName == "midden"){
			    	FontSize+=2;
			    }else if(cName == "smaller"){
			    	FontSize-= 3;
			    }else{
			    	
			    }
			    $("#content").css("font-size", FontSize+ unit);
		});
		 $("#close").click(function(){
			 location.href=WEB_ROOT+"/filemanage/systemFile/systemFile.jsp";
			});
		 $("#div_color a").click(function(){
			 var bgcolor = $("#content p").css("background-color");
			 var bgcolor1 = $("#content span").css("background-color");
			 var bgcolor2 = $("#content").css("background-color");
			 var bgcolor3 = $("#content td").css("background-color");
			 var clssName = $(this).attr("class");
			 if(clssName == "color_xrh"){//杏仁黄
				 bgcolor = "rgb(250, 251, 230)";
				 bgcolor1 = "rgb(250, 251, 230)";
				 bgcolor2 = "rgb(250, 251, 230)";
				 bgcolor3 = "rgb(250, 251, 230)";
			 }else if(clssName == "color_qyh"){//秋叶褐
			     bgcolor = "rgb(255, 242, 226)";
			     bgcolor1 = "rgb(255, 242, 226)";
			     bgcolor2 = "rgb(255, 242, 226)";
			     bgcolor3 = "rgb(255, 242, 226)";
			 }else if(clssName == "color_yzh"){//胭脂红
				 bgcolor = "rgb(253, 230, 224)";
				 bgcolor1 = "rgb(253, 230, 224)";
				 bgcolor2 = "rgb(253, 230, 224)";
				 bgcolor3 = "rgb(253, 230, 224)";
			 }else if(clssName == "color_jml"){//芥末绿
				 bgcolor = "rgb(243, 255, 225)";
				 bgcolor1 = "rgb(243, 255, 225)";
				 bgcolor2 = "rgb(243, 255, 225)";
				 bgcolor3 = "rgb(253, 230, 224)";
			 }else if(clssName == "color_tl"){//天蓝
				 bgcolor = "rgb(218, 250, 254)";
				 bgcolor1 = "rgb(218, 250, 254)";
				 bgcolor2 = "rgb(218, 250, 254)";
				 bgcolor3 = "rgb(253, 230, 224)";
			 }else if(clssName == "color_xq"){//雪青
				 bgcolor = "rgb(233, 235, 254)";
				 bgcolor1 = "rgb(233, 235, 254)";
				 bgcolor2 = "rgb(233, 235, 254)";
				 bgcolor3 = "rgb(253, 230, 224)";
			 }else if(clssName == "color_hui"){//灰
				 bgcolor = "rgb(234, 234, 239)";
				 bgcolor1 = "rgb(234, 234, 239)";
				 bgcolor2 = "rgb(234, 234, 239)";
				 bgcolor3 = "rgb(253, 230, 224)";
			 }else if(clssName == "color_yhb"){//银白色
				 bgcolor = "rgb(255, 255, 255)"; 
				 bgcolor1 = "rgb(255, 255, 255)";
				 bgcolor2 = "rgb(255, 255, 255)";
				 bgcolor3 = "rgb(253, 230, 224)";
			 }else{
				 
			 }
			 $("#content p").css("background-color", bgcolor);
			 $("#content span").css("background-color", bgcolor1);
			 $("#content").css("background-color", bgcolor2);
			 $("#content td").css("background-color", bgcolor3);
		 });
		 
		   //修改
			$("#update_system").click(function(){
				location.href=WEB_ROOT+"/filemanage/systemFile/updateSystem.jsp?id="+uuid;
			});
			
		   //删除
			$("#delete_system").click(function(){
				fileDetail.deleteSystem();
			});
	});
	
