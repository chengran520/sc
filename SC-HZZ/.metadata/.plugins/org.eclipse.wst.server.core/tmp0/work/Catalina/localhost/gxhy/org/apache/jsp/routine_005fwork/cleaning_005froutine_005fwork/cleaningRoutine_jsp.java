/*
 * Generated by the Jasper component of Apache Tomcat
 * Version: Apache Tomcat/8.0.36
 * Generated at: 2019-02-11 06:15:32 UTC
 * Note: The last modified time of this file was set to
 *       the last modified time of the source file after
 *       generation to assist with modification tracking.
 */
package org.apache.jsp.routine_005fwork.cleaning_005froutine_005fwork;

import javax.servlet.*;
import javax.servlet.http.*;
import javax.servlet.jsp.*;

public final class cleaningRoutine_jsp extends org.apache.jasper.runtime.HttpJspBase
    implements org.apache.jasper.runtime.JspSourceDependent,
                 org.apache.jasper.runtime.JspSourceImports {

  private static final javax.servlet.jsp.JspFactory _jspxFactory =
          javax.servlet.jsp.JspFactory.getDefaultFactory();

  private static java.util.Map<java.lang.String,java.lang.Long> _jspx_dependants;

  private static final java.util.Set<java.lang.String> _jspx_imports_packages;

  private static final java.util.Set<java.lang.String> _jspx_imports_classes;

  static {
    _jspx_imports_packages = new java.util.HashSet<>();
    _jspx_imports_packages.add("javax.servlet");
    _jspx_imports_packages.add("javax.servlet.http");
    _jspx_imports_packages.add("javax.servlet.jsp");
    _jspx_imports_classes = null;
  }

  private volatile javax.el.ExpressionFactory _el_expressionfactory;
  private volatile org.apache.tomcat.InstanceManager _jsp_instancemanager;

  public java.util.Map<java.lang.String,java.lang.Long> getDependants() {
    return _jspx_dependants;
  }

  public java.util.Set<java.lang.String> getPackageImports() {
    return _jspx_imports_packages;
  }

  public java.util.Set<java.lang.String> getClassImports() {
    return _jspx_imports_classes;
  }

  public javax.el.ExpressionFactory _jsp_getExpressionFactory() {
    if (_el_expressionfactory == null) {
      synchronized (this) {
        if (_el_expressionfactory == null) {
          _el_expressionfactory = _jspxFactory.getJspApplicationContext(getServletConfig().getServletContext()).getExpressionFactory();
        }
      }
    }
    return _el_expressionfactory;
  }

  public org.apache.tomcat.InstanceManager _jsp_getInstanceManager() {
    if (_jsp_instancemanager == null) {
      synchronized (this) {
        if (_jsp_instancemanager == null) {
          _jsp_instancemanager = org.apache.jasper.runtime.InstanceManagerFactory.getInstanceManager(getServletConfig());
        }
      }
    }
    return _jsp_instancemanager;
  }

  public void _jspInit() {
  }

  public void _jspDestroy() {
  }

  public void _jspService(final javax.servlet.http.HttpServletRequest request, final javax.servlet.http.HttpServletResponse response)
        throws java.io.IOException, javax.servlet.ServletException {

final java.lang.String _jspx_method = request.getMethod();
if (!"GET".equals(_jspx_method) && !"POST".equals(_jspx_method) && !"HEAD".equals(_jspx_method) && !javax.servlet.DispatcherType.ERROR.equals(request.getDispatcherType())) {
response.sendError(HttpServletResponse.SC_METHOD_NOT_ALLOWED, "JSPs only permit GET POST or HEAD");
return;
}

    final javax.servlet.jsp.PageContext pageContext;
    javax.servlet.http.HttpSession session = null;
    final javax.servlet.ServletContext application;
    final javax.servlet.ServletConfig config;
    javax.servlet.jsp.JspWriter out = null;
    final java.lang.Object page = this;
    javax.servlet.jsp.JspWriter _jspx_out = null;
    javax.servlet.jsp.PageContext _jspx_page_context = null;


    try {
      response.setContentType("text/html; charset=UTF-8");
      pageContext = _jspxFactory.getPageContext(this, request, response,
      			null, true, 8192, true);
      _jspx_page_context = pageContext;
      application = pageContext.getServletContext();
      config = pageContext.getServletConfig();
      session = pageContext.getSession();
      out = pageContext.getOut();
      _jspx_out = out;

      out.write('\r');
      out.write('\n');
      org.apache.jasper.runtime.JspRuntimeLibrary.include(request, response, "/common/base/include_BaseCommon.jsp", out, false);
      out.write("\r\n");
      out.write("<link href=\"");
      out.print(request.getContextPath() );
      out.write("/common/css/commonView.css\" rel=\"stylesheet\">\r\n");
      out.write("<script src=\"");
      out.print(request.getContextPath() );
      out.write("/routine_work/cleaning_routine_work/cleanRoutineWork.js\"></script>\r\n");
      out.write("<script type=\"text/javascript\">\r\n");
      out.write(" \tvar WEB_ROOT = \"");
      out.print(request.getContextPath() );
      out.write("\";\r\n");
      out.write("</script>    \r\n");
      out.write("<div class=\"headerDiv\" id=\"clean_headerDiv\">\r\n");
      out.write("\t<div class=\"header-content\">\r\n");
      out.write("\t\t<h2>\r\n");
      out.write("\t\t\t<i class=\"fa icon-th-large\"></i>\r\n");
      out.write("\t\t\t<c>保洁巡河日志</c>\r\n");
      out.write("\t\t\t<span ></span>\r\n");
      out.write("\t\t</h2>\r\n");
      out.write("\t</div> \r\n");
      out.write("\t<div style=\"background-color: #FFFFFF;\"class=\"\" id=\"hydrologic_rain_rainQueryInfo_1\">\r\n");
      out.write("\t\t<form class=\"form-inline\" method=\"post\">\r\n");
      out.write("\t\t\t<div style=\"padding: 10px;border-bottom: 1px solid #dddddd;\">\r\n");
      out.write("\t\t\t    <div class=\"col-xs-1.5\" style=\"display: inline; \">\r\n");
      out.write("\t\t\t        <div class=\"input-group\">\r\n");
      out.write("\t\t\t\t\t\t<div class=\"input-group-addon\">巡河人员</div>\r\n");
      out.write("\t\t\t\t\t\t<input id=\"patrolUser\" type=\"text\" class=\"form-control\" style=\"width: 150px;\">\r\n");
      out.write("\t\t\t\t\t</div>\r\n");
      out.write("\t\t\t\t</div>\r\n");
      out.write("\t\t\t\t <div class=\"col-xs-1.5\" style=\"display: inline; \">\r\n");
      out.write("\t\t\t\t\t<div class=\"input-group\">\r\n");
      out.write("\t\t\t\t\t\t<div class=\"input-group-addon\">开始时间:</div>\r\n");
      out.write("\t\t\t\t\t\t<input id=\"patrolStartTm\" type=\"text\" class=\"form-control\" style=\"width: 150px;\">\r\n");
      out.write("\t\t\t\t\t</div>\r\n");
      out.write("\t\t\t\t</div>\r\n");
      out.write("\t\t\t\t <div class=\"col-xs-1.5\" style=\"display: inline; \">\r\n");
      out.write("\t\t\t\t\t<div class=\"input-group\">\r\n");
      out.write("\t\t\t\t\t\t<div class=\"input-group-addon\">结束时间:</div>\r\n");
      out.write("\t\t\t\t\t\t<input id=\"patrolEndTm\" type=\"text\" class=\"form-control\" style=\"width: 150px;\">\r\n");
      out.write("\t\t\t\t\t</div>\r\n");
      out.write("\t\t\t\t</div>\r\n");
      out.write("\t\t\t\t<button id=\"query_cleanRoutine\" class=\"btn btn-primary\" style=\"background-color: #0ab1f8;border: 0px;margin-left:10px;\" type=\"button\" >\r\n");
      out.write("\t\t\t\t\t<span class=\"glyphicon glyphicon-search \" ></span>&nbsp;查&nbsp;询\r\n");
      out.write("\t\t\t\t</button>\r\n");
      out.write("\t\t\t\t<button  id=\"refreshCleanRou\"   class=\"btn btn-primary\" type=\"button\" style=\"background-color:#EE82EE;border: 0px;\">\r\n");
      out.write("\t\t\t\t\t<span class=\"glyphicon glyphicon-refresh\" ></span>&nbsp;刷&nbsp;新\r\n");
      out.write("\t\t\t\t</button>\r\n");
      out.write("\t\t\t</div>\r\n");
      out.write("\t\t</form>\r\n");
      out.write("\t</div>\r\n");
      out.write("</div>\r\n");
      out.write("<table id=\"cleanRoutineWork\"  style=\" text-overflow:ellipsis;\">\r\n");
      out.write("\t<thead>\r\n");
      out.write("\t\t<tr>\r\n");
      out.write("            <th field=\"uuid\" hidden=\"true\" width=\"1\">主那家</th>\r\n");
      out.write("            <th field=\"patrolUName\" width=\"25\" align=\"center\">保洁员</th>\r\n");
      out.write("            <th field=\"patroAddvnm\" width=\"25\" align=\"center\">所属行政</th>\r\n");
      out.write("            <th field=\"patrolTm\" width=\"40\" align=\"center\" formatter=\"cleanLog.formatterTm\">巡河开始时间</th>\r\n");
      out.write("            <th field=\"patrolEndTm\" width=\"40\" align=\"center\" formatter=\"cleanLog.formatterTm\">巡河结束时间</th>\r\n");
      out.write("            <th field=\"patrolStartPoint\" width=\"40\" align=\"center\"  formatter=\"cleanLog.formatterAdress\">巡河起点</th>\r\n");
      out.write("            <th field=\"patrolEndPoint\" width=\"40\" align=\"center\"  formatter=\"cleanLog.formatterAdress\">巡河终点</th>\r\n");
      out.write("            <th field=\"patrolTmLt\" width=\"30\" align=\"center\"   formatter=\"cleanLog.formatterPatrolTmLt\">巡河时长</th>\r\n");
      out.write("           <!--  <th field=\"patrolMileage\" width=\"30\" align=\"center\" formatter=\"cleanLog.formatterPatrolMileage\">巡河里程</th> -->\r\n");
      out.write("            <th field=\"patrolMileage\" width=\"30\" align=\"center\">巡河里程(米)</th>\r\n");
      out.write("            <th field=\"guiji\" width=\"20\" align=\"center\" formatter=\"cleanLog.formatterTraject_sub\">巡河轨迹</th>\r\n");
      out.write("\t\t</tr>\r\n");
      out.write("\t</thead>\r\n");
      out.write("</table>");
    } catch (java.lang.Throwable t) {
      if (!(t instanceof javax.servlet.jsp.SkipPageException)){
        out = _jspx_out;
        if (out != null && out.getBufferSize() != 0)
          try {
            if (response.isCommitted()) {
              out.flush();
            } else {
              out.clearBuffer();
            }
          } catch (java.io.IOException e) {}
        if (_jspx_page_context != null) _jspx_page_context.handlePageException(t);
        else throw new ServletException(t);
      }
    } finally {
      _jspxFactory.releasePageContext(_jspx_page_context);
    }
  }
}
