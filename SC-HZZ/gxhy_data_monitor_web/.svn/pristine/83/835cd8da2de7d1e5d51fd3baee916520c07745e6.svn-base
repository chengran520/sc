var riverLengthMap = {
	UUID:null,
	initData:function(){
		this.UUID = commonUtils.UUID();
		this.initTree();
	},
	initTree:function(){
		_this = this;
		var setting = {
			edit: {
                enable: true,
                showRemoveBtn: false,
                showRenameBtn: false
            },
			view: {
				selectedMulti: false,
				dblClickExpand: false,
				showLine: false,
				showIcon: function(a,b){
					return b.icon;
				}
			},
			check: {
				enable: true
			},
			async: {
				enable: true,
				url: WEB_ROOT+"/data/center/monitor/getAdcdRiverTree",
				autoParam:["id=adCd","type=type"],
				type: "GET",
				dataFilter: function(treeId, parentNode, childNodes){
					var data = childNodes.data;
					var ret = [];
					childNodes.data.forEach(function(v, i ,array){
						if(typeof v.userId !== "undefined"){
							ret.push({
								name: v.userNm,
								id: v.userId,
								data: v,
								icon: WEB_ROOT+(v.sex == 1 ? "/common/images/ztree/man.jpg":"/common/images/ztree/woman.jpg"),
								isParent: false,
							});
						}else{										
							ret.push({
								name: v.addvnm,
								id: v.addvcd,
								type:'rl',
								data: v,
								isParent: true,
							});
						}
					});
					return ret;
				}
			},
			callback:{
				beforeClick:function(treeId, treeNode, clickFlag){
					
				},
				onClick: function(e,treeId, treeNode) {
					if (treeNode.isParent) {
						_this.zTree.expandNode(treeNode);
					}else{
						_this.showRiverLengthData(treeNode);
					}
				},
				beforeAsync:function(treeId, treeNode) {
					_this.treeLoaded = false;
				},
				onAsyncSuccess: function(event, treeId, treeNode, msg) {
					this.treeLoaded = true;
					var zTreeObj = _this.zTree;
					if(zTreeObj != null){						
						// 这个方法是将标准 JSON 嵌套格式的数据转换为简单 Array 格式
						var nodes = zTreeObj.transformToArray(zTreeObj.getNodes()); 
						for (var i = 0; i < nodes.length; i++) {
							// 判断节点是否已经加载过，如果已经加载过则不需要再加载
							if (!nodes[i].zAsync) {
								zTreeObj.reAsyncChildNodes(nodes[i], '', true);
							}
							zTreeObj.expandNode(nodes[i], true);  
							if(!nodes[i].isParent && nodes[i].id == userId){
								//选中当前登陆用户信息
								_this.showRiverLengthData(nodes[i]);
							}
						}
					}
				},
				onAsyncError: function(event, treeId, treeNode, XMLHttpRequest, textStatus, errorThrown) {
					console.info(Date.now()+"_onAsyncError");
					this.treeLoaded = true;
				}
			}
		};
		this.zTree = $.fn.zTree.init($("<ul id='ztree_"+this.UUID+"_'  class='ztree uncheckable'></ul>").appendTo($("#divTree_river")), setting);
	},
	showRiverLengthData:function(obj){
		var data = obj.data;
		$("#userNm").val(data.userNm);
		$("#iphone").val(data.iphone);
		$("#qq").val(data.qq);
		$("#email").val(data.email);
		$(":radio[name='sex'][value='" + data.sex + "']").prop("checked", "checked");
	}
}
$(function(){
	riverLengthMap.initData();
	$(".tab_container_head div").click(function(){
		$(this).addClass("rdijit-state-selected").siblings().removeClass("rdijit-state-selected");
	});
});
