package com.gxhy.file.service;
import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.UUID;
import javax.servlet.http.HttpServletRequest;
import org.apache.commons.lang3.StringUtils;
import org.springframework.stereotype.Service;
import com.alibaba.fastjson.JSONObject;
import com.gxhy.base.domain.SysUsers;
import com.gxhy.base.model.RequestModel;
import com.gxhy.base.security.util.SecurityUtil;
import com.gxhy.base.service.BaseService;
import com.gxhy.file.domain.FileModel;
import com.gxhy.file.persistence.FileMapper;

@SuppressWarnings("rawtypes")
@Service
public class FileService  extends BaseService{

	@SuppressWarnings("unchecked")
	/*public int saveOrUpdateFile(HttpServletRequest request) {
		int num = 0;
		String uuid=request.getParameter("uuid");
		Map<String,Object> map =new HashMap<String,Object>();
		map.put("fileTitle", request.getParameter("fileTitle"));
		map.put("fileType",request.getParameter("fileType"));
		SysUsers user = SecurityUtil.getSessionUser();
		map.put("issuser",user.getUserName());
		map.put("addvcd", user.getUserAddvcd());
		map.put("fileGradeType",request.getParameter("fileGradeType"));
		map.put("fileContent", request.getParameter("fileContent"));
		map.put("fileOpen",request.getParameter("fileOpen"));
		map.put("creatTime", new Date());
		map.put("updateTime",new Date());
		map.put("isForever", request.getParameter("isForever"));
		if(StringUtils.isBlank(uuid)){
			map.put(RequestModel.SQLID,FileMapper.class.getName() + ".saveFile");
			map.put("uuid", UUID.randomUUID().toString().replace("-", ""));
			map.put("fileId", UUID.randomUUID().toString().replace("-", ""));
			num = this.insert(map);
		}else {
			map.put("uuid",uuid);
			map.put(RequestModel.SQLID,FileMapper.class.getName() + ".updateFile");
			num = this.update(map);
		}
		return num;
	}*/

	public String selectSysFile(String uuid) {
		JSONObject map = new JSONObject();
		map.put("uuid",uuid);
		map.put(RequestModel.SQLID,FileMapper .class.getName() + ".selectSysFile");
		List<FileModel> list =this.selectLists(map);
		if(list.size()>0){
			return list.get(0).getFileContent();
		}
		return null;
	}


	public void saveOrUpStaRiver(int fileType, int fileGradeType, int fileOpen,
			String fileTitle, String fileContent, String uuid) {
		JSONObject map = new JSONObject();
		map.put("fileTitle", fileTitle);
		map.put("fileType",fileType);
		SysUsers user = SecurityUtil.getSessionUser();
		map.put("issuser",user.getUserName());
		map.put("addvcd", user.getUserAddvcd());
		map.put("fileGradeType",fileGradeType);
		map.put("fileContent", fileContent);
		map.put("fileOpen",fileOpen);
		map.put("creatTime", new Date());
		map.put("updateTime",new Date());
		map.put("uuid", UUID.randomUUID().toString().replace("-", ""));
		map.put("fileId", UUID.randomUUID().toString().replace("-", ""));
		map.put(RequestModel.SQLID,FileMapper .class.getName() + ".saveFile");
		this.insert(map);
		
	}
}
