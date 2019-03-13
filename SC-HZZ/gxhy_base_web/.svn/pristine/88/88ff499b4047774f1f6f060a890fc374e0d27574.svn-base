var loginInfo={
	login:function(){
		var loginName=$("#UserName").val();//用户名 
		var loginPasswd=$('#Password').val();//密码 
		var verifyCode=$('#verifyCode').val();//验证码 
		if (loginName == null ||loginName == ''){
			 senderMsg("用户名不能为空!", false);
			 return;
		}else if(loginPasswd == null ||loginPasswd == ''){
			 senderMsg("密码不能为空!", false);
			 return;
		}
		if(verifyCode == null ||verifyCode == ''){
			 senderMsg("验证码不能为空!", false);
			 return;
		}
		$.ajax({
			type : "POST",
			url : WEB_ROOT+"base/api/login/user/login",	
			data:{
				 loginName:loginName,
				 loginPasswd:loginPasswd,
				 verifyCode:verifyCode
				},
			dataType : "json",
			async : false,
			error : function(request) {
				$('#Password').val('');
				loginInfo.reloadVerifyCode();
				senderMsg("网络连接失败，请检查网络状态。", false);
			},
			success : function(result) {
				if (result.success) {
						senderMsg("登录成功,正在跳转,请稍等……", true);
						$('#Password').val(''); 
						location.href = APP_ROOT+WEB_ROOT+result.message;
					} else {
						$('#Password').val('');
						$('#verifyCode').val('');
						loginInfo.reloadVerifyCode();
						senderMsg(result.message, false);
					}
				}
		});
	},
	reloadVerifyCode:function(){  
	    var img=document.getElementById('verifyCodeImage');//验证码 
	    img.setAttribute('src', WEB_ROOT+'base/api/login/getVerifyCodeImage?time='+new Date()); 
	}  
}
$(function(){
    $('#UserName').bind('keypress',function(event){
        if(event.keyCode == "13")    
        {
        	loginInfo.login();
        }
    });
    $('#verifyCode').bind('keypress',function(event){
        if(event.keyCode == "13")    
        {
        	loginInfo.login();
        }
    });
    $('#Password').bind('keypress',function(event){
        if(event.keyCode == "13")    
        {
        	loginInfo.login();
        }
    });
});