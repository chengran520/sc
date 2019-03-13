var rankChartMap = {
	initChart:function(data){
		this.chart = echarts.init(document.getElementById('initRankChart'));
		var lData = [];
		var sDatas = [];
		if(data.length > 0){
			for(var i =0 ;i<data.length;i++){
				var sData = {};
				lData.push(data[i].rvNm);
				sData.value=data[i].val;
				sData.name=data[i].rvNm;
				sDatas.push(sData);
			}
		}
		var option = {
			 title : {
			        text: '投诉类型统计',
			        x:'center'
			    },
			    tooltip : {
			        trigger: 'item',
			        formatter: "{a} <br/>{b} : {c} 次  ({d}%)"
			    },
			    color:['#585eaa','#d93a49','#9c28b1','#1d953f','#ea66a6','#8cc34b','#fdc106','#03a9f5'],
			    legend: {
			        orient: 'vertical',
			        left: 'left',
			        data: lData
			    },
			    series : [
			        {
			            name: '投诉类型统计',
			            type: 'pie',
			            radius : '55%',
			            center: ['50%', '60%'],
			            data:sDatas,
			            itemStyle: {
			                emphasis: {
			                    shadowBlur: 10,
			                    shadowOffsetX: 0,
			                    shadowColor: 'rgba(0, 0, 0, 0.5)'
			                }
			            }
			        }
			    ]
		}
		this.chart.setOption(option);
	},
	initChart2:function(data,rvData){
		this.chart = echarts.init(document.getElementById('initRankChart2'));
		var option = {
		    tooltip: {
		        trigger: 'axis',
		        formatter: function (params) {
		            params = params[0];
		            return params.name+" 处理率:"+params.value+"%";
		        }
		    },
		    title: {
		        left: 'center',
		        text: '投诉处理率分析',
		    },
		    xAxis: {
		        type: 'category',
		        boundaryGap: false,
		        data: rvData
		    },
		    grid:{
		    	x2:78
		    },
		    yAxis: {
		        type: 'value',
		        boundaryGap: true,
		        splitNumber:6
		    },
		    dataZoom: [{
		        start: 0,
		        end: 100
		    }],
		    series: [
		        {
		            name:'处理率',
		            type:'line',
		            itemStyle: {
		                normal: {
		                    color: 'rgb(101, 190, 234)'
		                }
		            },
					markPoint: {
						data: [
							{type: 'max', name: '最大值'}
						]
					},
					areaStyle: {
						normal: {
							color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
								offset: 0,
								color: 'rgb(214, 240,253)'
							}, {
								offset: 1,
								color: 'rgb(241, 253, 253)'
							}])
						}
					},
		            data: data
		        }
		    ]
		}
		this.chart.setOption(option);
	}
}