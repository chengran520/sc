var system={
	getFileData:function(tm){
		var result=commonUtils.get(WEB_ROOT+ "/file/system/getSystems",{"tm":tm},null);
		if(result.flag){
			return result.data;
		}
	},
	getFiles:function(data,str){
		if(data!=null){
			var html="";
			$.each(data,function(i,v){
				var fileTitle="";
				if(str!="xhzd"){
					var length=getByteLen(this.fileTitle);
					if(str=="zfzd"||str=="glzd"||str=="gzzd"){					
						if(length>20){
							fileTitle=this.fileTitle.substring(0,20)+"...";
						}else{
							fileTitle=this.fileTitle;
						}
					}else{
						if(length>26){
							fileTitle=this.fileTitle.substring(0,26)+"...";
						}else{
							fileTitle=this.fileTitle;
						}
					}
				}else{
					fileTitle=this.fileTitle;
				}
				html+="<li onclick='system.clickFile(\""+this.fileTitle+"\",\""+this.fileContent+"\");'><i class='fa fa-caret-right' style='padding-right: 8px;'></i><a title="+this.fileTitle+">"+fileTitle+"</a><span style='color: #EE3B3B;font-size: 12px;float:right;margin-right:10px;margin-top:10px;'>"+formatter_date_utils.formatterStrTime(this.updateTime,null,5)+"</span></li>";
			});	
		    $("#"+str+"").html(html);
		}else{
			$("#"+str+"").html("<li><i class='fa fa-caret-right' style='padding-right: 8px;'></i>当前暂无待处理的信息</li>");
		}
	},
	getData:function(){
		var data=system.getFileData();
		var list1=data.list1;
		var list2=data.list2;
		var list3=data.list3;
		var list4=data.list4;
		var list5=data.list5;
		system.getFiles(list1, "xhzd");
		system.getFiles(list2, "khzd");
		system.getFiles(list3, "zfzd");
		system.getFiles(list4, "glzd");
		system.getFiles(list5, "gzzd");
	},
	clickFile:function(fileTitle,fileContent){
		/*location.href=WEB_ROOT+"/filemanage/systemFile/fileDeatil.jsp?uuid="+uuid;*/
		var p = $(window).height();	
		var w = $(window).width();	
		   layer.open({
			  title :fileTitle+'制度文件',
			  type: 2,
			  content: 'detailFile.jsp?fileContent='+fileContent,
			  area: [''+w+'px', ''+p+'px'],
			  maxmin: true,
			  end: function () {
				  system.getData();
	            } 
	   });
	},
	allFiles:function(value, row, index){
		location.href=WEB_ROOT+"/filemanage/systemFile/allFile.jsp";
	}
}
$(function(){	
	formatter_date_utils.initDatePickerTm("creatTm");
	system.getData();
	var height=$(window).height();
	var contentH=$("#headerDiv").height();
	var con=$("#divfon").height();
	$(".tab_div").height(height-contentH-con-5);
	$(".tb_div").height((height-contentH-con-30)*0.5);
	$("#add_system").click(function(){
		$("#addFileModel").modal();
		$("#fileType").val("");
		$("#fileGradeType").val("");
		$("#fileTitle").val("");
		$("#fileContent").fileinput('clear');
		
	});
	//条件查询
	$("#query_system").click(function(){
	   var tm = $("#creatTm").val();
	   var data=system.getFileData(tm);
	   system.getData();
	});   
	$("#refreshSystemFile").click(function(){
	  system.QuerySelect();
	});
	
	
	var index;
	var options = {   
        type: 'POST',  
        url: WEB_ROOT+"/file/system/saveOrUpdateFile",  
        dataType: 'json',  
        success:function(){
        	layer.close(index);    
        	$('#addFileModel').modal('hide');
        	layer.msg('上传成功！', {icon: 1});
        	 system.getData();
        	
        },    
        error : function(xhr, status, err) {    
        	layer.close(index);    
        	layer.msg('上传失败，请检查后再重新上传！', {icon: 5});
        }  
    };
 	$("#Form2").submit(function(){   
    	index = layer.load(0);
    	var f = document.getElementById("fileContent").files;  
	    var size = f[0].size;  
	    var upFileName = $("#fileContent").val();
	    var index1=upFileName.lastIndexOf(".");
	    var index2=upFileName.length;
	    var src=upFileName.substring(index1,index2);
    	var type=(src.substr(src.lastIndexOf("."))).toLowerCase();
    	var fileGradeType=$('#fileGradeType option:selected').val();
		if(fileGradeType=="请选择"){
			fileGradeType==null;
		}
		var fileOpen=$("input[type='radio']:checked").val();
		var fileTitle=$("#fileTitle").val();
		if(fileType==null||fileType==""){
			layer.msg('请填写完整后再保存！', {icon: 5});
			return false;
		}
		if(fileTitle==null||fileTitle==""){
			layer.msg('请填写完整后再保存！', {icon: 5});
			return false;
		}
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
	
});
function getByteLen(val) {
    var len = 0;
    for (var i = 0; i < val.length; i++) {
       var length = val.charCodeAt(i);
       if(length>=0&&length<=128)
        {
            len += 1;
        }
        else
        {
            len += 2;
        }
    }
    return len;
}
