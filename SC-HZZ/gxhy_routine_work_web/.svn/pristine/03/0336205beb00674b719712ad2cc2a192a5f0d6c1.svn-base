<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<jsp:include page="/common/base/include_BaseCommon.jsp"></jsp:include>
<link href="<%=request.getContextPath() %>/common/css/commonView.css" rel="stylesheet">
<link href="<%=request.getContextPath() %>/check/css/check.css" rel="stylesheet">
<link href="<%=request.getContextPath() %>/css/public.css" rel="stylesheet">
<script src="<%=request.getContextPath()%>/check/query/checkQuery.js"></script>
<script type="text/javascript">
 	var WEB_ROOT = "<%=request.getContextPath() %>";
 	var userName ="<%=session.getAttribute("username")%>";
 	var userjob = "<%=session.getAttribute("userjob")%>";
</script>
<div style="height: 13%;" id="headerMeritDiv">
	<div class="header-content">
		<h2>
			<i class="fa icon-th-large"></i>
			<c>绩效考核</c>
			<span ></span>
		</h2>
	</div> 
	<div style="background-color: #FFFFFF;width:90%;"class="" id="hydrologic_rain_rainQueryInfo_1">
		<form class="form-inline" method="post">
			<div style="padding: 10px;border-bottom: 1px solid #dddddd;">
				<div class="col-xs-2.2" style="display: inline;">
					<div class="input-group">
						<div class="input-group-addon">申请时间:</div>
						<input id="createTm" type="text" class="form-control" style="width: 190px;">
					</div>
				</div>
				<div class="col-xs-2.2" style="display: inline; ">
					<div class="input-group">
						<div class="input-group-addon">绩效名称:</div>
						<input id="meritNm" type="text" class="form-control" style="width: 190px;">
					</div>
				</div>
				<button id="merit_query" class="btn btn-primary" style="background-color: #0ab1f8;border: 0px;" type="button" >
					<span class="glyphicon glyphicon-search " ></span>&nbsp;查&nbsp;询
				</button>
				<button  id="merit_add" class="btn btn-primary" type="button" style="background-color: #FABC29;border: 0px;" >
					<span class="glyphicon glyphicon-plus " ></span>&nbsp;申&nbsp;请
				</button>
				<button  id="refreshCheck"   class="btn btn-primary" type="button" style="background-color:#EE82EE;border: 0px;">
					<span class="glyphicon glyphicon-refresh" ></span>&nbsp;刷&nbsp;新
				</button>
			</div>
		</form>
	</div>
</div>
<table id="merit_perf"  style="text-overflow:ellipsis;width:100%;">
	<thead>
		<tr style="background-color: #009688;">
            <th field="uuid" hidden="true" width="1">主键</th>
            <th field="creUserName" width="10%" align="center">申请人</th>
            <th field="addvnm" width="10%" align="center" >行政区名称</th>
            <th field="rvUserName" width="10%" align="center">上报河长</th>           
            <th field="meritNm" width="20%" align="left"  halign="center">考核名称</th>
            <th field="meritTm"  width="15%" align="center"  formatter="checkQuery.formatterMeritmeritTm">申请时间</th>
            <th field="meritStatus" width="10%" align="center" formatter="checkQuery.formatterMeritstatus">考核状态</th>
            <th field="totalScore" width="10%" align="center" formatter="checkQuery.formatterTotalScore">考核分数(分)</th>
            <th field="aa" width="13%" align="center" formatter="checkQuery.formatterMeritRep">操作</th>
		</tr>
	</thead>
</table>
<!-- 申请增加 -->
<div class="modal fade" id="myModalMerit" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" style="overflow-y: hidden;">
	<div class="modal-dialog" role="document">
		<div class="modal-content" style="width:700px;overflow: hidden;">	 
			<div class="modal-header" style="padding:8px;background-color: #009f95;color: #fff;">
				<button type="button" class="close" data-dismiss="modal" aria-label="Close">
					<span aria-hidden="true" style="font-size: 32px;margin-right: 10px;">×</span>
				</button>
				<h4 class="modal-title" id="myModalLabel">申请绩效</h4>
			</div>
		 <form class="form-horizontal" role="form" id="form_data_Merit"  style="margin-top:10px;overflow-y: auto;overflow-x: hidden;">
		  <input type="hidden" class="form-control" id="uuid"  name="uuid">
   				<div class="form-group">
				    <label for="firstname" class="col-sm-3 control-label"><span style="color: red;">★</span>&nbsp;&nbsp;考核名称</label>
				    <div class="col-sm-8">
				      <input type="text" class="form-control" id="meritName"  name="meritNm" placeholder="请输入考核名称">
				    </div>
			   </div>
			  <div class="form-group">
				    <label for="firstname" class="col-sm-3 control-label"><span style="color: red;">★</span>&nbsp;&nbsp;申请时间</label>
				    <div class="col-sm-8">
				      <input type="text" readonly="readonly" class="form-control" id="meritTm" name="meritTm" placeholder="请输入申请时间">
				    </div>
			  </div>
			  <div class="form-group">
				    <label for="firstname" class="col-sm-3 control-label"><span style="color: red;">★</span>&nbsp;&nbsp;河流名称</label>
				    <div class="col-sm-8">
				      <input type="hidden" name="rvCd" value="" id="resultRiver">
				      <input list="riverInfoList" type="text" class="form-control" id="riverInfo"  name="rvNm"  placeholder="请输入河流名称">
				      <datalist id="riverInfoList">
						</datalist>
				    </div>
			  </div>
			  <div class="form-group">
				    <label for="lastname" class="col-sm-3 control-label"><span style="color: red;">★</span>&nbsp;&nbsp;上级河长</label>
				    <div class="col-sm-8">
				        <input type="hidden" name="rvUserId"  value="" id="resultUser">
				        <input list="riverList" id="parentRiver" name ="rvUserName" class="form-control" placeholder="请输入上级河长"/>
							<datalist id="riverList">
							</datalist>
				    </div>
			  </div>
			  <div class="form-group">
				    <label for="lastname" class="col-sm-3 control-label">&nbsp;&nbsp;已解决问题</label>
				    <div class="col-sm-8">
				        <textarea rows="3" cols="62"  id="solvePrm"  name="solvePrm" style="width: 100%;" placeholder="请输入已解决问题"></textarea>
				    </div>
			  </div>
			  <div class="form-group">
				    <label for="lastname" class="col-sm-3 control-label">未解决问题</label>
				    <div class="col-sm-8">
				       <textarea rows="3" cols="62"  id="nSolvePrm"  name="NSolvePrm" style="width: 100%;"  placeholder="请输入未解决问题"></textarea>
				    </div>
			  </div>
			 <div class="form-group">
			    <label for="lastname" class="col-sm-3 control-label">&nbsp;&nbsp;说明</label>
			    <div class="col-sm-8">
			       <textarea rows="3" cols="62"  id="explain"  name="explain"  style="width: 100%;" placeholder="请输入说明"></textarea>
			    </div>
		     </div>
			<div class="modal-footer">
			    <button class="btn btn-default btns" type="button" data-dismiss="modal" style="color: #333;background-color: #fff;border-color: #adadad;">
					&nbsp;关&nbsp;闭
				</button>
				<button class="btn btn-default btns" type="button" id="insertMerit">
					&nbsp;确&nbsp;定
				</button>
				<button class="btn btn-default btns" type="button" id="updateMerit" style="disply:none;">
					&nbsp;修&nbsp;改
				</button>
			</div>
	     </form>
	</div>
