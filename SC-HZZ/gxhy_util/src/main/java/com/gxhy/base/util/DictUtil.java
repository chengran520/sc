package com.gxhy.base.util;

/**
 * 字典工具
 * @author yb
 * @2017年7月14日上午11:28:29   
 * @CopyRight gxhy
 */
public class DictUtil {
	
	public static String RV_COUNTY = "县级";
	public static String SIG_RV_COUNTY = "重要县级";
	public static String RV_CITY = "市级";
	public static String SIG_RV_CITY = "重要市级";
	public static String RV_PROVINCE = "省级";
	public static String SIG_RV_PROVINCE = "重要省级";
	
	public static String MERIT_SCORE_YX = "优秀";
	public static String MERIT_SCORE_LH = "良好";
	public static String MERIT_SCORE_HG = "合格";
	public static String MERIT_SCORE_BHG = "不合格";
	
    /**
     * 河道等级值和名称转换
     * @param val
     * @return
     */
	public static String RiverGradeValToNm(String val) {
		 if (val == null || val.trim().equals(""))
             return null;
		 String formatStr = null;
	      switch (val) {
	      	 case "1":
	      		formatStr=RV_CITY;
	      		break;
	      	 case "2":
	      		formatStr=SIG_RV_COUNTY;
	      		break;
	      	 case "3":
	      		formatStr=RV_CITY;
	      		break;
	      	 case "4":
	      		formatStr=SIG_RV_CITY;
	      		break;
	      	 case "5":
	      		formatStr=RV_PROVINCE;
	      		break;
	      	 case "6":
	      		formatStr=SIG_RV_PROVINCE;
	      		break;
	      	 default:
	      		formatStr="无效数据";
	      }
	      return formatStr;
	 }
	
	/**
	 * 考核评分将值转成名称
	 * @param val
	 * @return
	 */
	public static String merirtScoreValToStr(String val){
		if (val == null || val.trim().equals(""))
            return null;
		 String formatStr = null;
	      switch (val) {
	      	 case "1":
	      		formatStr=MERIT_SCORE_YX;
	      		break;
	      	 case "2":
	      		formatStr=MERIT_SCORE_LH;
	      		break;
	      	 case "3":
	      		formatStr=MERIT_SCORE_HG;
	      		break;
	      	 case "4":
	      		formatStr=MERIT_SCORE_BHG;
	      		break;
	      	 default:
	      		formatStr="无效数据";
	      }
	      return formatStr;
	}
	
	/**
	 * 菜单图标管理
	 * @param menu_id
	 * @return
	 */
	public static String menuManagerIcon(String menu_id){
		if (menu_id == null || menu_id.trim().equals(""))
            return null;
		String formatStr = null;
	    switch (menu_id) {
	    	//日常办公二级菜单
	      	 case "rcxh":
	      		formatStr="ship";
	      		break;
	      	 case "jxkh":
	      		formatStr="heartbeat";
	      		break;
	      	 case "tsph":
	      		formatStr="rocket";
	      		break;
	      	 case "xxfb":
	      		formatStr="universal-access";
	      		break;
	      	 case "bgt":
	      		 formatStr="camera-retro";
	      		 break;
	      	//日常办公三级菜单
	      	 case "qdrz":
	      		 formatStr="credit-card";
	      		 break;
	      	 case "xhbj":
	      		 formatStr="flag";
	      		 break;
	      	 case "xjhzrz":
	      		 formatStr="gavel";
	      		 break;
	      	 case "khyj":
	      		 formatStr="info-circle";
	      		 break;
	      	 case "xjkhy":
	      		 formatStr="info-circle";
	      		 break;
	      	case "xzkhy":
	      		 formatStr="info-circle";
	      	 case "ldkh":
	      		 formatStr="money";
	      		 break;
	      	 case "lddf":
	      		 formatStr="industry";
	      		 break;
	      	 case "khcx":
	      		 formatStr="money";
	      		 break;
	      	 case "wdpm":
	      		 formatStr="microchip";
	      		 break;
	      	 case "xjpm":
	      		 formatStr="random";
	      		 break;
	      	 case "zfjg":
	      		 formatStr="subway";
	      		 break;
	      	 case "zfcx":
	      		 formatStr="unlock-alt";
	      		 break;
	      	 case "zfsl":
	      		 formatStr="tachometer";
	      		 break;
	      	 case "zfyj":
	      		 formatStr="suitcase";
	      		 break;
	      	//数据中心二级菜单
	      	 case "czxx":
	      		 formatStr="database";
	      		 break;
	      	 case "hkjcxx":
	      		 formatStr="cubes";
	      		 break;
	      	 case "ssjcxx":
	      		 formatStr="crop";
	      		 break;
	      	case "stxx":
	      		 formatStr="retweet";
	    	case "skxx":
	      		 formatStr="cc-visa";
	      		 break;
	      	//数据中心三级菜单
	      	 case "szxx":
	      		 formatStr="diamond";
	      		 break;
	      	 case "szjc":
	      		 formatStr="newspaper-o";
	      		 break;
	      	 case "sqxx":
	      		 formatStr="sitemap";
	      		 break;
	      	 case "pwkjc":
	      		 formatStr="sort-amount-desc";
	      		 break;
	      	//专题事件
	      	 case "sjzt":
	      		 formatStr="retweet";
	      		 break;
	      	 case "wrzt":
	      		 formatStr="rss-square";
	      		 break;
	      	 case "gspsj":
	      		 formatStr="sign-language";
	      	 case "xmyz":
	      		 formatStr="cc-visa";
	      		 break;
	      	//文案管理
	      	 case "xmwa":
	      		 formatStr="file";
	      		 break;
	      	 case "zdwa":
	      		 formatStr="file-text";
	      		 break;
	      	 case "zfwa":
	      		 formatStr="file-text-o";
	      		 break;
	      	 case "tzbb":
	      		 formatStr="file-video-o";
	      		 break;
	      	 case "yhyj":
	      		 formatStr="puzzle-piece";
	      		 break;
	      	//文案管理三级菜单
	      	 case "szbb":
	      		 formatStr="file-archive-o";
	      		 break;
	      	 case "ysqbb":
	      		 formatStr="file-audio-o";
	      		 break;
	      	 case "ywbb":
	      		 formatStr="file-code-o";
	      		 break;
	      	case "ywxxb":
	      		 formatStr="file-code-o";
	      		 break;
	      	//应急指挥
	      	 case "lxhy":
	      		 formatStr="cc-paypal";
	      		 break;
	      	 case "zygx":
	      		 formatStr="cc-visa";
	      		 break;
	      	 case "yjya":
	      		 formatStr="cc-mastercard";
	      		 break;
	      	//平台管理
	      	 case "yhgl":
	      		 formatStr="user-md";
	      		 break;
	      	 case "jsgl":
	      		 formatStr="gg";
	      		 break;
	      	 case "cdgl":
	      		 formatStr="list";
	      		 break;
	      	 case "rzgl":
	      		 formatStr="window-restore";
	      		 break;
	      	 case "bmgl":
	      		 formatStr="vcard";
	      		 break;
	    	 case "yhyz":
	      		 formatStr="vcard";
	      		 break; 
	      	//统计报表	 
	      	case "tjbb":
	      		 formatStr="window-restore";
	      		 break;
	      	 case "sqbb":
	      		 formatStr="sitemap";
	      		 break;
	      	 case "yqbb":
	      		 formatStr="gg";
	      		 break;
	      	 case "szb":
	      		 formatStr="newspaper-o";
	      		 break;
	      	 default:
	      		formatStr="无效数据";
	      }
	      return formatStr;
	}
}
