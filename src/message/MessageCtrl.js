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
			name:'精华举报'
		},{
			key:202,
			name:'评论举报'
		},{
			key:203,
			name:'视频举报'
		},{
			key:204,
			name:'发现举报'
		},{
			key:205,
			name:'推荐举报'
		},{
			key:206,
			name:'游戏反馈'
		},{
			key:400,
			name:'普通对话'
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

		$scope.cancel = function() {
			$uibModalInstance.dismiss('cancel');
		}
	}]);