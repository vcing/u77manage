/**
 * angular 启动文件
 * 
 */

var app = angular.module('u77manage',['ui.router','ui.bootstrap','ngTouch','infinite-scroll']);
var BasePath = 'http://dev.u77.com/admin/';
var Path = 'http://dev.u77.com';
var AvatarPath = 'http://img.u77.com/avatar/';
app.config(['$stateProvider','$urlRouterProvider',
	function($stateProvider,$urlRouterProvider){

		$stateProvider
			.state('base',{
				url:'',
				views:{
					'main':{
						templateUrl:'base/base.html',
						controller:'BaseCtrl'
					}
				}
			})
			.state('base.dashboard',{
				url:'/dashboard',
				views:{
					'content':{
						templateUrl:'dashboard/index.html',
						controller:'DashboardCtrl'
					}
				}
			})
			// .state('base.daily',{
			// 	url:'/daily',
			// 	views:{
			// 		'content':{
			// 			templateUrl:'daily/big-eye.html',
			// 			controller:'BigEyeCtrl'
			// 		}
			// 	}
			// })
			.state('base.dailyBigEye',{
				url:'/daily-big-eye',
				views:{
					'content':{
						templateUrl:'daily/big-eye.html',
						controller:'BigEyeCtrl'
					}
				}
			})
			.state('base.dailyGameExamine',{
				url:'/daily-game-examine',
				views:{
					'content':{
						templateUrl:'daily/game-examine.html',
						controller:'GameExamineCtrl'
					}
				}
			})
			.state('base.dailyReportExamine',{
				url:'/daily-report-examine',
				views:{
					'content':{
						templateUrl:'daily/report-examine.html',
						controller:'ReportExamineCtrl'
					}
				}
			})
			.state('base.gameList',{
				url:'/game-list',
				views:{
					'content':{
						templateUrl:'game/game-lists.html',
						controller:'GameListCtrl'
					}
				}
			})

		// $urlRouterProvider.when("", "/dashboard");
		// $urlRouterProvider.otherwise('/dashboard');

		// 时间本地化
		moment.locale('zh-cn');
	}]);

app.run(['$rootScope','$state',
	function($rootScope,$state){
		$rootScope.loading = true;
		$rootScope.BasePath = BasePath;
		$rootScope.Path = Path;
		$rootScope.AvatarPath = AvatarPath;
	}])
app.controller('BaseCtrl',['$scope','$rootScope',
	function($scope,$rootScope){

	}]);

app.controller('SingleReportCtrl',['$scope','$rootScope',
	function($scope,$rootScope){
		
	}]);
app.directive('mainSidebar',function(){
	return {
		restrict:'A',
		templateUrl:'/base/sidebar.html',
		replace:true,
	};
});

app.directive('navHeader',function(){
	return {
		restrict:'A',
		templateUrl:'/base/nav-header.html',
		replace:true,
		// link:function($scope,element,attrs){

		// }
	};
});

app.directive('navMessageList',function(){
	return {
		restrict:'A',
		templateUrl:'/base/nav-message-list.html',
		replace:true,
		// link:function($scope,element,attrs){

		// }
	};
});

app.directive('navNotificationList',function(){
	return {
		restrict:'A',
		templateUrl:'/base/nav-notification-list.html',
		replace:true,
		// link:function($scope,element,attrs){

		// }
	};
});

app.directive('navTaskList',function(){
	return {
		restrict:'A',
		templateUrl:'/base/nav-task-list.html',
		replace:true,
		// link:function($scope,element,attrs){

		// }
	};
});
app.filter(  
    'to_trusted', ['$sce', function ($sce) {  
        return function (text) {  
            return $sce.trustAsHtml(html_decode(text));  
        }  
    }]
)

app.filter('fromNow',[function(){
	return function(unix){
		return moment.unix(parseInt(unix)).fromNow();
	}
}]);

app.filter('time',[function(){
	return function(unix){
		return moment.unix(parseInt(unix)).format("YY年MM月DD日 H:mm");
	}
}])

app.filter('onlyDate',[function(){
	return function(unix){
		return moment.unix(parseInt(unix)).format("YY-MM-DD");
	}
}])

app.filter('onlyTime',[function(){
	return function(unix){
		return moment.unix(parseInt(unix)).format('H:mm');
	}
}])

