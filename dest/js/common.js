/**
 * angular 启动文件
 * 
 */

var app = angular.module('u77manage',['ui.router','ui.bootstrap','ngTouch','infinite-scroll','ngFileUpload']);
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
			.state('base.gameNew',{
				url:'/game-new',
				views:{
					'content':{
						templateUrl:'game/game-edit.html',
						controller:'GameNewCtrl'
					}
				}
			})
			.state('base.tag',{
				url:'/tag',
				views:{
					'content':{
						templateUrl:'game/tag.html',
						controller:'TagCtrl'
					}
				}
			})
			.state('base.gameCream',{
				url:'/cream/:gameid',
				views:{
					'content':{
						templateUrl:'game/cream.html',
						controller:'CreamCtrl',
					}
				}
			})
			.state('base.cream',{
				url:'/cream',
				views:{
					'content':{
						templateUrl:'game/cream.html',
						controller:'CreamCtrl',
					}
				}
			})
			.state('base.creamEdit',{
				url:'/cream/edit/:id',
				views:{
					'content':{
						templateUrl:'game/cream-edit.html',
						controller:'CreamEditCtrl'
					}
				}
			})
			.state('base.video',{
				url:'/video',
				views:{
					'content':{
						templateUrl:'game/video.html',
						controller:'VideoCtrl'
					}
				}
			})
			.state('base.image',{
				url:'/image',
				views:{
					'content':{
						templateUrl:'game/image.html',
						controller:'ImageCtrl'
					}
				}
			})
			.state('base.gameNotice',{
				url:'/notice/:id',
				views:{
					'content':{
						templateUrl:'game/notice.html',
						controller:'NoticeCtrl'
					}
				}
			})
			.state('base.notice',{
				url:'/notice',
				views:{
					'content':{
						templateUrl:'game/notice.html',
						controller:'NoticeCtrl'
					}
				}
			})
			.state('base.noticeEdit',{
				url:'/notice/edit/:id',
				views:{
					'content':{
						templateUrl:'game/notice-edit.html',
						controller:'NoticeEditCtrl'
					}
				}
			})
			.state('base.recExamine',{
				url:'/game/rec',
				views:{
					'content':{
						templateUrl:'game/rec-examine.html',
						controller:'RecExamineCtrl'
					}
				}
			})
			.state('base.errorReport',{
				url:'/error-report',
				views:{
					'content':{
						templateUrl:'game/error-report.html',
						controller:'ErrorReportCtrl'
					}
				}
			})
			.state('base.comment',{
				url:'/comment',
				views:{
					'content':{
						templateUrl:'comment/index.html',
						controller:'CommentCtrl'
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
		templateUrl:'/base/pager.html',
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

/**  
 * Two-way data binding for contenteditable elements with ng-model.  
 * @example  
 *   <p contenteditable="true" ng-model="text"></p>  
 */ 
app.directive('contenteditable', function() {  
  return {  
    require: '?ngModel',  
    link: function(scope, element, attrs, ctrl) {  
   
      // Do nothing if this is not bound to a model  
      if (!ctrl) { return; }  
   
      // Checks for updates (input or pressing ENTER)  
      // view -> model  
      element.bind('input enterKey', function() {  
        var rerender = false;  
        var html = element.html();  
   
        if (attrs.noLineBreaks) {  
          html = html.replace(/<div>/g, '').replace(/<br>/g, '').replace(/<\/div>/g, '');  
          rerender = true;  
        }  
   
        scope.$apply(function() {  
          ctrl.$setViewValue(html);  
          if(rerender) {  
            ctrl.$render();  
          }  
        });  
      });  
   
      element.keyup(function(e){  
        if(e.keyCode === 13){  
          element.trigger('enterKey');  
        }  
      });  
   
      // model -> view  
      ctrl.$render = function() {  
        element.html(ctrl.$viewValue);  
      };  
   
      // load init value from DOM  
      ctrl.$render();  
    }  
  };  
}); 
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
app.controller('CommentCtrl',['$scope','$rootScope','$stateParams',
	function($scope,$rootScope,$stateParams){
		console.log($stateParams);
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

app.controller('GameEditCtrl',['$scope','$rootScope','GameService','$stateParams','UploadService','$state','$filter',
	function($scope,$rootScope,GameService,$stateParams,UploadService,$state,$filter){
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
			// $scope.game.update_at = moment($scope.game.update_at,"YYYY/MM/DD H:mm:SS").unix();
			$scope.game.create_at = $filter('toUnix')($scope.game.create_time);
			console.log($scope.game.update_at);
			delete $scope.game.create_time;
			$.post(ManagePath+'game/update',$scope.game,function(data){
				if(data == $scope.game.id){
					$state.go('base.gameList');	
				}
				
			});
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

app.controller('CreamCtrl',['$scope','$rootScope','CreamService',
	function($scope,$rootScope,CreamService){
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
			cream.status = status;
			CreamService.update(cream);
		}

		$scope.delete = function(cream){
			CreamService.delete(cream.id);
			cream.hide = true;
		}

	}]);

app.controller('CreamEditCtrl',['$scope','$rootScope','$stateParams','CreamService','$filter',
	function($scope,$rootScope,$stateParams,CreamService,$filter){
		CreamService.info($stateParams.id).then(function(info){
			console.log(info);
			$scope.cream = info;
			$scope.cream.create_time = $filter('dateTime')($scope.cream.create_at);
		});

		$scope.submit = function(){
			$scope.cream.create_at = $filter('toUnix')($scope.cream.create_time);
			CreamService.update($scope.cream);
		}
	}]);

app.controller('VideoCtrl',['$scope','$rootScope','VideoService',
	function($scope,$rootScope,VideoService){
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
			VideoService.update(video);
		}

		$scope.delete = function(video){
			VideoService.delete(video.id);
			video.hide = true;
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

		VideoService.list().then(function(data){
			$scope.list = data;
			console.log(data);
		});

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

		$scope.submit = function(image){
			console.log(image);
			ImageService.update(image);
		}

		$scope.delete = function(image){
			ImageService.delete(image.id);
			image.hide = true;
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

app.controller('NoticeCtrl',['$scope','$rootScope','NoticeService','$stateParams',
	function($scope,$rootScope,NoticeService,$stateParams){
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
		}

		$scope.delete = function(cream){
			NoticeService.delete(cream.id);
			cream.hide = true;
		}

	}]);

app.controller('NoticeEditCtrl',['$scope','$rootScope','$filter','NoticeService','$stateParams',
	function($scope,$rootScope,$filter,NoticeService,$stateParams){
		NoticeService.info($stateParams.id).then(function(info){
			console.log(info);
			$scope.notice = info;
			$scope.notice.create_time = $filter('dateTime')($scope.notice.create_at);
		});

		$scope.submit = function(){
			$scope.notice.create_at = $filter('toUnix')($scope.notice.create_time);
			NoticeService.update($scope.notice);
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
			GameerrorService.delete(gamerec.id);
			gamerec.hide = true;
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
		templateUrl:'/game/tags-list.html',
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