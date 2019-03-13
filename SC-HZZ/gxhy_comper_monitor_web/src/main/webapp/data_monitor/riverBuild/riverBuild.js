var riverBuild = {
	data : null,
	loadData : function(opt) {
		easyui_datagrid_util.fit = false;
		easyui_datagrid_util.singleSelect = true;
		easyui_datagrid_util.pageSize = 20;
		easyui_datagrid_util.create_datagrid_options("patrol_catalogInfo",
				WEB_ROOT + "/data/monitor/getRiverBuildList", riverBuild, opt);
	},
	errorTip : function(str) {
		layer.alert(str, {
			icon : 5,
			title : "提示"
		});
		return;
	},
	queryInfo : function() {
		var keyword = $("#keyword").val();
		var data = {
			"keyword" : keyword
		};
		var opt = {
			data : data
		};
		this.loadData(opt);
	},
	formatterDataTm : function(value, row, index) {
		return formatter_date_utils.formatterStrTime(value, 0, 5);
	},
	isFile:function(value, row, index){
		if(row.url!=""&&row.url!="null"&&row.url!=null){
			return "<font style='color:red;font-weight:bold;'>有</font>";
		}else{
			return "无";
		}
	},
	//添加信息
	saveInfo : function() {
		var data = $("#form_data_Info").serializeArray();
		var projectName = $("#projectName").val();
		if (projectName == null || projectName == '') {
			layer.msg('项目名称为必填项!', {
				icon : 5
			});
			return;
		}
		var buildContent = $("#buildContent").val();
		if (buildContent == null || buildContent == '') {
			layer.msg('建设内容为必填项!', {
				icon : 5
			});
			return;
		}
		var buildUnitContactsTel = $("#buildUnitContactsTel").val();
		if (buildUnitContactsTel == null || buildUnitContactsTel == "") {
			riverBuild.errorTip("手机号码填写不正确!");
			return;
		}
		var myreg = /^[1][0-9][0-9]{9}$/;
		if (!myreg.test(buildUnitContactsTel)) {
			riverBuild.errorTip("请输入有效的手机号码!");
			return;
		}
		var planStime = $("#planStime").val();
		var planEtime = $("#planEtime").val();
		if (planStime.length > 0 && planEtime.length > 0) {
            var startTmp = planStime.split("-");
            var endTmp = planEtime.split("-");
            var sd = new Date(startTmp[0], startTmp[1], startTmp[2]);
            var ed = new Date(endTmp[0], endTmp[1], endTmp[2]);
            if (sd.getTime() > ed.getTime()) {
            	riverBuild.errorTip("开始日期不能大于结束日期!");
                return;
            }
        }
		var resultData = commonUtils.post(WEB_ROOT
				+ "/data/monitor/saveRiverBuild", data, false, "保存");
		if (resultData.data > 0) {
			layer.msg('保存成功！', {
				icon : 1
			});
			$('#myModalAdd').modal('hide');
			$('#patrol_catalogInfo').datagrid('load');
		} else {
			layer.msg('保存失败！', {
				icon : 5
			});
			$('#myModalAdd').modal('hide');
			layer.close();
		}
	},
	//删除信息
	deleteRiverBuild : function(uuid) {
		layer.alert('你确定要删除吗？', {
			skin : 'layui-layer-molv',
			closeBtn : 1,
			btn : [ '确定', '取消' ],
			icon : 5 // icon
			,
			yes : function() {
				var resultData = commonUtils.post(WEB_ROOT
						+ "/data/monitor/deleteRiverBuild", {
					uuid : uuid
				}, false, "删除");
				if (resultData.data > 0) {
					layer.msg('删除成功！', {
						icon : 1
					});
					$('#patrol_catalogInfo').datagrid('load');
				} else {
					layer.msg('删除失败！', {
						icon : 5
					});
					layer.close();
				}
			},
			btn2 : function() {
				layer.close();
			}
		});
	},
	//修改信息
	updateRiverBuild : function(id) {
		$("#myModalAdd").modal();
		var result = commonUtils.get(WEB_ROOT + "/data/monitor/riverBuildDetail", {"uuid" : id}, null);
		if (result.flag) {
			var data = result.data;
			$("#stat_span").hide();
			$("#saveInfo").hide();
			$("#updateInfo").show();
			$("#uuid").val(data.uuid);
			$("#projectName").val(data.projectName);
			$("#buildContent").val(data.buildContent);
			$("#investTotal").val(data.investTotal);
			$("#finishTotalSchedule").val(data.finishTotalSchedule);
			$("#planS").hide();
			$("#planE").hide();
			$("#buildUnitName").val(data.buildUnitName);
			$("#buildUnitContacts").val(data.buildUnitContacts);
			$("#buildUnitContactsTel").val(data.buildUnitContactsTel);
		}
	},
	uploadRiverBuild:function(uuid,projectName,url){
		$("#input-b3").fileinput('clear');
		if(url == "" || url == "null"){
			$("#fileModel").modal();
			$("#fileid").val(uuid);
			$("#fileName").val(projectName);
		}else{
			layer.confirm('当前项目已有相关附件！', {
			  skin: 'layui-layer-molv' 
			  ,closeBtn: 1    
			  ,btn: ['预览','关闭'] //按钮
			}, function(index){
				layer.close(index);
				var p = $(window).height();	
				var w = $(window).width();	
				var index = layer.open({
				  title :projectName+' 应急预案',
				  type: 2,
				  content: 'buider.jsp?url='+url,
				  area: [''+w+'px', ''+p+'px'],
				  maxmin: true
				});
			},function(){
				layer.close();
			});
		}
	},
	formatterUser : function(value, row, index) {
		var uuid = row.uuid;
		var html = "<a style='color:#008B00;' class='colorUpdate'  " +
				"onclick='riverBuild.updateRiverBuild(\""
				+ uuid + "\")'>修改</a>|";
		html += "<a  style='color:#9B30FF;' class='colorDelete'  " +
				"  onclick='riverBuild.deleteRiverBuild(\""
				+ uuid + "\");'>删除</a>|";
		html += "<a  style='color:#9B30FF;' class='colorDelete' " +
				"   onclick='riverBuild.uploadRiverBuild(\""+row.uuid+"\",\""+row.projectName+"\",\""+row.url+"\");'>审核</a>";
		return html;
	}
}

