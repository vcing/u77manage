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
app.controller('BaseCtrl',['$scope','$rootScope',
	function($scope,$rootScope){

	}]);
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