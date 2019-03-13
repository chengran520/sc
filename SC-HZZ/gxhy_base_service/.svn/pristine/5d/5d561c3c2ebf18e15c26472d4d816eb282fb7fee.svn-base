package com.gxhy.sysmanager.controller;
import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.apache.commons.lang3.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.alibaba.fastjson.JSONObject;
import com.github.pagehelper.Page;
import com.gxhy.adcd.domain.AdcdModel;
import com.gxhy.base.controller.BaseController;
import com.gxhy.base.domain.SysUsers;
import com.gxhy.base.exp.JxlsUtils;
import com.gxhy.base.model.Log;
import com.gxhy.base.model.RequestModel;
import com.gxhy.base.model.ResponseModel;
import com.gxhy.base.security.util.SecurityUtil;
import com.gxhy.base.util.AdcdUtil;
import com.gxhy.base.util.Constants;
import com.gxhy.base.util.MD5Util;
import com.gxhy.sysmanager.domain.DictModel;
import com.gxhy.sysmanager.domain.StRvUser;
import com.gxhy.sysmanager.domain.SysManageUser;
import com.gxhy.sysmanager.persistence.RoleMapper;
import com.gxhy.sysmanager.persistence.SysManagerUserMapper;
import com.gxhy.sysmanager.service.RoleService;
import com.gxhy.sysmanager.service.SysMangerService;
import com.gxhy.sysmanager.webmodel.ExportModel;
import com.gxhy.sysmanager.webmodel.QueryModel;

/**
 * 用户管理
 * @author yb
 * @2017年8月21日下午3:41:40   
 * @CopyRight gxhy
 */
@SuppressWarnings({ "unchecked", "rawtypes" })
@RestController
@RequestMapping("userManager/work")
public class SysMangerController extends BaseController{
	
	@Autowired
	SysMangerService  sysMangerService;
	
	@Autowired
	RoleService  roleService;

	/**
	 * 用户列表
	 * @param model
	 * @param request
	 * @return
	 * @throws Exception
	 */
	@RequestMapping(value = "/getUserList", method = RequestMethod.GET)
	public Object getUserList(QueryModel model,HttpServletRequest request) throws Exception{
		JSONObject map = new JSONObject();
		String adcd = request.getParameter("adcd");
		if(StringUtils.isNotBlank(adcd)){
			adcd = AdcdUtil.getPrefixAdcd(adcd, false);
		}
		map = InitParams(model);
		RequestInitRanges(map,true,SysManageUser.class);
		map.put(RequestModel.SQLID,SysManagerUserMapper.class.getName() + ".getUserList");
		map.put("keyword",request.getParameter("keyword"));
		map.put("phone", request.getParameter("phone"));
		map.put("regTp", request.getParameter("regTp"));
		map.put("adcd",adcd);
		Page page = sysMangerService.selectList(map);
		return ResponseModel.Success(page);
    }

	/**
	 * 用户注册审核
	 * @param request
	 * @return
	 */
	@RequestMapping(value = "/UpdateUserVerify", method = RequestMethod.POST)
	@Log(operationType = "用户",operationName="用户注册审核")
	public Object UpdateUserVerify(HttpServletRequest request){
		String userId=request.getParameter("userId");
		int it = sysMangerService.UpdateUserVerify(userId);
		if(it > 0){			
			return ResponseModel.Success("成功");
		}
		return ResponseModel.Failure("失败");
	}
	
	/**
	 * 增加用户
	 */
	@RequestMapping(value = "/addUser", method = RequestMethod.POST)
	@Log(operationType = "用户",operationName="增加用户")
	public Object addUser(SysManageUser model,HttpServletRequest request) throws Exception{
		String addvcd1=request.getParameter("addvcd1");
		String addvcd2=request.getParameter("addvcd2");
		String addvcd3=request.getParameter("addvcd3");
		String addvcd4=request.getParameter("addvcd4");
		String addvcd5=request.getParameter("addvcd5");
		int count=sysMangerService.insertUser(model,addvcd1,addvcd2,addvcd3,addvcd4,addvcd5);
		JSONObject map = new JSONObject();
		if( count >0){
			map.put("num",  count);
			map.put( "success", "信息成功！");
			return ResponseModel.Success(map);
		}else{
			map.put( "success", "信息失败！");
			return ResponseModel.Success(map);
		}
    }
	
	/**
	 * 修改用户密码
	 * @param request
	 * @param model
	 * @return
	 */
	@RequestMapping(value = "/updatePwdUser", method = RequestMethod.POST)
	public Object updatePwdUser(HttpServletRequest request,SysManageUser model){
		int count= sysMangerService.updatePwdUserId(model.getUserId(),MD5Util.CustomMD5(model.getNewPwd()));
		return ResponseModel.Success(count);
	}
	
