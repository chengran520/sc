package com.gxhy.sysmanager.controller;
import java.io.File;
import java.io.FileInputStream;
import java.io.IOException;
import java.io.InputStream;
import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Random;
import java.util.UUID;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.apache.commons.lang3.StringUtils;
import org.apache.poi.ss.usermodel.Workbook;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.multipart.MultipartHttpServletRequest;

import com.alibaba.fastjson.JSONObject;
import com.gxhy.base.exp.JxlsUtils;
import com.gxhy.base.imp.ImportExeclUtil;
import com.gxhy.base.model.RequestModel;
import com.gxhy.base.model.ResponseModel;
import com.gxhy.base.util.CustomPropertyConfigurer;
import com.gxhy.base.util.DateUtil;
import com.gxhy.sysmanager.domain.AddvcdModel;
import com.gxhy.sysmanager.persistence.DeptMapper;
import com.gxhy.sysmanager.persistence.ExcelMapper;
import com.gxhy.sysmanager.persistence.SysManagerUserMapper;
import com.gxhy.sysmanager.service.ExcelService;
import com.gxhy.sysmanager.webmodel.ExportModel;

@RestController
@RequestMapping("import")
public class ExcelController {
	
	@Autowired
	private  ExcelService excelService;
	
	
	/***
	 * 下载excel模板文件
	 */
	 @RequestMapping(value = "/importTemplet", method = RequestMethod.POST)
		public  void importTemplet(HttpServletRequest request,HttpServletResponse response) throws Exception {
		 Map<String, List<ExportModel>> maps = new HashMap<String, List<ExportModel>>();
	 		String title="模板文件";
	 		String xmlName="template";
	 		JxlsUtils.export(maps, title, xmlName,request, response);
	}
     
	/**
	 * 导入数据库
	 */
	@RequestMapping(value = "/importExcel", method = RequestMethod.POST)
	public  Object  importExcel(@RequestParam("file") MultipartFile file, HttpServletRequest request) throws Exception {
			JSONObject map = new JSONObject();
			int num=0;
	        Workbook wb = ImportExeclUtil.chooseWorkbook(file.getOriginalFilename(),file.getInputStream());  
	        AddvcdModel model = new  AddvcdModel();  
	        //读取一个对象的信息  
	        //第二行开始，到倒数第三行结束（总数减去两行）  
	        List<AddvcdModel> readDateListT = ImportExeclUtil.readDateListT(wb, model, 1, 0);  
	        System.out.println(readDateListT.size());
	        for(AddvcdModel m:readDateListT){
	        	map.put("addvcd",m.getAddvcd());
	        	map.put("addvnm",m.getAddvnm());
	        	map.put(RequestModel.SQLID,ExcelMapper.class.getName() + ".saveAddvcd");
	        	num=excelService.insert(map);	
	        }
	        return  ResponseModel.Success(num);
    }   

		
}
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
