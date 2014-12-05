$( document ).ready(function() {
	var data = '{"ReqNoReqTypeRespTime":[[1,1,52.918],[2,1,60.186],[3,1,64.915],[4,1,71.745],[5,1,77.06],[6,1,86.008],[7,2,43.953],[8,2,45.258],[9,2,48.315],[10,2,49.774],[11,2,52.579],[12,2,52.114]]}';
	var obj = JSON.parse(data);

	function getResponseTimeGraph()
	{
		var honeyBeeRequestType1=[];
		var honeyBeeRequestType2=[];
		var honeyBeeRequestType3=[];
		var honeyBeeRequestType1No=[];
		var honeyBeeRequestType2No=[];
		var honeyBeeRequestType3No=[];
		var hR1=0,hR2=0,hR3=0;
		
		for(var i=0;i<obj.ReqNoReqTypeRespTime.length;i++)
		{
			if(obj.ReqNoReqTypeRespTime[i][1] == 1)
			{
				honeyBeeRequestType1No.push(hR1);
				hR1++;
				honeyBeeRequestType1.push(obj.ReqNoReqTypeRespTime[i][2]);
			}

			if(obj.ReqNoReqTypeRespTime[i][1] == 2)
			{
				honeyBeeRequestType1No.push(hR2);
				hR2++;
				honeyBeeRequestType2.push(obj.ReqNoReqTypeRespTime[i][2]);
			}

			if(obj.ReqNoReqTypeRespTime[i][1] == 3)
			{
				honeyBeeRequestType1No.push(hR3);
				hR3++;
				honeyBeeRequestType3.push(obj.ReqNoReqTypeRespTime[i][2]);
			}
		}
		$('#container1').highcharts({
			title: {
				text: 'Response Time Comparison',
				x: -20 //center
			},

			subtitle: {
				text: 'Request Type 1',
				x: -20
			},

			xAxis: {
				categories: honeyBeeRequestType1No
			},
			yAxis: {
				title: {
					text: 'Response Time(Seconds)'
				},
				plotLines: [{
					value: 0,
					width: 1,
					color: '#808080'
				}]
			},
			tooltip: {
				valueSuffix: 'sec'
			},
			legend: {
				layout: 'vertical',
				align: 'right',
				verticalAlign: 'middle',
				borderWidth: 0
			},
			series: [{
				name: 'HoneyBeeAlgorithm',
				data: honeyBeeRequestType1
			}/*, {
				name: 'HoneyBee Algorithm',
				data: [-0.2, 0.8, 5.7, 11.3, 17.0, 22.0, 24.8, 24.1, 20.1, 14.1, 8.6, 2.5]
			}, {
				name: 'PSO Algorithm',
				data: [-0.9, 0.6, 3.5, 8.4, 13.5, 17.0, 18.6, 17.9, 14.3, 9.0, 3.9, 1.0]
			}, {
				name: 'Location Aware Algorithm',
				data: [3.9, 4.2, 5.7, 8.5, 11.9, 15.2, 17.0, 16.6, 14.2, 10.3, 6.6, 4.8]
			}*/]
		});

		$('#container2').highcharts({
			title: {
				text: 'Response Time Comparison',
				x: -20 //center
			},

			subtitle: {
				text: 'Request Type 2',
				x: -20
			},
			xAxis: {
				categories: honeyBeeRequestType2No
			},
			yAxis: {
				title: {
					text: 'Response Time(Seconds)'
				},
				plotLines: [{
					value: 0,
					width: 1,
					color: '#808080'
				}]
			},
			tooltip: {
				valueSuffix: 'sec'
			},
			legend: {
				layout: 'vertical',
				align: 'right',
				verticalAlign: 'middle',
				borderWidth: 0
			},
			series: [{
				name: 'HoneyBeeAlgorithm',
				data: honeyBeeRequestType2
			}/*, {
				name: 'HoneyBee Algorithm',
				data: [-0.2, 0.8, 5.7, 11.3, 17.0, 22.0, 24.8, 24.1, 20.1, 14.1, 8.6, 2.5]
			}, {
				name: 'PSO Algorithm',
				data: [-0.9, 0.6, 3.5, 8.4, 13.5, 17.0, 18.6, 17.9, 14.3, 9.0, 3.9, 1.0]
			}, {
				name: 'Location Aware Algorithm',
				data: [3.9, 4.2, 5.7, 8.5, 11.9, 15.2, 17.0, 16.6, 14.2, 10.3, 6.6, 4.8]
			}*/]
		});

		$('#container3').highcharts({
			title: {
				text: 'Response Time Comparison',
				x: -20 //center
			},
			subtitle: {
				text: 'Request Type 3',
				x: -20
			},
			xAxis: {
				categories: honeyBeeRequestType3No
			},
			yAxis: {
				title: {
					text: 'Response Time(Seconds)'
				},
				plotLines: [{
					value: 0,
					width: 1,
					color: '#808080'
				}]
			},
			tooltip: {
				valueSuffix: 'sec'
			},
			legend: {
				layout: 'vertical',
				align: 'right',
				verticalAlign: 'middle',
				borderWidth: 0
			},
			series: [{
				name: 'HoneyBeeAlgorithm',
				data: honeyBeeRequestType3
			}/*, {
				name: 'HoneyBee Algorithm',
				data: [-0.2, 0.8, 5.7, 11.3, 17.0, 22.0, 24.8, 24.1, 20.1, 14.1, 8.6, 2.5]
			}, {
				name: 'PSO Algorithm',
				data: [-0.9, 0.6, 3.5, 8.4, 13.5, 17.0, 18.6, 17.9, 14.3, 9.0, 3.9, 1.0]
			}, {
				name: 'Location Aware Algorithm',
				data: [3.9, 4.2, 5.7, 8.5, 11.9, 15.2, 17.0, 16.6, 14.2, 10.3, 6.6, 4.8]
			}*/]
		});
	}
	

	function getLocationGraph()
	{
		
	}


	$("#getGraphs").click(function()
			{
		getResponseTimeGraph();
		/*	getLocationGraph();
		getAvgResponseTimeGraph();*/

			});

});
