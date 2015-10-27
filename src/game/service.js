app.service('GameService',['$q',
	function($q){
		return {
			promise:function(id){
				var deffered = $q.defer();
				$.get(ManagePath+'game/info/'+id,function(data){
					deffered.resolve(data);
				});
				return deffered.promise;
			},
			// type 类型 1-web 2-pc 3-手机 4-收费 5-ios 6-android 7-I&A 8原创游戏
			// status 状态 99已发布 1未发布 0未审核 3退稿
			// search_type key-关键词 id-id
			list:function(options){
				var deffered = $q.defer();
				$.get(ManagePath+'game/list',options,function(data){
					deffered.resolve(data);
				});
				return deffered.promise;
			}
		}
	}]);

app.service('TagService',['$q',
	function($q){
		return {
			promise:function(id){
				var deffered = $q.defer();
				$.get(ManagePath+'tag/info'+id,function(data){
					deffered.resolve(data);
				});
				return deffered.promise;
			},
			list:function(options){
				var deffered = $q.defer();
				$.get(ManagePath+'tag/list',options,function(data){
					deffered.resolve(data);
				});
				return deffered.promise;
			},
			all:function(){
				var deffered = $q.defer();
				$.get(ManagePath+'tag/all',function(data){
					deffered.resolve(data);
				});
				return deffered.promise;
			},
			update:function(tag){
				var deffered = $q.defer();
				$.post(ManagePath+'tag/update',tag,function(data){
					deffered.resolve(data);
				});
				return deffered.promise;
			},
			delete_tag:function(tag){
				var deffered = $q.defer();
				$.get(ManagePath+'tag/delete/'+tag.id,function(data){
					deffered.resolve(data);
				});
				return deffered.promise;
			}
		}
	}]);