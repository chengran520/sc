package com.gxhy.base.util;

import java.io.ByteArrayInputStream;
import java.io.ByteArrayOutputStream;
import java.io.IOException;
import java.io.UnsupportedEncodingException;
import java.net.URLEncoder;
import java.text.DecimalFormat;
import java.text.MessageFormat;
import java.util.ArrayList;
import java.util.Collection;
import java.util.LinkedHashSet;
import java.util.List;
import java.util.Map;
import java.util.Set;
import java.util.regex.Matcher;
import java.util.regex.Pattern;
import java.util.zip.GZIPInputStream;
import java.util.zip.GZIPOutputStream;

import org.apache.commons.lang3.StringUtils;

/**
 * 字符串处理
 * @author yb
 * @2017年7月7日下午5:17:43   
 * @CopyRight gxhy
 */
public class StringUtil extends StringUtils {
    /**
     * 格式化数字
     * 
     * @param oldValue 要转换的数字
     * @param dotlen 保留的小数点后位数
     * @param addZero 是否在后面补0
     * @param emptyStr 如果为空返回的字符串
     * @return 格式化输出后的数字，如果oldValue为null，则返回emptyStr
     */
    public static String viewNumFormat(Double oldValue, int dotlen, boolean addZero, String emptyStr) {
        if (oldValue == null) {
            return emptyStr;
        }
        else {
            return viewNumFormat(oldValue.doubleValue(), dotlen, addZero);
        }
    }

    /**
     * 格式化输出后的数字
     * 
     * @param oldValue 要转换的数字
     * @param dotlen 保留的小数点后位数
     * @return 格式化输出后的数字，如果oldValue为null，则返回“”
     */
    public static String viewNumFormat(Double oldValue, int dotlen) {
        if (dotlen != 0)
            return viewNumFormat(oldValue, dotlen, true);
        else
            return viewNumFormat(oldValue, dotlen, false);
    }

    /**
     * 格式化输出后的数字
     * 
     * @param oldValue 要转换的数字
     * @param dotlen 保留的小数点后位数
     * @param addZero 是否在后面补0
     * @return 格式化输出后的数字，如果oldValue为null，则返回“”
     */
    public static String viewNumFormat(Double oldValue, int dotlen, boolean addZero) {
        if (oldValue == null) {
            return "";
        }
        else {
            return viewNumFormat(oldValue.doubleValue(), dotlen, addZero);
        }
    }

    /**
     * 格式化输出后的数字
     * 
     * @param oldValue 要转换的数字但是String类型的
     * @param dotlen 保留的小数点后位数
     * @param addZero 是否在后面补0
     * @return 格式化输出后的数字，如果oldValue为null，则返回“”
     */
    public static String viewNumFormat(String oldValue, int dotlen, boolean addZero) {
        if (oldValue == null) {
            return "";
        }
        else {
            try {
                return viewNumFormat(Double.parseDouble(oldValue), dotlen, addZero);
            }
            catch (NumberFormatException e) {
                e.printStackTrace();
                throw new RuntimeException("字符串转数字出现错误：" + e);
            }
        }
    }

    /**
     * 格式化输出后的数字
     * 
     * @param v 要转换的数字
     * @param dotlen 保留的小数点后位数
     * @return
     */
    public static String viewNumFormat(double v, int dotlen) {
        if (dotlen != 0)
            return viewNumFormat(v, dotlen, true);
        else
            return viewNumFormat(v, dotlen, false);
    }

    /**
     * 格式化输出后的数字
     * 
     * @param oldValue 要转换的数字
     * @param dotlen 保留的小数点后位数
     * @param addZero 如原数值小数后位数不足，是否在后面补0
     * @return 格式化输出后的数字，如果oldValue为null，则返回“”
     */
    public static String viewNumFormat(double oldValue, int dotlen, boolean addZero) {
        if (oldValue == 0) {
            return "0";
        }
        else if (dotlen == 0) {
            return String.valueOf((int) (oldValue + 0.5));
        }
        else {
            // String formatStr = "####.";//这个怎么处理负数-0.23呢 ，不知道为什么不使用String formatStr = "0." 不知道以前是否对格式有要求
            String formatStr = "0.";// modified 20140211 暂时使用这个 如果后面有问题再修改
            if (addZero) {
                for (int i = 0; i < dotlen; i++)
                    formatStr = formatStr + "0";
            }
            else {
                for (int i = 0; i < dotlen; i++)
                    formatStr = formatStr + "#";
            }
            DecimalFormat df1 = new DecimalFormat(formatStr);
            String str = df1.format(oldValue);
            // if (str.charAt(0) == '.') {
            // str = "0" + str;
            // }
            return str;
        }
    }

