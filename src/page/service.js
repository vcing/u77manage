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