app.service('UserService',['$http','$q',
	function($http,$q){
		return {
			promise:function(id){
				var deffered = $q.defer();
				$http.get(BasePath+'api/get_user?id='+id).success(function(data){
					deffered.resolve(data);
				});
				return deffered.promise;
			}
		}
	}]);

app.service('CommentService',['$http','$q',
	function($http,$q){
		return {
			promise:function(id){
				var deffered = $q.defer();
				$http.get(BasePath+'api/get_comment?id='+id).success(function(data){
					deffered.resolve(data);
				});
				return deffered.promise;
			}
		}
	}]);

app.service('PostService',['$http','$q',
	function($http,$q){
		return {
			promise:function(id){
				var deffered = $q.defer();
				$http.get(BasePath+'api/get_comment?id='+id).success(function(data){
					deffered.resolve(data);
				});
				return deffered.promise;
			}
		}
	}]);

app.service('VideoService',['$http','$q',
	function($http,$q){
		return {
			promise:function(id){
				var deffered = $q.defer();
				$http.get(BasePath+'api/get_video?id='+id).success(function(data){
					deffered.resolve(data);
				});
				return deffered.promise;
			}
		}
	}]);

app.service('GameService',['$http','$q',
	function($http,$q){
		return {
			promise:function(id){
				var deffered = $q.defer();
				$http.get(BasePath+'api/get_game?id='+id).success(function(data){
					deffered.resolve(data);
				});
				return deffered.promise;
			}
		}
	}]);