    /**
     * 将字符串按照json格式编码
     * 
     * @param inputStr 输入的字符串
     * @return 转换为json
     */
    public static String encodeForJSON(String inputStr) {
        String result = "";
        if (StringUtils.isBlank(inputStr))
            return "";
        else {
            result = inputStr.replaceAll("\\\\", "\\\\\\\\");
            result = result.replaceAll("'", "\\\\'");
        }
        return result;
    }

    /**
     * 获取一个随机的数字,范围应该在 0到999
     * 
     * @return 返回随即数字
     */
    public static String getRandomStr() {
        return String.valueOf((int) (Math.random() * 1000));
    }

    /**
     * 将科学计数字符串转换成普通计数数字 ，即将格式为：1E+17、1E-17、1E17 转为 100000000000000000
     * 
     * @param inputStr 待转换的字符串
     * @return 返回
     */
    public static Double ConvertScientific2General(String inputStr) {
        try {
            if (StringUtils.isBlank(inputStr))
                return null;
            String convertStr = inputStr.toLowerCase();
            if (convertStr.indexOf("e") == -1) {
                return Double.valueOf(convertStr);
            }
            else {
                String[] strs = null;
                if (convertStr.indexOf("e+") > -1) {
                    strs = convertStr.split("e+");
                }
                else if (convertStr.indexOf("e-") > -1) {
                    strs = convertStr.split("e-");
                }
                else {
                    strs = convertStr.split("e");
                }
                double num1 = Double.parseDouble(strs[0]);
                double num2 = Double.parseDouble(strs[1]);
                return new Double(num1 * Math.pow(10d, num2));
            }
        }
        catch (Exception e) {
            return null;
        }
    }

    /**
     * 将字符串去掉空格，其中包括“Null”、“null”字符串的处理
     * 
     * @param inputStr 输入字符串
     * @return 字符串去空
     */
    public static String toTrim(String inputStr) {
        if (StringUtils.isBlank(inputStr))
            return "";
        if (inputStr.trim().equalsIgnoreCase("null"))
            return "";
        return inputStr.trim();
    }

    /**
     * 字符串转Integer
     * 
     * @param strValue 待转换字符串
     * @return 转换后的字符串，如果字符串为空，则返回null
     */
    public static Integer getInteger(String strValue) {
        if (StringUtils.isBlank(strValue))
            return null;
        if (isInteger(strValue))
            return Integer.valueOf(strValue);
        else
            return null;
    }

    /**
     * 字符串转Short
     * 
     * @param strValue 待转换字符串
     * @return 转换后的字符串，如果字符串为空，则返回null
     */
    public static Short getShort(String strValue) {
        if (StringUtils.isBlank(strValue))
            return null;
        return Short.valueOf(strValue);
    }

    /**
     * 字符串转Boolean
     * 
     * @param strValue 待转换字符串
     * @return 转换后的字符串，如果字符串为空，则返回null
     */
    public static Boolean getBoolean(String strValue) {
        if (StringUtils.isBlank(strValue))
            return null;
        return Boolean.valueOf(strValue);
    }

    /**
     * 字符串转Double
     * 
     * @param strValue 待转换字符串
     * @return 转换后的字符串，如果字符串为空，则返回null
     */
    public static Double getDouble(String strValue) {
        if (StringUtils.isBlank(strValue))
            return null;
        else {
            if (isDouble(strValue)) {
                return Double.valueOf(strValue);
            }
            else {
                return null;
            }
        }
    }

