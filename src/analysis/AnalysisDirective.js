app.directive('chartEdit',function(){
	return {
		restrict:'A',
		templateUrl:'/static/analysis/chart-edit.html',
		replace:true,
		scope:{
			chart:'=chartEdit'
		},
		controller:'ChartEditCtrl'
	}
});

app.directive('chartShow',function(){
	return {
		restrict:'A',
		templateUrl:'/static/analysis/chart.html',
		replace:true,
		scope:{
			chart:'=chartShow'
		},
		controller:'ChartShowCtrl'
	}
})