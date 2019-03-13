<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ page import="com.gxhy.base.util.CustomPropertyConfigurer" %>
<jsp:include page="/common/base/include_BaseCommon.jsp"></jsp:include>
<script src="<%=request.getContextPath()%>/common/fileupdate/jquery.media.js"></script>
<link href="<%=request.getContextPath() %>/check/css/standard.css" rel="stylesheet">
<script type="text/javascript">
 	 var WEB_ROOT = "<%=request.getContextPath() %>";
 	 var id = "<%=request.getParameter("id")%>";
 	 $(function() { 
 		var opt = {"uuid":id};
 		var reulst = commonUtils.post(WEB_ROOT+"/merit/perf/getMeritDetail",opt,false);
 		if(reulst.flag){
 			var data = reulst.data;
 			console.log(data)
 			$("#rcxc").html(data.rcxcScore+"分");
 			$("#sjcl").html(data.sjclvScore+"分");
 			$("#sjbh").html(data.szbhScore+"分");
 			$("#ggts").html(data.gztsScore+"分");
 			$("#xcjl").html(data.xcjyScore+"分");
 			$("#jlf").html(data.jlfScore+"分");
 			$("#ldzhpj").html(data.ldzhScore+"分");
 			$("#total").html(data.totalScore+"分");
 		}
     });  
</script>
<div class="panel panel-primary">
    <div class="panel-body">
    	<div style="background-color: #FFFFFF;"  id="standard-div">
		<table class="table_standard">
		      <thead>
		          <tr>
		              <th  class="c_t">考评项目</th>
		              <th  class="c_t1">考评内容</th>
		              <th  class="c_t">基础分</th>
		              <th  class="c_t1">考评标准</th>
		              <th  class="c_t">得分</th>
		          </tr>
		      </thead>
		      <tbody>
		          <tr>
		             <td class="c_t">日常巡查</td>
		             <td class="c_t1">组织开展河湖巡查、对发现的河道不洁、护岸坍塌、涉河违章和污水直排等问题及时反映县河长办。</td>
		             <td class="c_t">20分</td>
		             <td class="c_t1">未开展河湖巡查的，扣20分；没有巡查记录或记录不全的，每个扣1分；发现问题不及时上报或者重大问题未及时发现的，每件扣2分；</td>
		             <td class="c_t countDf" id="rcxc"></td>
		          </tr>
		          <tr>
		             <td  class="c_t">事件处理率</td>
		             <td  class="c_t1">加强河湖管护，对辖区内出现的事件和上级督办的事件要及时进行。</td>
		             <td  class="c_t">15分</td>
		             <td  class="c_t1">事件处理率*15分；</td>
		             <td  class="c_t countDf" id="sjcl"></td>
		          </tr>
		          <tr>
		             <td class="c_t">水质变化</td>
		             <td class="c_t1">对于区域内的水质情况进行评估。</td>
		             <td class="c_t">15分</td>
		             <td class="c_t1">水库、山塘水质全部达标得15分；有一个不达标扣2分；有水质好转上升加2分；有不达标水质又恶化整个项得0分。</td>
		             <td class="c_t countDf " id="sjbh"></td>
		          </tr>
		          <tr>
		             <td  class="c_t">公众投诉</td>
		             <td  class="c_t1">辖区内河湖管护情况以及群众满意度程度。</td>
		             <td  class="c_t">10分</td>
		             <td  class="c_t1">每起投诉事件扣2分，如果事件处理的能够让群众满意，此事件可以不扣分。</td>
		             <td  class="c_t countDf" id="ggts"></td>
		          </tr>
		          <tr>
		             <td class="c_t">宣传教育工作</td>
		             <td class="c_t1">设立河湖保护宣传栏、河道沿线设有河道保护标志、标语等多种宣传方式，营造良好氛围；开展学生防溺水安全教育，开展“河长制进校园”主题活动。</td>
		             <td class="c_t">20分</td>
		             <td class="c_t1">宣传工作未到位，检查中每发现一个问题，扣2分。</td>
		             <td class="c_t countDf" id="xcjl"></td>
		          </tr>
		          <tr>
		             <td class="c_t">奖励分</td>
		             <td class="c_t1">工作有创新，成效显著。</td>
		             <td class="c_t">10分</td>
		             <td class="c_t1">工作有创新、有亮点，经验和做法在省、市县得到肯定和推广的，分别加5分、3分、2分。</td>
		             <td class="c_t countDf" id="jlf"></td>
		          </tr>
		          <tr>
		             <td class="c_t">领导综合评价</td>
		             <td class="c_t1">对管辖范围内的各乡镇河长的工作评价；协助上级河长和部门开展辖区内河湖热点、难点问题调研，并配合开展相关问题集中整治。</td>
		             <td class="c_t">10分</td>
		             <td class="c_t1">未按要求做好相关协助配合工作的，每次扣1分；由领导酌情给分。</td>
		             <td class="c_t countDf" id="ldzhpj"></td>
		          </tr>
		          <tr>
		             <td class="c_t1" colspan="2" style="text-align: center;">基础总分</td>
		             <td class="c_t">100分</td>
		             <td class="c_t1" style="text-align: center;">得出总分</td>
		             <td class="c_t countDf_z" id="total"></td>
		          </tr>
		      </tbody>
		</table>
	</div>
	</div>
</div>
