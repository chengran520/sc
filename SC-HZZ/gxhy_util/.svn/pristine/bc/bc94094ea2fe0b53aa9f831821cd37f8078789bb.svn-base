package com.gxhy.base.model;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Set;

import javax.servlet.http.HttpServletRequest;

import com.alibaba.fastjson.JSON;
import com.alibaba.fastjson.JSONObject;

/**
 * 传入的参数封装
 * @author yb
 * @2017年7月7日下午4:57:32   
 * @CopyRight gxhy
 * @param <T>
 */
@SuppressWarnings({"serial","rawtypes","unchecked"})
public class RequestModel<T> implements Serializable {
	public  static final String  BEAN="bean";
	public  static final String  NUM="num";
	public  static final String  SIZE="size";
	public  static final String  ORDERBY="orderby";
	public  static final String  SQLID="sqlid";
	
	public  static final String  SIDX="sidx";//sidx=排序字段名
	public  static final String  SORD="sord";//sord=desc|asc
	public RequestModel() {
	}

	private T data;
	private List<T> list;	//批量保存或删除的列表名称
	private String bean;	//前台传递过来的类全名（com.ibm.rich.test.domain.WidgetModel）
	private Long num=0l;	//起始页面号
	private Long size=100000l;	//页大小，多少行数据
	private String orderby;	//排序参数内容 tm,nt desc
	private String sqlid;
	private Map<String, Object> parameterMap = new HashMap<String, Object>();
	public Map<String, Object> getParameterMap() {
		return parameterMap;
	}
	public void setParameterMap(Map<String, Object> parameterMap) {
		this.parameterMap = parameterMap;
	}

	public static List getList(String body) throws ClassNotFoundException {
		RequestModel rm = JSON.toJavaObject(JSON.parseObject(body),RequestModel.class);
		List datas =new ArrayList();
		if(rm.getList()==null&&rm.getData()!=null){
			Object data= JSON.parseObject(JSON.toJSONString(rm.getData()),Class.forName(rm.getBean()));
			datas.add(data);
		}
		else{
			datas =JSON.parseArray(JSON.toJSONString(rm.getList()),Class.forName(rm.getBean()));
		}
		return datas;
	}
	
	public static List getList(String body,Class beanClass) throws ClassNotFoundException {
		RequestModel rm = JSON.toJavaObject(JSON.parseObject(body),RequestModel.class);
		List datas =new ArrayList();
		if(rm.getList()==null&&rm.getData()!=null){
			Object data= JSON.parseObject(JSON.toJSONString(rm.getData()),beanClass);
			datas.add(data);
		}
		else{
			datas =JSON.parseArray(JSON.toJSONString(rm.getList()),beanClass);
		}
		return datas;
	}
 

	public T getData() {
		return data;
	}

	public void setData(T data) {
		this.data = data;
	}


	public List<T> getList() {
		return list;
	}


	public void setList(List<T> list) {
		this.list = list;
	}


	public String getBean() {
		return bean;
	}


	public void setBean(String bean) {
		this.bean = bean;
	}
	public void setBean(Class bean) {
		this.bean = bean.getName();
	}


	public Long getNum() {
		return num;
	}


	public void setNum(Long num) {
		this.num = num;
	}


	public Long getSize() {
		return size;
	}


	public void setSize(Long size) {
		this.size = size;
	}


	public String getOrderby() {
		return orderby;
	}


	public void setOrderby(String orderby) {
		this.orderby = orderby;
	}


	public String getSqlid() {
		return sqlid;
	}


	public void setSqlid(String sqlid) {
		this.sqlid = sqlid;
	}

	public static Map getRequestParameter(HttpServletRequest request) {
		Set<String> keys = request.getParameterMap().keySet();
		Map<String, Object> map = new HashMap<String, Object>();
		 for (String key : keys) {
			 Object p = request.getParameter(key);
			 map.put(key, p);
		}
		return map;
	}
	
	public static RequestModel getRequestModel(HttpServletRequest request) {
		Map<String, Object>  map = getRequestParameter(request);
		RequestModel rm = JSON.toJavaObject(new JSONObject(map), RequestModel.class);
		return rm;
	}
 
}
