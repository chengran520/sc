<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<jsp:include page="/common/base/include_BaseCommon.jsp"></jsp:include>
<link href="<%=request.getContextPath() %>/common/css/commonView.css" rel="stylesheet">
<link href="<%=request.getContextPath() %>/basicSite/css/basicSite.css" rel="stylesheet">
<script src="<%=request.getContextPath() %>/basicSite/basicSite.js"></script>
<script type="text/javascript">
 	var WEB_ROOT = "<%=request.getContextPath()%>";
 	var paramStcd = "<%=request.getParameter("stcd")%>";
</script>
<div class="headerDiv" id="headerSitediv">
	<div class="header-content">
		<h2>
			<i class="fa icon-th-large"></i>
			<c>测站基础信息</c>
		</h2>
	</div> 
	<div style="background-color: #FFFFFF;"class="" >
		<div class="form-inline" method="post" id="form_data_info">
			<div id="siteDiv" style="padding: 10px;border-bottom: 1px solid #dddddd;">
				<button  onclick="site.QuerySttp('');" type="button"  class='btnSite current'>全部</button> 
				<button  onclick="site.QuerySttp('PP');" type="button"  class='btnSite'>雨量站</button> 
				<button  onclick="site.QuerySttp('ZZ');" type="button"  class='btnSite'>河道水位站</button> 
				<button  onclick="site.QuerySttp('SP');" type="button"  class='btnSite'>视频站</button> 
				<button  onclick="site.QuerySttp('SZ');" type="button"  class='btnSite'>水质站</button> 
				<div class="col-xs-2.5" style="display: inline;">
					<div class="input-group">
					  <span class="input-group-addon" >测站信息:</span>
					  <input type="text" class="form-control" id="stcdkey"  placeholder="请输入编码或名称">
					</div>
				</div>
				<button id="queryBasic" class="btn btn-primary" style="background-color: #0ab1f8;border: 0px;" type="button" >
					<span class="glyphicon glyphicon-search " ></span>&nbsp;查&nbsp;询
				</button>
<!-- 				<button id="saveSite" class="btn btn-primary" style="background-color: #0ab1f8;border: 0px;" type="button" >
					<span class="glyphicon glyphicon-plus " ></span>&nbsp;添&nbsp;加
				</button> -->
<!-- 				<button  id="refreshBasic"   class="btn btn-primary" type="button" style="background-color:#EE82EE;border: 0px;">
					<span class="glyphicon glyphicon-refresh" ></span>&nbsp;刷&nbsp;新
				</button> -->
			</div>
		</div>
	</div>
</div>
 <table id="patrol_catalogSite"  style="text-overflow:ellipsis;">
   <thead>
	 <tr>
            <th field="stcd"  width="30" align="center">测站编码</th>
            <th field="stnm" width="40" align="center">测站名称</th>
            <th field="rvnm" width="40" align="center" >所属河流</th>
            <th field="hnnm"  width="40" align="center">所属水系</th>
            <th field="lgtd" width="40" align="center">经度</th>
            <th field="lttd" width="40" align="center">纬度</th>
            <th field="stlc" width="40" align="left" halign="center">站址</th>
            <th field="addvcd" width="40" align="center">行政区划码</th>
            <th field="sttpNm" width="40" align="center">站类</th>
            <th field="basicSite" width="40"    align="center"  formatter="site.formatSiteRepeat">操作</th>
	 </tr>
   </thead>
  </table>
  <!-- 基础测站详情 -->
