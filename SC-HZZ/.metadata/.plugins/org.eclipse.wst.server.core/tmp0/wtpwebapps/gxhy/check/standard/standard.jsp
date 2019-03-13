<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<jsp:include page="/common/base/include_BaseCommon.jsp"></jsp:include>
<link href="<%=request.getContextPath() %>/common/css/commonView.css" rel="stylesheet">
<link href="<%=request.getContextPath() %>/check/css/standard.css" rel="stylesheet">

<script type="text/javascript">
 	var WEB_ROOT = "<%=request.getContextPath() %>";
</script>
<div class="headerDiv" id="headerDiv">
	 <div class="header-content">
		<h2>
			<i class="fa icon-th-large"></i>
			<c>考核依据</c>
		</h2>
	 </div> 
 </div> 
	<div style=""  id="standard-div">
		<table class='jxkhTable' border='1'>
		      <thead>
		          <tr>
		              <th width="20%">考评项目</th>
		              <th width="30%">考评内容</th>
		              <th width="30%">考评标准</th>
		              <th width="20%">标准分数(分)</th>
		          </tr>
		      </thead>
		      <tbody>
		          <tr>
		             <td>日常巡查</td>
		             <td class='left'>
		             	 <p>组织开展河湖巡查、对发现的河道不洁、护岸坍塌、</p>
		             	 <p>涉河违章和污水直排等问题及时反映县河长办。</p>
                     </td>
		             <td class='left'>
                         <p>未开展河湖巡查的，扣20分；</p>
                         <p>没有巡查记录或记录不全的，每个扣1分；</p>
                         <p>发现问题不及时上报或者重大问题未及时发现的，每件扣2分；</p>
                     </td>
		             <td>20</td>
		          </tr>
		          <tr>
		             <td>事件处理率</td>
		             <td class='left'>
		             	<p>加强河湖管护，对辖区内出现的事件和</p>
		             	<p>上级督办的事件要及时进行。</p>
		             </td>
		             <td class='left'>事件处理率*15分；</td>
		             <td>15</td>
		          </tr>
		          <tr>
		             <td>水质变化</td>
		             <td class='left'>对于区域内的水质情况进行评估。</td>
		             <td class='left'>
		             	<p>水库、山塘水质全部达标得15分；</p>
		             	<p>有一个不达标扣2分；有水质好转上升加2分；</p>
		             	<p>有不达标水质又恶化整个项得0分。</p>
		             </td>
		             <td>15</td>
		          </tr>
		          <tr>
		             <td>公众投诉</td>
		             <td class='left'>辖区内河湖管护情况以及群众满意度程度。</td>
		             <td class='left'>
		             	<p>每起投诉事件扣2分，如果事件处理的能够让群众满意，</p>
		             	<p>此事件可以不扣分。</p>
		             </td>
		             <td>10</td>
		          </tr>
		          <tr>
		             <td>宣传教育工作</td>
		             <td class='left'>
		                  <p>设立河湖保护宣传栏、河道沿线设有河道保护标志、</p>
		                  <p>标语等多种宣传方式，营造良好氛围；</p>
		                  <p>开展学生防溺水安全教育，开展“河长制进校园”主题活动。</p>
		             </td>
		             <td class='left'>宣传工作未到位，检查中每发现一个问题，扣2分。</td>
		             <td>20</td>
		          </tr>
		          <tr>
		             <td>奖励分</td>
		             <td class='left'>工作有创新，成效显著。</td>
		             <td class='left'>
                        <p>工作有创新、有亮点，经验和做法在省、市县得到肯定和推广的，</p>
                        <p>分别加5分、3分、2分。</p>
                     </td>
		             <td>10</td>
		          </tr>
		          <tr>
		             <td>领导综合评价</td>
		             <td class='left'>
		             	<p>对管辖范围内的各乡镇河长的工作评价；</p>
		             	<p>协助上级河长和部门开展辖区内河湖热点、难点问题调研，</p>
		             	<p>并配合开展相关问题集中整治。</p>
		             </td>
		             <td class='left'>未按要求做好相关协助配合工作的，每次扣1分；由领导酌情给分。</td>
		             <td>10</td>
		          </tr>
		          <tr>
		             <td  colspan="3">总分</td>
		             <td>100</td>
		          </tr>
		      </tbody>
		</table>
	</div>
<script>
	var pHit = $(window).height();	
	$("#standard-div").height(pHit - 55);
</script>