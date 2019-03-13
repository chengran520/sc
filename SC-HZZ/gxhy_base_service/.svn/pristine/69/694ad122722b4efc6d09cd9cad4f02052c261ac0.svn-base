package com.gxhy.sysmanager.controller;
import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
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
import com.gxhy.sysmanager.domain.MenuModel;
import com.gxhy.sysmanager.domain.RoleModel;
import com.gxhy.sysmanager.domain.RoleUserModel;
import com.gxhy.sysmanager.domain.ZtreeRoleModel;
import com.gxhy.sysmanager.persistence.MenuMapper;
import com.gxhy.sysmanager.persistence.RoleMapper;
import com.gxhy.sysmanager.service.MenuService;
import com.gxhy.sysmanager.service.RoleService;
import com.gxhy.sysmanager.webmodel.QueryModel;

/**
 * 角色
 * @author yb
 *
 */
@SuppressWarnings({ "unchecked", "rawtypes","unused" })
@RestController
@RequestMapping("role/work")
public class RoleController extends BaseController{


	@Autowired
	RoleService  roleService;
	
	@Autowired
	MenuService  menuService;
	
	 
	
	/**
	 * 角色列表
	 * @param model
	 * @param request
	 * @return
	 * @throws Exception
	 */
	@RequestMapping(value = "/getRoleList", method = RequestMethod.GET)
	@Log(operationType = "角色",operationName="角色列表")
	public Object  getRoleList(QueryModel model,HttpServletRequest request){
		JSONObject map = new JSONObject();
		Page page=null;
		try {
			map = InitParams(model);
			RequestInitRanges(map,true,RoleModel.class);
			map.put(RequestModel.SQLID,RoleMapper.class.getName() + ".getRoleList");
			map.put("keyword",request.getParameter("keyword"));
			String creatTime=request.getParameter("creatTime");
		       if (creatTime != null &&creatTime.length()>0){
				Date startTime=DateUtil.getStartToTime(creatTime);
				Date endTime=DateUtil.getEndToTime(creatTime);
				map.put("startTime",  startTime);
				map.put("endTime",  endTime);
			}
			   page = roleService.selectList(map);
		   } catch (Exception e) {
			   e.printStackTrace();
		 }
		
		return ResponseModel.Success(page);
    }
	
	/**
	 * 保存角色
	 */
	@RequestMapping(value = "/saveRole", method = RequestMethod.POST)
	@Log(operationType = "角色",operationName="新增角色")
	public Object  saveRole(RoleModel roleModel,HttpServletRequest request){
		int num=0;
		int count=0;
		int num2=0;
		Map<String,Object> map =new HashMap<String,Object>();
		map.put("uuid", request.getParameter("uuid"));
		map.put("roleId", request.getParameter("roleId"));
		map.put("roleName", request.getParameter("roleName"));
		map.put("createTime",new Date());
		map.put("updateTime", new Date());
		map.put("roleDes", request.getParameter("roleDes"));
		//保存权限信息
		String menuId=request.getParameter("menuId");
		if(StringUtils.isNotBlank(menuId)){
			String[] menuIds=menuId.split(",");
			for(int i=0;i<menuIds.length;i++){
				map.put("menuId", menuIds[i]);
				map.put(RequestModel.SQLID,MenuMapper.class.getName() + ".SaveRole_Menu");
				count=menuService.insert(map);
			}
		}
		
		//保存角色基本信息
    	if(StringUtils.isBlank(roleModel.getUuid())){			
			map.put("uuid", UUID.randomUUID().toString().replace("-", ""));
			map.put(RequestModel.SQLID,RoleMapper.class.getName() + ".saveRole");
			num = roleService.insert(map);	
			
		}else {
			
			String sroleId=request.getParameter("sroleId");
			map.put("sroleId", sroleId);
			map.put(RequestModel.SQLID,MenuMapper.class.getName() + ".UpdateMenuRole");
			num2 = menuService.update(map);
			map.put(RequestModel.SQLID,RoleMapper.class.getName() + ".updateRole");
			count=roleService.update(map);
		}
    	if(num >0||count>0||num2>0){
			return ResponseModel.Success("信息成功！");
		}else{
			return ResponseModel.Success("信息失败！");
		}
    }
	
	
	/**
	 * 角色详情
	 * @param model
	 * @param request
	 * @return
	 * @throws Exception
	 */
	@RequestMapping(value = "/roleDetail", method = RequestMethod.GET)
	@Log(operationType = "角色",operationName="角色详情")
	public Object  roleDetail(HttpServletRequest request,String uuid){
		Map<String,Object> map =new HashMap<String,Object>();
		map.put("uuid", uuid);
		map.put(RequestModel.SQLID,RoleMapper.class.getName() + ".roleDetail");
		RoleModel model=(RoleModel) roleService.selectOne(map);
		return ResponseModel.Success(model);
    }
	
