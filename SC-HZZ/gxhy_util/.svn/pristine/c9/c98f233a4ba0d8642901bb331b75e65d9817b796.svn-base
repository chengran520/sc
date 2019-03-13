package com.gxhy.base.util;

import java.io.IOException;
import java.io.InputStream;
import java.util.HashMap;
import java.util.Map;
import java.util.Properties;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.BeansException;
import org.springframework.beans.factory.config.ConfigurableListableBeanFactory;
import org.springframework.beans.factory.config.PropertyPlaceholderConfigurer;

import com.github.pagehelper.util.StringUtil;

/**
 * @author wkke 扩展Spring默认的 PropertyPlaceholderConfigurer返回各处的properties配置内容 , 需要在spring context配置文件中做类似如下配置
 *         各处访问配置文件不再需要处理配置文件读写，直接获取即可
 */
public class CustomPropertyConfigurer extends PropertyPlaceholderConfigurer {
    private static Map<String, Object> ctxPropertiesMap = new HashMap<String, Object>();
    private static Logger logger = LoggerFactory.getLogger(CustomPropertyConfigurer.class);

    private static void initProperties() {
        Properties properties = new Properties();
        try {
        	InputStream in = CustomPropertyConfigurer.class.getResourceAsStream("/sysconfig-wechat.properties");
            properties.load(in);
            logger.info("============properties size " + (properties != null ? properties.size() : null));
        }
        catch (IOException e) {
            logger.error(e.getMessage() + "无法正常获取配置,将通过getResourceAsStream('/'+pro)获取sysconfig配置");
        }
        for (Object key : properties.keySet()) {
            String keyStr = key.toString();
            String value = properties.getProperty(keyStr).trim();
            ctxPropertiesMap.put(keyStr, value);
        }
        logger.info("============ctxPropertiesMap size:" + (ctxPropertiesMap != null ? ctxPropertiesMap.size() : null));
    }

    /**
	 * 
	 */
    public CustomPropertyConfigurer() {
    }

    @Override
    protected void processProperties(ConfigurableListableBeanFactory beanFactoryToProcess, Properties props)
        throws BeansException {
        for (Object key : props.keySet()) {
            String keyStr = key.toString();
            String value = props.getProperty(keyStr);
            ctxPropertiesMap.put(keyStr, value);
        }
        super.processProperties(beanFactoryToProcess, props);
    }

    public static Object getConfigProperty(String name) {
        return ctxPropertiesMap.get(name);
    }

    public static String getString(String name) {
        return (String) ctxPropertiesMap.get(name);
    }

    public static String getString(String name, String defaultValue) {
        String val = getString(name);
        if (StringUtil.isEmpty(val)) {
            return defaultValue;
        }
        return val;
    }

    public static Integer getNumber(String name) {
        String val = getString(name);
        if (StringUtil.isEmpty(val) || !val.matches("^-?\\d+$")) {
            return null;
        }
        return Integer.parseInt(val);
    }

    public static Integer getNumber(String name, Integer defaultValue) {
        Integer val = getNumber(name);
        if (val == null) {
            return defaultValue;
        }
        return val;
    }

    public static void setPrefilesConfigProperty() {
        initProperties();
    }

    public static Map<String, Object> getctxPropertiesMap() {
        return ctxPropertiesMap;
    }

}
