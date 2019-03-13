var usersVerify = {
	loadData:function(){
		var datas = {regTp:'app'};
		var opt = {data:datas};
		easyui_datagrid_util.fit=false;
		easyui_datagrid_util.singleSelect=true;
		easyui_datagrid_util.create_datagrid_options("patrol_catalogVerif", WEB_ROOT+ "/userManager/work/getUserList",usersVerify, opt);
	},
	formatterDataTm:function(value, row, index){
		if(value == null){
			return value;
		}
		return formatter_date_utils.formatterStrTime(value,0,0);
	},
	formatterIscheck:function(value, row, index){
		if(row.isCheck==1){
			return "是";
		}else{
			return "否";
		}
	},
	formatterCheck:function(value, row, index){
		var userId = row.userId;
		var userName = row.userName;
		var userPhone = row.userPhone;
		var regTp = row.regTp;
		var createTime = row.createTime;
        var html="<a style='color:#0066cc;' class='colorDetail'  onclick='usersVerify.checkVerify(\""+userId+"\",\""+userName+"\",\""+userPhone+"\",\""+regTp+"\",\""+createTime+"\");'>审核</a>";
        return html;
	},
	checkVerify:function(userId,userName,userPhone,regTp,createTime){
		$("#ModalVerify").modal();
		$("#userId").val(userId);
		$("#userName").val(userName);
		$("#regTp").val(userPhone);
		$("#crtTm").val(regTp);
		$("#userPhone").val(dcreateTime);
	},
	saveUserVerify:function(){
		var userId = $("#userId").val();
		var result= commonUtils.post(WEB_ROOT+"/userManager/work/UpdateUserVerify",{"userId":userId},false,"审核");
		usersVerify.loadData();
		$('#ModalVerify').modal('hide');
	}
}
$(function(){
	var p = $(window).height();	
	var contextH =$("#headerVerifydiv").height();
	//此处因easyui样式导致自适应高度加上头部后显示不出来，所以将window高度减去头部高度
	$("#patrol_catalogVerif").height(p-contextH); 
	usersVerify.loadData();
	$("#checkBtn").click(function(){
		usersVerify.saveUserVerify();
	});
});