    /**
     * 对字符串（含中文）进行编码
     * 
     * @param encodeStr
     * @return
     */
    public static String escape(String encodeStr) {
        int i;
        char j;
        StringBuffer tmp = new StringBuffer();
        tmp.ensureCapacity(encodeStr.length() * 6);
        for (i = 0; i < encodeStr.length(); i++) {
            j = encodeStr.charAt(i);
            if (Character.isDigit(j) || Character.isLowerCase(j) || Character.isUpperCase(j))
                tmp.append(j);
            else if (j < 256) {
                tmp.append("%");
                if (j < 16)
                    tmp.append("0");
                tmp.append(Integer.toString(j, 16));
            }
            else {
                tmp.append("%u");
                tmp.append(Integer.toString(j, 16));
            }
        }
        return tmp.toString();
    }

    /**
     * 对字符串进行解码
     * 
     * @param decodeStr
     * @return
     */
    public static String unescape(String decodeStr) {
        StringBuffer tmp = new StringBuffer();
        tmp.ensureCapacity(decodeStr.length());
        int lastPos = 0, pos = 0;
        char ch;
        while (lastPos < decodeStr.length()) {
            pos = decodeStr.indexOf("%", lastPos);
            if (pos == lastPos) {
                if (decodeStr.charAt(pos + 1) == 'u') {
                    ch = (char) Integer.parseInt(decodeStr.substring(pos + 2, pos + 6), 16);
                    tmp.append(ch);
                    lastPos = pos + 6;
                }
                else {
                    ch = (char) Integer.parseInt(decodeStr.substring(pos + 1, pos + 3), 16);
                    tmp.append(ch);
                    lastPos = pos + 3;
                }
            }
            else {
                if (pos == -1) {
                    tmp.append(decodeStr.substring(lastPos));
                    lastPos = decodeStr.length();
                }
                else {
                    tmp.append(decodeStr.substring(lastPos, pos));
                    lastPos = pos;
                }
            }
        }
        return tmp.toString();
    }

    /**
     * 将格式为aa,bb的字符串转为'aa','bb'
     * 
     * @param fmtStr
     * @return
     */
    public static String convertString(String fmtStr) {
        if (StringUtils.isBlank(fmtStr))
            return null;
        StringBuffer result = new StringBuffer();
        result.append("");
        if (fmtStr != null) {
            String[] tmp = fmtStr.split(",");
            result.append("'" + tmp[0] + "'");
            for (int i = 1; i < tmp.length; i++) {
                result.append(",'" + tmp[i] + "'");
            }
        }
        return result.toString();
    }

    @SuppressWarnings("unchecked")
    public static String[] split(String str, String splitsign) {
        int index;
        if (str == null || splitsign == null) {
            return null;
        }
        ArrayList al = new ArrayList();
        while ((index = str.indexOf(splitsign)) != -1) {
            al.add(str.substring(0, index));
            str = str.substring(index + splitsign.length());
        }
        al.add(str);
        return (String[]) al.toArray(new String[0]);
    }

    public static String replace(String from, String to, String source) {
        if (source == null || from == null || to == null)
            return null;
        StringBuffer str = new StringBuffer("");
        int index = -1;
        while ((index = source.indexOf(from)) != -1) {
            str.append(source.substring(0, index) + to);
            source = source.substring(index + from.length());
            index = source.indexOf(from);
        }
        str.append(source);
        return str.toString();
    }

    /**
     * @author lidong
     * @param from
     * @param to
     * @param source <pre>
     * 处理StringBuilder中的字符串替换
     * </pre>
     */
    public static void replace(String from, String to, StringBuilder source) {
        if (source == null || from == null || to == null)
            return;
        int index = source.indexOf(from);
        int len = from.length();
        while (index != -1) {
            source.replace(index, index + len, to);
            index = source.indexOf(from);
        }

    }

    public static String htmlencode(String str) {
        if (str == null) {
            return null;
        }
        return replace("“", "\"", replace("<", "<", str));
    }

    public static String htmldecode(String str) {
        if (str == null) {
            return null;
        }
        return replace("“", "\"", replace("<", "<", str));
    }

    public static String htmlshow(String str) {
        String _BR = "\n";
        if (str == null) {
            return null;
        }
        str = replace("<", "<", str);
        str = replace(" ", " ", str);
        str = replace("\r\n", _BR, str);
        str = replace("\n", _BR, str);
        str = replace("\t", "    ", str);
        return str;
    }

