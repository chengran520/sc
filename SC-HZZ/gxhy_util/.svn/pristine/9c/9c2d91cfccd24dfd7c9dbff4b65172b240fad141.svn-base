package com.gxhy.base.service;

import java.util.Date;
import java.util.List;
import java.util.Map;

import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.alibaba.fastjson.JSON;
import com.alibaba.fastjson.JSONObject;
import com.github.abel533.mapper.Mapper;
import com.github.pagehelper.Page;
import com.github.pagehelper.PageHelper;
import com.gxhy.base.model.RequestModel;
import com.gxhy.base.util.BeanUtil;
import com.gxhy.base.util.SpringUtils;

/**
 * 通用查询service
 * @author yb
 * @2017年7月5日下午3:28:16   
 * @CopyRight gxhy
 * @param <T>
 */
@SuppressWarnings({"unchecked","unused"})
@Service
public class BaseService<T> {
	
	@Autowired
	SqlSessionTemplate masterSqlSessionTemplate;
	public Mapper<T> mapper;
	
	/********************************* sqlid+map方式开始 *********************************************************/
	
	/**
	 * 查询列表 需要传sqlid,默认支持分页，排序需要通过参数传到sqlxml中,sqlxml中可以取到map中的所有参数
	 * @param map
	 * @return Page
	 */
	public Page<?> selectList(Map<String, Object> map) {
		RequestModel<Map<String, Object>> rm = JSON.toJavaObject(
				new JSONObject(map), RequestModel.class);
		Page<?> p = PageHelper.startPage(rm.getNum().intValue(), rm.getSize()
				.intValue());
		masterSqlSessionTemplate.selectList(rm.getSqlid(), map);
		return p;
	}
	
	public List<T> selectLists(Map<String, Object> map) {
		if(map.get(RequestModel.NUM) != null && map.get(RequestModel.SIZE) != null){
			Page<?> p = PageHelper.startPage(((Number)map.get(RequestModel.NUM)).intValue()
					, ((Number)map.get(RequestModel.SIZE)).intValue());
		}
		List<T> selectList = masterSqlSessionTemplate.selectList((String)map.get(RequestModel.SQLID), map);
		return selectList;
	}
	public List<T> selectListsNoPage(Map<String, Object> map) {
		List<T> selectList = masterSqlSessionTemplate.selectList((String) map.get(RequestModel.SQLID), map);
		return selectList;
	}
	
	/**
	 * 分页查询
	 * @author Administrator   2015年8月13日
	 * @param map
	 * @return
	 */
	public Page<?> selectListsPage(Map<String, Object> map){
		RequestModel<Map<String, Object>> rm = JSON.toJavaObject(
				new JSONObject(map), RequestModel.class);
		Page<?> p = PageHelper.startPage(rm.getNum().intValue(), rm.getSize()
				.intValue());
		
		masterSqlSessionTemplate.selectList(rm.getSqlid(), map);
		return p;
	}
	
	/**
	 *  分页、排序查询
	 * @author 
	 * @param map
	 * @return
	 */
	public Page<?> selectListsPageSort(Map<String, Object> map) {
		RequestModel<Map<String, Object>> rm = JSON.toJavaObject( new JSONObject(map), RequestModel.class);
		
		Page<?> p = PageHelper.startPage(rm.getNum().intValue(), rm.getSize().intValue(),rm.getOrderby());
		
		masterSqlSessionTemplate.selectList(rm.getSqlid(), map);
		return p;
	}
	
	/**
	 * 单条查询
	 * @param map
	 * @return
	 */
	public T selectOne(Map<String, Object> map) {
		RequestModel<Map<String, Object>> rm = JSON.toJavaObject(
				new JSONObject(map), RequestModel.class);
		return masterSqlSessionTemplate.selectOne(rm.getSqlid(), map);
	}
	
	
	
	/**
	 * @param sqlid
	 * @param map
	 * @return List<Map<?, ?>>
	 */
	public List<Map<?, ?>> selectListMap(String sqlid,Map<?, ?> map) {
		return masterSqlSessionTemplate.selectList(sqlid, map);
	}
	
	
	/**
	 * 删除操作 sqlxml中可以取到map中的所有参数 map
	 * 参数：{"sqlid":"必传"}
	 * @param map
	 * @return
	 */
	public int delete(Map<String, Object> map) {
		RequestModel<?> rm = JSON.toJavaObject(new JSONObject(map),
				RequestModel.class);
		return masterSqlSessionTemplate.delete(rm.getSqlid(), map);
	}

	/**
	 * 修改操作 sqlxml中可以取到map中的所有参数
	 * @param map    
	 * @return
	 */
	public int update(Map<String, Object> map) {
		RequestModel<?> rm = JSON.toJavaObject(new JSONObject(map),
				RequestModel.class);
		return masterSqlSessionTemplate.update(rm.getSqlid(), map);
	}
	
	/**
	 * 新增操作 sqlxml中可以取到map中的所有参数
	 * @param map 
	 * @return
	 */
	public int insert(Map<String, Object> map) {
		RequestModel<?> rm = JSON.toJavaObject(new JSONObject(map),
				RequestModel.class);
		return masterSqlSessionTemplate.insert(rm.getSqlid(), map);
	}
	
