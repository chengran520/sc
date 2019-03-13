var formatter_str_util={
	strEllip:function(str,n){  
		var ilen = str.length;  
		if(ilen*2 <= n) return str;  
			n -= 3;  
			var i = 0;  
			while(i < ilen && n > 0)  {  
				if(escape(str.charAt(i)).length>4) n--;  
				n--;  
				i++;  
			}  
		if( n > 0) return str;  
		return str.substring(0,i)+"...";  
	},
	
	formatMeetingName:function(meetingName){
		if(meetingName.length > 14){
			return meetingName.substring(0,14) + '...';
		}else{
			return meetingName;
		}
	}
	

	
}

