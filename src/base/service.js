app.service('UserService',['$q',
	function($q){
		return {
			promise:function(id){
				var deffered = $q.defer();
				$.get(BasePath+'api/get_user?id='+id,function(data){
					deffered.resolve(JSON.parse(data));
				});
				return deffered.promise;
			}
		}
	}]);

app.service('CommentService',['$q',
	function($q){
		return {
			promise:function(id){
				var deffered = $q.defer();
				$.get(BasePath+'api/get_comment?id='+id,function(data){
					deffered.resolve(JSON.parse(data));
				});
				return deffered.promise;
			}
		}
	}]);

app.service('PostService',['$q',
	function($q){
		return {
			promise:function(id){
				var deffered = $q.defer();
				$.get(BasePath+'api/get_comment?id='+id,function(data){
					deffered.resolve(JSON.parse(data));
				});
				return deffered.promise;
			}
		}
	}]);

app.service('VideoService',['$q',
	function($q){
		return {
			promise:function(id){
				var deffered = $q.defer();
				$.get(BasePath+'api/get_video?id='+id,function(data){
					deffered.resolve(JSON.parse(data));
				});
				return deffered.promise;
			}
		}
	}]);

app.service('GameService',['$q',
	function($q){
		return {
			promise:function(id){
				var deffered = $q.defer();
				$.get(BasePath+'api/get_game?id='+id,function(data){
					deffered.resolve(JSON.parse(data));
				});
				return deffered.promise;
			},
			// type 类型 1-web 2-pc 3-手机 4-收费 5-ios 6-android 7-I&A 8原创游戏
			// status 状态 99已发布 1未发布 0未审核 3退稿
			// search_type key-关键词 id-id
			list:function(options){
				var deffered = $q.defer();
				$.post(BasePath+'api/get_game_list',options,function(data){
					deffered.resolve(JSON.parse(data));
				});
				return deffered.promise;
			}
		}
	}]);

app.service('GameRecService',['$q',
	function($q){
		return {
			promise:function(id){
				var deffered = $q.defer();
				$.get(BasePath+'api/get_gamerec?id='+id,function(data){
					deffered.resolve(JSON.parse(data));
				});
				return deffered.promise;
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