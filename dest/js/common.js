/**
 * angular 启动文件
 * 
 */

var app = angular.module('u77manage',['ui.router','ui.bootstrap','ngTouch','infinite-scroll','ngFileUpload','textAngular','ui.bootstrap.datetimepicker']);
// var BasePath = 'http://dev.u77.com/admin/';
// var Path = 'http://dev.u77.com';
var BasePath = 'http://www.u77.com/admin/';
var Path = 'http://www.u77.com/';
var AvatarPath = 'http://img.u77.com/avatar/';
var ManagePath = 'http://manage.u77.com/';
var ChargePath = 'http://u77pay.avosapps.com/api/';
var DiscoverPath = 'http://dev.u77discoverd.avosapps.com/api/';
// var ChargePath = 'http://192.168.0.102:3000/api/'
app.config(['$stateProvider','$urlRouterProvider','$locationProvider',
	function($stateProvider,$urlRouterProvider,$locationProvider){

		$stateProvider
			.state('base',{
				url:'',
				views:{
					'main':{
						templateUrl:'/static/base/base.html',
						controller:'BaseCtrl'
					}
				}
			})
			.state('base.dashboard',{
				url:'/dashboard',
				views:{
					'content':{
						templateUrl:'/static/dashboard/main.html',
						controller:'DashboardCtrl'
					}
				}
			})
			// .state('base.daily',{
			// 	url:'/daily',
			// 	views:{
			// 		'content':{
			// 			templateUrl:'/static/daily/big-eye.html',
			// 			controller:'BigEyeCtrl'
			// 		}
			// 	}
			// })
			.state('base.dailyBigEye',{
				url:'/daily-big-eye',
				views:{
					'content':{
						templateUrl:'/static/daily/big-eye.html',
						controller:'BigEyeCtrl'
					}
				}
			})
			.state('base.dailyGameExamine',{
				url:'/daily-game-examine',
				views:{
					'content':{
						templateUrl:'/static/daily/game-examine.html',
						controller:'GameExamineCtrl'
					}
				}
			})
			.state('base.dailyReportExamine',{
				url:'/daily-report-examine',
				views:{
					'content':{
						templateUrl:'/static/daily/report-examine.html',
						controller:'ReportExamineCtrl'
					}
				}
			})
			.state('base.gameList',{
				url:'/game-list',
				views:{
					'content':{
						templateUrl:'/static/game/game-lists.html',
						controller:'GameListCtrl'
					}
				}
			})
			.state('base.gameEdit',{
				url:'/game-edit/:id',
				views:{
					'content':{
						templateUrl:'/static/game/game-edit.html',
						controller:'GameEditCtrl'
					}
				}
			})
			.state('base.gameNew',{
				url:'/game-new',
				views:{
					'content':{
						templateUrl:'/static/game/game-edit.html',
						controller:'GameNewCtrl'
					}
				}
			})
			.state('base.relation',{
				url:'/game/relation/:id',
				views:{
					'content':{
						templateUrl:'/static/game/relation.html',
						controller:'RelationCtrl'
					}
				}
			})
			.state('base.tag',{
				url:'/tag',
				views:{
					'content':{
						templateUrl:'/static/game/tag.html',
						controller:'TagCtrl'
					}
				}
			})
			.state('base.gameCream',{
				url:'/cream/:gameid',
				views:{
					'content':{
						templateUrl:'/static/game/cream.html',
						controller:'CreamCtrl',
					}
				}
			})
			.state('base.cream',{
				url:'/cream',
				views:{
					'content':{
						templateUrl:'/static/game/cream.html',
						controller:'CreamCtrl',
					}
				}
			})
			.state('base.creamEdit',{
				url:'/cream/edit/:id',
				views:{
					'content':{
						templateUrl:'/static/game/cream-edit.html',
						controller:'CreamEditCtrl'
					}
				}
			})
			.state('base.video',{
				url:'/video',
				views:{
					'content':{
						templateUrl:'/static/game/video.html',
						controller:'VideoCtrl'
					}
				}
			})
			.state('base.image',{
				url:'/image',
				views:{
					'content':{
						templateUrl:'/static/game/image.html',
						controller:'ImageCtrl'
					}
				}
			})
			.state('base.gameNotice',{
				url:'/notice/:id',
				views:{
					'content':{
						templateUrl:'/static/game/notice.html',
						controller:'NoticeCtrl'
					}
				}
			})
			.state('base.notice',{
				url:'/notice',
				views:{
					'content':{
						templateUrl:'/static/game/notice.html',
						controller:'NoticeCtrl'
					}
				}
			})
			.state('base.noticeNew',{
				url:'/notice/new/:id',
				views:{
					'content':{
						templateUrl:'/static/game/notice-edit.html',
						controller:'NoticeNewCtrl'
					}
				}
			})
			.state('base.noticeEdit',{
				url:'/notice/edit/:id',
				views:{
					'content':{
						templateUrl:'/static/game/notice-edit.html',
						controller:'NoticeEditCtrl'
					}
				}
			})
			.state('base.recExamine',{
				url:'/game/rec',
				views:{
					'content':{
						templateUrl:'/static/game/rec-examine.html',
						controller:'RecExamineCtrl'
					}
				}
			})
			.state('base.errorReport',{
				url:'/error-report',
				views:{
					'content':{
						templateUrl:'/static/game/error-report.html',
						controller:'ErrorReportCtrl'
					}
				}
			})
			.state('base.comment',{
				url:'/comment',
				views:{
					'content':{
						templateUrl:'/static/comment/main.html',
						controller:'CommentCtrl'
					}
				}
			})
			.state('base.page',{
				url:'/page',
				views:{
					'content':{
						templateUrl:'/static/page/main.html',
						controller:'PageCtrl'
					}
				}
			})
			.state('base.pageNew',{
				url:'/page/new',
				views:{
					'content':{
						templateUrl:'/static/page/edit.html',
						controller:'PageNewCtrl'
					}
				}
			})
			.state('base.pageEdit',{
				url:'/page/edit/:id',
				views:{
					'content':{
						templateUrl:'/static/page/edit.html',
						controller:'PageEditCtrl'
					}
				}
			})
			.state('base.analysisFinance',{
				url:'/analysis/finance',
				views:{
					'content':{
						templateUrl:'/static/analysis/finance.html',
						controller:'FinanceAnalysisCtrl'
					}
				}
			})
			.state('base.analysisWeb',{
				url:'/analysis/web',
				views:{
					'content':{
						templateUrl:'/static/analysis/web.html',
						controller:'WebAnalysisCtrl'
					}
				}
			})
			.state('base.discoverGame',{
				url:'/discover/game',
				views:{
					'content':{
						templateUrl:'/static/discover/game.html',
						controller:'DiscoverGameCtrl'
					}
				}
			})
			.state('base.discoverGameWithId',{
				url:'/discover/game/:id',
				views:{
					'content':{
						templateUrl:'/static/discover/game.html',
						controller:'DiscoverGameCtrl'
					}
				}
			})
			.state('base.discover',{
				url:'/discover',
				views:{
					'content':{
						templateUrl:'/static/discover/discover.html',
						controller:'DiscoverCtrl'
					}
				}
			})
			.state('base.discoverWithGameId',{
				url:'/discover/:gameId',
				views:{
					'content':{
						templateUrl:'/static/discover/discover.html',
						controller:'DiscoverCtrl'
					}
				}
			})
		$locationProvider.html5Mode(true);

		// $urlRouterProvider.when("", "/dashboard");
		$urlRouterProvider.otherwise('/dashboard');

		// 时间本地化
		moment.locale('zh-cn');
	}]);

app.run(['$rootScope','$state','UploadService',
	function($rootScope,$state,UploadService){
		$rootScope.loading = true;
		$rootScope.BasePath = BasePath;
		$rootScope.Path = Path;
		$rootScope.AvatarPath = AvatarPath;
		$rootScope.ManagePath = ManagePath;
		UploadService.post().then(function(fn){
			window.uploadPostImage = function($file){
				fn($file,function(resp){
					console.log(resp);
				});
			}
		});
		
	}])


// app.config(function($provide){
//     $provide.decorator('taOptions', ['taRegisterTool', '$delegate', function(taRegisterTool, taOptions){
//         // $delegate is the taOptions we are decorating
//         // register the tool with textAngular
//         var imageLink = 'http://img.u77.com/game/2015/10/xwjqcdsjgvdds04j.jpg';
//         taRegisterTool('imageUpload', {
//             iconclass: "fa fa-cloud-upload red",
//             action: function(){
//                 this.$editor().wrapSelection('forecolor', 'red');
//                 // this.$editor().wrapSelection('insertImage', imageLink, true);
//             }
//         });
//         // add the button to the default toolbar definition
//         taOptions.toolbar[1].push('colourRed');
//         return taOptions;
//     }]);
// });



// ---------------------------------------------------------------------------------------------

