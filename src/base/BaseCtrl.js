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
app.controller('MessageCtrl',['$scope','$rootScope','$uibModalInstance','options','MessageService',
	function($scope,$rootScope,$uibModalInstance,options,MessageService){
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
				userid = $scope.options.content.userid;
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
			}

			var _options = {
				istype:1,
				mtype:$scope.options.type,
				userid:userid,
				users:'',
				content:content
			}
			console.log(_options);
			MessageService.send(_options).then(function(data){
				$uibModalInstance.close($scope.options);
			});
		}

	}]);