$(function() {
	var p = $(window).height();
	// 此处因easyui样式导致自适应高度加上头部后显示不出来，所以将window高度减去头部高度
	$("#patrol_catalogInfo").height(p - 100);
	formatter_date_utils.initDatePicker2("planStime", "planEtime");
	// 初始化加载用户数据
	riverBuild.loadData();
	// 刷新
	$("#refreshUser").click(function() {
		riverBuild.loadData();
	});
	$(".modal-body").height(p * 0.78);
	// 添加
	$("#add").click(function() {
		$("#planS").show();
		$("#planE").show();
		$("#saveInfo").show();
		$("#updateInfo").hide();
		$("#myModalAdd").modal();
		$('#userId').removeAttr("disabled");
		$('#form_data_Info')[0].reset();
	});
	// 保存
	$("#saveInfo").click(function() {
		riverBuild.saveInfo();
	});
	// 修改
	$("#updateInfo").click(function() {
		var type = 2;
		riverBuild.saveInfo(type);
	});
	$('#keyword').bind('keypress', function(event) {
		if (event.keyCode == "13") {
			riverBuild.queryInfo();
		}
	});
	// 查询
	$("#queryInfo").click(function() {
		riverBuild.queryInfo();
	});
	
	var index;
	var options = {   
        type: 'POST',  
        url: WEB_ROOT+"/data/monitor/uploadBuild",  
        dataType: 'json',  
        success:function(){
        	layer.close(index);    
        	$('#fileModel').modal('hide');
        	$('#patrol_catalogInfo').datagrid('load'); 
        	layer.msg('上传成功！', {icon: 1});
        },    
        error : function(xhr, status, err) {    
        	layer.close(index);    
        	layer.msg('上传失败，请检查后再重新上传！', {icon: 5});
        }  
    };   
    $("#Form2").submit(function(){   
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
        return false;   //防止表单自动提交  
    }); 
	
	
});
// 判断值是否为空，如果为空，为暂无
function formatValue(id, value) {
	if (value == null || value == "") {
		document.getElementById('' + id + '').innerHTML = "暂无";
	} else {
		document.getElementById('' + id + '').innerHTML = value;
	}
}
