app.service('RealtimeService',['$q','$uibModal',
	function($q,$uibModal){
		return {
			// 初始化实时通讯
			init:function() {
				var deffered = $q.defer();
				$.get('/api/user/realtime',function(data){
					if(data.appId){
						data.clientId = window.user.userId + '__' + window.user.nickname + '__' + window.user.avatar;
						data.clientId = encodeURIComponent(data.clientId);
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
				console.log(user);
				var deffered = $q.defer();
				$.get(MessagePath + 'message',{
					clientId:user.clientId,
					convId:window.sysConvId,
					limit:100
				},function(results){
					results = JSON.parse(results);
					_.map(results,function(msg,index){
						var _data = JSON.parse(msg.data);
						results[index].msg = {
							text:_data._lctext,
							type:_data._lctype,
							attrs:_data._lcattrs
						}
					});
					results = results.reverse();
					deffered.resolve(results);
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
			}
		}
	}]);