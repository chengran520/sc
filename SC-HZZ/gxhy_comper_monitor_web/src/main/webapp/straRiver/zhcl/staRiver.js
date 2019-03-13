var yhyc={
	id:"1",
	riverArr:[],
	getYhycOptions:function(){
		var result=commonUtils.get(WEB_ROOT+ "/dict/work/getBusineTypes",{"dictTp":"YHYC"},null);
		var html="";
		if(result.flag){
			$.each(result.data,function(i,v){
				html+="<div class='hy_div color'  id="+(i+1)+"><a>"+this.dictNm+"</a></div>";
			});
			$("#stadiv").html(html);
		}
	},
	loadStraData:function(opt){
		easyui_datagrid_util.fit=false;
		easyui_datagrid_util.singleSelect=true;
		easyui_datagrid_util.create_datagrid_options("strtable", WEB_ROOT+ "/data/StraRiver/getStraRivers",yhyc,opt);
	},
	formatOperation:function(value, row, index){
		var a=[];
		a.push(row.rvNm);
		a.push();
		 var html="<a style='color:#0066cc;'  class='formatFont' onclick='yhyc.check(\""+row.straFileContent+"\",\""+row.uuid+"\",\""+row.straFileTitle+"\");'>预览</a>";
          /*   html+="|<a style='color:#FD5F3B;' class='formatFont' onclick='yhyc.download(\""+row.uuid+"\")'>下载</a>";*/
             html+="|<a style='color:#9B30FF;'  class='formatFont' onclick='yhyc.deleteStraRiver(\""+row.uuid+"\")'>删除</a>";
	        return html;
	},
	check:function(straFileContent,uuid,straFileTitle){
		var p = $(window).height();	
		var w = $(window).width();	
		   layer.open({
			  title :straFileTitle,
			  type: 2,
			  content: 'straDetail.jsp?straFileContent='+straFileContent+'&id='+yhyc.id+'&uuid='+uuid,
			  area: [''+w+'px', ''+p+'px'],
			  maxmin: true,
			  end: function () {
				  yhyc.queryData();
	            } 
	   });
      	
	},
	deleteStraRiver:function(uuid){
		layer.alert('你确定要删除吗？', {
		    skin: 'layui-layer-molv' 
		    ,closeBtn: 1    
		     ,btn: ['确定','取消']
		     ,icon: 5  // icon
		     ,yes:function(){
	        	 var resultData=commonUtils.post(WEB_ROOT+"/data/StraRiver/deleteStrRiver",{uuid:uuid},false,"删除");
	        	 if(resultData.data>0){	
					 layer.msg('删除成功！', {icon: 1});
					 yhyc.queryData();
				 }else{
					 layer.msg('删除失败！', {icon: 5});
					 layer.close();
				 }      		    	 
		       },btn2:function(){
			   	     layer.close();
			    }
	   });
	},
	formatTm:function(value, row, index){
		return formatter_date_utils.formatterStrTime(value,null,null);
	},
	queryData:function(){
		var startTm=$("#startTm").val();
		var endTm=$("#endTm").val();
		var data={"startTm":startTm,"endTm":endTm,"type":yhyc.id};
		var opt={data:data};
		this.loadStraData(opt);
	},
    //查询河流信息
  	selectRiverInfoList:function(){	
  		 var result= commonUtils.get(WEB_ROOT+"/merit/perf/selectRiverInfoList",null,null);
  	    	 if(result.flag){
  	    		 for ( var i = 0; i <result.data.length; i++){
  	    			     this.riverArr.push(result.data[i].rvNm);
  	    			 	$("#riverInfoList").append("<option value='"+result.data[i].rvNm+"' data-id='"+result.data[i].rvCd+"'>"); 
  	    		 }
  	    			 		 
  	    	}
  	}
}
$(function(){
	var p = $(window).height();	
	var contextH =$("#str_headerDiv").height();
	var userH = $("#user_div_manager").height();
	//此处因easyui样式导致自适应高度加上头部后显示不出来，所以将window高度减去头部高度
	$("#div_users").height(p-contextH); 
	$("#strtable").height(p-contextH-userH); 
	formatter_date_utils.initDatePicker2("startTm","endTm");
	yhyc.getYhycOptions();

	if(returnId!=null&&returnId!=""&&returnId!="null"){
		var opt={data:{"type":returnId}};
		yhyc.loadStraData(opt);
	}else{
		var opt={data:{"type":yhyc.id}};
		yhyc.loadStraData(opt);
	}
	
	$("#insert_straFile").click(function(){
		$("#straFileTitle").val("")
		$("#rvCd").val("");
		$("#rvNm").val("");
		$("#straFileContent").val("");
		$("#straFileContent").fileinput('clear');
		$("#fileModel").modal();
	});
	 $("#type").val(yhyc.id);
	$("#stadiv").on("click","div",function(){
		yhyc.id=$(this).attr("id");
		 $("#type").val(yhyc.id);
		yhyc.queryData();
        $("#stadiv  div").eq($(this).index()).attr("style","background:rgb(255, 127, 80)").siblings().removeAttr("style");;
    }); 
	$("#queryStra").click(function(){
		yhyc.queryData();
	});
	$("#refreshStra").click(function(){
		location.href=WEB_ROOT+"/straRiver/zhcl/straRiver.jsp";
	});
 	yhyc.selectRiverInfoList();

	var index;
	var options = {   
        type: 'POST',  
        url: WEB_ROOT+"/data/StraRiver/insertStRiver",  
        dataType: 'json',  
        success:function(){
        	layer.close(index);    
        	$('#fileModel').modal('hide');
        	yhyc.queryData();
        	layer.msg('上传成功！', {icon: 1});
        },    
        error : function(xhr, status, err) {    
        	layer.close(index);    
        	layer.msg('上传失败，请检查后再重新上传！', {icon: 5});
        }  
    };
 	$("#Form2").submit(function(){   
    	index = layer.load(0);
    	var f = document.getElementById("straFileContent").files;  
	    var size = f[0].size;  
	    var upFileName = $("#straFileContent").val();
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
        return false;   //防止表单自动提交  
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