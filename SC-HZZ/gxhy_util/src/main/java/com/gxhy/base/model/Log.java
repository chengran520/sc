package com.gxhy.base.model;
import java.lang.annotation.*;
 
@Target({ElementType.PARAMETER, ElementType.METHOD})  
@Retention(RetentionPolicy.RUNTIME)  
@Documented 
public @interface Log {
    /** 要执行的操作类型 **/   
	public String operationType() default ""; 
	
     /** 要执行的具体操作**/
	public String operationName() default "";
 }