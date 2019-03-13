var dbPath={
	/***
	 * 
	 * @param path 网络虚拟路径
	 * @param url  数据库存放地址
	 */
	imgPath:function(path,url){
		if(url!=null&&url!=""){
			postf = url.substring(url.lastIndexOf("images")+6,url.length);
      		var fpath  = path+"/img"+postf;
      		return fpath;
		}
	},
	filePath:function(path,url,fp){
		 postf = prewAddes.substring(url.lastIndexOf("."),url.length);
   		 var addres = url.replace(fp,"/pic/");
   		 fpath = path+addres;
   		 return fpath;
	}
}