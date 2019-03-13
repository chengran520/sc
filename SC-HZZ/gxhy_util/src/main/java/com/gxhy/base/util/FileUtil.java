package com.gxhy.base.util;

import java.io.File;
import java.net.URLDecoder;

import org.apache.commons.io.FilenameUtils;
import org.apache.log4j.Logger;

@SuppressWarnings("deprecation")
public class FileUtil {
	 private static final Logger logger = Logger.getLogger(FileUtil.class);
	
	public static String getWebInfoPath() {
	        String separator = File.separator;// System.getProperty("file.separator")+"";

	        String path = Thread.currentThread().getContextClassLoader().getResource("").toString();
	        path = URLDecoder.decode(path);
	        logger.debug("期望获取系统路径" + getAppPath(Thread.currentThread().getContextClassLoader().getResource("")));
	        path = path.replace("/", separator); // 将/换成\
	        // path=path.replace('/', '\\'); // 将/换成\
	        path = path.replace("file:", ""); // 去掉file:
	        path = path.replace("classes" + separator, ""); // 去掉class\
	        if (separator.equals("\\")) {
	            path = path.substring(1); // 去掉第一个\,如 \D:\JavaWeb...
	        }

	        return path;
    }
	 
	 /**
     * 查找WebContent所在实际路径
     * 
     * @return
     */
    public static String getAppPath(java.net.URL r) {
        String filePath = r.getFile();
        String result = new File(new File(filePath).getParent()).getParent();

        if (!filePath.contains("WEB-INF")) {
            result = FilenameUtils.concat(result, "WebContent");
        }

        return result;
    }
    
    /**
     * 判断文件是否存在
     * @param url
     * @return
     */
    public static boolean geContextPath(String url){
    	boolean flag = false;
    	 File file = new File(url);
         // 如果文件路径所对应的文件存在，并且是一个文件，则直接删除
         if (!file.exists() || !file.isFile()) {
        	 flag = true;
         }
    	return flag;
    }
}
