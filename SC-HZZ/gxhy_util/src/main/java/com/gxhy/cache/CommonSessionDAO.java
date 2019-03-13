package com.gxhy.cache;

import java.io.Serializable;
import org.apache.shiro.cache.CacheManager;
import org.apache.shiro.session.Session;
import org.apache.shiro.session.mgt.eis.CachingSessionDAO;

/**
 * shiro session 缓存管理类
 * @author yb
 *
 */
public class CommonSessionDAO extends CachingSessionDAO {

	private CacheManager cacheManager;

	public CommonSessionDAO() {
	}

	public CacheManager getCacheManager() {
		return cacheManager;
	}

	public void setCacheManager(CacheManager cacheManager) {
		this.cacheManager = cacheManager;
	}

	protected Serializable doCreate(Session session) {
		Serializable sessionId = generateSessionId(session);
		assignSessionId(session, sessionId);
		return sessionId;
	}

	protected Session doReadSession(Serializable sessionId) {
		return null; // should never execute because this implementation relies
						// on parent class to access cache, which
		// is where all sessions reside - it is the cache implementation that
		// determines if the
		// cache is memory only or disk-persistent, etc.
	}

	protected void doUpdate(Session session) {
		// does nothing - parent class persists to cache.
	}

	protected void doDelete(Session session) {
		// does nothing - parent class removes from cache.
	}

}
