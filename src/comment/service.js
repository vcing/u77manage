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