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

app.controller('WebAnalysisCtrl',['$scope','$rootScope',
	function($scope,$rootScope){

	}]);

app.controller('FinanceEditCtrl',['$scope','$rootScope','$state','AnalysisPageService','SaveService',
	function($scope,$rootScope,$state,AnalysisPageService,SaveService){
		if($state.params.id){
			$scope.pageName = '编辑';
			if($state.params.id == 'test'){
				var data = '{"title":"test","charts":[{"$$hashKey":"object:5","width":6,"time":3,"x":"time","xtime":1,"y":"money","type":"line","startDate":"2016-02-23","endDate":"2016-02-25","title":"2333"},{"$$hashKey":"object:31","width":6,"time":3,"x":"time","xtime":1,"y":"money","type":"line","startDate":"2016-02-23","endDate":"2016-02-25","title":"23333"},{"$$hashKey":"object:57","width":6,"time":3,"x":"time","xtime":1,"y":"money","type":"line","startDate":"2016-02-23","endDate":"2016-02-25","title":"32222"},{"$$hashKey":"object:83","width":6,"time":3,"x":"time","xtime":1,"y":"money","type":"line","startDate":"2016-02-23","endDate":"2016-02-25","title":"1122"}]}';
				data = JSON.parse(data);
				$scope.charts = data.charts;
				$scope.title = data.title;
			}else{
				AnalysisPageService.get($state.params.id).then(function(page){
					$scope.title = page.title;
					$scope.tabs = JSON.parse(page.data);
					$scope.currentTab = 0;
				});
			}
		}else{
			$scope.pageName = '新建';
			$scope.currentTab = 0;
			$scope.tabs = [{
				title:'',
				charts:[]
			}];
		}

		$scope.active = function(key) {
			$scope.currentTab = key;
		}

		$scope.newTab = function() {
			$scope.tabs.push({
				title:'',
				charts:[]
			});
			$scope.currentTab = $scope.tabs.length-1;
		}

		// 删除tab
		$scope.deleteTab = function(key){
			if($scope.currentTab == key){
				$scope.currentTab = key - 1;
			}
			$scope.tabs.splice(key,1);
		}

		// 删除表
		$scope.deleteChart = function(key){
			$scope.tabs[$scope.currentTab].charts.splice(key,1);
		}
		

		$scope.savePage = function(){
			var data = {
				title:$scope.title,
				data:JSON.stringify($scope.tabs),
				objectId:$state.params.id
			}
			if($state.params.id){
				AnalysisPageService.update(data).then(function(){
					$state.go('base.analysisFinance',{id:$state.params.id});
				});
			}else{
				AnalysisPageService.create(data).then(function(id){
					$state.go('base.analysisFinance',{id:id});
				})
			}
		}

		function outputTab() {
			var data = _.clone($scope.tabs[$scope.currentTab]);
			delete data.$$hashKey;
			data.charts.forEach(function(chart){
				delete chart.$$hashKey;
			});
			return JSON.stringify(data);
		}

		function inputTab(data) {
			$scope.tabs[$scope.currentTab] = JSON.parse(data);
		}

		function outputPage() {
			var data = _.clone($scope.tabs);
			data.forEach(function(tab){
				delete tab.$$hashKey;
				tab.charts.forEach(function(chart){
					delete chart.$$hashKey;
				});
			});
			
			return JSON.stringify($scope.tabs);
		}

		function inputPage(data) {
			$scope.tabs = JSON.parse(data);
		}

		$scope.showSave = function() {
			SaveService.create({
				outputPage:outputPage,
				inputPage:inputPage,
				outputTab:outputTab,
				inputTab:inputTab
			});
		}

		$scope.addChart = function(){
			$scope.tabs[$scope.currentTab].charts.push({});
		}
	}]);

app.controller('FinanceCtrl',['$scope','$rootScope','$state','AnalysisPageService',
	function($scope,$rootScope,$state,AnalysisPageService){
		$scope.id = $state.params.id;
		var data;
		if($state.params.id == 'test'){
			data = '{"title":"test","charts":[{"$$hashKey":"object:5","width":6,"time":3,"x":"time","xtime":1,"y":"money","type":"line","startDate":"2016-02-23","endDate":"2016-02-25","title":"2333"},{"$$hashKey":"object:31","width":6,"time":3,"x":"time","xtime":1,"y":"money","type":"line","startDate":"2016-02-23","endDate":"2016-02-25","title":"23333"},{"$$hashKey":"object:57","width":6,"time":3,"x":"time","xtime":1,"y":"money","type":"line","startDate":"2016-02-23","endDate":"2016-02-25","title":"32222"},{"$$hashKey":"object:83","width":6,"time":3,"x":"time","xtime":1,"y":"money","type":"line","startDate":"2016-02-23","endDate":"2016-02-25","title":"1122"}]}';
			data = JSON.parse(data);
			$scope.title = data.title;
			$scope.charts = data.charts;
		}
		if($state.params.id){
			AnalysisPageService.get($state.params.id).then(function(page){
				data = page;
				data.charts = JSON.parse(page.data);
				$scope.title = data.title;
				$scope.tabs = data.charts;
				$scope.currentTab = 0;
			});
		}

		$scope.active = function(key) {
			$scope.currentTab = key;
		}

		$scope.delete = function(){
			AnalysisPageService.delete($state.params.id).then(function(result){
				$state.go('base.dashboard');
			});
		}
		
	}]);

