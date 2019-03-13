var myRank={
	myRankData:function(){
		easyui_datagrid_util.fit=false;
		easyui_datagrid_util.singleSelect=true;
		easyui_datagrid_util.pageSize=20;
		easyui_datagrid_util.create_datagrid_options("myRank", WEB_ROOT+"/merit/perf/getMyRankList",myRank, null);
	},
	QueryRank:function(){
		var keyword= $("#meritNm_Rank").val();
		var data = {keyword:keyword};
		$('#myRank').datagrid('load',data); 
	},
	loadSuccess:function(rowData){
		var row=rowData.data.length;
		if(rowData.data.length>0){
			var merges = [{
                index: 0,
                rowspan: row
            }];		
			 for (var i = 0; i < merges.length; i++)
                 $('#myRank').datagrid('mergeCells', {
                     index: merges[i].index,
                     field: 'rank',
                     rowspan: merges[i].rowspan

                 });
		}
	},

    formatterMeritmeritTm:function(value, row, index){
    	return value.substring(0,value.length-2);
    },
    formatterPf:function(value,row,index){
    	var img = WEB_ROOT+"/check/img/pf.png";
    	return "<img src='"+img+"' style='width:20px;height:25px;cursor: pointer;' onclick='myRank.showMyRank(\""+value+"\")'>";
    },
    formatterRank:function(value,row,index){
		var color="";
    	if(value==1){
    		color="#FF0000";
    	}else if(value==2){
    	    color="green";
    	}else if(value==3){
    		color="#FF7F00";
    	}else{
    		color="blue";
    	}
    	return "<font style='color:"+color+";font-weight:bolder;'>"+value+"</font>";

    },
    formatterRankMy:function(value,row,index){
    	var row = $('#myRank').datagrid('getRows');
		var data = row[index+1]; 
		var val;
		var color="";
    	var img = "";
		if(data != null && undefined != data ){
			val = data.rankMy
	    	if(value > val){
	    		img = WEB_ROOT+"/check/img/down.png";
	    	}
	    	if(value < val){
	    		img = WEB_ROOT+"/check/img/up.png";
	    	}
		}
    	if(value==1){
    		color="red";
    	}else if(value==2){
    	    color="green";
    	}else if(value==3){
    		color="#FF7F00";
    	}else{
    		color="blue";
    	}
    	return "<font style='color:"+color+";font-weight:bolder;'>"+value+"</font><img src='"+img+"' style='width:17px;height:17px;margin: 0 0 0 4px;'>";
    },
    showMyRank:function(id){
    	var p = $(window).height();	
		var w = $(window).width();	
		var toUrl = WEB_ROOT + '/check/myRank/preview.jsp?' + '&id=' + id;
    	var index = layer.open({
		  title:"绩效指标单项分",
		  type: 2,
		  content: toUrl,
		  area: [''+w+'px', ''+p+'px'],
		  maxmin: true
		});
    }
  }



$(function(){
	var p = $(window).height();	
	var contextH = p-$("#header-rank-Div").height();
	//此处因easyui样式导致自适应高度加上头部后显示不出来，所以将window高度减去头部高度
	$("#myRank").height(contextH); 
	/**
	 * 初始化
	 */
	myRank.myRankData();
	/**
	 * 条件查询
	 */
	$("#myRank_query").click(function(){
		 myRank.QueryRank();
	});
    
	$("#refreshMyRank").click(function(){
		$("#meritNm_Rank").val("");
		myRank.myRankData();
	});
});
