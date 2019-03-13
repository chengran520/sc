/*
 * Generated by the Jasper component of Apache Tomcat
 * Version: Apache Tomcat/8.0.36
 * Generated at: 2019-03-06 01:09:01 UTC
 * Note: The last modified time of this file was set to
 *       the last modified time of the source file after
 *       generation to assist with modification tracking.
 */
package org.apache.jsp.sewageOutlet;

import javax.servlet.*;
import javax.servlet.http.*;
import javax.servlet.jsp.*;

public final class sewageOutlet_jsp extends org.apache.jasper.runtime.HttpJspBase
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
      out.write("<link href=\"");
      out.print(request.getContextPath() );
      out.write("/basicSite/css/basicSite.css\" rel=\"stylesheet\">\r\n");
      out.write("<script src=\"");
      out.print(request.getContextPath() );
      out.write("/sewageOutlet/sewageOutlet.js\"></script>\r\n");
      out.write("<script type=\"text/javascript\">\r\n");
      out.write(" \tvar WEB_ROOT = \"");
      out.print(request.getContextPath());
      out.write("\";\r\n");
      out.write("</script>\r\n");
      out.write("<div class=\"headerDiv\" id=\"headerRvdiv\">\r\n");
      out.write("\t<div class=\"header-content\">\r\n");
      out.write("\t\t<h2>\r\n");
      out.write("\t\t\t<i class=\"fa icon-th-large\"></i>\r\n");
      out.write("\t\t\t<c>排污口基础信息</c>\r\n");
      out.write("\t\t</h2>\r\n");
      out.write("\t</div> \r\n");
      out.write("\t<div style=\"background-color: #FFFFFF;\"class=\"\" >\r\n");
      out.write("\t\t<div class=\"form-inline\" method=\"post\" id=\"form_data_info\">\r\n");
      out.write("\t\t\t<div id=\"siteDiv\" style=\"padding: 10px;border-bottom: 1px solid #dddddd;\">\r\n");
      out.write("\t\t\t\t<div class=\"col-xs-2.5\" style=\"display: inline;\">\r\n");
      out.write("\t\t\t\t\t<div class=\"input-group\">\r\n");
      out.write("\t\t\t\t\t  <span class=\"input-group-addon\" >排污口信息:</span>\r\n");
      out.write("\t\t\t\t\t  <input type=\"text\" class=\"form-control\" id=\"keyword\"  placeholder=\"请输入排污口编码、名称\">\r\n");
      out.write("\t\t\t\t\t</div>\r\n");
      out.write("\t\t\t\t</div>\t\t\r\n");
      out.write("\t\t\t\t<button id=\"querySewage\" class=\"btn btn-primary\" style=\"background-color: #0ab1f8;border: 0px;\" type=\"button\" >\r\n");
      out.write("\t\t\t\t\t<span class=\"glyphicon glyphicon-search \" ></span>&nbsp;查&nbsp;询\r\n");
      out.write("\t\t\t\t</button>\r\n");
      out.write("\t\t\t\t<button  id=\"refreshReservoir\"   class=\"btn btn-primary\" type=\"button\" style=\"background-color:#EE82EE;border: 0px;\">\r\n");
      out.write("\t\t\t\t\t<span class=\"glyphicon glyphicon-refresh\" ></span>&nbsp;刷&nbsp;新\r\n");
      out.write("\t\t\t\t</button>\r\n");
      out.write("\t\t\t</div>\r\n");
      out.write("\t\t</div>\r\n");
      out.write("\t</div>\r\n");
      out.write("</div>\r\n");
      out.write(" <table id=\"patrol_sewage\"  style=\"text-overflow:ellipsis;\">\r\n");
      out.write("   <thead>\r\n");
      out.write("\t <tr>\r\n");
      out.write("         <th field=\"name\" width=\"60\" align=\"left\">排污口名称</th>\r\n");
      out.write("         <th field=\"unit\" width=\"60\" align=\"left\" >设置单位</th>\r\n");
      out.write("         <th field=\"stand\" width=\"40\"  align=\"center\">法人代表</th>\r\n");
      out.write("         <th field=\"compDt\" width=\"40\" align=\"center\">建成使用时间</th>\r\n");
      out.write("         <th field=\"industry\" width=\"40\" align=\"center\">所属行业</th>\r\n");
      out.write("         <th field=\"waterIntake\" width=\"40\" align=\"center\">年取水量（万立方米）</th>\r\n");
      out.write("         <th field=\"rvNm\" width=\"40\"  align=\"center\">所在河流</th>\r\n");
      out.write("         <th field=\"emisTp\" width=\"40\" align=\"center\">排放方式</th>\r\n");
      out.write("         <th field=\"desRhhfwsl\" width=\"20\" align=\"center\">设计排污量</th>\r\n");
      out.write("         <th field=\"appRhhfwsl\" width=\"20\" align=\"center\">审批排污量</th>\r\n");
      out.write("         <th field=\"reaRhhfwsl\" width=\"20\" align=\"center\">实际排污量</th>\r\n");
      out.write("         <th field=\"pollutant\" width=\"40\" align=\"center\">主要污染物</th>\r\n");
      out.write("\t </tr>\r\n");
      out.write("   </thead>\r\n");
      out.write("  </table>\r\n");
      out.write("\r\n");
      out.write("\r\n");
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