app.controller('ChartEditCtrl',['$scope','AnalysisService',
	function($scope,AnalysisService){
		// 配置文件
		var config = {
			"mxwk":{
				"name":"冒险与挖矿",
				"servers":[1,2,3,4,5,6,7,8,9]
			},
			"czdtx":{
				"name":"村长打天下",
				servers:[1,2]
			},
			"czdtx800ux":{
				"name":"村长打天下800ux",
				servers:[1,2]
			},
			"kzlr800ux":{
				"name":"空之利刃800ux",
				servers:[1,2]
			},
			"zqsd800ux":{
				"name":"战旗时代800ux"
			},
			"kpgs":{
				"name":"卡片怪兽"
			},
			"dhd":{
				"name":"大皇帝",
				"servers":[1,2]
			},
			"djmy2":{
				"name":"刀剑魔药2",
				"platforms":["3dm","17173","u77","178"]
			},
			"xxd":{
				"name":"仙侠道",
				"servers":[1,2]
			},
			"yzh":{
				"name":"玉之魂"
			},
			"lmcs":{
				"name":"猎魔传说"
			},
			"kosg":{
				"name":"KO三国"
			},
			"ademx":{
				"name":"艾德尔冒险"
			},
			"mszzl":{
				"name":"萌神赵子龙"
			},
			"dx":{
				"name":"斗侠"
			},
			"jxj":{
				"name":"将心诀"
			}
		}
		// 初始化选项
		$scope.gameConfig   = [];
		$scope.servers      = [];
		$scope.platforms     = [];
		$scope.showPlatform = true;
		$scope.showServers  = true;
		$scope.times = [1,3,7,15,30,'自定义'];
		$scope.widths = [3,4,5,6,7,8,9,10,11,12];
		$scope.xConfig = [
			{
				name:'时间',
				key:'time'
			},
			{
				name:'额度',
				key:'amount'
			},
			{
				name:'渠道',
				key:'platform'
			},
			{
				name:'区服',
				key:'server'
			},
			{
				name:'游戏',
				key:'game'
			}
		];

		$scope.yConfig = [
			{
				name:'金额',
				key:'money'
			},
			{
				name:'充值人数',
				key:'human'
			},
			{
				name:'充值次数',
				key:'count'
			},
			{
				name:'付费玩家平均付费金额',
				key:'averageOfHuman'
			},
			{
				name:'付费玩家平均每次付费金额',
				key:'averageOfCount'
			},
			{
				name:'平均付费金额',
				key:'averageOfPay',
			},
			{
				name:'付费率',
				key:'percentOfPay',
			},
			{
				name:'活跃人数',
				key:'login'
			},
			{
				name:'注册人数',
				key:'register'
			},
			{
				name:'留存人数',
				key:'retention'
			},
			{
				name:'留存百分比',
				key:'percentOfRetention'
			}
		];
		$scope.chartConfig = [
			{
				name:'线形图',
				key:'line'
			},
			{
				name:'饼状图',
				key:'pie'
			},
			{
				name:'柱状图',
				key:'bar'
			},
			{
				name:'表格图',
				key:'table'
			}
		]

		// 格式化配置文件
		$.map(config,function(value,key){
			$scope.gameConfig.push({
				name_en:key,
				name:value.name,
				servers:value.servers
			});
		});

		// 初始化状态
		$scope.isEdit = true;

		// 初始化chart
		$scope.chart.width = $scope.chart.width || 6 ;
		$scope.chart.time  = $scope.chart.time || $scope.times[1];
		$scope.chart.x     = $scope.chart.x || $scope.xConfig[0].key;
		$scope.chart.xtime = $scope.chart.xtime || $scope.times[0];
		$scope.chart.y     = $scope.chart.y || $scope.yConfig[0].key;
		$scope.chart.type  = $scope.chart.type || $scope.chartConfig[0].key;

		// 选游戏范围
		$scope.$watch('chart.game',function(n){
			if(!$scope.chart.game){
				$scope.platforms    = [];
				$scope.servers      = [];
				$scope.showPlatform = true;
				$scope.showServers  = true;
				return;
			}

			if(config[$scope.chart.game].platforms){
				$scope.platforms    = config[$scope.chart.game].platforms;
				$scope.showPlatform = true;
			}else{
				$scope.platforms    = [];
				$scope.showPlatform = false;
			}
			
			if(config[$scope.chart.game].servers){
				$scope.servers     = config[$scope.chart.game].servers;
				$scope.showServers = true;
			}else{
				$scope.servers     = [];
				$scope.showServers = false;
			}

			if($scope.chart.game){
				if($scope.chart.x == 'game'){
					alert('x轴无法选择为游戏');
					$scope.chart.x = 'time';
				}
			// 	$scope.xConfig.splice(4,1);
			// }else if($scope.chart.xConfig == 4){
			// 	$scope.xConfig.push({
			// 		name:'游戏',
			// 		key:'game'
			// 	})
			}
		});

		$scope.$watch('chart.y',function(n){
			if($scope.chart.y == 'percentOfPay' ||
			   $scope.chart.y == 'averageOfPay' ||
			   $scope.chart.y == 'login' ||
			   $scope.chart.y == 'register' ||
			   $scope.chart.y == 'retention' ||
			   $scope.chart.y == 'percentOfRetention'){
				if(!$scope.chart.game){
					alert('请先选择游戏后 才能选择平均付费或付费率');
					$scope.chart.y = 'money';
					return false;
				}
				$scope.chart.x        = 'time';
				$scope.chart.platform = null;
				$scope.chart.server   = null;
				$scope.xDisable       = true;
			}else{
				$scope.xDisable = false;
			}
		});

		// 时间范围选择
		$scope.$watch('chart.time',function(time){
			if(time != '自定义'){
				$scope.chart.startDate = moment().subtract(time-1,'days').format('YYYY-MM-DD');
				$scope.chart.endDate   = moment().format('YYYY-MM-DD');	
			}
		});

		$scope.$watch('chart.x',function(x){
			if(x == 'game'){
				$scope.yConfig.splice(5,6);
			}else if($scope.yConfig.length == 5){
				var _config = [{
									name:'平均付费金额',
									key:'averageOfPay',
								},
								{
									name:'付费率',
									key:'percentOfPay',
								},
								{
									name:'活跃人数',
									key:'login'
								},
								{
									name:'注册人数',
									key:'register'
								},
								{
									name:'留存人数',
									key:'retention'
								},
								{
									name:'留存百分比',
									key:'percentOfRetention'
								}];
				_config.forEach(function(_y){
					$scope.yConfig.push(_y);
				});
			}

			if($scope.chart.game){
				if($scope.chart.x == 'game'){
					alert('x轴无法选择为游戏');
					$scope.chart.x = 'time';
				}
			// 	$scope.xConfig.splice(4,1);
			// }else if($scope.chart.xConfig == 4){
			// 	$scope.xConfig.push({
			// 		name:'游戏',
			// 		key:'game'
			// 	})
			}
		})

		// 切换图表/显示
		$scope.showChart = function(){
			$scope.isEdit  = !$scope.isEdit;
			$scope.loading = true;
			if(!$scope.isEdit){
				AnalysisService.query($scope.chart).then(function(result){
					$scope.loading   = false;
					$scope.chartData = toChartData(result.axis,$scope.chart.type);
				});	
			}
		}


	}]);

app.controller('ChartShowCtrl',['$scope','AnalysisService',
	function($scope,AnalysisService){
		$scope.loading = true;
		if($scope.chart.time != '自定义'){
			$scope.chart.startDate = moment().subtract($scope.chart.time-1,'days').format('YYYY-MM-DD');
			$scope.chart.endDate   = moment().format('YYYY-MM-DD');	
		}
		AnalysisService.query($scope.chart).then(function(result){
			$scope.loading   = false;
			$scope.chartData = toChartData(result.axis,$scope.chart.type);
			$scope.other = result;
		});	
	}]);

app.controller('SaveCtrl',['$scope','$rootScope','$uibModalInstance','options',
	function($scope,$rootScope,$uibModalInstance,options){
		$scope.outputTab = function() {
			$scope.data = options.outputTab();
		}

		$scope.outputPage = function() {
			$scope.data = options.outputPage();
		}

		$scope.inputTab = function() {
			options.inputTab($scope.data);
		}

		$scope.inputPage = function() {
			options.inputPage($scope.data);
		}
	}]);


