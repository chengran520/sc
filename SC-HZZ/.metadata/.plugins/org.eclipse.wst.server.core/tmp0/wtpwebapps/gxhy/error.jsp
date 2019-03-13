<%@ page contentType="text/html; charset=UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ page isErrorPage="true"%>
<%
    pageContext.setAttribute("basePath", request.getContextPath() + "/");
%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<title>错误页 Error Page</title>
<link rel="stylesheet" type="text/css"
	href="${basePath }base/vendor/bootstrap/css/bootstrap.min.css" />
<style type="text/css">
.error-wrapper {
	text-align: center;
	width: 570px;
	margin: 10% auto 0px;
}

.error-wrapper h1 {
	font-size: 130px;
	margin: 0;
	line-height: 130px;
}

.error-wrapper h3 {
	margin: 0;
	font-size: 23px;
}

.error-wrapper h4 {
	font-size: 13px;
}

.error-wrapper form {
	width: 350px;
	margin: 20px auto 0 auto;
}

.error-wrapper input {
	background-color: #eeeeef;
}

@media ( max-width : 768px) {
	.error-wrapper {
		width: 100%;
		padding: 0 20px;
	}
	.error-wrapper form {
		width: 250px;
	}
}

@media ( max-width : 320px) {
	.error-wrapper {
		padding: 0 5px;
	}
}

.error-wrapper h2 {
	color: #00b0da;
}
</style>
</head>
<body bgcolor="white">

	<div class="error-wrapper">
		<h3 style="color: #00b0da;">出错了!</h3>
		<br/>
		<h3>
			${errorMessage}
			<c:if test="${empty errorMessage}">
				发生了未知错误，无法完成您的请求；请关闭浏览器后<a href='${basePath}<%= response.encodeURL("main.jsp") %>'>重试</a>。
			</c:if>
		</h3>
		<h4>
			An unknown error has occurred, unable to complete your request;
			please try <a href='${basePath}<%= response.encodeURL("main.jsp") %>'>again</a>.
		</h4>
	</div>

	<div id="errorMassgeInfo" style="display: none;">
		#errorMessageInfoStart#${errorMessage}<c:if test="${empty errorMessage}">
			发生了未知错误，无法完成您的请求；请<a href='${basePath}<%= response.encodeURL("main.jsp") %>'>重试</a>。
		</c:if>#errorMessageInfoEnd#
	</div>
</body>
</html>
