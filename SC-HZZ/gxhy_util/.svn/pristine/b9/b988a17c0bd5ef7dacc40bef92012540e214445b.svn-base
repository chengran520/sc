package com.gxhy.base.util;

import java.lang.reflect.Field;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javassist.ClassClassPath;
import javassist.ClassPool;
import javassist.CtClass;
import javassist.CtField;
import javassist.NotFoundException;
import javassist.bytecode.AnnotationsAttribute;
import javassist.bytecode.FieldInfo;
import javassist.bytecode.annotation.Annotation;
import javassist.bytecode.annotation.StringMemberValue;

import javax.persistence.Table;

/**
 *  操作class一些方法，类与注解属性的获取相关
 * @author yb
 * @2017年7月7日下午5:08:35   
 * @CopyRight gxhy
 */
public class EntityUtil {

	
    /** 
     * 获取对象对应的表名 
     * @Author wans 
     * @param object 需获取表名对象 
     * @return 类对应的表名 
     */ 
    public static String getTableName(Class clazz) { 
        String tableName = ""; 
        
        Table annotation = (Table)clazz.getAnnotation(Table.class);
        if(annotation != null){
            return annotation.name();
        }
 
        return null;
    } 
	
	/** 
	     * 获取对象的属性名称数组 
	     * @Author wans 
	     * @param object 需获取属性名称的对象 
	     * @return 属性名称 
	     */ 
	    public static String[] getEntityFields(Class clazz) { 
	        //获取泛型对应的类中的所有属性名称，不包含继承的 
	        //getFields获取所有公共访问的，包括继承的 
	        Field[] fields = clazz.getDeclaredFields(); 
	        final int length = fields.length; 
	        String[] columnNames = new String[length]; 
	        for (int i = 0; i < length; i++) { 
	            columnNames[i] = fields[i].getName(); 
	        } 
	        return columnNames; 
	    }
	
	    
	    /**
	     * 获取javaBean中属性名与字段名
	     * @author wans   2015年8月17日
	     * @param clazz
	     * @param field
	     * @return
	     */
	    public static Map<String,String> getTableColumn(Class clazz,String  field ){
	    	
	    	return getTableColumns(clazz,new String[]{field});
	    }
	    /**
	     * 获取javaBean中属性名与字段名
	     * @author wans   2015年9月23日
	     * @param clazz
	     * @param fields
	     * @return
	     */
	    public static Map<String,String> getTableColumns(Class clazz,List<String>  fields ){
	    	final int size =  fields.size();
	    	String[] arr = (String[])fields.toArray(new String[size]);
	    	return getTableColumns(clazz,arr);
	    }
	    
	/**
	 * 获取javaBean中属性名s与字段名s
	 * @author wans   2015年8月12日
	 * @param clazz
	 * @param fields
	 * @return Map<field,cloumn>
	 * @throws Exception
	 */
	    public static Map<String,String> getTableColumns(Class clazz,String[] fields){
	    	Map<String,String> columns=new HashMap<String,String>();
	    	
	    	 	ClassPool pool = ClassPool.getDefault();  
		        //获取要修改的类的所有信息  
		        ClassClassPath classPath = new ClassClassPath(EntityUtil.class);
		        pool.insertClassPath(classPath);
		        CtClass ct = null;
				try {
					ct = pool.get(clazz.getName());
				} catch (NotFoundException e1) {
					//LogUtil.error(EntityUtil.class, "getTableColumns", e1.getMessage());
					return columns;
				}    
		        
		        for (String field : fields) {
		        	 char c = field.charAt(0);
		        	if(Character.isUpperCase(c)||field.contains(".")){//如果开头是大写的话，那么说明的字段已经转换过，直接返回
		        		columns.put(field, field);
		        		continue;
		        	}
		        	//获取类里的em属性  
		        	CtField cf=null;
					try {
						cf = ct.getField(field);
					} catch (NotFoundException e) {
						//LogUtil.error(EntityUtil.class, "getTableColumns", e.getMessage());
						 continue;
					}  
		        	//获取属性信息  
		        	FieldInfo fieldInfo = cf.getFieldInfo();          
		        	//获取注解属性  
		        	AnnotationsAttribute attribute = (AnnotationsAttribute) fieldInfo.getAttribute(AnnotationsAttribute.visibleTag);  
		        	//获取注解  
		        	Annotation annotation = attribute.getAnnotation("javax.persistence.Column");         
		        	if(annotation==null){
		        		continue;
		        	}
		        	//获取注解的值  
		        	String cloumn =((StringMemberValue) annotation.getMemberValue("name")).getValue() ;         
		        	columns.put(field, cloumn);
				}
		         
		         
	    	
	    	
	    	return columns;
	    }

	

		/**
		 * 在一系列class,pro 之间，找到与属性名匹配的那一个类的字段
		 * @author wans   2015年8月17日
		 * @param tableAliasMap
		 * @param fileds
		 * @return
		 */
		public static Map<String, String> getTableColumnByMap(Map<Class, String> tableAliasMap, String[] fileds) {
			Map<String, String> tableColumns = new HashMap<String,String>();
			
			for (String filed:fileds) {//遍历需要转换的属性名
				Map<String, String> tableColumn = new HashMap<String,String>();
				for (Class clazz : tableAliasMap.keySet()) {
					tableColumn=getTableColumn(clazz,filed);
					if(tableColumns.size()>0){// 找到了的话，那么退出
						tableColumns.putAll(tableColumn);
						break;
					}else{
						
					}
				}
			}
			return tableColumns;
		}
		static StringBuffer sb = new StringBuffer();
		/**
		 * 将实体转换成字符串
		 * .toStringUtil(this,false);
		 * @param clazs
		 * @param isOutputNull
		 * @return
		 */
		public static String toStringUtil(Object clazs,boolean isOutputNull) {  
	        getParamAndValue(clazs, clazs.getClass(), isOutputNull);  
	        return sb.toString();  
	    }  
		private static void getParamAndValue(Object clazs, Class<?> clazz,boolean isOutputNull) {  
	        Class<?> sc = clazz.getSuperclass();  
	        Field[] sfields = sc.getDeclaredFields();  
	        if (sfields.length > 0) {  
	            getParamAndValue(clazs, sc, isOutputNull);  
	        }  
	        Field[] fields = clazz.getDeclaredFields();  
	        for (Field f : fields) {  
	            f.setAccessible(true);  
	            try {  
	                if (null != f.get(clazs)||isOutputNull){  
	                    sb.append(f.getName() + "=" + f.get(clazs) + ",");  
	                }
	            } catch (IllegalArgumentException | IllegalAccessException e) {  
	                e.printStackTrace();  
	            }  
	        }  
	    }  
}

