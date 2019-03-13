package com.gxhy.base.util;

import java.util.Enumeration;
import java.util.HashMap;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;

/**
 * 把HttpServletRequest 保存到当前线程中，同一线程共享该对象 在{BaseFilter}过滤器开始处设置HttpServletRequest，finally处移除之
 * @author yb
 *
 */
public class HttpServletRequestHolder {
    private static ThreadLocal<HttpServletRequest> threadLocal = new ThreadLocal<HttpServletRequest>();

    public static void setRequest(HttpServletRequest request) {
        threadLocal.set(request);
    }

    public static HttpServletRequest getRequest() {
        return threadLocal.get();
    }

    public static void remove() {
        threadLocal.remove();
    }

    /**
     * 判断是否为webservice请求，本系统cxf发布的webservice，配置的servlet路径为/services/*(见工程的web.xml)
     * 
     * @param request
     * @return
     */
    public static boolean isWebServiceRquest(HttpServletRequest request) {
        return "/services".equals(request.getServletPath());
    }

    public static boolean isPdaServiceRequest(HttpServletRequest request) {
        Map<String, String> mapInfo = getHeadersInfo(request);
        String strToken = mapInfo.get("token");
        if (strToken != null && strToken.startsWith("pda")) {
            return true;
        }
        else
            return false;
    }

    public static boolean isTokenServiceRequest(HttpServletRequest request) {
        Map<String, String> mapInfo = getHeadersInfo(request);
        String strToken = mapInfo.get("token");
        if (StringUtil.isNotEmpty(strToken)) {
            return true;
        }
        else
            return false;
    }

    private static Map<String, String> getHeadersInfo(HttpServletRequest httpRequest) {
        Map<String, String> map = new HashMap<String, String>();
        try {
            Enumeration headerNames = httpRequest.getHeaderNames();
            while (headerNames.hasMoreElements()) {
                String key = (String) headerNames.nextElement();
                String value = httpRequest.getHeader(key);
                map.put(key, value);
            }
        }
        catch (Exception e) {
            e.printStackTrace();
        }
        return map;
    }
}
