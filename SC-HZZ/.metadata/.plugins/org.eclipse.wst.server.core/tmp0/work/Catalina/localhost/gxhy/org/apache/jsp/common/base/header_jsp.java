/*
 * Generated by the Jasper component of Apache Tomcat
 * Version: Apache Tomcat/8.0.36
 * Generated at: 2019-02-11 01:02:20 UTC
 * Note: The last modified time of this file was set to
 *       the last modified time of the source file after
 *       generation to assist with modification tracking.
 */
package org.apache.jsp.common.base;

import javax.servlet.*;
import javax.servlet.http.*;
import javax.servlet.jsp.*;
import org.apache.shiro.subject.Subject;
import org.apache.shiro.SecurityUtils;
import com.gxhy.base.domain.SysUsers;

public final class header_jsp extends org.apache.jasper.runtime.HttpJspBase
    implements org.apache.jasper.runtime.JspSourceDependent,
                 org.apache.jasper.runtime.JspSourceImports {

  private static final javax.servlet.jsp.JspFactory _jspxFactory =
          javax.servlet.jsp.JspFactory.getDefaultFactory();

  private static java.util.Map<java.lang.String,java.lang.Long> _jspx_dependants;

  static {
    _jspx_dependants = new java.util.HashMap<java.lang.String,java.lang.Long>(2);
    _jspx_dependants.put("/common/base/taglibs_logout.jsp", Long.valueOf(1548291576430L));
    _jspx_dependants.put("/WEB-INF/tld/menuTag.tld", Long.valueOf(1548291598841L));
  }

  private static final java.util.Set<java.lang.String> _jspx_imports_packages;

  private static final java.util.Set<java.lang.String> _jspx_imports_classes;

  static {
    _jspx_imports_packages = new java.util.HashSet<>();
    _jspx_imports_packages.add("javax.servlet");
    _jspx_imports_packages.add("javax.servlet.http");
    _jspx_imports_packages.add("javax.servlet.jsp");
    _jspx_imports_classes = new java.util.HashSet<>();
    _jspx_imports_classes.add("com.gxhy.base.domain.SysUsers");
    _jspx_imports_classes.add("org.apache.shiro.subject.Subject");
    _jspx_imports_classes.add("org.apache.shiro.SecurityUtils");
  }

  private org.apache.jasper.runtime.TagHandlerPool _005fjspx_005ftagPool_005fmenu_005findexHeaderMenu_005fnobody;

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
    _005fjspx_005ftagPool_005fmenu_005findexHeaderMenu_005fnobody = org.apache.jasper.runtime.TagHandlerPool.getTagHandlerPool(getServletConfig());
  }

  public void _jspDestroy() {
    _005fjspx_005ftagPool_005fmenu_005findexHeaderMenu_005fnobody.release();
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
      out.write("\r\n");
      out.write("\r\n");
      out.write("\r\n");

	String appPath = request.getScheme() + "://"+ request.getServerName() + ":" + request.getServerPort();
	pageContext.setAttribute("appPath", appPath);
    pageContext.setAttribute("basePath", request.getContextPath()+"/");
	SysUsers user = (SysUsers)request.getSession().getAttribute("user");
    if(user !=null && user.getUserId() != null){
  		  pageContext.setAttribute("username", user.getUserName());
    }else{
    	 Subject currentUser = SecurityUtils.getSubject();
    	 currentUser.getSession().removeAttribute("user");
    	 currentUser.getSession().removeAttribute("username");
    	 currentUser.getSession().removeAttribute("userId");
    	 request.getSession().removeAttribute("user");
    }

      out.write('\r');
      out.write('\n');
      out.write("\r\n");
      out.write(" \r\n");
      out.write("<link rel=\"stylesheet\" href=\"");
      out.print(request.getContextPath());
      out.write("/common/css/showBo.css\" >\r\n");
      out.write("<link rel=\"stylesheet\" href=\"");
      out.print(request.getContextPath());
      out.write("/common/css/header.css\" >\r\n");
      out.write("<link rel=\"stylesheet\" href=\"");
      out.print(request.getContextPath());
      out.write("/common/css/screen.css\" >\r\n");
      out.write("<link rel=\"stylesheet\" href=\"");
      out.print(request.getContextPath());
      out.write("/common/css/header-icon.css\" >\r\n");
      out.write("<script src=\"");
      out.print(request.getContextPath());
      out.write("/common/js/showBo.js\"></script>\r\n");
      out.write("<script src=\"");
      out.print(request.getContextPath());
      out.write("/common/js/header.js\"></script>\r\n");
      out.write("<script type=\"text/javascript\">\n");
      out.write("\tvar userId = '");
      out.print(SecurityUtils.getSubject().getSession().getAttribute("username"));
      out.write("';\r\n");
      out.write("\tvar WEB_ROOT = \"");
      out.print(request.getContextPath() );
      out.write("\";\r\n");
      out.write("</script>\r\n");
      out.write("<style>\r\n");
      out.write("</style>\r\n");
      out.write("<nav class=\"navbar-gxhy\" id=\"menu_wrap\"> \r\n");
      out.write("       <div class=\"navbar-header\">\r\n");
      out.write("           <img src='");
      out.write((java.lang.String) org.apache.jasper.runtime.PageContextImpl.proprietaryEvaluate("${basePath}", java.lang.String.class, (javax.servlet.jsp.PageContext)_jspx_page_context, null));
      out.write("common/images/schzz_logo.png' style=\"width:40px;height:35px;margin-top: -5px;vertical-align:middle;\"/>\r\n");
      out.write("          \t<span style=\"color: #FFFFFF;font-size: 20px;\">石城县水质水量水环境监测平台</span>\r\n");
      out.write("       </div> \r\n");
      out.write("       <div class=\"collapse navbar-collapse navbar-menu\" id=\"header-menu-div\" style=\"float: left;\">\r\n");
      out.write("           <ul class=\"nav navbar-nav navbar-menu navber-menu-ul\" id=\"navLinks\">\r\n");
      out.write("         \t\t\t");
      if (_jspx_meth_menu_005findexHeaderMenu_005f0(_jspx_page_context))
        return;
      out.write("\r\n");
      out.write("\t\t</ul> \r\n");
      out.write("       </div>\r\n");
      out.write("       <div class=\"navber-menu-div\">\r\n");
      out.write("       \t<ul>\r\n");
      out.write("       \t\t<li>\r\n");
      out.write("       \t\t\t<a>\r\n");
      out.write("\t               \t<i  class=\"fa fa-user-circle-o\" style=\"\"></i>\r\n");
      out.write("\t             \t<span >");
      out.write((java.lang.String) org.apache.jasper.runtime.PageContextImpl.proprietaryEvaluate("${username}", java.lang.String.class, (javax.servlet.jsp.PageContext)_jspx_page_context, null));
      out.write("</span>\r\n");
      out.write("       \t\t\t</a>\r\n");
      out.write("       \t\t</li>\r\n");
      out.write("       \t\t<li id=\"logOut\">\r\n");
      out.write("       \t\t\t<a>\r\n");
      out.write("\t               \t<i  class=\"fa fa-power-off\"></i>\r\n");
      out.write("\t             \t<span>安全退出</span>\r\n");
      out.write("       \t\t\t</a>\r\n");
      out.write("       \t\t</li>\r\n");
      out.write("       \t</ul>\r\n");
      out.write("       </div>\r\n");
      out.write("</nav>\r\n");
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

  private boolean _jspx_meth_menu_005findexHeaderMenu_005f0(javax.servlet.jsp.PageContext _jspx_page_context)
          throws java.lang.Throwable {
    javax.servlet.jsp.PageContext pageContext = _jspx_page_context;
    javax.servlet.jsp.JspWriter out = _jspx_page_context.getOut();
    //  menu:indexHeaderMenu
    com.gxhy.app.tag.IndexHeaderMenuTag _jspx_th_menu_005findexHeaderMenu_005f0 = (com.gxhy.app.tag.IndexHeaderMenuTag) _005fjspx_005ftagPool_005fmenu_005findexHeaderMenu_005fnobody.get(com.gxhy.app.tag.IndexHeaderMenuTag.class);
    _jspx_th_menu_005findexHeaderMenu_005f0.setPageContext(_jspx_page_context);
    _jspx_th_menu_005findexHeaderMenu_005f0.setParent(null);
    int[] _jspx_push_body_count_menu_005findexHeaderMenu_005f0 = new int[] { 0 };
    try {
      int _jspx_eval_menu_005findexHeaderMenu_005f0 = _jspx_th_menu_005findexHeaderMenu_005f0.doStartTag();
      if (_jspx_th_menu_005findexHeaderMenu_005f0.doEndTag() == javax.servlet.jsp.tagext.Tag.SKIP_PAGE) {
        return true;
      }
    } catch (java.lang.Throwable _jspx_exception) {
      while (_jspx_push_body_count_menu_005findexHeaderMenu_005f0[0]-- > 0)
        out = _jspx_page_context.popBody();
      _jspx_th_menu_005findexHeaderMenu_005f0.doCatch(_jspx_exception);
    } finally {
      _jspx_th_menu_005findexHeaderMenu_005f0.doFinally();
      _005fjspx_005ftagPool_005fmenu_005findexHeaderMenu_005fnobody.reuse(_jspx_th_menu_005findexHeaderMenu_005f0);
    }
    return false;
  }
}
