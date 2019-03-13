package com.gxhy.base.util;

import java.io.Serializable;
import java.lang.reflect.Field;
import java.lang.reflect.Method;
import java.sql.Timestamp;
import java.util.Date;
import java.util.Iterator;
import java.util.Map;

import org.apache.commons.beanutils.BeanUtils;
import org.apache.commons.lang3.ArrayUtils;

public class BeanUtil extends BeanUtils {
	public static String PACKAGE_MODEL = "com.gxhy.";
	public static String EmptyStr = "";

	// 主要供webservice的简单对象进行转换
	public static void copyPropertiesBewteenDiffClass(Object source,
			Object target) {
		try {
			if (source == null || target == null) {
				System.out.println("源或目标对象为空!");
				return;
			}
			Class sourceC = source.getClass();
			Class sourceT = target.getClass();
			if (sourceC == sourceT) {
				copyNotNullAndNotEmptyStrAndObjectProperties(source, target);
				return;
			}
			Field[] sFs = sourceC.getDeclaredFields();
			Field[] tFs = sourceT.getDeclaredFields();
			Field tmpField = null;
			String fieldName = null;
			StringBuffer sb = new StringBuffer(",");
			for (int i = 0; i < tFs.length; i++) {
				tmpField = tFs[i];
				fieldName = tmpField.getName();
				if (fieldName.equals("serialVersionUID"))
					continue;
				else if (fieldName.indexOf("$") != -1)
					continue;
				sb.append(fieldName).append(",");
			}
			Method getMethod = null;
			Object getResult = null;

			for (int i = 0; i < sFs.length; i++) {
				tmpField = sFs[i];
				fieldName = tmpField.getName();
				if (fieldName.equals("serialVersionUID"))
					continue;
				else if (fieldName.indexOf("$") != -1)
					continue;
				// 检查目标对象中是否有该名称的属性
				if (sb.indexOf("," + fieldName + ",") != -1) {
					// 获取该字段的get方法
					getMethod = sourceC.getDeclaredMethod("get"
							+ fieldName.substring(0, 1).toUpperCase()
							+ fieldName.substring(1), null);
					// 获取该字段的值
					// TODO 目前仅为时间类型字段
					getResult = getMethod.invoke(source, null);
					if (getResult != null) { // 如果源对象中值不为空,则对目标对象操作
						Object[] obj = { getResult };
						SetValueByPropertyName(fieldName, obj, target);
					}
				}
			}

		} catch (Exception e) {
			e.printStackTrace();
			return;
		}
	}

	public static void copyNotNullProperties(Object source, Object target) {
		try {
			if (source == null) {
				System.out.println("源对象为空!");
				return;
			}

			if (source.getClass() != target.getClass()) {
				// 处理 load出的类带有 __$$_javassist
				if (target.getClass().getName()
						.indexOf(source.getClass().getName() + "_") == -1)
					throw new Exception("对象类型不相同!");
			}
			Class clazz = source.getClass();
			Field[] fields = clazz.getDeclaredFields();

			Field tmpField;
			for (int i = 0; i < fields.length; i++) {
				/*
				 * String fieldStr = fields[i].getName(); Method setMethod =
				 * clazz.getDeclaredMethod("set" + fieldStr.substring(0,
				 * 1).toUpperCase() + fieldStr.substring(1), new Class[]
				 * {fields[i].getType()}); Method getMethod =
				 * clazz.getDeclaredMethod("get" + fieldStr.substring(0,
				 * 1).toUpperCase() + fieldStr.substring(1), null); if
				 * (getMethod.invoke(source, null) != null) {
				 * setMethod.invoke(target, new Object[]
				 * {getMethod.invoke(source, null)}); }
				 */
				tmpField = fields[i];
				String fieldStr = tmpField.getName();

				if (fieldStr.equals("serialVersionUID"))
					continue;
				else if (fieldStr.indexOf("$") != -1)
					continue;
				Method getMethod = clazz.getDeclaredMethod(
						"get" + fieldStr.substring(0, 1).toUpperCase()
								+ fieldStr.substring(1), null);
				if (getMethod.invoke(source, null) != null) {
					tmpField.setAccessible(true);
					tmpField.set(target, tmpField.get(source));
				}
			}
		} catch (Exception e) {
			e.printStackTrace();
			throw new RuntimeException(e.getMessage());
		}
	}

