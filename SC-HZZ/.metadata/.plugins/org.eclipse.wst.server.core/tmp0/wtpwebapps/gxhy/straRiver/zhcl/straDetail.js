$(function(){
	var result=commonUtils.post(WEB_ROOT+ "/data/StraRiver/updateStrRiver",{"uuid":uuid},null);
})
function ulrHtml(){
	location.href=WEB_ROOT+"/straRiver/zhcl/straRiver.jsp?returnId="+id;
}