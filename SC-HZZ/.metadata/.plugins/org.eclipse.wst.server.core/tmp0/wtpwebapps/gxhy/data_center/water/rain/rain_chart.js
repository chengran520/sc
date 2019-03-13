var rainChartMap = {
		initRainChart:function(data,stnm){
			 var myChart = echarts.init(document.getElementById('initRainInfoChart'));
		     //var dateArray=formatter_date_utils.getyouHours(24);
		     var zlist = [];
		     var datax = [];
		     if(data != null && data.length > 0){
		    	 for(var i = 0 ;i < data.length ;i++){
		    		 zlist.push(data[i].drp);
		    		 datax.push(formatter_date_utils.formatterStrTime(data[i].tm,null,5));
		    	 }
		     }
		     var colors = ['#da70d6','#6495ED'];
		     var option = {
		    		 title : {
				         text : (stnm == undefined ? "" :stnm.trim()) +' 近24小时雨量变化图',
				         x : 20,
				         textStyle: {
				             color: '#008B45',
				             fontSize: 14
				         }
				     },
				     color: colors,
				     grid: {
			                left: '3%',
			                right: '4%',
			                bottom: '13%',
			                containLabel: true
			             },
				     toolbox: {
	    		         feature: {
	    		             restore: {show: true},
	    		             saveAsImage: {show: true}
	    		         }
	    		     },
				     tooltip : {
				         trigger : 'axis',
				         formatter: function(params) {
				             var texts = "";
				             for (var i = 0; i < params.length; i++) {
				            	 if (i == 0) {
				            		 texts += params[i].name + "<br>";
				            	 }
				            	 texts += params[i].marker + params[i].seriesName + ": " + params[i].value + "mm" + "<br>";
				             }
				             return texts;
				         }
				     },
				     legend  : {
				         x : 'center',
				         top : '11%',
				         textStyle : {
				             color : '#90979c',
				         },
				         data : ['雨量']
				     },
				     calculable : true,
				     xAxis : [{
				         type : "category",
				         splitLine : {
				             show : false
				         },
				         axisTick : {
				             show : false
				         },
				         splitArea : {
				             show : false
				         },
				         data : datax,
				     }],
				     yAxis : [{
				         type : "value",
				         name: '雨量(mm)',
				         axisLine : {
				             lineStyle: {
				                 color: '#0099FF'
				             }
				         },
				         axisTick : {
				             show : false
				         },
				         axisLabel : {
				             interval : 0,
				         },
				         splitArea : {
				             show : false
				         }
				     }],
				     dataZoom : [{
				         show : true,
				         height : 20,
				         xAxisIndex : [
				             0
				         ],
				         bottom: 5,
				         start : 20,
				         end : 80,
				         handleIcon: 'path://M306.1,413c0,2.2-1.8,4-4,4h-59.8c-2.2,0-4-1.8-4-4V200.8c0-2.2,1.8-4,4-4h59.8c2.2,0,4,1.8,4,4V413z',
				         handleSize: '110%',
				         fillerColor: 'rgba(160,160,160,1)',
				         handleStyle: {
				             color: "#d3dee5",
				         },
				         borderColor: "#90979c",
				     }, {
				         type : "inside",
				         show : true,
				         height : 15,
				         start : 1,
				         end : 35
				     }],
				     series : [{
				             name : "雨量",
				             type: "bar",
				             barMaxWidth : 30,
				             barGap : "10%",
				             itemStyle : {
				                 normal : {
				                     color : "rgba(87,176,228,1)",
				                     label : {
				                         show : true,
				                         textStyle : {
				                             color : "#fff"
				                         },
				                         position : "insideTop",
				                         formatter : function(p) {
				                             return p.value > 0 ? (p.value) : '';
				                         }
				                     }
				                 }
				             },
				             data : zlist
				         }]
				     }
		     myChart.setOption(option);
			}
	}

