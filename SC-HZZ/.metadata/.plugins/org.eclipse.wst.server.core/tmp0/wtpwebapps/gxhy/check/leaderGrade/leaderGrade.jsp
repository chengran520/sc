<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<jsp:include page="/common/base/include_BaseCommon.jsp"></jsp:include>
<link href="<%=request.getContextPath() %>/common/css/commonView.css" rel="stylesheet">
<link href="<%=request.getContextPath() %>/check/css/check.css" rel="stylesheet">
<link href="<%=request.getContextPath() %>/css/public.css" rel="stylesheet">
<link href="<%=request.getContextPath() %>/check/css/input.css" rel="stylesheet">
<script src="<%=request.getContextPath()%>/check/leaderGrade/leadGrade.js"></script>
<script type="text/javascript">
 	var WEB_ROOT = "<%=request.getContextPath() %>";
</script>
<div style="height: 13%;" id="headerleaderGradeDiv">
	<div class="header-content">
		<h2>
			<i class="fa icon-th-large"></i>
			<c>领导打分</c>
			<span ></span>
		</h2>
	</div> 	
	<div style="background-color: #FFFFFF;"class="" id="hydrologic_rain_rainQueryInfo_1">
		<form class="form-inline" method="post">
			<div style="padding: 10px;border-bottom: 1px solid #dddddd;">
				<div class="col-xs-2.2" style="display: inline; ">
					<div class="input-group">
						<div class="input-group-addon">申请人员:</div>
						<input id="keyword" type="text" class="form-control"  placeholder="请输入名称" style="width: 190px;">
					</div>
				</div>
				<button id="leader_query" class="btn btn-primary" style="background-color: #0ab1f8;border: 0px;" type="button" >
					<span class="glyphicon glyphicon-search " ></span>&nbsp;查&nbsp;询
				</button>
				<button  id="refreshLeadGrade"   class="btn btn-primary" type="button" style="background-color:#EE82EE;border: 0px;">
					<span class="glyphicon glyphicon-refresh" ></span>&nbsp;刷&nbsp;新
				</button>
			</div>
		</form>
	</div>
</div>

<table id="leaderGrade"  style=" text-overflow:ellipsis;width:100%;overflow-x:hidden;">
	<thead>
		<tr>
     		<th field="uuid" hidden="true" width="1">主键</th>
            <th field="creUserName" width="15%" align="center" >申请人</th>
            <th field="addvnm" width="15%" align="center" >行政区名称</th>           
            <th field="meritNm" width="30%"  align="left" halign="center">考核名称</th>
            <th field="meritTm"  width="20%" align="center"  formatter="leadGrade.formatterMeritmeritTm">申请时间</th>
            <th field="aa" width="19%"   align="center" formatter="leadGrade.formatterMeritRep">操作</th>
		</tr>
	</thead>
</table>

