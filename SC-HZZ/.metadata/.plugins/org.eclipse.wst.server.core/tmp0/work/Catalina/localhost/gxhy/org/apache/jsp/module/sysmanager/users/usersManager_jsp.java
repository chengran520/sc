/*
 * Generated by the Jasper component of Apache Tomcat
 * Version: Apache Tomcat/8.0.36
 * Generated at: 2019-03-01 02:41:42 UTC
 * Note: The last modified time of this file was set to
 *       the last modified time of the source file after
 *       generation to assist with modification tracking.
 */
package org.apache.jsp.module.sysmanager.users;

import javax.servlet.*;
import javax.servlet.http.*;
import javax.servlet.jsp.*;
import org.apache.shiro.SecurityUtils;

public final class usersManager_jsp extends org.apache.jasper.runtime.HttpJspBase
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
    _jspx_imports_classes = new java.util.HashSet<>();
    _jspx_imports_classes.add("org.apache.shiro.SecurityUtils");
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

      out.write("\r\n");
      out.write("\r\n");
      out.write("\r\n");
      out.write("\r\n");
      out.write("\r\n");
      org.apache.jasper.runtime.JspRuntimeLibrary.include(request, response, "/common/base/include_BaseCommon.jsp", out, false);
      out.write("\r\n");
      out.write("<link href=\"");
      out.print(request.getContextPath() );
      out.write("/common/css/commonView.css\" rel=\"stylesheet\">\r\n");
      out.write("<link rel=\"stylesheet\" href=\"");
      out.print(request.getContextPath());
      out.write("/css/public.css\" >   \r\n");
      out.write("<link rel=\"stylesheet\" href=\"");
      out.print(request.getContextPath());
      out.write("/module/sysmanager/users/css/userInfo.css\" >      \r\n");
      out.write("<link rel=\"stylesheet\" href=\"");
      out.print(request.getContextPath());
      out.write("/css/bootstrapStyle.css\" >\r\n");
      out.write("<link rel=\"stylesheet\" href=\"");
      out.print(request.getContextPath());
      out.write("/css/menu.css\" >\r\n");
      out.write("<script type=\"text/javascript\" src=\"");
      out.print(request.getContextPath() );
      out.write("/common/js/adcdUtil/adcd.js\"></script>\r\n");
      out.write("<script type=\"text/javascript\" src=\"");
      out.print(request.getContextPath());
      out.write("/module/js/jquery.ztree.core.js\"></script>\r\n");
      out.write("<script type=\"text/javascript\" src=\"");
      out.print(request.getContextPath());
      out.write("/module/js/jquery.ztree.excheck.min.js\"></script>\r\n");
      out.write("<script type=\"text/javascript\" src=\"");
      out.print(request.getContextPath());
      out.write("/module/sysmanager/users/roleZtree.js\"></script>\r\n");
      out.write("<script type=\"text/javascript\" src=\"");
      out.print(request.getContextPath() );
      out.write("/module/sysmanager/users/select.js\"></script>\r\n");
      out.write("<script src=\"");
      out.print(request.getContextPath());
      out.write("/module/sysmanager/users/usersManager.js\"></script>\r\n");
      out.write("<script src=\"");
      out.print(request.getContextPath());
      out.write("/module/sysmanager/users/adcd_user.js\"></script>\r\n");
      out.write("<script type=\"text/javascript\">\r\n");
      out.write(" \tvar useradcd = '");
      out.print(SecurityUtils.getSubject().getSession().getAttribute("useradcd"));
      out.write("';\r\n");
      out.write(" \tvar WEB_ROOT = \"");
      out.print(request.getContextPath() );
      out.write("\";\r\n");
      out.write("</script>\r\n");
      out.write("<div class=\"headerDiv\" id=\"headerUserdiv\">\r\n");
      out.write("\t<div class=\"header-content\">\r\n");
      out.write("\t\t<h2>\r\n");
      out.write("\t\t\t<i class=\"fa icon-th-large\"></i>\r\n");
      out.write("\t\t\t<c>用户管理</c>\r\n");
      out.write("\t\t\t<span ></span>\r\n");
      out.write("\t\t</h2>\r\n");
      out.write("\t</div> \r\n");
      out.write("</div>\r\n");
      out.write("<div id=\"div_user\"  style=\"overflow: hidden;\">\r\n");
      out.write("\t<div style=\"width: 15%;float: left;\">\r\n");
      out.write("\t\t<div class=\"left-div\">\r\n");
      out.write("\t\t\t<i class=\"fa fa-home left-div-i\"></i>\r\n");
      out.write("\t\t\t<span class=\"left-div-span\">行政区域</span>\t\t\t\r\n");
      out.write("\t\t</div>\r\n");
      out.write("\t\t<div >\r\n");
      out.write("\t   \t\t <ul id=\"homeTree\" class=\"ztree tree\" style=\"margin-left:5px;border: 0px;overflow: auto;width: 97%;\"></ul>   \r\n");
      out.write("\t\t</div>\r\n");
      out.write("\t</div>\r\n");
      out.write("\t<div id=\"div_users\" style=\"width: 84%;float: left;overflow: hidden;border-left: 1px solid #ccc;\">\r\n");
      out.write("\t\t<div style=\"background-color: #FFFFFF;\" id=\"user_div_manager\">\r\n");
      out.write("\t\t\t<form class=\"form-inline\" method=\"post\" id=\"form_data_info\" >\r\n");
      out.write("\t\t\t\t<div style=\"padding: 10px;border-bottom: 1px solid #dddddd;\">\r\n");
      out.write("\t\t\t\t\t<div class=\"col-xs-2.2\" style=\"display: inline;\">\r\n");
      out.write("\t\t\t\t\t\t<div class=\"input-group\">\r\n");
      out.write("\t\t\t\t\t\t  <span class=\"input-group-addon\" >用户信息:</span>\r\n");
      out.write("\t\t\t\t\t\t  <input type=\"text\" class=\"form-control\" id=\"keyword\"  placeholder=\"请输入编码或名称\">\r\n");
      out.write("\t\t\t\t\t\t</div>\r\n");
      out.write("\t\t\t\t\t\t<div class=\"input-group\">\r\n");
      out.write("\t\t\t\t\t\t  <span class=\"input-group-addon\" >手机号码:</span>\r\n");
      out.write("\t\t\t\t\t\t  <input type=\"text\" class=\"form-control\" id=\"phone_query\"  placeholder=\"请输入手机号码\">\r\n");
      out.write("\t\t\t\t\t\t</div>\r\n");
      out.write("\t\t\t\t\t</div>\r\n");
      out.write("\t\t\t\t\t<button id=\"query\" class=\"btn btn-primary\" style=\"background-color: #0ab1f8;border: 0px;\" type=\"button\" >\r\n");
      out.write("\t\t\t\t\t\t<span class=\"glyphicon glyphicon-search\" ></span>&nbsp;查&nbsp;询\r\n");
      out.write("\t\t\t\t\t</button>\r\n");
      out.write("\t\t\t\t\t<button  id=\"add\" class=\"btn btn-primary\" data-toggle=\"modal\"  type=\"button\" style=\"background-color: #43CD80;border: 0px;\" >\r\n");
      out.write("\t\t\t\t\t\t<span class=\"glyphicon glyphicon-plus\" ></span>&nbsp;添&nbsp;加\r\n");
      out.write("\t\t\t\t\t</button>\r\n");
      out.write("\t\t\t\t\t<button  id=\"exportUsers\"   class=\"btn btn-primary\" type=\"button\" style=\"background-color:#FABC29;border: 0px;\">\r\n");
      out.write("\t\t\t\t\t\t<span class=\"glyphicon glyphicon-download-alt\" ></span>&nbsp;导&nbsp;出\r\n");
      out.write("\t\t\t\t\t</button>\r\n");
      out.write("\t\t\t\t\t<button  id=\"refreshMeeting\"   class=\"btn btn-primary\" type=\"button\" style=\"background-color:#EE82EE;border: 0px;\">\r\n");
      out.write("\t\t\t\t\t\t<span class=\"glyphicon glyphicon-refresh\" ></span>&nbsp;刷&nbsp;新\r\n");
      out.write("\t\t\t\t\t</button>\r\n");
      out.write("\t\t\t\t</div>\r\n");
      out.write("\t\t\t</form>\r\n");
      out.write("\t\t</div>\r\n");
      out.write("\t\t<div style=\"width: 100%;\">\r\n");
      out.write("\t\t\t<table id=\"patrol_catalogUser\"  style=\"text-overflow:ellipsis;width: 100%;\">\r\n");
      out.write("\t\t\t\t<thead>\r\n");
      out.write("\t\t\t\t\t<tr>\r\n");
      out.write("\t\t\t            <th field=\"uuid\"  hidden=\"true\" width=\"1\">用户</th>\r\n");
      out.write("\t\t\t            <th field=\"userId\"    width=\"30\"    align=\"center\" >用户编码</th>  \r\n");
      out.write("\t\t\t            <th field=\"userName\"  width=\"20\"    align=\"center\" halign=\"center\">用户姓名</th>\r\n");
      out.write("\t\t\t            <th field=\"deptNm\"    width=\"25\"    align=\"center\" halign=\"center\">部门</th>\r\n");
      out.write("\t\t\t            <th field=\"jobName\"    width=\"25\"    align=\"center\" halign=\"center\">职务</th>\r\n");
      out.write("\t\t\t            <th field=\"userPhone\"  width=\"30\"    align=\"center\" >手机号</th>\r\n");
      out.write("\t\t\t            <th field=\"addvnm\"      width=\"25\"    align=\"center\" >所辖行政区</th>\r\n");
      out.write("\t\t\t            <th field=\"updateTime\"  width=\"40\"    align=\"center\" formatter=\"userManager.formatterDataTm\">更新时间</th>\r\n");
      out.write("\t\t\t            <th field=\"auditStatus\" width=\"60\"    align=\"center\" formatter=\"userManager.formatterUser\">操作</th>\r\n");
      out.write("\t\t\t\t\t</tr>\r\n");
      out.write("\t\t\t\t</thead>\r\n");
      out.write("\t\t\t</table>\r\n");
      out.write("\t\t</div>\r\n");
      out.write("\t</div>\r\n");
      out.write("</div>\r\n");
      out.write("\r\n");
      out.write("\r\n");
      out.write("<!-- 模态框（Modal） -->\r\n");
      out.write("<div class=\"modal fade\" id=\"myModalAdd\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\" aria-hidden=\"true\"  style=\"overflow: hidden;\">\r\n");
      out.write("\t<div class=\"modal-dialog\">\r\n");
      out.write("\t\t<div class=\"modal-content\" style=\"width:750px;heigth:auto;\">\r\n");
      out.write("\t\t\t<div class=\"modal-header\" style=\"padding:10px;background-color: #009f95;color: #fff;\">\r\n");
      out.write("\t\t\t\t<button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\r\n");
      out.write("\t\t\t\t\t<span aria-hidden=\"true\" style=\"font-size: 32px;margin-right: 10px;\">×</span>\r\n");
      out.write("\t\t\t\t</button>\r\n");
      out.write("\t\t\t\t<h4 class=\"modal-title\" id=\"myModalLabel\">用户信息</h4>\r\n");
      out.write("\t\t\t</div>\r\n");
      out.write("\t\t\t<div class=\"modal-body\">\r\n");
      out.write("\t\t\t\t<form class=\"form-horizontal\" role=\"form\" id=\"form_data_user\">\r\n");
      out.write("\t\t\t\t   <input class=\"form-control\" name=\"uuid\" id=\"uuid\" type=\"hidden\">\r\n");
      out.write("\t\t\t\t   <div class=\"form-group\" style=\"margin-top: 14px;\" id=\"userDiv\">\r\n");
      out.write("\t\t\t\t\t   <label class=\"col-sm-3 control-label\"><span style=\"color: red;\" id=\"stat_span\">★</span>&nbsp;&nbsp;用户编码</label>\r\n");
      out.write("\t\t\t\t\t   <div class=\"col-sm-7\">\r\n");
      out.write("\t\t\t\t\t\t  <input class=\"form-control\" name=\"userId\" id=\"userId\" type=\"text\" placeholder=\"输入用户编码,一旦确定不能更改\" maxlength=\"15\">\r\n");
      out.write("\t\t\t\t\t  </div>\r\n");
      out.write("\t\t\t\t  </div>\r\n");
      out.write("\t\t\t\t  <div class=\"form-group\">\r\n");
      out.write("\t\t\t\t\t  <label class=\"col-sm-3 control-label\"><span style=\"color: red;\">★</span>&nbsp;&nbsp;用户名称</label>\r\n");
      out.write("\t\t\t\t\t <div class=\"col-sm-7\">\r\n");
      out.write("\t\t\t\t\t     <input class=\"form-control\" name=\"userName\" id=\"userName\" type=\"text\" placeholder=\"输入用户名称，要求中文\" maxlength=\"4\">\r\n");
      out.write("\t\t\t\t\t</div>\r\n");
      out.write("\t\t\t      </div>\r\n");
      out.write("\t\t\t       <div class=\"form-group\" id=\"pwd\">\r\n");
      out.write("\t\t\t\t\t  <label class=\"col-sm-3 control-label\"><span style=\"color: red;\">★</span>&nbsp;&nbsp;用户密码</label>\r\n");
      out.write("\t\t\t\t\t <div class=\"col-sm-7\">\r\n");
      out.write("\t\t\t\t\t     <input class=\"form-control\" name=\"userPassword\" id=\"userPassword\" type=\"Password\" placeholder=\"请输入密码\">\r\n");
      out.write("\t\t\t\t\t</div>\r\n");
      out.write("\t\t\t      </div> \r\n");
      out.write("\t\t\t      <div class=\"form-group\">\r\n");
      out.write("\t\t\t\t\t <label class=\"col-sm-3 control-label\"><span style=\"color: red;\">★</span>&nbsp;&nbsp;手&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;机</label>\r\n");
      out.write("\t\t\t\t\t <div class=\"col-sm-7\">\r\n");
      out.write("\t\t\t\t\t\t<input class=\"form-control\" name=\"userPhone\" id=\"userPhone\" type=\"text\"  placeholder=\"请输入手机号\">\r\n");
      out.write("\t\t\t\t\t </div>\r\n");
      out.write("\t\t\t\t </div>\r\n");
      out.write("\t\t\t\t <div class=\"form-group\" id=\"roleDiv\">\r\n");
      out.write("\t\t\t\t\t  <label class=\"col-sm-3 control-label\"><span style=\"color: red;\">★</span>&nbsp;&nbsp;角&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;色</label>\r\n");
      out.write("\t\t\t\t\t  <div class=\"col-sm-7\">\r\n");
      out.write("\t\t\t\t\t      <select class=\"form-control\" id=\"roleId\" name=\"roleId\">\r\n");
      out.write("\t\t\t\t\t      </select>\r\n");
      out.write("\t\t\t\t\t</div>\r\n");
      out.write("\t\t\t      </div>\r\n");
      out.write("\t\t\t       <div class=\"form-group\">\r\n");
      out.write("\t\t\t\t\t  <label class=\"col-sm-3 control-label\"><span style=\"color: red;\">★</span>&nbsp;&nbsp;部&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;门</label>\r\n");
      out.write("\t\t\t\t\t <div class=\"col-sm-7\">\r\n");
      out.write("\t\t\t\t\t      <select class=\"form-control\" id=\"deptId\" name=\"deptId\">\r\n");
      out.write("\t\t\t\t\t      </select>\r\n");
      out.write("\t\t\t\t\t</div>\r\n");
      out.write("\t\t\t      </div>\r\n");
      out.write("\t\t\t      <div class=\"form-group\">\r\n");
      out.write("\t\t\t\t\t  <label class=\"col-sm-3 control-label\"><span style=\"color: red;\">★</span>&nbsp;&nbsp;职&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;务</label>\r\n");
      out.write("\t\t\t\t\t <div class=\"col-sm-7\">\r\n");
      out.write("\t\t\t\t\t\t <select class=\"form-control\" id=\"job\" name=\"job\">\r\n");
      out.write("\t\t\t\t\t      </select>\r\n");
      out.write("\t\t\t\t\t</div>\r\n");
      out.write("\t\t\t      </div>\r\n");
      out.write("\t\t\t\t <div class=\"form-group\">\r\n");
      out.write("\t\t\t\t   <label class=\"col-sm-3 control-label\"><span style=\"color: red;\">★</span>&nbsp;&nbsp;行政区域</label>\r\n");
      out.write("\t\t\t\t\t   <div class=\"col-sm-2\">\r\n");
      out.write("\t\t\t\t\t\t  <select class=\"form-control\" name=\"addvcd1\"   id=\"province\"  class=\"form-control\" style=\"width: 125px;\">\t\t\t\t\t\r\n");
      out.write("\t\t\t\t\t      </select>\r\n");
      out.write("\t\t\t\t\t   </div>\r\n");
      out.write("\t\t\t\t\t   <div class=\"col-sm-2\" style=\"margin-left:14px;\">\r\n");
      out.write("\t\t\t\t\t      <select class=\"form-control\" name=\"addvcd2\"  id=\"city\" class=\"form-control\" style=\"width: 125px;\">\r\n");
      out.write("\t\t\t\t\t\t\t<option disabled=\"disabled\"  value=''  selected=\"selected\">-----市-----</option>\r\n");
      out.write("\t\t\t\t\t      </select>\r\n");
      out.write("\t\t\t\t\t   </div>\r\n");
      out.write("\t\t\t\t\t   <div class=\"col-sm-2\" style=\"margin-left:14px;\">\r\n");
      out.write("\t\t\t\t\t      <select  name=\"addvcd3\"  id=\"district\" class=\"form-control\" style=\"width: 125px;\">\r\n");
      out.write("\t\t\t\t\t\t\t<option  disabled=\"disabled\" value=''   selected=\"selected\">-----县区-----</option>\r\n");
      out.write("\t\t\t\t\t      </select>\r\n");
      out.write("\t\t\t\t\t   </div>\r\n");
      out.write("\t\t\t\t </div>\t\t\r\n");
      out.write("\t\t\t\t  <div class=\"form-group\">\r\n");
      out.write("\t\t\t\t   \t   <label class=\"col-sm-3 control-label\"></label>\r\n");
      out.write("\t\t\t\t\t   <div class=\"col-sm-2\">\r\n");
      out.write("\t\t\t\t\t      <select  name=\"addvcd4\"  id=\"country\" class=\"form-control\" style=\"width: 125px;\">\r\n");
      out.write("\t\t\t\t\t\t\t<option  disabled=\"disabled\" value=''   selected=\"selected\" id=\"countryOption\">-----乡镇-----</option>\r\n");
      out.write("\t\t\t\t\t      </select>\r\n");
      out.write("\t\t\t\t\t   </div>\r\n");
      out.write("\t\t\t\t\t   <div class=\"col-sm-2\" style=\"margin-left:14px;\">\r\n");
      out.write("\t\t\t\t\t      <select  name=\"addvcd5\"  id=\"village\" class=\"form-control\" style=\"width: 125px;\">\r\n");
      out.write("\t\t\t\t\t\t\t<option  disabled=\"disabled\" value=''   selected=\"selected\" id=\"villageOption\">-----村-----</option>\r\n");
      out.write("\t\t\t\t\t      </select>\r\n");
      out.write("\t\t\t\t\t   </div>\r\n");
      out.write("\t\t\t\t </div>\t\t\t\t\r\n");
      out.write("\t\t\t\t <div class=\"form-group\">\r\n");
      out.write("\t\t\t\t\t<label for=\"inputPassword\" class=\"col-sm-3 control-label\"><span style=\"color: red;display: none;\">★</span>&nbsp;&nbsp;管理河湖</label>\r\n");
      out.write("\t\t\t\t\t<div class=\"col-sm-7\">\r\n");
      out.write("\t\t\t\t\t\t<div class=\"row\">\r\n");
      out.write("\t\t\t\t\t\t    <div class=\"col-xs-4\" style=\"margin-top:10px;\">\r\n");
      out.write("\t\t\t\t\t\t        <div  class=\"selecteddiv\">可选河流</div>\r\n");
      out.write("\t\t\t\t\t\t        <select name=\"fromRiver\" id=\"search\" class=\"form-control\" size=\"8\" multiple=\"multiple\" style=\"height:130px;width:150px;\">\r\n");
      out.write("\t\t\t\t\t\t        </select>\r\n");
      out.write("\t\t\t\t\t\t    </div>\r\n");
      out.write("\t\t\t\t\t\t    <div class=\"col-xs-1\" style=\"margin-top:30px;margin-right: 30px;margin-left:30px;\">\r\n");
      out.write("\t\t\t\t\t\t        <button type=\"button\" id=\"search_rightAll\" class=\"btn btn-block a\" style=\"width:50px;background-color:#009f95;\"><i  style=\"color:white;\"   class=\"glyphicon glyphicon-forward\"></i></button>\r\n");
      out.write("\t\t\t\t\t\t        <button type=\"button\" id=\"search_rightSelected\" class=\"btn btn-block a\"  style=\"width:50px;background-color:#009f95;\"><i style=\"color:white;\" class=\"glyphicon glyphicon-chevron-right\"></i></button>\r\n");
      out.write("\t\t\t\t\t\t        <button type=\"button\" id=\"search_leftSelected\" class=\"btn btn-block a\"  style=\"width:50px;background-color:#009f95;\"><i style=\"color:white;\"  class=\"glyphicon glyphicon-chevron-left\"></i></button>\r\n");
      out.write("\t\t\t\t\t\t        <button type=\"button\" id=\"search_leftAll\" class=\"btn btn-block a\"  style=\"width:50px;background-color:#009f95;\"><i style=\"color:white;\"      class=\"glyphicon glyphicon-backward\"></i></button>\r\n");
      out.write("\t\t\t\t\t\t    </div>\r\n");
      out.write("\t\t\t\t\t\t    <div class=\"col-xs-4\" style=\"margin-top:10px;\">\r\n");
      out.write("\t\t\t\t\t\t    <div class=\"selecteddiv\">选择河流</div>\r\n");
      out.write("\t\t\t\t\t\t        <select name=\"toRiver\" id=\"search_to\" class=\"form-control\" size=\"8\" multiple=\"multiple\" style=\"height:130px;background-color: #fff;width:150px;\"></select>\r\n");
      out.write("\t\t\t\t\t\t    </div>\r\n");
      out.write("\t\t\t\t\t  </div>\r\n");
      out.write("\t\t\t\t\t</div>\r\n");
      out.write("\t\t\t\t </div>\r\n");
      out.write("\t\t\t\t <div class=\"form-group\">\r\n");
      out.write("\t\t\t\t   <label for=\"inputPassword\" class=\"col-sm-3 control-label\">性&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;别</label>\r\n");
      out.write("\t\t\t\t   <div class=\"col-sm-7\">\r\n");
      out.write("\t\t\t\t       <label>\r\n");
      out.write("\t\t                  <input type=\"radio\" value=\"1\" name=\"userSex\">&nbsp;男&nbsp;&nbsp;&nbsp;\r\n");
      out.write("\t\t               </label>\r\n");
      out.write("\t\t               <label>\r\n");
      out.write("\t\t                 <input type=\"radio\"  value=\"2\" name=\"userSex\">&nbsp;女&nbsp;&nbsp;&nbsp;\r\n");
      out.write("\t\t               </label>\r\n");
      out.write("\t\t          </div>\r\n");
      out.write("\t\t        </div>\r\n");
      out.write("\t\t\t   </form>\r\n");
      out.write("\t\t\t</div>\r\n");
      out.write("\t\t\t<div class=\"modal-footer\">\r\n");
      out.write("\t\t\t    <button class=\"btn btn-default btns\" type=\"button\" data-dismiss=\"modal\" style=\"color: #333;background-color: #fff;border-color: #adadad;\">\r\n");
      out.write("\t\t\t\t\t&nbsp;关&nbsp;闭\r\n");
      out.write("\t\t\t\t</button>\r\n");
      out.write("\t\t\t\t<button  class=\"btn btn-default btns\" id=\"saveUser\" type=\"button\">\r\n");
      out.write("\t\t\t\t    &nbsp;保&nbsp;存\r\n");
      out.write("\t\t\t\t</button>\r\n");
      out.write("\t\t\t\t<button class=\"btn btn-default btns\" type=\"button\" id=\"updateUser1\" style=\"display:none;\">\r\n");
      out.write("\t\t\t\t\t&nbsp;确&nbsp;定\r\n");
      out.write("\t\t\t\t</button>\r\n");
      out.write("\t\t\t\t\r\n");
      out.write("\t\t\t</div>\r\n");
      out.write("\t\t</div>\r\n");
      out.write("\t</div>\r\n");
      out.write("</div>\r\n");
      out.write("\r\n");
      out.write("<!-- 用户详情 -->\r\n");
      out.write("<div class=\"modal fade\" id=\"myModalDetail\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\"  style=\"overflow: hidden;\">\r\n");
      out.write("\t<div class=\"modal-dialog\" role=\"document\">\r\n");
      out.write("\t\t<div class=\"modal-content\" style=\"width:600px;height: auto;overflow-y: auto;overflow-x: hidden;\">\r\n");
      out.write("\t\t\t<div class=\"modal-header\" style=\"padding:8px;background-color: #009f95;color: #fff;\">\r\n");
      out.write("\t\t\t\t<button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\r\n");
      out.write("\t\t\t\t\t<span aria-hidden=\"true\" style=\"font-size: 32px;margin-right: 10px;\">×</span>\r\n");
      out.write("\t\t\t\t</button>\r\n");
      out.write("\t\t\t\t<h4 class=\"modal-title\" id=\"myModalLabel\">用户信息</h4>\r\n");
      out.write("\t\t\t</div>\r\n");
      out.write("\t\t\t<div>\r\n");
      out.write("\t\t\t    <table  id=\"ditable\">\r\n");
      out.write("\t\t\t\t   <tr>\r\n");
      out.write("\t\t\t\t      <td class=\"leftTr\">用户编码：</td>\r\n");
      out.write("\t\t\t\t      <td id=\"userId_detail\" class=\"rightTr\"></td>\r\n");
      out.write("\t\t\t\t      <td class=\"leftTr\">用户名称：</td>\r\n");
      out.write("\t\t\t\t      <td id=\"userName_detail\" class=\"rightTr\"></td>\r\n");
      out.write("\t\t\t\t   </tr>\r\n");
      out.write("\t\t\t\t   <tr>\r\n");
      out.write("\t\t\t\t      <td  class=\"leftTr\">部&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;门：</td>\r\n");
      out.write("\t\t\t\t      <td  id=\"deptName_detail\" class=\"rightTr\"></td>\r\n");
      out.write("\t\t\t\t      <td  class=\"leftTr\">职&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;务：</td>\r\n");
      out.write("\t\t\t\t      <td id=\"jobName_detail\" class=\"rightTr\"></td>\r\n");
      out.write("\t\t\t\t   </tr>\r\n");
      out.write("\t\t\t\t   <tr>\r\n");
      out.write("\t\t\t\t      <td  class=\"leftTr\">角&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;色：</td>\r\n");
      out.write("\t\t\t\t      <td   id=\"roleName_detail\" class=\"rightTr\"></td>\r\n");
      out.write("\t\t\t          <td  class=\"leftTr\">行政区划：</td>\r\n");
      out.write("\t\t\t\t      <td   id=\"addvnm_detail\" class=\"rightTr\"></td>\t     \r\n");
      out.write("\t\t\t\t   </tr>\r\n");
      out.write("\t\t\t\t    <tr>\r\n");
      out.write("\t\t\t\t      <td  class=\"leftTr\">手&nbsp;&nbsp;机&nbsp;&nbsp;号：</td>\r\n");
      out.write("\t\t\t\t      <td   id=\"phone_detail\" class=\"rightTr\"></td>\r\n");
      out.write("\t\t\t\t      <td  class=\"leftTr\">性&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;别：</td>\r\n");
      out.write("\t\t\t\t      <td   id=\"sex_detail\" class=\"rightTr\"></td>\r\n");
      out.write("\t\t\t\t   </tr>\r\n");
      out.write("\t\t\t\t    <tr>\r\n");
      out.write("\t\t\t\t      <td  class=\"leftTr\">注册时间：</td>\r\n");
      out.write("\t\t\t\t      <td   id=\"createTime_detail\"  class=\"rightTr\"></td>\r\n");
      out.write("\t\t\t\t      <td  class=\"leftTr\">更新时间：</td>\r\n");
      out.write("\t\t\t\t      <td id=\"updateTime_detail\"  class=\"rightTr\"></td>\r\n");
      out.write("\t\t\t\t   </tr>\r\n");
      out.write("\t\t\t  </table>\r\n");
      out.write("\t\t\t  <div>\r\n");
      out.write("\t\t\t\t    <div style=\"margin-left:30px;heigth:40px;line-height:40px;\">管理河湖：</div>\r\n");
      out.write("\t\t\t\t    <table id=\"river_detail\"></table>\r\n");
      out.write("\t\t\t  </div>\r\n");
      out.write("\t\t\t</div>\t\t  \t\t  \r\n");
      out.write("\t\t</div>\r\n");
      out.write("\t</div>\r\n");
      out.write("</div>\r\n");
      out.write("\r\n");
      out.write("<!-- 密码修改 -->\r\n");
      out.write("<div class=\"modal fade\" id=\"myModalPwd\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\"  style=\"overflow: hidden;\">\r\n");
      out.write("\t<div class=\"modal-dialog\" role=\"document\">\r\n");
      out.write("\t\t<div class=\"modal-content\" style=\"width:600px;height: auto;overflow-y: auto;overflow-x: hidden;\">\r\n");
      out.write("\t\t\t<div class=\"modal-header\" style=\"padding:8px;background-color: #009f95;color: #fff;\">\r\n");
      out.write("\t\t\t\t<button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\r\n");
      out.write("\t\t\t\t\t<span aria-hidden=\"true\" style=\"font-size: 32px;margin-right: 10px;\">×</span>\r\n");
      out.write("\t\t\t\t</button>\r\n");
      out.write("\t\t\t\t<h4 class=\"modal-title\" id=\"myModalLabel\">密码修改</h4>\r\n");
      out.write("\t\t\t</div>\r\n");
      out.write("\t\t\t<div>\r\n");
      out.write("\t\t\t  <form class=\"form-horizontal\" role=\"form\" id=\"form-update-pwd\">\r\n");
      out.write("\t\t\t\t   <input class=\"form-control\" name=\"uuid\" id=\"id-pwd\" type=\"hidden\">\r\n");
      out.write("\t\t\t\t   <div class=\"form-group\" style=\"margin-top: 14px;\" id=\"userDiv\">\r\n");
      out.write("\t\t\t\t\t   <label class=\"col-sm-3 control-label\"><span style=\"color: red;\" id=\"stat_span\">★</span>&nbsp;&nbsp;旧密码</label>\r\n");
      out.write("\t\t\t\t\t   <div class=\"col-sm-7\">\r\n");
      out.write("\t\t\t\t\t\t  <input class=\"form-control\" name=\"oldPwd\" id=\"oldPwd\" type=\"text\" placeholder=\"旧密码\" maxlength=\"12\">\r\n");
      out.write("\t\t\t\t\t  </div>  \r\n");
      out.write("\t\t\t\t  </div>\r\n");
      out.write("\t\t\t\t  <div class=\"form-group\">\r\n");
      out.write("\t\t\t\t\t  <label class=\"col-sm-3 control-label\"><span style=\"color: red;\">★</span>&nbsp;&nbsp;新密码</label>\r\n");
      out.write("\t\t\t\t\t <div class=\"col-sm-7\">\r\n");
      out.write("\t\t\t\t\t     <input class=\"form-control\" name=\"newPwd\" id=\"newPwd\" type=\"Password\" placeholder=\"输入新密码\" maxlength=\"12\">\r\n");
      out.write("\t\t\t\t\t</div>\r\n");
      out.write("\t\t\t      </div>\r\n");
      out.write("\t\t\t       <div class=\"form-group\" id=\"pwd\">\r\n");
      out.write("\t\t\t\t\t  <label class=\"col-sm-3 control-label\"><span style=\"color: red;\">★</span>&nbsp;&nbsp;再次输入</label>\r\n");
      out.write("\t\t\t\t\t <div class=\"col-sm-7\">\r\n");
      out.write("\t\t\t\t\t     <input class=\"form-control\" name=\"aglinPwd\" id=\"aglinPwd\" type=\"Password\" placeholder=\"再次输入新密码\" maxlength=\"12\" onkeyup=\"validate()\">\r\n");
      out.write("\t\t\t\t\t</div>\r\n");
      out.write("\t\t\t      </div> \r\n");
      out.write("\t\t\t   </form>\r\n");
      out.write("\t\t\t</div>\t\t\r\n");
      out.write("\t\t\t<div class=\"modal-footer\">\r\n");
      out.write("\t\t\t    <button class=\"btn btn-default btns\" type=\"button\" data-dismiss=\"modal\"  style=\"color: #333;background-color: #fff;border-color: #adadad;\">\r\n");
      out.write("\t\t\t\t\t&nbsp;关&nbsp;闭\r\n");
      out.write("\t\t\t\t</button>\r\n");
      out.write("\t\t\t\t<button class=\"btn btn-default btns\" type=\"button\" id=\"updatePwd-id\">\r\n");
      out.write("\t\t\t\t\t&nbsp;确&nbsp;定\r\n");
      out.write("\t\t\t\t</button>\t\t\t\t\r\n");
      out.write("\t\t\t</div>  \t\t  \r\n");
      out.write("\t\t</div>\r\n");
      out.write("\t</div>\r\n");
      out.write("</div>\r\n");
      out.write("\r\n");
      out.write("<!-- 设置角色 -->\r\n");
      out.write("<div class=\"modal fade\" id=\"setRoleModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\" aria-hidden=\"true\" style=\"overflow: hidden;\">\r\n");
      out.write("    <div class=\"modal-dialog\" role=\"document\">\r\n");
      out.write("        <div class=\"modal-content\" style=\"width:380px;\">\r\n");
      out.write("            <div class=\"modal-header\" style=\"padding:10px;background-color: #009f95;color: #fff;\">\r\n");
      out.write("                <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-hidden=\"true\">&times;</button>\r\n");
      out.write("                <h4 class=\"modal-title\" id=\"myModalLabel\" >设置角色</h4>\r\n");
      out.write("            </div>\r\n");
      out.write("            <div class=\"modal-body\" style=\"margin-left:10px;\">\r\n");
      out.write("                <input class=\"form-control\"  id=\"roleName\" type=\"text\" placeholder=\"用户角色\"  onkeyup=\"AutoMatchRole(this)\"  style=\"width:220px;\">\r\n");
      out.write("                <input id='user_Id'  type='hidden' value=\"\"/>\r\n");
      out.write("                <input id='role_Id'  type='hidden' value=\"\"/>\r\n");
      out.write("                <div id=\"menuContent\" class=\"menuContent\">\r\n");
      out.write("\t\t\t       <ul id=\"roleZtree\"  class=\"ztree\" style=\"margin-top:0;\"></ul>\r\n");
      out.write("\t\t\t    </div>\t \r\n");
      out.write("            </div>\r\n");
      out.write("           <div class=\"modal-footer\">\r\n");
      out.write("                <button type=\"button\" class=\"btn btn-default btns\" data-dismiss=\"modal\"   style=\"color: #333;background-color: #fff;border-color: #adadad;\">关 闭</button>\r\n");
      out.write("\t\t        <button type=\"button\" class=\"btn btn-default btns\" id=\"updateRole\">保存</button>\r\n");
      out.write("                \r\n");
      out.write("           </div>\r\n");
      out.write("        </div>\r\n");
      out.write("    </div>\r\n");
      out.write("</div>");
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