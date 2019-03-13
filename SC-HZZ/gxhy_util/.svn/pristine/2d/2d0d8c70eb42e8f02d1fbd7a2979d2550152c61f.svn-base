package com.gxhy.base.util;


import java.util.List;

import org.apache.commons.lang3.StringUtils;

import com.gxhy.adcd.domain.AdcdModel;
import com.gxhy.adcd.service.AdcdService;

public class AdcdUtil {
	
	private static final char Zero = '0';
	
	/**
	 *  0国家,1省,2市,3县,4乡镇,5行政村,6村组
	 * @param adCd
	 * @return
	 */
	public static int getRegionLevel(String adCd) {
		String prefixAdcd = getPrefixAdcd(adCd,false);
		if(prefixAdcd==null)
			return 0;
		int length = prefixAdcd.length();
		if(length==0)
			return 0;
		else if(length<3){
			return 1;
		}else if(length<5){
			return 2;
		}else if(length<7){
			return 3;
		}else if(length<10){
			return 4;
		}else if(length<13)
			return 5;
		else if(length<16)
			return 6;
		
		throw new RuntimeException("无法识别adCd对应级别"+adCd);
	}
	
	/**
	 * 补0
	 * @param adcd
	 * @param length
	 * @return
	 */
	public static String addZeroToAdcd(String adcd,int length){
		StringBuilder sb = new StringBuilder(adcd);
		int x = length-sb.length();
		while(x-->0){
			sb.append( Zero );
		}
		return sb.toString();
	}
	
	/**
	 * 根据ignore来确定，是否忽略行政区划7至15位
	 * @param adcd
	 * @param ignore
	 * @return
	 */
	public static String getPrefixAdcd(String adcd, boolean ignore) {
		if (StringUtils.isNotBlank(adcd)) {
			//将末尾0全部去掉
			String adcdRemoveZero = adcd.replaceAll("0+$", "");
			Integer shortAdCdLen = adcdRemoveZero.length();
			//shortAdCdLen 1-2 省,3-4市,5-6县,7-9乡镇,10-12行政村,13-15散户、自然村
			//lvl 来决定行政区划前缀
			Integer preLen = shortAdCdLen > 6 ? 
					(ignore ? 
							6 : 
								(shortAdCdLen % 3 != 0 ? 
										shortAdCdLen + (3 - shortAdCdLen % 3) :
											shortAdCdLen) ) 
						:
						(shortAdCdLen % 2 != 0 ? shortAdCdLen + 1 : shortAdCdLen);
			String preAdcd = null;
			if(preLen>shortAdCdLen){	//截取的长度已经超过了adcd的长度
				preAdcd = addZeroToAdcd(adcdRemoveZero,preLen);
			}else{
				preAdcd =  addZeroToAdcd(adcdRemoveZero,shortAdCdLen);
			}
			return preAdcd;
		}
		return null;
	}
	
	/**
	 * 传入ADCD为一级，返回多级
	 * @param adcd
	 * @return
	 */
	public static String getChildAdQryLike(String adcd){
		int level = getRegionLevel(adcd);
		String prefixAdcd = getPrefixAdcd(adcd,false);
		switch(level){
		case 0:
			return addZeroToAdcd(prefixAdcd+"__",6);//传入的是国家,获取省,__0000,还需要补充飞国家的数据
		case 1:
			return addZeroToAdcd(prefixAdcd+"__",6);//传入的是省,获取市,"11__00"
		case 2:
			return addZeroToAdcd(prefixAdcd+"__",9);//传入的是市,获取县,"1101__000"
		case 3:
			return addZeroToAdcd(prefixAdcd,12);//传入的是县,获取乡,"110101___000"
		case 4:
			return addZeroToAdcd(prefixAdcd,15);//传入的是乡,获取村,"110101099___000"
		case 5:
			return addZeroToAdcd(prefixAdcd,15);//传入的是村,获取村组,"110101099023___";
		}
		return null;
	}
	