function toChartData(data,type){
	var result;
	if(type == 'line'){
		result = {labels:[]};
		var _data = [];
		$.map(data,function(value,key){
			result.labels.push(key);
			_data.push(value);
		});

		result.datasets = [{
			fillColor : "rgba(151,187,205,0.5)",
			strokeColor : "rgba(151,187,205,1)",
			pointColor : "rgba(151,187,205,1)",
			pointStrokeColor : "#fff",
			data: _data
		}];
	}else if(type == 'pie'){
		// 计算颜色
		var colors = getColors(data);
		result = [];
		var _i = 0;
		$.map(data,function(value,key){
			result.push({
				value:value,
				label:key,
				color:'#'+colors[_i]
			});
			_i++;
		});
	}else if(type == 'bar'){
		result = {labels:[]};
		var _data = [];
		$.map(data,function(value,key){
			result.labels.push(key);
			_data.push(value);
		});

		result.datasets = [{
			fillColor : "rgba(151,187,205,0.5)",
			strokeColor : "rgba(151,187,205,1)",
			pointColor : "rgba(151,187,205,1)",
			pointStrokeColor : "#fff",
			data: _data
		}];
	}else if(type == 'table'){
		result = data;
	}
	return result;
}

function getColors(data){
	var _count = 1;
	var _full = parseInt('eeeeee',16);
	var colors = [];
	$.map(data,function(value,key){
		_count++;
	});
	for(var i = 1;i<_count;i++){
		var _color = ((_full/_count)*i).toString(16);
		_color = _color.indexOf('.') != -1 ? _color.split('.')[0] : _color;
		colors.push(_color);
	}
	return colors;
}
app.directive('chartEdit',function(){
	return {
		restrict:'A',
		templateUrl:'/static/analysis/chart-edit.html',
		replace:true,
		scope:{
			chart:'=chartEdit',
			deleteChart:'=deleteChart',
			key:'=key'
		},
		controller:'ChartEditCtrl'
	}
});

app.directive('chartShow',function(){
	return {
		restrict:'A',
		templateUrl:'/static/analysis/chart.html',
		replace:true,
		scope:{
			chart:'=chartShow'
		},
		controller:'ChartShowCtrl'
	}
})
app.service('AnalysisService',['$q',
	function($q){
		return {
			query:function(chart){
				var deffered = $q.defer();
				if(chart.y == 'money' || chart.y == 'human' || chart.y == 'count' || chart.y == 'averageOfHuman' || chart.y == 'averageOfCount'){
					$.get(ChargePath+'analysis/income',chart,function(result){
						// hack
						console.log(result);
						$.map(result['axis'],function(value,key) {
							result['axis'][key] *= 3;
						});
						deffered.resolve(result);
					});
				}else{
					$.get(AnalysisPath+'analysis',chart,function(result){
						deffered.resolve(result);
					});
				}
				return deffered.promise;
			},
			getConfig:function(chart){
				var deffered = $q.defer();
				return deffered.promise;
			}
		}
	}]);

app.service('AnalysisPageService',['$q',
	function($q){
		return {
			list:function(){
				var deffered = $q.defer();
				$.get(BackEndPath + 'page',function(result){
					deffered.resolve(result);
				});
				return deffered.promise;
			},
			create:function(page){
				var deffered = $q.defer();
				$.post(BackEndPath + 'page',page,function(result){
					deffered.resolve(result);
				});
				return deffered.promise;
			},
			update:function(page){
				var deffered = $q.defer();
				$.post(BackEndPath + 'page/'+page.objectId,page,function(result){
					deffered.resolve(result);
				});
				return deffered.promise;	
			},
			get:function(id){
				var deffered = $q.defer();
				$.get(BackEndPath + 'page/' + id,function(result){
					deffered.resolve(result);
				});
				return deffered.promise;
			},
			delete:function(id){
				var deffered = $q.defer();
				$.ajax({
					url: BackEndPath + 'page/' + id,
					type: 'DELETE',
					success: function(result) {
						deffered.resolve(result);
					}
				});
				return deffered.promise;	
			}
		}
	}]);

