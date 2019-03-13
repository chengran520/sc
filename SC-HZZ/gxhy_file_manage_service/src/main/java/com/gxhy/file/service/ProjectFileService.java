package com.gxhy.file.service;
import java.util.Date;
import java.util.HashMap;
import java.util.Map;
import java.util.UUID;

import javax.servlet.http.HttpServletRequest;

import com.gxhy.base.domain.SysUsers;
import com.gxhy.base.model.RequestModel;
import com.gxhy.base.security.util.SecurityUtil;
import com.gxhy.base.service.BaseService;
import com.gxhy.file.domain.ProjectFileModel;
import com.gxhy.file.persistence.ProjectFileMapper;

import org.apache.commons.lang3.StringUtils;
import org.springframework.stereotype.Service;
@SuppressWarnings("rawtypes")
@Service
public class ProjectFileService extends BaseService{

	@SuppressWarnings("unused")
	public int saveOrUpdateProject(HttpServletRequest request,
			ProjectFileModel projectFileModel) throws Exception{ 
		int num = 0;
		SysUsers user = SecurityUtil.getSessionUser();
		Map<String,Object> map =new HashMap<String,Object>();
		map.put("projectName", projectFileModel.getProjectName());
		map.put("startTime",projectFileModel.getStartTime());
		map.put("endTime",projectFileModel.getEndTime());
		map.put("describe",projectFileModel.getDescribe());
		map.put("approveState", 0);
		map.put("applicant", user.getUserId());
		map.put("updateTime", new Date());
		map.put("type",projectFileModel.getType());
		map.put("fileType",projectFileModel.getFileType());
		if(StringUtils.isNotBlank(projectFileModel.getIsForever())){
			map.put("isForever",projectFileModel.getIsForever());
		}
		if(StringUtils.isBlank(projectFileModel.getUuid())){
			map.put("creatTime", new Date());
			map.put("updateTime", new Date());
			map.put(RequestModel.SQLID,ProjectFileMapper.class.getName() + ".insertProjectFile");
			String uuid=UUID.randomUUID().toString().replace("-", "");
			map.put("uuid", uuid);
			num = this.insert(map);
		}else {
			map.put("uuid",projectFileModel.getUuid());
			map.put(RequestModel.SQLID,ProjectFileMapper.class.getName() + ".updateProjectFile");
			num = this.update(map);
		}
			return num;
	}

}