app.controller('DashboardCtrl',['$scope','$rootScope','DashboardService',
	function($scope,$rootScope,DashboardService){
		// 昨日数据
		DashboardService.yesterdayData().then(function(data){
			$scope.yesterdayData = data;
		});

		DashboardService.todayData().then(function(data){
			$scope.todayData = data;
		});

		

		// 七日收入
		DashboardService.sevenDayIncome().then(function(data){
			$scope.sevenDayIncome = data;

			DashboardService.sevendayData().then(function(data){
				var result = {
						labels:$scope.sevenDayIncome.labels,
						datasets:[{
								label:"新用户",
					            fillColor: "rgba(220,220,220,0.2)",
		                        strokeColor: "rgba(220,220,220,1)",
		                        pointColor: "rgba(220,220,220,1)",
		                        pointStrokeColor: "#fff",
		                        pointHighlightFill: "#fff",
		                        pointHighlightStroke: "rgba(220,220,220,1)",
								data:data.newUser
							},{
								label:"评论",
								fillColor: "rgba(151,187,205,0.2)",
					            strokeColor: "rgba(151,187,205,1)",
					            pointColor: "rgba(151,187,205,1)",
					            pointStrokeColor: "#fff",
					            pointHighlightFill: "#fff",
					            pointHighlightStroke: "rgba(151,187,205,1)",
								data:data.comment
							}]
					};
				window.aaa = result;
				$scope.sevenDayData = result;
				$scope.sevenDayLogin = {
					labels:$scope.sevenDayIncome.labels,
					datasets:[{
								label:"登录数",
					            fillColor: "rgba(151,187,205,0.2)",
					            strokeColor: "rgba(151,187,205,1)",
					            pointColor: "rgba(151,187,205,1)",
					            pointStrokeColor: "#fff",
					            pointHighlightFill: "#fff",
					            pointHighlightStroke: "rgba(151,187,205,1)",
								data:data.loginCount
							}]
				}
			});
		});

		DashboardService.dayIncome().then(function(data){
			$scope.dayIncome = data;
		})

		$scope.lineChartClick = function(e){
			DashboardService.dayIncome(e[0].label).then(function(data){
				$scope.dayIncome = data;
				$scope.selectDayIncome = e[0].label;
			});
		}

		DashboardService.recentComment().then(function(data){
			$scope.recentComment = data;
		})

		$scope.commentRefresh = function(){
			DashboardService.recentComment().then(function(data){
				$scope.recentComment = data;
			})			
		}
	}]);
app.service('DashboardService',['$q',
	function($q){
		return {
			yesterdayData:function(){
				var deffered = $q.defer();
				$.get(ManagePath+'yesterday-data',function(data){
					deffered.resolve(data);
				});
				return deffered.promise;
			},
			todayData:function(){
				var deffered = $q.defer();
				$.get(ManagePath+'today-data',function(data){
					deffered.resolve(data);
				});
				return deffered.promise;
			},
			sevendayData:function(){
				var deffered = $q.defer();
				$.get(ManagePath+'sevenday-data',function(data){
					_.map(data,function(value){
						value = value.reverse();
					});
					deffered.resolve(data);
				});
				return deffered.promise;
			},
			recentComment:function(){
				var deffered = $q.defer();
				$.get(ManagePath+'recent-comment',function(data){
					deffered.resolve(data);
				});
				return deffered.promise;	
			},
			sevenDayIncome:function(){
				var deffered = $q.defer();
				var result = {
					labels:[],
					datasets:[{
							fillColor: "#d2d6de",
				            strokeColor: "#dd4b39",
				            pointColor: "#ff7701",
				            pointStrokeColor: "#fff",
				            pointHighlightFill: "#fff",
				            pointHighlightStroke: "#f39c12",
							data:[]
						}]
				};
				$.get(ChargePath+'analysis/seven-day-income',function(data){
					_.map(data,function(value,key){
						result.labels.push(key);
						result.datasets[0].data.push(value);
					});
					result.labels = result.labels.reverse();
					result.datasets[0].data = result.datasets[0].data.reverse();
					deffered.resolve(result);
				});
				return deffered.promise;
			},
			dayIncome:function(day){
				var deffered = $q.defer();
				var result = [];
				day = day ? day : '';
				$.get(ChargePath+'analysis/day-income/'+day,function(data){
					_.map(data,function(value,key){
						switch(key){
							case '仙侠道':
								result.push({
									value:value,
									color:"#555299",
									highlight:"#605ca8",
									label:key
								});
								break;
							case '玉之魂':
								result.push({
									value:value,
									color:"#008d4c",
									highlight:"#00a65a",
									label:key
								});
								break;
							case '大皇帝':
								result.push({
									value:value,
									color: "#FDB45C",
									highlight: "#FFC870",
									label:key
								});
								break;
							case '冒险与挖矿':
								result.push({
									value:value,
									color:"#F7464A",
			        				highlight: "#FF5A5E",
									label:key
								});
								break;
							case '刀剑魔药2':
								result.push({
									value:value,
									color: "#46BFBD",
									highlight: "#5AD3D1",
									label:key
								});
								break;
							case '卡片怪兽':
								result.push({
									value:value,
									color:"#7d3bab",
									highlight:"#8d4bbb",
									label:key
								})
						}
					});
					deffered.resolve(result);
				});
				return deffered.promise;
			}
		}
	}]);
app.controller('WebAnalysisCtrl',['$scope','$rootScope',function($scope,$rootScope){

}]);

app.controller('FinanceAnalysisCtrl',['$scope','$rootScope',function($scope,$rootScope){

// 今日总交易额
// 今日平均充值金额
// 今日下单数
// 今日成功付费订单数




// 充值金额 曲线图 时间/游戏/对比
// 充值人数 平均充值金额 曲线图 时间/游戏
// 所有游戏充值占比 饼状图 时间/对比
// 其他数据 表格 时间/游戏



	$scope.test = {
		labels:[1,2,3,4,5,6,7],
		datasets:[{
				label:"新用户",
	            fillColor: "rgba(220,220,220,0.2)",
	            strokeColor: "rgba(220,220,220,1)",
	            pointColor: "rgba(220,220,220,1)",
	            pointStrokeColor: "#fff",
	            pointHighlightFill: "#fff",
	            pointHighlightStroke: "rgba(220,220,220,1)",
				data:[2,5,3,6,7,8,2]
			},{
				label:"评论",
				fillColor: "rgba(151,187,205,0.2)",
	            strokeColor: "rgba(151,187,205,1)",
	            pointColor: "rgba(151,187,205,1)",
	            pointStrokeColor: "#fff",
	            pointHighlightFill: "#fff",
	            pointHighlightStroke: "rgba(151,187,205,1)",
				data:[6,3,1,5,2,7,5]
			}]
	};

	$scope.games = [
		{
			gameId:1,
			name:'冒险与挖矿'
		}
	]
}]);

app.controller('BaseCtrl',['$scope','$rootScope','$state',
	function($scope,$rootScope,$state){
		// 主导航搜索
		$scope.search = function(){
			$state.go('base.gameEdit',{id:$scope.gameId});
			$scope.gameId = '';
		}

		$scope.searchKeyUp = function(e){
			var keycode = window.event?e.keyCode:e.which;
			if(keycode == 13){
				$scope.search();
			}
		}
	}]);

