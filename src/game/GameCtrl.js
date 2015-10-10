app.controller('SingleGameCtrl',['$scope','$rootScope',
	function($scope,$rootScope){

	}]);

app.controller('ListGameCtrl',['$scope','$rootScope','GameService',
	function($scope,$rootScope,GameService){
		$scope.options.search_type = 'id';
		$scope.change_type = function(type){
			$scope.options.type = type;
			query();
		}

		$scope.change_status = function(status){
			$scope.options.status = status;
			query();
		}

		$scope.change_search_type = function(type){
			$scope.options.search_type = type;
		}

		$scope.game_search = function(e){
			var keycode = window.event?e.keyCode:e.which;
			if(keycode == 13){
				query();
			}
		}

		function query(){
			GameService.list($scope.options).then(function(data){
				$scope.gameList = data.data;
			});
		}
	}]);

app.controller('GameListCtrl',['$scope','$rootScope','GameService',
	function($scope,$rootScope,GameService){
		$scope.options = {};
		GameService.list().then(function(data){
			$scope.gameList = data.data;
		});	
	}]);

app.controller('GameEditCtrl',['$scope','$rootScope','GameService','$stateParams',
	function($scope,$rootScope,GameService,$stateParams){
		if(!$stateParams.id || $stateParams == 0){
			// new game
			
		}else{
			// edit game

		}
	}]);