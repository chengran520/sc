
$(function  () {
	// 获取短信验证码
	var validCode=true;
	$("[name=reSendPhone]").click (function  () {
			var time=60;
			var code=$(this);
			var val = $.trim($('[name=mobileNo]').val());
	  		  
			if (validCode && val!=null && val!='') {
				validCode=false;
				code.attr('disabled', true);
			var t=setInterval(function  () {
				time--;
				code.html(time+"秒");
				if (time==0) {
					clearInterval(t);
				code.html("重新获取");
				validCode=true;
				code.attr('disabled', false);
				}
			},1000);
			
			}
			
	});
});
 
function senderMsg(msg, isValid) {
	msg = msg ? msg : '';
	if (isValid!=null && isValid) {
		toastr.options = {
				closeButton: true,
				progressBar: true,
				showMethod: 'slideDown',
				timeOut: 3000
		}; 
		var title="成功"; 
		if(msg!='')
			toastr.success(msg, title);
	} else if(isValid!=null && !isValid) {
		toastr.options = {
				closeButton: true,
				progressBar: true,
				showMethod: 'fadeIn',
				timeOut: 3000,
				positionClass:"toast-top-right"
		};
		var title="错误"; 
		toastr.error(msg, title);
	}else {
		
	}
	
}

  

