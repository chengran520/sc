<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<jsp:include page="/common/base/include_BootStrap.jsp"></jsp:include>
<%-- <link rel="stylesheet" href="<%=request.getContextPath() %>/common/corelib/dijit/themes/claro/claro.css"/>
 <link rel="stylesheet" href="<%=request.getContextPath() %>/common/corelib/dijit/themes/tundra/tundra.css">
<link rel="stylesheet" href="<%=request.getContextPath() %>/common/corelib/esri/css/esri.css"/>
<script src="<%=request.getContextPath() %>/common/corelib/init.js"></script> --%>
<link rel= "stylesheet" href ="https://js.arcgis.com/3.15/esri/css/esri.css">  
<script src= "https://js.arcgis.com/3.15/" ></script>  
<link href="css/GisMap.css" rel="stylesheet">
<script src="GisMap.js"></script>
<script type="text/javascript">
 	var WEB_ROOT = "<%=request.getContextPath() %>";
</script>
<div  class="claro">
 	<div id="content" 
        data-dojo-type="dijit/layout/BorderContainer" 
         data-dojo-props="design:'headline', gutters:true" 
         style="width: 100%; height: 100%; margin:0;">
       <div id="map" data-dojo-type="dijit/layout/ContentPane"
              data-dojo-props="region:'center'"
              style="overflow:hidden;">
              <div id="HomeButton"></div>
 		      	 <!--Html5定位按钮 -->
			    <div id="LocateButton"></div>
			   	 <!-- 切换底图 -->
			    <div id="BasemapToggle"></div>
		       </div>
        <div id="bookmarks"></div>
   </div>
</div>
