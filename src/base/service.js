app.service('ReportService',['$q',
	function($q){
		return {
			list:function(type){
				var data = {};
				var deffered = $q.defer();
				type = type ? type : null;
				if(type)data.type = type;
				$.get(ManagePath+'report/list',data,function(data){
					deffered.resolve(JSON.parse(data));
				});
				return deffered.promise;
			},
			ignore:function(id){
				var deffered = $q.defer();
				$.get(ManagePath+'report/ignore/'+id,function(data){
					if(data != 1){
						deffered.resolve(false);
					}else{
						deffered.resolve(true);
					}
				});
				return deffered.promise;
			},
			accept:function(id){
				$.get(ManagePath+'report/accept'+id,function(data){
					var deffered = $q.defer();
					if(data != 1){
						deffered.resolve(false);
					}else{
						deffered.resolve(true);
					}
					return deffered.promise;
				});
			}
		}
	}]);


// 举报列表
app.service('ReportListInfoService',['$q','CommentService','UserService','PostService','VideoService','GameService','GameRecService',
	function($q,CommentService,UserService,PostService,VideoService,GameService,GameRecService){
		return {
			list:function(list){
				var deffered = $q.defer();
				var allDone = [];
				list.forEach(function(report){
					var _deffered = $q.defer();
					var reporterPromise = UserService.promise(report.userid)
					var gamePromise;
					var reportedUserPromise;
					switch(report.t_type){
						case '1':
							var gameDeffered = $q.defer();
							var userDeffered = $q.defer();
							CommentService.promise(report.tid).then(function(data){
								report.report_content = data;
								UserService.promise(data.userid).then(function(user){
									userDeffered.resolve(user);
								});
								GameService.promise(data.tid).then(function(game){
									gameDeffered.resolve(game);
								});
							});
							reportedUserPromise = userDeffered.promise;
							gamePromise = gameDeffered.promise;
							break;
						case '2':
							var gameDeffered = $q.defer();
							var userDeffered = $q.defer();
							PostService.promise(report.tid).then(function(data){
								report.report_content = data;
								UserService.promise(data.userid).then(function(user){
									userDeffered.resolve(user);
								});
								GameService.promise(data.tid).then(function(game){
									gameDeffered.resolve(game);
								});
							});
							reportedUserPromise = userDeffered.promise;
							gamePromise = gameDeffered.promise;
							break;
						case '3':
							var gameDeffered = $q.defer();
							var userDeffered = $q.defer();
							VideoService.promise(report.tid).then(function(data){
								report.report_content = data;
								UserService.promise(data.userid).then(function(user){
									userDeffered.resolve(user);
								});
								GameService.promise(data.tid).then(function(game){
									gameDeffered.resolve(game);
								});
							});
							reportedUserPromise = userDeffered.promise;
							gamePromise = gameDeffered.promise;
							break;
						case '4':
							var gameDeffered = $q.defer();
							var userDeffered = $q.defer();
							GameRecService.promise(report.tid).then(function(game){
								report.report_content = game;
								UserService.promise(game.userid).then(function(user){
									userDeffered.resolve(user);
								});
								gameDeffered.resolve(game);
							});
							reportedUserPromise = userDeffered.promise;
							gamePromise = gameDeffered.promise;
							break;
					}

					$q.all([reporterPromise,gamePromise,reportedUserPromise]).then(function(arr){
						report.reporter = arr[0];
						report.report_game = arr[1];
						report.reported_user = arr[2];
						_deffered.resolve();
					});
					allDone.push(_deffered.promise);
				});

				$q.all(allDone).then(function(){
					deffered.resolve(list);
				});
				return deffered.promise;
			}
		}
		
	}]);