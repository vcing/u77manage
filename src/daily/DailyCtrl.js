app.controller('BigEyeCtrl',['$scope','$rootScope',
	function($scope,$rootScope){
		$scope.list = [];
		for (var i = 6; i >= 0; i--) {
			$scope.list.push({
				image:"/img/big-eye-test.jpg",
				text:'介绍',
				url:'#'
			});	
		};

		$scope.up = function(index){
			if(index <= 0){
				return;
			}
			var _temp = $scope.list[index-1];
			$scope.list[index-1] = $scope.list[index];
			$scope.list[index] = _temp;
		}

		$scope.down = function(index){
			if(index >= $scope.list.length - 1){
				return;
			}
			var _temp = $scope.list[index + 1];
			$scope.list[index + 1] = $scope.list[index];
			$scope.list[index] = _temp;
		}

		$scope.slideControl = 0;
		setInterval(function(){
			$scope.$apply(function(){
				if($scope.slideControl < $scope.list.length -1){
					$scope.slideControl++	
				}else{
					$scope.slideControl = 0;
				}	
			});
			
		},3000)
	}]);

app.controller('GameExamineCtrl',['$scope','$rootScope','DailyGameVilidService',
	function($scope,$rootScope,DailyGameVilidService){
		DailyGameVilidService.promise().then(function(data){
			console.log(data);
			$scope.gameList = data.list;
		});
	}]);

app.controller('ReportExamineCtrl',['$scope','$rootScope','DailyReportService',
	function($scope,$rootScope,DailyReportService){
		DailyReportService.promise().then(function(data){
			$scope.reportList = data;
		});
		
	}]);