app.directive('reportList',function(){
	return {
		restrict:'A',
		templateUrl:'/static/base/report-list.html',
		replace:true,
		controller:'ListReportCtrl'
	};
})

app.directive('reportListBlock',function(){
	return {
		restrict:'A',
		templateUrl:'/static/base/report-list-block.html',
		replace:true,
		controller:'SingleReportCtrl'
	}
})