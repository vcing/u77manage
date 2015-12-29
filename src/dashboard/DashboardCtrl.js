app.controller('DashboardCtrl',['$scope','$rootScope','DashboardService',
	function($scope,$rootScope,DashboardService){
		// 昨日数据
		DashboardService.yesterdayData().then(function(data){
			$scope.yesterdayData = data;
		});

		DashboardService.todayData().then(function(data){
			$scope.todayData = data;
		});

		

		// 七日收入
		DashboardService.sevenDayIncome().then(function(data){
			$scope.sevenDayIncome = data;

			DashboardService.sevendayData().then(function(data){
				var result = {
						labels:$scope.sevenDayIncome.labels,
						datasets:[{
								label:"新用户",
					            fillColor: "rgba(220,220,220,0.2)",
		                        strokeColor: "rgba(220,220,220,1)",
		                        pointColor: "rgba(220,220,220,1)",
		                        pointStrokeColor: "#fff",
		                        pointHighlightFill: "#fff",
		                        pointHighlightStroke: "rgba(220,220,220,1)",
								data:data.newUser
							},{
								label:"评论",
								fillColor: "rgba(151,187,205,0.2)",
					            strokeColor: "rgba(151,187,205,1)",
					            pointColor: "rgba(151,187,205,1)",
					            pointStrokeColor: "#fff",
					            pointHighlightFill: "#fff",
					            pointHighlightStroke: "rgba(151,187,205,1)",
								data:data.comment
							}]
					};
				window.aaa = result;
				$scope.sevenDayData = result;
				$scope.sevenDayLogin = {
					labels:$scope.sevenDayIncome.labels,
					datasets:[{
								label:"登录数",
					            fillColor: "rgba(151,187,205,0.2)",
					            strokeColor: "rgba(151,187,205,1)",
					            pointColor: "rgba(151,187,205,1)",
					            pointStrokeColor: "#fff",
					            pointHighlightFill: "#fff",
					            pointHighlightStroke: "rgba(151,187,205,1)",
								data:data.loginCount
							}]
				}
			});
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

		DashboardService.recentComment().then(function(data){
			$scope.recentComment = data;
		})

		$scope.commentRefresh = function(){
			DashboardService.recentComment().then(function(data){
				$scope.recentComment = data;
			})			
		}
	}]);