<div class="modal fade" id="SiteDetail" tabindex="-1" role="dialog" aria-labelledby="myModalLabel"  style="overflow-y: hidden;">
	<div class="modal-dialog" role="document">
		<div class="modal-content" style="height: 570px;width:550px;overflow-y: auto;overflow-x: hidden;">
			<div class="modal-header"  style="padding:10px;background-color: #009f95;color: #fff;">
				<button type="button" class="close" data-dismiss="modal" aria-label="Close">
					<span aria-hidden="true" style="font-size: 32px;margin-right: 10px;">×</span>
				</button>
				<h4 class="modal-title" id="myModalLabel">基本信息</h4>
			</div>
			<div>
			  <table class="siteTable">
			       <tr>
			           <td class="leftTr">测站编码：</td>
			           <td  id="stcd_detail" class="rightTr"></td>
			           <td class="leftTr">测站名称：</td>
			           <td id="stnm_detail" class="rightTr"></td>
			       </tr>
			        <tr>
			           <td class="leftTr">河流名称：</td>
			           <td id="rvnm_detail" class="rightTr"></td>
			           <td class="leftTr">水系名称：</td>
			           <td id="hnnm_detail" class="rightTr"></td>
			       </tr>
			        <tr>
			           <td class="leftTr">流域名称：</td>
			           <td  id="bsnm_detail" class="rightTr"></td>
			           <td class="leftTr">经度：</td>
			           <td id="lgtd_detail"  class="rightTr"></td>
			       </tr>
			       <tr>
			           <td class="leftTr">纬度：</td>
			           <td  id="lttd_detail" class="rightTr"></td>
			           <td class="leftTr">站址：</td>
			           <td id="stlc_detail"  class="rightTr"></td>
			       </tr>
			        <tr>
			           <td class="leftTr">站类：</td>
			           <td id="sttp_detail"   class="rightTr"></td>
			           <td class="leftTr">行政区：</td>
			           <td id="addvcd_detail" class="rightTr"></td>
			        </tr>
			        <tr>
			           <td class="leftTr">基面名称：</td>
			           <td   id="dtmnm_detail" class="rightTr"></td>
			           <td class="leftTr">基面高程：</td>
			           <td id="dtmel_detail"   class="rightTr"></td>
			        </tr>  
			         <tr>
			           <td class="leftTr">基面修正值：</td>
			           <td   id="mdpr_detail"  class="rightTr"></td>
			           <td class="leftTr">报汛等级：</td>
			           <td id="frgrd_detail"   class="rightTr"></td>
			        </tr>
			        <tr>
			           <td class="leftTr">建站年月：</td>
			           <td  id="edfrym_detail" class="rightTr"></td>
			           <td class="leftTr">始报年月：</td>
			           <td  id="bgfrym_detail" class="rightTr"></td>
			        </tr>
			         <tr>
			           <td class="leftTr">隶属行业单位：</td>
			           <td  id="atcunit_detail" class="rightTr"></td>
			           <td class="leftTr">信息管理单位：</td>
			           <td  id="admauth_detail" class="rightTr"></td>
			        </tr>
			         <tr>
			           <td class="leftTr">交换管理单位：</td>
			           <td  id="locality_detail" class="rightTr"></td>
			           <td class="leftTr">测站岸别：</td>
			           <td  id="stbk_detail" class="rightTr"></td>
			        </tr>
			         <tr>
			           <td class="leftTr">测站方位：</td>
			           <td id="stazt_detail"   class="rightTr"></td>
			           <td class="leftTr">至河口距离：</td>
			           <td  id="dstrvm_detail" class="rightTr"></td>
			         </tr>
			          <tr>
			           <td class="leftTr">集水面积：</td>
			           <td id="drna_detail"  class="rightTr"></td>
			           <td class="leftTr">拼音码：</td>
			           <td  id="phcd_detail" class="rightTr"></td>
			         </tr>
			          <tr>
			           <td class="leftTr">启用标志：</td>
			           <td id="usfl_detail"      class="rightTr"></td>
			           <td class="leftTr">备注：</td>
			           <td  id="comments_detail" class="rightTr"></td>
			         </tr>
			  </table>			
			</div>
		</div>
	</div>
</div>

 <!-- 模态框（Modal） -->
