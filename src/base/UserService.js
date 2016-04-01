app.service('UserService',['$q',
	function($q){
		return {
			profile:function() {
				var deffered = $q.defer();
				$.get('/api/user/profile',function(data){
					deffered.resolve(data);
				});
				return deffered.promise;
			},
			logout:function() {
				var deffered = $q.defer();
				$.get('/api/user/logout',function(data){
					deffered.resolve(data);
				});
				return deffered.promise;
			}
		}
	}]);