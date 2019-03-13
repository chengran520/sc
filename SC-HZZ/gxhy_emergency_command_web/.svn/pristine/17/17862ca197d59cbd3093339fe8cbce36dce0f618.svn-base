<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ page import="com.gxhy.base.util.CustomPropertyConfigurer" %>
<jsp:include page="/common/base/include_BaseCommon.jsp"></jsp:include>
<script src="<%=request.getContextPath()%>/common/fileupdate/jquery.media.js"></script>
<script type="text/javascript">
 	 var WEB_ROOT = "<%=request.getContextPath() %>";
 	 var prewAddes = "<%=request.getParameter("prewAddes")%>";
 	 var path = "<%=(String)CustomPropertyConfigurer.getConfigProperty("fileAddres")%>";
 	 var fpath = "<%=request.getScheme() + "://"+ request.getServerName() + ":" + request.getServerPort()%>";
 	 var spath = "";
 	 $(function() {  
         var postf = "";
         var html = "";
         if(prewAddes != "" && prewAddes != "null"){
        	 postf = prewAddes.substring(prewAddes.lastIndexOf("."),prewAddes.length);
       		 var addres = prewAddes.replace(path,"/pic/");
       		 fpath = fpath+addres;
        	 if(postf == ".pdf" || postf == ".PDF"){
        		 html = "<a class='media' href='"+fpath+"'></a>";
        	 }else{
        		 html = "<img src='"+fpath+"'></img>";
        	 }
        	 $(".panel-body").html(html);
         }
         var p = $(window).height()-10;	
		 var w = $(window).width()-10;	
         $('a.media').media({width:w, height:p});  
         $('a.mediase').media({width:w, height:p}); 
     });  
</script>
<div class="panel panel-primary">
    <div class="panel-body">
	</div>
</div>
