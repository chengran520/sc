/*
 * Generated by the Jasper component of Apache Tomcat
 * Version: Apache Tomcat/8.0.36
 * Generated at: 2019-02-11 01:02:22 UTC
 * Note: The last modified time of this file was set to
 *       the last modified time of the source file after
 *       generation to assist with modification tracking.
 */
package org.apache.jsp.gis_005fmap;

import javax.servlet.*;
import javax.servlet.http.*;
import javax.servlet.jsp.*;

public final class gismap_jsp extends org.apache.jasper.runtime.HttpJspBase
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
 request.setCharacterEncoding("UTF-8");
      out.write("\r\n");
      out.write("<meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\">\r\n");
      org.apache.jasper.runtime.JspRuntimeLibrary.include(request, response, "/common/base/include_BaseCommon.jsp", out, false);
      out.write("\r\n");
      out.write("<link rel=\"stylesheet\" href=\"");
      out.print(request.getContextPath());
      out.write("/css/bootstrapStyle.css\" >\r\n");
      out.write("<link href=\"css/MapView.css\" rel=\"stylesheet\">\r\n");
      out.write("<link href=\"css/Tiandt.css\" rel=\"stylesheet\">\r\n");
      out.write("<script type=\"text/javascript\">\r\n");
      out.write(" \tvar WEB_ROOT = \"");
      out.print(request.getContextPath() );
      out.write("\";\r\n");
      out.write("</script>\r\n");
      out.write("<div id=\"map\" class=\"all_map\"></div>\r\n");
      out.write("<div id=\"win_div_map\" class=\"win_div_map\">\r\n");
      out.write("\t<div style=\"width: 290px;height: 97%;background-color: #FFF;\">\r\n");
      out.write("\t\t<div style=\"width: 100%; height: 100%; display: block;\" class=\"rdijit-layout-tab3\"  >\r\n");
      out.write("\t\t\t<div id=\"mapHread\">\r\n");
      out.write("\t\t\t\t<div id=\"content_list_div\">\r\n");
      out.write("\t\t\t\t\t<div class=\"iconItem all rdijit-state-selected\">\r\n");
      out.write("\t\t\t\t\t\t<i class=\"fa fa-ship\"></i><span > 河流</span>\r\n");
      out.write("\t\t\t\t\t</div>\r\n");
      out.write("\t\t\t\t\t<div class=\"iconItem fav\">\r\n");
      out.write("\t\t\t\t\t\t<i class=\"fa fa-group\"></i><span > 测站</span>\r\n");
      out.write("\t\t\t\t\t</div>\r\n");
      out.write("\t\t\t\t\t<div class=\"iconItem more\">\r\n");
      out.write("\t\t\t\t\t\t<i class=\"fa fa-align-justify\"></i><span > 更多...</span>\r\n");
      out.write("\t\t\t\t\t</div> \r\n");
      out.write("\t\t\t\t</div>\r\n");
      out.write("\t\t\t</div>\r\n");
      out.write("\t\t\t<div  class=\"rdijit-layout-viewstack\" style=\"width: 100%\">\r\n");
      out.write("\t\t\t\t<div style=\"position: relative; display: block;\">\r\n");
      out.write("\t\t\t\t\t<div class=\"input-group\" id=\"inpt_query\">\r\n");
      out.write("\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" id=\"keyText\" placeholder=\"输入查询关键字...\">\r\n");
      out.write("\t\t\t\t\t\t<span class=\"input-group-btn\" id=\"rv_btn\" >\r\n");
      out.write("\t\t\t\t\t\t\t<button class=\"btn btn-primary pull-right\" type=\"button\" style=\"width: 70px;background-color: #1C86EE;border: 0px;height: 34px;\"><i class=\"fa\"></i>查&nbsp;询</button>\r\n");
      out.write("\t\t\t\t\t\t</span>\r\n");
      out.write("\t\t\t\t\t</div>\r\n");
      out.write("\t\t\t\t\t<div id=\"all_div\">\r\n");
      out.write("\t\t\t\t\t\t<div class=\"data_monitor_stationList_defaultView\" id=\"stationList_defaultView\" ></div>\r\n");
      out.write("\t\t\t\t\t</div>\r\n");
      out.write("\t\t\t\t</div>\r\n");
      out.write("\t\t\t</div>\r\n");
      out.write("\t\t</div>\r\n");
      out.write("\t</div>\r\n");
      out.write("</div>\r\n");
      out.write("<div class=\"tab-tl-div\">\r\n");
      out.write("\t<div class=\"tab-div-img\">\r\n");
      out.write("\t\t<span style=\"width: 85%;float: left;margin: 4px 0 0 6px;\">图例</span>\r\n");
      out.write("\t\t<img id=\"img1\" class=\"show_img\" src=\"images/del.png\">\r\n");
      out.write("\t\t<img id=\"img2\" class=\"show_img\" style=\"display: none;\" src=\"images/add.png\">\r\n");
      out.write("\t</div>\r\n");
      out.write("\t");
      out.write("\r\n");
      out.write("\t<div id=\"divImg\"> \r\n");
      out.write("\t\t<label class=\"demo--label\"><input class=\"demo--radio\" type=\"checkbox\" checked=\"checked\" name=\"demo-checkbox1\" value=\"pp\">\r\n");
      out.write("\t        <span class=\"demo--checkbox demo--radioInput\"></span><img  class=\"demo-img\" src=\"");
      out.print(request.getContextPath() );
      out.write("/common/images/river/pp_0.png\">雨量站\r\n");
      out.write("\t    </label>\r\n");
      out.write("\t    <label class=\"demo--label\">\r\n");
      out.write("\t        <input class=\"demo--radio\" type=\"checkbox\" name=\"demo-checkbox2\" checked=\"checked\" value=\"zz\">\r\n");
      out.write("\t        <span class=\"demo--checkbox demo--radioInput\"></span><img  class=\"demo-img\" src=\"");
      out.print(request.getContextPath() );
      out.write("/common/images/river/sk1.png\">水位站\r\n");
      out.write("\t    </label>\r\n");
      out.write("\t");
      out.write("\r\n");
      out.write("\t    <label class=\"demo--label\">\r\n");
      out.write("\t        <input class=\"demo--radio\" type=\"checkbox\" name=\"demo-checkbox4\" checked=\"checked\" value=\"sz\">\r\n");
      out.write("\t        <span class=\"demo--checkbox demo--radioInput\"></span><img  class=\"demo-img\" src=\"");
      out.print(request.getContextPath() );
      out.write("/common/images/river/shuiz.png\">水质站\r\n");
      out.write("\t    </label>\r\n");
      out.write("\t    <label class=\"demo--label\">\r\n");
      out.write("\t        <input class=\"demo--radio\" type=\"checkbox\" name=\"demo-checkbox5\" checked=\"checked\" value=\"sp\">\r\n");
      out.write("\t        <span class=\"demo--checkbox demo--radioInput\"></span><img  class=\"demo-img\" style=\"height: 14px;\" src=\"");
      out.print(request.getContextPath() );
      out.write("/common/images/river/video.png\">视频站\r\n");
      out.write("\t    </label>\r\n");
      out.write("\t    <label class=\"demo--label\">\r\n");
      out.write("\t        <input class=\"demo--radio\" type=\"checkbox\" name=\"demo-checkbox6\" value=\"pw\">\r\n");
      out.write("\t        <span class=\"demo--checkbox demo--radioInput\"></span><img    class=\"demo-img\" src=\"");
      out.print(request.getContextPath() );
      out.write("/common/images/river/paiwk.png\">排污口\r\n");
      out.write("\t    </label>\r\n");
      out.write("\t    <label class=\"demo--label\">\r\n");
      out.write("\t        <input class=\"demo--radio\" type=\"checkbox\" name=\"demo-checkbox6\" value=\"sy\">\r\n");
      out.write("\t        <span class=\"demo--checkbox demo--radioInput\"></span><img    class=\"demo-img\" src=\"");
      out.print(request.getContextPath() );
      out.write("/common/images/river/dbsyd.png\">水源地\r\n");
      out.write("\t    </label>\r\n");
      out.write("    </div>\r\n");
      out.write("</div>\r\n");
      out.write("\r\n");
      out.write("<div class=\"tab-resizer\" id=\"tab-resizer\" style=\"float: left;display:block;\" >\r\n");
      out.write("\t<div class=\"action-node\" ></div>\r\n");
      out.write("</div>\r\n");
      out.write("<div class=\"tab-gxhy\">\r\n");
      out.write("\t<span id=\"tb-zoom\" class=\"tab-gxhy-g gx\"></span>\r\n");
      out.write("\t<span id=\"lgt\" class=\"tab-gxhy-g gx\" ></span>\r\n");
      out.write("\t<div class=\"tab-gxhy-v\">\r\n");
      out.write("\t\t<span class=\"tab-gxhy-g\">技术支持：北京国信华源科技有限公司   <a href=\"http://www.bjgxhy.com\" target=\"blank\" style=\"color: #fff;text-decoration: none;\">www.bjgxhy.com</a></span>\r\n");
      out.write("\t</div>\r\n");
      out.write("</div>\r\n");
      out.write("\r\n");
      out.write("<div class=\"layer-pop\" style=\"display: none;\">\r\n");
      out.write("\t<div class=\"layer_container\">\r\n");
      out.write("\t\t<div class=\"layer-items clearfix\">\r\n");
      out.write("\t\t\t<!---->\r\n");
      out.write("\t\t\t<a href=\"javascript:void(0);\" id=\"img_type\" class=\"layer-item\"><div class=\"layer_bg\"></div> <span class=\"layer-tip\">影像</span></a>\r\n");
      out.write("\t\t\t<a href=\"javascript:void(0);\" id=\"ter_type\" class=\"layer-item\"><div class=\"layer_bg\"></div> <span class=\"layer-tip\">矢量</span></a>\r\n");
      out.write("\t\t</div>\r\n");
      out.write("\t</div>\r\n");
      out.write("</div>\r\n");
      out.write("<!-- 全景图 -->\r\n");
      out.write("<div class=\"modal fade\"  id=\"modalAnimate\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\">\r\n");
      out.write("\t<div class=\"modal-dialog\" role=\"document\">\r\n");
      out.write("\t\t<div class=\"modal-content\" style=\"width:902px;\">\r\n");
      out.write("\t\t\t<div class=\"modal-header\" style=\"padding:10px;background-color: #009f95;color: #fff;\">\r\n");
      out.write("\t\t\t\t<button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\r\n");
      out.write("\t\t\t\t\t<span aria-hidden=\"true\" style=\"font-size: 32px;margin-right: 10px;\">×</span>\r\n");
      out.write("\t\t\t\t</button>\r\n");
      out.write("\t\t\t\t<h4 class=\"modal-title\" id=\"animate_ModalLabel\"></h4>\r\n");
      out.write("\t\t\t</div>\r\n");
      out.write("\t\t\t<div  id=\"panorama_model\" style=\"width: 900px;height: 550px;\"></div>\r\n");
      out.write("\t\t</div>\r\n");
      out.write("\t</div>\r\n");
      out.write("</div>\r\n");
      out.write("\r\n");
      out.write("<!-- 应急预案 -->\r\n");
      out.write("<div class=\"modal fade\" id=\"pewModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\" aria-hidden=\"true\" >\r\n");
      out.write("    <div class=\"modal-dialog\">\r\n");
      out.write("        <div class=\"modal-content\" style=\"width:480px;height:450px;\">\r\n");
      out.write("            <div class=\"modal-header\" style=\"padding:10px;background-color: #009f95;color: #fff;\">\r\n");
      out.write("                <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-hidden=\"true\">&times;</button>\r\n");
      out.write("                <h4 class=\"modal-title\" id=\"myModalLabel\" >应急预案</h4>\r\n");
      out.write("            </div>\r\n");
      out.write("            <div class=\"modal-body\" id=\"pew_div\" style=\"height: 370px;overflow: auto;\">\r\n");
      out.write("                 <input id=\"roleZtreeId\"   type=\"hidden\" value=\"\"/>\r\n");
      out.write("                 <ul id=\"pewZtree\" class=\"ztree\" ></ul>\r\n");
      out.write("            </div>\r\n");
      out.write("        </div>\r\n");
      out.write("    </div>\r\n");
      out.write("</div>\r\n");
      out.write("\r\n");
      out.write("<script src=\"http://api.tianditu.com/api?v=4.0\" type=\"text/javascript\"></script>\r\n");
      out.write("<script type=\"text/javascript\" src=\"");
      out.print(request.getContextPath());
      out.write("/module/js/jquery.ztree.core.js\"></script>\r\n");
      out.write("<script type=\"text/javascript\" src=\"");
      out.print(request.getContextPath());
      out.write("/module/js/jquery.ztree.excheck.min.js\"></script>\r\n");
      out.write("<script src=\"js/gismap.js\"></script>\r\n");
      out.write("<script src=\"js/TiandtData.js\"></script>\r\n");
      out.write("<script src=\"js/MapMroe.js\"></script>\r\n");
      out.write("<script src=\"js/tdtData.js\"></script>\r\n");
      out.write("<script src=\"js/three.js\"></script>\r\n");
      out.write("<script src=\"js/CSS3DRenderer.js\"></script>\r\n");
      out.write("<script src=\"js/previewZtree.js\"></script>\r\n");
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