function html_encode(str)  
{  
  vars ="";  
  if(str.length == 0)return"";  
  s = str.replace(/&/g,"&amp;");  //1
  s = s.replace(/</g,"&lt;");  
  s = s.replace(/>/g,"&gt;");  
  s = s.replace(/ /g,"&nbsp;");  
  s = s.replace(/\'/g,"&#39;");  
  s = s.replace(/\"/g, "&quot;");  
  s = s.replace(/\n/g, "<br>");  
  return s;  
}  
 
function html_decode(str)  
{  
  var s = "";  
  if (str.length == 0) return "";  
  s = str.replace(/&amp;/g, "&");   //2 
  s = s.replace(/&lt;/g, "<");  
  s = s.replace(/&gt;/g, ">");  
  s = s.replace(/&nbsp;/g, "");  
  s = s.replace(/&#39;/g, "\'");  
  s = s.replace(/&quot;/g, "\"");  
  s = s.replace(/<br>/g,"\n");  
  return s;  
} 
app.directive('reportList',function(){
	return {
		restrict:'A',
		templateUrl:'/base/report-list.html',
		replace:true,
	};
})

app.directive('reportListBlock',function(){
	return {
		restrict:'A',
		templateUrl:'/base/report-list-block.html',
		replace:true,
		controller:'SingleReportCtrl'
	}
})
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
app.controller('DashboardCtrl',['$scope','$rootScope',
	function($scope,$rootScope){

	}]);
app.controller('BigEyeCtrl',['$scope','$rootScope',
	function($scope,$rootScope){
		$scope.list = [];
		for (var i = 6; i >= 0; i--) {
			$scope.list.push({
				image:"/img/big-eye-test.jpg",
				text:'介绍',
				url:'#'
			});	
		};

		$scope.up = function(index){
			if(index <= 0){
				return;
			}
			var _temp = $scope.list[index-1];
			$scope.list[index-1] = $scope.list[index];
			$scope.list[index] = _temp;
		}

		$scope.down = function(index){
			if(index >= $scope.list.length - 1){
				return;
			}
			var _temp = $scope.list[index + 1];
			$scope.list[index + 1] = $scope.list[index];
			$scope.list[index] = _temp;
		}

		$scope.slideControl = 0;
		setInterval(function(){
			$scope.$apply(function(){
				if($scope.slideControl < $scope.list.length -1){
					$scope.slideControl++	
				}else{
					$scope.slideControl = 0;
				}	
			});
			
		},3000)
	}]);

app.controller('GameExamineCtrl',['$scope','$rootScope','DailyGameVilidService',
	function($scope,$rootScope,DailyGameVilidService){
		DailyGameVilidService.promise().then(function(data){
			console.log(data);
			$scope.gameList = data.list;
		});
	}]);

app.controller('ReportExamineCtrl',['$scope','$rootScope','DailyReportService',
	function($scope,$rootScope,DailyReportService){
		DailyReportService.promise().then(function(data){
			$scope.reportList = data;
		});
		
	}]);
// const T_TYPE_COMMENT = 1;			// comment
// const T_TYPE_POST = 2;				// post
// const T_TYPE_VIDEO = 3;				// video
// const T_TYPE_GAMEREC = 4;			// game rec
app.service('DailyReportService',['$http','$q','ReportListInfoService',
	function($http,$q,ReportListInfoService){
		return {
			promise:function(id){
				var deffered = $q.defer();
				$http.get(BasePath+'api/daily_report_list').success(function(data){
					ReportListInfoService.list(data.list).then(function(data){
						deffered.resolve(data);
					});
				});
				return deffered.promise;
			}
		}
	}]);

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



app.controller('SingleGameCtrl',['$scope','$rootScope',
	function($scope,$rootScope){

	}]);

app.controller('GameListCtrl',['$scope','$rootScope','GameService',
	function($scope,$rootScope,GameService){
		GameService.list().then(function(list){
			$scope.gameList = list.list;
		});	
	}]);
app.directive('gameList',function(){
	return {
		restrict:'A',
		templateUrl:'/game/game-list.html',
		replace:true,
	};
});

app.directive('gameListBlock',function(){
	return {
		restrict:'A',
		templateUrl:'/game/game-list-block.html',
		replace:true,
		controller:'SingleGameCtrl'
	}
});
// app.service('GameListService',['GameService',
// 	function(GameService){
// 		return {
// 			get:function(index,count,success){
// 				console.log(index+count+success);
// 			}
// 		}
// 	}]);