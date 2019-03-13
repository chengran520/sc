$(function(){
	var myChart = echarts.init(document.getElementById('pie'));
	
	var option = {
			backgroundColor: '#eee',
		    series : [
		        {
		            name: '访问来源',
		            type: 'pie',
		            radius : '70%',
		            center: ['50%', '55%'],
		            data:[
		                {value:300, name:'已使用'},
		                {value:30, name:'未使用'}
		            ],
		            itemStyle: {
		                emphasis: {
		                    shadowBlur: 10,
		                    shadowOffsetX: 0,
		                    shadowColor: 'rgba(0, 0, 0, 0.5)'
		                }
		            }
		        }
		    ],
		    color: ['#B6A3DF','#57D1D3']
		};
	 myChart.setOption(option);
});