	/**
	 * 查询角色下的用户
	 * @param model
	 * @param request
	 * @return
	 * @throws Exception
	 */
	
	@RequestMapping(value = "/selectUserByRoleId", method = RequestMethod.POST)
	@Log(operationType = "角色",operationName="查询角色")
	public Object selectUserByRoleId(HttpServletRequest request,String uuid){
		Map<String,Object> map =new HashMap<String,Object>();
		String roleId=request.getParameter("roleId");
		map.put("roleId", roleId);
		map.put(RequestModel.SQLID,RoleMapper.class.getName() + ".selectUserByRoleId");
		List<RoleUserModel> models=roleService.selectLists(map);
		int count=models.size();
		return ResponseModel.Success(count);
    }
   
	
	
	/**
	 * 删除角色
	 * @param model
	 * @param request
	 * @return
	 * @throws Exception
	 */
	@RequestMapping(value = "/deleteRole", method = RequestMethod.POST)
	@Log(operationType = "角色",operationName="删除角色")
	public Object  deleteRole(HttpServletRequest request){
		Map<String,Object> map =new HashMap<String,Object>();
		map.put("uuid", request.getParameter("uuid"));
		map.put("roleId", request.getParameter("roleId"));
		//删除角色
		map.put(RequestModel.SQLID,RoleMapper.class.getName() + ".deleteRole");
		int num=roleService.delete(map);
		//判断该角色是否有权限
		if(num>0){
			map.put(RequestModel.SQLID,RoleMapper.class.getName() + ".selectUserByRoleId");
			List<RoleUserModel> models=roleService.selectLists(map);
			//删除某角色的权限
			if(models.size()>0){
				map.put(RequestModel.SQLID,MenuMapper.class.getName() + ".deleteMenuByRole");
				int size= menuService.delete(map);
		     }
		}
			if(num >0){
				return ResponseModel.Success("删除成功！");
			}else{
				return ResponseModel.Success("删除失败！");
			 }
		}
			
	/**
	 * 修改角色用户关系
	 * @param model
	 * @param request
	 * @return
	 * @throws Exception
	 */
	@RequestMapping(value = "/updateRole_User", method = RequestMethod.POST)
	@Log(operationType = "角色",operationName="修改角色用户关系")
	public Object  updateRole_User(HttpServletRequest request){
		Map<String,Object> map =new HashMap<String,Object>();
		map.put("roleId", request.getParameter("roleId"));
		map.put("userId", request.getParameter("userId"));
		//去查询有没有这个记录	
		map.put(RequestModel.SQLID,RoleMapper.class.getName() + ".updateRole_User");
		int num=roleService.update(map);
		Map<String,Object> maps =new HashMap<String,Object>();
		String str="";
		if(num == 1){
			maps.put("str","success");
			return ResponseModel.Success(maps);
		}else{
			maps.put("str","error");
			return ResponseModel.Success(maps);
		}
    } 
	
	
	
		/**
		 * 查询某用户所属的 角色
		 * @param model
		 * @param request
		 * @return
		 * @throws Exception
		 */
		@RequestMapping(value = "/selectRoleByUserId", method = RequestMethod.GET)
		@Log(operationType = "角色",operationName="查询用户所属角色")
		public Object selectRoleByUserId(HttpServletRequest request){
			Map<String,Object> map =new HashMap<String,Object>();
			map.put("userId", request.getParameter("userId"));
			map.put(RequestModel.SQLID,RoleMapper.class.getName() + ".selectRoleByUserId");
			List<RoleModel> models=roleService.selectLists(map);
		    return ResponseModel.Success(models);
		} 
		
		
		/**
		 * 查询角色树
		 * @param model
		 * @param request
		 * @return
		 * @throws Exception
		 */
		@RequestMapping(value = "/getRoleZtree", method = RequestMethod.GET)
		@Log(operationType = "角色",operationName="查询角色树")
		public Object getRoleZtree(HttpServletRequest request){
			Map<String,Object> map =new HashMap<String,Object>();
			map.put(RequestModel.SQLID,RoleMapper.class.getName() + ".getRoleZtree");
			List<ZtreeRoleModel> models=roleService.selectLists(map);
		    return ResponseModel.Success(models);
		} 

		/**
		 * 查询是否已有此角色
		 * @param model
		 * @param request
		 * @return
		 * @throws Exception
		 */
		@RequestMapping(value = "/selectRole", method = RequestMethod.GET)
		@Log(operationType = "角色",operationName="查询是否有此角色")
		public Object selectRole(HttpServletRequest request){
			Map<String,Object> map =new HashMap<String,Object>();
			map.put("roleId", request.getParameter("roleId"));
			map.put("roleName", request.getParameter("roleName"));
			map.put(RequestModel.SQLID,RoleMapper.class.getName() + ".selectRole");
			RoleModel role=(RoleModel) roleService.selectOne(map);
		    return ResponseModel.Success(role);
		} 
}