app.service('SaveService',['$q','$uibModal',
	function($q,$uibModal){
		return {
			create:function(options){
				var modalInstance = $uibModal.open({
					animation:true,
					templateUrl:'/static/analysis/save.html',
					controller:'SaveCtrl',
					size:'md',
					resolve:{
						options:function(){
							return options;
						}
					}
				});

				return modalInstance.result;
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


app.controller('BaseCtrl',['$scope','$rootScope','$state','AnalysisPageService','UserService','RealtimeService','$q',
	function($scope,$rootScope,$state,AnalysisPageService,UserService,RealtimeService,$q){
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

		AnalysisPageService.list().then(function(result){
			$scope.financePages = result;
		});

		$scope.logout = function() {
			UserService.logout().then(function(data){
				window.location.href = '/login';
			});
		}

		$(window).on('keyup',function(event){
			if($rootScope.keyUpEvent)$rootScope.keyUpEvent(event);
		});

		// 消息系统初始化连接
		RealtimeService.init().then(function(realtime){
			$rootScope.realtime = realtime;
			var deffered = $q.defer();
			realtime.conv(sysMessageConvId,function(conv){
				if(conv){
					deffered.resolve(conv);
				}else{
					deffered.reject({
						status:101,
						msg:'查询房间出错'
					});
				}
			});
			var _deffered = $q.defer();
			realtime.conv(recentConvId,function(conv){
				if(conv){
					_deffered.resolve(conv);
				}else{
					_deffered.reject({
						status:101,
						msg:'查询房间出错'
					});
				}
			});

			var __deffered = $q.defer();
			realtime.conv(adminInnerConvId,function(conv){
				if(conv){
					__deffered.resolve(conv);
				}else{
					_deffered.reject({
						status:101,
						msg:'查询房间出错'
					});
				}
			});

			var promises = [deffered.promise,_deffered.promise,__deffered.promise];
			return $q.all(promises);
		})
		// 加入房间
		.then(function(convs){
			$rootScope.sysConv    = convs[0];
			$rootScope.recentConv = convs[1];
			$rootScope.innerConv  = convs[2];
			var deffered = $q.defer();
			// 加入系统对话转发房间
			$rootScope.sysConv.join(function() {
				deffered.resolve($rootScope.sysConv);
			});

			// 加入最近联系人房间
			var _deffered = $q.defer();
			$rootScope.recentConv.join(function() {
				_deffered.resolve($rootScope.recentConv);
			});

			// 加入内部同步房间
			var __deffered = $q.defer();
			$rootScope.innerConv.join(function() {
				__deffered.resolve($rootScope.innerConv);
			});

			return $q.all([deffered.promise,_deffered.promise,__deffered.promise]);
		})
		// 同步消息
		.then(asyncSysLogs)
		// 消息系统事件初始化注册
		.then(function(){
			// 系统消息转发房间
			$rootScope.sysConv.receive(function(msg){
				receiveMessage(msg);
				RealtimeService.getUserInfos($rootScope.sysConvLogs);
				RealtimeService.getUserInfoFromMsgs($rootScope.sysMsgList)
				.then(function(){
					var _msg = $rootScope.sysMsgList[$rootScope.sysMsgList.length - 1];
					browserNotify(_msg.nickname,_msg.msg.text,AvatarPath + _msg.avatar);
				});
			});
			// 最近联系人房间
			$rootScope.recentConv.receive(function(msg){
				asyncSysLogs();
			});
			// 内部房间
			$rootScope.innerConv.receive(function(msg){
				var _done = false;
				_.map($rootScope.sysConvLogs,function(user){
					if(user.userId == msg.msg.to){
						$rootScope.$apply(function(){
							user.msgCount = 0;
							user.messages.push(msg.msg);
						});
					}
				});
			});
		},function(err){
			console.log(err);
			alert('实时通讯,消息系统出错,请刷新重试');
		});

		// 同步所有系统消息和最近联系人消息
		function asyncSysLogs() {
			var deffered = $q.defer();
			$rootScope.sysConv.log({limit:100},function(msgs){
				$rootScope.$apply(function(){
					// 初始化数值
					$rootScope.sysConvLogs = [];
					$rootScope.sysMsgList = [];
					$rootScope.msgCount = 0;
					$rootScope.normalMsgCount = 0;
					$rootScope.reportMsgCount = 0;
					$rootScope.payMsgCount = 0;
				});
				_.map(msgs,function(msg){
					receiveMessage(msg);
				});
				// 获取用户信息
				RealtimeService.getUserInfos($rootScope.sysConvLogs);
				RealtimeService.getUserInfoFromMsgs($rootScope.sysMsgList);
				deffered.resolve();
			});

			var _deffered = $q.defer();
			$rootScope.recentConv.log(function(msgs){
				$rootScope.$apply(function(){
					$rootScope.recentConvLogs = msgs.reverse();
					_deffered.resolve();
				});
			});
			// return deffered.promise;
			return $q.all([deffered.promise,_deffered.promise])
		}

		$rootScope.asyncSysLogs = asyncSysLogs;

		// 接收单条信息
		function receiveMessage(msg){
			msg.from = msg.fromPeerId;
			var _isFirst = true;
			var _msgs = $rootScope.sysConvLogs || [];

			_.map(_msgs,function(user,index){
				if(user.userId == msg.fromPeerId){
					user.messages.push(msg);
					if(user.userId != $rootScope.currentSystemDialogUserId)user.msgCount++;
					var _user = _.clone(user);
					_msgs.splice(index,1);
					_msgs.unshift(user);
					_isFirst = false;
				}
			});

			// 消息分类提醒
			if(msg.msg.type == 400){
				$rootScope.normalMsgCount = $rootScope.normalMsgCount ? ++$rootScope.normalMsgCount : 1;
			}else if(msg.msg.type == 207){
				$rootScope.payMsgCount = $rootScope.payMsgCount ? ++$rootScope.payMsgCount : 1;
			}else {
				$rootScope.reportMsgCount = $rootScope.reportMsgCount ? ++$rootScope.reportMsgCount : 1;
			}

			$rootScope.sysMsgList.push(msg);
			

			if($rootScope.msgCount){
				$rootScope.msgCount++
			}else{
				$rootScope.msgCount = 1;
			}

			if(_isFirst){
				var _user = {
					userId:msg.fromPeerId,
					messages:[msg],
					msgCount:1
				};
				_msgs.unshift(_user);
			}

			$rootScope.$apply(function(){
				$rootScope.sysConvLogs = _msgs;	
			});
		}

		function browserNotify(title, content, img) {
		        
		    if(!title && !content){
		        title = "桌面提醒";
		        content = "您看到此条信息桌面提醒设置成功";
		    }
		    var iconUrl = img;
		    
		    if (window.webkitNotifications) {
		        //chrome老版本
		        if (window.webkitNotifications.checkPermission() == 0) {
		            var notif = window.webkitNotifications.createNotification(iconUrl, title, content);
		            notif.display = function() {}
		            notif.onerror = function() {}
		            notif.onclose = function() {}
		            notif.onclick = function() {this.cancel();}
		            notif.replaceId = 'Meteoric';
		            notif.show();
		        } else {
		            window.webkitNotifications.requestPermission($jy.notify);
		        }
		    }
		    else if("Notification" in window){
		        // 判断是否有权限
		        if (Notification.permission === "granted") {
		            var notification = new Notification(title, {
		                "icon": iconUrl,
		                "body": content,
		            });
		        }
		        //如果没权限，则请求权限
		        else if (Notification.permission !== 'denied') {
		            Notification.requestPermission(function(permission) {
		                // Whatever the user answers, we make sure we store the
		                // information
		                if (!('permission' in Notification)) {
		                    Notification.permission = permission;
		                }
		                //如果接受请求
		                if (permission === "granted") {
		                    var notification = new Notification(title, {
		                        "icon": iconUrl,
		                        "body": content,
		                    });
		                }
		            });
		        }
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
app.controller('MessageCtrl',['$scope','$rootScope','$uibModalInstance','options','RealtimeService','$filter','ReportService',
	function($scope,$rootScope,$uibModalInstance,options,RealtimeService,$filter,ReportService){
		switch(options.type){
			case 105:
				options.type = 101;
				break;
			case 106:
				options.type = 103;
				break;
			case 107:
				options.type = 105;
				break;
			case 108:
				options.type = 107;
				break;
		}

		$scope.options = options;
		$scope.options.cause = options.cause || "";
		$scope.typeOptions = [{
			label:'游戏审核通知',
			id:101
		},{
			label:'精华审核通知',
			id:103,
		},{
			label:'视频审核通知',
			id:105
		},{
			label:'举报删除通知',
			id:107
		},{
			label:'游戏收录通知',
			id:109
		}];

		var userid;
		switch($scope.options.type){
			case 101:
				userid = $scope.options.content.userid;
				break;
			case 103:
				userid = $scope.options.content.userid;
				break;
			case 105:
				userid = $scope.options.content.userid;
				break;
			case 107:
				userid = $scope.options.content.sender;
				break;
			case 109:
				userid = $scope.options.content.userid;
				break;
		}

		$scope.cancel = function () {
			$uibModalInstance.dismiss('cancel');
		};

		$scope.submit = function(){

			var content = '';
			var _options = {
				type:0,
				text:''
			}
			
			switch($scope.options.type){
				case 101:
					content += "你投稿的游戏 <a href='"+($scope.options.status ? "/game/"+$scope.options.content.id : "")+"' target='_blank'>";
					content += $scope.options.content.title+"</a>";
					content += " 审核"+($scope.options.status ? "通过" : "未通过");
					content += $scope.options.status ? '' : " 原因:"+$scope.options.cause;
					content += '<a class="fr" href="/account/publish?game">查看投稿</a>';
					_options.type = !$scope.options.status ? $scope.options.type+ 1 : $scope.options.type;
					break;
				case 103:
					content += "你投稿的游戏精华 <a href='"+($scope.options.status ? "/post/"+$scope.options.content.id : "")+"' target='_blank'>";
					content += $scope.options.content.title+"</a>";
					content += " 审核"+($scope.options.status ? "通过" : "未通过");
					content += $scope.options.status ? '' : " 原因:"+$scope.options.cause;
					content += '<a class="fr" href="/account/publish?post">查看投稿</a>';
					_options.type = !$scope.options.status ? $scope.options.type+ 1 : $scope.options.type;
					break;
				case 105:
					content += "你在 <a href='"+"/game/"+$scope.options.content.game.id+"' target='_blank'>"+$scope.options.content.game.title+"</a>";
					content += "投稿的视频 <a href='/video/"+$scope.options.content.id+"' target='_blank'>"+$scope.options.content.title+"</a>";
					content += "审核"+($scope.options.status ? "通过" : "未通过");
					content += $scope.options.status ? '' : " 原因:"+$scope.options.cause;
					_options.type = !$scope.options.status ? $scope.options.type+ 1 : $scope.options.type;
					break;
				case 107:
					typeText = "";
					switch($scope.options.content.reportType){
						case 201:
							typeText = "评论";
							break;
						case 202:
							typeText = "精华";
							break;
						case 203:
							typeText = "视频";
							break;
						case 204:
							typeText = "游戏推荐";
							break;
						case 205:
							typeText = "发现";
							break;
					}
					content += "您发表的"+typeText+":__&&__ 因涉及 ";
					content += $scope.options.content.reason;
					content += " 被管理员删除";
					break;
			}

			_options.text = content;
			if(content.indexOf("__&&__") > 0) {
				ReportService.deletequery($scope.options.content.reportType,$scope.options.content.reportId)
				.then(function(title){
					_options.text = content.replace('__&&__',title);
					var data = {
						convId:sysConvId,
						type:_options.type,
						text:_options.text,
						to:userid,
						from:$rootScope.user.userId
					}
					RealtimeService.sendMessage(data)
					.then(function(){
						$uibModalInstance.close($scope.options);
						// 发送到内部房间同步
						$rootScope.innerConv.send(data);
					});
				})
			}else{
				var data = {
					convId:sysConvId,
					type:_options.type,
					text:_options.text,
					to:userid,
					from:$rootScope.user.userId
				}
				RealtimeService.sendMessage(data)
				.then(function(){
					$rootScope.asyncSysLogs();
					$uibModalInstance.close($scope.options);
					// 发送到内部房间同步
					$rootScope.innerConv.send(data);
				});
			}
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
		link: function($scope,element,attrs) {
			$(".main-sidebar .sidebar").slimScroll({ height: $(window).height() - 50, alwaysVisible: true, });
			$.AdminLTE.pushMenu.expandOnHover();
		}
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
      restrict: 'A', // only activate on element attribute
      require: '?ngModel', // get a hold of NgModelController
      link: function(scope, element, attrs, ngModel) {
        if(!ngModel) return; // do nothing if no ng-model

        // Specify how UI should be updated
        ngModel.$render = function() {
          element.html(ngModel.$viewValue || '');
        };

        // Listen for change events to enable binding
        element.on('blur keyup change', function() {
          scope.$apply(read);
        });
        read(); // initialize

        // Write data to the model
        function read() {
          var html = element.html();
          // When we clear the content editable the browser leaves a <br> behind
          // If strip-br attribute is provided then we strip this out
          if( attrs.stripBr && html == '<br>' ) {
            html = '';
          }
          ngModel.$setViewValue(html);
        }
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
});

app.directive('barChart',function(){
	return {
		restrict:'A',
		scope:{
			data:'=barChart'
		},
		link:function($scope,element,attrs){
			var _chart;
			$scope.$watch('data',function(){
				if($scope.data){
					_chart ? _chart.destroy() : false;
					var ctx = $(element).get(0).getContext("2d");
					ctx.canvas.width = $scope.ratio ? $scope.ratio : 2;
					ctx.canvas.height = 1;
					_chart = new Chart(ctx).Bar($scope.data,{
						responsive: true,
						// maintainAspectRatio: false,
					});

					$(element).on('click',function(e){
						var point = _chart.getPointsAtEvent(e);
						$scope.click ? $scope.click(point) : false ;
					});
				}
			})
		}
	}
});

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
});

app.directive('tableChart',function(){
	return {
		restrict:'A',
		scope:{
			data:'=tableChart'
		},
		link:function($scope,element,attrs){
			var _chart;
			$scope.$watch('data',function(){
				$scope.data
				$.map($scope.data,function(value,key){
					console.log(value);
				});
				$(element);
			});
		}
	}
});

app.directive('doughnutChart',function(){
	return {
		restrict:'A',
		scope:{
			data:'=doughnutChart'
		},
		link:function($scope,element,attrs){
			var _chart;
			$scope.$watch('data',function(){
				if($scope.data){
					_chart ? _chart.destroy() : false;
					var ctx = $(element).get(0).getContext('2d');
					_chart = new Chart(ctx).Doughnut($scope.data);
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

app.filter('cTime',[function(){
  return function(str){
    return moment(str).format("YY年MM月DD日 H:mm"); 
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

app.filter('userLink',[function(){
  return function(userId) {
    return Path + 'user/' + userId;
  }
}]);

// app.filter('nickname',[function(){
//   return function(clientId) {
//     clientId = decodeURIComponent(clientId);
//     return clientId.split('__')[1].split('__')[0];
//   }
// }]);

// app.filter('userId',[function(){
//   return function(clientId){
//     clientId = decodeURIComponent(clientId);
//     return clientId.split('__')[0];
//   }
// }]);

// app.filter('avatar',[function(){
//   return function(clientId){
//     clientId = decodeURIComponent(clientId);
//     return clientId.split('__')[2];
//   }
// }])

app.filter('adminNickname',['RealtimeService',
	function(RealtimeService){
		var _cache = RealtimeService.getUserCache();
		return function(userId){
			return _cache[userId].nickname;
		}
  	}]);

app.filter('adminAvatar',['RealtimeService',
	function(RealtimeService){
		var _cache = RealtimeService.getUserCache();
		return function(userId){
			return AvatarPath + _cache[userId].avatar;
		}
	}]);

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
			delete:function(type,id){
				var deffered = $q.defer();
				if(type == 205){
					$.ajax({
						url:DiscoverPath+'discover/discoverid/'+id,
						type:'delete',
						success:function(result){
							if(result.status == 0){
								deffered.resolve(true);
							}else{
								deffered.resolve(false);
							}
						}
					});
				}else{
					$.get(ManagePath+'report/delete/'+type+'/'+id,function(data){
						if(data == "true"){
							deffered.resolve(true);
						}else{
							deffered.resolve(false);
						}
					});
				}
				return deffered.promise;
			},
			deletequery:function(type,id){
				var deffered = $q.defer();
				if(type == 205){
					$.get(DiscoverPath + 'discover/deletequery/'+id,function(data){
						deffered.resolve(data);
					});
				}else{
					$.get(ManagePath+'report/deletequery/'+type+'/'+id,function(data){
						deffered.resolve(data);
					});
				}
				
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
app.service('UserService',['$q',
	function($q){
		return {
			profile:function() {
				var deffered = $q.defer();
				$.get('/api/user/profile',function(data){
					deffered.resolve(data);
				});
				return deffered.promise;
			},
			logout:function() {
				var deffered = $q.defer();
				$.get('/api/user/logout',function(data){
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

		$scope.chooseUser = function(user){
			$scope.options.search_type = 'sender';
			$scope.options.keywords = user.userid;
			query();
		}

		$scope.chooseBody = function(comment){
			$scope.options.type = comment.type;
			$scope.options.search_type = 'tid';
			$scope.options.keywords = comment.body.id;
			query();
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
						// hack
						result.datasets[0].data.push(value*3);
						// result.datasets[0].data.push(value);
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
						// hack
						value *= 3;
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
								});
								break;
							case '村长打天下':
								result.push({
									value:value,
									color:'#d74047',
									highlight:'#d96a5c',
									label:key
								});
								break;
							case '猎魔传说':
								result.push({
									value:value,
									color:'#da434a',
									highlight:'#db6c5f',
									label:key
								});
								break;
							case 'KO三国':
								result.push({
									value:value,
									color:'#abcdef',
									highlight:'#bcdef0',
									label:key
								})
								break;
							case '艾德尔冒险':
								result.push({
									value:value,
									color:'#1bddef',
									highlight:'#bdeef0',
									label:key
								})
								break;
							case '萌神赵子龙':
								result.push({
									value:value,
									color:'#FFFC66',
									highlight:'#E6E365',
									label:key
								})
								break;
							case '斗侠':
								result.push({
									value:value,
									color:'#abcdef',
									highlight:'#bcdef0',
									label:key
								})
								break;
						}
					});
					deffered.resolve(result);
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

		$scope.create = function(discover){
			var url = $state.href('base.gameNewWithDiscover',{discoverId:discover.discoverId});
			window.open(url);
		}

		$scope.search = function(e){
			var keycode = window.event?e.keyCode:e.which;
			if(keycode == 13){
				$scope.refresh();
			}
		}

		$scope.changeIsLast = function(discover) {
			DiscoverServer.toggleIsLast(discover.discoverId).then(function(result) {
				if(result.status == 100){
					discover.isLast = !discover.isLast
				}else{
					alert(result.msg);
				}
			})
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
			discoverGet:function(id){
				var deffered = $q.defer();
				$.ajax({
					url:DiscoverPath+'discover/list?searchType=discoverId&keywords='+id,
					type:'get',
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
			},
			toggleIsLast:function(id) {
				var deffered = $q.defer();
				$.ajax({
					url:DiscoverPath+'discover/toggle/'+id,
					type:'get',
					success:function(result) {
						deffered.resolve(result);
					}
				});
				return deffered.promise;
			}
		}
	}]);
/* 
 * 201 评论举报
 * 202 精华举报
 * 203 视频举报
 * 204 游戏推荐举报
 * 205 发现举报
 */
app.controller('RealtimeMessageCtrl',['$q','$scope','$rootScope','RealtimeService','ReportService','MessageService','$state',
	function($q,$scope,$rootScope,RealtimeService,ReportService,MessageService,$state){
		// 聊天窗口大小 自适应
		$scope.messageBoxHeight = $(window).height() - 300;
		$(window).resize(function(){
			$scope.$apply(function(){
				$scope.messageBoxHeight = $(window).height() - 300;	
			})
			
		});
		$scope.openList = true;
		// 打开联系人聊天窗口
		$scope.openDialog = function(user){
			user.msgCount = 0;
			RealtimeService.getDialog(user).then(function(msgs){
				$scope.currentDialogUser = user;
				$rootScope.currentSystemDialogUserId = user.userId;
				$scope.currentDialogUser.messages = msgs;
				$scope.openList = false;
			});
		}

		$scope.loadMore = function(){
			if(!$scope.currentDialogUser){
				alert('请先选择用户.');
				return false;
			}
			var _mark = $scope.currentDialogUser.messages[0].timestamp;
			RealtimeService.getDialog($scope.currentDialogUser,$scope.currentDialogUser.messages[0].timestamp)
			.then(function(msgs){
				$scope.currentDialogUser.messages = msgs.concat($scope.currentDialogUser.messages);
				$scope.dialogScrollTo(_mark);
			});			
		}

		$scope.timeLineLoadMore = function() {
			var _mark = $rootScope.recentConvLogs[$rootScope.recentConvLogs.length - 1].timestamp;
			$rootScope.recentConv.log({
				t:_mark
			},function(logs){
				$rootScope.$apply(function(){
					$rootScope.recentConvLogs = $rootScope.recentConvLogs.concat(logs.reverse());
				});
				window.recentTimeLineLoadingMore = false;
			})
		}

		// 发送消息
		$scope.sendMessage = function(type){
			if(!$scope.currentDialogUser){
				alert('请先选择用户.');
				return false;
			}
			if(!$scope.msgText || $scope.msgText.trim() == ''){
				alert('请输入内容');
				return false;
			}
			var data = {
				convId:sysConvId,
				from:$rootScope.user.userId,
				to:$scope.currentDialogUser.userId,
				type:type || 400,
				text:$scope.msgText
			};
			RealtimeService.sendMessage(data).then(function(result){
				if(result.status == 100){
					data.msg = {
						type:data.type,
						text:data.text
					}
					// 加入消息到列表
					$scope.currentDialogUser.messages.push(data);
					// 发送到内部房间同步
					$rootScope.innerConv.send(data);
				}else{
					alert(result.msg);
				}
				$scope.msgText = "";

			});


		}

		// 标记处理
		$scope.mark = function() {
			if(!$scope.currentDialogUser){
				alert('请先选择用户.');
				return false;
			}
			var _result;
			// 打开dialog
			RealtimeService.markDialog($scope.currentDialogUser)
			.then(function(result){
				_result = result;
				// 删除系统消息转发房间
				return RealtimeService.deleteUserMessages($scope.currentDialogUser.userId,sysMessageConvId);
			})
			.then(function(result){
				if(result.status == 100){
					// 最近聊天记录房间发送记录
					$rootScope.recentConv.send(_result,function() {
						// 同步消息
						$rootScope.asyncSysLogs();
						$scope.currentDialogUser = null;
					});
				}else{
					alert(result.msg);
				}
			});
		}

		$scope.delete = function(msg){
			var options = {
				content:{
					sender:msg.msg.sender,
					reportType:msg.msg.type,
					reportId:msg.msg.id,
					reason:msg.msg.text.split("：")[1]
				},
				type:108,
				status:false
			}
			// 发给被举报人
			MessageService.create(options).then(function(data){
				if(data.status === false){
					ReportService.delete(msg.msg.type,msg.msg.id).then(function(done){
						if(done){
							typeText = "";
							switch(msg.msg.type){
								case 201:
									typeText = "评论";
									break;
								case 202:
									typeText = "精华";
									break;
								case 203:
									typeText = "视频";
									break;
								case 204:
									typeText = "游戏推荐";
									break;
								case 205:
									typeText = "发现";
									break;
							}
							// 发给举报人
							$scope.msgText = "您举报的" + typeText + " ID:" + 
											msg.msg.id + "已删除处理."
							$scope.sendMessage(211);
						}else{
							alert('操作失败,请重试.');
						}
					});
				}
			})
		}

		$rootScope.keyUpEvent = function(event){
			switch(event.keyCode){
				case 9:
					switchUser();
					break;
				case 27:
					$scope.mark();
					break;
				case 13:
					$scope.sendMessage();
					break;
			}
		}

		function switchUser() {
			if($scope.currentDialogUser){
				_.map($rootScope.sysConvLogs,function(user,index){
					if(user.userId == $rootScope.currentSystemDialogUserId){
						if(index == ($rootScope.sysConvLogs.length - 1)){
							$scope.openDialog($rootScope.sysConvLogs[0]);
						}else{
							$scope.openDialog($rootScope.sysConvLogs[index+1]);
						}
					}
				});
			}else{
				$scope.openDialog($rootScope.sysConvLogs[0]);
			}
		}

		if($state.params.userId){
			$scope.openDialog({userId:$state.params.userId});
		}

		$scope.test = function() {
			console.log($scope.currentDialogUser);
		}
	}]);

app.controller('MarkDialogCtrl',['$scope','$rootScope','$uibModalInstance','currentDialogUser',
	function($scope,$rootScope,$uibModalInstance,currentDialogUser){
		$scope.types = [{
			key:201,
			name:'举报处理',
			class:'danger'
		},{
			key:206,
			name:'游戏反馈',
			class:'info'
		},{
			key:207,
			name:'网站反馈',
			class:'success'
		},{
			key:400,
			name:'普通对话',
			class:'primary'
		},{
			key:401,
			name:'充值反馈',
			class:'warning'
		}];

		$scope.submit = function() {
			var result = {
				from:{
					userId:currentDialogUser.userId,
					avatar:currentDialogUser.avatar,
					nickname:currentDialogUser.nickname
				},
				dealer:{
					userId:user.userId,
					avatar:user.avatar,
					nickname:user.nickname
				},
				type:$scope.type,
				result:$scope.result			
			};
			$uibModalInstance.close(result);
		}

		$scope.active = function(key) {
			$scope.type = key;
		}

		$scope.cancel = function() {
			$uibModalInstance.dismiss('cancel');
		}
	}]);
app.directive('messageBoxAutoScroll',function(){
	return {
		restrict:'A',
		link:function($scope,element,attrs){
			$scope.$watch('currentDialogUser',function(n,o){
				var _boxHeight    = $(element).outerHeight();
				var _top          = $(element).scrollTop();
				var _scrollHeight = $(element)[0].scrollHeight;
				if(o){
					if(n && n.userId == o.userId){
						// 没切换人
						if((_scrollHeight - _top - _boxHeight) > 100){
							// 滚动了
						}else{
							// 没滚动 自动滚动
							scrollBottom();
						}
					}else{
						// 切换人了 滚动底部
						scrollBottom(true);
					}
				}else{
					scrollBottom(true);
				}
			},true);

			function scrollBottom(flag) {
				if(flag){
					$(element).off('scroll');
					$scope.dialogScrollTo = null;
					window.messageBoxLoadingMore = false;
				}
				setTimeout(function(){
					$(element).animate({
						scrollTop:$(element)[0].scrollHeight+'px'
					},300,'linear',function(){
						if(!$scope.dialogScrollTo){
							$scope.dialogScrollTo = function(timestamp){
								setTimeout(function(){
									var _position = $(element).scrollTop() + $('.t-'+timestamp).position().top;
									$(element).scrollTop(_position);
									window.messageBoxLoadingMore = false;
								},10);
							}

							$(element).on('scroll',function(){
								var top = $(element).scrollTop();
								if(top <= 10 && $(element)[0].scrollHeight > $scope.messageBoxHeight){
									if(!window.messageBoxLoadingMore){
										window.messageBoxLoadingMore = true;
										$scope.loadMore();
									}
								}
							});
						}
					});
				},100);
			}
		}
	};
});

app.directive('recentMessageLoadMore',function(){
	return {
		restrict:'A',
		link:function($scope,element,attrs){
			$(element).on('scroll',function(){
				var top = $(element).scrollTop();
				var isBottom = ($(element)[0].scrollHeight - $scope.messageBoxHeight - top) <= 10;
				if(isBottom && $(element)[0].scrollHeight > $scope.messageBoxHeight){
					if(!window.recentTimeLineLoadingMore){
						window.recentTimeLineLoadingMore = true;
						$scope.timeLineLoadMore();
					}
				}
			});
		}
	}
})
app.service('RealtimeService',['$q','$uibModal',
	function($q,$uibModal){
		var userInfos = {
			1:{
				avatar:"3d/6b/1.jpg",
				nickname:"U77店长",
				userId:"1"
			},
			42561:{
				avatar:"00/37/42561.png",
				nickname:"U77TY",
				userId:"42561"
			},
			76976:{
				avatar:"d5/dc/76976.jpg",
				nickname:"U77弋戈",
				userId:"76976"
			},
			144038:{
				avatar:"ef/51/144038.png",
				nickname:"U77匠人",
				userId:"144038"
			},
			923297:{
				avatar:"69/7e/923297.jpg",
				nickname:"U77俗家弟子",
				userId:"923297"
			},
			938953:{
				avatar:"aa/99/938953.jpg",
				nickname:"U77吉辣辣",
				userId:"938953"
			},
			907174:{
				avatar:"2f/e1/907174.jpg",
				nickname:"U77羽翼",
				userId:"907174"
			}
		};
		var _getUserInfos = function(users){
			var deffered = $q.defer();
			var _deffered = $q.defer();
			var userIds = [];
			_.map(users,function(user){
				if(!userInfos[user.userId])userIds.push(user.userId);
			});
			if(userIds.length > 0){
				$.get(Path + 'api/getUsers?ids=' + userIds.toString(),function(results){
					results = JSON.parse(results);
					_.map(results,function(user){
						if(userInfos[user.userid]){
							userInfos[user.userid].avatar = user.avatar;
							userInfos[user.userid].nickname = user.nickname;
						}else{
							userInfos[user.userid] = {
								avatar:user.avatar,
								nickname:user.nickname,
								userId:user.userid
							};
						}
					});
					_deffered.resolve();
				});	
			}else{
				_deffered.resolve();
			}

			_deffered.promise.then(function(){
				_.map(users,function(user){
					user.avatar = userInfos[user.userId].avatar;
					user.nickname = userInfos[user.userId].nickname;
				});
				deffered.resolve();
			})
			return deffered.promise;
		}
		return {
			// 初始化实时通讯
			init:function() {
				var deffered = $q.defer();
				$.get('/api/user/realtime',function(data){
					if(data.appId){
						data.clientId = window.user.userId;
						var _realtime = AV.realtime(data,function(realtime){
							deffered.resolve(_realtime);
						});
					}else{
						alert(data.msg);
						window.location.href = '/login';
					}
				});
				return deffered.promise;
			},
			getDialog:function(user,timestamp) {
				var deffered = $q.defer();
				var options = {
					clientId:user.userId,
					convId:window.sysConvId,
					limit:20,
				};
				if(timestamp)options.timestamp = timestamp;
				$.get(MessagePath + 'message',options,function(results){
					_.map(results,function(msg,index){
						results[index].msg = msg.data;
					});
					results = results.reverse();
					_getUserInfos([user]).then(function(){
						deffered.resolve(results);	
					})
				});
				return deffered.promise;
			},
			sendMessage:function(options) {
				var deffered = $q.defer();
				$.post(MessagePath + 'message',options,function(results){
					deffered.resolve(results);
				});
				return deffered.promise;
			},
			deleteUserMessages:function(clientId,convId) {
				var deffered = $q.defer();
				$.get(MessagePath + 'message/delete',{
					clientId:clientId,
					convId:convId
				},function(result){
					deffered.resolve(result);
				});
				return deffered.promise;
			},
			markDialog:function(currentDialogUser) {
				var modalInstance = $uibModal.open({
					animation:true,
					templateUrl:'/static/message/mark-dialog.html',
					controller:'MarkDialogCtrl',
					size:'md',
					resolve:{
						currentDialogUser:function(){
							return currentDialogUser;
						}
					}
				});
				return modalInstance.result;
			},
			getClientId:function(userId) {
				var deffered = $q.defer();
				$.get(Path + 'api/getclientid?userId='+userId,function(clientId){
					deffered.resolve(clientId);
				});
				return deffered.promise;
			},
			getUserInfos:function(users) {
				return _getUserInfos(users);
			},
			getUserCache:function() {
				return userInfos;
			},
			getUserInfoFromMsgs:function(msgs) {
				var _deffered = $q.defer();
				var deffered  = $q.defer();
				var userIds   = [];
				_.map(msgs,function(msg){
					if(!userInfos[msg.from])userIds.push(msg.fromPeerId);
				});

				if(userIds.length > 0){
					$.get(Path + 'api/getUsers?ids=' + userIds.toString(),function(results){
						results = JSON.parse(results);
						_.map(results,function(user){
							if(userInfos[user.userid]){
								userInfos[user.userid].avatar = user.avatar;
								userInfos[user.userid].nickname = user.nickname;
							}else{
								userInfos[user.userid] = {
									avatar:user.avatar,
									nickname:user.nickname,
									userId:user.userid
								};
							}
						});
						_deffered.resolve();
					});	
				}else{
					_deffered.resolve();
				}

				_deffered.promise.then(function(){
					_.map(msgs,function(msg){
						msg.avatar = userInfos[msg.from].avatar;
						msg.nickname = userInfos[msg.from].nickname;
					});
					deffered.resolve();
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
				console.log($scope.options);
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

app.controller('GameNewCtrl',['$scope','$rootScope','GameService','UploadService','$state','DiscoverServer',
	function($scope,$rootScope,GameService,UploadService,$state,DiscoverServer){
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

		if($state.params.discoverId){
			DiscoverServer.discoverGet($state.params.discoverId).then(function(result){
				console.log(result[0]);
				var _game = result[0];
				$scope.game = {
					title:_game.title,
					image:_game.img[0],
					userid:_game.userId,
					content:{
						content:_game.oneWord || _game.description || _game.game.description,
						url:_game.game.originUrl,
					}
				}
				switch(_game.game.type){
					case 1:
						$scope.game_type = $scope.game_types[0];
						break;
					case 2:
						$scope.game_type = $scope.game_types[1];
						$scope.game.content.down1 = _game.game.originUrl;
						break;
					case 3:
						$scope.game_type = $scope.game_types[5];
						$scope.game.content.down1 = _game.game.originUrl;
						break;
					case 4:
						$scope.game_type = $scope.game_types[4];
						$scope.game.content.down2 = _game.game.originUrl;
						break;
				}
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
app.controller('GiftEditController',['$scope','$rootScope','$state','GiftService',
	function($scope,$rootScope,$state,GiftService){
		$scope.loading = false;
		if($state.params.id){
			GiftService.get($state.params.id).then(function(gift){
				gift.start = moment.unix(gift.start).format('YYYY-MM-DD');
				gift.end = moment.unix(gift.end).format('YYYY-MM-DD');
				$scope.gift = gift;
			});
		}else{
			$scope.gift = {};
		}
		GiftService.getGames().then(function(games){
			$scope.games = [];
			$scope.objectGames = games;
			_.map(games,function(game,key){
				if(game.objectId != "56a8387a2e958a00597da3b2"){
					$scope.games.push(game);	
				}
			});
		});

		$scope.submit = function() {
			$scope.loading = true;
			var _gift = {};

			if(!$scope.gift.start || !moment($scope.gift.start).unix() > 0){
				alert('请输入正确的开始时间');
				return false;
			}

			if(!$scope.gift.end || !moment($scope.gift.end).unix() > 0){
				alert('请输入结束的开始时间');
				return false;
			}

			if(!$scope.gift.name){
				alert('请输入礼包名称');
				return false;
			}

			if(!$scope.gift.game){
				alert('请选择游戏');
				return false;
			}

			_gift.name = $scope.gift.name;
			_gift.start = moment($scope.gift.start).unix();
			_gift.end = moment($scope.gift.end).unix();
			_gift.server = $scope.gift.server;
			_gift.game = $scope.gift.game;
			_gift.url = $scope.gift.url;
			_gift.desc = $scope.gift.desc.replace(/\n/g,'<br/>');
			if($state.params.id){
				_gift.objectId = $state.params.id;
			}

			GiftService.create(_gift).then(function(result){
				if(result.status == 100){
					$state.go("base.giftList");
				}else{
					alert('添加失败,请稍后再试.');
					$scope.loading = false;
				}
			});
		}
	}]);

app.controller('GiftListController',['$scope','$rootScope','GiftService',
	function($scope,$rootScope,GiftService){
		function init(){
			GiftService.getList().then(function(list){
				_.map(list,function(gift){
					gift.removing = false;
					gift.chartData = [
						{
							value:gift.count - gift.remain,
							label:'已领取',
							color:"#ccc"
						},
						{
							value:gift.remain,
							label:'剩余',
							color:"#3c8dbc"
						}
					];
				});
				$scope.gifts = list;
			});
		}
		

		$scope.remove = function(gift){
			if(confirm('确定删除该礼包？')){
				gift.removing = true;
				GiftService.remove(gift.objectId).then(function(result){
					if(result.status == 100){
						alert('删除成功');
						gift.removing = false;
						init();
					}else{
						gift.removing = false;
						alert('删除失败');
					}
				});	
			}
		}

		init();
	}]);

app.service('GiftService',['$q',
	function($q){
		var _games;
		return {
			getGames:function(){
				var deffered = $q.defer();
				if(_games){
					deffered.resolve(_games);
				}else{
					$.get(ChargePath + 'server',function(result){
						_games = result;
						deffered.resolve(result);
					});	
				}
				return deffered.promise;
			},
			create:function(options){
				var deffered = $q.defer();
				$.post(ChargePath + 'gift',options,function(result){
					deffered.resolve(result);
				});
				return deffered.promise;
			},
			getList:function() {
				var deffered = $q.defer();
				$.get(ChargePath + 'gift',function(result){
					deffered.resolve(result);
				});
				return deffered.promise;
			},
			get:function(objectId) {
				var deffered = $q.defer();
				$.get(ChargePath + 'gift/'+objectId,function(result){
					result.game = result.game.objectId;
					result.desc = result.desc.replace(/<br\/>/g,'\n');
					deffered.resolve(result);
				});
				return deffered.promise;
			},
			remove:function(objectId) {
				var deffered = $q.defer();
				$.ajax({
					url: ChargePath + 'gift/' + objectId,
					type: 'DELETE',
					success: function(result) {
						deffered.resolve(result);
					}
				});
				return deffered.promise;
			}
		}
	}]);