package com.gxhy.base.model;

import java.util.Collection;

import com.alibaba.fastjson.JSON;
import com.alibaba.fastjson.JSONArray;
import com.alibaba.fastjson.JSONObject;
import com.github.pagehelper.Page;

/**
 * 返回页面封装
 * @author yb
 * @2017年7月7日下午4:58:28   
 * @CopyRight gxhy
 * @param <T>
 */
public class ResponseModel<T> {
	//是否成功
	private boolean success;
	//返回数据
	private T data;
	//返回数量
	private long total;
	//返回分页信息
	private long pages;
	//失败信息
	private String message;
	private String code;
	private String stackTrace;
	
	public boolean isSuccess() {
		return success;
	}
	public String getCode() {
		return code;
	}
	public void setCode(String code) {
		this.code = code;
	}
	public long getPages() {
		return pages;
	}
	public void setPages(long pages) {
		this.pages = pages;
	}
	public void setSuccess(boolean success) {
		this.success = success;
	}
	
	public static <E> ResponseModel<E> Success(E data){
		ResponseModel<E> res= new ResponseModel<E>();
		res.setSuccess(true);
		res.setData(data);
		if (data instanceof Page){
			res.setTotal(((Page) data).getTotal());
			res.setPages(((Page) data).getPages());
			
		}
		else if(data instanceof Collection){
			res.setTotal(((Collection) data).size());
		}else{
			res.setTotal(1);
		}
		return res;
	}
	public static <E> ResponseModel<E> Success(E data,String code){
        ResponseModel<E> res= Success(data);
        res.setCode(code);
        return res;
    }
	public static <E> ResponseModel<E> Success(E data, long total){
		ResponseModel<E> res= new ResponseModel<E>();
		res.setSuccess(true);
		res.setData(data);
		res.setTotal(total);
		return res;
	}
	
	public static <E> ResponseModel<E> Success(String message){
		ResponseModel<E> res= new ResponseModel<E>();
		res.setSuccess(true);
		res.setMessage(message);
		return res;
	}
	
	public static <E> ResponseModel<E> Failure(String message){
		ResponseModel<E> res= new ResponseModel<E>();
		res.setSuccess(false);
		res.setMessage(message);
		return res;
	}
	
	public static <E> ResponseModel<E> Failure(String message, String stackTrace){
		ResponseModel<E> res= new ResponseModel<E>();
		res.setSuccess(false);
		res.setMessage(message);
		res.setStackTrace(stackTrace);
		return res;
	}
   public static <E> ResponseModel<E> Failure(String message, String stackTrace,String code){
        ResponseModel<E> res= Failure(message,stackTrace);
        res.setCode(code);
        return res;
    }
	public T getData() {
		return data;
	}
	public void setData(T data) {
		this.data = data;
	}
	public String getMessage() {
		return message;
	}
	public void setMessage(String message) {
		this.message = message;
	}
	public long getTotal() {
		return total;
	}
	public void setTotal(long total) {
		this.total = total;
	}
//	public int getStart() {
//		return start;
//	}
//	public void setStart(int start) {
//		this.start = start;
//	}
//	public int getEnd() {
//		return end;
//	}
//	public void setEnd(int end) {
//		this.end = end;
//	}
	public String getStackTrace() {
		return stackTrace;
	}
	public void setStackTrace(String stackTrace) {
		this.stackTrace = stackTrace;
	}
//	public  JSONObject getResObject() {
//		return JSON.parseObject(JSON.toJSONString(data));
//		
//	}
	public  JSONArray resJsonArray() {
		return JSON.parseArray(JSON.toJSONString(data));
		
	}
	public  String resJsonValue(String string) {
		
		return JSON.parseObject(JSON.toJSONString(data)).getString(string);
		
	}
    public String toString() {
        return JSONObject.toJSONString(this);
    }
	
	
}
