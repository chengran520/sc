var sdtRank={
	/**
	 * 后台查询数据
	 */
	paramdata:null,
	sdtRankData:function(paramdata){
		var result=commonUtils.get(WEB_ROOT+"/merit/perf/getSdtRankList",paramdata,null);	
		 if(result.flag){
		    	return result.data;
	    }
	},
	/**
	 * 列表
	 */	
	initData:function(data){
		if(data!=null){
			
		}
		layui.use('table', function(){
			if(data==null){
				data=[];
			}
			  var table = layui.table;
			  table.render({
			    elem: '#sdtaRank'
			    ,cellMinWidth: 80 //全局定义常规单元格的最小宽度，layui 2.2.1 新增
			    ,cols: [[
			      {field:'creUserName', width:'7%', title: '申请人', align: 'center'}
			      ,{field:'addvnm', width:'7%', title: '行政区名称',align: 'center'}
			      ,{field:'meritNm', width:'19%', title: '考核名称',align: 'center'}
			      ,{field:'rcxcScore', width:'8%', title: '日常巡查(分)',sort: true,align: 'center'}
			      ,{field:'sjclvScore', width:'9%', title: '事件处理率(分)',sort: true,align: 'center'}
			      ,{field:'szbhScore', width:'8%', title: '水质变化(分)',sort: true,align: 'center'}
			      ,{field:'gztsScore', width:'8%', title: '公众投诉(分)',sort: true,align: 'center'}
			      ,{field:'xcjyScore', width:'10%', title: '宣传教育工作(分)',sort: true,align: 'center'}
			      ,{field:'jlfScore', width:'8%', title: '奖励分(分)',sort: true,align: 'center'}
			      ,{field:'ldzhScore', width:'8%', title: '综合评价(分)',sort: true,align: 'center'}
			      ,{field:'totalScore', width:'8%', title: '总分(分)',sort: true,align: 'center'}
			    ]]
			  ,data:data
			  ,skin: 'line' //表格风格
			  ,even: true //开启隔行背景
			  ,size: 'sm' //小尺寸的表格
			  });
			});
		
	}
}
$(function(){
	 var p = $(window).height();	
     var contextH = p-$("#headerSubRankDiv").height();
     $("#sdtaRank").height(contextH);
	/**
	 * 初始化
	 */
	sdtRank.initData(sdtRank.sdtRankData());
	/**
	 * 条件查询
	 */
	$("#sdtRank_query").click(function(){
		var createNm=$("#createNm_SDT").val();
		var meritNm=$("#meritNm_SDT").val();
		paramdata={'createNm':createNm,'meritNm':meritNm};
		var data=sdtRank.sdtRankData(paramdata);
		sdtRank.initData(data);
	});
	/**
	 * 刷新
	 */
	$("#refreshStRank").click(function(){
		$("#createNm_SDT").val("");
		$("#meritNm_SDT").val("");
		sdtRank.initData(sdtRank.sdtRankData());
	});
});