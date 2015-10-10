// const T_TYPE_COMMENT = 1;			// comment
// const T_TYPE_POST = 2;				// post
// const T_TYPE_VIDEO = 3;				// video
// const T_TYPE_GAMEREC = 4;			// game rec

app.service('DailyGameVilidService',['$http','$q','GameService',
	function($http,$q,GameService){
		return {
			promise:function(){
				var deffered = $q.defer();
				var options = {
					status:0
				}
				GameService.list(options).then(function(data){
					deffered.resolve(data);
				});
				return deffered.promise;
			}
		}
	}]);