<div class="modal fade" id="stModel" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true" style="overflow: auto;">
	<div class="modal-dialog">
		<div class="modal-content" style="width:750px;height: auto;">
			<div class="modal-header" style="padding:10px;background-color: #009f95;color: #fff;">
				<button type="button" class="close" data-dismiss="modal" aria-label="Close">
					<span aria-hidden="true" style="font-size: 32px;margin-right: 10px;">×</span>
				</button>
				<h4 class="modal-title" id="myModalLabel">测站基础信息</h4>
			</div>
			<div class="modal-body" id="modal-body">
				<form class="form-horizontal" role="form" id="form_data_st">
				  <div class="form-group">
				    <label for="firstname" class="col-sm-3 control-label">&nbsp;&nbsp;测站编码</label>
				    <div class="col-sm-8">
				      <input type="hidden" class="form-control" name="stcd" id="stcd" >
				      <input type="text" class="form-control" name="stcd-t" id="stcd-t" disabled="disabled" maxlength="15">
				    </div>
				  </div>
				  <div class="form-group">
				    <label for="lastname" class="col-sm-3 control-label"><span style="color: red;">★</span>&nbsp;&nbsp;测站名称</label>
				    <div class="col-sm-8">
				      <input type="text" class="form-control" name="stnm" id="stnm" maxlength="10">
				    </div>
				  </div>
				  <div class="form-group">
				    <label for="lastname" class="col-sm-3 control-label"><span style="color: red;">★</span>所属水系</label>
				    <div class="col-sm-8">
				      <input type="text" class="form-control" name="hnnm" id="hnnm" >
				    </div>
				  </div>
				  <div class="form-group">
				    <label for="lastname" class="col-sm-3 control-label"><span style="color: red;">★</span>所属河流</label>
				    <div class="col-sm-8">
				      <input type="text" class="form-control" name="rvnm" id="rvnm" >
				    </div>
				  </div>
				  <div class="form-group">
				    <label for="lastname" class="col-sm-3 control-label"><span style="color: red;">★</span>&nbsp;&nbsp;经度</label>
				    <div class="col-sm-8">
				      <input type="text" class="form-control" name="lgtd" id="lgtd" placeholder="请输入经度,格式：116.526726" maxlength="10"  onblur="check(this)"  onkeyup="this.value=this.value.replace(/[^0-9.]/g,'')" > 
				    </div>
				  </div>
				  <div class="form-group">
				    <label for="lastname" class="col-sm-3 control-label"><span style="color: red;">★</span>&nbsp;&nbsp;纬度</label>
				    <div class="col-sm-8">
				      <input type="text" class="form-control" name="lttd" id="lttd" placeholder="请输入纬度,格式：40.007181" maxlength="10" onblur="check(this)"  onkeyup="this.value=this.value.replace(/[^0-9.]/g,'')" >
				    </div>
				  </div>
				  <div class="form-group">
				    <label for="lastname" class="col-sm-3 control-label"><span style="color: red;">★</span>&nbsp;&nbsp;站址</label>
				    <div class="col-sm-8">
				      <input type="text" class="form-control" name="stlc"  id="stlc" >
				    </div>
				  </div>
				  <div class="form-group">
				    <label for="lastname" class="col-sm-3 control-label"><span style="color: red;">★</span>&nbsp;&nbsp;站类</label>
				    <div class="col-sm-8">
				          <select class="form-control length-input"  id="sttp" name="sttp" >
						      	<option value="" disabled="disabled">请选择</option>
						      	<option value="PP">雨量站</option>
						      	<option value="MM">气象站</option>
						      	<option value="BB">蒸发站</option>
						      	<option value="ZQ">河道水文站</option>
						      	<option value="RR">水库水位站</option>
						      	<option value="DD">堰闸水文站</option>
						      	<option value="ZZ">河道水位站</option>
						      	<option value="TT">潮位站</option>
						      	<option value="RR">水库水文站</option>
						        <option value="DP">泵站</option>
						        <option value="ZG">地下水站</option>
						        <option value="SS">墒情站</option>
						        <option value="ZB">分洪水位站</option>
						        <option value="SP">视频站</option>
						        <option value="SY">水源地</option>
						        <option value="PW">排污口</option>
					   	  </select>    	  
				    </div>
				  </div>
				  <div class="form-group">
				    <label for="lastname" class="col-sm-3 control-label">行政区划码</label>
				    <div class="col-sm-8">
				      <input type="text" class="form-control" name="addvcd" id="addvcd" maxlength="11" onkeyup="this.value=this.value.replace(/\D/g,'')">
				    </div>
				  </div>
				  </form>
			</div>
			<div class="modal-footer">
				<button class="btn btn-default" type="button" data-dismiss="modal"  style="color: #333;background-color: #fff;border-color: #adadad;">
					&nbsp;关&nbsp;闭
				</button>
				<button   class="btn btn-default" style="background-color: #009f95;color: #fff;" id="updateSt"  type="button">
				    &nbsp;修&nbsp;改
				</button>

			</div>
		</div>
	</div>
</div>