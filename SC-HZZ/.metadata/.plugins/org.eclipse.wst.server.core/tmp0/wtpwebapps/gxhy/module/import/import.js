$(function(){
	$("#importFile").click(function(){
		var url = WEB_ROOT+"/import/importExcel";
		// 修改form中的action动作
		$("form").attr("action", url);
		// 提交表单
		$("form").submit();
	});
	
})