    public static String toLength(String str, int length) {
        if (str == null) {
            return null;
        }
        if (length <= 0) {
            return "";
        }
        try {
            if (str.getBytes("GBK").length <= length) {
                return str;
            }
        }
        catch (Exception e) {
        }
        StringBuffer buff = new StringBuffer();

        int index = 0;
        char c;
        length -= 3;
        while (length > 0) {
            c = str.charAt(index);
            if (c < 128) {
                length--;
            }
            else {
                length--;
                length--;
            }
            buff.append(c);
            index++;
        }
        buff.append("...");
        return buff.toString();
    }

    public static boolean isInteger(String str) {
        Pattern pattern = Pattern.compile("^[-\\+]?[\\d]+$");
        return pattern.matcher(str).matches();
    }

    public static boolean isDouble(String str) {
        Pattern pattern = Pattern.compile("^[-\\+]?\\d+[\\.\\d+]*$");
        return pattern.matcher(str).matches();
    }

    public static boolean isLetter(String str) {
        if (str == null || str.length() < 0) {
            return false;
        }
        Pattern pattern = Pattern.compile("[\\w\\.-_]*");
        return pattern.matcher(str).matches();
    }

    public static String parse(String content) {
        String email = null;
        if (content == null || content.length() < 1) {
            return email;
        }
        // 找出含有@
        int beginPos;
        int i;
        String token = "@";
        String preHalf = "";
        String sufHalf = "";

        beginPos = content.indexOf(token);
        if (beginPos > -1) {
            // 前项扫描
            String s = null;
            i = beginPos;
            while (i > 0) {
                s = content.substring(i - 1, i);
                if (isLetter(s))
                    preHalf = s + preHalf;
                else
                    break;
                i--;
            }
            // 后项扫描
            i = beginPos + 1;
            while (i < content.length()) {
                s = content.substring(i, i + 1);
                if (isLetter(s))
                    sufHalf = sufHalf + s;
                else
                    break;
                i++;
            }
            // 判断合法性
            email = preHalf + "@" + sufHalf;
            if (isEmail(email)) {
                return email;
            }
        }
        return null;
    }

    public static boolean isEmail(String email) {
        if (email == null || email.length() < 1 || email.length() > 256) {
            return false;
        }
        Pattern pattern = Pattern.compile("^\\w+([-+.]\\w+)*@\\w+([-.]\\w+)*\\.\\w+([-.]\\w+)*$");
        return pattern.matcher(email).matches();
    }

    public static boolean isChinese(String str) {
        Pattern pattern = Pattern.compile("[\u0391-\uFFE5]+$");
        return pattern.matcher(str).matches();
    }

    /**
     * 判断字符串是否是乱码
     *
     * @param strName 字符串
     * @return 是否是乱码
     */
    public static boolean isMessyCode2(String strName) {
        Pattern p = Pattern.compile("\\s*|\t*|\r*|\n*");
        Matcher m = p.matcher(strName);
        String after = m.replaceAll("");
        String temp = after.replaceAll("\\p{P}", "");
        char[] ch = temp.trim().toCharArray();
        float chLength = ch.length;
        float count = 0;
        for (int i = 0; i < ch.length; i++) {
            char c = ch[i];
            if (!Character.isLetterOrDigit(c)) {
                if (!isChinese(c + "")) {
                    count = count + 1;
                }
            }
        }
        float result = count / chLength;
        if (result > 0.4) {
            return true;
        }
        else {
            return false;
        }

    }

    public static boolean isBlank(String str) {
        return str == null || str.trim().length() == 0;
    }

    public static boolean isPrime(int x) {
        if (x <= 7) {
            if (x == 2 || x == 3 || x == 5 || x == 7)
                return true;
        }
        int c = 7;
        if (x % 2 == 0)
            return false;
        if (x % 3 == 0)
            return false;
        if (x % 5 == 0)
            return false;
        int end = (int) Math.sqrt(x);
        while (c <= end) {
            if (x % c == 0) {
                return false;
            }
            c += 4;
            if (x % c == 0) {
                return false;
            }
            c += 2;
            if (x % c == 0) {
                return false;
            }
            c += 4;
            if (x % c == 0) {
                return false;
            }
            c += 2;
            if (x % c == 0) {
                return false;
            }
            c += 4;
            if (x % c == 0) {
                return false;
            }
            c += 6;
            if (x % c == 0) {
                return false;
            }
            c += 2;
            if (x % c == 0) {
                return false;
            }
            c += 6;
        }
        return true;
    }

