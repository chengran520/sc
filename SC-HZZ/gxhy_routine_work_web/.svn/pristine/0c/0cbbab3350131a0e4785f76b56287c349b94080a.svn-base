var exposure={
		loadExposureData:function(opt){
			var reulst = commonUtils.get(WEB_ROOT+"/exposure/work/getExposureList",opt,false);
			if(reulst.flag){
				var exposureData=reulst.data;
				var html="";
				$.each(exposureData,function(i,value) {
					var str="";
					if(this.status=="1"){
						str="未处理";
					}else{
						str="已处理";
					}					
                    var imgPath=dbPath.imgPath(path,this.url);
					var imgUrl = this.url  == "" ? (WEB_ROOT+"/common/images/bussine/101.png") : imgPath;
					    html+="<div class='dt_div'>";
					    html+="<dl><dd><a><img  class='img'  src="+imgUrl+" onclick='exposure.imgClick(\""+this.acceptId+"\");' class='zoomify'></a></dd>";
					    html+="<dd  class='wordDd'><p class='stName'>名称："+this.rvNm+"</p><p class='type'>类型："+ this.pollutionTypeNm+"</p>";
					    html+="<p class='reportTime'>日期："+formatter_date_utils.formatterStrTime(this.reportTime,null,3)+"</p>";     
					    html+="<p class='reportTime'>时间："+formatter_date_utils.formatterStrTime(this.reportTime,null,6)+"</p>";       
					    html+="<p>处理状态：<font style='color:"+exposure.formatColor(this.status)+";'>"+str+"</font></p>";                        
					    html+="</dd></dl></div>";
		
				});
				$("#exposure").html(html);
				$('.zoomify').zoomify();
			}
		},
		QueryData:function(){
			var type =$("#pollutionType").find("option:selected").val();
			if(type=="请选择"){
				type=null;
			}
			var reportTime= $("#report").val();
			var opt = {"type":type,"reportTime":reportTime};
			$("#exposure").empty();
			exposure.loadExposureData(opt);
		},
		exposureOption:function(){
			var result= commonUtils.get(WEB_ROOT+"/dict/work/getBusineTypes",{"dictTp":"BZTP"},false);
			if(result.flag){
				return result.data;
			}
		},
		exposureToData:function(data){
			var html="<option disabled='disabled' selected='selected'>请选择</option>";
			$.each(data,function(i,v){
				html+="<option  value="+this.dictVal+">"+this.dictNm+"</option>";
			});
			$("#pollutionType").html(html);
		},
		formatColor:function(status){
			 var color="";
				if(status==0){
					color="red";	
				}else if(status==1){
					color="#FF8C00";
				}else{			
					color="#138a64";
				}
				return color;
		},
		imgClick:function(acceptId){
			location.href=WEB_ROOT+"/exposure/ExposureDetail.jsp?id="+acceptId;
		}
		
		
}

$(function(){
	 formatter_date_utils.initDatePickerTm("report");
	 var data=exposure.exposureOption();
	 var p = $(window).height();	//窗口高度
	 $(".exposureFat,#exposure").height(p - 100);
	 exposure.exposureToData(data);
     $(".img,p").click(function(){
    	$("#exposure_model").modal();
     });
     exposure.loadExposureData();
     $("#queryExposure").click(function(){
    	 exposure.QueryData();
     });
     $("#refreshExposure").click(function(){
    	 exposure.loadExposureData();
     });
})