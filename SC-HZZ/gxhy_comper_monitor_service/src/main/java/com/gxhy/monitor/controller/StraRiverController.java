package com.gxhy.monitor.controller;
import java.io.BufferedInputStream;
import java.io.BufferedOutputStream;
import java.io.File;
import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.OutputStream;
import java.net.URLEncoder;
import java.util.Date;
import java.util.Iterator;
import java.util.UUID;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import org.apache.commons.lang3.StringUtils;
import org.apache.poi.xwpf.usermodel.ParagraphAlignment;
import org.apache.poi.xwpf.usermodel.XWPFDocument;
import org.apache.poi.xwpf.usermodel.XWPFParagraph;
import org.apache.poi.xwpf.usermodel.XWPFRun;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.multipart.MultipartHttpServletRequest;
import org.springframework.web.multipart.commons.CommonsMultipartResolver;
import com.alibaba.fastjson.JSONObject;
import com.github.pagehelper.Page;
import com.gxhy.base.controller.BaseController;
import com.gxhy.base.domain.SysUsers;
import com.gxhy.base.model.RequestModel;
import com.gxhy.base.model.ResponseModel;
import com.gxhy.base.security.util.SecurityUtil;
import com.gxhy.base.util.CustomPropertyConfigurer;
import com.gxhy.base.util.DateUtil;
import com.gxhy.base.util.HTMLSpirit;
import com.gxhy.base.util.ImgDataUtil;
import com.gxhy.base.util.OfficeImgToPdf;
import com.gxhy.monitor.domain.StraRiverModel;
import com.gxhy.monitor.persistence.StraRiverMapper;
import com.gxhy.monitor.service.StraRiverService;
@RestController
@RequestMapping("data/StraRiver")
@SuppressWarnings("unchecked")
public class StraRiverController extends BaseController{
	
	@Autowired
	StraRiverService straRiverService;
	
	/**
	 * 获取一河一策
	 * @return
	 * @throws Exception 
	 */
	@RequestMapping(value = "/getStraRivers", method = RequestMethod.GET)
	public Object getStraRivers(HttpServletRequest request,StraRiverModel model) throws Exception{
		JSONObject map = new JSONObject();
		map = InitParams(model);
		RequestInitRanges(map,true,StraRiverModel.class);
		int type=model.getType();
		map.put("type", type);
		String startTm=request.getParameter("startTm");
		String endTm=request.getParameter("endTm");
		if(StringUtils.isNotBlank(startTm)){
			Date startTime=DateUtil.convertStringToDate(startTm);
			map.put("startTime", startTime);
		}
		if(StringUtils.isNotBlank(endTm)){
			Date endTime=DateUtil.convertStringToDate(endTm);
			map.put("endTime", endTime);
		}
		map.put(RequestModel.SQLID,StraRiverMapper.class.getName() + ".getStraRivers");		
		Page page=straRiverService.selectList(map);
		return ResponseModel.Success(page);
	}
	
	
	
	
	/**
	 * 获取一河一策
	 * @return
	 * @throws Exception 
	 */
	@RequestMapping(value = "/deleteStrRiver", method = RequestMethod.POST)
	public Object deleteStrRiver(HttpServletRequest request) throws Exception{
		JSONObject map = new JSONObject();
		String uuid=request.getParameter("uuid");
		map.put("uuid", uuid);
		map.put(RequestModel.SQLID,StraRiverMapper.class.getName() + ".deleteStraRivers");		
		int num=straRiverService.delete(map);
		return ResponseModel.Success(num);
	}
	
	/**
	 * 增加一河一策
	 * @param request
	 * @param type
	 * @param straFileTitle
	 * @param rvCd
	 * @return
	 * @throws IllegalStateException
	 * @throws IOException
	 */
	@RequestMapping(value = "/insertStRiver", method = RequestMethod.POST)
	 public Object insertStRiver(HttpServletRequest request,int type,String straFileTitle,String rvCd) throws IllegalStateException, IOException{
		String filePath  = (String)CustomPropertyConfigurer.getConfigProperty("fileAddres");
       long  startTime=System.currentTimeMillis();
       //将当前上下文初始化给  CommonsMutipartResolver （多部分解析器）
       CommonsMultipartResolver multipartResolver=new CommonsMultipartResolver(request.getSession().getServletContext());
       //检查form中是否有enctype="multipart/form-data"
       if(multipartResolver.isMultipart(request)){
           //将request变成多部分request
           MultipartHttpServletRequest multiRequest=(MultipartHttpServletRequest)request;
           //获取multiRequest 中所有的文件名
           Iterator iter=multiRequest.getFileNames();
           String uuid=UUID.randomUUID().toString().replace("-", "");
           while(iter.hasNext()){
               //一次遍历所有文件
               MultipartFile file=multiRequest.getFile(iter.next().toString());
               if(file!=null){
                   String upPath = file.getOriginalFilename();
                   String fName = upPath.substring(upPath.lastIndexOf("."),upPath.length()); 
                   String name=upPath.substring(0, upPath.lastIndexOf("."));
                   if(".pdf".equals(fName.toLowerCase().trim())){
                   	upPath = uuid+fName;
                   }
                   String path=filePath+upPath;
                   //上传
                   File files = new File(path);
                   file.transferTo(files);
                  
               	String fileStr = straRiverService.selectFile(uuid);
               	if(StringUtils.isNotBlank(fileStr)){
               		File fileP= new File(fileStr);
                       // 如果文件路径所对应的文件存在，并且是一个文件，则直接删除
                       if(fileP.exists() && fileP.isFile()) {
                       	fileP.delete();
                       }
               	}
                   if(".doc".equals(fName.toLowerCase().trim()) || ".docx".equals(fName.toLowerCase().trim())){
                   	try {
                   		File fileP= new File(filePath+uuid+".pdf");
                           // 如果文件路径所对应的文件存在，并且是一个文件，则直接删除
                           if(fileP.exists() && fileP.isFile()) {
                           	fileP.delete();
                           }
							OfficeImgToPdf.doc2pdf(path, filePath+uuid+".pdf");
							String straFileContent=filePath+uuid+".pdf";
							straRiverService.saveOrUpStaRiver(type,straFileTitle,rvCd,straFileContent,uuid);
							files.delete();
						} catch (Exception e) {
							e.printStackTrace();
							return ResponseModel.Failure("失败");
						}
                   }
               }
           }
       }
       long  endTime=System.currentTimeMillis();
       return ResponseModel.Success("成功");
	 }
	
	
	@RequestMapping(value = "/updateStrRiver", method = RequestMethod.POST)
	public Object getStraDetail(HttpServletRequest request) throws Exception{
		JSONObject map = new JSONObject();
		String uuid=request.getParameter("uuid");
		map.put("uuid", uuid);
		map.put(RequestModel.SQLID,StraRiverMapper.class.getName() + ".updateStraRiver");	
		straRiverService.update(map);
		return ResponseModel.Success("success");
	}
}
