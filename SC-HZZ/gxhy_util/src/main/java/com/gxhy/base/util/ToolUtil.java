package com.gxhy.base.util;
import com.alibaba.fastjson.JSON;
import com.alibaba.fastjson.JSONObject;

public class ToolUtil{
	  public static String getLocationInfo(String location) {
		  String locat=location.replace("[", "").replace("]", "").trim().replace(" ", "");
		  String lat=locat.split(",")[1];
		  String lng=locat.split(",")[0];
		  String url = "http://api.map.baidu.com/geocoder/v2/?location=" + lat + ","+ lng + "&output=json&ak=4j9eufpmmKzjMLo2l2Q3VvOBGCDDQC03&pois=0";
		  JSONObject obj=JSON.parseObject(HttpUtil.getRequest(url)); 
		  JSONObject data = obj.getJSONObject("result");
		  if(data != null){
			String address=(String) data.get("formatted_address");
            return address;
		  }
		  return null;
	   
	  }
	  
	}