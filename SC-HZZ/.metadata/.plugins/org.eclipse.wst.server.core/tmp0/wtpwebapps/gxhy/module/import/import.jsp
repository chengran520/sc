<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<jsp:include page="/common/base/include_BaseCommon.jsp"></jsp:include>
<link href="<%=request.getContextPath() %>/common/css/commonView.css" rel="stylesheet">
<script src="<%=request.getContextPath()%>/module/import/import.js"></script>
<script type="text/javascript">
 	var WEB_ROOT = "<%=request.getContextPath()%>";
</script>
<div class="headerDiv" id="headerUserdiv">
	<div class="header-content">
		<h2>
			<i class="fa icon-th-large"></i>
			<c>用户管理</c>
			<span ></span>
		</h2>
	</div> 
	<!-- <div style="background-color: #FFFFFF;"class="" id="user_div_manager">
		  <form  action=""    method="post" enctype="multipart/form-data" id="import">
                                  请选择文件:<input type="file" name="excelFile"><br/>
          </form>
	</div> -->
    <form id="uploadForm"  action="" enctype="multipart/form-data" method="post">   
           请选择文件:<input id="upfile" type="file" name="upfile">  
    <input type="button" value="导入" id="importFile" name="btn">  
    </form>  
   </div>


