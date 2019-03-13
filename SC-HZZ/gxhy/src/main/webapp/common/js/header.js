$(function(){
	console.log(userId+"   user id msg") 
	if(userId == '' || userId == null || userId == 'undefined' || userId == 'null'){
		location.href=WEB_ROOT+"/module/login/login.jsp";
	}
	$("#logOut").click(function(){
		layer.confirm('您确认退出当前用户？', {
			  btn: ['确认', '取消'] //按钮
			}, function(){
				var reulst = commonUtils.get(WEB_ROOT+"/base/api/login/user/logout",null,false);
				if(reulst.flag){					
					location.href=WEB_ROOT+"/module/login/login.jsp";
				}
		});
	});
	$("#navLinks").on("click","li",function(){
		var active = $(this).hasClass("menu_select");
		var id = $(this).attr("id");
		if(!active){
			$(this).addClass('menu_select').siblings().removeClass("menu_select");
		}
	});
	motio_w();
	function motio_w(){
		var w = $(window).width(); 
		var hw = $(".navbar-header").width();
		var uw = $(".navber-menu-div").width();
		$("#header-menu-div").css("width",w-hw-uw-1);
	}
	window.onresize = function() {
        motio_w();
    };
})