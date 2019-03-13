/**
 * Copyright &copy; 2015-2020 <a href="http://www.jeeplus.org/">JeePlus</a> All rights reserved.
 */
package com.gxhy.base.util;

import org.apache.shiro.cache.Cache;
import org.apache.shiro.cache.CacheManager;


/**
 *  Cache工具类
 * @author yb
 *
 */
public class EhCacheUtils {

	private static CacheManager cacheManager = (CacheManager)SpringUtils.getBean("shiroCacheManager");
	
	private static final String SYS_CACHE = "sysCache";

	/**
	 * 获取SYS_CACHE缓存
	 * @param key
	 * @return
	 */
	public static Object get(String key) {
		return get(SYS_CACHE, key);
	}
	
	/**
	 * 写入SYS_CACHE缓存
	 * @param key
	 * @return
	 */
	public static void put(String key, Object value) {
		put(SYS_CACHE, key, value);
	}
	
	/**
	 * 从SYS_CACHE缓存中移除
	 * @param key
	 * @return
	 */
	public static void remove(String key) {
		remove(SYS_CACHE, key);
	}
	
	/**
	 * 获取缓存
	 * @param cacheName
	 * @param key
	 * @return
	 */
	public static Object get(String cacheName, String key) {
		return getCache(cacheName).get(key)==null?null:getCache(cacheName).get(key);
	}

	/**
	 * 写入缓存
	 * @param cacheName
	 * @param key
	 * @param value
	 */
	public static void put(String cacheName, String key, Object value) {
		//Element element = new Element(key, value);
		getCache(cacheName).put(key,value);
	}

	/**
	 * 从缓存中移除
	 * @param cacheName
	 * @param key
	 */
	public static void remove(String cacheName, String key) {
		//getCache(cacheName).remove(key);
		getCache(cacheName).remove(key);
	}
	
	/**
	 * 获得一个Cache，没有则创建一个。
	 * @param cacheName
	 * @return
	 */
	public static Cache getCache(String cacheName){
		Cache cache = getCacheManager().getCache(cacheName);
/*		if (cache == null){
			cacheManager.(cacheName);
			cache = cacheManager.getCache(cacheName);
			cache.getCacheConfiguration().setEternal(true);
		}*/
		return cache;
	}

	public static CacheManager getCacheManager() {
	    if(cacheManager==null){
	        cacheManager =(CacheManager)SpringUtils.getBean("shiroCacheManager");
	    }
		return cacheManager;
	}
}
