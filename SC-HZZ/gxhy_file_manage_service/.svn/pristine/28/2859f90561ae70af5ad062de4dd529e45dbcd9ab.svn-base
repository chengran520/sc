package com.gxhy.file.controller;
import java.io.BufferedInputStream;
import java.io.BufferedOutputStream;
import java.io.File;
import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.OutputStream;
import java.net.URLEncoder;
import java.util.Date;
import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.apache.poi.xwpf.usermodel.ParagraphAlignment;
import org.apache.poi.xwpf.usermodel.XWPFDocument;
import org.apache.poi.xwpf.usermodel.XWPFParagraph;
import org.apache.poi.xwpf.usermodel.XWPFRun;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.alibaba.fastjson.JSONObject;
import com.github.pagehelper.Page;
import com.gxhy.base.controller.BaseController;
import com.gxhy.base.model.Log;
import com.gxhy.base.model.RequestModel;
import com.gxhy.base.model.ResponseModel;
import com.gxhy.base.util.DateUtil;
import com.gxhy.base.util.HTMLSpirit;
import com.gxhy.base.util.ImgDataUtil;
import com.gxhy.file.domain.ProjectFileModel;
import com.gxhy.file.persistence.ProjectFileMapper;
import com.gxhy.file.service.ProjectFileService;
import com.gxhy.file.webmodel.QueryProjectModel;
/**
 * 项目文件
 * @author yb
 *
 */
@RestController
@RequestMapping("file/projectFile")
public class ProjectFileController extends BaseController{
	
	
    @Autowired
    private ProjectFileService  projectFileService;
    
    
	/*
	 * 增加项目文件
	 * @return
	 * @throws Exception 
	 */
	@RequestMapping(value = "/saveOrUpdateProject", method = RequestMethod.POST)
	@Log(operationType = "项目文件",operationName="新增项目文件")
	public Object saveOrUpdateProject(HttpServletRequest request,ProjectFileModel projectFileModel) throws Exception{
		int num = projectFileService.saveOrUpdateProject(request,projectFileModel);
		if(num == 1){
			return ResponseModel.Success("信息成功！");
		}else{
			return ResponseModel.Success("信息失败！");
		}
	}	
	
	/*
	 * 项目文件列表
	 * @return
	 * @throws Exception 
	 */
	@RequestMapping(value = "/getProjectList", method = RequestMethod.GET)
	@Log(operationType = "项目文件",operationName="项目文件列表")
	public Object getProjectList(HttpServletRequest request,QueryProjectModel model) throws IOException{
		JSONObject map = new JSONObject();
		Page page=null;
		try {
			map = InitParams(model);
			RequestInitRanges(map,true,ProjectFileModel.class);
			map.put("fileType", request.getParameter("fileType"));
			map.put(RequestModel.SQLID,ProjectFileMapper.class.getName() + ".getProjectList");
			
			String creatTime=request.getParameter("creatTm");
		    if (creatTime != null &&creatTime.length()>0){
				Date startTime=DateUtil.getStartToTime(creatTime);
				Date endTime=DateUtil.getEndToTime(creatTime);
				map.put("startTime",  startTime);
				map.put("endTime",  endTime);
			}
			page = projectFileService.selectList(map);
		} catch (Exception e) {
			e.printStackTrace();
		}
		return ResponseModel.Success(page);
	}
	
	
	/**
	 * 删除项目文件
	 * @param request
	 * @param projectFileModel
	 * @return
	 * @throws Exception
	 */
	@RequestMapping(value = "/deleteProject", method = RequestMethod.POST)
	public Object  deleteProject(HttpServletRequest request,String uuid){
		JSONObject map = new JSONObject();
		map.put("uuid", uuid);
		map.put(RequestModel.SQLID,ProjectFileMapper.class.getName() + ".deleteProject");
		int num = projectFileService.delete(map);
		return ResponseModel.Success(num);
	}

	
	/**
	 * 详情页面
	 */
	@RequestMapping(value = "/DetailProject", method = RequestMethod.POST)
	@Log(operationType = "项目文件",operationName="项目文件详情")
	public Object DetailProject(HttpServletRequest request,String uuid){
		JSONObject map = new JSONObject();
		map.put("uuid", uuid);
		map.put(RequestModel.SQLID,ProjectFileMapper.class.getName() + ".DetailProject");
		ProjectFileModel model= (ProjectFileModel) projectFileService.selectOne(map);
		return ResponseModel.Success(model);

	}
	//下载word文件
	@RequestMapping(value = "/downloadFile", method = RequestMethod.POST)
	public void downloadFile(HttpServletRequest request,HttpServletResponse response,ProjectFileModel m){
	   JSONObject map = new JSONObject();
       try {
    	    map.put("uuid",m.getUuid());
			map.put(RequestModel.SQLID,ProjectFileMapper.class.getName() + ".DetailProject");
			ProjectFileModel model= (ProjectFileModel) projectFileService.selectOne(map);
	        response.reset();
            response.setContentType("application/x-msdownload");
            String dateStr=DateUtil.sdfss.format(new Date());
    		response.setHeader("Content-disposition","attachment;  filename=\""  + URLEncoder.encode(model.getProjectName()+ dateStr + ".doc", "utf-8") + "\"");				
			XWPFDocument document= new XWPFDocument();  
			File file= new File(request.getSession().getServletContext().getRealPath("/")+model.getProjectName()+".doc");
			OutputStream out = new FileOutputStream(file);  
	        //添加标题  
	        XWPFParagraph titleParagraph = document.createParagraph();  
	        //设置段落居中  
	        titleParagraph.setAlignment(ParagraphAlignment.CENTER); 
	        
	     
	        XWPFRun titleParagraphRun = titleParagraph.createRun();  	        
	        titleParagraphRun.setText(model.getProjectName());  
	        titleParagraphRun.setColor("FF0000");  
	        titleParagraphRun.setFontSize(16); 
	        //段落  
	        XWPFParagraph firstParagraph = document.createParagraph();  
	        XWPFRun run = firstParagraph.createRun();  
	        run.setText(HTMLSpirit.delHTMLTag(model.getDescribe().replace("&nbsp;", "")));  
	        run.setColor("000000");  
	        run.setFontSize(14);   	  
	        out = response.getOutputStream();
	        document.write(out);  
	        //如果有图片的情况
	        //项目实际路径
	        String realPath= request.getSession().getServletContext().getRealPath("/"); 
	        String[] imgs=ImgDataUtil.getImgaddress(model.getDescribe());
	        for(String img:imgs){
	        	System.out.println(realPath+img+"path++++++++++++++++++++++++++++++++++++++++");
	        	BufferedInputStream in = new BufferedInputStream(new FileInputStream(realPath+img));  
	        	BufferedOutputStream out2 = new BufferedOutputStream(new FileOutputStream(realPath+img)); 
	        	  int i;  
	        	  while((i=in.read())!=-1){  
	        	   out2.write(i);  
	        	  }
	        	  document.write(out2); 	
	        }
	        out.close();
       } catch (Exception e) {
			e.printStackTrace();
			
		}
	}
	
}