	/**
	 * 修改用户密码
	 * @param request
	 * @param model
	 * @return
	 */
	@RequestMapping(value = "/resetPwd", method = RequestMethod.POST)
	public Object updatePwdUser(HttpServletRequest request){
		String userId=request.getParameter("userId");
		JSONObject map = new JSONObject();
		map.put("userId", userId);
		map.put("userPwd", MD5Util.CustomMD5("123456"));
		map.put("etm",new Date());
		map.put(RequestModel.SQLID,SysManagerUserMapper.class.getName() + ".updatePwdUserId");
		int count=sysMangerService.update(map);		
		return ResponseModel.Success(count);
	}
	
	/**
	 * 获取当前登录用户的下级用户
	 */
	@RequestMapping(value = "/getNextUsers", method = RequestMethod.POST)
	@Log(operationType = "用户",operationName="获取下级用户")
	public Object getNextUsers(HttpServletRequest request) throws Exception{
		JSONObject map = new JSONObject();
		SysUsers user = (SysUsers) SecurityUtil.getSessionAttr(Constants.CURRENT_USER);
		 
		if(user!=null&&!user.equals("")){
			map.put("addvcd", AdcdUtil.getPrefixAdcd(user.getUserAddvcd(), false));
		    map.put("userId", user.getUserId());
			//县级转交乡级的//或者乡镇管理所的
	        int job=Integer.parseInt(user.getUserJob());
	        if(job==0){//查询所有的v
	        	map.put(RequestModel.SQLID, SysManagerUserMapper.class.getName() + ".getNextUser2");
	        }else{
	        	if(job==11||job==10||job==9){//如果是村级/保洁员/巡河员
	        		int num=0;
	        		 return ResponseModel.Success(num);
	        	}else{
	        		//县级河长
	        		if(job<=7||job==14){
	        			int[] arr={5,6,7,8,13,14};
		    	    	map.put("arr", arr);
		    	    }
	        		 //乡级转交村级的河长//巡河员
		    	    else if(job==8||job==13){
		    	    	int[] arr={9,10,11};
		    	    	map.put("arr", arr);
		    	    	
		    	    }else{}
	        		map.put(RequestModel.SQLID, SysManagerUserMapper.class.getName() + ".getNextUser");
	        	}
	        	
	        }
	        List<SysManageUser> list = sysMangerService.selectLists(map);
	        return ResponseModel.Success(list);
		}else{
			return ResponseModel.Failure("当前用户不存在！");
		}
    }
    /**
     * 删除用户及对应关系
     */
	@RequestMapping(value = "/deleteUser", method = RequestMethod.POST)
	@Log(operationType = "用户",operationName="删除用户")
	public Object deleteUser(HttpServletRequest request){
		JSONObject map = new JSONObject();
		map.put("uuid", request.getParameter("uuid"));
		map.put("userId", request.getParameter("userId"));
		//删除用户
		map.put(RequestModel.SQLID,SysManagerUserMapper.class.getName() + ".deleteUser");
		int num=sysMangerService.delete(map);
		//删除用户角色关系
		map.put(RequestModel.SQLID,RoleMapper.class.getName() + ".deleteUser_Role");
		sysMangerService.delete(map);
		//删除用户和河流关系表
		map.put(RequestModel.SQLID,SysManagerUserMapper.class.getName() + ".deleteUser_River");
		sysMangerService.delete(map);
		return ResponseModel.Success(num);

    }
	
	/**
	 * 用户详情
	 */

	@RequestMapping(value = "/detailUser", method = RequestMethod.POST)
	@Log(operationType = "用户",operationName="用户详情")
	public Object detailUser(HttpServletRequest request,String uuid) throws Exception{
		JSONObject map = new JSONObject();
        map.put("uuid", uuid);
		map.put(RequestModel.SQLID,SysManagerUserMapper.class.getName() + ".detailUser");
		SysManageUser user=(SysManageUser) sysMangerService.selectOne(map);
		map.put("userId", user.getUserId());
		map.put(RequestModel.SQLID,SysManagerUserMapper.class.getName() + ".queryRvUser");
		List<StRvUser>  rvUsers =sysMangerService.selectLists(map);
		if(rvUsers.size() > 0){
			String rvUser = "";
			String rvIds="";
			for (int i = 0; i < rvUsers.size(); i++) {
				if(i < rvUsers.size() -1){
					rvUser += rvUsers.get(i).getRvNm()+",";
					 rvIds+=rvUsers.get(i).getRvCd()+",";
				}else{
					rvUser += rvUsers.get(i).getRvNm();
					rvIds+=rvUsers.get(i).getRvCd();
				}
			}
			user.setRiver_ids(rvIds);
			user.setRiver_select(rvUser);
		}

		return ResponseModel.Success(user);
    }
	