    public static String hangeToBig(String str) {
        double value;
        try {
            value = Double.parseDouble(str.trim());
        }
        catch (Exception e) {
            return null;
        }
        char[] hunit = {
            '拾', '佰', '仟'
        }; // 段内位置表示
        char[] vunit = {
            '万', '亿'
        }; // 段名表示
        char[] digit = {
            '零', '壹', '贰', '叁', '肆', '伍', '陆', '柒', '捌', '玖'
        }; // 数字表示
        long midVal = (long) (value * 100); // 转化成整形
        String valStr = String.valueOf(midVal); // 转化成字符串

        String head = valStr.substring(0, valStr.length() - 2); // 取整数部分
        String rail = valStr.substring(valStr.length() - 2); // 取小数部分

        String prefix = ""; // 整数部分转化的结果
        String suffix = ""; // 小数部分转化的结果
        // 处理小数点后面的数
        if (rail.equals("00")) { // 如果小数部分为0
            suffix = "整";
        }
        else {
            suffix = digit[rail.charAt(0) - '0'] + "角" + digit[rail.charAt(1) - '0'] + "分"; // 否则把角分转化出来
        }
        // 处理小数点前面的数
        char[] chDig = head.toCharArray(); // 把整数部分转化成字符数组
        char zero = '0'; // 标志'0'表示出现过0
        byte zeroSerNum = 0; // 连续出现0的次数
        for (int i = 0; i < chDig.length; i++) { // 循环处理每个数字
            int idx = (chDig.length - i - 1) % 4; // 取段内位置
            int vidx = (chDig.length - i - 1) / 4; // 取段位置
            if (chDig[i] == '0') { // 如果当前字符是0
                zeroSerNum++; // 连续0次数递增
                if (zero == '0') { // 标志
                    zero = digit[0];
                }
                else if (idx == 0 && vidx > 0 && zeroSerNum < 4) {
                    prefix += vunit[vidx - 1];
                    zero = '0';
                }
                continue;
            }
            zeroSerNum = 0; // 连续0次数清零
            if (zero != '0') { // 如果标志不为0,则加上,例如万,亿什么的
                prefix += zero;
                zero = '0';
            }
            prefix += digit[chDig[i] - '0']; // 转化该数字表示
            if (idx > 0)
                prefix += hunit[idx - 1];
            if (idx == 0 && vidx > 0) {
                prefix += vunit[vidx - 1]; // 段结束位置应该加上段名如万,亿
            }
        }

        if (prefix.length() > 0)
            prefix += '圆'; // 如果整数部分存在,则有圆的字样
        return prefix + suffix; // 返回正确表示
    }

    @SuppressWarnings("unused")
    private static String removeSameString(String str) {
        Set mLinkedSet = new LinkedHashSet();// set集合的特征：其子集不可以重复
        String[] strArray = str.split(" ");// 根据空格(正则表达式)分割字符串
        StringBuffer sb = new StringBuffer();

        for (int i = 0; i < strArray.length; i++) {
            if (!mLinkedSet.contains(strArray[i])) {
                mLinkedSet.add(strArray[i]);
                sb.append(strArray[i] + " ");
            }
        }
        System.out.println(mLinkedSet);
        return sb.toString();
    }

    public static String encoding(String src) {
        if (src == null)
            return "";
        StringBuilder result = new StringBuilder();
        if (src != null) {
            src = src.trim();
            for (int pos = 0; pos < src.length(); pos++) {
                switch (src.charAt(pos)) {
                    case '"':
                        result.append("\"");
                        break;
                    case '<':
                        result.append("<");
                        break;
                    case '>':
                        result.append(">");
                        break;
                    case '\'':
                        result.append("'");
                        break;
                    case '&':
                        result.append("&");
                        break;
                    case '%':
                        result.append("&pc;");
                        break;
                    case '_':
                        result.append("&ul;");
                        break;
                    case '#':
                        result.append("&shap;");
                        break;
                    case '?':
                        result.append("&ques;");
                        break;
                    default:
                        result.append(src.charAt(pos));
                        break;
                }
            }
        }
        return result.toString();
    }

