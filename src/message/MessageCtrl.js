app.controller('RealtimeMessageCtrl',['$q','$scope','$rootScope','RealtimeService',
	function($q,$scope,$rootScope,RealtimeService){
		$scope.openList = true;
		$scope.openDialog = function(user){
			user.msgCount = 0;
			RealtimeService.getDialog(user).then(function(msgs){
				$scope.currentDialogUser = user;
				$scope.currentDialogUser.messages = msgs;
				$scope.openList = false;
			});
		}

		// 发送消息
		$scope.sendMessage = function(){
			if(!$scope.currentDialogUser)alert('请先选择用户.');
			if($scope.msgText.trim() == '' || !$scope.msgText)alert('请输入内容');
			var data = {
				convId:sysConvId,
				from:$rootScope.user.userId,
				to:$scope.currentDialogUser.userId,
				type:400,
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
				}else{
					alert(result.msg);
				}
				$scope.msgText = "";
			});
		}

		// 标记处理
		$scope.mark = function() {
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