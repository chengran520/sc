var mapViewEchart = {
	initChart:function(){
		this.chart = echarts.init(document.getElementById('initChart'));
		var date = this.funDate();
        var option = {
        	    title : {
        	        text: '当月河道巡检问题统计',
        	        left:260
        	    },
        	    tooltip : {
        	        trigger: 'item',
        	        formatter: "{a} <br/>{b} : {c} ({d}%)"
        	    },
        	    color:['#4e72b8','#585eaa','#d93a49','#2b6447','#1d953f','#ea66a6','#f47920','#2a5caa','#b7ba6b'],
        	    legend: {
        	        orient: 'vertical',
        	        left: 'left',
        	        data: ['河面、河岸','污泥','河水异味','河水颜色','河道排污','涉水违建','破坏水生态','河长公示牌','其他']
        	    },
        	    series : [
        	        {
        	            name: '巡检结果',
        	            type: 'pie',
        	            radius : '65%',
        	            center: ['65%', '60%'],
        	            data:[
        	                {value:10, name:'河面、河岸'},
        	                {value:1, name:'污泥'},
        	                {value:5, name:'河水异味'},
        	                {value:5, name:'河道排污'},
        	                {value:1, name:'涉水违建'},
        	                {value:2, name:'破坏水生态'},
        	                {value:4, name:'河长公示牌'},
        	                {value:5, name:'河水颜色'},
        	                {value:6, name:'其他'}
        	            ],
        	            itemStyle: {
        	                emphasis: {
        	                    shadowBlur: 10,
        	                    shadowOffsetX: 0,
        	                    shadowColor: 'rgba(0, 0, 0, 0.5)'
        	                }
        	            }
        	        }
        	    ]
        	};
        // 为echarts对象加载数据 
       this.chart.setOption(option);
	},
	initChartWater:function(listData,id){
		this.charts = echarts.init(document.getElementById('initChartWater'));
		var showData = [];
		if(listData.length > 0 ){
			 $(listData).each(function(){
			    var objs = $(this)[0];
			    for(var key in objs){
			        if(key === id){
			        	showData.push(objs[key]);
			        }
			    }
			 });
		}
		var option = {
			    tooltip : {
			        trigger: 'axis',
			        axisPointer: {
			            type: 'cross',
			            label: {
			                backgroundColor: '#6a7985'
			            }
			        }
			    },
			    grid: {
			        left: '3%',
			        right: '4%',
			        bottom: '0',
			        top:'10%',
			        containLabel: true
			    },
			    xAxis : [
			        {
			            type : 'category',
			            boundaryGap : false,
			            data : ['07-01','07-02','07-03','07-04','07-05','07-06','07-07'],
			        }
			    ],
			    yAxis : [
			        {
			            type : 'value',
			            offset:10,
			            axisLine:{
			            	lineStyle:{
			                width:15,
			                color: {
							    type: 'linear',
							    x: 0,
							    y: 0,
							    x2: 0,
							    y2: 1,
							    colorStops: [{
							        offset: 0, color: '#ffc30c' // 0% 处的颜色
							    }, {
							        offset: 1, color: '#12c7f9' // 100% 处的颜色
							    }],
							    globalCoord: true // 缺 为 false
			                		}
					            }
					        }
			        }
			     
			    ],
			    series : [
			        {
			            name:id,
			            type:'line',
			            areaStyle: {normal: { color:'#badee2'}},
			            itemStyle:{
			            	normal:{
			            		borderColor:'#218868',	
			            	}
			            },
			            lineStyle:{
			            	normal:{
			            		color:'#63B8FF'
			            	}
			            },
			            data:showData
			        }
			    ]
			};
              
		 this.charts.setOption(option);
	},
	initChartPptn:function(){
		var myChart = echarts.init(document.getElementById('initChartPptn'));
		var date=formatter_date_utils.getHour(6);
		var option = {
			title: {
                text: '未来六小时最大雨量水位预测站',
                x:'center'
            },
			tooltip: {
	        trigger: 'axis',
	        axisPointer: {
	            type: 'cross',
	            crossStyle: {
	                color: '#999'
	            }
	        }
		    },
		    grid:{
		    	y2:25
		    },
		   
		    legend: {
		    	show:false,
		        data:['蒸发量','降水量','平均温度']
		    },
		    xAxis: [
		        {
		            type: 'category',
		            data: date,
		            axisPointer: {
		                type: 'line'
		            }
		        }
		    ],
		    yAxis: [
		        {
		            type: 'value',
		            name: '雨量',
		            min: 0,
		            axisLabel: {
		                formatter: '{value} mm'
		            }
		        },
		        {
		            type: 'value',
		            name: '水位',
		            min: 0,
		            axisLabel: {
		                formatter: '{value} m'
		            }
		        }
		    ],
		    series: [
		        {
		            name:'湍河8号雨量站',
		            type:'bar',
		            barWidth : 20,//柱图宽度
		            data:[2.0, 4.9, 7.0, 23.2, 25.6,22.4],
		            itemStyle:{
		            	normal:{
		            		color:'#33a3dc'
		            	}
		            }
		        },
		        {
		            name:'湍河7号水位站',
		            type:'line',
		            yAxisIndex: 1,
		            data:[2.0, 2.2, 3.3, 4.5, 6.3, 10.2],
		            itemStyle:{
		            	normal:{
		            		color:'#585eaa'
		            	}
		            },
//		            markLine: {
//		                data: [
//		                    [{
//		                        symbol: 'none',
//		                        x: '20%',
//		                        yAxis: 'max'
//		                    }, {
//		                        symbol: 'circle',
//		                        label: {
//		                            normal: {
//		                                position: 'start',
//		                                formatter: '警戒水位'
//		                            }
//		                        },
//		                        type: 'max',
//		                        name: '最高点'
//		                    }],
//		                    [{
//		                        symbol: 'none',
//		                        x: '80%',
//		                        yAxis: 'max'
//		                    }, {
//		                        symbol: 'circle',
//		                        label: {
//		                            normal: {
//		                                position: 'start',
//		                                formatter: '保证水位'
//		                            }
//		                        },
//		                        type: 'max',
//		                        name: '最高点'
//		                    }]
//		                ]
//		            }
		        }
		    ]
		};
		myChart.setOption(option);
		//var myChart = echarts.init(document.getElementById('main'));
//	      myChart.showLoading();
//
//	      $.get('json/HK.json',
//	            function(geoJson) {
//
//	              myChart.hideLoading();
//
//	              echarts.registerMap('HK', geoJson);
//
//	              myChart.setOption(option = {
//	                title: {
//	                  text: '  石城市各县最大降雨分布图',
//	                },
//	                tooltip: {
//	                  trigger: 'item',
//	                  formatter: '{b}<br/>{c} (p / km2)'
//	                },
//	                toolbox: {
//	                  show: true,
//	                  orient: 'vertical',
//	                  left: 'right',
//	                  top: 'center',
//	                  feature: {
//	                    dataView: {
//	                      readOnly: false
//	                    },
//	                    restore: {},
//	                    saveAsImage: {}
//	                  }
//	                },
//	                visualMap: {
//	                  min: 800,
//	                  max: 50000,
//	                  text: ['High', 'Low'],
//	                  realtime: false,
//	                  calculable: true,
//	                  color: ['orangered', 'yellow', 'lightskyblue']
//	                },
//	                series: [{
//	                  name: '香港18区人口密度',
//	                  type: 'map',
//	                  mapType: 'HK',
//	                  // 自定义扩展图表类型
//	                  itemStyle: {
//	                    normal: {
//	                      label: {
//	                        show: true
//	                      }
//	                    },
//	                    emphasis: {
//	                      label: {
//	                        show: true
//	                      }
//	                    }
//	                  },
//	                  data: [{
//	                    name: '中西区',
//	                    value: 20057.34
//	                  },
//	                  {
//	                    name: '湾仔',
//	                    value: 15477.48
//	                  },
//	                  {
//	                    name: '东区',
//	                    value: 31686.1
//	                  },
//	                  {
//	                    name: '南区',
//	                    value: 6992.6
//	                  },
//	                  {
//	                    name: '油尖旺',
//	                    value: 44045.49
//	                  },
//	                  {
//	                    name: '深水埗',
//	                    value: 40689.64
//	                  },
//	                  {
//	                    name: '九龙城',
//	                    value: 37659.78
//	                  },
//	                  {
//	                    name: '黄大仙',
//	                    value: 45180.97
//	                  },
//	                  {
//	                    name: '观塘',
//	                    value: 55204.26
//	                  },
//	                  {
//	                    name: '葵青',
//	                    value: 21900.9
//	                  },
//	                  {
//	                    name: '荃湾',
//	                    value: 4918.26
//	                  },
//	                  {
//	                    name: '屯门',
//	                    value: 5881.84
//	                  },
//	                  {
//	                    name: '元朗',
//	                    value: 4178.01
//	                  },
//	                  {
//	                    name: '北区',
//	                    value: 2227.92
//	                  },
//	                  {
//	                    name: '大埔',
//	                    value: 2180.98
//	                  },
//	                  {
//	                    name: '沙田',
//	                    value: 9172.94
//	                  },
//	                  {
//	                    name: '西贡',
//	                    value: 3368
//	                  },
//	                  {
//	                    name: '离岛',
//	                    value: 806.98
//	                  }],
//	                  // 自定义名称映射
//	                  nameMap: {
//	                    'Central and Western': '中西区',
//	                    'Eastern': '东区',
//	                    'Islands': '离岛',
//	                    'Kowloon City': '九龙城',
//	                    'Kwai Tsing': '葵青',
//	                    'Kwun Tong': '观塘',
//	                    'North': '北区',
//	                    'Sai Kung': '西贡',
//	                    'Sha Tin': '沙田',
//	                    'Sham Shui Po': '深水埗',
//	                    'Southern': '南区',
//	                    'Tai Po': '大埔',
//	                    'Tsuen Wan': '荃湾',
//	                    'Tuen Mun': '屯门',
//	                    'Wan Chai': '湾仔',
//	                    'Wong Tai Sin': '黄大仙',
//	                    'Yau Tsim Mong': '油尖旺',
//	                    'Yuen Long': '元朗'
//	                  }
//	                }]
//	              });
//	            });
		
	},
	funDate:function(){
		var date = new Date();
        var seperator1 = "/";
        var seperator2 = ":";
        var month = date.getMonth() + 1;
        var strDate = date.getDate();
        var houres = date.getHours();
        var minutes = date.getMinutes();
        var seconds =  date.getSeconds();
        if (month >= 1 && month <= 9) {
            month = "0" + month;
        }
        if (strDate >= 0 && strDate <= 9) {
            strDate = "0" + strDate;
        }
        if(houres >= 0 && houres <= 9){
            houres = "0"+houres;
        }
        if(minutes >= 0 && minutes <= 9){
            minutes ="0"+minutes;
        }
        if(seconds >= 0 && seconds <= 9){
            seconds ="0"+seconds;
        }
        var nDate = date.getFullYear() + seperator1 + month + seperator1 + strDate
        + " " + houres + seperator2 + minutes
        + seperator2 + seconds;
        return nDate;
	}
}