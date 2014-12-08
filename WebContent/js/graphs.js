var globalurl ="http://localhost:8080/LoadBalancer/graphs/";

$( document ).ready(function() {
	//var responseData = '{"ReqNoReqTypeRespTime":[[1,1,52.918],[2,1,60.186],[3,1,64.915],[4,1,71.745],[5,1,77.06],[6,1,86.008],[7,2,43.953],[8,2,45.258],[9,2,48.315],[10,2,49.774],[11,2,52.579],[12,2,52.114]]}';
	//var obj = JSON.parse(responseData);



	var locationData = '{"ReqNoReqTypeLoc":[[1,1,4],[2,1,6],[3,1,6],[4,2,6],[5,2,6],[6,2,6]]}';
	var obj1 = JSON.parse(locationData);

	var avgResponseData = '{"LocReqTypeAvgResTime":[[4,1,38.778],[6,1,45.389],[6,2,28.598333333333333]]}';
	var obj2 = JSON.parse(avgResponseData);


	function plotAvgResponseTimeGraph(obj)
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

		$('#reponseTimeGraph1').highcharts({
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

		$('#reponseTimeGraph2').highcharts({
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


		$('#reponseTimeGraph3').highcharts({
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


	function getResponseTimeGraph()
	{
		var url = globalurl+"reqNoReqTypeRespTime?algoIdentifier=1";
		//alert(url);
		$.ajax({
			type: "GET",
			url: url,
			async:false,
			success: function(msg){
				//alert(msg);
				var obj = jQuery.parseJSON( ''+ msg +'' );
				plotAvgResponseTimeGraph(obj);

			},
			error: function () {
				alert("Error");
			}
		});

	}

	function plotLocationGraph(obj1,obj2,obj3,obj4)
	{
		//honeybee
		var honeyBeeRequestType1=[];
		var honeyBeeRequestType2=[];
		var honeyBeeRequestType3=[];
		var honeyBeeRequestType1No=[];
		var honeyBeeRequestType2No=[];
		var honeyBeeRequestType3No=[];
		var hR1=1,hR2=1,hR3=1;
		for(var i=0;i<obj1.ReqNoReqTypeLoc.length;i++)
		{
			if(obj1.ReqNoReqTypeLoc[i][1] == 1)
			{
				honeyBeeRequestType1No.push(hR1);
				hR1++;
				honeyBeeRequestType1.push(obj1.ReqNoReqTypeLoc[i][2]);
			}

			if(obj1.ReqNoReqTypeLoc[i][1] == 2)
			{
				honeyBeeRequestType2No.push(hR2);
				hR2++;
				honeyBeeRequestType2.push(obj1.ReqNoReqTypeLoc[i][2]);
			}

			if(obj1.ReqNoReqTypeLoc[i][1] == 3)
			{
				honeyBeeRequestType3No.push(hR3);
				hR3++;
				honeyBeeRequestType3.push(obj1.ReqNoReqTypeLoc[i][2]);
			}
		}

		//ant 
		var antRequestType1=[];
		var antRequestType2=[];
		var antRequestType3=[];
		var antRequestType1No=[];
		var antRequestType2No=[];
		var antRequestType3No=[];
		var ant1=1,ant2=1,ant3=1;
		for(var i=0;i<obj2.ReqNoReqTypeLoc.length;i++)
		{
			if(obj2.ReqNoReqTypeLoc[i][1] == 1)
			{
				antRequestType1No.push(ant1);
				ant1++;
				antRequestType1.push(obj2.ReqNoReqTypeLoc[i][2]);
			}

			if(obj2.ReqNoReqTypeLoc[i][1] == 2)
			{
				antRequestType2No.push(ant2);
				ant2++;
				antRequestType2.push(obj2.ReqNoReqTypeLoc[i][2]);
			}

			if(obj2.ReqNoReqTypeLoc[i][1] == 3)
			{
				antRequestType3No.push(ant3);
				ant3++;
				antRequestType3.push(obj2.ReqNoReqTypeLoc[i][2]);
			}
		}



		//location
		var locationRequestType1=[];
		var locationRequestType2=[];
		var locationRequestType3=[];
		var locationRequestType1No=[];
		var locationRequestType2No=[];
		var locationRequestType3No=[];
		var location1=1,location2=1,location3=1;
		
		for(var i=0;i<obj3.ReqNoReqTypeLoc.length;i++)
		{
			if(obj3.ReqNoReqTypeLoc[i][1] == 1)
			{
				locationRequestType1No.push(location1);
				location1++;
				locationRequestType1.push(obj3.ReqNoReqTypeLoc[i][2]);
			}

			if(obj3.ReqNoReqTypeLoc[i][1] == 2)
			{
				locationRequestType2No.push(location2);
				location2++;
				locationRequestType2.push(obj3.ReqNoReqTypeLoc[i][2]);
			}

			if(obj3.ReqNoReqTypeLoc[i][1] == 3)
			{
				locationRequestType3No.push(location3);
				location3++;
				locationRequestType3.push(obj3.ReqNoReqTypeLoc[i][2]);
			}
		}

		//pso
		var psoRequestType1=[];
		var psoRequestType2=[];
		var psoRequestType3=[];
		var psoRequestType1No=[];
		var psoRequestType2No=[];
		var psoRequestType3No=[];
		var pso1=1,pso2=1,pso3=1;
		for(var i=0;i<obj4.ReqNoReqTypeLoc.length;i++)
		{
			if(obj4.ReqNoReqTypeLoc[i][1] == 1)
			{
				psoRequestType1No.push(pso1);
				pso1++;
				psoRequestType1.push(obj4.ReqNoReqTypeLoc[i][2]);
			}

			if(obj4.ReqNoReqTypeLoc[i][1] == 2)
			{
				psoRequestType2No.push(pso2);
				pso2++;
				psoRequestType2.push(obj4.ReqNoReqTypeLoc[i][2]);
			}

			if(obj4.ReqNoReqTypeLoc[i][1] == 3)
			{
				psoRequestType3No.push(pso3);
				pso3++;
				psoRequestType3.push(obj4.ReqNoReqTypeLoc[i][2]);
			}
		}

		
		//generate charts in div
		$('#locationGraph1').highcharts({
			title: {
				text: 'Location Based Comparison',
				x: -20 //center
			},

			subtitle: {
				text: 'Request Type 1',
				x: -20
			},

	
			yAxis: {
				title: {
					text: 'Location'
				},
				plotLines: [{
					value: 0,
					width: 1,
					color: '#808080'
				}]
			},

			legend: {
				layout: 'vertical',
				align: 'right',
				verticalAlign: 'middle',
				borderWidth: 0
			},
			series: [{
				name: 'HoneyBee Algorithm',
				data: honeyBeeRequestType1
			}, {
				name: 'Ant Algorithm',
				data: antRequestType1
			}, {
				name: 'Location Aware Algorithm',
				data: locationRequestType1
			}, {
				name: 'PSO Algorithm',
				data: psoRequestType1
			}]
		});
		
		
		$('#locationGraph2').highcharts({
			title: {
				text: 'Location Based Comparison',
				x: -20 //center
			},

			subtitle: {
				text: 'Request Type 2',
				x: -20
			},
			
			yAxis: {
				title: {
					text: 'Location'
				},
				plotLines: [{
					value: 0,
					width: 1,
					color: '#808080'
				}]
			},

			legend: {
				layout: 'vertical',
				align: 'right',
				verticalAlign: 'middle',
				borderWidth: 0
			},
			series: [{
				name: 'HoneyBee Algorithm',
				data: honeyBeeRequestType2
			}, {
				name: 'Ant Algorithm',
				data: antRequestType2
			}, {
				name: 'Location Aware Algorithm',
				data: locationRequestType2
			}, {
				name: 'PSO Algorithm',
				data: psoRequestType2
			}]
		});
		
		alert(locationRequestType3.length);
		$('#locationGraph3').highcharts({
			title: {
				text: 'Location Based Comparison',
				x: -20 //center
			},
			subtitle: {
				text: 'Request Type 3',
				x: -20
			},
			
			yAxis: {
				title: {
					text: 'Location'
				},
				plotLines: [{
					value: 0,
					width: 1,
					color: '#808080'
				}]
			},

			legend: {
				layout: 'vertical',
				align: 'right',
				verticalAlign: 'middle',
				borderWidth: 0
			},
			series: [{
				name: 'HoneyBee Algorithm',
				data: honeyBeeRequestType3
			}, {
				name: 'Ant Algorithm',
				data: antRequestType3
			}, {
				name: 'Location Aware Algorithm',
				data: locationRequestType3
			}, {
				name: 'PSO Algorithm',
				data: psoRequestType3
			}]
		});
	}

	function getLocationGraph()
	{
		var url = globalurl+"reqNoReqTypeLoc?algoIdentifier=";
		var obj1,obj2,obj3,obj4;
		//honeybee
		$.ajax({
			type: "GET",
			url: url+"1",
			async:false,
			success: function(msg){
				//alert(msg);
				obj1 = jQuery.parseJSON( ''+ msg +'' );
			},
			error: function () {
				alert("Error");
			}
		});

		//ant
		$.ajax({
			type: "GET",
			url: url+"2",
			async:false,
			success: function(msg){
				//alert(msg);
				obj2 = jQuery.parseJSON( ''+ msg +'' );
			},
			error: function () {
				alert("Error");
			}
		});


		//location aware
		$.ajax({
			type: "GET",
			url: url+"3",
			async:false,
			success: function(msg){
				//alert(msg);
				obj3 = jQuery.parseJSON( ''+ msg +'' );
			},
			error: function () {
				alert("Error");
			}
		});

		//pso
		$.ajax({
			type: "GET",
			url: url+"4",
			async:false,
			success: function(msg){
				//alert("pso:"+msg);
				obj4 = jQuery.parseJSON( ''+ msg +'' );
			},
			error: function () {
				alert("Error");
			}
		});

		plotLocationGraph(obj1,obj2,obj3,obj4);
	}

	function plotAvgResponeTimeGraphHoneyBee(obj1)
	{
		//honeybee bar data
		var honeyBeeBarDataReq1='[';
		var honeyBeeBarDataReq2='[';
		var honeyBeeBarDataReq3='[';
		var count1 = 0;
		var count2 = 0;
		var count3 = 0;
		var temp;
		for(var i=0; i< obj2.LocReqTypeAvgResTime.length ;i++)
		{

			if(obj1.LocReqTypeAvgResTime[i][1] == 1)
			{
				count1++;
				honeyBeeBarDataReq1 = honeyBeeBarDataReq1 + '{name: "Location '+obj1.LocReqTypeAvgResTime[i][0]+'",';
				honeyBeeBarDataReq1 = honeyBeeBarDataReq1 + 'data:['+obj1.LocReqTypeAvgResTime[i][2]+']'+'}';
				if(count1>0)
				{
					honeyBeeBarDataReq1 +=',';
				}

			}

			if(obj2.LocReqTypeAvgResTime[i][1] == 2)
			{
				count2++;
				honeyBeeBarDataReq2 = honeyBeeBarDataReq2 + '{name: "Location '+obj1.LocReqTypeAvgResTime[i][0]+'",';
				honeyBeeBarDataReq2 = honeyBeeBarDataReq2 + 'data:['+obj1.LocReqTypeAvgResTime[i][2]+']'+'}';
				if(count2>0)
				{
					honeyBeeBarDataReq2 +=',';
				}

			}

			if(obj2.LocReqTypeAvgResTime[i][1] == 3)
			{
				count3++;
				honeyBeeBarDataReq3 = honeyBeeBarDataReq3 + '{name: "Location '+obj1.LocReqTypeAvgResTime[i][0]+'",';
				honeyBeeBarDataReq3 = honeyBeeBarDataReq3 + 'data:['+obj1.LocReqTypeAvgResTime[i][2]+']'+'}';
				if(count3>0)
				{
					honeyBeeBarDataReq3 +=',';
				}

			}

		}

		honeyBeeBarDataReq1 = honeyBeeBarDataReq1.substring(0, honeyBeeBarDataReq1.length - 1);
		honeyBeeBarDataReq1 = honeyBeeBarDataReq1+']';

		honeyBeeBarDataReq2 = honeyBeeBarDataReq2.substring(0, honeyBeeBarDataReq2.length - 1);
		honeyBeeBarDataReq2 = honeyBeeBarDataReq2+']';

		honeyBeeBarDataReq3 = honeyBeeBarDataReq3.substring(0, honeyBeeBarDataReq3.length - 1);
		honeyBeeBarDataReq3 = honeyBeeBarDataReq3+']';
		//alert(honeyBeeBarData);
		//var temp = JSON.parse(honeyBeeBarData);
		temp = eval("(" + honeyBeeBarDataReq1 + ')');
		$('#avgResponseGraph1').highcharts({
			chart: {
				type: 'column'
			},
			subtitle: {
				text: 'Request Type 1'
			},
			xAxis: {
				categories: [
				             'Request Type 1'
				             ]
			},
			yAxis: {
				min: 0,
				title: {
					text: 'Avg. Response Time (sec)'
				}
			},
			tooltip: {
				headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
				pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
				'<td style="padding:0"><b>{point.y:.1f} mm</b></td></tr>',
				footerFormat: '</table>',
				shared: true,
				useHTML: true
			},
			plotOptions: {
				column: {
					pointPadding: 0.2,
					borderWidth: 0
				}
			},
			series: temp
		});

		temp = eval("(" + honeyBeeBarDataReq2 + ')');
		$('#avgResponseGraph2').highcharts({
			chart: {
				type: 'column'
			},

			subtitle: {
				text: 'Request Type 2'
			},
			xAxis: {
				categories: [
				             'Request Type 2'
				             ]
			},
			yAxis: {
				min: 0,
				title: {
					text: 'Avg. Response Time (sec)'
				}
			},
			tooltip: {
				headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
				pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
				'<td style="padding:0"><b>{point.y:.1f} mm</b></td></tr>',
				footerFormat: '</table>',
				shared: true,
				useHTML: true
			},
			plotOptions: {
				column: {
					pointPadding: 0.2,
					borderWidth: 0
				}
			},
			series: temp
		});

		temp = eval("(" + honeyBeeBarDataReq3 + ')');
		$('#avgResponseGraph3').highcharts({
			chart: {
				type: 'column'
			},

			subtitle: {
				text: 'Request Type 3'
			},
			xAxis: {
				categories: [
				             'Request Type 3'
				             ]
			},
			yAxis: {
				min: 0,
				title: {
					text: 'Avg. Response Time (sec)'
				}
			},
			tooltip: {
				headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
				pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
				'<td style="padding:0"><b>{point.y:.1f} mm</b></td></tr>',
				footerFormat: '</table>',
				shared: true,
				useHTML: true
			},
			plotOptions: {
				column: {
					pointPadding: 0.2,
					borderWidth: 0
				}
			},
			series: temp
		});
	}

	function plotAvgResponeTimeGraphAntAlgorithm(obj1)
	{
		//honeybee bar data
		var antBarDataReq1='[';
		var antBarDataReq2='[';
		var antBarDataReq3='[';
		var count1 = 0;
		var count2 = 0;
		var count3 = 0;
		var temp;
		for(var i=0; i< obj1.LocReqTypeAvgResTime.length ;i++)
		{

			if(obj1.LocReqTypeAvgResTime[i][1] == 1)
			{
				count1++;
				antBarDataReq1 = antBarDataReq1 + '{name: "Location '+obj1.LocReqTypeAvgResTime[i][0]+'",';
				antBarDataReq1 = antBarDataReq1 + 'data:['+obj1.LocReqTypeAvgResTime[i][2]+']'+'}';
				if(count1>0)
				{
					antBarDataReq1 +=',';
				}

			}

			if(obj1.LocReqTypeAvgResTime[i][1] == 2)
			{
				count2++;
				antBarDataReq2 = antBarDataReq2 + '{name: "Location '+obj1.LocReqTypeAvgResTime[i][0]+'",';
				antBarDataReq2 = antBarDataReq2 + 'data:['+obj1.LocReqTypeAvgResTime[i][2]+']'+'}';
				if(count2>0)
				{
					antBarDataReq2 +=',';
				}

			}

			if(obj1.LocReqTypeAvgResTime[i][1] == 3)
			{
				count3++;
				antBarDataReq3 = antBarDataReq3 + '{name: "Location '+obj1.LocReqTypeAvgResTime[i][0]+'",';
				antBarDataReq3 = antBarDataReq3 + 'data:['+obj1.LocReqTypeAvgResTime[i][2]+']'+'}';
				if(count3>0)
				{
					antBarDataReq3 +=',';
				}

			}

		}

		antBarDataReq1 = antBarDataReq1.substring(0, antBarDataReq1.length - 1);
		antBarDataReq1 = antBarDataReq1+']';

		antBarDataReq2 = antBarDataReq2.substring(0, antBarDataReq2.length - 1);
		antBarDataReq2 = antBarDataReq2+']';

		antBarDataReq3 = antBarDataReq3.substring(0, antBarDataReq3.length - 1);
		antBarDataReq3 = antBarDataReq3+']';
		//alert(antBarData);
		//var temp = JSON.parse(antBarData);
		temp = eval("(" + antBarDataReq1 + ')');
		$('#avgResponseGraph1').highcharts({
			chart: {
				type: 'column'
			},
			subtitle: {
				text: 'Request Type 1'
			},
			xAxis: {
				categories: [
				             'Request Type 1'
				             ]
			},
			yAxis: {
				min: 0,
				title: {
					text: 'Avg. Response Time (sec)'
				}
			},
			tooltip: {
				headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
				pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
				'<td style="padding:0"><b>{point.y:.1f} mm</b></td></tr>',
				footerFormat: '</table>',
				shared: true,
				useHTML: true
			},
			plotOptions: {
				column: {
					pointPadding: 0.2,
					borderWidth: 0
				}
			},
			series: temp
		});

		temp = eval("(" + antBarDataReq2 + ')');
		$('#avgResponseGraph2').highcharts({
			chart: {
				type: 'column'
			},

			subtitle: {
				text: 'Request Type 2'
			},
			xAxis: {
				categories: [
				             'Request Type 2'
				             ]
			},
			yAxis: {
				min: 0,
				title: {
					text: 'Avg. Response Time (sec)'
				}
			},
			tooltip: {
				headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
				pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
				'<td style="padding:0"><b>{point.y:.1f} mm</b></td></tr>',
				footerFormat: '</table>',
				shared: true,
				useHTML: true
			},
			plotOptions: {
				column: {
					pointPadding: 0.2,
					borderWidth: 0
				}
			},
			series: temp
		});

		temp = eval("(" + antBarDataReq3 + ')');
		$('#avgResponseGraph3').highcharts({
			chart: {
				type: 'column'
			},

			subtitle: {
				text: 'Request Type 3'
			},
			xAxis: {
				categories: [
				             'Request Type 3'
				             ]
			},
			yAxis: {
				min: 0,
				title: {
					text: 'Avg. Response Time (sec)'
				}
			},
			tooltip: {
				headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
				pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
				'<td style="padding:0"><b>{point.y:.1f} mm</b></td></tr>',
				footerFormat: '</table>',
				shared: true,
				useHTML: true
			},
			plotOptions: {
				column: {
					pointPadding: 0.2,
					borderWidth: 0
				}
			},
			series: temp
		});
	}

	function plotAvgResponeTimeGraphLocatonAware(obj1)
	{
		//locationAware bar data
		var locationAwareBarDataReq1='[';
		var locationAwareBarDataReq2='[';
		var locationAwareBarDataReq3='[';
		var count1 = 0;
		var count2 = 0;
		var count3 = 0;
		var temp;
		for(var i=0; i< obj1.LocReqTypeAvgResTime.length ;i++)
		{

			if(obj1.LocReqTypeAvgResTime[i][1] == 1)
			{
				count1++;
				locationAwareBarDataReq1 = locationAwareBarDataReq1 + '{name: "Location '+obj1.LocReqTypeAvgResTime[i][0]+'",';
				locationAwareBarDataReq1 = locationAwareBarDataReq1 + 'data:['+obj1.LocReqTypeAvgResTime[i][2]+']'+'}';
				if(count1>0)
				{
					locationAwareBarDataReq1 +=',';
				}

			}

			if(obj1.LocReqTypeAvgResTime[i][1] == 2)
			{
				count2++;
				locationAwareBarDataReq2 = locationAwareBarDataReq2 + '{name: "Location '+obj1.LocReqTypeAvgResTime[i][0]+'",';
				locationAwareBarDataReq2 = locationAwareBarDataReq2 + 'data:['+obj1.LocReqTypeAvgResTime[i][2]+']'+'}';
				if(count2>0)
				{
					locationAwareBarDataReq2 +=',';
				}

			}

			if(obj1.LocReqTypeAvgResTime[i][1] == 3)
			{
				count3++;
				locationAwareBarDataReq3 = locationAwareBarDataReq3 + '{name: "Location '+obj1.LocReqTypeAvgResTime[i][0]+'",';
				locationAwareBarDataReq3 = locationAwareBarDataReq3 + 'data:['+obj1.LocReqTypeAvgResTime[i][2]+']'+'}';
				if(count3>0)
				{
					locationAwareBarDataReq3 +=',';
				}

			}

		}

		locationAwareBarDataReq1 = locationAwareBarDataReq1.substring(0, locationAwareBarDataReq1.length - 1);
		locationAwareBarDataReq1 = locationAwareBarDataReq1+']';

		locationAwareBarDataReq2 = locationAwareBarDataReq2.substring(0, locationAwareBarDataReq2.length - 1);
		locationAwareBarDataReq2 = locationAwareBarDataReq2+']';

		locationAwareBarDataReq3 = locationAwareBarDataReq3.substring(0, locationAwareBarDataReq3.length - 1);
		locationAwareBarDataReq3 = locationAwareBarDataReq3+']';
		//alert(locationAwareBarData);
		//var temp = JSON.parse(locationAwareBarData);
		temp = eval("(" + locationAwareBarDataReq1 + ')');
		$('#avgResponseGraph1').highcharts({
			chart: {
				type: 'column'
			},
			subtitle: {
				text: 'Request Type 1'
			},
			xAxis: {
				categories: [
				             'Request Type 1'
				             ]
			},
			yAxis: {
				min: 0,
				title: {
					text: 'Avg. Response Time (sec)'
				}
			},
			tooltip: {
				headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
				pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
				'<td style="padding:0"><b>{point.y:.1f} mm</b></td></tr>',
				footerFormat: '</table>',
				shared: true,
				useHTML: true
			},
			plotOptions: {
				column: {
					pointPadding: 0.2,
					borderWidth: 0
				}
			},
			series: temp
		});

		temp = eval("(" + locationAwareBarDataReq2 + ')');
		$('#avgResponseGraph2').highcharts({
			chart: {
				type: 'column'
			},

			subtitle: {
				text: 'Request Type 2'
			},
			xAxis: {
				categories: [
				             'Request Type 2'
				             ]
			},
			yAxis: {
				min: 0,
				title: {
					text: 'Avg. Response Time (sec)'
				}
			},
			tooltip: {
				headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
				pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
				'<td style="padding:0"><b>{point.y:.1f} mm</b></td></tr>',
				footerFormat: '</table>',
				shared: true,
				useHTML: true
			},
			plotOptions: {
				column: {
					pointPadding: 0.2,
					borderWidth: 0
				}
			},
			series: temp
		});

		temp = eval("(" + locationAwareBarDataReq3 + ')');
		$('#avgResponseGraph3').highcharts({
			chart: {
				type: 'column'
			},

			subtitle: {
				text: 'Request Type 3'
			},
			xAxis: {
				categories: [
				             'Request Type 3'
				             ]
			},
			yAxis: {
				min: 0,
				title: {
					text: 'Avg. Response Time (sec)'
				}
			},
			tooltip: {
				headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
				pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
				'<td style="padding:0"><b>{point.y:.1f} mm</b></td></tr>',
				footerFormat: '</table>',
				shared: true,
				useHTML: true
			},
			plotOptions: {
				column: {
					pointPadding: 0.2,
					borderWidth: 0
				}
			},
			series: temp
		});
	}

	function plotAvgResponeTimeGraphPSO(obj1)
	{
		//pso bar data
		var psoBarDataReq1='[';
		var psoBarDataReq2='[';
		var psoBarDataReq3='[';
		var count1 = 0;
		var count2 = 0;
		var count3 = 0;
		var temp;
		for(var i=0; i< obj1.LocReqTypeAvgResTime.length ;i++)
		{

			if(obj1.LocReqTypeAvgResTime[i][1] == 1)
			{
				count1++;
				psoBarDataReq1 = psoBarDataReq1 + '{name: "Location '+obj1.LocReqTypeAvgResTime[i][0]+'",';
				psoBarDataReq1 = psoBarDataReq1 + 'data:['+obj1.LocReqTypeAvgResTime[i][2]+']'+'}';
				if(count1>0)
				{
					psoBarDataReq1 +=',';
				}

			}

			if(obj1.LocReqTypeAvgResTime[i][1] == 2)
			{
				count2++;
				psoBarDataReq2 = psoBarDataReq2 + '{name: "Location '+obj1.LocReqTypeAvgResTime[i][0]+'",';
				psoBarDataReq2 = psoBarDataReq2 + 'data:['+obj1.LocReqTypeAvgResTime[i][2]+']'+'}';
				if(count2>0)
				{
					psoBarDataReq2 +=',';
				}

			}

			if(obj1.LocReqTypeAvgResTime[i][1] == 3)
			{
				count3++;
				psoBarDataReq3 = psoBarDataReq3 + '{name: "Location '+obj1.LocReqTypeAvgResTime[i][0]+'",';
				psoBarDataReq3 = psoBarDataReq3 + 'data:['+obj1.LocReqTypeAvgResTime[i][2]+']'+'}';
				if(count3>0)
				{
					psoBarDataReq3 +=',';
				}

			}

		}

		psoBarDataReq1 = psoBarDataReq1.substring(0, psoBarDataReq1.length - 1);
		psoBarDataReq1 = psoBarDataReq1+']';

		psoBarDataReq2 = psoBarDataReq2.substring(0, psoBarDataReq2.length - 1);
		psoBarDataReq2 = psoBarDataReq2+']';

		psoBarDataReq3 = psoBarDataReq3.substring(0, psoBarDataReq3.length - 1);
		psoBarDataReq3 = psoBarDataReq3+']';
		//alert(psoBarData);
		//var temp = JSON.parse(psoBarData);
		temp = eval("(" + psoBarDataReq1 + ')');
		$('#avgResponseGraph1').highcharts({
			chart: {
				type: 'column'
			},
			subtitle: {
				text: 'Request Type 1'
			},
			xAxis: {
				categories: [
				             'Request Type 1'
				             ]
			},
			yAxis: {
				min: 0,
				title: {
					text: 'Avg. Response Time (sec)'
				}
			},
			tooltip: {
				headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
				pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
				'<td style="padding:0"><b>{point.y:.1f} mm</b></td></tr>',
				footerFormat: '</table>',
				shared: true,
				useHTML: true
			},
			plotOptions: {
				column: {
					pointPadding: 0.2,
					borderWidth: 0
				}
			},
			series: temp
		});

		temp = eval("(" + psoBarDataReq2 + ')');
		$('#avgResponseGraph2').highcharts({
			chart: {
				type: 'column'
			},

			subtitle: {
				text: 'Request Type 2'
			},
			xAxis: {
				categories: [
				             'Request Type 2'
				             ]
			},
			yAxis: {
				min: 0,
				title: {
					text: 'Avg. Response Time (sec)'
				}
			},
			tooltip: {
				headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
				pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
				'<td style="padding:0"><b>{point.y:.1f} mm</b></td></tr>',
				footerFormat: '</table>',
				shared: true,
				useHTML: true
			},
			plotOptions: {
				column: {
					pointPadding: 0.2,
					borderWidth: 0
				}
			},
			series: temp
		});

		temp = eval("(" + psoBarDataReq3 + ')');
		$('#avgResponseGraph3').highcharts({
			chart: {
				type: 'column'
			},

			subtitle: {
				text: 'Request Type 3'
			},
			xAxis: {
				categories: [
				             'Request Type 3'
				             ]
			},
			yAxis: {
				min: 0,
				title: {
					text: 'Avg. Response Time (sec)'
				}
			},
			tooltip: {
				headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
				pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
				'<td style="padding:0"><b>{point.y:.1f} mm</b></td></tr>',
				footerFormat: '</table>',
				shared: true,
				useHTML: true
			},
			plotOptions: {
				column: {
					pointPadding: 0.2,
					borderWidth: 0
				}
			},
			series: temp
		});
	}


	function plotAvgResponseTimeGraph(obj1,obj2,obj3,obj4)
	{
		plotAvgResponseTimeGraphHoneyBee(obj1);

	}



	function populateHoneyBeeTable()
	{
		var data = [];
		var inData = [];
		var url = globalurl+"reqNoCost?algoIdentifier=1&reqNo=";
		var temp;
		for(var i=1;i<100;i++)
		{
			temp = url+i;
			$.ajax({
				type: "GET",
				url: temp,
				async:false,
				success: function(msg){

					obj = jQuery.parseJSON( ''+ msg +'' );
					inData.push(""+obj.ReqNoCost[0]+"");
					inData.push(""+obj.ReqNoCost[1]+"");
					inData.push(""+obj.ReqNoCost[2]+"");
					inData.push(""+obj.ReqNoCost[3]+"");
					inData.push(""+obj.ReqNoCost[4]+"");
					inData.push(""+obj.ReqNoCost[5]+"");
					data.push(inData);
					inData=[];

				},
				error: function () {
					alert("Error");
				}
			});
		}

		$('#honeyBeeTableDiv').html( '<table cellpadding="0" cellspacing="0" border="0" class="display" id="honeBeeTable"></table>' );

		$('#honeBeeTable').dataTable( {
			"data":data,
			"columns": [
			            { "title": "Request No." },
			            { "title": "Cost" },
			            { "title": "CPU", "class": "center"},
			            { "title": "Storage", "class": "center" },
			            { "title": "RAM", "class": "center" },
			            { "title": "Location No.", "class": "center" }
			            ]
		} );   

	}


	function populateAntTable()
	{
		var data = [];
		var inData = [];
		var url = globalurl+"reqNoCost?algoIdentifier=2&reqNo=";
		var temp;
		for(var i=1;i<100;i++)
		{
			temp = url+i;
			$.ajax({
				type: "GET",
				url: temp,
				async:false,
				success: function(msg){

					obj = jQuery.parseJSON( ''+ msg +'' );
					inData.push(""+obj.ReqNoCost[0]+"");
					inData.push(""+obj.ReqNoCost[1]+"");
					inData.push(""+obj.ReqNoCost[2]+"");
					inData.push(""+obj.ReqNoCost[3]+"");
					inData.push(""+obj.ReqNoCost[4]+"");
					inData.push(""+obj.ReqNoCost[5]+"");
					data.push(inData);
					inData=[];

				},
				error: function () {
					alert("Error");
				}
			});
		}

		$('#antTableDiv').html( '<table cellpadding="0" cellspacing="0" border="0" class="display" id="antTable"></table>' );

		$('#antTable').dataTable( {
			"data":data,
			"columns": [
			            { "title": "Request No." },
			            { "title": "Cost" },
			            { "title": "CPU", "class": "center"},
			            { "title": "Storage", "class": "center" },
			            { "title": "RAM", "class": "center" },
			            { "title": "Location No.", "class": "center" }
			            ]
		} );   

	}





	function populateLocationAwareTable()
	{
		var data = [];
		var inData = [];
		var url = globalurl+"reqNoCost?algoIdentifier=3&reqNo=";
		var temp;
		for(var i=1;i<100;i++)
		{
			temp = url+i;
			$.ajax({
				type: "GET",
				url: temp,
				async:false,
				success: function(msg){

					obj = jQuery.parseJSON( ''+ msg +'' );
					inData.push(""+obj.ReqNoCost[0]+"");
					inData.push(""+obj.ReqNoCost[1]+"");
					inData.push(""+obj.ReqNoCost[2]+"");
					inData.push(""+obj.ReqNoCost[3]+"");
					inData.push(""+obj.ReqNoCost[4]+"");
					inData.push(""+obj.ReqNoCost[5]+"");
					data.push(inData);
					inData=[];

				},
				error: function () {
					alert("Error");
				}
			});
		}

		$('#locationAwareTableDiv').html( '<table cellpadding="0" cellspacing="0" border="0" class="display" id="locationAwareTable"></table>' );

		$('#locationAwareTable').dataTable( {
			"data":data,
			"columns": [
			            { "title": "Request No." },
			            { "title": "Cost" },
			            { "title": "CPU", "class": "center"},
			            { "title": "Storage", "class": "center" },
			            { "title": "RAM", "class": "center" },
			            { "title": "Location No.", "class": "center" }
			            ]
		} );   

	}

	function populatePSOTable()
	{
		var data = [];
		var inData = [];
		var url = globalurl+"reqNoCost?algoIdentifier=4&reqNo=";
		var temp;
		for(var i=1;i<100;i++)
		{
			temp = url+i;
			$.ajax({
				type: "GET",
				url: temp,
				async:false,
				success: function(msg){

					obj = jQuery.parseJSON( ''+ msg +'' );
					inData.push(""+obj.ReqNoCost[0]+"");
					inData.push(""+obj.ReqNoCost[1]+"");
					inData.push(""+obj.ReqNoCost[2]+"");
					inData.push(""+obj.ReqNoCost[3]+"");
					inData.push(""+obj.ReqNoCost[4]+"");
					inData.push(""+obj.ReqNoCost[5]+"");
					data.push(inData);
					inData=[];

				},
				error: function () {
					alert("Error");
				}
			});
		}

		$('#psoTableDiv').html( '<table cellpadding="0" cellspacing="0" border="0" class="display" id="psoTable"></table>' );

		$('#psoTable').dataTable( {
			"data":data,
			"columns": [
			            { "title": "Request No." },
			            { "title": "Cost" },
			            { "title": "CPU", "class": "center"},
			            { "title": "Storage", "class": "center" },
			            { "title": "RAM", "class": "center" },
			            { "title": "Location No.", "class": "center" }
			            ]
		} );   

	}

	$("#getGraphs").click(function()
			{
		//getResponseTimeGraph();
		getLocationGraph();
		//getAvgResponseTimeGraph();
		populateHoneyBeeTable();
		populateLocationAwareTable();
		
		//getCostGraph();

			});

});
