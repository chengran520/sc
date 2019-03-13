package com.gxhy.sysmanager.controller;
import java.util.Date;
import java.util.HashMap;
import java.util.HashSet;
import java.util.List;
import java.util.Map;
import java.util.Set;
import java.util.UUID;
import javax.servlet.http.HttpServletRequest;
import org.apache.commons.lang3.StringUtils;
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
import com.gxhy.base.util.EhCacheUtils;
import com.gxhy.base.util.SysCacheType;
import com.gxhy.sysmanager.domain.DeptModel;
import com.gxhy.sysmanager.domain.ZtreeMenuModel;
import com.gxhy.sysmanager.persistence.DeptMapper;
import com.gxhy.sysmanager.service.DeptService;
import com.gxhy.sysmanager.webmodel.QueryModel;
/**
 * 部门
 * @author yb
 *
 */
@SuppressWarnings({ "unchecked", "rawtypes" })
@RestController
@RequestMapping("/dept/work")
public class DeptController extends BaseController{
	@Autowired
    private DeptService deptService;
	
	
	/**
	 * 菜单列表
	 * @param model
	 * @param request
	 * @return
	 * @throws Exception 
	 */
	@RequestMapping(value = "/getDeptList", method = RequestMethod.GET)
	@Log(operationType = "部门",operationName="部门列表") 
	public Object  getDeptList(QueryModel model,HttpServletRequest request){
		Page page=null;
		try {
		    JSONObject map = new JSONObject();
			map = InitParams(model);
			RequestInitRanges(map,true,DeptModel.class);
			map.put("keyword",request.getParameter("keyword"));
			map.put(RequestModel.SQLID,DeptMapper.class.getName() + ".getDeptList");
			page = deptService.selectList(map);
		} catch (Exception e) {
			e.printStackTrace();
		}
		
		return ResponseModel.Success(page);
    }
    
	/**
	 * 查询上级部门
	 * @param model
	 * @param request
	 * @return
	 */
    @RequestMapping(value = "/getPDept", method = RequestMethod.GET)
    @Log(operationType = "部门",operationName="查询上级部门") 
	public Object  getPDept(QueryModel model,HttpServletRequest request){
		JSONObject map = new JSONObject();
		map.put(RequestModel.SQLID,DeptMapper.class.getName() + ".getPDept");
		List<DeptModel> depts= deptService.selectLists(map);
		return ResponseModel.Success(depts);
    }
    
    /**
	 * 保存部门信息
	 * @param model
	 * @param request
	 * @return
	 */
    @RequestMapping(value = "/saveDept", method = RequestMethod.POST)
    @Log(operationType = "部门",operationName="新增部门") 
	public Object  saveDept(HttpServletRequest request){
    	int num=0;
		Map<String,Object> map =new HashMap<String,Object>();
		map.put("uuid", request.getParameter("uuid"));
		map.put("deptId", request.getParameter("deptId"));
		map.put("deptNm",request.getParameter("deptNm"));
		String pdeptId=request.getParameter("pdeptId");
		if(StringUtils.isBlank(pdeptId)){
			map.put("deptPId","-1");
		}else{
			map.put("deptPId",pdeptId);
		}	
		map.put("orderNum", request.getParameter("orderNum"));
		map.put("creatTm", new Date());
    	if(StringUtils.isBlank(request.getParameter("uuid"))){			
			map.put("uuid", UUID.randomUUID().toString().replace("-", ""));
			map.put(RequestModel.SQLID,DeptMapper.class.getName() + ".saveDept");
			num = deptService.insert(map);	
		}else {
			map.put(RequestModel.SQLID,DeptMapper.class.getName() + ".updateDept");
			num = deptService.update(map);
		}
    	if(num == 1){
			return ResponseModel.Success("保存成功！");
		}else{
			return ResponseModel.Success("保存失败！");
		}
    }
    
    /**
   	 * 部门详情
   	 * @param model
   	 * @param request
   	 * @return
   	 */
    @RequestMapping(value = "/deptDetail", method = RequestMethod.GET)
    @Log(operationType = "部门",operationName="部门详情") 
	public Object  deptDetail(HttpServletRequest request,String uuid){
		Map<String,Object> map =new HashMap<String,Object>();
		map.put("uuid", uuid);
		map.put(RequestModel.SQLID,DeptMapper.class.getName() + ".deptDetail");
		DeptModel model=(DeptModel) deptService.selectOne(map);
		return ResponseModel.Success(model);
    }
    
    /**
   	 *删除部门，查询用户
   	 * @param model
   	 * @param request
   	 * @return
   	 */
    
    @RequestMapping(value = "/selectDeptById", method = RequestMethod.GET)
    @Log(operationType = "部门",operationName="查询部门") 
	public Object  selectDeptById(HttpServletRequest request,String uuid){
		Map<String,Object> map =new HashMap<String,Object>();
		map.put("uuid", uuid);
		map.put(RequestModel.SQLID,DeptMapper.class.getName() + ".selectDeptById");
		List<DeptModel> depts= deptService.selectLists(map);
		int count=depts.size();
		return ResponseModel.Success(count);
    }
    
    /**
   	 *删除部门，没有用户
   	 * @param model
   	 * @param request
   	 * @return
   	 */
    
    @RequestMapping(value = "/deleteDept", method = RequestMethod.POST)
    @Log(operationType = "部门",operationName="删除部门") 
	public Object  deleteDept(HttpServletRequest request,String uuid){
		Map<String,Object> map =new HashMap<String,Object>();
		map.put("uuid", uuid);
		map.put(RequestModel.SQLID,DeptMapper.class.getName() + ".deleteDept");
		int num=deptService.delete(map);
	   return ResponseModel.Success(num);

    }
    /**
	 * 下拉选择部门人员
	 * @param request
	 * @return
	 * @throws Exception
	 */
	@RequestMapping(value = "/getTreeUsers", method = RequestMethod.GET)
	public Object getTreeUsers(HttpServletRequest request){
			JSONObject map = new JSONObject();
			map.put(RequestModel.SQLID, DeptMapper.class.getName() + ".getTreeDeptUsers");
			List<ZtreeMenuModel>  list=  deptService.selectList(map);		
			for(ZtreeMenuModel model:list){
				if(model.getPid().isEmpty()){
					model.setNocheck(true);
				}
				
			}
		return ResponseModel.Success(list);
	}
}
