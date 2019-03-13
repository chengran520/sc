package com.gxhy.base.log;

import java.lang.reflect.Field;
import java.net.InetAddress;
import java.net.UnknownHostException;
import java.util.ArrayList;
import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Set;

import javax.servlet.http.HttpServletRequest;

import org.aspectj.lang.ProceedingJoinPoint;
import org.aspectj.lang.reflect.MethodSignature;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.context.request.RequestContextHolder;
import org.springframework.web.context.request.ServletRequestAttributes;

import com.gxhy.base.domain.SysUsers;
import com.gxhy.base.model.LogModel;
import com.gxhy.base.security.util.SecurityUtil;
import com.gxhy.base.service.LogService;
import com.gxhy.base.service.MtdNote;
import com.gxhy.base.util.DateUtil;
import com.gxhy.base.util.HttpServletRequestHolder;
import com.gxhy.base.util.Network;


/**
 * @author wsj
 * @date 2013-3-6, 下午01:36:49
 * 日志切面
 */
public class SysLogAdvice{
	private Map<Integer, String[]> opTypeMap=new HashMap<Integer, String[]>();
	
	private Integer opTypeKeys[];
	
	private String requiredToLogOpTypes;
	
	@Autowired
	private LogService logService;

	public void setOpTypeMap(Map<Integer,String> opTypeMap) {
		Set<Integer> opTypeKeySet=opTypeMap.keySet();
		opTypeKeys=new Integer[opTypeKeySet.size()];
		opTypeKeys=opTypeKeySet.toArray(opTypeKeys);
		for (Integer opTypeKey : opTypeKeys) {
			String methods=opTypeMap.get(opTypeKey);
			methods=methods.replace("*", "");
			this.opTypeMap.put(opTypeKey, methods.split("\\s*,\\s*"));
		}
	}
	
	public void setRequiredToLogOpTypes(String requiredToLogOpTypes) {
		this.requiredToLogOpTypes = requiredToLogOpTypes;
	}

	/**
	 * 获取action、webservice层异常日志（系统级）
	 */
	public Object controllerAdvice(ProceedingJoinPoint pJoinPoint) throws Throwable{
		Object retVal=null;
		try {
			retVal=pJoinPoint.proceed();
		} catch (Throwable e) {//异常日志都记录
			LogModel sysLog= new LogModel();
			sysLog.setLogLevel(SysLogConstants.logLevel_ERROR);
			sysLog.setLogType(SysLogConstants.addType_sys);
			this.SetLog(pJoinPoint, sysLog, e);
			logService.insertLog(sysLog);
			throw e;
		}
		return retVal;
	}
	
	/**
	 * 获取service层日志（用户级）
	 */
	public Object serviceAdvice(ProceedingJoinPoint pJoinPoint) throws Throwable{
		if(pJoinPoint==null){
			return "";
		}
		Object retVal=pJoinPoint.proceed();
		Integer operType=parseOperType(pJoinPoint.getSignature().getName());
		if(requiredToLogOpTypes.indexOf(operType.toString())>=0){//需要记录日志
			LogModel sysLog= new LogModel();
			sysLog.setLogLevel(SysLogConstants.logLevel_INFO);
			sysLog.setLogType(SysLogConstants.addType_user);
			SetLog(pJoinPoint,sysLog,null);
			logService.insertLog(sysLog);
		}
		return retVal;
	}

	/**
	 * 设置日志的属性
	 */
	private void SetLog(ProceedingJoinPoint pJoinPoint,LogModel sysLog,Throwable e) {
		SysUsers user = SecurityUtil.getSessionUser();
		Class targetClzz=pJoinPoint.getTarget().getClass();
		String className=targetClzz.getName();
		sysLog.setLogClass(className);
		 
		sysLog.setCreateDate(DateUtil.convertDateToString(new Date(), 10));
		MethodSignature methodSignature=(MethodSignature) pJoinPoint.getSignature();
		String fullMethodName=methodSignature.getMethod().toString();
		String contMenthName = pJoinPoint.getTarget().getClass().getName();
		String methodName=fullMethodName.substring(fullMethodName.lastIndexOf(".", fullMethodName.indexOf("("))+1);
		sysLog.setMethod(contMenthName+"."+methodName);
		sysLog.setOperContent(parseLogContent(pJoinPoint, methodSignature, methodName));
		ServletRequestAttributes Request=(ServletRequestAttributes)RequestContextHolder.getRequestAttributes();
		if(Request==null){
			sysLog.setRequestIp("无法获取对应地址");
		}else{
			HttpServletRequest request = Request.getRequest(); 
			sysLog.setRequestIp(Network.getAddressIp(request));
		}
		sysLog.setCreateBy(user == null ? "" : user.getUserName());
		if(e!=null){//exception
			sysLog.setLogException(this.getExceptionAllinformation(e));
		}else{
			sysLog.setLogException("请求成功");
		}
		
	}
	
	
	/**
	 * 获取异常信息
	 * @param ex
	 * @return
	 */
	public static String getExceptionAllinformation(Throwable ex){
        String sOut = "";
        sOut += ex.getMessage() + "\r\n";
        StackTraceElement[] trace = ex.getStackTrace();
        for (StackTraceElement s : trace) {
            sOut += "\tat " + s + "\r\n";
        }
        if(sOut.length() > 450){
        	sOut = sOut.substring(0,450);
        }
        return sOut;
	}

	/**
	 * 日志内容
	 * @return
	 */
	private String parseLogContent(ProceedingJoinPoint pJoinPoint,
			MethodSignature methodSignature, String methodName) {
		StringBuffer sb=new StringBuffer();
		MtdNote mtdNote=methodSignature.getMethod().getAnnotation(MtdNote.class);
		sb.append(mtdNote==null?methodName:mtdNote.value()).append(",");
		Object args[]=pJoinPoint.getArgs();
		for (Object arg : args) {
			sb.append(arg).append(":");
			try {
				sb.append(getObject(arg));
			} catch (IllegalArgumentException | IllegalAccessException e) {
				e.printStackTrace();
			}
			sb.append(",");
		}
		String content=sb.toString();
		int lenLimit=450;
		if(content.length()>lenLimit){
			content=content.substring(0,lenLimit);
		}
		return content.replaceFirst(",$", "");
	}
	
	private String getObject(Object obj) throws IllegalArgumentException, IllegalAccessException{
		
		if(obj==null){
			return "obj为null，请检查。";
		}
		
		Field [] fields=obj.getClass().getDeclaredFields();
		StringBuffer sb=new StringBuffer();
		for(Field field:fields){
			field.setAccessible(true);//设置访问权限
			if(field.get(obj)==null)
				continue;
			sb.append(field.getName()).append(":").append(field.get(obj).toString()).append(",");
		}
		return sb.toString();
	}
	
	/**
	 * 根据方法名获取操作类型
	 * @param methodName
	 */
	private Integer parseOperType(String methodName){
		Integer operType=0;
		for (Integer opTypeKey: opTypeKeys) {
			String methodArray[]=opTypeMap.get(opTypeKey);
			for (String method : methodArray) {
				if(methodName.startsWith(method)){
					return opTypeKey;
				}
			}
		}
		return operType;
	}
	
	
}