<!-- 领导打分 -->
<div class="modal fade" id="myModalLeader" tabindex="-1" role="dialog" aria-labelledby="myModalLabel"  style="overflow-y: hidden;">
	<div class="modal-dialog" role="document" id="dialog_merit"  style=''>
		<div class="modal-content" style=" position: absolute; top: 0; bottom: 0; width: 1400px;">
			<div class="modal-header" style="padding:10px;background-color: #009f95;color: #fff;">
				<button type="button" class="close" data-dismiss="modal" aria-label="Close">
					<span aria-hidden="true" style="font-size: 32px;margin-right: 10px;">×</span>
				</button>
				<h4 class="modal-title" id="myModalLabel">领导打分</h4>
			</div>
		<div class="modal-body" style='overflow-y: scroll; position: absolute; top: 55px; bottom: 65px; width: 100%;padding-top:10px;'>
		 <form class="form-horizontal" role="form" id="form_data_leader"  style="margin-top:10px;">
		  <input type="hidden" class="form-control" id="uuid"  name="uuid">
		  <div><span style='color:red;'>已解决问题：</span><span id="solvePrm"></span></div>
		  <div style="margin-bottom: 10px;"><span style='color:red;'>未解决问题：</span><span id="nSolvePrm"></span></div>
          <table border='1' class='leader_table'  style="width:1200px;">
         	 <thead> 
         	      <tr>
         	          <th>考核项目</th>
         	          <th>考核内容</th>  
         	          <th>考核标准</th>  
         	          <th>考核得分</th>
         	          <th>考核评价</th>       	        
         	      </tr>
         	 </thead>
         	 <tbody>
	         	   <tr>
	                   <td class='title_leader'>日常巡查(20分)</td>
					   <td>
					      <table>
					           <tr>
					               <td>组织开展河湖巡查、</td>
					           </tr>
					           <tr>
					               <td>对发现的河道不洁、护岸坍塌、</td>
					           </tr>
					            <tr>
					               <td>涉河违章和污水直排等问题及时反映县河长办。</td>
					           </tr>
					      </table>
					    </td>
					   <td>
					      <table>
					           <tr>
					               <td>未开展河湖巡查的，扣20分;</td>
				               </tr>
				               <tr>
					               <td>没有巡查记录或记录不全的，每个扣1分；</td>
					           </tr>
					           <tr>
				                   <td>发现问题不及时上报或者重大问题未及时发现的，每件扣2分；</td>
					           </tr>
					      </table>
					   </td>
					   <td>
					    <input type="text" class="mark"   value="" id="rcxcScore" name="rcxcScore"   placeholder="请打分" style="height:98px;border:0px;text-align: center;"   onKeyUp="this.value=this.value.replace(/[^\.\d]/g,'');this.value=this.value.replace('.','');" " > 
					   </td>
					   <td rowspan="8">
					      <input type="text" id="assess"  name="assess"  placeholder="请输入"  style="border:0px;height:850px;text-align: center;"  >
					   </td>
	               </tr>
	               <tr>
	                   <td class='title_leader'>事件处理率(15分)</td>
					   <td>
					      <table>
					           <tr><td>加强河湖管护，对辖区内出现的事件</td></tr>
					           <tr><td>和上级督办的事件要及时进行。</td></tr>
					      </table>
					  </td>
					   <td>事件处理率*15分;</td>
					   <td>
					    <input type="text" value=""  class="mark"   id="sjclvScore" name="sjclvScore"  placeholder="请打分" style="height:98px;border:0px;text-align: center;"   onKeyUp="this.value=this.value.replace(/[^\.\d]/g,'');this.value=this.value.replace('.','');" > 
					   </td>
	               </tr>
	               <tr>
	                   <td class='title_leader'>水质变化(15分)</td>
					   <td>对于区域内的水质情况进行评估。</td>
					   <td>
					      <table>
					           <tr>
					               <td>水库、山塘水质全部达标得15分;</td>
				               </tr>
				               <tr>
					               <td>有一个不达标扣2分;</td>
					           </tr>
					           <tr>
				                   <td>有水质好转上升加2分;</td>
					           </tr>
					           <tr>
				                   <td>有不达标水质又恶化整个项得0分;</td>
					           </tr>
					      </table>
					   </td>
					   <td>
					    <input type="text" value=""  class="mark"   id="szbhScore" name="szbhScore"  placeholder="请打分" style="height:98px;border:0px;text-align: center;"   onKeyUp="this.value=this.value.replace(/[^\.\d]/g,'');this.value=this.value.replace('.','');"  > 
					   </td>
	               </tr>
	                <tr>
	                   <td class='title_leader'>公众投诉(10分)</td>
					   <td>辖区内河湖管护情况以及群众满意度程度。</td>
					   <td>
					      <table>
					           <tr>
					               <td>每起投诉事件扣2分;</td>
				               </tr>
				               <tr>
					               <td>如果事件处理的能够让群众满意，此事件可以不扣分;</td>
					           </tr>
					      </table>
					   </td>
					   <td>
					    <input type="text" value="" id="gztsScore"  class="mark"   name="gztsScore" placeholder="请打分" style="height:98px;border:0px;text-align: center;"   onKeyUp="this.value=this.value.replace(/[^\.\d]/g,'');this.value=this.value.replace('.','');"  > 
					   </td>
	               </tr>
	                <tr>
	                   <td class='title_leader'>宣传教育工作(20分)</td>
					   <td>
					      <table>
					           <tr><td>设立河湖保护宣传栏；</td></tr>
					           <tr><td>河道沿线设有河道保护标志、标语等多种宣传方式；</td></tr>
					           <tr><td>营造良好氛围；</td></tr>
					           <tr><td>开展学生防溺水安全教育；</td></tr>
					           <tr><td>开展“河长制进校园”主题活动。</td></tr>
					      </table>
					   </td>
					   <td>宣传工作未到位，检查中每发现一个问题，扣2分。</td>
					   <td>
					    <input type="text" value="" id="xcjyScore" class="mark"  name="xcjyScore"  placeholder="请打分" style="height:98px;border:0px;text-align: center;"   onKeyUp="this.value=this.value.replace(/[^\.\d]/g,'');this.value=this.value.replace('.','');" > 
					   </td>
	               </tr>
	               <tr>
	                   <td class='title_leader'>奖励分(10分)</td>
					   <td>	工作有创新，成效显著。</td>
					   <td>
					      <table>
					           <tr><td>工作有创新、有亮点，经验和做法在省、市县得到肯定和推广的，</td></tr>
					           <tr><td>分别加5分、3分、2分。</td></tr>
					      </table>
					   </td>
					   <td>
					    <input type="text" value="" id="jlfScore" class="mark"   name="jlfScore"  placeholder="请打分"  style="height:98px;border:0px;text-align: center;"  onKeyUp="this.value=this.value.replace(/[^\.\d]/g,'');this.value=this.value.replace('.','');" > 
					   </td>
	               </tr>
	                <tr>
	                   <td class='title_leader'>领导综合评价(10分)</td>
					   <td>
					      <table>
					          <tr><td>对管辖范围内的各乡镇河长的工作评价；</td></tr>
					          <tr><td>协助上级河长和部门开展辖区内河湖热点；</td></tr>
					          <tr><td>难点问题调研，并配合开展相关问题集中整治。</td></tr>
					      </table>
					   </td>
					   <td>未按要求做好相关协助配合工作的，每次扣1分；由领导酌情给分。</td>
					   <td>
					    <input type="text" value="" id="ldzhScore" class="mark"  name="ldzhScore"  placeholder="请打分" style="height:98px;border:0px;text-align: center;"  onKeyUp="this.value=this.value.replace(/[^\.\d]/g,'');this.value=this.value.replace('.','');" > 
					   </td>
	               </tr>
         	 </tbody>
          </table>
	     </form>
	    </div>
        <div class="modal-footer" style="  position: absolute; width: 100%; bottom: 0; ">
            <div style="height:40px;margin-right:30px;color:red;display: inline;font-size:18px;"><span>总分：</span><span id="mark">0分</span></div>
            <button class="btn btn-default btns" type="button" data-dismiss="modal" style="color: #333;background-color: #fff;border-color: #adadad;">
				&nbsp;关&nbsp;闭
			</button>
			<button class="btn btn-default btns" type="button" id="updateLeader">
				&nbsp;确&nbsp;定
			</button>
			
	   </div>
     </div>
  </div>
</div>



