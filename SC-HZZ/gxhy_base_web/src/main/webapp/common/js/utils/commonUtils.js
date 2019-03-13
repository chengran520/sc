var commonUtils ={
	flag:false,
	data:null,
	message:null,
	sendFlag:false,
	get:function(url, data , async,tp){
		var _this = this;
		$.ajax({
			type : 'GET',
			url : url,	
			data:data,
			dataType : "json",
			async : async,
			error : function(request) {
				senderMsg("网络连接失败，请检查网络状态。", _this.sendFlag);
				_this.flag = false;
			},
			success : function(result) {
				if (result.success) {
					_this.data = result.data;
					_this.message=result.message;
					_this.flag = true;
				} else {
					senderMsg(result.message, _this.sendFlag);
					_this.flag = false;
					_this.data = result.message;
				}
			}
		});
       return commonUtils;
	},
	post:function(url,data,async,str){
		var _this = this;
		$.ajax({
			type : 'POST',
			url : url,	
			data:data,
			dataType : "json",
			async : async,
			error : function(request) {
				senderMsg("网络连接失败，请检查网络状态。", _this.sendFlag);
				_this.flag = false;
			},
			success : function(result) {
				if (result.success) {
					if(str != '' || str != null){
						senderMsg(str+result.message, null);
					}else{
						senderMsg(result.message, null);
					}
					_this.data = result.data;
					_this.flag = true;
				} else {
					if(str != '' || str != null){
						senderMsg(str+result.message, null);
					}else{
						senderMsg(result.message, null);
					}
					_this.flag = false;
					_this.data = result.message;
				}
			}
		});
       return commonUtils;
	},
	UUID:function(prefix){
	  prefix = prefix || "";
      return (prefix + Math.random() + Math.random()).replace(/0\./g, "");
	},
	isEmpty: function(str){
		if(str == '' || str == null || str == 'null' || str == undefined){
			return true;
		}else{
			return false;
		}
	}
}