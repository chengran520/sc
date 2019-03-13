$(function(){
	$(document).on("show.bs.modal", ".modal", function(){
	    $(this).draggable({
	    	handle: ".modal-header"   // 只能点击头部拖动
	    });
	    $(this).css("overflow-y", "hide");  // 防止出现滚动条，出现的话，你会把滚动条一起拖着走的
	});
});
