app.controller('MessageCtrl',['$scope','$rootScope','RealtimeService',
	function($scope,$rootScope,RealtimeService){
		$scope.openList = true;
		$scope.openDialog = function(user){
			RealtimeService.getDialog(user).then(function(msgs){
				$scope.currentDialogUser = user;
				$scope.currentDialogUser.messages = msgs;
				$scope.openList = false;
			});
		}

		var convId = sysConvId;
		$scope.sendMessage = function(){
			if(!$scope.currentDialogUser)alert('请先选择用户.');
			if($scope.msgText.trim() == '' || !$scope.msgText)alert('请输入内容');
			RealtimeService.sendMessage({
				convId:convId,
				from:$rootScope.user.clientId,
				to:$scope.currentDialogUser.clientId,
				type:1,
				msg:$scope.msgText
			}).then(function(result){
				if(result.status == 100){
					return RealtimeService.getDialog($scope.currentDialogUser);
				}else{
					alert(result.msg);
					var deffered = $q.defer();
					deffered.reject();
					return deffered.promise;
				}
			}).then(function(msgs){
				if(!msgs)return;
				$scope.currentDialogUser.messages = msgs;
			})
		}

		$scope.mark = function() {
			var _result;
			RealtimeService.markDialog($scope.currentDialogUser)
			.then(function(result){
				_result = result;
				return RealtimeService.deleteUserMessages($scope.currentDialogUser.clientId,sysMessageConvId);
			})
			.then(function(result){
				if(result.status == 100){
					// $rootScope.recentConv.send(_result,function() {
					// 	$rootScope.asyncSysLogs();
					// });
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
			key:1,
			name:'游戏举报'
		},{
			key:2,
			name:'评论举报'
		}];

		$scope.submit = function() {
			var result = {
				from:currentDialogUser.clientId,
				dealer:user.clientId,
				type:$scope.type,
				result:$scope.result				
			};
			$uibModalInstance.close(result);
		}

		$scope.cancel = function() {
			$uibModalInstance.dismiss('cancel');
		}
	}]);