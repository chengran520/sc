package com.gxhy.sysmanager.controller;
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
import com.gxhy.sysmanager.domain.MenuModel;
import com.gxhy.sysmanager.domain.ZtreeMenuModel;
import com.gxhy.sysmanager.persistence.MenuMapper;
import com.gxhy.sysmanager.service.MenuService;
import com.gxhy.sysmanager.webmodel.QueryModel;

/**
 * 菜单
 * @author yb
 */
@SuppressWarnings({"unchecked","rawtypes"})
@RestController
@RequestMapping("menu/work")
public class MenuController extends BaseController{

	@Autowired
	MenuService  menuService;
	
	/**
	 * 菜单列表
	 * @param model
	 * @param request
	 * @return
	 */
	@RequestMapping(value = "/getMenuList", method = RequestMethod.GET)
	@Log(operationType = "菜单",operationName="菜单列表")
	public Object  getMenuList(QueryModel model,HttpServletRequest request){
		JSONObject map = new JSONObject();
		Page page=null;
		try {
			map = InitParams(model);
			RequestInitRanges(map,true,MenuModel.class);
			map.put(RequestModel.SQLID,MenuMapper.class.getName() + ".getMenuList");
			map.put("keyword",request.getParameter("keyword"));
            page = menuService.selectList(map);
	    }  catch (Exception e) {
			e.printStackTrace();
		}
		return ResponseModel.Success(page);
    }

	/**
	 * 保存菜单
	 * @param model
	 * @param request
	 * @return
	 */
	@RequestMapping(value = "/saveMenu", method = RequestMethod.POST)
	public Object saveMenu(HttpServletRequest request){
		int num=0;
		Map<String,Object> map =new HashMap<String,Object>();
		map.put("uuid", request.getParameter("uuid"));
		map.put("menuId", request.getParameter("menuId"));
		map.put("menuNm", request.getParameter("menuNm"));
		if(StringUtils.isBlank(request.getParameter("pmenuId"))){
			map.put("pmenuId","-1");
		}else{
			map.put("pmenuId",request.getParameter("pmenuId"));
		}	
		map.put("menuUrl", request.getParameter("menuUrl"));
		map.put("sort", request.getParameter("sort"));
    	if(StringUtils.isBlank(request.getParameter("uuid"))){			
			map.put("uuid", UUID.randomUUID().toString().replace("-", ""));
			map.put(RequestModel.SQLID,MenuMapper.class.getName() + ".saveMenu");
			num = menuService.insert(map);	
		}else {
			map.put(RequestModel.SQLID,MenuMapper.class.getName() + ".updateMenu");
			num = menuService.update(map);
		}
    
			return ResponseModel.Success(num);
		
	}
	/**
	 * 得到菜单权限树
	 * @param model
	 * @param request
	 * @return
	 */
	@RequestMapping(value = "/getMenuZtree", method = RequestMethod.POST)
	@Log(operationType = "菜单",operationName="菜单树")
	public Object  getMenuZtree(HttpServletRequest request){
		JSONObject map = new JSONObject();
		map.put(RequestModel.SQLID,MenuMapper.class.getName() + ".getMenuZtree");
	    List<ZtreeMenuModel>  menus= menuService.selectList(map);
		return ResponseModel.Success(menus);
    }
		
	/**
	 * 根据相应的角色获取树
	 * @param model
	 * @param request
	 * @return
	 */
	@RequestMapping(value = "/getMenuByRole", method = RequestMethod.POST)
	@Log(operationType = "菜单",operationName="根据角色获取菜单")
	public Object  getMenuByRole(HttpServletRequest request){
		JSONObject map = new JSONObject();
		String roleId=request.getParameter("roleId");
		map.put("roleId", roleId);
		map.put(RequestModel.SQLID,MenuMapper.class.getName() + ".getMenuByRole");
	    List<ZtreeMenuModel>  menus= menuService.selectList(map);
		return ResponseModel.Success(menus);
    }
		
	/**
	 * 根据角色修改权限
	 * @param model
	 * @param request
	 * @return
	 */
	@RequestMapping(value = "/UpdateMenuByRole", method = RequestMethod.POST)
	@Log(operationType = "菜单",operationName="修改菜单")
	public Object  UpdateMenuByRole(HttpServletRequest request){
		JSONObject map = new JSONObject();
		String roleId=request.getParameter("roleId");
		String menuId=request.getParameter("menuId");
		map.put("roleId", roleId);
		map.put(RequestModel.SQLID,MenuMapper.class.getName() + ".deleteMenuByRole");
		int num=menuService.delete(map);
		int count=0;
			//保存权限信息
			if(StringUtils.isNotBlank(menuId)){
				String[] menuIds=menuId.split(",");
				for(int i=0;i<menuIds.length;i++){
					map.put("menuId", menuIds[i]);
					map.put(RequestModel.SQLID,MenuMapper.class.getName() + ".SaveRole_Menu");
					count=menuService.insert(map);
				}
			}	
		if(num >0&&count>0){
			return ResponseModel.Success("信息成功！");
		}else{
			return ResponseModel.Success("信息失败！");
		}
		
    }
		
	/**
	 * 删除菜单
	 * @param model
	 * @param request
	 * @return
	 */
	@RequestMapping(value = "/deleteMenu", method = RequestMethod.POST)
	@Log(operationType = "菜单",operationName="删除菜单")
	public Object deleteMenu(HttpServletRequest request){
		JSONObject map = new JSONObject();
		String uuid=request.getParameter("uuid");
		String menuId=request.getParameter("menuId");
		map.put("uuid", uuid);
		map.put("menuId", menuId);
		map.put(RequestModel.SQLID,MenuMapper.class.getName() + ".deleteMenu");
	    int num=menuService.delete(map);
	    //删除成功后删除关系表
	    if(num==1){
	    	map.put(RequestModel.SQLID,MenuMapper.class.getName() + ".deleteMenu_Role");
	    	menuService.delete(map);
	    }
		return ResponseModel.Success(num);
    }
		
		
	/**
	 * 根据权限查询菜单
	 * @param model
	 * @param request
	 * @return
	 */
	@RequestMapping(value = "/selectMenuById", method = RequestMethod.GET)
	@Log(operationType = "菜单",operationName="查询菜单权限")
	public Object selectMenuById(HttpServletRequest request){
		JSONObject map = new JSONObject();
		String uuid=request.getParameter("uuid");
		map.put("uuid", uuid);
		map.put(RequestModel.SQLID,MenuMapper.class.getName() + ".selectMenuById");
        MenuModel menu=(MenuModel) menuService.selectOne(map);
		return ResponseModel.Success(menu);
    }
		
	/**
	 * 查询权限名称
	 * @param model
	 * @param request
	 * @return
	 */
	@RequestMapping(value = "/selectMenuName", method = RequestMethod.GET)
	@Log(operationType = "菜单",operationName="查询权限名称")
	public Object selectMenuName(HttpServletRequest request){
		JSONObject map = new JSONObject();
		String menuId=request.getParameter("menuId");
		map.put("menuId", menuId);
		map.put(RequestModel.SQLID,MenuMapper.class.getName() + ".selectMenuName");
        MenuModel model=(MenuModel) menuService.selectOne(map);
		return ResponseModel.Success(model);
    }
		
}
