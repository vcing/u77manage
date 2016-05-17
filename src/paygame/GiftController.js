app.controller('GiftEditController',['$scope','$rootScope','$state','GiftService',
	function($scope,$rootScope,$state,GiftService){

		if($state.params.id){
			GiftService.get($state.params.id).then(function(gift){
				gift.start = moment.unix(gift.start).format('YYYY-MM-DD');
				gift.end = moment.unix(gift.end).format('YYYY-MM-DD');
				$scope.gift = gift;
			});
		}else{
			$scope.gift = {};
		}
		GiftService.getGames().then(function(games){
			$scope.games = [];
			$scope.objectGames = games;
			_.map(games,function(game,key){
				if(game.objectId != "56a8387a2e958a00597da3b2"){
					$scope.games.push(game);	
				}
			});
		});

		$scope.submit = function() {
			console.log($scope.gift);
			var _gift = {};

			if(!$scope.gift.start || !moment($scope.gift.start).unix() > 0){
				alert('请输入正确的开始时间');
				return false;
			}

			if(!$scope.gift.end || !moment($scope.gift.end).unix() > 0){
				alert('请输入结束的开始时间');
				return false;
			}

			if(!$scope.gift.name){
				alert('请输入礼包名称');
				return false;
			}

			if(!$scope.gift.game){
				alert('请选择游戏');
				return false;
			}

			_gift.name = $scope.gift.name;
			_gift.start = moment($scope.gift.start).unix();
			_gift.end = moment($scope.gift.end).unix();
			_gift.server = $scope.gift.server;
			_gift.game = $scope.gift.game;
			_gift.desc = $scope.gift.desc.replace(/\n/g,'<br/>');
			if($state.params.id){
				_gift.objectId = $state.params.id;
			}else{
				_gift.codes = $scope.gift.code.split('\n');
			}

			GiftService.create(_gift).then(function(result){
				if(result.status == 100){
					$state.go("base.giftList");
				}else{
					alert('添加失败,请稍后再试.');
				}
			});
		}
	}]);

app.controller('GiftListController',['$scope','$rootScope','GiftService',
	function($scope,$rootScope,GiftService){
		function init(){
			GiftService.getList().then(function(list){
				_.map(list,function(gift){
					console.log(gift);
					gift.chartData = [
						{
							value:gift.count - gift.remain,
							label:'已领取',
							color:"#ccc"
						},
						{
							value:gift.remain,
							label:'剩余',
							color:"#3c8dbc"
						}
					];
				});
				$scope.gifts = list;
			});
		}
		

		$scope.remove = function(objectId){
			if(confirm('确定删除该礼包？')){
				GiftService.remove(objectId).then(function(result){
					if(result.status == 100){
						alert('删除成功');
						init();
					}else{
						alert('删除失败');
					}
				});	
			}
		}

		init();
	}]);