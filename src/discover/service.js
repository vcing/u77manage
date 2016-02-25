app.service('DiscoverServer',['$q',
	function($q){
		return {
			discoverList:function(options){
				options.debug = true;
				var deffered = $q.defer();
				$.ajax({
					url:DiscoverPath + 'discover/list',
					data:options,
					type:'get',
					success:function(result){
						deffered.resolve(result);
					}
				});
				return deffered.promise
			},
			discoverDelete:function(discover){
				var deffered = $q.defer();
				$.ajax({
					url:DiscoverPath+'discover/'+discover.objectId,
					type:'delete',
					success:function(result){
						deffered.resolve(result);
					}
				});
				return deffered.promise;
			},
			discoverGet:function(id){
				var deffered = $q.defer();
				$.ajax({
					url:DiscoverPath+'discover/list?searchType=discoverId&keywords='+id,
					type:'get',
					success:function(result){
						deffered.resolve(result);
					}
				});
				return deffered.promise;
			},
			gameList:function(options){
				var deffered = $q.defer();
				$.ajax({
					url:DiscoverPath + 'game/list',
					data:options,
					type:'get',
					success:function(result){
						deffered.resolve(result);
					}
				});
				return deffered.promise;
			},
			gameDelete:function(game){
				var deffered = $q.defer();
				$.ajax({
					url:DiscoverPath+'game/'+game.objectId,
					type:'delete',
					success:function(result){
						deffered.resolve(result);
					}
				});
				return deffered.promise;
			},
			gameUpdate:function(game){
				var deffered = $q.defer();
				$.ajax({
					url:DiscoverPath+'game/'+game.objectId,
					data:game,
					type:'post',
					success:function(result){
						deffered.resolve(result);
					}
				})
				return deffered.promise;
			}
		}
	}]);