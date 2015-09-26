/**
 * angular 启动文件
 * 
 */

var app = angular.module('u77manage',['ui.router','ui.bootstrap','ngTouch']);
var BasePath = 'http://dev.u77.com/admin/';
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
			.state('base.daily',{
				url:'/daily',
				views:{
					'content':{
						templateUrl:'daily/big-eye.html',
						controller:'BigEyeCtrl'
					}
				}
			})
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

		// $urlRouterProvider.when("", "/dashboard");
		// $urlRouterProvider.otherwise('/dashboard');
	}]);

app.run(['$rootScope','$state',
	function($rootScope,$state){
		$rootScope.loading = true;
	}])
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

app.controller('GameExamineCtrl',['$scope','$rootScope',
	function($scope,$rootScope){

	}]);

app.controller('ReportExamineCtrl',['$scope','$rootScope','DailyReportService',
	function($scope,$rootScope,DailyReportService){
		DailyReportService.promise().then(function(data){
			console.log(data);
		});
		
	}]);
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

app.controller('BaseCtrl',['$scope','$rootScope',
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
app.directive('gameList',function(){
	return {
		restrict:'A',
		templateUrl:'/base/game-list-block.html',
		replace:true,
	};
})
app.service('UserService',['$http','$q',
	function($http,$q){
		return {
			promise:function(id){
				var deffered = $q.defer();
				$http.get(BasePath+'api/get_user?id='+id).success(function(data){
					deffered.resolve(data);
				});
				return deffered.promise;
			}
		}
	}]);

app.service('CommentService',['$http','$q',
	function($http,$q){
		return {
			promise:function(id){
				var deffered = $q.defer();
				$http.get(BasePath+'api/get_comment?id='+id).success(function(data){
					deffered.resolve(data);
				});
				return deffered.promise;
			}
		}
	}]);

app.service('PostService',['$http','$q',
	function($http,$q){
		return {
			promise:function(id){
				var deffered = $q.defer();
				$http.get(BasePath+'api/get_comment?id='+id).success(function(data){
					deffered.resolve(data);
				});
				return deffered.promise;
			}
		}
	}]);

app.service('VideoService',['$http','$q',
	function($http,$q){
		return {
			promise:function(id){
				var deffered = $q.defer();
				$http.get(BasePath+'api/get_video?id='+id).success(function(data){
					deffered.resolve(data);
				});
				return deffered.promise;
			}
		}
	}]);

app.service('GameService',['$http','$q',
	function($http,$q){
		return {
			promise:function(id){
				var deffered = $q.defer();
				$http.get(BasePath+'api/get_game?id='+id).success(function(data){
					deffered.resolve(data);
				});
				return deffered.promise;
			}
		}
	}]);
app.controller('DashboardCtrl',['$scope','$rootScope',
	function($scope,$rootScope){

	}]);