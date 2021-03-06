$(document).ready(function() {

	var data = [
	    {
	        value: 272,
	        color:"#F7464A",
	        highlight: "#FF5A5E",
	        label: "J. Walter Wilson"
	    },
	    {
	        value: 130,
	        color: "#46BFBD",
	        highlight: "#5AD3D1",
	        label: "JWOWW"
	    },
	    {
	        value: 23,
	        color: "#FDB45C",
	        highlight: "#FFC870",
	        label: "J double-u double-u"
	    }
	];


	var options = {
	    //Boolean - Whether we should show a stroke on each segment
	    segmentShowStroke : true,

	    //String - The colour of each segment stroke
	    segmentStrokeColor : "#fff",

	    //Number - The width of each segment stroke
	    segmentStrokeWidth : 2,

	    //Number - The percentage of the chart that we cut out of the middle
	    percentageInnerCutout : 0, // This is 0 for Pie charts

	    //Number - Amount of animation steps
	    animationSteps : 100,

	    //String - Animation easing effect
	    animationEasing : "easeOutBounce",

	    //Boolean - Whether we animate the rotation of the Doughnut
	    animateRotate : true,

	    //Boolean - Whether we animate scaling the Doughnut from the centre
	    animateScale : false,

	    //String - A legend template
	    legendTemplate : 
	    "<ul class=\"<%=name.toLowerCase()%>-legend\" id=\"legend\">" + 
	    	"<% for (var i=0; i<segments.length; i++){%>" +
	    		"<li>" + 
	    			"<div class=\"legend-color-icon\" style=\"background-color:<%=segments[i].fillColor%>\">" +
	    			"</div>" +
	    			"<%if(segments[i].label){%>&nbsp&nbsp<%=segments[i].label%><%}%>" +
	    		"</li>" + 
	    	"<%}%>" +
	    "</ul>"

	}

	for (ind in data) {
		$('#answers').append('<li class="answer-entry">' + data[ind].label + '</li>');
	}

	$('#pie-box').hide();

	$('.answer-entry').click(function() {
		$('#answers-box').hide();
		$('#pie-box').show();

		var ctx = $("#pie").get(0).getContext("2d");
		var pie = new Chart(ctx).Pie(data, options);
	 
		var legend = pie.generateLegend();
	  	//and append it to your page somewhere
	  	$('#pie-box').append(legend);
	});




});
