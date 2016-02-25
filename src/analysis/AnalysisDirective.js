app.directive('newChart',function(){
	return {
		restrict:'A',
		templateUrl:'/static/analysis/new-chart.html',
		replace:true,
		scope:{
			chart:'=newChart'
		},
		controller:'NewChartCtrl'
	}
});

app.directive('showChart',function(){
	return {
		restrict:'A',
		templateUrl:'/static/analysis/chart.html',
		replace:true,
		controller:'ShowChartCtrl'
	}
})