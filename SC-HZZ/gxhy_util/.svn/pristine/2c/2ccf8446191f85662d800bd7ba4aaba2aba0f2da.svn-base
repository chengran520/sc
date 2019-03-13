package com.gxhy.base.util;

import javax.servlet.http.HttpServletRequest;

import com.alibaba.fastjson.JSONObject;


 /**
  * 
  * @author yb
  * @2017年7月14日下午6:43:13   
  * @CopyRight gxhy
  */
public class ReqSupportUtil {

    /**
     * 自定义range
     * 
     * @author wans 2015年7月28日
     */
    public static JSONObject RequestInitRanges(HttpServletRequest request, JSONObject js) {
        if (js == null) {
            js = new JSONObject();
        }
        String[] ranges = null;
        String rangesHeader = request.getHeader("Range");
        if (rangesHeader != null) {
            ranges = rangesHeader.split(",");
        }
        else {
            if (request.getParameter("rows") != null) {
                int size = Integer.parseInt(request.getParameter("rows"));
                js.put("size", size);
            }
            if (request.getParameter("page") != null) {
                int num = Integer.parseInt(request.getParameter("page"));
                js.put("num", num);
            }
            return js;
        }

        if (ranges != null && ranges.length > 0) {
            for (String range : ranges) {
                if (range.startsWith("limits")) {// 分页，格式limits=0-3
                    range = range.trim().replace("limits=", "");
                    String[] limits = range.split("-");
                    js.put("num", limits[0]);
                    js.put("size", limits[1]);
                }
            }
        }
        return js;
    }

  
}
