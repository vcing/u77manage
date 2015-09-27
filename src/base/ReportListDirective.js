app.directive('reportList',function(){
	return {
		restrict:'A',
		templateUrl:'/base/report-list.html',
		replace:true,
	};
})

app.directive('reportListBlock',function(){
	return {
		restrict:'A',
		templateUrl:'/base/report-list-block.html',
		replace:true,
		controller:'SingleReportCtrl'
	}
})