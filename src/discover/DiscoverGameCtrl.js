app.controller('DiscoverGameCtrl',['$scope','$state','DiscoverServer',
	function($scope,$state,DiscoverServer){
		$scope.refresh = function(){
			DiscoverServer.gameList($scope.options).then(function(result){
				$scope.games = result;
			});
		}

		$scope.nextPage = function(){
			if($scope.games.length < 20){
				alert('已经是最后一页了');
			}else{
				$scope.options.page++;
				$scope.refresh();
			}
		}

		$scope.prevPage = function(){
			if($scope.options.page <= 1){
				alert('已经是第一页了');
			}else{
				$scope.options.page--;
				$scope.refresh();
			}
		}

		$scope.save = function(game){
			var _game = {
				u77Id:game.u77Id,
				objectId:game.objectId
			}
			DiscoverServer.gameUpdate(_game).then(function(result){
				if(result.status == 0){
					alert('修改游戏成功');
				}else{
					alert('修改游戏失败,请检查后重试');
				}
			});
		}

		$scope.checkDiscover = function(game){
			var url = $state.href('base.discoverWithGameId',{gameId:game.objectId});
			window.open(url);
		}

		$scope.delete = function(game){
			DiscoverServer.gameDelete(game).then(function(result){
				if(result.status == 0){
					game.hide = true;
					alert('删除游戏成功');
				}else{
					alert('删除游戏失败,请检查后重试');
				}
			});
		}

		$scope.search = function(e){
			var keycode = window.event?e.keyCode:e.which;
			if(keycode == 13){
				$scope.refresh();
			}
		}

		$scope.options = {
			page:1
		};
		if($state.params.id){
			$scope.options.searchType = "objectId";
			$scope.options.keywords = $state.params.id;
		}
		$scope.refresh();
	}]);