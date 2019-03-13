var reportRain = {
	initFrame:function(){
		var index = layer.open({
		  title :'雨情日报表',
		  type: 2,
		  content: 'pptn_rpt_deatil.jsp',
		  area: ['320px', '195px'],
		  maxmin: true
		});
		layer.full(index);
	}
}
$(function(){
	$("#tbxTm").val(formatter_date_utils.formatterStrTime(null,0,3));
})