app.controller('SingleReportCtrl',['$scope','$rootScope','ReportService','MessageService',
	function($scope,$rootScope,ReportService,MessageService){
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
			if(!confirm('确定删除该举报的内容吗?')){
				return;
			}
			if(report.t_type == 1){
				var options = {
					content:report,
					type:108,
					status:false
				}
				MessageService.create(options).then(function(data){
					if(data.status === false){
						ReportService.accept(report.id).then(function(done){
							if(done){
								report.hide = true;
							}else{
								alert('操作失败,请重试.');
							}
						});
					}
				});	
			}else{
				ReportService.accept(report.id).then(function(done){
					if(done){
						report.hide = true;
					}else{
						alert('操作失败,请重试.');
					}
				});
			}
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


// const IS_SYSTEM			= 1;
// const IS_NOTICE			= 2;
// const IS_PM 			= 3;

// const FLAG_MIN          = 99;

// const HAS_MESSAGE 		= 99;		// has message

// const M_AT              = 100;		// at
// const M_COMMENT_REPLY   = 101;		// comment
// const M_COMMENT_SUPPORT = 102;		// support
// const M_POST_COMMENT    = 103;		// post comment 
// const M_POST_SUPPORT    = 104;		// post support

// const N_PUBLISH         = 105;		// publish
// const N_POST            = 106;		// post
// const N_VIDEO           = 107;		// video
// const N_REPORT          = 108;		// report

// const FLAG_MAX          = 200;
app.controller('MessageCtrl',['$scope','$rootScope','$uibModalInstance','options','MessageService','$filter',
	function($scope,$rootScope,$uibModalInstance,options,MessageService,$filter){
		$scope.options = options;
		$scope.typeOptions = [{
			label:'游戏审核通知',
			id:105
		},{
			label:'精华审核通知',
			id:106,
		},{
			label:'视频审核通知',
			id:107
		},{
			label:'评论删除通知',
			id:108
		}];

		var userid;
		switch($scope.options.type){
			case 105:
				userid = $scope.options.content.userid;
				break;
			case 106:
				userid = $scope.options.content.userid;
				break;
			case 107:
				userid = $scope.options.content.userid;
				break;
			case 108:
				userid = $scope.options.content.content.sender;
				break;
		}

		$scope.cancel = function () {
			$uibModalInstance.dismiss('cancel');
		};

		$scope.submit = function(){

			var content = '';
			
			switch($scope.options.type){
				case 105:
					content += "你投稿的游戏 <a href='"+($scope.options.status ? "/game/"+$scope.options.content.id : "javascript:;")+"' target='_blank'>";
					content += $scope.options.content.title+"</a>";
					content += " 审核"+($scope.options.status ? "通过" : "未通过");
					content += $scope.options.status ? '' : " 原因:"+$scope.options.cause;
					content += '<a class="fr" href="/account/publish?game">查看投稿</a>';
					break;
				case 106:
					content += "你投稿的游戏精华 <a href='"+($scope.options.status ? "/post/"+$scope.options.content.id : "javascript:;")+"' target='_blank'>";
					content += $scope.options.content.title+"</a>";
					content += " 审核"+($scope.options.status ? "通过" : "未通过");
					content += $scope.options.status ? '' : " 原因:"+$scope.options.cause;
					content += '<a class="fr" href="/account/publish?post">查看投稿</a>';
					break;
				case 107:
					content += "你在 <a href='"+"/game/"+$scope.options.content.game.id+"' target='_blank'>"+$scope.options.content.game.title+"</a>";
					content += "投稿的视频 <a href='/video/"+$scope.options.content.id+"' target='_blank'>"+$scope.options.content.title+"</a>";
					content += "审核"+($scope.options.status ? "通过" : "未通过");
					break;
				case 108:
					content += "您发表的"+($scope.options.content.content.type == 1 ? '游戏评论' : $scope.options.content.content.type == 2 ? '文章评论' : '精华评论');
					content += $scope.options.content.content.content.content;
					content += "被管理员删除";
			}

			var _options = {
				istype:1,
				mtype:$scope.options.type,
				userid:userid,
				users:'',
				content:content
			}
			MessageService.send(_options).then(function(data){
				$uibModalInstance.close($scope.options);
			});
		}

		$scope.submitWithoutMessage = function(){
			$uibModalInstance.close($scope.options);
		}

	}]);
app.directive('mainSidebar',function(){
	return {
		restrict:'A',
		templateUrl:'/static/base/sidebar.html',
		replace:true,
	};
});

app.directive('navHeader',function(){
	return {
		restrict:'A',
		templateUrl:'/static/base/nav-header.html',
		replace:true,
		// link:function($scope,element,attrs){

		// }
	};
});

app.directive('navMessageList',function(){
	return {
		restrict:'A',
		templateUrl:'/static/base/nav-message-list.html',
		replace:true,
		// link:function($scope,element,attrs){

		// }
	};
});

app.directive('navNotificationList',function(){
	return {
		restrict:'A',
		templateUrl:'/static/base/nav-notification-list.html',
		replace:true,
		// link:function($scope,element,attrs){

		// }
	};
});

app.directive('navTaskList',function(){
	return {
		restrict:'A',
		templateUrl:'/static/base/nav-task-list.html',
		replace:true,
		// link:function($scope,element,attrs){

		// }
	};
});

app.directive('upload',function(){
	return {
		restrict:'A',
		scope:{
			type:'=upload',
			file_type:'=uploadFileType',
			fill:'=uploadFill',
			progress:'=uploadProgress'
		},
		link:function($scope,element,attrs){
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
					$scope.fill = 'http://'+prefix+'.u77.com'+response.url;
				});

				_uploader.on('uploadProgress', function(file,percentage){
					$scope.progress = percentage;
				});
			});
		}
	}
});

app.directive('navPager',function(){
	return {
		restrict:'A',
		templateUrl:'/static/base/pager.html',
		scope:{
			data:'=navPager',
			pageChange:'=pageChange'
		},
		controller:function($scope){
			
		},
		link:function($scope,element,attrs){
			$scope.pageChanged = function() {
				$scope.pageChange($scope.data.current_page);
				$('body,html').animate({ scrollTop: 0 }, 500);
			};
		}
	}
})


app.directive('contenteditable', function() {
        return {
            require: 'ngModel',
            link: function(scope, elm, attrs, ctrl) {
                // view -> model
                elm.bind('blur', function() {
                    scope.$apply(function() {
                        ctrl.$setViewValue(elm.html());
                    });
                });

                // model -> view
                ctrl.$render = function() {
                    elm.html(ctrl.$viewValue);
                };

                // load init value from DOM
                ctrl.$setViewValue(elm.html());
            }
        };
    });

app.directive('lineChart',function(){
	return {
		restrict:'A',
		scope:{
			data:'=lineChart',
			click:'=click',
			ratio:'=ratio',
		},
		link:function($scope,element,attrs){
			var _chart;
			$scope.$watch('data',function(){
				if($scope.data){
					_chart ? _chart.destroy() : false;
					var ctx = $(element).get(0).getContext("2d");
					ctx.canvas.width = $scope.ratio ? $scope.ratio : 2;
					ctx.canvas.height = 1;
					_chart = new Chart(ctx).Line($scope.data,{
						responsive: true,
						// maintainAspectRatio: false,
					});


					$(element).on('click',function(e){
						var point = _chart.getPointsAtEvent(e);
						$scope.click ? $scope.click(point) : false ;
					});
					
				}
			});
			
		}
	}
})

app.directive('pieChart',function(){
	return {
		restrict:'A',
		scope:{
			data:'=pieChart',
		},
		link:function($scope,element,attrs){
			var _chart;
			$scope.$watch('data',function(){
				if($scope.data){
					_chart ? _chart.destroy() : false;
					var ctx = $(element).get(0).getContext("2d");
					_chart = new Chart(ctx).Pie($scope.data);	
				}
			});
			
		}
	}
})
app.filter(  
    'to_trusted', ['$sce', function ($sce) {  
        return function (text) {  
            return $sce.trustAsHtml(html_decode(text));  
        }  
    }]
);

app.filter(  
    'trusted', ['$sce', function ($sce) {  
        return function (text) {  
            return $sce.trustAsHtml(text);  
        }  
    }]
);

app.filter('fromNow',[function(){
	return function(unix){
		return moment.unix(parseInt(unix)).fromNow();
	}
}]);

app.filter('timeFromNow',[function(){
  return function(time){
    return moment(time).fromNow();
  }
}])

app.filter('time',[function(){
	return function(unix){
		return moment.unix(parseInt(unix)).format("YY年MM月DD日 H:mm");
	}
}])

app.filter('dateTime',[function(){
  return function(unix){
    return moment.unix(parseInt(unix)).format("YYYY/MM/DD H:mm:ss");
  }
}])

app.filter('toUnix',[function(){
  return function(time){
    return moment(time).unix();
  }
}])

app.filter('dt',[function(){
  return function(unix){
    return moment.unix(parseInt(unix)).format("YY/MM/DD H:mm:ss");
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
		templateUrl:'/static/base/report-list.html',
		replace:true,
		controller:'ListReportCtrl'
	};
})

app.directive('reportListBlock',function(){
	return {
		restrict:'A',
		templateUrl:'/static/base/report-list-block.html',
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
				var deffered = $q.defer();
				$.get(ManagePath+'report/delete/'+id,function(data){
					if(data != 1){
						deffered.resolve(false);
					}else{
						deffered.resolve(true);
					}
				});
				return deffered.promise;
			}
		}
	}]);


// 文件上传服务
app.service('UploadService',['Upload','$q',
	function(Upload,$q){

		return {
			file:function(){
				var deffered = $q.defer();
				var type = 'file';
				var file_type = 'file';
				var bucket = 'u77file';

				var options = {
					type:type,
					file_type:file_type
				}

				$.get(ManagePath+'api/upload',options,function(params){
					params = JSON.parse(params);
					var fn = function(file,finalCb,progressCb){
						if(!file)return;
						params.file = file;
						Upload.upload({
				            url: "http://v0.api.upyun.com/"+bucket,
				            data: params
				        }).then(function (resp) {
				        	if(resp.data && resp.data.url)resp.data.url = "http://"+file_type+".u77.com"+resp.data.url;
				            if(finalCb)finalCb(resp);
				        }, function (resp) {
				        	if(resp.data && resp.data.url)resp.data.url = "http://"+file_type+".u77.com"+resp.data.url;
				            if(finalCb)finalCb(resp);
				        }, function (evt) {
				            evt.percentage = parseInt(100.0 * evt.loaded / evt.total);
				            if(progressCb)progressCb(evt);
				        });
					}
					deffered.resolve(fn);
				});
				return deffered.promise;
			},
			image:function(){
				var deffered = $q.defer();
				var type = 'game';
				var file_type = 'image';
				var prefix = 'img';
				var bucket = 'u77img';

				var options = {
					type:type,
					file_type:file_type
				}

				$.get(ManagePath+'api/upload',options,function(params){
					params = JSON.parse(params);
					var fn = function(file,finalCb,progressCb){
						if(!file)return;
						params.file = file;
						Upload.upload({
				            url: "http://v0.api.upyun.com/"+bucket,
				            data: params
				        }).then(function (resp) {
				        	if(resp.data && resp.data.url)resp.data.url = "http://"+prefix+".u77.com"+resp.data.url;
				            if(finalCb)finalCb(resp);
				        }, function (resp) {
				        	if(resp.data && resp.data.url)resp.data.url = "http://"+prefix+".u77.com"+resp.data.url;
				            if(finalCb)finalCb(resp);
				        }, function (evt) {
				            evt.percentage = parseInt(100.0 * evt.loaded / evt.total);
				            if(progressCb)progressCb(evt);
				        });
					}
					deffered.resolve(fn);
				});
				return deffered.promise;
			},
			post:function(){
				var deffered = $q.defer();
				var type = 'post';
				var file_type = 'image';
				var prefix = 'img';
				var bucket = 'u77img';

				var options = {
					type:type,
					file_type:file_type
				}

				$.get(ManagePath+'api/upload',options,function(params){
					params = JSON.parse(params);
					var fn = function(file,finalCb,progressCb){
						if(!file)return;
						params.file = file;
						Upload.upload({
				            url: "http://v0.api.upyun.com/"+bucket,
				            data: params
				        }).then(function (resp) {
				        	if(resp.data && resp.data.url)resp.data.url = "http://"+prefix+".u77.com"+resp.data.url;
				            if(finalCb)finalCb(resp);
				        }, function (resp) {
				        	if(resp.data && resp.data.url)resp.data.url = "http://"+prefix+".u77.com"+resp.data.url;
				            if(finalCb)finalCb(resp);
				        }, function (evt) {
				            evt.percentage = parseInt(100.0 * evt.loaded / evt.total);
				            if(progressCb)progressCb(evt);
				        });
					}
					deffered.resolve(fn);
				});
				return deffered.promise;
			},
			other:function(){
				var deffered = $q.defer();
				var type = 'other';
				var file_type = 'file';
				var bucket = 'u77file';

				var options = {
					type:type,
					file_type:file_type
				}

				$.get(ManagePath+'api/upload',options,function(params){
					params = JSON.parse(params);
					var fn = function(file,finalCb,progressCb){
						if(!file)return;
						params.file = file;
						Upload.upload({
				            url: "http://v0.api.upyun.com/"+bucket,
				            data: params
				        }).then(function (resp) {
				        	if(resp.data && resp.data.url)resp.data.url = "http://"+file_type+".u77.com"+resp.data.url;
				            if(finalCb)finalCb(resp);
				        }, function (resp) {
				        	if(resp.data && resp.data.url)resp.data.url += "http://"+file_type
				            if(finalCb)finalCb(resp);
				        }, function (evt) {
				            evt.percentage = parseInt(100.0 * evt.loaded / evt.total);
				            if(progressCb)progressCb(evt);
				        });
					}
					deffered.resolve(fn);
				});
				return deffered.promise;
			}
		}
	}]);