</div>
</div>


 <!-- 绩效详情 -->
<div class="modal fade" id="checkDetail" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
	<div class="modal-dialog" role="document">
		<div class="modal-content" style="height: 700px;width:550px;overflow-y: auto;overflow-x: hidden;">
			<div class="modal-header"  style="padding:10px;background-color: #009f95;color: #fff;">
				<button type="button" class="close" data-dismiss="modal" aria-label="Close">
					<span aria-hidden="true" style="font-size: 32px;margin-right: 10px;">×</span>
				</button>
				<h4 class="modal-title" id="myModalLabel">申请绩效信息</h4>
			</div>
			<div>
			  <div>
			       <div class='checkdiv'>
			           <div style='width:100%;'>
			           		<span>考核名称：</span>
			                <span id="merit1"></span>
			           </div>
			       </div>
			       <div class='checkdiv'>
			       	  <div class="checkdiv_div">
			       	     <span>申请时间：</span>
			       	     <span id="meritTm1"></span>
			       	  </div>
			       	  <div class="checkdiv_div">
			       	     <span>河流编码：</span>
			       	     <span id="rvCd1"></span>
			       	  </div>
			       </div>
			       <div class='checkdiv'>
			       	  <div class="checkdiv_div">
			       	     <span>河流名称：</span>
			       	     <span id="rvNm1"></span>
			       	  </div>
			       	  <div class="checkdiv_div">
			       	     <span>上级河长：</span>
			       	     <span id="rvUserName"></span>
			       	  </div>
			       </div>
			       <div class='checkdiv'>
			       	  <div class="checkdiv_div">
			       	     <span>是否审批：</span>
			       	     <span id="meritStatus"></span>
			       	  </div>
			       	  <div class="checkdiv_div">
			       	     <span>申请人：</span>
			       	     <span id="creUserName"></span>
			       	  </div>
			       </div>
			       <div class='checkdiv'>
			       	  <div class="checkdiv_div">
			       	     <span>日常巡查：</span>
			       	     <span id="rcxcScore"></span>
			       	  </div>
			       	  <div class="checkdiv_div">
			       	     <span>事件处理率：</span>
			       	     <span id="sjclvScore"></span>
			       	  </div>
			       </div>
			       <div class='checkdiv'>
			       	  <div class="checkdiv_div">
			       	     <span>水质变化：</span>
			       	     <span id="szbhScore"></span>
			       	  </div>
			       	  <div class="checkdiv_div">
			       	     <span>公众投诉：</span>
			       	     <span id="gztsScore"></span>
			       	  </div>
			       </div>
			       <div class='checkdiv'>
			       	  <div class="checkdiv_div">
			       	     <span>宣传教育工作：</span>
			       	     <span id="xcjyScore"></span>
			       	  </div>
			       	  <div class="checkdiv_div">
			       	     <span>奖励分：</span>
			       	     <span id="jlfScore"></span>
			       	  </div>
			       </div>
			       <div class='checkdiv'>
			       	  <div class="checkdiv_div">
			       	     <span>领导综合评价：</span>
			       	     <span id="ldzhScore"></span>
			       	  </div>
			       	  <div class="checkdiv_div">
			       	     <span>总分：</span>
			       	     <span id="totalScore"></span>
			       	  </div>
			       </div>
			       <div class='checkdiv' style='border-bottom: 1px solid #eee;'>
			           <div>已解决问题：</div>
			           <div id="solvePrm1"></div>
			       </div>
	               <div class='checkdiv' style='border-bottom: 1px solid #eee;'>
			           <div>未解决问题：</div>
			           <div id="NSolvePrm1"></div>
			       </div>
			       <div class='checkdiv' style='border-bottom: 1px solid #eee;'>
			           <div>说明：</div>
			           <div id="explain1"></div>
			       </div>	
			   </div>
		   </div>
	   </div>
    </div>
</div>

