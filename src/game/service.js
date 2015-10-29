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

app.service('CreamService',['$q',
	function($q){
		return {
			list:function(options){
				var deffered = $q.defer();
				$.get(ManagePath+'cream/list',options,function(data){
					deffered.resolve(data);
				});
				return deffered.promise;
			},
			update:function(cream){
				var deffered = $q.defer();
				$.post(ManagePath+'cream/update',cream,function(data){
					deffered.resolve(data);
				});
				return deffered.promise;	
			},
			delete:function(id){
				var deffered = $q.defer();
				$.get(ManagePath+'cream/delete/'+id,function(data){
					deffered.resolve(data);
				});
				return deffered.promise;
			},
			info:function(id){
				var deffered = $q.defer();
				$.get(ManagePath+'cream/info/'+id,function(data){
					deffered.resolve(data);
				});
				return deffered.promise;	
			}
		}
	}]);

app.service('VideoService',['$q',
	function($q){
		return {
			list:function(options){
				var deffered = $q.defer();
				$.get(ManagePath+'video/list',options,function(data){
					deffered.resolve(data);
				});
				return deffered.promise;
			},
			update:function(video){
				var deffered = $q.defer();
				$.post(ManagePath+'video/update',video,function(data){
					deffered.resolve(data);
				});
				return deffered.promise;	
			},
			delete:function(id){
				var deffered = $q.defer();
				$.get(ManagePath+'video/delete/'+id,function(data){
					deffered.resolve(data);
				});
				return deffered.promise;
			}
		}
	}]);

app.service('ImageService',['$q',
	function($q){
		return {
			list:function(options){
				var deffered = $q.defer();
				$.get(ManagePath+'image/list',options,function(data){
					deffered.resolve(data);
				});
				return deffered.promise;
			},
			update:function(image){
				var deffered = $q.defer();
				$.post(ManagePath+'image/update',image,function(data){
					deffered.resolve(data);
				});
				return deffered.promise;	
			},
			delete:function(id){
				var deffered = $q.defer();
				$.get(ManagePath+'image/delete/'+id,function(data){
					deffered.resolve(data);
				});
				return deffered.promise;
			}
		}
	}]);

app.service('NoticeService',['$q',
	function($q){
		return {
			list:function(options){
				var deffered = $q.defer();
				$.get(ManagePath+'notice/list',options,function(data){
					deffered.resolve(data);
				});
				return deffered.promise;
			},
			update:function(notice){
				var deffered = $q.defer();
				$.post(ManagePath+'notice/update',notice,function(data){
					deffered.resolve(data);
				});
				return deffered.promise;	
			},
			delete:function(id){
				var deffered = $q.defer();
				$.get(ManagePath+'notice/delete/'+id,function(data){
					deffered.resolve(data);
				});
				return deffered.promise;
			},
			info:function(id){
				var deffered = $q.defer();
				$.get(ManagePath+'notice/info/'+id,function(data){
					deffered.resolve(data);
				});
				return deffered.promise;	
			}
		}
	}]);

app.service('GamerecService',['$q',
	function($q){
		return {
			list:function(options){
				var deffered = $q.defer();
				$.get(ManagePath+'gamerec/list',options,function(data){
					deffered.resolve(data);
				});
				return deffered.promise;
			},
			update:function(gamerec){
				var deffered = $q.defer();
				$.post(ManagePath+'gamerec/update',gamerec,function(data){
					deffered.resolve(data);
				});
				return deffered.promise;	
			},
			delete:function(id){
				var deffered = $q.defer();
				$.get(ManagePath+'gamerec/delete/'+id,function(data){
					deffered.resolve(data);
				});
				return deffered.promise;
			},
			info:function(id){
				var deffered = $q.defer();
				$.get(ManagePath+'gamerec/info/'+id,function(data){
					deffered.resolve(data);
				});
				return deffered.promise;	
			}
		}
	}]);

app.service('GameerrorService',['$q',
	function($q){
		return {
			list:function(options){
				var deffered = $q.defer();
				$.get(ManagePath+'gameerror/list',options,function(data){
					deffered.resolve(data);
				});
				return deffered.promise;
			},
			update:function(gameerror){
				var deffered = $q.defer();
				$.post(ManagePath+'gameerror/update',gameerror,function(data){
					deffered.resolve(data);
				});
				return deffered.promise;	
			},
			delete:function(id){
				var deffered = $q.defer();
				$.get(ManagePath+'gameerror/delete/'+id,function(data){
					deffered.resolve(data);
				});
				return deffered.promise;
			},
			info:function(id){
				var deffered = $q.defer();
				$.get(ManagePath+'gameerror/info/'+id,function(data){
					deffered.resolve(data);
				});
				return deffered.promise;	
			}
		}
	}]);