	//根据用户的id获取它的下一级行政区集合
	@RequestMapping(value = "/getUserNextAdcds", method = RequestMethod.GET)
	public Object getUserNextAdcds(HttpServletRequest request,String addvcd){
		JSONObject map = new JSONObject();
		int leavl=AdcdUtil.getRegionLevel(addvcd);
		if(leavl==3){
			map.put("addvcd", addvcd);
			map.put("country", AdcdUtil.getPrefixAdcd(addvcd, false));// 获取前缀
			map.put(RequestModel.SQLID,SysManagerUserMapper.class.getName() + ".queryUserNextCounty");
		}else if(leavl==4){
			map.put("addvcd", addvcd);
			map.put("village", AdcdUtil.getPrefixAdcd(addvcd, false));// 获取前缀
			map.put(RequestModel.SQLID,SysManagerUserMapper.class.getName() + ".queryUserNextVillage");
		}else{
			
		}
		List<AdcdModel>  list =sysMangerService.selectLists(map);
		return ResponseModel.Success(list);
    }
	
			
	
	
	/**
	 * 查询用户
	 * @param request
	 * @param userId
	 * @return
	 * @throws Exception
	 */
	
	@RequestMapping(value = "/selectUserById", method = RequestMethod.GET)
	@Log(operationType = "用户",operationName="查询用户")
	public Object selectUserById(HttpServletRequest request,String userId) throws Exception{
		JSONObject map = new JSONObject();
        map.put("userId", userId);
		map.put(RequestModel.SQLID,SysManagerUserMapper.class.getName() + ".selectUserById");
		SysManageUser user=(SysManageUser) sysMangerService.selectOne(map);
		return ResponseModel.Success(user); 
    }
	
	
	/**
	 * 导出用户
	 * excel表
	 * @param model
	 * @param request
	 * @return
	 * @throws Exception
	 */
     
     @RequestMapping(value = "/exportUsers", method = RequestMethod.GET)
 	public void exportUsers(QueryModel model, HttpServletRequest request,HttpServletResponse response) throws Exception {
    	Map<String, List<ExportModel>> maps = new HashMap<String, List<ExportModel>>();
 		JSONObject map = new JSONObject();
 		map = InitParams(model);
 		map.put(RequestModel.SQLID, SysManagerUserMapper.class.getName()+ ".getUserExport");
 		map.put("keyword", model.getKeyword());// 关键字
 		map.put("phone", model.getPhone());// 开始时间
 		List<ExportModel> m= sysMangerService.selectLists(map);
 		maps.put("m",m);
 		String title="用户信息表";
 		String xmlName="userInfo";
 		JxlsUtils.export(maps, title, xmlName,request, response);
 		
     }
     
 	/**
 	 * 获取职务列表
 	 * excel表
 	 * @param model
 	 * @param request
 	 * @return
 	 * @throws Exception
 	 */
      
      @RequestMapping(value = "/getJobList", method = RequestMethod.GET)
      @Log(operationType = "用户信息",operationName="获取职务")
  	   public Object getJobList(){
  		JSONObject map = new JSONObject();
  		map.put(RequestModel.SQLID, SysManagerUserMapper.class.getName()+ ".getJobList");
  		List<SysManageUser> jobs= sysMangerService.selectLists(map);
  		return ResponseModel.Success(jobs); 
      }
      
      /**
   	 * 获取用户名和id
   	 * excel表
   	 * @param model
   	 * @param request
   	 * @return
   	 */
      @RequestMapping(value = "/getUsers", method = RequestMethod.POST)
      public Object getUsers(){
    		JSONObject map = new JSONObject();
    		map.put(RequestModel.SQLID, SysManagerUserMapper.class.getName()+ ".getUsers");
    		List<DictModel> list= sysMangerService.selectLists(map);
    		return ResponseModel.Success(list); 
      }
      
     /**
 	 * 校验原密码
 	 * excel表
 	 * @param model
 	 * @param request
 	 * @return
 	 */     
      @RequestMapping(value = "/checkUserPwd", method = RequestMethod.POST)
      public Object getUsers(HttpServletRequest request){
    		JSONObject map = new JSONObject();
    		map.put("userId", request.getParameter("userId"));
    		map.put("password", MD5Util.CustomMD5( request.getParameter("password")));
    		map.put(RequestModel.SQLID, SysManagerUserMapper.class.getName()+ ".getCount");
    		int count=(int) sysMangerService.selectOne(map);
    		return ResponseModel.Success(count); 
      }
      
      /**
   	 * 校验手机号码
   	 * excel表
   	 * @param model
   	 * @param request
   	 * @return
   	 */  
      
      @RequestMapping(value = "/checkUserPhone", method = RequestMethod.POST)
      public Object checkUserPhone(HttpServletRequest request){
    		JSONObject map = new JSONObject();
    		map.put("userPhone", request.getParameter("userPhone"));
    		map.put(RequestModel.SQLID, SysManagerUserMapper.class.getName()+ ".checkUserPhone");
    		int count=(int) sysMangerService.selectOne(map);
    		return ResponseModel.Success(count); 
      }
      
      /**
     	 * 查询人员个数
     	 * excel表
     	 * @param model
     	 * @param request
     	 * @return
     	 */  
        
        @RequestMapping(value = "/getCounts", method = RequestMethod.GET)
        public Object getCounts(HttpServletRequest request){
      		JSONObject map = new JSONObject();
      		map.put(RequestModel.SQLID, SysManagerUserMapper.class.getName()+ ".getCounts");
      		List<Integer> list=sysMangerService.selectLists(map);
      		return ResponseModel.Success(list); 
        }
}