    public static boolean isHandset(String handset) {
        try {
            String regex = "^1[\\d]{10}$";
            Pattern pattern = Pattern.compile(regex);
            Matcher matcher = pattern.matcher(handset);
            return matcher.matches();

        }
        catch (RuntimeException e) {
            return false;
        }
    }

    public static String decoding(String src) {
        if (src == null)
            return "";
        String result = src;
        result = result.replace("“", "\"").replace("'", "\'");
        result = result.replace("<", "<").replace(">", ">");
        result = result.replace("&", "&");
        result = result.replace("&pc;", "%").replace("&ul", "_");
        result = result.replace("&shap;", "#").replace("&ques", "?");
        return result;
    }

    /**
     * 给字符串追加字符
     */
    public static String appendCharRight(String str, int leg, char c) {
        StringBuilder sb = new StringBuilder();
        if (str != null && !str.equals("")) {
            sb.append(str);
            for (int i = 0; i < leg - str.length(); i++) {
                sb.append(c);
            }
        }
        return sb.toString();

    }

    /**
     * @param str
     * @return 将科学计数字符串转换成正常数字
     */
    public static Double ConversionFromString(String str) {
        try {
            if (str == null || str.equals(""))
                return null;
            if (str.indexOf("e-") == -1) {
                return Double.valueOf(str);
            }
            else {
                String[] s = str.split("e-");
                double num1 = Double.parseDouble(s[0]);
                double num2 = Double.parseDouble(s[1]);
                return new Double(num1 * Math.pow(10d, num2));
            }
        }
        catch (Exception e) {
            System.out.println("**********************StringUtil.ConversionFromString:" + str);
            return null;
        }
    }

    /**
     * 解决下载文件 文件名出现乱码
     * 
     * @param fileName
     * @param charset request.getCharacterEncoding();
     * @return
     * @throws UnsupportedEncodingException
     */
    public static String getFileName(String fileName, String charset) throws UnsupportedEncodingException {
        if (fileName != null) {// ie6 中文文字超过17个时，IE6 无法下载文件,所以使用
            fileName = URLEncoder.encode(fileName, charset);
            if (fileName.length() > 150) {
                fileName = new String(fileName.getBytes(charset), "ISO8859-1");
            }
        }
        return fileName;
    }

    public static String listToString(List<String> stringList) {
        if (stringList == null) {
            return null;
        }
        StringBuilder result = new StringBuilder();
        boolean flag = false;
        for (String string : stringList) {
            if (flag) {
                result.append(",");
            }
            else {
                flag = true;
            }
            result.append(string);
        }
        return result.toString();
    }

    /*-----------------------------------

    笨方法：String s = "你要去除的字符串";

            1.去除空格：s = s.replace('\\s','');

            2.去除回车：s = s.replace('\n','');

    这样也可以把空格和回车去掉，其他也可以照这样做。

    注：\n 回车(
    ) 
    \t 水平制表符(\u0009) 
    \s 空格(\u0008) 
    \r 换行(
    )*/
    public static String replaceBlank(String str) {
        String dest = "";
        if (str != null) {
            Pattern p = Pattern.compile("\\s*|\t|\r|\n");
            Matcher m = p.matcher(str);
            dest = m.replaceAll("");
        }
        return dest;
    }

    public static String getInSql(Collection<String> lst) {
        StringBuffer sb = new StringBuffer();
        if (lst.isEmpty()) {
            return "";
        }
        sb.append("(");
        for (String str : lst) {
            sb.append("'");
            sb.append(str);
            sb.append("'");
            sb.append(",");
        }
        sb.deleteCharAt(sb.length() - 1);
        sb.append(")");
        return sb.toString();
    }

