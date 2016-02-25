app.controller('DiscoverCtrl',['$rootScope','$scope','$state','DiscoverServer',
	function($rootScope,$scope,$state,DiscoverServer){
		
		$scope.refresh = function(){
			var options = {
				page:$scope.options.currentPage,
			}
			if($scope.options.keywords){
				options.searchType = $scope.options.search_type || 'title';
				options.keywords = $scope.options.keywords;
			};
			
			switch($scope.options.type){
				case 1:
					options.isLast = 'true';
					break;
				case 2:
					options.isLast = 'false';
					break;
				default:
					delete options.isLast;
					break;
			}
			DiscoverServer.discoverList(options).then(function(result){
				$scope.discovers = result;
			});			
		}

		$scope.nextPage = function(){
			if($scope.discovers.length < 20){
				alert('已经是最后一页了');
			}else{
				$scope.options.currentPage++;
				$scope.refresh();
			}
		}

		$scope.prevPage = function(){
			if($scope.options.currentPage <= 1){
				alert('已经是第一页了');
			}else{
				$scope.options.currentPage--;
				$scope.refresh();
			}
		}

		$scope.checkGame = function(discover){
			var url = $state.href('base.discoverGameWithId',{id:discover.game.objectId});
			window.open(url);
		}

		$scope.delete = function(discover){
			if(!confirm('确定删除该条推荐吗?')){
				return ;
			}
			DiscoverServer.discoverDelete(discover).then(function(result){
				if(result.status == 0){
					discover.hide = true;
					alert('删除推荐成功.');
				}else{
					alert('删除推荐失败,请检查后重试.');
				}
			});
		}

		$scope.create = function(discover){
			var url = $state.href('base.gameNewWithDiscover',{discoverId:discover.discoverId});
			window.open(url);
		}

		$scope.search = function(e){
			var keycode = window.event?e.keyCode:e.which;
			if(keycode == 13){
				$scope.refresh();
			}
		}

		$scope.options = {
			currentPage:1
		}
		if($state.params.gameId){
			$scope.options.search_type = 'game';
			$scope.options.keywords = $state.params.gameId;
		}
		$scope.refresh();
	}]);