package com.gxhy.base.log;

import java.util.Date;
import java.util.UUID;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.context.request.RequestAttributes;
import org.springframework.web.context.request.RequestContextHolder;
import org.springframework.web.context.request.ServletRequestAttributes;

import com.gxhy.base.domain.SysUsers;
import com.gxhy.base.model.LogModel;
import com.gxhy.base.security.util.SecurityUtil;
import com.gxhy.base.service.LogService;
import com.gxhy.base.util.DateUtil;
import com.gxhy.base.util.HttpServletRequestHolder;
import com.gxhy.base.util.Network;

@Service
public class LogUtil {
	
	@Autowired  
	private static LogService logService;
	
	/**
	 * 手写日志
	 * @param businessCode 业务模块编码（没有写null或汉字）
	 * @param logMessage 日志内容信息
	 * @param logException 异常信息（根据这个参数是否为空来判断日志级别）
	 * @param operationType 操作类型 {增=1,删=2,改=3,查=4,其他=0}
	 */
	public static void writeLog(String businessCode,String logMessage,String logException,String operationType) {
		SysUsers user = SecurityUtil.getSessionUser();
		LogModel syslog= new LogModel();
		if(logException!=null&&!"".equals(logException)){
			syslog.setLogLevel(SysLogConstants.logLevel_ERROR);
		}else {
			syslog.setLogLevel(SysLogConstants.logLevel_INFO);
		}
		
		String id=UUID.randomUUID().toString().replaceAll("-", "");
		syslog.setUuid(id);
		syslog.setOperationType(operationType);
		syslog.setCreateDate(DateUtil.convertDateToString(new Date(), 10));
		try{
			syslog.setCreateBy(user == null ? "" : user.getUserName());
		}catch(Exception ex){
			//nothing
			syslog.setCreateBy("系统后台任务");
		}
		ServletRequestAttributes Request=(ServletRequestAttributes)RequestContextHolder.getRequestAttributes();
		if(Request==null){
			syslog.setRequestIp("无法获取对应地址");
		}else{
			  HttpServletRequest request = Request.getRequest(); 
			  syslog.setRequestIp(Network.getAddressIp(request));
		}
		syslog.setLogType(SysLogConstants.addType_user);
		syslog.setOperContent(logMessage);
		syslog.setLogException(logException);
		logService.insertLog(syslog);
	}
	
	public static void writeLog(String strMsg){
		LogUtil.writeLog("OM45",strMsg,null,"人工日志");
	}
	
	public static void out(String strMsg){
		System.out.println(strMsg);
	}
	
	public static void err(String strMsg){
		System.out.println(strMsg);
	}
			
	public static String destorylogger="destorylogger";
}
