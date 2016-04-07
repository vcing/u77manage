app.service('RealtimeService',['$q','$uibModal',
	function($q,$uibModal){
		var userInfos = {};
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
							userInfos[user.userid] = user;
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
			getDialog:function(user) {
				var deffered = $q.defer();
				$.get(MessagePath + 'message',{
					clientId:user.userId,
					convId:window.sysConvId,
					limit:100
				},function(results){
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
			}
		}
	}]);