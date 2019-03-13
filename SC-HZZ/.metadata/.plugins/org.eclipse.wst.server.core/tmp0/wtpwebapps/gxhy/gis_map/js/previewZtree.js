var pewZtree = {
	zNodeZtree:function(data){
		var zNodes =[];
		if(data != null){
			for(var i = 0 ;i < data.length;i++){
				var array = {};
				array.id=data[i].rvCd;
				array.pId=data[i].rvCd;
				array.prewAddes=data[i].prewAddes;
				array.name=data[i].rvNm;
				zNodes.push(array);
			}
		}
		 var setting = {
			check: {
		        enable: false,
		        chkboxType:{ "Y":"ps","N":"ps"} 
		  }, 
		  view: {
	        dblClickExpand: false,
	        showLine: true,
	        selectedMulti: false,
	        showIcon: true, //设置是否显示节点图标
	        showLine: true, //设置是否显示节点与节点之间的连线
		  },
		  data: {
	        simpleData: {
	             enable:true,
	             idKey: "id",
	             pIdKey: "pid",
	             rootPId: ""
	         }
		   },
		   callback: {
			    onClick: function(treeId, treeNode) {
			    	var zTreeObj = $.fn.zTree.getZTreeObj("pewZtree");
			    	var selectedNodes = zTreeObj.getSelectedNodes();
			    	var nodeId  = selectedNodes[0].id;
			    	var rvNm = selectedNodes[0].name;
			    	var prewAddes = selectedNodes[0].prewAddes;
			    	if(prewAddes == null || prewAddes == 'null'){
			    		layer.msg('当前河流暂时应急预案！', {icon: 5});
			    		return;
			    	}
			    	var p = $(window).height();	
					var w = $(window).width();	
					var index = layer.open({
					  title :rvNm+' 应急预案',
					  type: 2,
					  content: 'preview.jsp?prewAddes='+prewAddes,
					  area: [''+w+'px', ''+p+'px'],
					  maxmin: true
					});
		        }
		     }
		}
		$("#pewModal").modal();
		var t = $("#pewZtree");
	    t = $.fn.zTree.init(t, setting, zNodes);
	    t.expandAll(true);
	},
	rvAdcdZtree:function(){
		
	}
}
