var plan={
		treeId:null,
		selectRivers:function(){
			var result= commonUtils.get(WEB_ROOT+"/data/center/monitor/getRivers",null,null);
			var optionstring="<option  disabled='' value=''>-------------------------- 请选择  --------------------------</option>";
			var data = result.data;
			if(data!=null){
				$.each(data,function(key,value){  
					 optionstring += "<option value="+this.rvCd+">"+this.rvNm+"</option>"; 
	                $("#selectRiver").html(optionstring); 
				});
		    }
		},
		getAllLakes:function(addvcd,keyword){
			var result= commonUtils.get(WEB_ROOT+ "/data/center/monitor/selectLakes",{"addvcd":addvcd,"keyword":keyword},null);
			if(result.flag){
				var html="";
				var data=result.data;
				var width=$("#plandiv").width();
				var itmwidth=width/4-20+"px";
				$.each(result.data,function(i,v){
					var src1=WEB_ROOT+'/common/images/command/ddry.png';
					var src2=WEB_ROOT+'/common/images/command/delete2.png';	
					var src3=WEB_ROOT+'/common/images/command/zuzhi.png';
					html+="<div class='ddzh_div' style='width:"+itmwidth+"'>";
					html+=" <div class='divs1'>";
					html+="<div class='leftdiv'>";
					html+=" <div class='right_topdiv'>";				
					html+="<img src="+src1+"  class='imgdiv'/>";
					html+=" </div></div>";
					html+="<div style='height:40px;'>";
					html+="<div class='divs2'>";						
					html+="<img src="+src2+"  class='divs3'   onclick='plan.deletePlanStep(\""+this.uuid+"\",\""+this.rvCd+"\")'/>";
					html+="</div></div>";
					html+="<div  class='divs4'>"+this.name+"</div>";
					html+="<div  class='divs5'>";					
					html+="<img alt='' src="+src3+"  class='imgdiv2’  style='width:15px;height:15px;'>";
					html+="<span class='span1'>"+this.addvnm+"</span><span class='span1' style='margin-left:10px;'>"+this.rvNm+"</span></div>";				
					html+="</div><div  class='span2'>";
					var width=$(window).width();
					
					if(width==1920){
						if(this.stepContent!=null&&this.stepContent!=""){
							   html+="<span class='span3' style='padding:7px 67px;'    id='content'  onclick='plan.detailStepFile(\""+this.rvNm+"\",\""+this.name+"\",\""+this.reportUserNM+"\",\""+this.stepContent+"\")'>响应详情</span>";
						}else{
							html+="<span class='span3' style='padding:7px 67px;'   id='xiangying'  onclick='plan.addRespond(\""+this.uuid+"\",\""+this.rvNm+"\",\""+this.name+"\",\""+this.reportUserNM+"\")'>预案响应</span>";
						}
						html+="<span class='span3' id='detail'     style='padding:7px 67px;'   onclick='plan.showDetail(\""+this.rvNm+"\",\""+this.prewAddes+"\");'>查看详情</span>";
					}else if(width==1680){
						if(this.stepContent!=null&&this.stepContent!=""){
							   html+="<span class='span3' style='padding:7px 34px;'    id='content'  onclick='plan.detailStepFile(\""+this.rvNm+"\",\""+this.name+"\",\""+this.reportUserNM+"\",\""+this.stepContent+"\")'>响应详情</span>";
						}else{
							html+="<span class='span3' style='padding:7px 34px;'   id='xiangying'  onclick='plan.addRespond(\""+this.uuid+"\",\""+this.rvNm+"\",\""+this.name+"\",\""+this.reportUserNM+"\")'>预案响应</span>";
						}
					html+="<span class='span3' id='detail' style='padding:7px 34px;'  onclick='plan.showDetail(\""+this.rvNm+"\",\""+this.prewAddes+"\");'>查看详情</span>";
					}else if(width==1600){
						if(this.stepContent!=null&&this.stepContent!=""){
							   html+="<span class='span3' style='padding:7px 50px;'    id='content'  onclick='plan.detailStepFile(\""+this.rvNm+"\",\""+this.name+"\",\""+this.reportUserNM+"\",\""+this.stepContent+"\")'>响应详情</span>";
						}else{
							html+="<span class='span3' style='padding:7px 50px;'   id='xiangying'  onclick='plan.addRespond(\""+this.uuid+"\",\""+this.rvNm+"\",\""+this.name+"\",\""+this.reportUserNM+"\")'>预案响应</span>";
						}
					html+="<span class='span3' id='detail' style='padding:7px 50px;'  onclick='plan.showDetail(\""+this.rvNm+"\",\""+this.prewAddes+"\");'>查看详情</span>";
					}else if(width==1440){
						if(this.stepContent!=null&&this.stepContent!=""){
							   html+="<span class='span3' style='padding:7px 24px;'    id='content'  onclick='plan.detailStepFile(\""+this.rvNm+"\",\""+this.name+"\",\""+this.reportUserNM+"\",\""+this.stepContent+"\")'>响应详情</span>";
						}else{
							html+="<span class='span3' style='padding:7px 24px;'   id='xiangying'  onclick='plan.addRespond(\""+this.uuid+"\",\""+this.rvNm+"\",\""+this.name+"\",\""+this.reportUserNM+"\")'>预案响应</span>";
						}
					html+="<span class='span3' id='detail' style='padding:7px 24px;'  onclick='plan.showDetail(\""+this.rvNm+"\",\""+this.prewAddes+"\");'>查看详情</span>";
					}else{
						if(this.stepContent!=null&&this.stepContent!=""){
							   html+="<span class='span3' style='padding:7px 18px;'    id='content'  onclick='plan.detailStepFile(\""+this.rvNm+"\",\""+this.name+"\",\""+this.reportUserNM+"\",\""+this.stepContent+"\")'>响应详情</span>";
						}else{
							html+="<span class='span3' style='padding:7px 18px;'   id='xiangying'  onclick='plan.addRespond(\""+this.uuid+"\",\""+this.rvNm+"\",\""+this.name+"\",\""+this.reportUserNM+"\")'>预案响应</span>";
						}
						html+="<span class='span3' id='detail' style='padding:7px 18px;'  onclick='plan.showDetail(\""+this.rvNm+"\",\""+this.prewAddes+"\");'>查看详情</span>";
					}	
					html+="</div></div> ";
				}); 
				$("#plandiv").html(html);
			}
		},
		showDetail:function(rvNm,prewAddes){
			var p = $(window).height();	
			var w = $(window).width();	
			   layer.open({
				  title :rvNm+' 应急预案',
				  type: 2,
				  content: 'preview2.jsp?prewAddes='+prewAddes,
				  area: [''+w+'px', ''+p+'px'],
				  maxmin: true
		   });
		},
		addRespond:function(uuid,rvNm,name,reportUserNM){
			$("#myModalLabelyaxy").html("预案响应");
			$("#respondModel").modal();
			$("#footer").show();
			$("#name").val(name);
			$("#reportUser").val(reportUserNM);
			$("#rvNm").val(rvNm);
			$("#uuid").val(uuid);
			$("#stepContent").removeAttr("readOnly"); 
			$("#stepContent").val('');
		},
		detailStepFile:function(rvNm,name,reportUserNM,stepContent){
			$("#myModalLabelyaxy").html("响应详情");
			$("#respondModel").modal();
			$("#footer").hide();
			$("#name").val(name);
			$("#reportUser").val(reportUserNM);
			$("#rvNm").val(rvNm);
			$("#stepContent").attr("readOnly",true); 
			$("#stepContent").val(stepContent);
		},
		updateRepond:function(){
			var uuid=$("#uuid").val();
	    	var stepContent=$("#stepContent").val();
	    	//更新预案
	    	var data={"uuid":uuid,"stepContent":stepContent};
	    	commonUtils.post(WEB_ROOT+"/data/center/monitor/updatePlanStep",data,false,"保存");
	    	if(commonUtils.flag){	
	    		 $('#respondModel').modal('hide');
	    		 layer.msg('保存成功！', {icon: 1});
				//查询所有的预案
			    plan.getAllLakes();
	    	}
	    
	    	
		},
		deletePlanStep:function(uuid,rvCd){
			layer.alert('你确定要删除吗？', {
				 skin: 'layui-layer-molv' 
    		     ,closeBtn: 1    
    		     ,btn: ['确定','取消']
    		     ,icon: 5  // i
			     ,yes:function(index){
		        	 commonUtils.post(WEB_ROOT+"/data/center/monitor/deletePlanStep",{"uuid":uuid,"rvCd":rvCd},false,"删除");
		        	 layer.msg('删除成功！', {icon: 1});
		        	 plan.getAllLakes();
		        	 layer.close(index);
			     },btn2:function(){
				   	 layer.close();
			     }
		     }); 
		},
		queryStep:function(addvcd){
			plan.treeId=addvcd;
			var keyword=$("#keyword").val();
			plan.getAllLakes(addvcd,keyword);
		},
		selectPlan:function(){
			var keyword=$("#keyword").val();
			plan.getAllLakes(plan.treeId,keyword);
		}
}
$(function(){
	var p = $(window).height();	
	var contextH = $("#plan_headerDiv").height();
	$("#div").height(p-contextH);
	$("#tree,#div-right").height(p-contextH);
	var height=$("#formdiv").height();
	$("#plandiv").height(p-contextH-height);
	//此处因easyui样式导致自适应高度加上头部后显示不出来，所以将window高度减去头部高度
	$("#modal-body").height((p/2) + 150);
	$("#modal-content-file").height((p/2)-30);
	
	//查询所有的预案
    plan.getAllLakes();
	//新建预案
	$("#addPlan").click(function(){
		$("#Form2")[0].reset();
		$("#fileModel").modal();
		//选择河流
		plan.selectRivers();
	});	
	//更新预案措施
    $("#savePlanStep").click(function(){
    	plan.updateRepond();
    });
    $("#queryPlan").click(function(){
    	plan.selectPlan();
    });
    $("#refreshPlan").click(function(){
    	  plan.getAllLakes();
    });
	var index;
	var options = {   
        type: 'POST',  
        url: WEB_ROOT+"/data/center/monitor/UploadFile",  
        dataType: 'json',  
        success:function(){
        	layer.close(index);    
        	$('#fileModel').modal('hide');
        	layer.msg('上传成功！', {icon: 1});
        	//刷新页面
        	plan.getAllLakes();
        },    
        error : function(xhr, status, err) {    
        	layer.msg('上传失败，请检查后再重新上传！', {icon: 5});
        	layer.close(index);    
        }  
    }; 
   $("#Form2").submit(function(){
	   var rvCd=$("#selectRiver option:selected").val();//预案id
	   $("#fileRvCd").val(rvCd);
    	index = layer.load(0);
    	var f = document.getElementById("input-b3").files;  
	    var size = f[0].size;  
	    var upFileName = $("#input-b3").val();
	    var index1=upFileName.lastIndexOf(".");
	    var index2=upFileName.length;
	    var src=upFileName.substring(index1,index2);
    	var type=(src.substr(src.lastIndexOf("."))).toLowerCase();
	    if(type!=".jpg" && type!=".jpeg" && type!=".png" && type !=".doc" && type!= ".docx" && type != ".pdf"){
	    	layer.msg('上传文件格式不正确！', {icon: 5});
	    	return false;
    	}
	    if((size/1024) > (1024 * 5)){
	    	layer.msg('上传的文件大小不超过5.0M！', {icon: 5});
	    	return false;
	    }
        $(this).ajaxSubmit(options);  
        $("#Form2")[0].reset();
        return false;   //防止表单自动提交  
    });    
});