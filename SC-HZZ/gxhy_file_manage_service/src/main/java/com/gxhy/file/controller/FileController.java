package com.gxhy.file.controller;
import java.io.File;
import java.io.IOException;
import java.util.ArrayList;
import java.util.Date;
import java.util.HashMap;
import java.util.Iterator;
import java.util.List;
import java.util.Map;
import java.util.UUID;

import javax.servlet.http.HttpServletRequest;

import org.apache.commons.lang3.StringUtils;
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
import com.gxhy.base.model.Log;
import com.gxhy.base.model.RequestModel;
import com.gxhy.base.model.ResponseModel;
import com.gxhy.base.util.CustomPropertyConfigurer;
import com.gxhy.base.util.DateUtil;
import com.gxhy.base.util.HTMLSpirit;
import com.gxhy.base.util.OfficeImgToPdf;
import com.gxhy.base.webmodel.QueryModel;
import com.gxhy.file.domain.FileModel;
import com.gxhy.file.domain.ProjectFileModel;
import com.gxhy.file.persistence.FileMapper;
import com.gxhy.file.service.FileService;

/**
 * 文件管理
 * @author yb
 * @2017年9月8日上午9:12:31   
 * @CopyRight gxhy
 */
@RestController
@RequestMapping("file/system")
public class FileController extends  BaseController{
  
	@Autowired
	private FileService fileService;
	
	/**
	 * 增加文件基本信息以及文件图片
	 * @return
	 * @throws Exception 
	 */
	/*@RequestMapping(value = "/saveOrUpdateFile", method = RequestMethod.POST)
	@Log(operationType = "制度文件",operationName="新增制度文件")
	public Object saveOrUpdateFile(HttpServletRequest request) throws Exception{
		int num =  fileService.saveOrUpdateFile(request);
		if(num == 1){
			return ResponseModel.Success("信息成功！");
		}else{
			return ResponseModel.Success("信息失败！");
		}
	}	*/
	
	@RequestMapping(value = "/saveOrUpdateFile", method = RequestMethod.POST)
	 public Object saveOrUpdateFile(HttpServletRequest request,int fileType,int fileGradeType,int fileOpen,String fileTitle,String fileContent) throws IllegalStateException, IOException{
		String filePath  = (String)CustomPropertyConfigurer.getConfigProperty("fileAddres");
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
                 
              	String fileStr = fileService.selectSysFile(uuid);
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
							String fiContent=filePath+uuid+".pdf";
							fileService.saveOrUpStaRiver(fileType,fileGradeType,fileOpen,fileTitle,fiContent,uuid);
							files.delete();
						} catch (Exception e) {
							e.printStackTrace();
							return ResponseModel.Failure("失败");
						}
                  }
              }
          }
      }
      return ResponseModel.Success("成功");
	 }
	
	
	
	/**
	 *  条件查询
	 * @param request
	 * @return
	 * @throws Exception
	 */
	@RequestMapping(value = "/listFile", method = RequestMethod.GET)
	@Log(operationType = "制度文件",operationName="查询制度文件")
	public Object listFile(HttpServletRequest request) throws Exception{
		JSONObject map = new JSONObject();
		map.put(RequestModel.SQLID,FileMapper.class.getName() + ".getFileList");
		List<FileModel> list = fileService.selectLists(map);
		List<FileModel> list1 = new ArrayList<FileModel>();
		List<FileModel> list2 = new ArrayList<FileModel>();
		List<FileModel> list3 = new ArrayList<FileModel>();
		List<FileModel> list4 = new ArrayList<FileModel>();
		List<FileModel> list5 = new ArrayList<FileModel>();
		for(FileModel filemodel:list){
			if(filemodel.getFileType()==1){//巡河制度
				if(list1.size()<7){
					list1.add(filemodel);
				}
			}else if(filemodel.getFileType()==2){//考核制度
				if(list2.size()<7){
					list2.add(filemodel);
				}
			}else if(filemodel.getFileType()==3){//执法制度
				if(list3.size()<7){
					list3.add(filemodel);
				}
			}else if(filemodel.getFileType()==4){//管理制度
				if(list4.size()<7){
					list4.add(filemodel);
				}
			}else if(filemodel.getFileType()==5){//工作制度
				if(list5.size()<7){
					list5.add(filemodel);
				}
			}
		}
		Map<String, List<FileModel>> maps=new HashMap<String, List<FileModel>>();
		maps.put("list1", list1);
		maps.put("list2", list2);
		maps.put("list3", list3);
		maps.put("list4", list4);
		maps.put("list5", list5);
		return ResponseModel.Success(maps);
	}	
	
	/**
	 * 制度文件详情
	 * @param request
	 * @param uuid
	 * @param model
	 * @return
	 * @throws Exception
	 */
	@RequestMapping(value = "/fileDeatil", method = RequestMethod.GET)
	@Log(operationType = "制度文件",operationName="制度文件详情")
	public Object fileDeatil(HttpServletRequest request,String uuid) throws Exception{
		JSONObject map = new JSONObject();
		map.put("uuid", request.getParameter("uuid"));
		map.put(RequestModel.SQLID,FileMapper.class.getName() + ".fileDeatil");
		FileModel  file=(FileModel) fileService.selectOne(map);
		return ResponseModel.Success(file);
	}
	/**
	 * 删除制度文件
	 * @param request
	 * @param uuid
	 * @param model
	 * @param type
	 * @return
	 * @throws Exception
	 */
	@RequestMapping(value = "/deleteSystem", method = RequestMethod.POST)
	@Log(operationType = "制度文件",operationName="删除制度文件")
	public Object deleteSystem(HttpServletRequest request,String uuid) throws Exception{
		JSONObject map = new JSONObject();
		map.put("uuid", request.getParameter("uuid"));
		map.put(RequestModel.SQLID,FileMapper.class.getName() + ".deleteSystem");
		int num = fileService.delete(map);
	     return ResponseModel.Success(num);
	}
	
	/**
	 * 最新发布的制度文件
	 * @param request
	 * @param uuid
	 * @param model
	 * @param type
	 * @return
	 * @throws Exception
	 */
	
	@RequestMapping(value = "/getSystems", method = RequestMethod.GET)
	public Object getSystems(HttpServletRequest request){
		JSONObject map = new JSONObject();
		map.put("pageSize", 5);
		map.put(RequestModel.SQLID,FileMapper.class.getName() + ".getSystems");
		List<FileModel> list=fileService.selectLists(map);
		return ResponseModel.Success(list);
	}
	/**
	 * 获取制度文件的列表
	 * @param request
	 * @return
	 * @throws Exception 
	 */
	@RequestMapping(value = "/getSysFiles", method = RequestMethod.GET)
	public Object getSysFiles(HttpServletRequest request,QueryModel model) throws Exception{
		JSONObject map = new JSONObject();
		map = InitParams(model);
		RequestInitRanges(map,true,ProjectFileModel.class);
		String keyword=request.getParameter("keyword");
		map.put("keyword", keyword);
		String startTm=request.getParameter("startTm");
		if(StringUtils.isNotBlank(startTm)){
			Date startTime=DateUtil.convertStringToDate(startTm);
			map.put("startTime", startTime);
		}
		String endTm=request.getParameter("endTm");
		if(StringUtils.isNotBlank(endTm)){
			Date endTime=DateUtil.convertStringToDate(endTm);
			map.put("endTime", endTime);
		}
		map.put(RequestModel.SQLID,FileMapper.class.getName() + ".getFileList");
		Page page=fileService.selectList(map);
		return ResponseModel.Success(page);
	}
}