    /**
     * 判断是否为乱码
     * 
     * @param str
     * @return
     * @throws UnsupportedEncodingException
     */
    public static boolean isMessyCodeForOpinion(String str) throws UnsupportedEncodingException {
        if (str == null)
            return false;
        if (str.length() >= 3) {
            String flag = str.substring(0, 3);
            String strAnd = new String(flag.getBytes("GBK"), "UTF-8");
            if (isChinese(strAnd)) {
                return true;
            }
            else
                return false;
        }
        return true;
    }

    /**
     * 字符串的压缩
     * 
     * @param str 待压缩的字符串
     * @return 返回压缩后的字符串
     * @throws IOException
     */
    public static String compress(String str) throws IOException {
        if (null == str || str.length() <= 0) {
            return str;
        }
        // 创建一个新的 byte 数组输出流
        ByteArrayOutputStream out = new ByteArrayOutputStream();
        // 使用默认缓冲区大小创建新的输出流
        GZIPOutputStream gzip = new GZIPOutputStream(out);
        // 将 b.length 个字节写入此输出流
        gzip.write(str.getBytes());
        gzip.close();
        // 使用指定的 charsetName，通过解码字节将缓冲区内容转换为字符串
        return out.toString("ISO-8859-1");
    }

    /**
     * 字符串的解压
     * 
     * @param str 对字符串解压
     * @return 返回解压缩后的字符串
     * @throws IOException
     */
    public static String unCompress(String str) throws IOException {
        if (null == str || str.length() <= 0) {
            return str;
        }
        // 创建一个新的 byte 数组输出流
        ByteArrayOutputStream out = new ByteArrayOutputStream();
        // 创建一个 ByteArrayInputStream，使用 buf 作为其缓冲区数组
        ByteArrayInputStream in = new ByteArrayInputStream(str.getBytes("ISO-8859-1"));
        // 使用默认缓冲区大小创建新的输入流
        GZIPInputStream gzip = new GZIPInputStream(in);
        byte[] buffer = new byte[256];
        int n = 0;
        while ((n = gzip.read(buffer)) >= 0) {// 将未压缩数据读入字节数组
            // 将指定 byte 数组中从偏移量 off 开始的 len 个字节写入此 byte数组输出流
            out.write(buffer, 0, n);
        }
        // 使用指定的 charsetName，通过解码字节将缓冲区内容转换为字符串
        return out.toString("UTF-8");
    }

    /**
     * Description: 字符串占位符替换
     * 
     * @author wanghao
     * @param str 字符串
     * @param args 占位符替换文本
     * @return
     */
    public static String format(String str, Object... args) {
        return MessageFormat.format(str, args);
    }

    /**
     * Description: 类似FreeMarker的字符串替换 <br>
     * 示例: My name is {name}.
     * 
     * @author wanghao
     * @param str 模板字符串
     * @param tokens 需要填充的值
     * @return
     */
    public static String format(String str, Map<String, String> tokens) {
        if (isEmpty(str)) {
            return str;
        }
        if (tokens == null || tokens.isEmpty()) {
            return str;
        }
        
        // 生成匹配模式的正则表达式
        String patternString = "\\{(" + StringUtil.join(tokens.keySet(), "|") + ")\\}";

        Pattern pattern = Pattern.compile(patternString);
        Matcher matcher = pattern.matcher(str);

        StringBuffer sb = new StringBuffer();
        while (matcher.find()) {
            matcher.appendReplacement(sb, tokens.get(matcher.group(1)));
        }
        matcher.appendTail(sb);
        return sb.toString();
    }

    /**
     * Description: 将字符换成3Dus-asci，十进制Accsii码 <br>
     * mht模板生成word文档 需要把字符全部转换成3Dus-asci格式
     * 
     * @author wanghao
     * @param str
     * @return
     */
    public static String string2Ascii(String str) {
        if (isEmpty(str)) {
            return null;
        }
        StringBuilder sb = new StringBuilder();

        char[] c = str.toCharArray();
        for (char item : c) {
            String itemascii = "";
            // 具体汉字及特殊字符的ascii码范围也不知道多少 暂时取大值
            if (item >= 12220 && item < 65555) {
                itemascii = "&#" + (item & 0xffff) + ";";
            }
            else {
                itemascii = item + "";
            }
            sb.append(itemascii);
        }

        return sb.toString();

    }
}