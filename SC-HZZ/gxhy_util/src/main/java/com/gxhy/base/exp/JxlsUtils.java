package com.gxhy.base.exp;

import java.io.BufferedInputStream;
import java.io.BufferedOutputStream;
import java.io.File;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.io.InputStream;
import java.io.OutputStream;
import java.net.URLEncoder;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import net.sf.jxls.transformer.XLSTransformer;

import org.apache.poi.hssf.usermodel.HSSFWorkbook;






import com.fasterxml.jackson.databind.exc.InvalidFormatException;
import com.gxhy.base.util.DateUtil;
public class JxlsUtils {
	public static <T> void export(Map<String, List<T>> map_data, String title,String xmlName,HttpServletRequest request,HttpServletResponse response) throws Exception {
		response.reset();
		response.setContentType("application/msexcel");
		response.setContentType("application/octet-stream");
		String dateStr=DateUtil.sdfss.format(new Date());
		response.setHeader("Content-disposition","attachment;  filename=\""  + URLEncoder.encode(title+ dateStr + ".xls", "utf-8") + "\"");				
		//得到模板文件路径  
		String templateFileName = request.getSession().getServletContext().getRealPath("/") + "xmlConfig/"+xmlName+".xls";
		System.out.println("==================="+templateFileName);
		HSSFWorkbook hssfWorkbook = null;
		InputStream in = null;
		OutputStream out = null;
		//创建XLSTransformer对象  
        XLSTransformer transformer = new XLSTransformer(); 
        try {	
        	  in= new FileInputStream(new File(templateFileName));
       	//获得Workbook对象  
			hssfWorkbook = (HSSFWorkbook) transformer.transformXLS(in, map_data);
			out = response.getOutputStream();
			hssfWorkbook.write(out);
		} catch (FileNotFoundException e) {
			e.printStackTrace();
		} catch (InvalidFormatException e) {
			e.printStackTrace();
		}finally{
			if(in!=null){
				in.close();
			}
	        if(out!=null){
	        	out.close();
	        }
		}
	}
    
	public static void downloadFile(HttpServletResponse response,HttpServletRequest request,String title,HSSFWorkbook hssfWorkbook) throws IOException {
		response.reset();
		response.setContentType("application/msexcel");
		response.setContentType("application/octet-stream");
		String dateStr=DateUtil.sdfss.format(new Date());
		response.setHeader("Content-disposition","attachment;  filename=\""  + URLEncoder.encode(title+ dateStr + ".xls", "utf-8") + "\"");				
		//得到模板文件路径  
		String templateFileName = request.getSession().getServletContext().getRealPath("/") + "xmlConfig/rainInfo.xls";
		System.out.println("==================="+templateFileName);
		InputStream in = null;
		OutputStream out = null;
		//创建XLSTransformer对象  
        XLSTransformer transformer = new XLSTransformer(); 
        try {	
        	  in= new FileInputStream(new File(templateFileName));
       	//获得Workbook对象  
			out = response.getOutputStream();
			hssfWorkbook.write(out);
		} catch (FileNotFoundException e) {
			e.printStackTrace();
		} catch (InvalidFormatException e) {
			e.printStackTrace();
		}finally{
			if(in!=null){
				in.close();
			}
	        if(out!=null){
	        	out.close();
	        }
		}
    }

	

}

