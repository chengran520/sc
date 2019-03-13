<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<jsp:include page="/common/base/include_BaseCommon.jsp"></jsp:include>
<link href="<%=request.getContextPath() %>/common/css/commonView.css" rel="stylesheet">
<link href="<%=request.getContextPath() %>/emergency/jointConferences/speechConferce/speechMetting.css" rel="stylesheet">
<link rel="stylesheet" href="<%=request.getContextPath() %>/common/ueditor/themes/default/css/ueditor.css">
<script src="<%=request.getContextPath() %>/emergency/jointConferences/speechConferce/speechConferce.js"></script>
<script src="<%=request.getContextPath() %>/common/ueditor/ueditor.config.js"></script>  
<script src="<%=request.getContextPath() %>/common/ueditor/ueditor.all.js"></script>  
<script type="text/javascript">
 	var WEB_ROOT = "<%=request.getContextPath() %>";
 	var ue = UE.getEditor('container');
</script>
<div style="height: 13%;" id="msg_headerDiv">
	<div class="header-content">
		<h2>
			<i class="fa icon-th-large"></i>
			<c>语音会议</c>
			<span ></span>
		</h2>
	</div> 
</div>
 <div style="margin:10px;">
	 <div style="float: left;width:16%;">
	 	 <div style="height:300px;border-radius:5px;border: 1px solid #ccc;">
	 	   <div style="height:30px;line-height: 30px;margin-left:20px;">
	 	   	   <img src="<%=request.getContextPath() %>/common/images/speechMetting/user.png" style="width:20px;height: 20px;">
	 	   	     <span style="margin-left:2px;">参会人员</span>
	 	   </div>
	 	   <div>
	 	       <table>
	 	           <tr>
	 	               <td>
	 	                  <div  class="div_s">
	 	                     <img src="<%=request.getContextPath() %>/common/images/speechMetting/head/head.png"/>
	 	                      <div>添加</div>
	 	                  </div>
	 	               </td>
	 	               <td>
	 	               	  <div class="div_s">
	 	               	     <img src="<%=request.getContextPath() %>/common/images/speechMetting/head/head1.jpg"/>
	 	               	     <div>罗斌</div>
	 	               	  </div>
	 	               </td>
	 	               <td>
	 	                  <div class="div_s">
	 	               	     <img src="<%=request.getContextPath() %>/common/images/speechMetting/head/head2.jpg"/>
	 	               	     <div>刘青</div>
	 	               	  </div>
	 	               </td>
	 	               <td>
	 	               	  <div class="div_s">
	 	               	     <img src="<%=request.getContextPath() %>/common/images/speechMetting/head/head3.jpg"/>
	 	               	     <div>陈晓敏</div>
	 	               	  </div>
	 	               </td>
	 	               <td>
	 	                 <div class="div_s">
	 	                 	 <img src="<%=request.getContextPath() %>/common/images/speechMetting/head/head4.jpg"/>
	 	               	 	 <div>杨延</div>
	 	                 </div>
	 	               </td>
	 	           </tr>
	 	           <tr style="height:5px;"></tr>
	 	           <tr>
	 	               <td>
	 	                  <div  class="div_s">
	 	                     <img src="<%=request.getContextPath() %>/common/images/speechMetting/head/head5.jpg"/>
	 	                      <div>尹忠</div>
	 	                  </div>
	 	               </td>
	 	               <td>
	 	               	  <div class="div_s">
	 	               	     <img src="<%=request.getContextPath() %>/common/images/speechMetting/head/head6.jpg"/>
	 	               	     <div>李正鹏</div>
	 	               	  </div>
	 	               </td>
	 	               <td>
	 	                  <div class="div_s">
	 	               	     <img src="<%=request.getContextPath() %>/common/images/speechMetting/head/head7.jpg"/>
	 	               	     <div>刘群楷</div>
	 	               	  </div>
	 	               </td>
	 	               <td>
	 	               	  <div class="div_s">
	 	               	     <img src="<%=request.getContextPath() %>/common/images/speechMetting/head/head8.jpg"/>
	 	               	     <div>刘晓阳</div>
	 	               	  </div>
	 	               </td>
	 	               <td>
	 	                 <div class="div_s">
	 	                 	 <img src="<%=request.getContextPath() %>/common/images/speechMetting/head/head9.jpg"/>
	 	               	 	 <div>刘晓波</div>
	 	                 </div>
	 	               </td>
	 	           </tr>
 	               <tr style="height:5px;"></tr>
	 	           <tr>
	 	               <td>
	 	                  <div  class="div_s">
	 	                     <img src="<%=request.getContextPath() %>/common/images/speechMetting/head/head10.jpg"/>
	 	                      <div>刘晓方</div>
	 	                  </div>
	 	               </td>
	 	               <td>
	 	               	  <div class="div_s">
	 	               	     <img src="<%=request.getContextPath() %>/common/images/speechMetting/head/head11.jpg"/>
	 	               	     <div>杨小妹</div>
	 	               	  </div>
	 	               </td>
	 	               <td>
	 	                  <div class="div_s">
	 	               	     <img src="<%=request.getContextPath() %>/common/images/speechMetting/head/head12.jpg"/>
	 	               	     <div>黄运群</div>
	 	               	  </div>
	 	               </td>
	 	               <td>
	 	               	  <div class="div_s">
	 	               	     <img src="<%=request.getContextPath() %>/common/images/speechMetting/head/head13.jpg"/>
	 	               	     <div>丁胜早</div>
	 	               	  </div>
	 	               </td>
	 	               <td>
	 	                 <div class="div_s">
	 	                 	 <img src="<%=request.getContextPath() %>/common/images/speechMetting/head/head14.jpg"/>
	 	               	 	 <div>唐袆泾</div>
	 	                 </div>
	 	               </td>
	 	           </tr>
	 	       </table>
	 	       <div style="text-align: center;height:50px;line-height: 50px;">
	 	       	    查看更多参会人员
	 	         <img  src="<%=request.getContextPath() %>/common/images/speechMetting/more.png" style="width:20px;height:20px;">
	 	       </div>
	 	   </div>
	 	 
	 	 </div>
	 	 <div style="height:300px;border-radius:10px;border: 1px solid #ccc;margin-top:5px;">
	 	    <div style="height:30px;line-height: 30px;margin-left:20px;">
 	    	   <img src="<%=request.getContextPath() %>/common/images/speechMetting/time.png" style="width:20px;height:20px;">
 	    	   <span style="margin-left:2px;">会议时间</span>
	 	    </div>
	 	    <div style="border:1px solid #ccc;font-size:15px;text-align: center;">
	 	       <div  style="height:40px;line-height: 40px;">当前系统时间：2018年4月12日  15:30</div>
	 	       <div  style="height:40px;line-height: 40px;">会议开始时间：2018年4月12日  14:30</div>
	 	       <div  style="height:40px;line-height: 40px;">会议结束时间：2018年4月12日  16:30</div>
 	           <div  style="height:40px;line-height: 40px;">会议已使用：<font style="color:#2aa515;">1小时</font></div>
	 	    </div>
	 	    <div>
	 	       <div style="width:27%;float: left;font-size: 15px;margin-left:30px;">
	 	      	  <div>
	 	      	  	  <div>会议总时：</div>
	 	       	      <div><font style="color:#E066FF;">2小时</font></div>
	 	      	  </div>
	 	          <div style="margin-top:15px;"> 
	 	              <div>剩余时间：</div>
	 	       	      <div><font style="color:#EE6A50;">1小时30分</font></div>
	 	          </div>
	 	       </div>
	 	       <div style="width:63%;height:105px;float: left;"  id="pie">
	 	       </div>
	 	    </div>
	 	 </div>
      </div>
      <div style="float: left;width:82%;height:750;margin-left:20px;border-radius:5px;">
        <div  style="height:500px;background-color: #eee;border:1px solid #ccc;">
        	<div style="height:40px;line-height: 40px;padding-top:30px;margin-left:20px;">
        	  <img src="<%=request.getContextPath() %>/common/images/speechMetting/moreU.png" style="width:25px;height:25px;"/>
        	  <span style="font-size: 16px;padding:5px;">2017年年底河长制工作会议</span>
        	</div>
        	<div style="height:40px;line-height: 40px;margin-top:40px;margin-left:20px;font-size:14px;">
              <img src="<%=request.getContextPath() %>/common/images/speechMetting/head/head14.jpg" style="width:30px;height:30px;"/>
              <span style="background-color: #fff;padding:6px 10px;">2017年年底河长制工作现在正式开始，先介绍2017年关于河长制工作的全方面汇报</span>
            </div>
            <div style="height:40px;line-height: 40px;margin-top:40px;margin-left:20px;font-size:14px;">
              <img src="<%=request.getContextPath() %>/common/images/speechMetting/head/head5.jpg" style="width:30px;height:30px;"/>
              <span style="background-color: #fff;padding:6px 10px;">2017年年底河长制工作现在正式开始，先介绍2017年关于河长制工作的全方面汇报</span>
            </div>
            <div style="height:40px;line-height: 40px;margin-top:40px;margin-left:20px;font-size:14px;">
              <img src="<%=request.getContextPath() %>/common/images/speechMetting/head/head6.jpg" style="width:30px;height:30px;"/>
              <span style="background-color: #fff;padding:6px 10px;">2017年年底河长制工作现在正式开始，先介绍2017年关于河长制工作的全方面汇报</span>
            </div>
       </div>
       <div style="background-color: red;">
       	  <script id="container" name="describe" type="text/plain" style="height:180px;border-width: 0 0 1px 0;"></script>
       </div>
     </div>
 </div>