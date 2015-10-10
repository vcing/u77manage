/**
 * angular 启动文件
 * 
 */

var app = angular.module('u77manage',['ui.router','ui.bootstrap','ngTouch','infinite-scroll']);
var BasePath = 'http://dev.u77.com/admin/';
var Path = 'http://dev.u77.com';
var AvatarPath = 'http://img.u77.com/avatar/';
var ManagePath = 'http://manage.u77.com/'
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
			.state('base.gameEdit',{
				url:'/game-edit/:id',
				views:{
					'content':{
						templateUrl:'game/game-edit.html',
						controller:'GameEditCtrl'
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
		$rootScope.ManagePath = ManagePath;
	}])






// ---------------------------------------------------------------------------------------------

app.controller('BaseCtrl',['$scope','$rootScope',
	function($scope,$rootScope){

	}]);

app.controller('SingleReportCtrl',['$scope','$rootScope','ReportService',
	function($scope,$rootScope,ReportService){
		$scope.ignore = function(report){
			ReportService.ignore(report.id).then(function(done){
				if(done){
					report.hide = true;
				}else{
					alert('操作失败,请重试.');
				}
			});
		}

		$scope.accept = function(report){
			ReportService.accept(report.id).then(function(done){
				if(done){
					report.hide = true;
				}else{
					alert('操作失败,请重试.');
				}
			});
		}
	}]);

app.controller('ListReportCtrl',['$scope','$rootScope','ReportService',
	function($scope,$rootScope,ReportService){
		$scope.change_type = function(type){
			$scope.report_type = type;
			ReportService.list(type).then(function(data){
				$scope.reportList = data.data;
			});
		}		
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

app.directive('upload',function(){
	return function($scope,element,attrs){
		var type = attrs['type'] ? attrs['type'] : 'game';
		var file_type = attrs['file-type'] ? attrs['file-type'] : 'image';
		var bucket = file_type == 'image' ? 'u77img' : 'u77file';
		var options = {
			type:type,
			file_type:file_type
		}
		var prefix = file_type == 'image' ? 'img' : 'file';
		var params;

		$.get(ManagePath+'api/upload',options,function(data){
			params = JSON.parse(data);

			var _uploader = WebUploader.create({
				auto:true,
				swf:"/plugins/webuploader/Uploader.swf",
				server:"http://v0.api.upyun.com/"+bucket,
				pick:element,
				accept:{
					title:'Images',
					extensions:'jpg,jpeg,png',
					mimeTypes:'image/*'
				},
				formData:params
			});

			_uploader.on('uploadSuccess', function(file,response){
				var _scope = attrs['fill'].split('.');
				switch(_scope.length){
					case 1:
						$scope[_scope[0]] = 'http://'+prefix+'.u77.com'+response.url;break;
					case 2:
						$scope[_scope[0]][_scope[1]] = 'http://'+prefix+'.u77.com'+response.url;break;
					case 3:
						$scope[_scope[0]][_scope[1]][_scope[2]] = 'http://'+prefix+'.u77.com'+response.url;break;
					case 4:
						$scope[_scope[0]][_scope[1]][_scope[2]][_scope[3]] = 'http://'+prefix+'.u77.com'+response.url;break;
				}
				
			});
		});

		
		
	}
})
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
		controller:'ListReportCtrl'
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

app.controller('GameExamineCtrl',['$scope','$rootScope','GameService',
	function($scope,$rootScope,GameService){
		$scope.options = {
			status:0
		}
		GameService.list($scope.options).then(function(data){
			console.log(data);
			$scope.gameList = data.data;
		});
	}]);

app.controller('ReportExamineCtrl',['$scope','$rootScope','ReportService',
	function($scope,$rootScope,ReportService){
		ReportService.list().then(function(data){
			$scope.reportList = data.data;
		});

	}]);
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


app.controller('DashboardCtrl',['$scope','$rootScope',
	function($scope,$rootScope){

	}]);
app.controller('SingleGameCtrl',['$scope','$rootScope',
	function($scope,$rootScope){

	}]);

app.controller('ListGameCtrl',['$scope','$rootScope','GameService',
	function($scope,$rootScope,GameService){
		$scope.options.search_type = 'id';
		$scope.change_type = function(type){
			$scope.options.type = type;
			query();
		}

		$scope.change_status = function(status){
			$scope.options.status = status;
			query();
		}

		$scope.change_search_type = function(type){
			$scope.options.search_type = type;
		}

		$scope.game_search = function(e){
			var keycode = window.event?e.keyCode:e.which;
			if(keycode == 13){
				query();
			}
		}

		function query(){
			GameService.list($scope.options).then(function(data){
				$scope.gameList = data.data;
			});
		}
	}]);

app.controller('GameListCtrl',['$scope','$rootScope','GameService',
	function($scope,$rootScope,GameService){
		$scope.options = {};
		GameService.list().then(function(data){
			$scope.gameList = data.data;
		});	
	}]);

app.controller('GameEditCtrl',['$scope','$rootScope','GameService','$stateParams',
	function($scope,$rootScope,GameService,$stateParams){
		if(!$stateParams.id || $stateParams == 0){
			// new game
			
		}else{
			// edit game

		}
	}]);
app.directive('gameList',function(){
	return {
		restrict:'A',
		templateUrl:'/game/game-list.html',
		replace:true,
		controller:'ListGameCtrl',
		link:function(){
			$("[data-mask]").inputmask();
		}
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
app.service('GameService',['$q',
	function($q){
		return {
			promise:function(id){
				var deffered = $q.defer();
				$.get(ManagePath+'game/info/'+id,function(data){
					deffered.resolve(data);
				});
				return deffered.promise;
			},
			// type 类型 1-web 2-pc 3-手机 4-收费 5-ios 6-android 7-I&A 8原创游戏
			// status 状态 99已发布 1未发布 0未审核 3退稿
			// search_type key-关键词 id-id
			list:function(options){
				var deffered = $q.defer();
				$.get(ManagePath+'game/list',options,function(data){
					deffered.resolve(data);
				});
				return deffered.promise;
			}
		}
	}]);