// const IS_SYSTEM			= 1;
// const IS_NOTICE			= 2;
// const IS_PM 			= 3;

// const FLAG_MIN          = 99;

// const HAS_MESSAGE 		= 99;		// has message

// const M_AT              = 100;		// at
// const M_COMMENT_REPLY   = 101;		// comment
// const M_COMMENT_SUPPORT = 102;		// support
// const M_POST_COMMENT    = 103;		// post comment 
// const M_POST_SUPPORT    = 104;		// post support

// const N_PUBLISH         = 105;		// publish
// const N_POST            = 106;		// post
// const N_VIDEO           = 107;		// video
// const N_REPORT          = 108;		// report

// const FLAG_MAX          = 200;
app.service('MessageService',['$q','$uibModal',
	function($q,$uibModal){
		return {
			create:function(options){
				var modalInstance = $uibModal.open({
					animation:true,
					templateUrl:'/static/base/message.html',
					controller:'MessageCtrl',
					size:'md',
					resolve:{
						options:function(){
							return options;
						}
					}
				});

				return modalInstance.result;
			},
			send:function(options){
				var deffered = $q.defer();
				$.post(ManagePath+'message/create',options,function(data){
					deffered.resolve(data);
				});
				return deffered.promise;
			}
		}
	}]);
app.controller('CommentCtrl',['$scope','$rootScope','$stateParams','CommentService',
	function($scope,$rootScope,$stateParams,CommentService){
		$scope.options = {};
		$scope.options.search_type = 'id';

		$scope.change_type = function(id){
			$scope.options.type = id;
			query();
		}

		$scope.change_search_type = function(type){
			$scope.options.search_type = type;
		}

		$scope.change_status = function(status){
			$scope.options.type = status;
			query();
		}

		$scope.search = function(e){
			var keycode = window.event?e.keyCode:e.which;
			if(keycode == 13){
				query();
			}
		}

		function query(page){
			var _options = _.clone($scope.options);
			if(page)_options.page = page;
			if(_options['keywords'])_options[_options['search_type']] = _options['keywords'];
			delete _options.search_type;
			delete _options.keywords;
			CommentService.list(_options).then(function(data){
				$scope.list = data;
			});
		}

		CommentService.list().then(function(data){
			$scope.list = data;
			console.log(data);
		});

		$scope.pageChange = query;

		$scope.change_notice_status = function(comment,status){
			comment.status = status;
			CommentService.update(comment);
		}

		$scope.delete = function(comment){
			if(confirm('确定删除改评论?')){
				CommentService._delete(comment.id);
				comment.content.content = "该评论已删除";	
			}
			// comment.hide = true;
		}


		$scope.deleteByUser = function(){
			if(confirm('该操作会删除该用户的所有评论! \r\n 确认执行吗？')){
				CommentService.deleteByUser($scope.userid);	
			}
		}
	}]);
app.service('CommentService',['$q',
	function($q){
		return {
			list:function(options){
				var deffered = $q.defer();
				$.get(ManagePath + 'comment/list',options,function(data){
					deffered.resolve(data);
				});
				return deffered.promise;
			},
			_delete:function(id){
				var deffered = $q.defer();
				$.get(ManagePath + 'comment/delete/'+id,function(data){
					deffered.resolve(data);
				});
				return deffered.promise;	
			},
			deleteByUser:function(id){
				var deffered = $q.defer();
				$.get(ManagePath + 'comment/deletebyuser/'+id,function(data){
					deffered.resolve(data);
				});
				return deffered.promise;	
			}
		}
	}]);
