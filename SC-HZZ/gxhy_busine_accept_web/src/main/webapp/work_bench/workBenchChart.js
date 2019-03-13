var busineMapChart = {
	initChart:function(result){
		var resultData;
		if(result != null){
			resultData = result;
		}
		this.chart = echarts.init(document.getElementById('initChartsj'));
		var option={
		    color: ['#FF69B4'],
		    tooltip : {
		        trigger: 'axis',
		        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
		            type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
		        }
		    },
		    legend: {
		        data:['上报数量']
		    },
		    grid:{
		    	left: '3%',
		        right: '4%',
		        top: 30,
		        bottom: '3%',
		        containLabel: true
            },
		    xAxis : [
		        {
		            type : 'category',
		            data :resultData.array2,
		            axisTick: {
		                alignWithLabel: true
		            }
		        }
		    ],
		    yAxis : [
		        {
		            type : 'value',
		            interval: 5,
		            name: '单位(件)',
		        }
		    ],
		    series : [
		        {
		            name:'上报数量',
		            type:'bar',
		            barWidth: '60%',
		            center: ['50%', '50%'],
		            data:resultData.array1
		        }
		    ]
		}
		 this.chart.setOption(option);
	},
	
	
	initChartZf:function(resul){
		var resultData,positionCenter;
		if(resul != null){
			resultData = resul;
		}
		var winWidth = $(window).width();
		if(winWidth > 1466){
			positionCenter = ['55%', '55%']
		}else{
			positionCenter = ['70%', '50%']
		}
		this.chart = echarts.init(document.getElementById('initChartzf'));
		var option = {
		    tooltip : {
		        trigger: 'item',
		        formatter: "{a} <br/>{b} : {c} 起  ({d}%)"
		    },
		    color:['#FF8C00','#FF83FA','#F08080','#D2691E','#CDCD00','#CD950C','#CD6839','#CD1076','#CD0000','#7EC0EE','#66CD00','#595959','#548B54','#4876FF','#388E8E'],
		    legend: {
		        orient: 'vertical',
		        x: 'left',
		        itemWidth: 10,
		        itemHeight: 5,
		        itemGap: 1,
		        textStyle: {
		            fontSize: 10,
		        },
		        data:['存在侵占水域',"存在围垦湖泊","非法捕捞", "非法采砂","非法养殖",'河岸垃圾','河道排污','河道侵占','河底污泥','河水颜色','漂浮物','破坏岸线','其它','涉水违建','污水偷排']
		    },
		    series : [
		        {
		            name: '投诉问题',
		            type: 'pie',
		            radius : '55%',
		            center:positionCenter,
		            data:resultData.array,
		            labelLine:{  
		                normal:{  
		                    length:3  
		                }  
		            },  
		           /* itemStyle: {
		                emphasis: {
		                    shadowBlur: 10,
		                    shadowOffsetX: 0,
		                    shadowColor: 'rgba(0, 0, 0, 0.5)'
		                }
		            }*/
		        }
		    ]
		}
		 this.chart.setOption(option);
	},
	initCharttf:function(result){
		var resultData;
		if(result != null){
			resultData = result;
		}
		this.chart = echarts.init(document.getElementById('initCharttf'));
		var a=resultData.models[0];
		var b=resultData.models[1];
		var rate=a/b*100;
		var ra=rate.toFixed(1);
		var option = {
			  tooltip : {
			        formatter: "{a} <br/>{b} : {c}%"
			    },
			    grid:{
			    	left: '3%',
			        right: '4%',
			        bottom: 5,
			        containLabel: true
	            },
			    series: [
			        {
			            name: '业务指标',
			            type: 'gauge',
			            textStyle : {
			            	fontWeight : 'normal',
			            	fontSize : 15
		            	},
			            detail: {formatter:'{value}%'},
			            data: [{value: ra, name: '完成率'}]
			        }
			    ]
		}
		this.chart.setOption(option,true);
	},
	
	//事件来源分布图
	initChartSource:function(result){
		var resultData;
		if(result != null){
			resultData = result;
		}
		this.chart = echarts.init(document.getElementById('initChartdf'));
		console.log(JSON.stringify(result));
		var option = {
		    backgroundColor:'#fff',
		    tooltip: {
		        trigger: 'item',
		        formatter: "{a} <br/>{b}: {c} ({d}%)",

		    },
		    legend: {
		        left:10,
		        top:20,
		        data:['事件来源'],
		                textStyle: {
		            color: '#000'
		        }
		    },
		    series: [		         
		        {
		        	name: '事件来源',
		            type:'pie',
		            radius : '55%',
		            center: ['50%', '50%'],
		            color: ['#e72325', '#98e002', '#2ca3fd'],
		            label: {
		                normal: {
		                    formatter: '{b}\n{d}%'
		                },
		          
		            },
		            data:resultData
		            
		        }
		    ]
		};
		this.chart.setOption(option);
	}
}