	var updateDetail={
		    updateSystem:function(){
	        	var updateDetail=commonUtils.get(WEB_ROOT+"/file/system/fileDeatil",{'uuid':id},null);
	        	if(updateDetail.flag){
	        		$("#fileTitle").val(updateDetail.data.fileTitle);
			    	$("#container").html(updateDetail.data.fileContent);
	        		$("#fileType option").each(function(){
	         			   if($(this).val() == updateDetail.data.fileType){
	         			      $(this).attr('selected', 'selected');
	         	      }
	         		}); 
	        		 $("input[type=radio][name=fileOpen]").each(function() {
		         			  if($(this).val()==updateDetail.data.fileOpen){
		         				 $(this).attr("checked", true); 
							 }
	         		 });	        		
	        		 
	        		/**
	        		 * 有个小问题必须重新选择一下
	        		 */
	        		/*$("#fileGradeType option").each(function(){
	         			   if($(this).val() == updateDetail.data.fileGradeType){
	         			      $(this).attr('selected', 'selected');
	         			      if($(this).val()==1){
	         			    	  $("#star").show();
	         			    	  $("#star a span").each(function(){
	         			    		 if(updateDetail.data.fileGrade==1){
		         			    		$("#star_first").attr("class","glyphicon glyphicon-star");
		         			    		$("#star_first").toggleClass('red');
		         			    	  }else if(updateDetail.data.fileGrade==2){
		         			    		 $("#star_first,#star_second").attr("class","glyphicon glyphicon-star");
		         			    		 $("#star_first,#star_second").toggleClass('red');  
		         			    	  }else if(updateDetail.data.fileGrade==3){
		         			    		 $("#star_first,#star_second,#star_third").attr("class","glyphicon glyphicon-star");
		         			    		 $("#star_first,#star_second,#star_third").toggleClass('red');
		         			    	  }else if(updateDetail.data.fileGrade==4){
		         			    		 $("#star_first,#star_second,#star_third,#star_fourth").attr("class","glyphicon glyphicon-star");
		         			    		$("#star_first,#star_second,#star_third,#star_fourth").toggleClass('red'); 
		         			    	  }else{
		         			    		 $(this).attr("class","glyphicon glyphicon-star");
			         			    		$(this).toggleClass('red');
		         			    	  }
	         			    		$("#star a span").click(function(){
	         							$(this).attr("class","glyphicon glyphicon-star");
	         							$(this).toggleClass('red');
	         						});
	         			    	  });
	         			    	
	         			    	 
	         			      }
	         	      }
	         		});
	        		
	        	}
	        }*/	
	    }
	}	        
}
	$(function(){
		updateDetail.updateSystem();
		var h= window.screen.height;
	 	if(h>=1050){
	 		$("#container").height(h/2);
	 	}else{
	 		$("#container").height(h/2-80);
	 	}
	 	$(".content").height(h - 40);
	 	
		$("#save1File").click(function(){
			addSystem.saveOrUpdateFile(id);	
		});
		
		$("#returnFile").click(function(){
			location.href="systemFile.jsp";
		});
		 /*$('#fileGradeType').change(function(){ 
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
			});*/
	});
	
