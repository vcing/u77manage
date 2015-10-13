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

app.controller('GameNewCtrl',['$scope','$rootScope','GameService','UploadService',
	function($scope,$rootScope,GameService,UploadService){
		$scope.game_types = [
			{id:1,label:'web'},
			{id:2,label:'PC'},
			{id:3,label:'手机'},
			{id:4,label:'收费'},
			{id:5,label:'iOS'},
			{id:6,label:'Android'},
			{id:7,label:'I & A'},
			{id:8,label:'原创游戏'}
		];

		$scope.url_types = [
			{id:1,label:'swf'},
			{id:2,label:'unity3D'},
			{id:3,label:'iframe'},
			{id:4,label:'站外链接'}
		];

		$scope.game = {};

		UploadService.file().then(function(fn){
			$scope.uploadFile = function($file){
				fn($file,function(resp){
					if(resp.status == 200 && resp.statusText == 'OK'){
						$scope.game.content.upyun_url = resp.data.url;
					}else{
						alert('上传失败,请重试.');
					}
					$scope.filePercentage = null;
				},function(evt){
					$scope.filePercentage = evt.percentage;
				});
			}
		});

		UploadService.image().then(function(fn){
			$scope.uploadImage = function($file){
				fn($file,function(resp){
					if(resp.status == 200 && resp.statusText == 'OK'){
						$scope.game.image = resp.data.url;
					}else{
						alert('上传失败,请重试.');
					}
					$scope.imagePercentage = null;
				},function(evt){
					$scope.imagePercentage = evt.percentage;
				});
			}
		});		

		$scope.$watch('game_type',function(){
			if($scope.game_type)$scope.game.type = $scope.game_type.id;
		});

		$scope.$watch('url_type',function(){
			if($scope.url_type)$scope.game.content.url_type = $scope.url_type.id;
		});

		$scope.submit = function(){
			$.post(ManagePath+'/game/create',$scope.game,function(data){
				// TODO
			});
		}
	}]);

app.controller('GameEditCtrl',['$scope','$rootScope','GameService','$stateParams','UploadService',
	function($scope,$rootScope,GameService,$stateParams,UploadService){
		$scope.game_types = [
			{id:1,label:'web'},
			{id:2,label:'PC'},
			{id:3,label:'手机'},
			{id:4,label:'收费'},
			{id:5,label:'iOS'},
			{id:6,label:'Android'},
			{id:7,label:'I & A'},
			{id:8,label:'原创游戏'}
		];

		$scope.url_types = [
			{id:1,label:'swf'},
			{id:2,label:'unity3D'},
			{id:3,label:'iframe'},
			{id:4,label:'站外链接'}
		];

		if(!$stateParams.id || $stateParams == 0){
			// new game
			
		}else{
			// edit game
			GameService.promise($stateParams.id).then(function(data){
				console.log(data);
				$scope.game = data;
				$scope.game_type = $scope.game_types[$scope.game.type-1];
				$scope.url_type = $scope.url_types[$scope.game.content.url_type-1];
			});
		}

		UploadService.file().then(function(fn){
			$scope.uploadFile = function($file){
				fn($file,function(resp){
					if(resp.status == 200 && resp.statusText == 'OK'){
						$scope.game.content.upyun_url = resp.data.url;
					}else{
						alert('上传失败,请重试.');
					}
					$scope.filePercentage = null;
				},function(evt){
					$scope.filePercentage = evt.percentage;
				});
			}
		});

		UploadService.image().then(function(fn){
			$scope.uploadImage = function($file){
				fn($file,function(resp){
					if(resp.status == 200 && resp.statusText == 'OK'){
						$scope.game.image = resp.data.url;
					}else{
						alert('上传失败,请重试.');
					}
					$scope.imagePercentage = null;
				},function(evt){
					$scope.imagePercentage = evt.percentage;
				});
			}
		});		

		$scope.$watch('game_type',function(){
			if($scope.game_type)$scope.game.type = $scope.game_type.id;
		});

		$scope.$watch('url_type',function(){
			if($scope.url_type)$scope.game.content.url_type = $scope.url_type.id;
		});

		$scope.submit = function(){
			$.post(ManagePath+'/game/update',$scope.game,function(data){
				// TODO
			});
		}
	}]);