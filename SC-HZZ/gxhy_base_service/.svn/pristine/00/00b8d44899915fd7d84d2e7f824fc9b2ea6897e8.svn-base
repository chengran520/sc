
package com.gxhy.sysmanager.controller;
import java.awt.Color;
import java.awt.image.BufferedImage;
import java.io.IOException;
import java.util.List;
import javax.imageio.ImageIO;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import org.apache.shiro.SecurityUtils;
import org.apache.shiro.authc.UsernamePasswordToken;
import org.apache.shiro.subject.Subject;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.alibaba.fastjson.JSONObject;
import com.gxhy.base.controller.BaseController;
import com.gxhy.base.domain.SysRole;
import com.gxhy.base.domain.SysUsers;
import com.gxhy.base.model.Log;
import com.gxhy.base.model.RequestModel;
import com.gxhy.base.model.ResponseModel;
import com.gxhy.base.persistence.SysRoleMapper;
import com.gxhy.base.security.util.SecurityUtil;
import com.gxhy.base.service.BaseService;
import com.gxhy.base.util.Constants;
import com.gxhy.base.util.MD5Util;
import com.gxhy.base.util.ReqSupportUtil;
import com.gxhy.base.util.VerifyCodeUtil;
import com.gxhy.sysmanager.persistence.SysUsersMapper;

/**
 * 用户登陆
 * @author yb
 * @2017年8月5日下午4:34:58   
 * @CopyRight gxhy
 */
@RestController
@RequestMapping("base/api/login")
@SuppressWarnings({"rawtypes","unchecked"})
public class LoginController extends BaseController{
	
	private static final Logger logger = LoggerFactory.getLogger(LoginController.class);
	
	@Autowired
	BaseService baseService;
	
	/**
	 * 用户登陆
	 * @author yb
	 * @param request
	 * @return
	 * @throws Exception
	 */
	@RequestMapping(value = "/user/login", method = RequestMethod.POST)
	@Log(operationType = "登录",operationName="用户登录")  
    public Object login(HttpServletRequest request) throws Exception {
		 //生成验证码
		 String gentCode = (String) request.getSession().getAttribute("verifyCode");
		 //输入验证码
		 String inptCode = request.getParameter("verifyCode");
		 boolean flag = this.isVerifyCode(gentCode, inptCode);
		 if(!flag){
			 return ResponseModel.Failure("验证码输入不正确！");
		 }
		 //用户名
		 String loginName = request.getParameter("loginName");
		 //密码
		 String loginPasswd = request.getParameter("loginPasswd");
		 //密码加密
		 loginPasswd=MD5Util.CustomMD5(loginPasswd);
		 JSONObject paramMap = new JSONObject();
		 paramMap.put(RequestModel.SQLID, SysUsersMapper.class.getName() + ".querySysUsersById");
		 paramMap.put("userId", loginName);
		 paramMap.put("userPwd", loginPasswd);
	     paramMap = ReqSupportUtil.RequestInitRanges(request, paramMap);
	     SysUsers user = (SysUsers) baseService.selectOne(paramMap);
	     if(user == null){
	    	 return ResponseModel.Failure("用户不存在或密码错误！");
	     }else{
    	     Subject currentUser = SecurityUtils.getSubject(); 
    	     logger.info("开始验证用户名："+loginName+"密码："+loginPasswd);
    	     //通过shiro进行安全权限认证
    	     UsernamePasswordToken token = new UsernamePasswordToken(loginName, loginPasswd); 
    	     currentUser.login(token);
    	     if(currentUser.isAuthenticated()){ 
    	    	logger.info("验证用户信息成功,跳转页面！");
    	    	currentUser.getSession().setAttribute(Constants.CURRENT_USER, user);
    	    	currentUser.getSession().setAttribute("userId", user.getUserId());
	            currentUser.getSession().setAttribute("username", user.getUserName());
	            currentUser.getSession().setAttribute("useradcd", user.getUserAddvcd());
	            currentUser.getSession().setAttribute("userjob", user.getUserJob());
	            currentUser.getSession().setAttribute("deptId", user.getDeptId());
	            request.getSession().setAttribute("user", user);
	            paramMap.put(RequestModel.SQLID, SysRoleMapper.class.getName() + ".querySysRoleByUserId");
		   		paramMap.put("userId", loginName);
		   	    paramMap = ReqSupportUtil.RequestInitRanges(request, paramMap);
		   	    List<SysRole> roles = baseService.selectList(paramMap);
		   	    user.setRoles(roles);
	            ResponseModel rm = ResponseModel.Success( "main.jsp" );
	            return rm;
    	     } 
	     }
	     return ResponseModel.Failure("登陆失败，请检查用户名和密码是否正确，网络是否连接！");
    }
	
	/**
	 *  获取验证码图片和文本(验证码文本会保存在HttpSession中) 
	 * @param request
	 * @param response
	 * @throws IOException
	 */
    @RequestMapping("/getVerifyCodeImage") 
    @Log(operationType = "登录",operationName="获取验证码")  
    public void VerifyCodeImage(HttpServletRequest request, HttpServletResponse response) throws IOException {  
        //设置页面不缓存  
        response.setHeader("Pragma", "no-cache");  
        response.setHeader("Cache-Control", "no-cache");  
        response.setDateHeader("Expires", 0);  
        String verifyCode = VerifyCodeUtil.generateTextCode(VerifyCodeUtil.TYPE_NUM_ONLY, 4, null);  
        //将验证码放到HttpSession里面  
        request.getSession().setAttribute("verifyCode", verifyCode);  
        //设置输出的内容的类型为JPEG图像  
        response.setContentType("image/jpeg");  
        BufferedImage bufferedImage = VerifyCodeUtil.generateImageCode(verifyCode, 90, 30, 3, true, Color.WHITE, Color.BLACK, null);  
        //写给浏览器  
        ImageIO.write(bufferedImage, "JPEG", response.getOutputStream());  
    } 
    
    /**
     * 验证码验证
     * @param gentCode
     * @param inptCode
     * @return
     */
    @Log(operationType = "登录",operationName="验证码验证") 
    private boolean isVerifyCode(String gentCode,String inptCode){
    	if(gentCode.equals(inptCode)){
    		return true;
    	}
    	return false;
    }
    
    /**
     * 用户注销
     * @param request
     * @return
     */
   
    @RequestMapping(value = "/user/logout", method = RequestMethod.GET)
    @Log(operationType = "登录",operationName="用户注销") 
    public Object logOut(HttpServletRequest request){
    	SecurityUtil.removeSessionUser(request);
    	return ResponseModel.Success("用户注销成功！");
    }
}
