var globalurl ="http://ubuntu-mc-1-cmpe281.cloudapp.net:8080/LoadBalancer/graphs/";
//var globalurl ="http://localhost:8080/LoadBalancer/graphs/";
var noOfRequests = 99;
//sessionStorage.setItem("algoIdentifier", 2);
$( document ).ready(function() {
	//var responseData = '{"ReqNoReqTypeRespTime":[[1,1,52.918],[2,1,60.186],[3,1,64.915],[4,1,71.745],[5,1,77.06],[6,1,86.008],[7,2,43.953],[8,2,45.258],[9,2,48.315],[10,2,49.774],[11,2,52.579],[12,2,52.114]]}';
	//var obj = JSON.parse(responseData);



	var locationData = '{"ReqNoReqTypeLoc":[[1,1,4],[2,1,6],[3,1,6],[4,2,6],[5,2,6],[6,2,6]]}';
	var obj1 = JSON.parse(locationData);

	var avgResponseData = '{"LocReqTypeAvgResTime":[[4,1,38.778],[6,1,45.389],[6,2,28.598333333333333]]}';
	var obj2 = JSON.parse(avgResponseData);


	function plotAvgResponseTimeGraphs(obj1,obj2,obj3,obj4)
	{

		var honeyBeeRequestType1=[];
		var honeyBeeRequestType2=[];
		var honeyBeeRequestType3=[];
		var honeyBeeRequestType1No=[];
		var honeyBeeRequestType2No=[];
		var honeyBeeRequestType3No=[];
		var hR1=0,hR2=0,hR3=0;

		for(var i=0;i<obj1.ReqNoReqTypeRespTime.length;i++)
		{
			if(obj1.ReqNoReqTypeRespTime[i][1] == 1)
			{
				honeyBeeRequestType1No.push(hR1);
				hR1++;
				honeyBeeRequestType1.push(obj1.ReqNoReqTypeRespTime[i][2]);
			}

			if(obj1.ReqNoReqTypeRespTime[i][1] == 2)
			{
				honeyBeeRequestType2No.push(hR2);
				hR2++;
				honeyBeeRequestType2.push(obj1.ReqNoReqTypeRespTime[i][2]);
			}

			if(obj1.ReqNoReqTypeRespTime[i][1] == 3)
			{
				honeyBeeRequestType3No.push(hR3);
				hR3++;
				honeyBeeRequestType3.push(obj1.ReqNoReqTypeRespTime[i][2]);
			}
		}

		//ant algorithm
		var antRequestType1=[];
		var antRequestType2=[];
		var antRequestType3=[];
		var antRequestType1No=[];
		var antRequestType2No=[];
		var antRequestType3No=[];
		var ant1=0,ant2=0,ant3=0;

		for(var i=0;i<obj2.ReqNoReqTypeRespTime.length;i++)
		{
			if(obj2.ReqNoReqTypeRespTime[i][1] == 1)
			{
				antRequestType1No.push(ant1);
				ant1++;
				antRequestType1.push(obj2.ReqNoReqTypeRespTime[i][2]);
			}

			if(obj2.ReqNoReqTypeRespTime[i][1] == 2)
			{
				antRequestType2No.push(ant2);
				ant2++;
				antRequestType2.push(obj2.ReqNoReqTypeRespTime[i][2]);
			}

			if(obj2.ReqNoReqTypeRespTime[i][1] == 3)
			{
				antRequestType3No.push(ant3);
				ant3++;
				antRequestType3.push(obj2.ReqNoReqTypeRespTime[i][2]);
			}
		}
		//

		//locationAware algorithm
		var locationAwareRequestType1=[];
		var locationAwareRequestType2=[];
		var locationAwareRequestType3=[];
		var locationAwareRequestType1No=[];
		var locationAwareRequestType2No=[];
		var locationAwareRequestType3No=[];
		var locationAware1=0,locationAware2=0,locationAware3=0;

		for(var i=0;i<obj3.ReqNoReqTypeRespTime.length;i++)
		{
			if(obj3.ReqNoReqTypeRespTime[i][1] == 1)
			{
				locationAwareRequestType1No.push(locationAware1);
				locationAware1++;
				locationAwareRequestType1.push(obj3.ReqNoReqTypeRespTime[i][2]);
			}

			if(obj3.ReqNoReqTypeRespTime[i][1] == 2)
			{
				locationAwareRequestType2No.push(locationAware2);
				locationAware2++;
				locationAwareRequestType2.push(obj3.ReqNoReqTypeRespTime[i][2]);
			}

			if(obj3.ReqNoReqTypeRespTime[i][1] == 3)
			{
				locationAwareRequestType3No.push(locationAware3);
				locationAware3++;
				locationAwareRequestType3.push(obj3.ReqNoReqTypeRespTime[i][2]);
			}
		}
		//

		//pso algorithm
		var psoRequestType1=[];
		var psoRequestType2=[];
		var psoRequestType3=[];
		var psoRequestType1No=[];
		var psoRequestType2No=[];
		var psoRequestType3No=[];
		var pso1=0,pso2=0,pso3=0;

		for(var i=0;i<obj4.ReqNoReqTypeRespTime.length;i++)
		{
			if(obj4.ReqNoReqTypeRespTime[i][1] == 1)
			{
				psoRequestType1No.push(pso1);
				pso1++;
				psoRequestType1.push(obj4.ReqNoReqTypeRespTime[i][2]);
			}

			if(obj4.ReqNoReqTypeRespTime[i][1] == 2)
			{
				psoRequestType2No.push(pso2);
				pso2++;
				psoRequestType2.push(obj4.ReqNoReqTypeRespTime[i][2]);
			}

			if(obj4.ReqNoReqTypeRespTime[i][1] == 3)
			{
				psoRequestType3No.push(pso3);
				pso3++;
				psoRequestType3.push(obj4.ReqNoReqTypeRespTime[i][2]);
			}
		}
		//
		$('#reponseTimeGraph1').highcharts({
			title: {
				text: 'Response Time Comparison',
				x: -20 //center
			},

			subtitle: {
				text: 'Request Type 1',
				x: -20
			},
			xAxis:{
				tickInterval : 1
			},
			yAxis: {
				title: {
					text: 'Response Time(Seconds)'
				},
				plotLines: [{
					value: 1,
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
			}, {
				name: 'Ant Algorithm',
				data: antRequestType1
			}, {
				name: 'Location Aware Algorithm',
				data: locationAwareRequestType1
			}, {
				name: 'PSO Algorithm',
				data: psoRequestType1
			}]
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
			xAxis:{
				tickInterval : 1
			},
			yAxis: {
				title: {
					text: 'Response Time(Seconds)'
				},
				plotLines: [{
					value: 1,
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
			}, {
				name: 'Ant Algorithm',
				data: antRequestType2
			}, {
				name: 'Location Aware Algorithm',
				data: locationAwareRequestType2
			}, {
				name: 'PSO Algorithm',
				data: psoRequestType2
			}]
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
			xAxis:{
				tickInterval : 1
			},
			yAxis: {
				title: {
					text: 'Response Time(Seconds)'
				},
				plotLines: [{
					value: 1,
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
			}, {
				name: 'Ant Algorithm',
				data: antRequestType3
			}, {
				name: 'Location Aware Algorithm',
				data: locationAwareRequestType3
			}, {
				name: 'PSO Algorithm',
				data: psoRequestType3
			}]
		});
	}


	function getResponseTimeGraphs()
	{
		var url = globalurl+"reqNoReqTypeRespTime?algoIdentifier=";
		//alert(url);
		temp = "1";
		var obj1,obj2,obj3,obj4;
		$.ajax({
			type: "GET",
			url: url+temp,
			async:false,
			success: function(msg){
				//alert(msg);
				obj1 = jQuery.parseJSON( ''+ msg +'' );
				//plotAvgResponseTimeGraph(obj);

			},
			error: function () {
				alert("Error");
			}
		});

		//alert(url);
		temp = "2";
		$.ajax({
			type: "GET",
			url: url+temp,
			async:false,
			success: function(msg){
				//alert(msg);
				obj2 = jQuery.parseJSON( ''+ msg +'' );
				//plotAvgResponseTimeGraph(obj);

			},
			error: function () {
				alert("Error");
			}
		});


		//alert(url);
		temp = "3";
		$.ajax({
			type: "GET",
			url: url+temp,
			async:false,
			success: function(msg){
				//alert(msg);
				obj3 = jQuery.parseJSON( ''+ msg +'' );
				//plotAvgResponseTimeGraph(obj);

			},
			error: function () {
				alert("Error");
			}
		});

		//alert(url);
		temp = "4";
		$.ajax({
			type: "GET",
			url: url+temp,
			async:false,
			success: function(msg){
				//alert(msg);
				obj4 = jQuery.parseJSON( ''+ msg +'' );
				//plotAvgResponseTimeGraph(obj);

			},
			error: function () {
				alert("Error");
			}
		});

		/*	obj1 = eval("(" + obj1 + ')');
		obj2 = eval("(" + obj2 + ')');
		obj3 = eval("(" + obj3 + ')');
		obj4 = eval("(" + obj4 + ')');*/


		plotAvgResponseTimeGraphs(obj1,obj2,obj3,obj4);

	}

	function plotLocationGraph(obj1,obj2,obj3,obj4)
	{
		//honeybee
		//alert(obj1);
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

			xAxis:{
				tickInterval : 1
			},

			yAxis: {
				title: {
					text: 'Location'
				},
				tickInterval : 1,
				plotLines: [{
					value: 1,
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

			xAxis:{
				tickInterval : 1
			},
			yAxis: {
				title: {
					text: 'Location'
				},
				tickInterval : 1,
				plotLines: [{
					value: 1,
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

		//alert(locationRequestType3.length);
		$('#locationGraph3').highcharts({
			title: {
				text: 'Location Based Comparison',
				x: -20 //center
			},
			subtitle: {
				text: 'Request Type 3',
				x: -20
			},
			xAxis:{
				tickInterval : 1
			},
			yAxis: {
				title: {
					text: 'Location'
				},
				tickInterval : 1,
				plotLines: [{
					value: 1,
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
				//alert("obj get locationgraph"+obj1);
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

	function plotAvgResponseTimeGraphHoneyBee(obj1)
	{
		//honeybee bar data
		var honeyBeeBarDataReq1='[';
		var honeyBeeBarDataReq2='[';
		var honeyBeeBarDataReq3='[';
		var count1 = 0;
		var count2 = 0;
		var count3 = 0;
		var temp;
		for(var i=0; i< obj1.LocReqTypeAvgResTime.length ;i++)
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

			if(obj1.LocReqTypeAvgResTime[i][1] == 2)
			{
				count2++;
				honeyBeeBarDataReq2 = honeyBeeBarDataReq2 + '{name: "Location '+obj1.LocReqTypeAvgResTime[i][0]+'",';
				honeyBeeBarDataReq2 = honeyBeeBarDataReq2 + 'data:['+obj1.LocReqTypeAvgResTime[i][2]+']'+'}';
				if(count2>0)
				{
					honeyBeeBarDataReq2 +=',';
				}

			}

			if(obj1.LocReqTypeAvgResTime[i][1] == 3)
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

		//alert("Hi");
		if(obj1.LocReqTypeAvgResTime.length > 0)
		{
			if(honeyBeeBarDataReq1.length > 1 )
			{
				honeyBeeBarDataReq1 = honeyBeeBarDataReq1.substring(0, honeyBeeBarDataReq1.length - 1);
			}

			if(honeyBeeBarDataReq2.length > 1 )
			{
				honeyBeeBarDataReq2 = honeyBeeBarDataReq2.substring(0, honeyBeeBarDataReq2.length - 1);
			}

			if(honeyBeeBarDataReq3.length > 1 )
			{
				honeyBeeBarDataReq3 = honeyBeeBarDataReq3.substring(0, honeyBeeBarDataReq3.length - 1);
			}
		}
		honeyBeeBarDataReq1 = honeyBeeBarDataReq1+']';
		honeyBeeBarDataReq2 = honeyBeeBarDataReq2+']';
		honeyBeeBarDataReq3 = honeyBeeBarDataReq3+']';
		//alert(honeyBeeBarData);
		//var temp = JSON.parse(honeyBeeBarData);
		temp = eval("(" + honeyBeeBarDataReq1 + ')');
		$('#avgResponseGraphHoneyBee1').highcharts({
			chart: {
				type: 'column'
			},
			title: {
				text: 'HoneyBee'
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
				'<td style="padding:0"><b>{point.y:.5f} sec</b></td></tr>',
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
		$('#avgResponseGraphHoneyBee2').highcharts({
			chart: {
				type: 'column'
			},
			title: {
				text: 'HoneyBee'
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
				'<td style="padding:0"><b>{point.y:.5f} sec</b></td></tr>',
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
		$('#avgResponseGraphHoneyBee3').highcharts({
			chart: {
				type: 'column'
			},
			title: {
				text: 'HoneyBee'
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
				'<td style="padding:0"><b>{point.y:.5f} sec</b></td></tr>',
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

	function plotAvgResponseTimeGraphAnt(obj2)
	{
		//honeybee bar data
		var antBarDataReq1='[';
		var antBarDataReq2='[';
		var antBarDataReq3='[';
		var count1 = 0;
		var count2 = 0;
		var count3 = 0;
		var temp;
		for(var i=0; i< obj2.LocReqTypeAvgResTime.length ;i++)
		{

			if(obj2.LocReqTypeAvgResTime[i][1] == 1)
			{
				count1++;
				antBarDataReq1 = antBarDataReq1 + '{name: "Location '+obj2.LocReqTypeAvgResTime[i][0]+'",';
				antBarDataReq1 = antBarDataReq1 + 'data:['+obj2.LocReqTypeAvgResTime[i][2]+']'+'}';
				if(count1>0)
				{
					antBarDataReq1 +=',';
				}

			}

			if(obj2.LocReqTypeAvgResTime[i][1] == 2)
			{
				count2++;
				antBarDataReq2 = antBarDataReq2 + '{name: "Location '+obj2.LocReqTypeAvgResTime[i][0]+'",';
				antBarDataReq2 = antBarDataReq2 + 'data:['+obj2.LocReqTypeAvgResTime[i][2]+']'+'}';
				if(count2>0)
				{
					antBarDataReq2 +=',';
				}

			}

			if(obj2.LocReqTypeAvgResTime[i][1] == 3)
			{
				count3++;
				antBarDataReq3 = antBarDataReq3 + '{name: "Location '+obj2.LocReqTypeAvgResTime[i][0]+'",';
				antBarDataReq3 = antBarDataReq3 + 'data:['+obj2.LocReqTypeAvgResTime[i][2]+']'+'}';
				if(count3>0)
				{
					antBarDataReq3 +=',';
				}

			}

		}

		if(obj2.LocReqTypeAvgResTime.length > 0)
		{
			if(antBarDataReq1.length>1)
				antBarDataReq1 = antBarDataReq1.substring(0, antBarDataReq1.length - 1);
			if(antBarDataReq2.length>1)
				antBarDataReq2 = antBarDataReq2.substring(0, antBarDataReq2.length - 1);
			if(antBarDataReq3.length>1)
				antBarDataReq3 = antBarDataReq3.substring(0, antBarDataReq3.length - 1);
		}
		antBarDataReq1 = antBarDataReq1+']';
		antBarDataReq2 = antBarDataReq2+']';
		antBarDataReq3 = antBarDataReq3+']';

		//alert(antBarData);
		//var temp = JSON.parse(antBarData);
		temp = eval("(" + antBarDataReq1 + ')');
		$('#avgResponseGraphAnt1').highcharts({
			chart: {
				type: 'column'
			},
			title: {
				text: 'Ant'
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
				'<td style="padding:0"><b>{point.y:.5f} sec</b></td></tr>',
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
		$('#avgResponseGraphAnt2').highcharts({
			chart: {
				type: 'column'
			},
			title: {
				text: 'Ant'
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
				'<td style="padding:0"><b>{point.y:.5f} sec</b></td></tr>',
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
		$('#avgResponseGraphAnt3').highcharts({
			chart: {
				type: 'column'
			},
			title: {
				text: 'Ant'
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
				'<td style="padding:0"><b>{point.y:.5f} sec</b></td></tr>',
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

	function plotAvgResponseTimeGraphLocationAware(obj3)
	{
		//locationAware bar data
		var locationAwareBarDataReq1='[';
		var locationAwareBarDataReq2='[';
		var locationAwareBarDataReq3='[';
		var count1 = 0;
		var count2 = 0;
		var count3 = 0;
		var temp;
		for(var i=0; i< obj3.LocReqTypeAvgResTime.length ;i++)
		{

			if(obj3.LocReqTypeAvgResTime[i][1] == 1)
			{
				count1++;
				locationAwareBarDataReq1 = locationAwareBarDataReq1 + '{name: "Location '+obj3.LocReqTypeAvgResTime[i][0]+'",';
				locationAwareBarDataReq1 = locationAwareBarDataReq1 + 'data:['+obj3.LocReqTypeAvgResTime[i][2]+']'+'}';
				if(count1>0)
				{
					locationAwareBarDataReq1 +=',';
				}

			}

			if(obj3.LocReqTypeAvgResTime[i][1] == 2)
			{
				count2++;
				locationAwareBarDataReq2 = locationAwareBarDataReq2 + '{name: "Location '+obj3.LocReqTypeAvgResTime[i][0]+'",';
				locationAwareBarDataReq2 = locationAwareBarDataReq2 + 'data:['+obj3.LocReqTypeAvgResTime[i][2]+']'+'}';
				if(count2>0)
				{
					locationAwareBarDataReq2 +=',';
				}

			}

			if(obj3.LocReqTypeAvgResTime[i][1] == 3)
			{
				count3++;
				locationAwareBarDataReq3 = locationAwareBarDataReq3 + '{name: "Location '+obj3.LocReqTypeAvgResTime[i][0]+'",';
				locationAwareBarDataReq3 = locationAwareBarDataReq3 + 'data:['+obj3.LocReqTypeAvgResTime[i][2]+']'+'}';
				if(count3>0)
				{
					locationAwareBarDataReq3 +=',';
				}

			}

		}
		if(obj3.LocReqTypeAvgResTime.length > 0)
		{
			if(locationAwareBarDataReq1.length > 1)
				locationAwareBarDataReq1 = locationAwareBarDataReq1.substring(0, locationAwareBarDataReq1.length - 1);
			if(locationAwareBarDataReq2.length > 1)
				locationAwareBarDataReq2 = locationAwareBarDataReq2.substring(0, locationAwareBarDataReq2.length - 1);
			if(locationAwareBarDataReq3.length > 1)
				locationAwareBarDataReq3 = locationAwareBarDataReq3.substring(0, locationAwareBarDataReq3.length - 1);

		}

		locationAwareBarDataReq1 = locationAwareBarDataReq1+']';
		locationAwareBarDataReq2 = locationAwareBarDataReq2+']';
		locationAwareBarDataReq3 = locationAwareBarDataReq3+']';
		//alert(locationAwareBarData);
		//var temp = JSON.parse(locationAwareBarData);
		temp = eval("(" + locationAwareBarDataReq1 + ')');
		$('#avgResponseGraphLocationAware1').highcharts({
			chart: {
				type: 'column'
			},
			title: {
				text: 'Location Aware'
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
				'<td style="padding:0"><b>{point.y:.5f} sec</b></td></tr>',
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
		$('#avgResponseGraphLocationAware2').highcharts({
			chart: {
				type: 'column'
			},
			title: {
				text: 'Location Aware'
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
				'<td style="padding:0"><b>{point.y:.5f} sec</b></td></tr>',
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
		$('#avgResponseGraphLocationAware3').highcharts({
			chart: {
				type: 'column'
			},
			title: {
				text: 'Location Aware'
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
				'<td style="padding:0"><b>{point.y:.5f} sec</b></td></tr>',
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

	function plotAvgResponseTimeGraphPSO(obj4)
	{
		//pso bar data
		var psoBarDataReq1='[';
		var psoBarDataReq2='[';
		var psoBarDataReq3='[';
		var count1 = 0;
		var count2 = 0;
		var count3 = 0;
		var temp;
		for(var i=0; i< obj4.LocReqTypeAvgResTime.length ;i++)
		{

			if(obj4.LocReqTypeAvgResTime[i][1] == 1)
			{
				count1++;
				psoBarDataReq1 = psoBarDataReq1 + '{name: "Location '+obj4.LocReqTypeAvgResTime[i][0]+'",';
				psoBarDataReq1 = psoBarDataReq1 + 'data:['+obj4.LocReqTypeAvgResTime[i][2]+']'+'}';
				if(count1>0)
				{
					psoBarDataReq1 +=',';
				}

			}

			if(obj4.LocReqTypeAvgResTime[i][1] == 2)
			{
				count2++;
				psoBarDataReq2 = psoBarDataReq2 + '{name: "Location '+obj4.LocReqTypeAvgResTime[i][0]+'",';
				psoBarDataReq2 = psoBarDataReq2 + 'data:['+obj4.LocReqTypeAvgResTime[i][2]+']'+'}';
				if(count2>0)
				{
					psoBarDataReq2 +=',';
				}

			}

			if(obj4.LocReqTypeAvgResTime[i][1] == 3)
			{
				count3++;
				psoBarDataReq3 = psoBarDataReq3 + '{name: "Location '+obj4.LocReqTypeAvgResTime[i][0]+'",';
				psoBarDataReq3 = psoBarDataReq3 + 'data:['+obj4.LocReqTypeAvgResTime[i][2]+']'+'}';
				if(count3>0)
				{
					psoBarDataReq3 +=',';
				}

			}

		}
		if(obj4.LocReqTypeAvgResTime.length > 0)
		{
			if(psoBarDataReq1.length > 1)
				psoBarDataReq1 = psoBarDataReq1.substring(0, psoBarDataReq1.length - 1);
			if(psoBarDataReq2.length > 1)
				psoBarDataReq2 = psoBarDataReq2.substring(0, psoBarDataReq2.length - 1);
			if(psoBarDataReq3.length > 1)
				psoBarDataReq3 = psoBarDataReq3.substring(0, psoBarDataReq3.length - 1);

		}

		psoBarDataReq1 = psoBarDataReq1+']';
		psoBarDataReq2 = psoBarDataReq2+']';
		psoBarDataReq3 = psoBarDataReq3+']';
		//alert(psoBarData);
		//var temp = JSON.parse(psoBarData);
		temp = eval("(" + psoBarDataReq1 + ')');
		$('#avgResponseGraphPSO1').highcharts({
			chart: {
				type: 'column'
			},
			title: {
				text: 'PSO'
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
				'<td style="padding:0"><b>{point.y:.5f} sec</b></td></tr>',
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
		$('#avgResponseGraphPSO2').highcharts({
			chart: {
				type: 'column'
			},
			title: {
				text: 'PSO'
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
				'<td style="padding:0"><b>{point.y:.5f} sec</b></td></tr>',
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
		$('#avgResponseGraphPSO3').highcharts({
			chart: {
				type: 'column'
			},
			title: {
				text: 'PSO'
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
				'<td style="padding:0"><b>{point.y:.5f} sec</b></td></tr>',
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


	function getAvgResponseTimeGraphs()
	{
		var url=globalurl+"locReqTypeAvgResTime?algoIdentifier=";
		var obj1 =null;
		var obj2 =null;
		var obj3 =null;
		var obj4 =null;
		//honeybee
		var temp="1";
		$.ajax({
			type: "GET",
			url: url+temp,
			async:false,
			success: function(msg){
				//alert(msg);
				obj1 = jQuery.parseJSON( ''+ msg +'' );

				plotAvgResponseTimeGraphHoneyBee(obj1);
			},
			error: function () {
				alert("Error");
			}
		});
		//

		//ant algorithm
		temp="2";
		$.ajax({
			type: "GET",
			url: url+temp,
			async:false,
			success: function(msg){
				//alert(msg);
				obj2 = jQuery.parseJSON( ''+ msg +'' );

				plotAvgResponseTimeGraphAnt(obj2);	
			},
			error: function () {
				alert("Error");
			}
		});
		//

		//locationAware
		temp="3";
		$.ajax({
			type: "GET",
			url: url+temp,
			async:false,
			success: function(msg){
				//alert(msg);
				obj3 = jQuery.parseJSON( ''+ msg +'' );

				plotAvgResponseTimeGraphPSO(obj3);
			},
			error: function () {
				alert("Error");
			}
		});
		//


		//pso
		temp="4";
		$.ajax({
			type: "GET",
			url: url+temp,
			async:false,
			success: function(msg){
				//alert(msg);
				obj4 = jQuery.parseJSON( ''+ msg +'' );
				plotAvgResponseTimeGraphLocationAware(obj4);
			},
			error: function () {
				alert("Error");
			}
		});
		//


	}

	//populate honey bee pie chart
	function populatePieChartHoneyBee(honeyBeeLocationsArr)
	{
		var locationCount1=0,locationCount2=0,locationCount3=0,locationCount4=0,locationCount5=0,locationCount6=0,locationCount7=0,locationCount8=0,locationCount9=0;

		for(var i=0; i<honeyBeeLocationsArr.length; i++)
		{
			switch( honeyBeeLocationsArr[i])
			{
			case 1:
				locationCount1++;
				break;
			case 2:
				locationCount2++;
				break;
			case 3:
				locationCount3++;
				break;
			case 4:
				locationCount4++;
				break;
			case 5:
				locationCount5++;
				break;
			case 6:
				locationCount6++;
				break;
			case 7:
				locationCount7++;
				break;
			case 8:
				locationCount8++;
				break;
			case 9:
				locationCount9++;
				break;
			}
		}

		$('#honeyBeePieDiv').highcharts({
			chart: {
				plotBackgroundColor: null,
				plotBorderWidth: 1,//null,
				plotShadow: false
			},
			title: {
				text: 'Request Distribution for HoneyBee Algorithm'
			},
			tooltip: {
				pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
			},
			plotOptions: {
				pie: {
					allowPointSelect: true,
					cursor: 'pointer',
					dataLabels: {
						enabled: true,
						format: '<b>{point.name}</b>: {point.percentage:.1f} %',
						style: {
							color: (Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black'
						}
					}
				}
			},
			series: [{
				type: 'pie',
				name: 'Location Distribution',
				data: [
				       ['Location 1',   ((locationCount1/honeyBeeLocationsArr.length)*100)],
				       ['Location 2',   ((locationCount2/honeyBeeLocationsArr.length)*100)],
				       ['Location 3',   ((locationCount3/honeyBeeLocationsArr.length)*100)],
				       ['Location 4',    ((locationCount4/honeyBeeLocationsArr.length)*100)],
				       ['Location 5',  ((locationCount5/honeyBeeLocationsArr.length)*100)],
				       ['Location 6',   ((locationCount6/honeyBeeLocationsArr.length)*100)],
				       ['Location 7',   ((locationCount7/honeyBeeLocationsArr.length)*100)],
				       ['Location 8',    ((locationCount8/honeyBeeLocationsArr.length)*100)],
				       ['Location 9',    ((locationCount9/honeyBeeLocationsArr.length)*100)]
				       ]
			}]
		});
	}
	//


	//populate ant pie chart
	function populatePieChartAnt(antLocationsArr)
	{
		var locationCount1=0,locationCount2=0,locationCount3=0,locationCount4=0,locationCount5=0,locationCount6=0,locationCount7=0,locationCount8=0,locationCount9=0;

		for(var i=0; i<antLocationsArr.length; i++)
		{
			switch( antLocationsArr[i])
			{
			case 1:
				locationCount1++;
				break;
			case 2:
				locationCount2++;
				break;
			case 3:
				locationCount3++;
				break;
			case 4:
				locationCount4++;
				break;
			case 5:
				locationCount5++;
				break;
			case 6:
				locationCount6++;
				break;
			case 7:
				locationCount7++;
				break;
			case 8:
				locationCount8++;
				break;
			case 9:
				locationCount9++;
				break;
			}
		}

		$('#antPieDiv').highcharts({
			chart: {
				plotBackgroundColor: null,
				plotBorderWidth: 1,//null,
				plotShadow: false
			},
			title: {
				text: 'Request Distribution for Ant Algorithm'
			},
			tooltip: {
				pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
			},
			plotOptions: {
				pie: {
					allowPointSelect: true,
					cursor: 'pointer',
					dataLabels: {
						enabled: true,
						format: '<b>{point.name}</b>: {point.percentage:.1f} %',
						style: {
							color: (Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black'
						}
					}
				}
			},
			series: [{
				type: 'pie',
				name: 'Location Distribution',
				data: [
				       ['Location 1',   ((locationCount1/antLocationsArr.length)*100)],
				       ['Location 2',   ((locationCount2/antLocationsArr.length)*100)],
				       ['Location 3',   ((locationCount3/antLocationsArr.length)*100)],
				       ['Location 4',    ((locationCount4/antLocationsArr.length)*100)],
				       ['Location 5',  ((locationCount5/antLocationsArr.length)*100)],
				       ['Location 6',   ((locationCount6/antLocationsArr.length)*100)],
				       ['Location 7',   ((locationCount7/antLocationsArr.length)*100)],
				       ['Location 8',    ((locationCount8/antLocationsArr.length)*100)],
				       ['Location 9',    ((locationCount9/antLocationsArr.length)*100)]
				       ]
			}]
		});
	}
	//


	//populate locationAware pie chart
	function populatePieChartLocationAware(locationAwareLocationsArr)
	{
		var locationCount1=0,locationCount2=0,locationCount3=0,locationCount4=0,locationCount5=0,locationCount6=0,locationCount7=0,locationCount8=0,locationCount9=0;

		for(var i=0; i<locationAwareLocationsArr.length; i++)
		{
			switch( locationAwareLocationsArr[i])
			{
			case 1:
				locationCount1++;
				break;
			case 2:
				locationCount2++;
				break;
			case 3:
				locationCount3++;
				break;
			case 4:
				locationCount4++;
				break;
			case 5:
				locationCount5++;
				break;
			case 6:
				locationCount6++;
				break;
			case 7:
				locationCount7++;
				break;
			case 8:
				locationCount8++;
				break;
			case 9:
				locationCount9++;
				break;
			}
		}

		$('#locationAwarePieDiv').highcharts({
			chart: {
				plotBackgroundColor: null,
				plotBorderWidth: 1,//null,
				plotShadow: false
			},
			title: {
				text: 'Request Distribution for Location Aware Algorithm'
			},
			tooltip: {
				pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
			},
			plotOptions: {
				pie: {
					allowPointSelect: true,
					cursor: 'pointer',
					dataLabels: {
						enabled: true,
						format: '<b>{point.name}</b>: {point.percentage:.1f} %',
						style: {
							color: (Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black'
						}
					}
				}
			},
			series: [{
				type: 'pie',
				name: 'Location Distribution',
				data: [
				       ['Location 1',   ((locationCount1/locationAwareLocationsArr.length)*100)],
				       ['Location 2',   ((locationCount2/locationAwareLocationsArr.length)*100)],
				       ['Location 3',   ((locationCount3/locationAwareLocationsArr.length)*100)],
				       ['Location 4',    ((locationCount4/locationAwareLocationsArr.length)*100)],
				       ['Location 5',  ((locationCount5/locationAwareLocationsArr.length)*100)],
				       ['Location 6',   ((locationCount6/locationAwareLocationsArr.length)*100)],
				       ['Location 7',   ((locationCount7/locationAwareLocationsArr.length)*100)],
				       ['Location 8',    ((locationCount8/locationAwareLocationsArr.length)*100)],
				       ['Location 9',    ((locationCount9/locationAwareLocationsArr.length)*100)]
				       ]
			}]
		});
	}
	//


	//populate pso pie chart
	function populatePieChartPSO(psoLocationsArr)
	{
		var locationCount1=0,locationCount2=0,locationCount3=0,locationCount4=0,locationCount5=0,locationCount6=0,locationCount7=0,locationCount8=0,locationCount9=0;

		for(var i=0; i<psoLocationsArr.length; i++)
		{
			switch( psoLocationsArr[i])
			{
			case 1:
				locationCount1++;
				break;
			case 2:
				locationCount2++;
				break;
			case 3:
				locationCount3++;
				break;
			case 4:
				locationCount4++;
				break;
			case 5:
				locationCount5++;
				break;
			case 6:
				locationCount6++;
				break;
			case 7:
				locationCount7++;
				break;
			case 8:
				locationCount8++;
				break;
			case 9:
				locationCount9++;
				break;
			}
		}

		$('#psoPieDiv').highcharts({
			chart: {
				plotBackgroundColor: null,
				plotBorderWidth: 1,//null,
				plotShadow: false
			},
			title: {
				text: 'Request Distribution for PSO Algorithm'
			},
			tooltip: {
				pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
			},
			plotOptions: {
				pie: {
					allowPointSelect: true,
					cursor: 'pointer',
					dataLabels: {
						enabled: true,
						format: '<b>{point.name}</b>: {point.percentage:.1f} %',
						style: {
							color: (Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black'
						}
					}
				}
			},
			series: [{
				type: 'pie',
				name: 'Location Distribution',
				data: [
				       ['Location 1',   ((locationCount1/psoLocationsArr.length)*100)],
				       ['Location 2',   ((locationCount2/psoLocationsArr.length)*100)],
				       ['Location 3',   ((locationCount3/psoLocationsArr.length)*100)],
				       ['Location 4',    ((locationCount4/psoLocationsArr.length)*100)],
				       ['Location 5',  ((locationCount5/psoLocationsArr.length)*100)],
				       ['Location 6',   ((locationCount6/psoLocationsArr.length)*100)],
				       ['Location 7',   ((locationCount7/psoLocationsArr.length)*100)],
				       ['Location 8',    ((locationCount8/psoLocationsArr.length)*100)],
				       ['Location 9',    ((locationCount9/psoLocationsArr.length)*100)]
				       ]
			}]
		});
	}
	//

	function populateHoneyBeeTable()
	{
		var data = [];
		var inData = [];
		var honeyBeeLocationsArr = [];
		var url = globalurl+"reqNoCost?algoIdentifier=1&reqNo=";
		var temp;
		for(var i=1;i<100;i++)
		{
			temp = url+i;
			$.ajax({
				type: "GET",
				url: temp,
				//async:false,
				success: function(msg){

					obj = jQuery.parseJSON( ''+ msg +'' );
					inData.push(""+obj.ReqNoCost[0]+"");
					inData.push(""+obj.ReqNoCost[2]+"");
					inData.push(""+obj.ReqNoCost[3]+"");
					inData.push(""+obj.ReqNoCost[4]+"");
					inData.push(""+obj.ReqNoCost[5]+"");
					inData.push(""+Math.floor(obj.ReqNoCost[1] * 1000) / 1000+"");
					data.push(inData);
					inData=[];
					//change for pieChart
					honeyBeeLocationsArr.push(obj.ReqNoCost[5]);;
					//pie chart honey bee
					populatePieChartHoneyBee(honeyBeeLocationsArr);
					//
					$('#honeyBeeTableDiv').html( '<h1>HoneyBee Algorithm Costing Model</h1><table cellpadding="0" cellspacing="0" border="0" class="display" id="honeBeeTable"></table>' );

					$('#honeBeeTable').dataTable( {
						"data":data,
						"columns": [
						            { "title": "Request No.", "class": "center" },
						            { "title": "CPU(GHz)", "class": "center"},
						            { "title": "Storage(GB)", "class": "center" },
						            { "title": "RAM(MB)", "class": "center" },
						            { "title": "Location No.", "class": "center" },
						            { "title": "Cost($)" }
						            ],
						            "bFilter": false
					} );   

					//

				},
				error: function () {
					alert("Error");
				}
			});
		}


	}


	function populateAntTable()
	{
		var data = [];
		var inData = [];
		var url = globalurl+"reqNoCost?algoIdentifier=2&reqNo=";
		var temp;
		var antLocationsArr=[];
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
					inData.push(""+obj.ReqNoCost[2]+"");
					inData.push(""+obj.ReqNoCost[3]+"");
					inData.push(""+obj.ReqNoCost[4]+"");
					inData.push(""+obj.ReqNoCost[5]+"");
					inData.push(""+Math.floor(obj.ReqNoCost[1] * 1000) / 1000+"");
					data.push(inData);
					inData=[];

					//change for pieChart
					antLocationsArr.push(obj.ReqNoCost[5]);;
					//

				},
				error: function () {
					alert("Error");
				}
			});
		}

		//ant pie chart
		populatePieChartAnt(antLocationsArr);
		//
		$('#antTableDiv').html( '<h1>Ant Algorithm Costing Model</h1><table cellpadding="0" cellspacing="0" border="0" class="display" id="antTable"></table>' );

		$('#antTable').dataTable( {
			"data":data,
			"columns": [
			            { "title": "Request No.", "class": "center" },
			            { "title": "CPU(GHz)", "class": "center"},
			            { "title": "Storage(GB)", "class": "center" },
			            { "title": "RAM(MB)", "class": "center" },
			            { "title": "Location No.", "class": "center" },
			            { "title": "Cost($)" }
			            ],
			            "bFilter": false
		} );   

	}

	function populateLocationAwareTable()
	{
		var data = [];
		var inData = [];
		var url = globalurl+"reqNoCost?algoIdentifier=3&reqNo=";
		var temp;

		var locationAwareLocationsArr=[];

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
					inData.push(""+obj.ReqNoCost[2]+"");
					inData.push(""+obj.ReqNoCost[3]+"");
					inData.push(""+obj.ReqNoCost[4]+"");
					inData.push(""+obj.ReqNoCost[5]+"");
					inData.push(""+Math.floor(obj.ReqNoCost[1] * 1000) / 1000+"");
					data.push(inData);
					inData=[];

					//change for pieChart
					locationAwareLocationsArr.push(obj.ReqNoCost[5]);;
					//
				},
				error: function () {
					alert("Error");
				}
			});
		}

		//pie chart location aware
		populatePieChartLocationAware(locationAwareLocationsArr);
		//
		$('#locationAwareTableDiv').html( '<h1>Location Aware Algorithm Costing Model</h1><table cellpadding="0" cellspacing="0" border="0" class="display" id="locationAwareTable"></table>' );

		$('#locationAwareTable').dataTable( {
			"data":data,
			"columns": [
			            { "title": "Request No.", "class": "center" },
			            { "title": "CPU(GHz)", "class": "center"},
			            { "title": "Storage(GB)", "class": "center" },
			            { "title": "RAM(MB)", "class": "center" },
			            { "title": "Location No.", "class": "center" },
			            { "title": "Cost($)" }
			            ],
			            "bFilter": false
		} );   

	}

	function populatePSOTable()
	{
		var data = [];
		var inData = [];
		var url = globalurl+"reqNoCost?algoIdentifier=4&reqNo=";
		var temp;
		var psoLocationsArr = [];
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
					inData.push(""+obj.ReqNoCost[2]+"");
					inData.push(""+obj.ReqNoCost[3]+"");
					inData.push(""+obj.ReqNoCost[4]+"");
					inData.push(""+obj.ReqNoCost[5]+"");
					inData.push(""+Math.floor(obj.ReqNoCost[1] * 1000) / 1000+"");
					data.push(inData);
					inData=[];

					//change for pieChart
					psoLocationsArr.push(obj.ReqNoCost[5]);;
					//

				},
				error: function () {
					alert("Error");
				}
			});
		}

		//pie chart pso algorithm
		populatePieChartPSO(psoLocationsArr);
		//
		$('#psoTableDiv').html( '<h1>PSO Costing Model</h1><table cellpadding="0" cellspacing="0" border="0" class="display" id="psoTable"></table>' );

		$('#psoTable').dataTable( {
			"data":data,
			"columns": [
			            { "title": "Request No.", "class": "center" },
			            { "title": "CPU(GHz)", "class": "center"},
			            { "title": "Storage(GB)", "class": "center" },
			            { "title": "RAM(MB)", "class": "center" },
			            { "title": "Location No.", "class": "center" },
			            { "title": "Cost($)" }
			            ],
			            "bFilter": false
		} );   

	}


	function populateGuageChartsLocation1()
	{
		var gaugeOptions = {

				chart: {
					type: 'solidgauge'
				},

				title: null,

				pane: {
					center: ['50%', '85%'],
					size: '140%',
					startAngle: -90,
					endAngle: 90,
					background: {
						backgroundColor: (Highcharts.theme && Highcharts.theme.background2) || '#EEE',
						innerRadius: '60%',
						outerRadius: '100%',
						shape: 'arc'
					}
				},

				tooltip: {
					enabled: false
				},

				// the value axis
				yAxis: {
					stops: [
					        [0.1, '#55BF3B'], // green
					        [0.5, '#DDDF0D'], // yellow
					        [0.9, '#DF5353'] // red
					        ],
					        lineWidth: 0,
					        minorTickInterval: null,
					        tickPixelInterval: 400,
					        tickWidth: 0,
					        title: {
					        	y: -70
					        },
					        labels: {
					        	y: 16
					        }
				},

				plotOptions: {
					solidgauge: {
						dataLabels: {
							y: 5,
							borderWidth: 0,
							useHTML: true
						}
					}
				}
		};

		// The cpu gauge
		$('#container-cpu-location1').highcharts(Highcharts.merge(gaugeOptions, {
			yAxis: {
				min: 0,
				max: 2,
				title: {
					text: 'CPU'
				}
			},

			credits: {
				enabled: false
			},

			series: [{
				name: 'CPU',
				data: [0.0],
				dataLabels: {
					format: '<div style="text-align:center"><span style="font-size:25px;color:' +
					((Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black') + '">{y:.2f}</span><br/>' +
					'<span style="font-size:12px;color:silver">GHz</span></div>'
				},
				tooltip: {
					valueSuffix: 'GHz'
				}
			}]

		}));

		// The cpu gauge
		$('#container-ram-location1').highcharts(Highcharts.merge(gaugeOptions, {
			yAxis: {
				min: 0,
				max: 1.0,
				title: {
					text: 'RAM'
				}
			},

			credits: {
				enabled: false
			},

			series: [{
				name: 'RAM',
				data: [0.0],
				dataLabels: {
					format: '<div style="text-align:center"><span style="font-size:25px;color:' +
					((Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black') + '">{y:.3f}</span><br/>' +
					'<span style="font-size:12px;color:silver">GB</span></div>'
				},
				tooltip: {
					valueSuffix: 'GB'
				}
			}]

		}));

		// The cpu gauge
		$('#container-storage-location1').highcharts(Highcharts.merge(gaugeOptions, {
			yAxis: {
				min: 0,
				max: 0.5,
				title: {
					text: 'Storage'
				}
			},

			credits: {
				enabled: false
			},

			series: [{
				name: 'Storage',
				data: [0.0],
				dataLabels: {
					format: '<div style="text-align:center"><span style="font-size:25px;color:' +
					((Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black') + '">{y:.3f}</span><br/>' +
					'<span style="font-size:12px;color:silver">GB</span></div>'
				},
				tooltip: {
					valueSuffix: 'GB'
				}
			}]

		}));

		// Bring life to the dials
		setInterval(function () {
			// CPU
			var chart = $('#container-cpu-location1').highcharts(),
			point,
			newVal,inc1,inc2,inc3,
			inc;

			
			var url = globalurl+"currResUtil?algoIdentifier="+sessionStorage.getItem("algoIdentifier",2)+"&locationNo=1";
			$.ajax({
				type: "GET",
				url: url,
				async:false,
				success: function(msg){
					//alert(msg);
					obj = jQuery.parseJSON( ''+ msg +'' );
					inc1=obj.ResourceUtil[0];
					inc2=obj.ResourceUtil[2]/1000;
					inc3=obj.ResourceUtil[1]/1000;

				},
				error: function () {
					alert("Error");
				}
			});
			
			if (chart) {
				point = chart.series[0].points[0];
				

				inc = inc1;
				/*newVal = point.y + inc;

				if (newVal < 0 || newVal > 1) {
					newVal = point.y - inc;
				}*/

				point.update(inc1);
			}

			// RAM
			chart = $('#container-ram-location1').highcharts();
			if (chart) {
				point = chart.series[0].points[0];
				inc = inc2;
				/*newVal = point.y + inc;

				if (newVal < 0 || newVal > 0.768) {
					newVal = point.y - inc;
				}*/

				point.update(inc2);
			}

			// Storage
			chart = $('#container-storage-location1').highcharts();
			if (chart) {
				point = chart.series[0].points[0];
				inc = inc3;
				/*newVal = point.y + inc;

				if (newVal < 0 || newVal > 7) {
					newVal = point.y - inc;
				}*/

				point.update(inc3);
			}
		}, 2000);
	}

	
	function populateGuageChartsLocation2()
	{
		var gaugeOptions = {

				chart: {
					type: 'solidgauge'
				},

				title: null,

				pane: {
					center: ['50%', '85%'],
					size: '140%',
					startAngle: -90,
					endAngle: 90,
					background: {
						backgroundColor: (Highcharts.theme && Highcharts.theme.background2) || '#EEE',
						innerRadius: '60%',
						outerRadius: '100%',
						shape: 'arc'
					}
				},

				tooltip: {
					enabled: false
				},

				// the value axis
				yAxis: {
					stops: [
					        [0.1, '#55BF3B'], // green
					        [0.5, '#DDDF0D'], // yellow
					        [0.9, '#DF5353'] // red
					        ],
					        lineWidth: 0,
					        minorTickInterval: null,
					        tickPixelInterval: 400,
					        tickWidth: 0,
					        title: {
					        	y: -70
					        },
					        labels: {
					        	y: 16
					        }
				},

				plotOptions: {
					solidgauge: {
						dataLabels: {
							y: 5,
							borderWidth: 0,
							useHTML: true
						}
					}
				}
		};

		// The cpu gauge
		$('#container-cpu-location2').highcharts(Highcharts.merge(gaugeOptions, {
			yAxis: {
				min: 0,
				max: 2,
				title: {
					text: 'CPU'
				}
			},

			credits: {
				enabled: false
			},

			series: [{
				name: 'CPU',
				data: [0.0],
				dataLabels: {
					format: '<div style="text-align:center"><span style="font-size:25px;color:' +
					((Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black') + '">{y:.2f}</span><br/>' +
					'<span style="font-size:12px;color:silver">GHz</span></div>'
				},
				tooltip: {
					valueSuffix: 'GHz'
				}
			}]

		}));

		// The cpu gauge
		$('#container-ram-location2').highcharts(Highcharts.merge(gaugeOptions, {
			yAxis: {
				min: 0,
				max: 1.0,
				title: {
					text: 'RAM'
				}
			},

			credits: {
				enabled: false
			},

			series: [{
				name: 'RAM',
				data: [0.0],
				dataLabels: {
					format: '<div style="text-align:center"><span style="font-size:25px;color:' +
					((Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black') + '">{y:.3f}</span><br/>' +
					'<span style="font-size:12px;color:silver">GB</span></div>'
				},
				tooltip: {
					valueSuffix: 'GB'
				}
			}]

		}));

		// The cpu gauge
		$('#container-storage-location2').highcharts(Highcharts.merge(gaugeOptions, {
			yAxis: {
				min: 0,
				max: 0.5,
				title: {
					text: 'Storage'
				}
			},

			credits: {
				enabled: false
			},

			series: [{
				name: 'Storage',
				data: [0.0],
				dataLabels: {
					format: '<div style="text-align:center"><span style="font-size:25px;color:' +
					((Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black') + '">{y:.3f}</span><br/>' +
					'<span style="font-size:12px;color:silver">GB</span></div>'
				},
				tooltip: {
					valueSuffix: 'GB'
				}
			}]

		}));

		// Bring life to the dials
		setInterval(function () {
			// CPU
			var chart = $('#container-cpu-location2').highcharts(),
			point,
			newVal,inc1,inc2,inc3,
			inc;

			
			var url = globalurl+"currResUtil?algoIdentifier="+sessionStorage.getItem("algoIdentifier",2)+"&locationNo=2";
			$.ajax({
				type: "GET",
				url: url,
				async:false,
				success: function(msg){
					//alert(msg);
					obj = jQuery.parseJSON( ''+ msg +'' );
					inc1=obj.ResourceUtil[0];
					inc2=obj.ResourceUtil[2]/1000;
					inc3=obj.ResourceUtil[1]/1000;

				},
				error: function () {
					alert("Error");
				}
			});
			
			if (chart) {
				point = chart.series[0].points[0];
				

				inc = inc1;
				/*newVal = point.y + inc;

				if (newVal < 0 || newVal > 1) {
					newVal = point.y - inc;
				}*/

				point.update(inc1);
			}

			// RAM
			chart = $('#container-ram-location2').highcharts();
			if (chart) {
				point = chart.series[0].points[0];
				inc = inc2;
				/*newVal = point.y + inc;

				if (newVal < 0 || newVal > 0.768) {
					newVal = point.y - inc;
				}*/

				point.update(inc2);
			}

			// Storage
			chart = $('#container-storage-location2').highcharts();
			if (chart) {
				point = chart.series[0].points[0];
				inc = inc3;
				/*newVal = point.y + inc;

				if (newVal < 0 || newVal > 7) {
					newVal = point.y - inc;
				}*/

				point.update(inc3);
			}
		}, 2000);
	}
	function populateGuageChartsLocation3()
	{
		var gaugeOptions = {

				chart: {
					type: 'solidgauge'
				},

				title: null,

				pane: {
					center: ['50%', '85%'],
					size: '140%',
					startAngle: -90,
					endAngle: 90,
					background: {
						backgroundColor: (Highcharts.theme && Highcharts.theme.background2) || '#EEE',
						innerRadius: '60%',
						outerRadius: '100%',
						shape: 'arc'
					}
				},

				tooltip: {
					enabled: false
				},

				// the value axis
				yAxis: {
					stops: [
					        [0.1, '#55BF3B'], // green
					        [0.5, '#DDDF0D'], // yellow
					        [0.9, '#DF5353'] // red
					        ],
					        lineWidth: 0,
					        minorTickInterval: null,
					        tickPixelInterval: 400,
					        tickWidth: 0,
					        title: {
					        	y: -70
					        },
					        labels: {
					        	y: 16
					        }
				},

				plotOptions: {
					solidgauge: {
						dataLabels: {
							y: 5,
							borderWidth: 0,
							useHTML: true
						}
					}
				}
		};

		// The cpu gauge
		$('#container-cpu-location3').highcharts(Highcharts.merge(gaugeOptions, {
			yAxis: {
				min: 0,
				max: 2,
				title: {
					text: 'CPU'
				}
			},

			credits: {
				enabled: false
			},

			series: [{
				name: 'CPU',
				data: [0.0],
				dataLabels: {
					format: '<div style="text-align:center"><span style="font-size:25px;color:' +
					((Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black') + '">{y:.2f}</span><br/>' +
					'<span style="font-size:12px;color:silver">GHz</span></div>'
				},
				tooltip: {
					valueSuffix: 'GHz'
				}
			}]

		}));

		// The cpu gauge
		$('#container-ram-location3').highcharts(Highcharts.merge(gaugeOptions, {
			yAxis: {
				min: 0,
				max: 2.0,
				title: {
					text: 'RAM'
				}
			},

			credits: {
				enabled: false
			},

			series: [{
				name: 'RAM',
				data: [0.0],
				dataLabels: {
					format: '<div style="text-align:center"><span style="font-size:25px;color:' +
					((Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black') + '">{y:.3f}</span><br/>' +
					'<span style="font-size:12px;color:silver">GB</span></div>'
				},
				tooltip: {
					valueSuffix: 'GB'
				}
			}]

		}));

		// The cpu gauge
		$('#container-storage-location3').highcharts(Highcharts.merge(gaugeOptions, {
			yAxis: {
				min: 0,
				max: 0.5,
				title: {
					text: 'Storage'
				}
			},

			credits: {
				enabled: false
			},

			series: [{
				name: 'Storage',
				data: [0.0],
				dataLabels: {
					format: '<div style="text-align:center"><span style="font-size:25px;color:' +
					((Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black') + '">{y:.3f}</span><br/>' +
					'<span style="font-size:12px;color:silver">GB</span></div>'
				},
				tooltip: {
					valueSuffix: 'GB'
				}
			}]

		}));

		// Bring life to the dials
		setInterval(function () {
			// CPU
			var chart = $('#container-cpu-location3').highcharts(),
			point,
			newVal,inc1,inc2,inc3,
			inc;

			
			var url = globalurl+"currResUtil?algoIdentifier="+sessionStorage.getItem("algoIdentifier",2)+"&locationNo=3";
			$.ajax({
				type: "GET",
				url: url,
				async:false,
				success: function(msg){
					//alert(msg);
					obj = jQuery.parseJSON( ''+ msg +'' );
					inc1=obj.ResourceUtil[0];
					inc2=obj.ResourceUtil[2]/1000;
					inc3=obj.ResourceUtil[1]/1000;

				},
				error: function () {
					alert("Error");
				}
			});
			
			if (chart) {
				point = chart.series[0].points[0];
				

				inc = inc1;
				/*newVal = point.y + inc;

				if (newVal < 0 || newVal > 1) {
					newVal = point.y - inc;
				}*/

				point.update(inc1);
			}

			// RAM
			chart = $('#container-ram-location3').highcharts();
			if (chart) {
				point = chart.series[0].points[0];
				inc = inc2;
				/*newVal = point.y + inc;

				if (newVal < 0 || newVal > 0.768) {
					newVal = point.y - inc;
				}*/

				point.update(inc2);
			}

			// Storage
			chart = $('#container-storage-location3').highcharts();
			if (chart) {
				point = chart.series[0].points[0];
				inc = inc3;
				/*newVal = point.y + inc;

				if (newVal < 0 || newVal > 7) {
					newVal = point.y - inc;
				}*/

				point.update(inc3);
			}
		}, 2000);
	}
	function populateGuageChartsLocation4()
	{
		var gaugeOptions = {

				chart: {
					type: 'solidgauge'
				},

				title: null,

				pane: {
					center: ['50%', '85%'],
					size: '140%',
					startAngle: -90,
					endAngle: 90,
					background: {
						backgroundColor: (Highcharts.theme && Highcharts.theme.background2) || '#EEE',
						innerRadius: '60%',
						outerRadius: '100%',
						shape: 'arc'
					}
				},

				tooltip: {
					enabled: false
				},

				// the value axis
				yAxis: {
					stops: [
					        [0.1, '#55BF3B'], // green
					        [0.5, '#DDDF0D'], // yellow
					        [0.9, '#DF5353'] // red
					        ],
					        lineWidth: 0,
					        minorTickInterval: null,
					        tickPixelInterval: 400,
					        tickWidth: 0,
					        title: {
					        	y: -70
					        },
					        labels: {
					        	y: 16
					        }
				},

				plotOptions: {
					solidgauge: {
						dataLabels: {
							y: 5,
							borderWidth: 0,
							useHTML: true
						}
					}
				}
		};

		// The cpu gauge
		$('#container-cpu-location4').highcharts(Highcharts.merge(gaugeOptions, {
			yAxis: {
				min: 0,
				max: 2,
				title: {
					text: 'CPU'
				}
			},

			credits: {
				enabled: false
			},

			series: [{
				name: 'CPU',
				data: [0.0],
				dataLabels: {
					format: '<div style="text-align:center"><span style="font-size:25px;color:' +
					((Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black') + '">{y:.2f}</span><br/>' +
					'<span style="font-size:12px;color:silver">GHz</span></div>'
				},
				tooltip: {
					valueSuffix: 'GHz'
				}
			}]

		}));

		// The cpu gauge
		$('#container-ram-location4').highcharts(Highcharts.merge(gaugeOptions, {
			yAxis: {
				min: 0,
				max: 1.0,
				title: {
					text: 'RAM'
				}
			},

			credits: {
				enabled: false
			},

			series: [{
				name: 'RAM',
				data: [0.0],
				dataLabels: {
					format: '<div style="text-align:center"><span style="font-size:25px;color:' +
					((Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black') + '">{y:.3f}</span><br/>' +
					'<span style="font-size:12px;color:silver">GB</span></div>'
				},
				tooltip: {
					valueSuffix: 'GB'
				}
			}]

		}));

		// The cpu gauge
		$('#container-storage-location4').highcharts(Highcharts.merge(gaugeOptions, {
			yAxis: {
				min: 0,
				max: 0.5,
				title: {
					text: 'Storage'
				}
			},

			credits: {
				enabled: false
			},

			series: [{
				name: 'Storage',
				data: [0.0],
				dataLabels: {
					format: '<div style="text-align:center"><span style="font-size:25px;color:' +
					((Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black') + '">{y:.3f}</span><br/>' +
					'<span style="font-size:12px;color:silver">GB</span></div>'
				},
				tooltip: {
					valueSuffix: 'GB'
				}
			}]

		}));

		// Bring life to the dials
		setInterval(function () {
			// CPU
			var chart = $('#container-cpu-location4').highcharts(),
			point,
			newVal,inc1,inc2,inc3,
			inc;

			
			var url = globalurl+"currResUtil?algoIdentifier="+sessionStorage.getItem("algoIdentifier",2)+"&locationNo=4";
			$.ajax({
				type: "GET",
				url: url,
				async:false,
				success: function(msg){
					//alert(msg);
					obj = jQuery.parseJSON( ''+ msg +'' );
					inc1=obj.ResourceUtil[0];
					inc2=obj.ResourceUtil[2]/1000;
					inc3=obj.ResourceUtil[1]/1000;

				},
				error: function () {
					alert("Error");
				}
			});
			
			if (chart) {
				point = chart.series[0].points[0];
				

				inc = inc1;
				/*newVal = point.y + inc;

				if (newVal < 0 || newVal > 1) {
					newVal = point.y - inc;
				}*/

				point.update(inc1);
			}

			// RAM
			chart = $('#container-ram-location4').highcharts();
			if (chart) {
				point = chart.series[0].points[0];
				inc = inc2;
				/*newVal = point.y + inc;

				if (newVal < 0 || newVal > 0.768) {
					newVal = point.y - inc;
				}*/

				point.update(inc2);
			}

			// Storage
			chart = $('#container-storage-location4').highcharts();
			if (chart) {
				point = chart.series[0].points[0];
				inc = inc3;
				/*newVal = point.y + inc;

				if (newVal < 0 || newVal > 7) {
					newVal = point.y - inc;
				}*/

				point.update(inc3);
			}
		}, 2000);
	}
	function populateGuageChartsLocation5()
	{
		var gaugeOptions = {

				chart: {
					type: 'solidgauge'
				},

				title: null,

				pane: {
					center: ['50%', '85%'],
					size: '140%',
					startAngle: -90,
					endAngle: 90,
					background: {
						backgroundColor: (Highcharts.theme && Highcharts.theme.background2) || '#EEE',
						innerRadius: '60%',
						outerRadius: '100%',
						shape: 'arc'
					}
				},

				tooltip: {
					enabled: false
				},

				// the value axis
				yAxis: {
					stops: [
					        [0.1, '#55BF3B'], // green
					        [0.5, '#DDDF0D'], // yellow
					        [0.9, '#DF5353'] // red
					        ],
					        lineWidth: 0,
					        minorTickInterval: null,
					        tickPixelInterval: 400,
					        tickWidth: 0,
					        title: {
					        	y: -70
					        },
					        labels: {
					        	y: 16
					        }
				},

				plotOptions: {
					solidgauge: {
						dataLabels: {
							y: 5,
							borderWidth: 0,
							useHTML: true
						}
					}
				}
		};

		// The cpu gauge
		$('#container-cpu-location5').highcharts(Highcharts.merge(gaugeOptions, {
			yAxis: {
				min: 0,
				max: 2,
				title: {
					text: 'CPU'
				}
			},

			credits: {
				enabled: false
			},

			series: [{
				name: 'CPU',
				data: [0.0],
				dataLabels: {
					format: '<div style="text-align:center"><span style="font-size:25px;color:' +
					((Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black') + '">{y:.2f}</span><br/>' +
					'<span style="font-size:12px;color:silver">GHz</span></div>'
				},
				tooltip: {
					valueSuffix: 'GHz'
				}
			}]

		}));

		// The cpu gauge
		$('#container-ram-location5').highcharts(Highcharts.merge(gaugeOptions, {
			yAxis: {
				min: 0,
				max: 1.0,
				title: {
					text: 'RAM'
				}
			},

			credits: {
				enabled: false
			},

			series: [{
				name: 'RAM',
				data: [0.0],
				dataLabels: {
					format: '<div style="text-align:center"><span style="font-size:25px;color:' +
					((Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black') + '">{y:.3f}</span><br/>' +
					'<span style="font-size:12px;color:silver">GB</span></div>'
				},
				tooltip: {
					valueSuffix: 'GB'
				}
			}]

		}));

		// The cpu gauge
		$('#container-storage-location5').highcharts(Highcharts.merge(gaugeOptions, {
			yAxis: {
				min: 0,
				max: 0.5,
				title: {
					text: 'Storage'
				}
			},

			credits: {
				enabled: false
			},

			series: [{
				name: 'Storage',
				data: [0.0],
				dataLabels: {
					format: '<div style="text-align:center"><span style="font-size:25px;color:' +
					((Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black') + '">{y:.3f}</span><br/>' +
					'<span style="font-size:12px;color:silver">GB</span></div>'
				},
				tooltip: {
					valueSuffix: 'GB'
				}
			}]

		}));

		// Bring life to the dials
		setInterval(function () {
			// CPU
			var chart = $('#container-cpu-location5').highcharts(),
			point,
			newVal,inc1,inc2,inc3,
			inc;

			
			var url = globalurl+"currResUtil?algoIdentifier="+sessionStorage.getItem("algoIdentifier",2)+"&locationNo=5";
			$.ajax({
				type: "GET",
				url: url,
				async:false,
				success: function(msg){
					//alert(msg);
					obj = jQuery.parseJSON( ''+ msg +'' );
					inc1=obj.ResourceUtil[0];
					inc2=obj.ResourceUtil[2]/1000;
					inc3=obj.ResourceUtil[1]/1000;

				},
				error: function () {
					alert("Error");
				}
			});
			
			if (chart) {
				point = chart.series[0].points[0];
				

				inc = inc1;
				/*newVal = point.y + inc;

				if (newVal < 0 || newVal > 1) {
					newVal = point.y - inc;
				}*/

				point.update(inc1);
			}

			// RAM
			chart = $('#container-ram-location5').highcharts();
			if (chart) {
				point = chart.series[0].points[0];
				inc = inc2;
				/*newVal = point.y + inc;

				if (newVal < 0 || newVal > 0.768) {
					newVal = point.y - inc;
				}*/

				point.update(inc2);
			}

			// Storage
			chart = $('#container-storage-location5').highcharts();
			if (chart) {
				point = chart.series[0].points[0];
				inc = inc3;
				/*newVal = point.y + inc;

				if (newVal < 0 || newVal > 7) {
					newVal = point.y - inc;
				}*/

				point.update(inc3);
			}
		}, 2000);
	}
	function populateGuageChartsLocation6()
	{
		var gaugeOptions = {

				chart: {
					type: 'solidgauge'
				},

				title: null,

				pane: {
					center: ['50%', '85%'],
					size: '140%',
					startAngle: -90,
					endAngle: 90,
					background: {
						backgroundColor: (Highcharts.theme && Highcharts.theme.background2) || '#EEE',
						innerRadius: '60%',
						outerRadius: '100%',
						shape: 'arc'
					}
				},

				tooltip: {
					enabled: false
				},

				// the value axis
				yAxis: {
					stops: [
					        [0.1, '#55BF3B'], // green
					        [0.5, '#DDDF0D'], // yellow
					        [0.9, '#DF5353'] // red
					        ],
					        lineWidth: 0,
					        minorTickInterval: null,
					        tickPixelInterval: 400,
					        tickWidth: 0,
					        title: {
					        	y: -70
					        },
					        labels: {
					        	y: 16
					        }
				},

				plotOptions: {
					solidgauge: {
						dataLabels: {
							y: 5,
							borderWidth: 0,
							useHTML: true
						}
					}
				}
		};

		// The cpu gauge
		$('#container-cpu-location6').highcharts(Highcharts.merge(gaugeOptions, {
			yAxis: {
				min: 0,
				max: 2,
				title: {
					text: 'CPU'
				}
			},

			credits: {
				enabled: false
			},

			series: [{
				name: 'CPU',
				data: [0.0],
				dataLabels: {
					format: '<div style="text-align:center"><span style="font-size:25px;color:' +
					((Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black') + '">{y:.2f}</span><br/>' +
					'<span style="font-size:12px;color:silver">GHz</span></div>'
				},
				tooltip: {
					valueSuffix: 'GHz'
				}
			}]

		}));

		// The cpu gauge
		$('#container-ram-location6').highcharts(Highcharts.merge(gaugeOptions, {
			yAxis: {
				min: 0,
				max: 2.0,
				title: {
					text: 'RAM'
				}
			},

			credits: {
				enabled: false
			},

			series: [{
				name: 'RAM',
				data: [0.0],
				dataLabels: {
					format: '<div style="text-align:center"><span style="font-size:25px;color:' +
					((Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black') + '">{y:.3f}</span><br/>' +
					'<span style="font-size:12px;color:silver">GB</span></div>'
				},
				tooltip: {
					valueSuffix: 'GB'
				}
			}]

		}));

		// The cpu gauge
		$('#container-storage-location6').highcharts(Highcharts.merge(gaugeOptions, {
			yAxis: {
				min: 0,
				max: 0.5,
				title: {
					text: 'Storage'
				}
			},

			credits: {
				enabled: false
			},

			series: [{
				name: 'Storage',
				data: [0.0],
				dataLabels: {
					format: '<div style="text-align:center"><span style="font-size:25px;color:' +
					((Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black') + '">{y:.3f}</span><br/>' +
					'<span style="font-size:12px;color:silver">GB</span></div>'
				},
				tooltip: {
					valueSuffix: 'GB'
				}
			}]

		}));

		// Bring life to the dials
		setInterval(function () {
			// CPU
			var chart = $('#container-cpu-location6').highcharts(),
			point,
			newVal,inc1,inc2,inc3,
			inc;

			
			var url = globalurl+"currResUtil?algoIdentifier="+sessionStorage.getItem("algoIdentifier",2)+"&locationNo=6";
			$.ajax({
				type: "GET",
				url: url,
				async:false,
				success: function(msg){
					//alert(msg);
					obj = jQuery.parseJSON( ''+ msg +'' );
					inc1=obj.ResourceUtil[0];
					inc2=obj.ResourceUtil[2]/1000;
					inc3=obj.ResourceUtil[1]/1000;

				},
				error: function () {
					alert("Error");
				}
			});
			
			if (chart) {
				point = chart.series[0].points[0];
				

				inc = inc1;
				/*newVal = point.y + inc;

				if (newVal < 0 || newVal > 1) {
					newVal = point.y - inc;
				}*/

				point.update(inc1);
			}

			// RAM
			chart = $('#container-ram-location6').highcharts();
			if (chart) {
				point = chart.series[0].points[0];
				inc = inc2;
				/*newVal = point.y + inc;

				if (newVal < 0 || newVal > 0.768) {
					newVal = point.y - inc;
				}*/

				point.update(inc2);
			}

			// Storage
			chart = $('#container-storage-location6').highcharts();
			if (chart) {
				point = chart.series[0].points[0];
				inc = inc3;
				/*newVal = point.y + inc;

				if (newVal < 0 || newVal > 7) {
					newVal = point.y - inc;
				}*/

				point.update(inc3);
			}
		}, 2000);
	}
	function populateGuageChartsLocation7()
	{
		var gaugeOptions = {

				chart: {
					type: 'solidgauge'
				},

				title: null,

				pane: {
					center: ['50%', '85%'],
					size: '140%',
					startAngle: -90,
					endAngle: 90,
					background: {
						backgroundColor: (Highcharts.theme && Highcharts.theme.background2) || '#EEE',
						innerRadius: '60%',
						outerRadius: '100%',
						shape: 'arc'
					}
				},

				tooltip: {
					enabled: false
				},

				// the value axis
				yAxis: {
					stops: [
					        [0.1, '#55BF3B'], // green
					        [0.5, '#DDDF0D'], // yellow
					        [0.9, '#DF5353'] // red
					        ],
					        lineWidth: 0,
					        minorTickInterval: null,
					        tickPixelInterval: 400,
					        tickWidth: 0,
					        title: {
					        	y: -70
					        },
					        labels: {
					        	y: 16
					        }
				},

				plotOptions: {
					solidgauge: {
						dataLabels: {
							y: 5,
							borderWidth: 0,
							useHTML: true
						}
					}
				}
		};

		// The cpu gauge
		$('#container-cpu-location7').highcharts(Highcharts.merge(gaugeOptions, {
			yAxis: {
				min: 0,
				max: 2,
				title: {
					text: 'CPU'
				}
			},

			credits: {
				enabled: false
			},

			series: [{
				name: 'CPU',
				data: [0.0],
				dataLabels: {
					format: '<div style="text-align:center"><span style="font-size:25px;color:' +
					((Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black') + '">{y:.2f}</span><br/>' +
					'<span style="font-size:12px;color:silver">GHz</span></div>'
				},
				tooltip: {
					valueSuffix: 'GHz'
				}
			}]

		}));

		// The cpu gauge
		$('#container-ram-location7').highcharts(Highcharts.merge(gaugeOptions, {
			yAxis: {
				min: 0,
				max: 1.0,
				title: {
					text: 'RAM'
				}
			},

			credits: {
				enabled: false
			},

			series: [{
				name: 'RAM',
				data: [0.0],
				dataLabels: {
					format: '<div style="text-align:center"><span style="font-size:25px;color:' +
					((Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black') + '">{y:.3f}</span><br/>' +
					'<span style="font-size:12px;color:silver">GB</span></div>'
				},
				tooltip: {
					valueSuffix: 'GB'
				}
			}]

		}));

		// The cpu gauge
		$('#container-storage-location7').highcharts(Highcharts.merge(gaugeOptions, {
			yAxis: {
				min: 0,
				max: 0.5,
				title: {
					text: 'Storage'
				}
			},

			credits: {
				enabled: false
			},

			series: [{
				name: 'Storage',
				data: [0.0],
				dataLabels: {
					format: '<div style="text-align:center"><span style="font-size:25px;color:' +
					((Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black') + '">{y:.3f}</span><br/>' +
					'<span style="font-size:12px;color:silver">GB</span></div>'
				},
				tooltip: {
					valueSuffix: 'GB'
				}
			}]

		}));

		// Bring life to the dials
		setInterval(function () {
			// CPU
			var chart = $('#container-cpu-location7').highcharts(),
			point,
			newVal,inc1,inc2,inc3,
			inc;

			
			var url = globalurl+"currResUtil?algoIdentifier="+sessionStorage.getItem("algoIdentifier",2)+"&locationNo=7";
			$.ajax({
				type: "GET",
				url: url,
				async:false,
				success: function(msg){
					//alert(msg);
					obj = jQuery.parseJSON( ''+ msg +'' );
					inc1=obj.ResourceUtil[0];
					inc2=obj.ResourceUtil[2]/1000;
					inc3=obj.ResourceUtil[1]/1000;

				},
				error: function () {
					alert("Error");
				}
			});
			
			if (chart) {
				point = chart.series[0].points[0];
				

				inc = inc1;
				/*newVal = point.y + inc;

				if (newVal < 0 || newVal > 1) {
					newVal = point.y - inc;
				}*/

				point.update(inc1);
			}

			// RAM
			chart = $('#container-ram-location7').highcharts();
			if (chart) {
				point = chart.series[0].points[0];
				inc = inc2;
				/*newVal = point.y + inc;

				if (newVal < 0 || newVal > 0.768) {
					newVal = point.y - inc;
				}*/

				point.update(inc2);
			}

			// Storage
			chart = $('#container-storage-location7').highcharts();
			if (chart) {
				point = chart.series[0].points[0];
				inc = inc3;
				/*newVal = point.y + inc;

				if (newVal < 0 || newVal > 7) {
					newVal = point.y - inc;
				}*/

				point.update(inc3);
			}
		}, 2000);
	}
	
	function populateGuageChartsLocation8()
	{
		var gaugeOptions = {

				chart: {
					type: 'solidgauge'
				},

				title: null,

				pane: {
					center: ['50%', '85%'],
					size: '140%',
					startAngle: -90,
					endAngle: 90,
					background: {
						backgroundColor: (Highcharts.theme && Highcharts.theme.background2) || '#EEE',
						innerRadius: '60%',
						outerRadius: '100%',
						shape: 'arc'
					}
				},

				tooltip: {
					enabled: false
				},

				// the value axis
				yAxis: {
					stops: [
					        [0.1, '#55BF3B'], // green
					        [0.5, '#DDDF0D'], // yellow
					        [0.9, '#DF5353'] // red
					        ],
					        lineWidth: 0,
					        minorTickInterval: null,
					        tickPixelInterval: 400,
					        tickWidth: 0,
					        title: {
					        	y: -70
					        },
					        labels: {
					        	y: 16
					        }
				},

				plotOptions: {
					solidgauge: {
						dataLabels: {
							y: 5,
							borderWidth: 0,
							useHTML: true
						}
					}
				}
		};

		// The cpu gauge
		$('#container-cpu-location8').highcharts(Highcharts.merge(gaugeOptions, {
			yAxis: {
				min: 0,
				max: 2,
				title: {
					text: 'CPU'
				}
			},

			credits: {
				enabled: false
			},

			series: [{
				name: 'CPU',
				data: [0.0],
				dataLabels: {
					format: '<div style="text-align:center"><span style="font-size:25px;color:' +
					((Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black') + '">{y:.2f}</span><br/>' +
					'<span style="font-size:12px;color:silver">GHz</span></div>'
				},
				tooltip: {
					valueSuffix: 'GHz'
				}
			}]

		}));

		// The cpu gauge
		$('#container-ram-location8').highcharts(Highcharts.merge(gaugeOptions, {
			yAxis: {
				min: 0,
				max: 1.0,
				title: {
					text: 'RAM'
				}
			},

			credits: {
				enabled: false
			},

			series: [{
				name: 'RAM',
				data: [0.0],
				dataLabels: {
					format: '<div style="text-align:center"><span style="font-size:25px;color:' +
					((Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black') + '">{y:.3f}</span><br/>' +
					'<span style="font-size:12px;color:silver">GB</span></div>'
				},
				tooltip: {
					valueSuffix: 'GB'
				}
			}]

		}));

		// The cpu gauge
		$('#container-storage-location8').highcharts(Highcharts.merge(gaugeOptions, {
			yAxis: {
				min: 0,
				max: 0.5,
				title: {
					text: 'Storage'
				}
			},

			credits: {
				enabled: false
			},

			series: [{
				name: 'Storage',
				data: [0.0],
				dataLabels: {
					format: '<div style="text-align:center"><span style="font-size:25px;color:' +
					((Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black') + '">{y:.3f}</span><br/>' +
					'<span style="font-size:12px;color:silver">GB</span></div>'
				},
				tooltip: {
					valueSuffix: 'GB'
				}
			}]

		}));

		// Bring life to the dials
		setInterval(function () {
			// CPU
			var chart = $('#container-cpu-location8').highcharts(),
			point,
			newVal,inc1,inc2,inc3,
			inc;

			
			var url = globalurl+"currResUtil?algoIdentifier="+sessionStorage.getItem("algoIdentifier",2)+"&locationNo=8";
			$.ajax({
				type: "GET",
				url: url,
				async:false,
				success: function(msg){
					//alert(msg);
					obj = jQuery.parseJSON( ''+ msg +'' );
					inc1=obj.ResourceUtil[0];
					inc2=obj.ResourceUtil[2]/1000;
					inc3=obj.ResourceUtil[1]/1000;

				},
				error: function () {
					alert("Error");
				}
			});
			
			if (chart) {
				point = chart.series[0].points[0];
				

				inc = inc1;
				/*newVal = point.y + inc;

				if (newVal < 0 || newVal > 1) {
					newVal = point.y - inc;
				}*/

				point.update(inc1);
			}

			// RAM
			chart = $('#container-ram-location8').highcharts();
			if (chart) {
				point = chart.series[0].points[0];
				inc = inc2;
				/*newVal = point.y + inc;

				if (newVal < 0 || newVal > 0.768) {
					newVal = point.y - inc;
				}*/

				point.update(inc2);
			}

			// Storage
			chart = $('#container-storage-location8').highcharts();
			if (chart) {
				point = chart.series[0].points[0];
				inc = inc3;
				/*newVal = point.y + inc;

				if (newVal < 0 || newVal > 7) {
					newVal = point.y - inc;
				}*/

				point.update(inc3);
			}
		}, 2000);
	}
	function populateGuageChartsLocation9()
	{
		var gaugeOptions = {

				chart: {
					type: 'solidgauge'
				},

				title: null,

				pane: {
					center: ['50%', '85%'],
					size: '140%',
					startAngle: -90,
					endAngle: 90,
					background: {
						backgroundColor: (Highcharts.theme && Highcharts.theme.background2) || '#EEE',
						innerRadius: '60%',
						outerRadius: '100%',
						shape: 'arc'
					}
				},

				tooltip: {
					enabled: false
				},

				// the value axis
				yAxis: {
					stops: [
					        [0.1, '#55BF3B'], // green
					        [0.5, '#DDDF0D'], // yellow
					        [0.9, '#DF5353'] // red
					        ],
					        lineWidth: 0,
					        minorTickInterval: null,
					        tickPixelInterval: 400,
					        tickWidth: 0,
					        title: {
					        	y: -70
					        },
					        labels: {
					        	y: 16
					        }
				},

				plotOptions: {
					solidgauge: {
						dataLabels: {
							y: 5,
							borderWidth: 0,
							useHTML: true
						}
					}
				}
		};

		// The cpu gauge
		$('#container-cpu-location9').highcharts(Highcharts.merge(gaugeOptions, {
			yAxis: {
				min: 0,
				max: 2,
				title: {
					text: 'CPU'
				}
			},

			credits: {
				enabled: false
			},

			series: [{
				name: 'CPU',
				data: [0.0],
				dataLabels: {
					format: '<div style="text-align:center"><span style="font-size:25px;color:' +
					((Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black') + '">{y:.2f}</span><br/>' +
					'<span style="font-size:12px;color:silver">GHz</span></div>'
				},
				tooltip: {
					valueSuffix: 'GHz'
				}
			}]

		}));

		// The cpu gauge
		$('#container-ram-location9').highcharts(Highcharts.merge(gaugeOptions, {
			yAxis: {
				min: 0,
				max: 2.0,
				title: {
					text: 'RAM'
				}
			},

			credits: {
				enabled: false
			},

			series: [{
				name: 'RAM',
				data: [0.0],
				dataLabels: {
					format: '<div style="text-align:center"><span style="font-size:25px;color:' +
					((Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black') + '">{y:.3f}</span><br/>' +
					'<span style="font-size:12px;color:silver">GB</span></div>'
				},
				tooltip: {
					valueSuffix: 'GB'
				}
			}]

		}));

		// The cpu gauge
		$('#container-storage-location9').highcharts(Highcharts.merge(gaugeOptions, {
			yAxis: {
				min: 0,
				max: 0.5,
				title: {
					text: 'Storage'
				}
			},

			credits: {
				enabled: false
			},

			series: [{
				name: 'Storage',
				data: [0.0],
				dataLabels: {
					format: '<div style="text-align:center"><span style="font-size:25px;color:' +
					((Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black') + '">{y:.3f}</span><br/>' +
					'<span style="font-size:12px;color:silver">GB</span></div>'
				},
				tooltip: {
					valueSuffix: 'GB'
				}
			}]

		}));

		// Bring life to the dials
		setInterval(function () {
			// CPU
			var chart = $('#container-cpu-location9').highcharts(),
			point,
			newVal,inc1,inc2,inc3,
			inc;

			
			var url = globalurl+"currResUtil?algoIdentifier="+sessionStorage.getItem("algoIdentifier",2)+"&locationNo=9";
			$.ajax({
				type: "GET",
				url: url,
				async:false,
				success: function(msg){
					//alert(msg);
					obj = jQuery.parseJSON( ''+ msg +'' );
					inc1=obj.ResourceUtil[0];
					inc2=obj.ResourceUtil[2]/1000;
					inc3=obj.ResourceUtil[1]/1000;

				},
				error: function () {
					alert("Error");
				}
			});
			
			if (chart) {
				point = chart.series[0].points[0];
				

				inc = inc1;
				/*newVal = point.y + inc;

				if (newVal < 0 || newVal > 1) {
					newVal = point.y - inc;
				}*/

				point.update(inc1);
			}

			// RAM
			chart = $('#container-ram-location9').highcharts();
			if (chart) {
				point = chart.series[0].points[0];
				inc = inc2;
				/*newVal = point.y + inc;

				if (newVal < 0 || newVal > 0.768) {
					newVal = point.y - inc;
				}*/

				point.update(inc2);
			}

			// Storage
			chart = $('#container-storage-location9').highcharts();
			if (chart) {
				point = chart.series[0].points[0];
				inc = inc3;
				/*newVal = point.y + inc;

				if (newVal < 0 || newVal > 7) {
					newVal = point.y - inc;
				}*/

				point.update(inc3);
			}
		}, 2000);
	}

	populateGuageChartsLocation1();
	populateGuageChartsLocation2();
	populateGuageChartsLocation3();
	populateGuageChartsLocation4();
	populateGuageChartsLocation5();
	populateGuageChartsLocation6();
	populateGuageChartsLocation7();
	populateGuageChartsLocation8();
	populateGuageChartsLocation9();
	
	$("#submit").click(function(){
		sessionStorage.setItem("algoIdentifier",$("#algorithm").val());
		
		
	});
	
	
	
	$("#getGraphs").click(function()
			{
		
		
		
		/*
		var obj1 = '{"ReqNoReqTypeRespTime":[[1,1,52.918],[2,1,60.186],[3,1,64.915],[4,1,71.745],[5,1,77.06],[6,1,86.008],[7,2,43.953],[8,2,45.258],[9,2,48.315],[10,2,49.774],[11,2,52.579],[12,3,52.114]]}';
		var obj2 = '{"ReqNoReqTypeRespTime":[[1,1,52.918],[2,1,60.186],[3,1,64.915],[4,1,71.745],[5,1,77.06],[6,1,86.008],[7,2,43.953],[8,2,45.258],[9,2,48.315],[10,2,49.774],[11,2,52.579],[12,3,52.114]]}';
		var obj3 = '{"ReqNoReqTypeRespTime":[[1,1,52.918],[2,1,60.186],[3,1,64.915],[4,1,71.745],[5,1,77.06],[6,1,86.008],[7,2,43.953],[8,2,45.258],[9,2,48.315],[10,2,49.774],[11,2,52.579],[12,3,52.114]]}';
		var obj4 = '{"ReqNoReqTypeRespTime":[[1,1,52.918],[2,1,60.186],[3,1,64.915],[4,1,71.745],[5,1,77.06],[6,1,86.008],[7,2,43.953],[8,2,45.258],[9,2,48.315],[10,2,49.774],[11,2,52.579],[12,3,52.114]]}';

		obj1 = eval("(" + obj1 + ')');
		obj2 = eval("(" + obj2 + ')');
		obj3 = eval("(" + obj3 + ')');
		obj4 = eval("(" + obj4 + ')');*/
		noOfRequests = $("#request").val();
		
		getResponseTimeGraphs();
		getLocationGraph();
		getAvgResponseTimeGraphs();
		populateHoneyBeeTable();
		populateAntTable();
		populateLocationAwareTable();
		populatePSOTable();

			});

});
