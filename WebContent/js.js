$(document).ready(function(){

$("#responseTime").hide();
$("#locationGraph").hide();
$("#responseGraph").hide();
$("#pieChart").hide();
$("#honeyBeeTableDiv").hide();
$("#antTableDiv").hide();
$("#locationAwareTableDiv").hide();
$("#psoTableDiv").hide();


$("#locationAwareTableDiv").hide();
var graphNames = new Array( "responseTime", "locationGraph","responseGraph","pieChart","antTableDiv" ,"honeyBeeTableDiv","locationAwareTableDiv","psoTableDiv","speedMeter");

$("#show").click(function(){
	$("#speedMeter").hide();
	var value = $("#chartSelected").val();
	for(i=0;i<graphNames.length;i++)
		if(graphNames[i] === value)
		{
			$("#"+value+"").show();
		}
		else{
			$("#"+graphNames[i]+"").hide();
		}
	
});

});




