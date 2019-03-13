var dataFill={
	initData:function(){
		easyui_datagrid_util.fit=false;
		easyui_datagrid_util.fitColumns=false;
		easyui_datagrid_util.singleSelect=false;
		easyui_datagrid_util.pagination=false;
		easyui_datagrid_util.create_datagrid_options("fillTab", WEB_ROOT+ "/data/fill/getFillDataList",dataFill, null);
	},
	Query:function(){
		var queryKey= $("#queryKey").val();
		var data = {key:queryKey};
		$('#fillTab').datagrid('reload',data); 
	},
	formatterDataTm:function(value, row, index){
		return formatter_date_utils.formatterStrTime(value,0,6);
	},
	formatterCz:function(value, row, index){
         var html="";
//         var html="<a class='colorUpdate'  style='color:#008B00;'  onclick='userManager.updateUser(\""+row.rvCd+"\")'>修改</a>|";
	         html+="<a  class='colorDelete'  style='color:#9B30FF;'  onclick='dataFill.deleteFill(\""+row.rvCd+"\");'>删除</a>";
        return html;
	},
	deleteFill:function(rvCd){
    	layer.alert('你确定要删除吗？', {
		    skin: 'layui-layer-molv' 
		    ,closeBtn: 1    
		     ,anim: 1
		     ,btn: ['确定','取消']
		     ,icon: 5   // icon
		     ,yes:function(index){
	        	 commonUtils.post(WEB_ROOT+"/data/fill/deleteDataFillRiver",{rvCd:rvCd},false,"删除");
	        	 $('#fillTab').datagrid('reload'); 
	        	 layer.close(index);
		     },btn2:function(){
			   	 layer.close();
		     }
	     }); 
	}
}
$(function(){
	var p = $(window).height();	
	var contextH = p-$("#headerFilldiv").height();
	//此处因easyui样式导致自适应高度加上头部后显示不出来，所以将window高度减去头部高度
	$("#fillTab").height(contextH); 
	dataFill.initData();
	$("#Query").click(function(){
		dataFill.Query();
	});
	$("#refresh").click(function(){
		$('#fillTab').datagrid('reload'); 
	});
	$("#addFill").click(function(){
		var diag = new Dialog();
		diag.Title="河流基础信息录入";
		diag.Width = 800;
		diag.Height = 500;
		diag.ShowButtonRow=true;
		diag.URL = "fillDeatil.jsp";
		diag.OKEvent = function(){
			var data = new Array();
			data.push({name:'rvCd',value:diag.innerFrame.contentWindow.document.getElementById('rvCd').value});
			data.push({name:'rvNm',value:diag.innerFrame.contentWindow.document.getElementById('rvNm').value});
			data.push({name:'hnnm',value:diag.innerFrame.contentWindow.document.getElementById('hnnm').value});
			data.push({name:'bsnm',value:diag.innerFrame.contentWindow.document.getElementById('bsnm').value});
			data.push({name:'stbk',value:diag.innerFrame.contentWindow.document.getElementById('stbk').value});
			data.push({name:'rvlt',value:diag.innerFrame.contentWindow.document.getElementById('rvlt').value});
			data.push({name:'draArea',value:diag.innerFrame.contentWindow.document.getElementById('draArea').value});
			data.push({name:'pRvCd',value:diag.innerFrame.contentWindow.document.getElementById('pRvCd').value});
			data.push({name:'pRvNm',value:diag.innerFrame.contentWindow.document.getElementById('pRvNm').value});
0			data.push({name:'rvOn',value:diag.innerFrame.contentWindow.document.getElementById('rvOn').value});
			data.push({name:'rvOnLgtd',value:diag.innerFrame.contentWindow.document.getElementById('rvOnLgtd').value});
			data.push({name:'rvOnLttd',value:diag.innerFrame.contentWindow.document.getElementById('rvOnLttd').value});
			data.push({name:'rvMh',value:diag.innerFrame.contentWindow.document.getElementById('rvMh').value});
			data.push({name:'rvMhLgtd',value:diag.innerFrame.contentWindow.document.getElementById('rvMhLgtd').value});
			data.push({name:'rvMhLttd',value:diag.innerFrame.contentWindow.document.getElementById('rvMhLttd').value});
			data.push({name:'tp',value:1});
			commonUtils.post(WEB_ROOT+"/data/fill/insertDataFillRiver",data,false,"保存");
			if(commonUtils.flag){	
				diag.close();
				$('#fillTab').datagrid('reload'); 
			}
		};
		diag.show();
	});
	
});