	public static void copyNotNullAndNotEmptyStrAndObjectProperties(
			Object source, Object target) {
		try {
			if (source == null) {
				System.out.println("源对象为空!");
				return;
			}
			if (source.getClass() != target.getClass()) {
				// 处理 load出的类带有 __$$_javassist
				if (target.getClass().getName()
						.indexOf(source.getClass().getName() + "_") == -1)
					throw new Exception("对象类型不相同!");
			}
			Class clazz = source.getClass();
			Field[] fields = clazz.getDeclaredFields();

			Field tmpField;
			Object tmpObj = null;
			Object tmpObj2 = null;
			Method getMethod = null;
			Method setMethod = null;
			for (int i = 0; i < fields.length; i++) {
				tmpField = fields[i];
				String fieldStr = tmpField.getName();
				if (fieldStr.equals("serialVersionUID"))
					continue;
				else if (fieldStr.indexOf("$") != -1)
					continue;
				getMethod = clazz.getDeclaredMethod(
						"get" + fieldStr.substring(0, 1).toUpperCase()
								+ fieldStr.substring(1), null);

				tmpObj = getMethod.invoke(source, null);

				if (tmpObj != null) {
					if (tmpObj.getClass().getName().indexOf(PACKAGE_MODEL) != -1) {
						Object newPropertyObj = null;
						tmpObj2 = getMethod.invoke(target, null);
						if (tmpObj2 != null) {
							newPropertyObj = tmpObj2;
						} else {
							tmpObj2 = tmpObj.getClass().newInstance();
							newPropertyObj = tmpObj2;
						}
						// tmpObj.getClass().newInstance();
						BeanUtil.copyNotNullAndNotEmptyStrAndObjectProperties(
								tmpObj, newPropertyObj);
						Class[] modelClassArr = { tmpObj.getClass() };
						setMethod = clazz
								.getDeclaredMethod(
										("set"
												+ fieldStr.substring(0, 1)
														.toUpperCase() + fieldStr
												.substring(1)), modelClassArr);
						Object[] tmpModelParam = { newPropertyObj };
						setMethod.invoke(target, tmpModelParam);
					} else if (!(tmpObj instanceof java.lang.String)
							|| !EmptyStr.equals(tmpObj)) {
						tmpField.setAccessible(true);
						tmpField.set(target, tmpField.get(source));
					}
				}
			}
		} catch (Exception e) {
			e.printStackTrace();
			throw new RuntimeException(e.getMessage());
		}
	}

	public static Method getMethodByName(String methodName, Class c) {
		Method[] ms = c.getDeclaredMethods();

		if (c.getSuperclass() != null) {
			Method[] mssuper = c.getSuperclass().getDeclaredMethods();
			ms = (Method[]) ArrayUtils.addAll(ms, mssuper);
		}

		for (int i = 0; i < ms.length; i++) {
			if (ms[i].getName().equals(methodName)) {
				return ms[i];
			}
		}
		return null;
	}

	/**
	 * 通过对象和它的对象属性名名称获取对象实例
	 * */
	public static Object getObjFromModelByPropertyName(Object model,
			String propertyName) throws Exception {
		Object oldObj = GetValueByPropertyName(propertyName, model);
		if (oldObj != null)
			return oldObj;
		String mName = "set" + Character.toUpperCase(propertyName.charAt(0))
				+ propertyName.substring(1);
		Method m = getMethodByName(mName, model.getClass());
		if (m != null) {
			Class[] pc = m.getParameterTypes();
			if (pc != null && pc.length > 0) {
				// 只根据set方法的第一个参数获取对象
				Object obj = pc[0].newInstance();
				return obj;
			} else {
				throw new Exception("getObjFromModelByPropertyName set方法无参数:"
						+ mName);
			}
		} else {

			throw new Exception("getObjFromModelByPropertyName emptyMehod:"
					+ mName);
		}
	}

