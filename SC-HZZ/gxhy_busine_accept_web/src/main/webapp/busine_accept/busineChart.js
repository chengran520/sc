var busineMapChart = {
	initChart:function(result){
		this.chart = echarts.init(document.getElementById('initChartsj'));
		var dates="";
		var list=null;
		var option={
				title: {
			        text: '近一周处理业务统计',
			        x:'center'
			    },
			 	color: ['#3398DB'],
			    tooltip : {
			        trigger: 'axis',
			        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
			            type : 'line'        // 默认为直线，可选为：'line' | 'shadow'
			        },
			        formatter: "{a} <br/>{b} : {c} 件"
			    },
			    grid: {
			        left: '3%',
			        right: '4%',
			        bottom: '3%',
			        containLabel: true
			    },
			    xAxis : [
			        {
			            type : 'category',
			            data :dates,
			            axisTick: {
			                alignWithLabel: true
			            }
			        }
			    ],
			    yAxis : [
			        {
			            type : 'value',
			            max: 10
			        }
			    ],
			    series : [
			        {
			            name:'处理事件',
			            type:'bar',
			            barWidth: '20%',
			            data:list,
			            itemStyle:{
			            	normal:{
			            		color:'#3cb371'
			            	}
			            }
//			            itemStyle: {   
//			                //通常情况下：
//			                normal:{  
//			　　　　　　　　　　　　//每个柱子的颜色即为colorList数组里的每一项，如果柱子数目多于colorList的长度，则柱子颜色循环使用该数组
//			                    color: function (params){
//			                        var colorList = ['#60db46','#6e45d4','#dc47d7','#dd4748','#A2CD5A','#3cb371','#ffa500'];
//			                        return colorList[params.dataIndex];
//			                    }
//			                }
//			            }
			        }
			    ]
		}
		 this.chart.setOption(option);
	},
	initChartZf:function(resul){
		this.chart = echarts.init(document.getElementById('initChartzf'));
		var  dateArray=null;
		var list1=null;
		var list2=null;
		var list3=null;
		var option = {
				title: {
			        text: '近一周处理业务统计对比'
			    },
			    tooltip: {
			        trigger: 'axis',
			    },
			    legend: {
			        data:['其他事件','执法监管','文案文件']
			    },
			    grid: {
			        left: '3%',
			        right: '4%',
			        bottom: '3%',
			        containLabel: true
			    },
			    xAxis: {
			        type: 'category',
			        boundaryGap: false,
			        data : dateArray,
			    },
			    yAxis: {
			        type: 'value',
			        max: 10
			    },
			    series: [
			        {
			            name:'其他事件',
			            type:'line',
			            data:list1,
			            itemStyle:{
			            	normal:{
			            		color:'#00FF00'
			            	}
			            }
			        },
			        {
			            name:'执法监管',
			            type:'line',
			            data:list2,
			            itemStyle:{
			            	normal:{
			            		color:'#00BFFF'
			            	}
			            }
			        },
			        {
			            name:'文案文件',
			            type:'line',
			            data:list3,
			            itemStyle:{
			            	normal:{
			            		color:'#FF69B4'
			            	}
			            }
			        }

			    ]
		}
		 this.chart.setOption(option);
	}
}