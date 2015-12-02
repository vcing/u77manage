app.controller('DashboardCtrl',['$scope','$rootScope','DashboardService',
	function($scope,$rootScope,DashboardService){
		// 昨日数据
		DashboardService.yesterdayData().then(function(data){
			$scope.yesterdayData = data;
		});

		DashboardService.sevenDayIncome().then(function(data){
			$scope.sevenDayIncome = data;
		});

		DashboardService.dayIncome().then(function(data){
			$scope.dayIncome = data;
		})

		$scope.lineChartClick = function(e){
			DashboardService.dayIncome(e[0].label).then(function(data){
				$scope.dayIncome = data;
				$scope.selectDayIncome = e[0].label;
			});
		}
	}]);