	public static void SetValueByPropertyName(String propertyName,
			Object[] value, Object model) throws Exception {
		int idx = propertyName.indexOf(".");
		if (idx != -1) {
			// 属性名称 整个propertyBName 用.隔开后的第一个属性
			String tmpStr = propertyName.substring(0, idx);
			// 得到对象
			Object obj = getObjFromModelByPropertyName(model, tmpStr);
			// 放到原model中
			Object[] values = { obj };
			SetValueByPropertyName(tmpStr, values, model);
			// 继续对这个对象进行赋值
			SetValueByPropertyName(propertyName.substring(idx + 1), value, obj);
		} else {
			Method m = getMethodByName("set" + Character.toUpperCase(propertyName.charAt(0))+ propertyName.substring(1), model.getClass());
			if(m==null){
				 m = getMethodByName("set" +  propertyName, model.getClass());
			}
			if (m != null) {
				Class cs = m.getParameterTypes()[0];
				Object obj = value.length > 0 ? value[0] : null;
				if (obj != null && !obj.toString().trim().equals(EmptyStr)) {
					if (!cs.equals(java.lang.String.class)) {

						if (cs.equals(java.lang.Double.class)) {
							Object[] values = { StringUtil
									.ConversionFromString(obj.toString()) };
							value = values;
						} else if (cs.equals(java.lang.Integer.class)) {
							Object[] values = { new Integer(StringUtil
									.ConversionFromString(obj.toString())
									.intValue()) };
							value = values;
						} else if (cs.equals(java.util.Date.class)) {
							// Object[] values =
							// {DateUtil.StringToDateTime(obj.toString(),
							// DateUtil.Date)}; //默认是天
//							Object[] values = { DateUtil.StringToDateTime(obj
//									.toString()) }; // 自动匹配 ,不完整方法
//							value = values;
						} else if (cs.equals(java.sql.Timestamp.class)) {
							// Object[] values = {new
							// Timestamp(DateUtil.StringToDateTime(obj.toString(),
							// DateUtil.Date).getTime())}; //默认是天
							Date d = DateUtil.StringToDateTime(obj.toString());
							if (d == null) {
								System.out.println("*****************"
										+ obj.toString() + "转化日期失败!");
								return;
							}
							Object[] values = { new Timestamp(d.getTime()) }; // 自动匹配
																				// ,不完整方法
							value = values;
						} else if (cs.equals(java.io.Serializable.class)) {
							Object[] values = { (Serializable) obj };
							value = values;
						} else if (cs.equals(java.lang.Float.class)) {
							Object[] values = { Float.valueOf((String) obj) };
							value = values;
						} else if (cs.equals(java.lang.Long.class)) {
							Object[] values = { Long.valueOf((String) obj) };
							value = values;
						}
					}
				} else {
					Object[] values = { null };
					value = values;
				}

				m.invoke(model, value);
			}
		}
	}

	public static Object GetValueByPropertyName(String propertyName,
			Object model) {
		if (model == null) {
			return null;
		}
		int idx = propertyName.indexOf(".");
		if (idx != -1) {
			String tmpStr = propertyName.substring(0, idx); // 获取 点之前的属性名
			Object o = GetValueByPropertyName(tmpStr, model); // 获取第一个属性名的对象
			tmpStr = propertyName.substring(idx + 1); // 获取剩余的属性
			return GetValueByPropertyName(tmpStr, o); // 继续对剩余的属性获取对象和值
		} else {
			Method m = getMethodByName(
					"get" + Character.toUpperCase(propertyName.charAt(0))
							+ propertyName.substring(1), model.getClass());
			try {
				if (m != null) {
					Object[] values = {};
					return m.invoke(model, values);
				} else {
					return null;
				}
			} catch (Exception e) {
				e.printStackTrace();
				return null;
			}
		}
	}

	@SuppressWarnings("unchecked")
	public static void setModelValueByParameters(Object model,
			Map parametersMap, String modelName) throws Exception {
		String tmpStr;
		String[] value;
		int idx = -1;
		if (modelName != null) {
			for (Iterator<String> it = parametersMap.keySet().iterator(); it
					.hasNext();) {
				tmpStr = it.next();
				idx = tmpStr.indexOf('.');
				if (tmpStr.indexOf(modelName) == -1)
					continue;
				if (idx != -1) {
					value = (String[]) parametersMap.get(tmpStr);
					// 传过去的 tmpStr 是去掉对象名的属性名成了,如果属性仍为对象,需要处理
					SetValueByPropertyName(tmpStr.substring(idx + 1), value,
							model);
				}
			}
		} else {
			for (Iterator<String> it = parametersMap.keySet().iterator(); it
					.hasNext();) {
				tmpStr = it.next();
				idx = tmpStr.indexOf('.');
				if (idx != -1) {
					value = (String[]) parametersMap.get(tmpStr);
					SetValueByPropertyName(tmpStr.substring(idx + 1), value,
							model);
				}
			}
		}
	}

}
