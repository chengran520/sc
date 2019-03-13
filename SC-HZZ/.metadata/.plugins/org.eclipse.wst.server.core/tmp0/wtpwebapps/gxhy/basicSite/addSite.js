var addSite={
	addSite:function(){
		  var data = $('#form_data_Site').serializeArray();
		  var resultData=commonUtils.post(WEB_ROOT+"/basicSite/work/saveOrUpBasicSite",data,false,"保存");
		  if(resultData.flag){
			  setTimeout(function(){location.href=WEB_ROOT+"/basicSite/basicSiteInfo.jsp";},1000);
			}else{
		    senderMsg("请输入测站相关信息，确认后保存！", null);
	      }
	},
	beforeSubmit: function(){
		var addvcd = $('#hiddenAddvcd').val();
		if(commonUtils.isEmpty(addvcd)){
			senderMsg("行政区不能为空！", null);
			return false;
		}
	}
}
$(function(){
	$("#insertSite").click(function(){
		addSite.addSite();
	});
	$("#returnSite").click(function(){
		location.href=WEB_ROOT+"/basicSite/basicSiteInfo.jsp";
	});
});