package com.gxhy.base.util;

import java.util.ArrayList;
import java.util.List;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

public class ImgDataUtil {
	 //@return 获得图片 
	 public static List<String> getImg(String s){    
	       String regex;    
	       List<String> list = new ArrayList<String>();    
	       regex = "src=\"(.*?)\"";    
	       Pattern pa = Pattern.compile(regex, Pattern.DOTALL);    
	       Matcher ma = pa.matcher(s);    
	       while (ma.find())    
	       {  
	        list.add(ma.group());    
	       }    
	       return list;    
	    }    
	    /** 
	     * 返回存有图片地址的数组 
	     * @param tar 
	     * @return 
	     */  
	    public static String[] getImgaddress(String tar){  
	        List<String> imgList = getImg(tar);       
	        String res[] = new String[imgList.size()];  
	        if(imgList.size()>0){  
	            for (int i = 0; i < imgList.size(); i++) {  
	                 String img=imgList.get(i).substring(11,imgList.get(i).length()-1);
	                 res[i]=img;
	             }  
	        }
	        return res;  
	    }
}
