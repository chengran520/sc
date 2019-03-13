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
	formatterUser : function(value, row, index) {
		var uuid = row.uuid;
		var html = "<a style='color:#008B00;' class='colorUpdate'  onclick='riverBuild.updateRiverBuild(\""
				+ uuid + "\")'>修改</a>|";
		html += "<a  style='color:#9B30FF;' class='colorDelete'    onclick='riverBuild.deleteRiverBuild(\""
				+ uuid + "\");'>删除</a>";
		return html;
	}
}

$(function() {
	var p = $(window).height();
	// 此处因easyui样式导致自适应高度加上头部后显示不出来，所以将window高度减去头部高度
	$("#patrol_catalogInfo").height(p - 100);
	formatter_date_utils.initDatePicker2("planEtime", "planStime");
	// 初始化加载用户数据
	riverBuild.loadData();
	// 刷新
	$("#refreshUser").click(function() {
		riverBuild.loadData();
	});
	$(".modal-body").height(p * 0.78);
	// 添加用户
	$("#add").click(function() {
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
});
// 判断值是否为空，如果为空，为暂无
function formatValue(id, value) {
	if (value == null || value == "") {
		document.getElementById('' + id + '').innerHTML = "暂无";
	} else {
		document.getElementById('' + id + '').innerHTML = value;
	}
}