app.controller('BigEyeCtrl',['$scope','$rootScope','UploadService',
	function($scope,$rootScope,UploadService){
		$scope.list = [];

		$.get(ManagePath+'sliders',function(data){
			$scope.list = JSON.parse(data);
		});

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

		$scope.left = function(){
			$scope.slideControl = $scope.slideControl <= 0 ? $scope.list.length - 1 : $scope.slideControl - 1;
		}

		$scope.right = function(){
			$scope.slideControl = $scope.slideControl >= $scope.list.length - 1 ? 0 : $scope.slideControl + 1;
		}

		$scope.submit = function(){
			$.post(ManagePath+'sliders',{sliders:$scope.list},function(data){
				if(data != 0){
					alert('保存成功');
				}
			});
		}

		UploadService.image().then(function(fn){
			$scope.upload = function($file,slide){
				fn($file,function(resp){
					if(resp.status == 200 && resp.statusText == 'OK'){
						slide.image = resp.data.url;
					}else{
						alert('上传失败,请重试');
					}
					slide.percentage = null
				},function(evt){
					slide.percentage = evt.percentage;
				});
			}
		});

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
			$scope.gameList = data;
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


app.controller('DiscoverCtrl',['$rootScope','$scope','$state','DiscoverServer',
	function($rootScope,$scope,$state,DiscoverServer){
		
		$scope.refresh = function(){
			var options = {
				page:$scope.options.currentPage,
			}
			if($scope.options.keywords){
				options.searchType = $scope.options.search_type || 'title';
				options.keywords = $scope.options.keywords;
			};
			
			switch($scope.options.type){
				case 1:
					options.isLast = 'true';
					break;
				case 2:
					options.isLast = 'false';
					break;
				default:
					delete options.isLast;
					break;
			}
			DiscoverServer.discoverList(options).then(function(result){
				$scope.discovers = result;
			});			
		}

		$scope.nextPage = function(){
			if($scope.discovers.length < 20){
				alert('已经是最后一页了');
			}else{
				$scope.options.currentPage++;
				$scope.refresh();
			}
		}

		$scope.prevPage = function(){
			if($scope.options.currentPage <= 1){
				alert('已经是第一页了');
			}else{
				$scope.options.currentPage--;
				$scope.refresh();
			}
		}

		$scope.checkGame = function(discover){
			var url = $state.href('base.discoverGameWithId',{id:discover.game.objectId});
			window.open(url);
		}

		$scope.delete = function(discover){
			if(!confirm('确定删除该条推荐吗?')){
				return ;
			}
			DiscoverServer.discoverDelete(discover).then(function(result){
				if(result.status == 0){
					discover.hide = true;
					alert('删除推荐成功.');
				}else{
					alert('删除推荐失败,请检查后重试.');
				}
			});
			
		}

		$scope.search = function(e){
			var keycode = window.event?e.keyCode:e.which;
			if(keycode == 13){
				$scope.refresh();
			}
		}

		$scope.options = {
			currentPage:1
		}
		if($state.params.gameId){
			$scope.options.search_type = 'game';
			$scope.options.keywords = $state.params.gameId;
		}
		$scope.refresh();
	}]);
app.controller('DiscoverGameCtrl',['$scope','$state','DiscoverServer',
	function($scope,$state,DiscoverServer){
		$scope.refresh = function(){
			DiscoverServer.gameList($scope.options).then(function(result){
				$scope.games = result;
			});
		}

		$scope.nextPage = function(){
			if($scope.games.length < 20){
				alert('已经是最后一页了');
			}else{
				$scope.options.page++;
				$scope.refresh();
			}
		}

		$scope.prevPage = function(){
			if($scope.options.page <= 1){
				alert('已经是第一页了');
			}else{
				$scope.options.page--;
				$scope.refresh();
			}
		}

		$scope.save = function(game){
			var _game = {
				u77Id:game.u77Id,
				objectId:game.objectId
			}
			DiscoverServer.gameUpdate(_game).then(function(result){
				if(result.status == 0){
					alert('修改游戏成功');
				}else{
					alert('修改游戏失败,请检查后重试');
				}
			});
		}

		$scope.checkDiscover = function(game){
			var url = $state.href('base.discoverWithGameId',{gameId:game.objectId});
			window.open(url);
		}

		$scope.delete = function(game){
			DiscoverServer.gameDelete(game).then(function(result){
				if(result.status == 0){
					game.hide = true;
					alert('删除游戏成功');
				}else{
					alert('删除游戏失败,请检查后重试');
				}
			});
		}

		$scope.search = function(e){
			var keycode = window.event?e.keyCode:e.which;
			if(keycode == 13){
				$scope.refresh();
			}
		}

		$scope.options = {
			page:1
		};
		if($state.params.id){
			$scope.options.searchType = "objectId";
			$scope.options.keywords = $state.params.id;
		}
		$scope.refresh();
	}]);
app.service('DiscoverServer',['$q',
	function($q){
		return {
			discoverList:function(options){
				options.debug = true;
				var deffered = $q.defer();
				$.ajax({
					url:DiscoverPath + 'discover/list',
					data:options,
					type:'get',
					success:function(result){
						deffered.resolve(result);
					}
				});
				return deffered.promise
			},
			discoverDelete:function(discover){
				var deffered = $q.defer();
				$.ajax({
					url:DiscoverPath+'discover/'+discover.objectId,
					type:'delete',
					success:function(result){
						deffered.resolve(result);
					}
				});
				return deffered.promise;
			},
			gameList:function(options){
				var deffered = $q.defer();
				$.ajax({
					url:DiscoverPath + 'game/list',
					data:options,
					type:'get',
					success:function(result){
						deffered.resolve(result);
					}
				});
				return deffered.promise;
			},
			gameDelete:function(game){
				var deffered = $q.defer();
				$.ajax({
					url:DiscoverPath+'game/'+game.objectId,
					type:'delete',
					success:function(result){
						deffered.resolve(result);
					}
				});
				return deffered.promise;
			},
			gameUpdate:function(game){
				var deffered = $q.defer();
				$.ajax({
					url:DiscoverPath+'game/'+game.objectId,
					data:game,
					type:'post',
					success:function(result){
						deffered.resolve(result);
					}
				})
				return deffered.promise;
			}
		}
	}]);
app.controller('PageCtrl',['$scope','$rootScope','PageService',
	function($scope,$rootScope,PageService){
		$scope.options = {};
		$scope.options.search_type = 'id';

		$scope.change_type = function(id){
			$scope.options.type = id;
			query();
		}

		$scope.change_search_type = function(type){
			$scope.options.search_type = type;
		}

		$scope.change_status = function(status){
			$scope.options.status = status;
			query();
		}

		$scope.search = function(e){
			var keycode = window.event?e.keyCode:e.which;
			if(keycode == 13){
				query();
			}
		}

		function query(page){
			var _options = _.clone($scope.options);
			if(page)_options.page = page;
			if(_options['keywords'])_options[_options['search_type']] = _options['keywords'];
			delete _options.search_type;
			delete _options.keywords;
			PageService.list(_options).then(function(data){
				$scope.list = data;
			});
		}

		query();

		$scope.pageChange = query;

		$scope.change_page_status = function(page,status){
			page.status = status;
			PageService.update(page);
			alert('操作成功');
		}

		$scope.delete = function(page){
			if(!confirm('确认删除该公告吗?'))return;
			PageService.delete(page.id);
			page.hide = true;
		}

	}]);

app.controller('PageEditCtrl',['$scope','$rootScope','$filter','PageService','$stateParams','$state',
	function($scope,$rootScope,$filter,PageService,$stateParams,$state){
		PageService.info($stateParams.id).then(function(info){
			console.log(info);
			$scope.page = info;
			$scope.page.create_time = $filter('dateTime')($scope.page.create_at);
		});

		$scope.submit = function(){
			$scope.page.create_at = $filter('toUnix')($scope.page.create_time);
			$scope.page.update_at = $scope.page.create_at;
			delete $scope.page.create_time;
			PageService.update($scope.page);
			alert('修改成功.');
			$state.go('base.page');
		}
	}]);

app.controller('PageNewCtrl',['$scope','$rootScope','$filter','PageService','$stateParams','$state',
	function($scope,$rootScope,$filter,PageService,$stateParams,$state){

		$scope.page = {
			tid:$stateParams.id,
			create_time:moment().format('YYYY/MM/DD HH:mm:ss'),
		};

		$scope.submit = function(){
			$scope.page.create_at = $filter('toUnix')($scope.page.create_time);
			$scope.page.update_at = $scope.page.create_at;
			delete $scope.page.create_time;
			PageService.create($scope.page);
			alert('创建成功.');
			$state.go('base.page');
		}
	}]);
app.service('PageService',['$q',
	function($q){
		return {
			list:function(options){
				var deffered = $q.defer();
				$.get(ManagePath+'page/list',options,function(data){
					deffered.resolve(data);
				});
				return deffered.promise;
			},
			create:function(page){
				var deffered = $q.defer();
				$.post(ManagePath+'page/create',page,function(data){
					deffered.resolve(data);
				});
				return deffered.promise;	
			},
			update:function(page){
				var deffered = $q.defer();
				$.post(ManagePath+'page/update',page,function(data){
					deffered.resolve(data);
				});
				return deffered.promise;	
			},
			delete:function(id){
				var deffered = $q.defer();
				$.get(ManagePath+'page/delete/'+id,function(data){
					deffered.resolve(data);
				});
				return deffered.promise;
			},
			info:function(id){
				var deffered = $q.defer();
				$.get(ManagePath+'page/info/'+id,function(data){
					deffered.resolve(data);
				});
				return deffered.promise;	
			}
		}
	}]);
app.controller('SingleGameCtrl',['$scope','$rootScope','MessageService',
	function($scope,$rootScope,MessageService){
		$scope.sendBack = function(game){
			var options = {
				content:game,
				type:105,
				status:false
			}
			MessageService.create(options).then(function(data){
				if(data.status === false){
					game.status = 3;
					delete game.content.$$hashKey;
					delete game.$$hashKey;
					$.post(ManagePath+'game/update',game,function(data){
					});
				}
			});
		}
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

		function query(page){
			if(page){
				var _options = _.clone($scope.options);
				_options.page = page;
				GameService.list(_options).then(function(data){
					$scope.gameList = data;
				});	
			}else{
				GameService.list($scope.options).then(function(data){
					$scope.gameList = data;
				});	
			}
		}

		$scope.pageChange = query;

	}]);

app.controller('GameListCtrl',['$scope','$rootScope','GameService',
	function($scope,$rootScope,GameService){
		$scope.options = {};
		GameService.list().then(function(data){
			$scope.gameList = data;
		});

		$scope.getTop10 = function(){
			GameService.top10().then(function(data){
				$scope.gameList = data;
			});
		}
	}]);

app.controller('GameNewCtrl',['$scope','$rootScope','GameService','UploadService','$state',
	function($scope,$rootScope,GameService,UploadService,$state){
		$scope.game_types = [
			{id:1,label:'web'},
			{id:2,label:'PC'},
			{id:3,label:'手机'},
			{id:4,label:'收费'},
			{id:5,label:'iOS'},
			{id:6,label:'Android'},
			{id:7,label:'I & A'},
			{id:8,label:'原创游戏'}
		];

		$scope.url_types = [
			{id:1,label:'swf'},
			{id:2,label:'unity3D'},
			{id:3,label:'iframe'},
			{id:4,label:'站外链接'}
		];

		$scope.game = {};

		UploadService.file().then(function(fn){
			$scope.uploadFile = function($file){
				fn($file,function(resp){
					if(resp.status == 200 && resp.statusText == 'OK'){
						$scope.game.content.upyun_url = resp.data.url;
					}else{
						alert('上传失败,请重试.');
					}
					$scope.filePercentage = null;
				},function(evt){
					$scope.filePercentage = evt.percentage;
				});
			}
		});

		UploadService.image().then(function(fn){
			$scope.uploadImage = function($file){
				fn($file,function(resp){
					if(resp.status == 200 && resp.statusText == 'OK'){
						$scope.game.image = resp.data.url;
					}else{
						alert('上传失败,请重试.');
					}
					$scope.imagePercentage = null;
				},function(evt){
					$scope.imagePercentage = evt.percentage;
				});
			}
		});		

		$scope.$watch('game_type',function(){
			if($scope.game_type)$scope.game.type = $scope.game_type.id;
		});

		$scope.$watch('url_type',function(){
			if($scope.url_type)$scope.game.content.url_type = $scope.url_type.id;
		});

		$scope.submit = function(){
			$scope.game.update_at = moment($scope.game.update_at,"YYYY/MM/DD H:mm:SS").unix();
			$.post(ManagePath+'/game/create',$scope.game,function(data){
				$state.go('base.gameEdit',{id:data});
			});
		}
	}]);

app.controller('GameEditCtrl',['$scope','$rootScope','GameService','$stateParams','UploadService','$state','$filter','MessageService',
	function($scope,$rootScope,GameService,$stateParams,UploadService,$state,$filter,MessageService){
		$scope.game_types = [
			{id:1,label:'web'},
			{id:2,label:'PC'},
			{id:3,label:'手机'},
			{id:4,label:'收费'},
			{id:5,label:'iOS'},
			{id:6,label:'Android'},
			{id:7,label:'I & A'},
			{id:8,label:'原创游戏'}
		];

		$scope.url_types = [
			{id:1,label:'swf'},
			{id:2,label:'unity3D'},
			{id:3,label:'iframe'},
			{id:4,label:'站外链接'}
		];

		if(!$stateParams.id || $stateParams == 0){
			// new game
			
		}else{
			// edit game
			GameService.promise($stateParams.id).then(function(data){
				console.log(data);
				// data.update_at = moment.unix(parseInt(data.update_at)).format("YYYY/MM/DD H:mm:SS");
				$scope.game = data;
				$scope.game_type = $scope.game_types[$scope.game.type-1];
				$scope.url_type = $scope.url_types[$scope.game.content.url_type-1];
				$scope.game.create_time = $filter('dateTime')($scope.game.create_at);
			});
		}

		UploadService.file().then(function(fn){
			$scope.uploadFile = function($file){
				fn($file,function(resp){
					if(resp.status == 200 && resp.statusText == 'OK'){
						$scope.game.content.upyun_url = resp.data.url;
					}else{
						alert('上传失败,请重试.');
					}
					$scope.filePercentage = null;
				},function(evt){
					$scope.filePercentage = evt.percentage;
				});
			}
		});

		UploadService.image().then(function(fn){
			$scope.uploadImage = function($file){
				fn($file,function(resp){
					if(resp.status == 200 && resp.statusText == 'OK'){
						$scope.game.image = resp.data.url;
					}else{
						alert('上传失败,请重试.');
					}
					$scope.imagePercentage = null;
				},function(evt){
					$scope.imagePercentage = evt.percentage;
				});
			}
		});		

		$scope.$watch('game_type',function(){
			if($scope.game_type)$scope.game.type = $scope.game_type.id;
		});

		$scope.$watch('url_type',function(){
			if($scope.url_type)$scope.game.content.url_type = $scope.url_type.id;
		});

		$scope.submit = function(){
			if($scope.game.status == 99){
				pass($scope.game,function(){
					$scope.game.create_at = $filter('toUnix')($scope.game.create_time);
					delete $scope.game.create_time;
					$.post(ManagePath+'game/update',$scope.game,function(data){
						if(data == $scope.game.id){
							$state.go('base.gameList');	
						}
					});
				});
			}else{
				$scope.game.create_at = $filter('toUnix')($scope.game.create_time);
				delete $scope.game.create_time;
				$.post(ManagePath+'game/update',$scope.game,function(data){
					if(data == $scope.game.id){
						$state.go('base.gameList');	
					}
				});
			}
		}

		var pass = function(game,fn){
			var options = {
				content:game,
				type:105,
				status:true
			}
			MessageService.create(options).then(function(data){
				if(data.status === true){
					fn();
				}
			});
		}

		$scope.sendBack = function(){
			var options = {
				content:$scope.game,
				type:105,
				status:false
			}
			MessageService.create(options).then(function(data){
				if(data.status === false){
					$scope.game.status = 3;
					$scope.game.create_at = $filter('toUnix')($scope.game.create_time);
					delete $scope.game.create_time;
					delete $scope.game.content.$$hashKey;
					delete $scope.game.$$hashKey;
					$.post(ManagePath+'game/update',$scope.game,function(data){
					});
				}
			});
		}
		$scope.deleteGame = function() {
			if(confirm('确认删除该游戏吗？')){
				GameService.delete($scope.game.id).then(function(){
					alert('删除成功');
					$state.go('base.gameList');
				});
			}
		}
	}]);

app.controller('TagCtrl',['$scope','$rootScope','TagService',
	function($scope,$rootScope,TagService){
		$scope.options = {};
		$scope.options.search_type = 'key';

		TagService.list().then(function(data){
			$scope.tagList = data;
		});

		$scope.change_type = function(id){
			$scope.options.type = id;
			query();
		}

		$scope.change_search_type = function(type){
			$scope.options.search_type = type;
		}

		function query(page){
			if(page){
				var _options = _.clone($scope.options);
				_options.page = page;
				TagService.list(_options).then(function(data){
					$scope.tagList = data;
				});	
			}else{
				TagService.list($scope.options).then(function(data){
					$scope.tagList = data;
				});	
			}
		}

		$scope.types = [{
			id:1,
			label:'语言版本',
		},{
			id:2,
			label:'游戏类型',
		},{
			id:3,
			label:'玩法操作',
		},{
			id:4,
			label:'体验感受',
		},{
			id:5,
			label:'题材风格',
		},{
			id:0,
			label:'其他',
		}];

		$scope.pageChange = query;

		$scope.tag_search = function(e){
			var keycode = window.event?e.keyCode:e.which;
			if(keycode == 13){
				query();
			}
		}

		$scope.submit = function(tag){
			TagService.update(tag);
			tag.hide = true;
		}

		$scope.delete_tag = function(tag){
			TagService.delete_tag(tag);
		}
	}]);

app.controller('CreamCtrl',['$scope','$rootScope','CreamService','MessageService',
	function($scope,$rootScope,CreamService,MessageService){
		$scope.options = {};
		$scope.options.search_type = 'id';

		$scope.change_type = function(id){
			$scope.options.type = id;
			query();
		}

		$scope.change_search_type = function(type){
			$scope.options.search_type = type;
		}

		$scope.change_status = function(status){
			$scope.options.status = status;
			query();
		}

		$scope.search = function(e){
			var keycode = window.event?e.keyCode:e.which;
			if(keycode == 13){
				query();
			}
		}

		function query(page){
			var _options = _.clone($scope.options);
			if(page)_options.page = page;
			if(_options['keywords'])_options[_options['search_type']] = _options['keywords'];
			delete _options.search_type;
			delete _options.keywords;
			CreamService.list(_options).then(function(data){
				$scope.list = data;
			});
		}

		CreamService.list().then(function(data){
			$scope.list = data;
			console.log(data);
		});

		$scope.pageChange = query;

		$scope.change_cream_status = function(cream,status){
			if(status == 3){
				sendBack(cream);
			}else if(status == 99){
				pass(cream);
			}else{
				cream.status = status;
				CreamService.update(cream);	
			}
			
		}

		$scope.delete = function(cream){
			CreamService.delete(cream.id);
			cream.hide = true;
		}

		var pass = function(cream){
			var options = {
				content:cream,
				type:106,
				status:true
			}
			MessageService.create(options).then(function(data){
				if(data.status === true){
					cream.status = 99;
					CreamService.update(cream);
				}
			});
		}

		var sendBack = function(cream){
			var options = {
				content:cream,
				type:106,
				status:false
			}
			MessageService.create(options).then(function(data){
				if(data.status === false){
					cream.status = 3;
					CreamService.update(cream);
				}
			});
		}

	}]);

app.controller('CreamEditCtrl',['$scope','$rootScope','$state','$stateParams','CreamService','$filter','MessageService',
	function($scope,$rootScope,$state,$stateParams,CreamService,$filter,MessageService){
		CreamService.info($stateParams.id).then(function(info){
			console.log(info);
			$scope.cream = info;
			$scope.cream.create_time = $filter('dateTime')($scope.cream.create_at);
		});

		$scope.submit = function(){
			if($scope.cream.status == 99){
				pass($scope.cream);
			}else{
				sendBack($scope.cream);
			}
		}


		var pass = function(cream){
			var options = {
				content:cream,
				type:106,
				status:true
			}
			MessageService.create(options).then(function(data){
				if(data.status === true){
					$scope.cream.create_at = $filter('toUnix')($scope.cream.create_time);
					CreamService.update($scope.cream).then(function(){
						$state.go('base.cream');
					});
				}
			});
		}

		var sendBack = function(cream){
			var options = {
				content:cream,
				type:106,
				status:false
			}
			MessageService.create(options).then(function(data){
				if(data.status === false){
					$scope.cream.create_at = $filter('toUnix')($scope.cream.create_time);
					CreamService.update($scope.cream).then(function(){
						$state.go('base.cream');
					});
				}
			});
		}
	}]);

app.controller('VideoCtrl',['$scope','$rootScope','VideoService','MessageService',
	function($scope,$rootScope,VideoService,MessageService){
		$scope.options = {};
		$scope.options.search_type = 'id';

		$scope.change_type = function(id){
			$scope.options.type = id;
			query();
		}

		$scope.change_search_type = function(type){
			$scope.options.search_type = type;
		}

		$scope.change_status = function(status){
			$scope.options.status = status;
			query();
		}

		$scope.search = function(e){
			var keycode = window.event?e.keyCode:e.which;
			if(keycode == 13){
				query();
			}
		}

		$scope.submit = function(video){
			if(video.status == 1){
				pass(video,function(){
					VideoService.update(video);		
				});
			}else{
				VideoService.update(video);	
			}
			
		}

		$scope.delete = function(video){
			_delete(video,function(){
				VideoService.delete(video.id);
				video.hide = true;
			});
		}

		function query(page){
			var _options = _.clone($scope.options);
			if(page)_options.page = page;
			if(_options['keywords'])_options[_options['search_type']] = _options['keywords'];
			delete _options.search_type;
			delete _options.keywords;
			VideoService.list(_options).then(function(data){
				$scope.list = data;
			});
		}

		var pass = function(video,fn){
			var options = {
				content:video,
				type:107,
				status:true
			}
			MessageService.create(options).then(function(data){
				if(data.status === true){
					fn();
				}
			});
		}

		var _delete = function(video,fn){
			var options = {
				content:video,
				type:107,
				status:false
			}
			MessageService.create(options).then(function(data){
				if(data.status === false){
					fn();
				}
			});
		}

		VideoService.list().then(function(data){
			$scope.list = format_url(data);
		});

		function format_url(data){
			_.forEach(data.data,function(video){
				if(video.v_type == 1){
					if(video.origin_url.indexOf('acfun.tv') == -1){
						video.origin_url = "http://www.acfun.tv"+video.origin_url;
					}
				}else if(video.v_type == 2){
					if(video.origin_url.indexOf('bilibili.com') == -1){
						video.origin_url = "http://www.bilibili.com"+video.origin_url;
					}
				}else if(video.v_type == 3){
					if(video.origin_url.indexOf('youku.com') == -1){
						video.origin_url = "http://www.youku.com"+video.origin_url;
					}
				}
			});
			return data;
		}

		$scope.pageChange = query;
	}]);

app.controller('ImageCtrl',['$scope','$rootScope','ImageService',
	function($scope,$rootScope,ImageService){
		$scope.options = {};
		$scope.options.search_type = 'id';

		$scope.change_type = function(id){
			$scope.options.type = id;
			query();
		}

		$scope.change_search_type = function(type){
			$scope.options.search_type = type;
		}

		$scope.change_status = function(status){
			$scope.options.status = status;
			query();
		}

		$scope.search = function(e){
			var keycode = window.event?e.keyCode:e.which;
			if(keycode == 13){
				query();
			}
		}

		$scope.submit = function(image,i){
			ImageService.update(image);
			if(!i)alert('提交成功');
		}

		$scope.delete = function(image){
			if(!confirm('确认删除该图片吗?'))return;
			ImageService.delete(image.id);
			image.hide = true;
		}

		$scope.acceptAll = function(){
			_.forEach($scope.list.data,function(image){
				image.status = 99;
				$scope.submit(image,true);
			});
		}

		function query(page){
			var _options = _.clone($scope.options);
			if(page)_options.page = page;
			if(_options['keywords'])_options[_options['search_type']] = _options['keywords'];
			delete _options.search_type;
			delete _options.keywords;
			ImageService.list(_options).then(function(data){
				$scope.list = data;
			});
		}

		ImageService.list().then(function(data){
			$scope.list = data;
			console.log(data);
		});

		$scope.pageChange = query;
	}]);

app.controller('NoticeCtrl',['$scope','$rootScope','NoticeService','$stateParams','$state',
	function($scope,$rootScope,NoticeService,$stateParams,$state){
		$scope.options = {};
		$scope.options.search_type = 'id';

		$scope.change_type = function(id){
			$scope.options.type = id;
			query();
		}

		$scope.change_search_type = function(type){
			$scope.options.search_type = type;
		}

		$scope.change_status = function(status){
			$scope.options.status = status;
			query();
		}

		$scope.search = function(e){
			var keycode = window.event?e.keyCode:e.which;
			if(keycode == 13){
				query();
			}
		}

		function query(page){
			var _options = _.clone($scope.options);
			if(page)_options.page = page;
			if(_options['keywords'])_options[_options['search_type']] = _options['keywords'];
			delete _options.search_type;
			delete _options.keywords;
			NoticeService.list(_options).then(function(data){
				$scope.list = data;
			});
		}
		if($stateParams.id){
			$scope.options.search_type = 'tid';
			$scope.options.keywords = $stateParams.id;
			query();	
		}else{
			query();
		}
		

		$scope.pageChange = query;

		$scope.change_notice_status = function(notice,status){
			notice.status = status;
			NoticeService.update(notice);
			alert('操作成功');
		}

		$scope.delete = function(cream){
			if(!confirm('确认删除该公告吗?'))return;
			NoticeService.delete(cream.id);
			cream.hide = true;
		}

		$scope.addNotice = function(){
			if($scope.options.search_type == 'tid' && !isNaN($scope.options.keywords)){
				$state.go('base.noticeNew',{id:$scope.options.keywords});
			}else{
				alert('请选择游戏ID查询并输入ID后 再添加公告');
			}
		}
	}]);

app.controller('NoticeNewCtrl',['$scope','$rootScope','$filter','NoticeService','$stateParams','$state',
	function($scope,$rootScope,$filter,NoticeService,$stateParams,$state){

		$scope.notice = {
			tid:$stateParams.id,
			create_time:moment().format('YYYY/MM/DD HH:mm:ss'),
		};

		$scope.submit = function(){
			$scope.notice.create_at = $filter('toUnix')($scope.notice.create_time);
			$scope.notice.update_at = $scope.notice.create_at;
			delete $scope.notice.create_time;
			NoticeService.create($scope.notice);
			alert('创建成功.');
			$state.go('base.notice');
		}
	}]);

app.controller('NoticeEditCtrl',['$scope','$rootScope','$filter','NoticeService','$stateParams','$state',
	function($scope,$rootScope,$filter,NoticeService,$stateParams,$state){
		NoticeService.info($stateParams.id).then(function(info){
			console.log(info);
			$scope.notice = info;
			$scope.notice.create_time = $filter('dateTime')($scope.notice.create_at);
		});

		$scope.submit = function(){
			$scope.notice.create_at = $filter('toUnix')($scope.notice.create_time);
			$scope.notice.update_at = $scope.notice.create_at;
			delete $scope.notice.create_time;
			NoticeService.update($scope.notice);
			alert('修改成功.');
			$state.go('base.notice');
		}
	}]);

app.controller('RecExamineCtrl',['$scope','$rootScope','GamerecService',
	function($scope,$rootScope,GamerecService){
		$scope.options = {};
		$scope.options.search_type = 'id';

		$scope.change_type = function(id){
			$scope.options.type = id;
			query();
		}

		$scope.change_search_type = function(type){
			$scope.options.search_type = type;
		}

		$scope.change_status = function(status){
			$scope.options.status = status;
			query();
		}

		$scope.search = function(e){
			var keycode = window.event?e.keyCode:e.which;
			if(keycode == 13){
				query();
			}
		}

		function query(page){
			var _options = _.clone($scope.options);
			if(page)_options.page = page;
			if(_options['keywords'])_options[_options['search_type']] = _options['keywords'];
			delete _options.search_type;
			delete _options.keywords;
			GamerecService.list(_options).then(function(data){
				$scope.list = data;
			});
		}

		GamerecService.list().then(function(data){
			$scope.list = data;
			console.log(data);
		});

		$scope.pageChange = query;

		$scope.change_notice_status = function(notice,status){
			notice.status = status;
			GamerecService.update(notice);
		}

		$scope.delete = function(gamerec){
			if(!confirm('确认删除该推荐吗?')){
				return;
			}
			GamerecService.delete(gamerec.id);
			gamerec.hide = true;
		}

		$scope.accept = function(gamerec){
			gamerec.status = 99;
			GamerecService.update(gamerec);
		}
	}]);

app.controller('ErrorReportCtrl',['$scope','$rootScope','GameerrorService',
	function($scope,$rootScope,GameerrorService){
		$scope.options = {};
		$scope.options.search_type = 'id';

		$scope.change_type = function(id){
			$scope.options.type = id;
			query();
		}

		$scope.change_search_type = function(type){
			$scope.options.search_type = type;
		}

		$scope.change_status = function(status){
			$scope.options.status = status;
			query();
		}

		$scope.search = function(e){
			var keycode = window.event?e.keyCode:e.which;
			if(keycode == 13){
				query();
			}
		}

		function query(page){
			var _options = _.clone($scope.options);
			if(page)_options.page = page;
			if(_options['keywords'])_options[_options['search_type']] = _options['keywords'];
			delete _options.search_type;
			delete _options.keywords;
			GameerrorService.list(_options).then(function(data){
				$scope.list = data;
			});
		}

		GameerrorService.list().then(function(data){
			$scope.list = data;
			console.log(data);
		});

		$scope.pageChange = query;

		$scope.change_notice_status = function(notice,status){
			notice.status = status;
			GameerrorService.update(notice);
		}

		$scope.delete = function(gamerec){
			if(!confirm("确认删除该错误报告吗?"))return;
			GameerrorService.delete(gamerec.id);
			gamerec.hide = true;
		}
	}]);

app.controller('RelationCtrl',['$scope','$rootScope','$stateParams','GameService',
	function($scope,$rootScope,$stateParams,GameService){

		GameService.relationGame($stateParams.id).then(function(data){
			$scope.gameList = data;
		});

		$scope.relate = function(){
			var options = {
				gameid:$stateParams.id,
				ids:$scope.relate_input
			}
			GameService.relation(options).then(function(data){
				if(data == '1'){
					alert("合并成功");
					$scope.relate_input = '';
				}else{
					alert('合并失败,请重试');
				}
			});
		}

		$scope.mergy = function(){
			var options = {
				id:$stateParams.id,
				dirid:$scope.mergy_input
			}
			GameService.mergy(options).then(function(data){
				if(data == $scope.mergy_input){
					alert('合并成功');
					$scope.mergy_input = '';
				}else{
					alert('合并失败,请重试');
				}
			});	
		}
	}]);
app.directive('gameList',function(){
	return {
		restrict:'A',
		templateUrl:'/static/game/game-list.html',
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
		templateUrl:'/static/game/game-list-block.html',
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
			},
			mergy:function(options){
				var deffered = $q.defer();
				$.post(ManagePath+'game/merge',options,function(data){
					deffered.resolve(data);
				});
				return deffered.promise;
			},
			relation:function(options){
				var deffered = $q.defer();
				$.post(ManagePath+'game/relation',options,function(data){
					deffered.resolve(data);
				});
				return deffered.promise;
			},
			relationGame:function(id){
				var deffered = $q.defer();
				$.get(ManagePath+'game/relationgame/'+id,function(data){
					deffered.resolve(data);
				});
				return deffered.promise;
			},
			getTop10:function(){
				var deffered = $q.defer();
				$.get(ManagePath+'game/top10/'+id,function(data){
					deffered.resolve(data);
				});
				return deffered.promise;
			},
			delete:function(id){
				var deffered = $q.defer();
				$.get(ManagePath+'game/delete/'+id,function(data){
					deffered.resolve(data);
				});
				return deffered.promise;
			}
		}
	}]);

app.service('TagService',['$q',
	function($q){
		return {
			promise:function(id){
				var deffered = $q.defer();
				$.get(ManagePath+'tag/info'+id,function(data){
					deffered.resolve(data);
				});
				return deffered.promise;
			},
			list:function(options){
				var deffered = $q.defer();
				$.get(ManagePath+'tag/list',options,function(data){
					deffered.resolve(data);
				});
				return deffered.promise;
			},
			all:function(){
				var deffered = $q.defer();
				$.get(ManagePath+'tag/all',function(data){
					deffered.resolve(data);
				});
				return deffered.promise;
			},
			update:function(tag){
				var deffered = $q.defer();
				$.post(ManagePath+'tag/update',tag,function(data){
					deffered.resolve(data);
				});
				return deffered.promise;
			},
			delete_tag:function(tag){
				var deffered = $q.defer();
				$.get(ManagePath+'tag/delete/'+tag.id,function(data){
					deffered.resolve(data);
				});
				return deffered.promise;
			}
		}
	}]);

app.service('CreamService',['$q',
	function($q){
		return {
			list:function(options){
				var deffered = $q.defer();
				$.get(ManagePath+'cream/list',options,function(data){
					deffered.resolve(data);
				});
				return deffered.promise;
			},
			update:function(cream){
				var deffered = $q.defer();
				$.post(ManagePath+'cream/update',cream,function(data){
					deffered.resolve(data);
				});
				return deffered.promise;	
			},
			delete:function(id){
				var deffered = $q.defer();
				$.get(ManagePath+'cream/delete/'+id,function(data){
					deffered.resolve(data);
				});
				return deffered.promise;
			},
			info:function(id){
				var deffered = $q.defer();
				$.get(ManagePath+'cream/info/'+id,function(data){
					deffered.resolve(data);
				});
				return deffered.promise;	
			}
		}
	}]);

app.service('VideoService',['$q',
	function($q){
		return {
			list:function(options){
				var deffered = $q.defer();
				$.get(ManagePath+'video/list',options,function(data){
					deffered.resolve(data);
				});
				return deffered.promise;
			},
			update:function(video){
				var deffered = $q.defer();
				$.post(ManagePath+'video/update',video,function(data){
					deffered.resolve(data);
				});
				return deffered.promise;	
			},
			delete:function(id){
				var deffered = $q.defer();
				$.get(ManagePath+'video/delete/'+id,function(data){
					deffered.resolve(data);
				});
				return deffered.promise;
			}
		}
	}]);

app.service('ImageService',['$q',
	function($q){
		return {
			list:function(options){
				var deffered = $q.defer();
				$.get(ManagePath+'image/list',options,function(data){
					deffered.resolve(data);
				});
				return deffered.promise;
			},
			update:function(image){
				var deffered = $q.defer();
				$.post(ManagePath+'image/update',image,function(data){
					deffered.resolve(data);
				});
				return deffered.promise;	
			},
			delete:function(id){
				var deffered = $q.defer();
				$.get(ManagePath+'image/delete/'+id,function(data){
					deffered.resolve(data);
				});
				return deffered.promise;
			}
		}
	}]);

app.service('NoticeService',['$q',
	function($q){
		return {
			list:function(options){
				var deffered = $q.defer();
				$.get(ManagePath+'notice/list',options,function(data){
					deffered.resolve(data);
				});
				return deffered.promise;
			},
			create:function(notice){
				var deffered = $q.defer();
				$.post(ManagePath+'notice/new',notice,function(data){
					deffered.resolve(data);
				});
				return deffered.promise;	
			},
			update:function(notice){
				var deffered = $q.defer();
				$.post(ManagePath+'notice/update',notice,function(data){
					deffered.resolve(data);
				});
				return deffered.promise;	
			},
			delete:function(id){
				var deffered = $q.defer();
				$.get(ManagePath+'notice/delete/'+id,function(data){
					deffered.resolve(data);
				});
				return deffered.promise;
			},
			info:function(id){
				var deffered = $q.defer();
				$.get(ManagePath+'notice/info/'+id,function(data){
					deffered.resolve(data);
				});
				return deffered.promise;	
			}
		}
	}]);

app.service('GamerecService',['$q',
	function($q){
		return {
			list:function(options){
				var deffered = $q.defer();
				$.get(ManagePath+'gamerec/list',options,function(data){
					deffered.resolve(data);
				});
				return deffered.promise;
			},
			update:function(gamerec){
				var deffered = $q.defer();
				$.post(ManagePath+'gamerec/update',gamerec,function(data){
					deffered.resolve(data);
				});
				return deffered.promise;	
			},
			delete:function(id){
				var deffered = $q.defer();
				$.get(ManagePath+'gamerec/delete/'+id,function(data){
					deffered.resolve(data);
				});
				return deffered.promise;
			},
			info:function(id){
				var deffered = $q.defer();
				$.get(ManagePath+'gamerec/info/'+id,function(data){
					deffered.resolve(data);
				});
				return deffered.promise;	
			}
		}
	}]);

app.service('GameerrorService',['$q',
	function($q){
		return {
			list:function(options){
				var deffered = $q.defer();
				$.get(ManagePath+'gameerror/list',options,function(data){
					deffered.resolve(data);
				});
				return deffered.promise;
			},
			update:function(gameerror){
				var deffered = $q.defer();
				$.post(ManagePath+'gameerror/update',gameerror,function(data){
					deffered.resolve(data);
				});
				return deffered.promise;	
			},
			delete:function(id){
				var deffered = $q.defer();
				$.get(ManagePath+'gameerror/delete/'+id,function(data){
					deffered.resolve(data);
				});
				return deffered.promise;
			},
			info:function(id){
				var deffered = $q.defer();
				$.get(ManagePath+'gameerror/info/'+id,function(data){
					deffered.resolve(data);
				});
				return deffered.promise;	
			}
		}
	}]);
app.directive('tagsList',function(){
	return {
		restrict:'A',
		templateUrl:'/static/game/tags-list.html',
		replace:true,
		scope:{
			tagsCacheList:'=tagsList'
		},
		controller:'TagsListCtrl'
	}
});
app.controller('TagsListCtrl',['$scope','TagService',
	function($scope,TagService){
		$scope.tagList = [{
			label:'语言',
			tags:[]
		},{
			label:'类型',
			tags:[]
		},{
			label:'玩法',
			tags:[]
		},{
			label:'感受',
			tags:[]
		},{
			label:'风格',
			tags:[]
		}];

		$scope.currentTab = 0;

		

		$scope.$watch('tagsCacheList',function(){
			$scope.selectedList = $scope.tagsCacheList ? JSON.parse($scope.tagsCacheList) : [];	
		});
		
		$scope.add = function(tag){

			tag.disable = true;			
			$scope.selectedList.push({
				name:tag.name,
				support:1,
				tagid:tag.id
			});

			$scope.tagsCacheList = JSON.stringify($scope.selectedList);

			// if($scope.tagsCacheList){
			// 	var _list = JSON.parse($scope.tagsCacheList);
			// 	_list.push(tag);
			// 	$scope.tagsCacheList = JSON.stringify(_list);
			// }else{
			// 	$scope.tagsCacheList = JSON.stringify([tag]);
			// }
		}

		$scope.remove = function(tag){
			_.remove($scope.selectedList,function(_tag){
				return _tag.tagid == tag.tagid;
			});
			$scope.tagsCacheList = JSON.stringify($scope.selectedList);

			angular.forEach($scope.tagList,function(type){
				angular.forEach(type.tags,function(_tag){
					if(_tag.id == tag.tagid){
						_tag.disable = null;
					}	
				})
				
			});	
			
		}

		$scope.changeTab = function(index){
			$scope.currentTab = index;
		}

		TagService.all().then(function(data){
			data = JSON.parse(data);
			angular.forEach(data,function(data,index){

				angular.forEach($scope.selectedList,function(tag){
					if(data.id == tag.tagid)data.disable = true;
				});

				$scope.tagList[data.type - 1].tags.push(data);
			});
		});
	}]);