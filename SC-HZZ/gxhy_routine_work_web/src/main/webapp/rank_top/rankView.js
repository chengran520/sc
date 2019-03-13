var rankViewMap = {
	tbData:null,
	data:[],
	rvData:[],
	tpData:null,
	loadData:function(key){
		var data = {sortKey:key}
		var reulst = commonUtils.get(WEB_ROOT+"/rank/top/getRankTopAll",data,false);
		if(reulst.flag){
			this.tpData = reulst.data.tpCount;
			this.tbData = reulst.data.data;
			this.showCountData(reulst.data.count);
			this.showData(this.tbData);
		}
	},
	showCountData:function(data){
		if(data.length > 0){
			$(".count_lab").html(data[0].val+"次");
			$(".colse_lab").html(data[1].val+"次");
			$(".not_lab").html(data[2].val+"次");
		}
	},
	showData:function(datas){
		var html = "";
		this.data=[];
		this.rvData=[];
		if(datas.length>0){
			for(var i = 0 ;i < datas.length;i++){
				var num = '100%';
				datas[i].num = 100;
				if(datas[i].countNum != 0){
					var val = Math.round(datas[i].colseNum / datas[i].countNum * 10000) / 100.00;
					datas[i].num = val;
					this.data.push(val);
					this.rvData.push(datas[i].rvNm);
					num = val + "%";
				}
				if(i % 2 == 0){
					html += "<tr class='gary'>";
				}else{
					html += "<tr>";
				}
				html +="<td>"+(i+1)+"</td>";
				html +="<td>"+datas[i].rvCd+"</td>";
				html +="<td>"+datas[i].rvNm+"</td>";
				html +="<td>"+datas[i].countNum+"</td>";
				html +="<td>"+datas[i].colseNum+"</td>";
				html +="<td>"+datas[i].notNum+"</td>";
				html +="<td>"+num+"</td>";
				html +="<td>"+formatter_date_utils.formatterStrTime(datas[i].tm)+"</td></tr>";
			}
		}else{
			html+="<tr class='gary'><td colspan='8'>暂无数据！</td></tr>";
		}
	
		$("#div_tab_tbody").html(html);
		rankChartMap.initChart(this.tpData);
		rankChartMap.initChart2(this.data,this.rvData);
	},
	sortQuery:function(nm,sort){
		 this.tbData.sort(function(a,b){
			if(sort == 1){
				if(nm == 'tsl'){
					return a.countNum-b.countNum
				}
				if(nm == 'wyd'){
					return a.num-b.num
				}
				if(nm == 'wcl'){
					return a.notNum-b.notNum
				}
				if(nm == 'ycl'){
					return a.colseNum-b.colseNum
				}
			}else{
				if(nm == 'tsl'){
					return b.countNum-a.countNum
				}
				if(nm == 'wyd'){
					return b.num-a.num
				}
				if(nm == 'wcl'){
					return b.notNum-a.notNum
				}
				if(nm == 'ycl'){
					return b.colseNum-a.colseNum
				}
			}
	     });
		this.showData(this.tbData);
	}
}
$(function(){
	rankViewMap.loadData("countNum");
	$(".sort_th").on("click",function(){
		var active = $(this).hasClass("active");
		var icls = $(this).find("a").find("i").hasClass("fa-long-arrow-down");
		var id = $(this).find("a").attr("id");
		var sort = 1;
		if(!active){
			$(this).addClass('active').siblings().removeClass("active");
		}
		if(icls){
			$(this).find("a").find("i").addClass('fa-long-arrow-up').removeClass("fa-long-arrow-down");
			sort = 0;
		}else{
			$(this).find("a").find("i").addClass('fa-long-arrow-down').removeClass("fa-long-arrow-up");
		}
		rankViewMap.sortQuery(id,sort);
	})
});