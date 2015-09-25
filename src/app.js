/**
 * angular 启动文件
 * 
 */

var app = angular.module('u77manage',['ui.router','ui.bootstrap','ngTouch','ngAnimate']);

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
			// .state('base.dashboard',{
			// 	url:'/dashboard',
			// 	views:{
			// 		'content':{
			// 			templateUrl:'base/index.html',
			// 			controller:'IndexCtrl'
			// 		}
			// 	}
			// })
			// .state('base.daily',{
			// 	url:'/daily',
			// 	views:{
			// 		'content':{
			// 			templateUrl:'daily/index.html',
			// 			controller:'DailyCtrl'
			// 		}
			// 	}
			// })

		// $urlRouterProvider.when("", "/dashboard");
		// $urlRouterProvider.otherwise('/dashboard');
	}]);

app.run(['$rootScope','$state',
	function($rootScope,$state){
		$rootScope.loading = true;
	}])