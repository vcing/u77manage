/**
 * angular 启动文件
 * 
 */

// 手动启动
$(function(){
	$.get('/api/user/profile',function(data){
		if(data.username){
			window.user = data;
			// window.user.clientId = encodeURIComponent(data.userId+"__"+data.nickname+"__"+data.avatar);
			angular.bootstrap(document.getElementById('bootstrap'),['u77manage']);
		}else{
			window.location.href = '/login';
		}
	});
	
});

var app = angular.module('u77manage',['ui.router','ui.bootstrap','ngTouch','infinite-scroll','ngFileUpload','textAngular','ui.bootstrap.datetimepicker']);
// var BasePath    = 'http://dev.u77.com/admin/';
// var Path        = 'http://dev.u77.com';
var BasePath       = 'http://www.u77.com/admin/';
var Path           = 'http://www.u77.com/';
var AvatarPath     = 'http://img.u77.com/avatar/';
var ManagePath     = 'http://manage.u77.com/';
var BackEndPath    = 'http://u77admin.leanapp.cn/api/';
var ChargePath     = 'http://u77pay.leanapp.cn/api/';
var AnalysisPath   = 'http://u77userrecord.leanapp.cn/api/';
var DiscoverPath   = 'http://u77discover.avosapps.com/api/';
var MessagePath    = 'http://u77message.leanapp.cn/api/'
// var MessagePath = 'http://localhost:888/api/'
// var FinancePath = 'http://192.168.1.102:3000/api/';
// var ChargePath  = 'http://localhost:3000/api/' ;



// var sysMessageConvId = "56fba2ffdaeb3a63ca5affa3"; //系统消息转发的普通房间
// var recentConvId     = "56fb44737db2a200509263b9"; //最近联系人房间
// var sysConvId        = "56fb9bc5128fe10050cb25bc"; //系统对话房间
// var adminInnerConvId = "570b7adc71cfe4005fa5da11"; //管理员内部同步房间

var sysMessageConvId = "570ca59e71cfe40067339a14"; //系统消息转发的普通房间
var recentConvId     = "570ca5f71ea4930068df1cd8"; //最近联系人房间
var sysConvId        = "570ca51bdf0eea00644fa951"; //系统对话房间
var adminInnerConvId = "570ca60371cfe40067339db9"; //管理员内部同步房间




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
			.state('base.gameNewWithDiscover',{
				url:'/game-new/:discoverId',
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
			.state('base.analysisFinanceNew',{
				url:'/analysis/finance/new',
				views:{
					'content':{
						templateUrl:'/static/analysis/finance-edit.html',
						controller:'FinanceEditCtrl'
					}
				}
			})
			.state('base.analysisFinanceEdit',{
				url:'/analysis/finance/edit/:id',
				views:{
					'content':{
						templateUrl:'/static/analysis/finance-edit.html',
						controller:'FinanceEditCtrl'
					}
				}
			})
			.state('base.analysisFinance',{
				url:'/analysis/finance/:id',
				views:{
					'content':{
						templateUrl:'/static/analysis/finance.html',
						controller:'FinanceCtrl'
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
			.state('base.message',{
				url:'/message',
				views:{
					'content':{
						templateUrl:'/static/message/message.html',
						controller:'RealtimeMessageCtrl'
					}
				}
			})
			.state('base.messageWithUserId',{
				url:'/message/:userId',
				views:{
					'content':{
						templateUrl:'/static/message/message.html',
						controller:'RealtimeMessageCtrl'
					}
				}
			})
			.state('base.addGift',{
				url:'/gift/add',
				views:{
					'content':{
						templateUrl:'/static/paygame/gift-edit.html',
						controller:'GiftEditController'
					}
				}
			})
			.state('base.editGift',{
				url:'/gift/edit/:id',
				views:{
					'content':{
						templateUrl:'/static/paygame/gift-edit.html',
						controller:'GiftEditController'	
					}
				}
			})
			.state('base.giftList',{
				url:'/gift',
				views:{
					'content':{
						templateUrl:'/static/paygame/gift.html',
						controller:'GiftListController'
					}
				}
			})
		$locationProvider.html5Mode(true);

		// $urlRouterProvider.when("", "/dashboard");
		$urlRouterProvider.otherwise('/dashboard');

		// 时间本地化
		moment.locale('zh-cn');

		
	}]);

app.run(['$rootScope','$state','$q','UploadService','RealtimeService',
	function($rootScope,$state,$q,UploadService,RealtimeService){
		$rootScope.loading = true;
		$rootScope.BasePath = BasePath;
		$rootScope.Path = Path;
		$rootScope.AvatarPath = AvatarPath;
		$rootScope.ManagePath = ManagePath;
		$rootScope.user = window.user;
		UploadService.post().then(function(fn){
			window.uploadPostImage = function($file){
				fn($file,function(resp){
					console.log(resp);
				});
			}
		});



		// 用户处理
		// UserService().then(function(data){
		// 	$rootScope.user = data;
		// });
	}]);


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