	/**
	 * 传入的adcd为一级，即在后面补0时前面的为"_"
	 * @param adcd
	 * @return
	 */
	public static String getChildAdQryLike2(String adcd){
		int level = getRegionLevel(adcd);
		String prefixAdcd = getPrefixAdcd(adcd,false);
		switch(level){
		case 0:
			return addZeroToAdcd(prefixAdcd+"_",6);//传入的是国家,获取省,__0000,还需要补充飞国家的数据
		case 1:
			return addZeroToAdcd(prefixAdcd+"_",6);//传入的是省,获取市,"11__00"
		case 2:
			return addZeroToAdcd(prefixAdcd+"__",9);//传入的是市,获取县,"1101__000"
		case 3:
			return addZeroToAdcd(prefixAdcd+"___",12);//传入的是县,获取乡,"110101___000"
		case 4:
			return addZeroToAdcd(prefixAdcd+"____",15);//传入的是乡,获取村,"110101099___000"
		case 5:
			return addZeroToAdcd(prefixAdcd+"_____",15);//传入的是村,获取村组,"110101099023___";
		}
		return null;
	}
	
	/**
	 * 获取行政区及其下级行政区名称 
	 * @param adcd
	 * 只能操作省、市二级，可用
	 * @return
	 */
	public static List<AdcdModel> getChildAdnm(String adcd){
		if(StringUtils.isNotBlank(adcd)){
			try {
				AdcdService adcdService=SpringUtils.getBean("adcdService");
				List<AdcdModel> list= adcdService.getAdcdNm(getChildAdQryLike(adcd));
				return list;
			} catch (Exception e) {
				e.printStackTrace();
			}
		}
		return null;
	}
	
	/**
	 * 获取行政区及其下级行政区名称 
	 * @param adcd
	 * 能对省、乡、村进行操作
	 * @return
	 */
	public static List<AdcdModel> getChildAllAdnm(String adcd){
		if(StringUtils.isNotBlank(adcd)){
			try {
				AdcdService adcdService=SpringUtils.getBean("adcdService");
				List<AdcdModel> list= adcdService.getAdcdNm(getChildAdQryLike2(adcd));
				return list;
			} catch (Exception e) {
				e.printStackTrace();
			}
		}
		return null;
	}
	
	/**
	 * 获取行政区名称
	 * @param adcd
	 * @return
	 */
	public static  String  getAdnm(String adcd){
		if(StringUtils.isNotBlank(adcd)){
			try {
				AdcdService adcdService=SpringUtils.getBean("adcdService");
				String addvnm=adcdService.getAddvnm(adcd);
				return addvnm;
			} catch (Exception e) {
				e.printStackTrace();
			}
		}
		return null;
	}
	
	/**
	 * 通过行政区编码得到名称
	 * @param adcd
	 * @param level 1、省级，2、市级，3县级
	 * @return
	 */
	public static String getStrAdcdNm(String adcd,int level){
		StringBuffer sbf = new StringBuffer();
		StringBuffer std = new StringBuffer();
		if(StringUtils.isNotBlank(adcd)){
			if(level ==  1){				
				String province = adcd.substring(0,2);
				std.append(addZeroToAdcd(province,12)+",");
				String city = adcd.substring(0,4);
				std.append(addZeroToAdcd(city,12)+",");
			}else if( level == 2){
				String city = adcd.substring(0,4);
				std.append(addZeroToAdcd(city,12)+",");
				String county = adcd.substring(0,6);
				std.append(addZeroToAdcd(county,12));
			}else{
				String county = adcd.substring(0,6);
				std.append(addZeroToAdcd(county,12));
			}
			try {
				AdcdService adcdService=SpringUtils.getBean("adcdService");
				String adnm = adcdService.getAddvnm(std.toString());
				return adnm;
			} catch (Exception e) {
				e.printStackTrace();
			}
		}
		return sbf.toString();
	}
}