	/**
	 * 批量更新，使用sqlid和Mapper list数据集合
	 * @param map
	 * @return
	 */
	public int updateListByMapper(Map<String, Object> map) {
		RequestModel<?> rm = JSON.toJavaObject(new JSONObject(map),
				RequestModel.class);
		List<?> list = rm.getList();
		for (Object object : list) {
			masterSqlSessionTemplate.update(rm.getSqlid(), object);
		}
		return 1;
	}

	/********************************* sqlid+map方式结束 *********************************************************/

	public List<T> select(T record) {
		mapper = getMapperBean((Class<T>) record.getClass());
		return mapper.select(record);
	}

	public T selectOne(T record) {
		mapper = getMapperBean((Class<T>) record.getClass());
		return (T) mapper.selectOne(record);
	}
	public T selectOne(String statement, Object parameter) {
		return masterSqlSessionTemplate.selectOne(statement, parameter);
	}
	public int selectCount(T record) {
		mapper = getMapperBean((Class<T>) record.getClass());
		return mapper.selectCount(record);
	}

	public T selectByPrimaryKey(T record) {
		mapper = getMapperBean((Class<T>) record.getClass());
		return (T) mapper.selectByPrimaryKey(record);

	}

	/**
	 * 保存
	 * @param record 实体
	 * @return
	 */
	public int insert(T record) {
		mapper = getMapperBean((Class<T>) record.getClass());
		try {
			BeanUtil.SetValueByPropertyName("crtDt", new Object[]{new Date()}, record);
			BeanUtil.SetValueByPropertyName("updDt", new Object[]{new Date()}, record);
		} catch (Exception e) {
			e.printStackTrace();
		}
		return mapper.insert(record);
	}
    
	/**
	 * 添加或修改
	 * @param record
	 * @return 返回string 
	 */
	public String saveOrUpdate(T record) {
		mapper = getMapperBean((Class<T>) record.getClass());
		T selectByPrimaryKey = mapper.selectByPrimaryKey(record);
		if (selectByPrimaryKey == null) {
			mapper.insert(record);
			return "insert";
		} else {
			mapper.updateByPrimaryKey(record);
			return "update";
		}
	}
	
	/**
	 * 保存或修改
	 * @param record
	 * @return 返回int
	 */
	public int saveOrUpdate(List<T> record){
		int i = 0;
		for (T t : record) {
			if(i==0)
				mapper =  getMapperBean((Class<T>) t.getClass());
			saveOrUpdate(t);
			i++;
		}
		return i;
	}
	
    /**
     * 批量插入
     * @param record
     * @return
     */
	public int insertBatch(List<T> record) {
		int i = 0;
		for (T t : record) {
			if (i == 0)
				mapper = getMapperBean((Class<T>) t.getClass());
			try {
				BeanUtil.SetValueByPropertyName("crtDt", new Object[]{new Date()}, t);
				BeanUtil.SetValueByPropertyName("updDt", new Object[]{new Date()}, t);
			} catch (Exception e) {
				e.printStackTrace();
			}
			mapper.insert(t);
			i++;
		}
		return i;
	}

	/**
	 * 删除
	 * @param record
	 * @return
	 */
	public int delete(T record) {
		mapper = getMapperBean((Class<T>) record.getClass());
		return mapper.delete(record);

	}
    
	/**
	 * 根据主建删除
	 * @param record
	 * @return
	 */
	public int deleteByPrimaryKey(T record) {
		mapper = getMapperBean((Class<T>) record.getClass());
		return mapper.deleteByPrimaryKey(record);
	}

	/**
	 * 批量删除
	 * @param record
	 * @return
	 */
	public int deleteBatch(List<T> record) {
		int i = 0;
		for (T t : record) {
			if (i == 0)
				mapper = getMapperBean((Class<T>) t.getClass());
			mapper.delete(t);
			i++;
		}
		return i;

	}
	
	/**
	 * 根据主键批量删除
	 * @param record
	 * @return
	 */
	public int deleteByPrimaryKeyBatch(List<T> record) {
		int i = 0;
		for (T t : record) {
			if (i == 0)
				mapper = getMapperBean((Class<T>) t.getClass());
			mapper.deleteByPrimaryKey(t);
			i++;
		}
		return i;

	}

	/**
	 * 根据主键更新
	 * @param record
	 * @return
	 */
	public int updateByPrimaryKey(T record) {
		mapper = getMapperBean((Class<T>) record.getClass());
		try {
			BeanUtil.SetValueByPropertyName("updDt", new Object[]{new Date()}, record);
		} catch (Exception e) {
			e.printStackTrace();
		}		return mapper.updateByPrimaryKeySelective(record);
	}

	/**
	 * 根据主键批量更新
	 * @param record
	 * @return
	 */
	public int updateByPrimaryKeyBatch(List<T> record) {
		int i = 0;
		for (T t : record) {
			if (i == 0)
				mapper = getMapperBean((Class<T>) t.getClass());
			try {
				BeanUtil.SetValueByPropertyName("updDt", new Object[]{new Date()}, t);
			} catch (Exception e) {
				e.printStackTrace();
			}
			mapper.updateByPrimaryKey(t);

			i++;
		}
		return i;
	}
	
	public Mapper<T> getMapperBean(Class<T> c) {
		return SpringUtils.getMapperBean(c);
   }

}