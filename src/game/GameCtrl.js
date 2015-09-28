app.controller('SingleGameCtrl',['$scope','$rootScope',
	function($scope,$rootScope){

	}]);

app.controller('GameListCtrl',['$scope','$rootScope','GameService',
	function($scope,$rootScope,GameService){
		GameService.list().then(function(list){
			$scope.gameList = list.list;
		});	
	}]);