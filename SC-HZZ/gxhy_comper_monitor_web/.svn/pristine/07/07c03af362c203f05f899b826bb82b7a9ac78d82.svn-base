<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<jsp:include page="/common/base/include_BootStrap.jsp"></jsp:include>
<jsp:include page="/common/base/include_Common.jsp"></jsp:include>
<style>

.nav-tabs>li.active>a, .nav-tabs>li.active>a:focus, .nav-tabs>li.active>a:hover {
    color: #fff;
    cursor: default;
    background-color: #2c99ff;
    border: 1px solid #ddd;
    border-bottom-color: transparent;
}
.nav-tabs>li>a{
	background-color: #f0f0f0;
	color: #333;
}
.nav-tabs>li>a:hover{
	background-color: #009f95;
	color:#fff;
}
.row{
    margin-right: 0px;
    margin-top: 10px;
    margin-left: 0px;
}
.tab-content{
	margin: 12px auto;
}
</style>
<script type="text/javascript">
<%--  	  var WEB_ROOT = "<%=request.getContextPath() %>";
 	  var id = "<%=request.getParameter("id")%>";
	  $(function () {
		  $('#myTab a[href="#Section'+id+'"]').tab('show');
		  
		  $('#pptn-tab-s1').bootstrapTable({
		        method: 'GET',
		        contentType: "application/x-www-form-urlencoded",//必须要有！！！！
		        url:WEB_ROOT+"/hydro/pptn/getPPtnList",//要请求数据的文件路径
		        height:tableHeight(),//高度调整
		        striped: true, //是否显示行间隔色
		        dataField: "data",//bootstrap table 可以前端分页也可以后端分页
		        pageNumber: 1, //初始化加载第一页，默认第一页
		        pagination:true,//是否分页
		        queryParamsType:'limit',//查询参数组织方式
		        queryParams:queryParams,//请求服务器时所传的参数
		        sidePagination:'server',//指定服务器端分页
		        pageSize:10,//单页记录数
		        pageList:[5,10,20,30],//分页步进值
		        columns:[
		            {
		                title:'测站编码',
		                field:'stcd',
		                align:'center'
		            },
		            {
		                title:'测站名称',
		                field:'stnm',
		                align:'center'
		            },
		            {
		                title:'经纬度',
		                align:'center',
		                field:'rvnm'
		            },
		            {
		                title:'所在位置',
		                field:'addvnm'
		            },
		            {
		                title:'所属行政区',
		                field:'sttp',
		                align:'center'
		            },
		            {
		                title:'建设单位',
		                field:'tm',
		                align:'center',
		                //列数据格式化
		                formatter:operateFormatter
		            }
		        ],
		        locale:'zh-CN',//中文支持,
		        responseHandler:function(res){
		            //在ajax获取到数据，渲染表格之前，修改数据源
		            return res;
		        }
		    })
	  })
	  //三个参数，value代表该列的值
    function operateFormatter(value,row,index){
        if(value==2){
            return '<i class="fa fa-lock" style="color:red"></i>'
        }else if(value==1){
            return '<i class="fa fa-unlock" style="color:green"></i>'
        }else{
            return '数据错误'
        }
    }
    //请求服务数据时所传参数
    function queryParams(params){
        return{
            //每页多少条数据
            rows: params.limit,
            //请求第几页
            page:params.pageNumber
        }
    }
    function tableHeight(){
        //可以根据自己页面情况进行调整
        return $(window).height()-80;
    }
    $(window).resize(function() {
        $('#pptn-tab-s1').bootstrapTable('resetView', {
            height: tableHeight()
        })
    }) --%>
</script>

<div class="row" >
	<div class="col-md-12">
		<div class="tab" role="tabpanel">
			<!-- Nav tabs -->
			<ul class="nav nav-tabs" role="tablist" id="myTab">
				<li role="presentation" class="active"><a href="#Section1" aria-controls="home" role="tab" data-toggle="tab">雨量分布</a></li>
				<li role="presentation"><a href="#Section2" aria-controls="profile" role="tab" data-toggle="tab">监测站点统计</a></li>
				<li role="presentation"><a href="#Section3" aria-controls="messages" role="tab" data-toggle="tab">水功能区划专题</a></li>
				<li role="presentation"><a href="#Section4" aria-controls="messages" role="tab" data-toggle="tab">河流事件专题</a></li>
				<li role="presentation"><a href="#Section5" aria-controls="messages" role="tab" data-toggle="tab">水质监测专题</a></li>
				<li role="presentation"><a href="#Section6" aria-controls="messages" role="tab" data-toggle="tab">水生态功能区专题</a></li>
				<li role="presentation"><a href="#Section7" aria-controls="messages" role="tab" data-toggle="tab">水污染源专题</a></li>
				<li role="presentation"><a href="#Section8" aria-controls="messages" role="tab" data-toggle="tab">人口分布专题</a></li>
				<li role="presentation"><a href="#Section9" aria-controls="messages" role="tab" data-toggle="tab">水域岸利用专题</a></li>
				<li role="presentation"><a href="#Section10" aria-controls="messages" role="tab" data-toggle="tab">水污染治理专题</a></li>
			</ul>
			<!-- Tab panes -->
			<div class="tab-content tabs">
				<div role="tabpanel" class="tab-pane fade in active" id="Section1">
					<table class="table table-hover" id="pptn-tab-s1">
					   <tr><td>没有找到匹配的记录！</td></tr>
					</table>   	
				</div>
				<div role="tabpanel" class="tab-pane fade" id="Section2">
					<table class="table table-hover" id="pptn-tab-s1">
					    <tr><td>没有找到匹配的记录！</td></tr>
					</table>   	
				</div>
				<div role="tabpanel" class="tab-pane fade" id="Section3">
					<table class="table table-hover" id="pptn-tab-s1">
					    <tr><td>没有找到匹配的记录！</td></tr>
					</table>   	
				</div>
				<div role="tabpanel" class="tab-pane fade" id="Section4">
					<table class="table table-hover" id="pptn-tab-s1">
					    <tr><td>没有找到匹配的记录！</td></tr>
					</table>   	
				</div>
				<div role="tabpanel" class="tab-pane fade" id="Section5">
					<table class="table table-hover" id="pptn-tab-s1">
					    <tr><td>没有找到匹配的记录！</td></tr>
					</table>   	
				</div>
				<div role="tabpanel" class="tab-pane fade" id="Section6">
					<table class="table table-hover" id="pptn-tab-s1">
					    <tr><td>没有找到匹配的记录！</td></tr>
					</table>   	
				</div>
				<div role="tabpanel" class="tab-pane fade" id="Section7">
					<table class="table table-hover" id="pptn-tab-s1">
					    <tr><td>没有找到匹配的记录！</td></tr>
					</table>   	
				</div>
				<div role="tabpanel" class="tab-pane fade" id="Section8">
					<table class="table table-hover" id="pptn-tab-s1">
					    <tr><td>没有找到匹配的记录！</td></tr>
					</table>   	
				</div>
				<div role="tabpanel" class="tab-pane fade" id="Section9">
					<table class="table table-hover" id="pptn-tab-s1">
					    <tr><td>没有找到匹配的记录！</td></tr>
					</table>   	
				</div>
				<div role="tabpanel" class="tab-pane fade" id="Section10">
					<table class="table table-hover" id="pptn-tab-s1">
					    <tr><td>没有找到匹配的记录！</td></tr>
					</table>   	
				</div>
			</div>
		</div>
	</div>
</div>