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
			var promises = [deffered.promise,_deffered.promise];
			return $q.all(promises);
		})
		// 加入房间
		.then(function(convs){
			$rootScope.sysConv = convs[0];
			$rootScope.recentConv = convs[1];
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

			return $q.all([deffered.promise,_deffered.promise]);
		})
		// 同步消息
		.then(asyncSysLogs)
		// 消息系统事件初始化注册
		.then(function(){
			$rootScope.sysConv.receive(function(msg){
				receiveMessage(msg);
				RealtimeService.getUserInfos($rootScope.sysConvLogs);
			});
			$rootScope.recentConv.receive(function(msg){
				asyncSysLogs();
			});
		},function(err){
			alert('实时通讯,消息系统出错,请刷新重试');
		});

		// 同步所有系统消息和最近联系人消息
		function asyncSysLogs() {
			var deffered = $q.defer();
			$rootScope.sysConv.log({limit:100},function(msgs){
				$rootScope.$apply(function(){
					$rootScope.sysConvLogs = [];
				});
				_.map(msgs,function(msg){
					receiveMessage(msg);
					deffered.resolve();	
				});
				// 获取用户信息
				RealtimeService.getUserInfos($rootScope.sysConvLogs);
			});

			var _deffered = $q.defer();
			$rootScope.recentConv.log({limit:20},function(msgs){
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
					user.msgCount++;
					var _user = _.clone(user);
					_msgs.splice(index,1);
					_msgs.unshift(user);
					_isFirst = false;
				}
			});

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
app.controller('MessageCtrl',['$scope','$rootScope','$uibModalInstance','options','RealtimeService','$filter',
	function($scope,$rootScope,$uibModalInstance,options,RealtimeService,$filter){
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
			label:'评论删除通知',
			id:107
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
				userid = $scope.options.content.content.sender;
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
					content += "你投稿的游戏 <a href='"+($scope.options.status ? "/game/"+$scope.options.content.id : "javascript:;")+"' target='_blank'>";
					content += $scope.options.content.title+"</a>";
					content += " 审核"+($scope.options.status ? "通过" : "未通过");
					content += $scope.options.status ? '' : " 原因:"+$scope.options.cause;
					content += '<a class="fr" href="/account/publish?game">查看投稿</a>';
					_options.type = !$scope.options.status ? $scope.options.type+ 1 : $scope.options.type;
					break;
				case 103:
					content += "你投稿的游戏精华 <a href='"+($scope.options.status ? "/post/"+$scope.options.content.id : "javascript:;")+"' target='_blank'>";
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
					_options.type = !$scope.options.status ? $scope.options.type+ 1 : $scope.options.type;
					break;
				case 107:
					content += "您发表的"+($scope.options.content.content.type == 1 ? '游戏评论' : $scope.options.content.content.type == 2 ? '文章评论' : '精华评论');
					content += $scope.options.content.content.content.content;
					content += "被管理员删除";
			}

			_options.text = content;
			
			
			var data = {
				convId:sysConvId,
				type:_options.type,
				text:_options.text,
				to:"",
				from:$rootScope.user.userId
			}
			RealtimeService.getClientId(912288)
			.then(function(userId){
				data.to = userId;
				return RealtimeService.sendMessage(data);
			}).then(function(){
				$uibModalInstance.close($scope.options);
			});
		}

		$scope.submitWithoutMessage = function(){
			$uibModalInstance.close($scope.options);
		}

	}]);