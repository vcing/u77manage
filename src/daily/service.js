// const T_TYPE_COMMENT = 1;			// comment
// const T_TYPE_POST = 2;				// post
// const T_TYPE_VIDEO = 3;				// video
// const T_TYPE_GAMEREC = 4;			// game rec
app.service('DailyReportService',['$http','$q','CommentService','UserService','PostService','VideoService','GameService'
	function($http,$q,CommentService,UserService,PostService,VideoService,GameService){
		return {
			promise:function(id){
				var deffered = $q.defer();
				$http.get(BasePath+'api/daily_report_list').success(function(data){
					var allDone = [];
					data.list.forEach(function(report){
						var reporterPromise = UserService.promise(report.userid)
						var gamePromise;
						switch(report.t_type){
							case 1:
								var gameDeffered = $q.defer();
								CommentService.promise(report.tid).then(function(data){
									GameService.promise(data.tid).then(function(game){
										gameDeffered.resolve(game);
									});
								});
								gamePromise = gameDeffered.promise;
								break;
							case 2:
								var gameDeffered = $q.defer();
								PostService.promise(report.tid).then(function(data){
									GameService.promise(data.gameid).then(function(game){
										gameDeffered.resolve(game);
									});
								});
								gamePromise = gameDeffered.promise;
								break;
							case 3:
								var gameDeffered = $q.defer();
								VideoService.promise(report.tid).then(function(data){
									GameService.promise(data.tid).then(function(game){
										gameDeffered.resolve(game);
									});
								});
								gamePromise = gameDeffered.promise;
								break;
							case 4:
								var gameDeffered = $q.defer();
								GameRecService.promise(data.tid).then(function(game){
									gameDeffered.resolve(game);
								});
								gamePromise = gameDeffered.promise;
								break;
						}


						// CommentService.promise(report.tid);
					});
					// deffered.resolve(data);
				});
				return deffered.promise;
			}
		}
	}]);