app.service('GiftService',['$q',
	function($q){
		var _games;
		return {
			getGames:function(){
				var deffered = $q.defer();
				if(_games){
					deffered.resolve(_games);
				}else{
					$.get(ChargePath + 'server',function(result){
						_games = result;
						deffered.resolve(result);
					});	
				}
				return deffered.promise;
			},
			create:function(options){
				var deffered = $q.defer();
				$.post(ChargePath + 'gift',options,function(result){
					deffered.resolve(result);
				});
				return deffered.promise;
			},
			getList:function() {
				var deffered = $q.defer();
				$.get(ChargePath + 'gift',function(result){
					deffered.resolve(result);
				});
				return deffered.promise;
			},
			get:function(objectId) {
				var deffered = $q.defer();
				$.get(ChargePath + 'gift/'+objectId,function(result){
					result.game = result.game.objectId;
					result.desc = result.desc.replace(/<br\/>/g,'\n');
					deffered.resolve(result);
				});
				return deffered.promise;
			},
			remove:function(objectId) {
				var deffered = $q.defer();
				$.ajax({
					url: ChargePath + 'gift/' + objectId,
					type: 'DELETE',
					success: function(result) {
						deffered.resolve(result);
					}
				});
				return deffered.promise;
			}
		}
	}]);