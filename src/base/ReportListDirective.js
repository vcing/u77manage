app.directive('reportList',function(){
	return {
		restrict:'A',
		templateUrl:'/base/report-list.html',
		replace:true,
		controller:'ListReportCtrl'
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