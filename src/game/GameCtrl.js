app.controller('SingleGameCtrl',['$scope','$rootScope','MessageService',
	function($scope,$rootScope,MessageService){
		$scope.sendBack = function(game){
			var options = {
				content:game,
				type:105,
				status:false
			}
			MessageService.create(options).then(function(data){
				if(data.status === false){
					game.status = 3;
					delete game.content.$$hashKey;
					delete game.$$hashKey;
					$.post(ManagePath+'game/update',game,function(data){
					});
				}
			});
		}
	}]);

app.controller('ListGameCtrl',['$scope','$rootScope','GameService',
	function($scope,$rootScope,GameService){
		$scope.options.search_type = 'id';
		$scope.change_type = function(type){
			$scope.options.type = type;
			query();
		}

		$scope.change_status = function(status){
			$scope.options.status = status;
			query();
		}

		$scope.change_search_type = function(type){
			$scope.options.search_type = type;
		}

		$scope.game_search = function(e){
			var keycode = window.event?e.keyCode:e.which;
			if(keycode == 13){
				query();
			}
		}

		function query(page){
			if(page){
				var _options = _.clone($scope.options);
				_options.page = page;
				GameService.list(_options).then(function(data){
					$scope.gameList = data;
				});	
			}else{
				GameService.list($scope.options).then(function(data){
					$scope.gameList = data;
				});	
			}
		}

		$scope.pageChange = query;

	}]);

app.controller('GameListCtrl',['$scope','$rootScope','GameService',
	function($scope,$rootScope,GameService){
		$scope.options = {};
		GameService.list().then(function(data){
			$scope.gameList = data;
		});

		$scope.getTop10 = function(){
			GameService.top10().then(function(data){
				$scope.gameList = data;
			});
		}
	}]);

app.controller('GameNewCtrl',['$scope','$rootScope','GameService','UploadService','$state','DiscoverServer',
	function($scope,$rootScope,GameService,UploadService,$state,DiscoverServer){
		$scope.game_types = [
			{id:1,label:'web'},
			{id:2,label:'PC'},
			{id:3,label:'手机'},
			{id:4,label:'收费'},
			{id:5,label:'iOS'},
			{id:6,label:'Android'},
			{id:7,label:'I & A'},
			{id:8,label:'原创游戏'}
		];

		$scope.url_types = [
			{id:1,label:'swf'},
			{id:2,label:'unity3D'},
			{id:3,label:'iframe'},
			{id:4,label:'站外链接'}
		];

		$scope.game = {};

		if($state.params.discoverId){
			DiscoverServer.discoverGet($state.params.discoverId).then(function(result){
				console.log(result[0]);
				var _game = result[0];
				$scope.game = {
					title:_game.title,
					image:_game.img[0],
					userid:_game.userId,
					content:{
						content:_game.oneWord || _game.description || _game.game.description,
						url:_game.game.originUrl,
					}
				}
				switch(_game.game.type){
					case 1:
						$scope.game_type = $scope.game_types[0];
						break;
					case 2:
						$scope.game_type = $scope.game_types[1];
						$scope.game.content.down1 = _game.game.originUrl;
						break;
					case 3:
						$scope.game_type = $scope.game_types[5];
						$scope.game.content.down1 = _game.game.originUrl;
						break;
					case 4:
						$scope.game_type = $scope.game_types[4];
						$scope.game.content.down2 = _game.game.originUrl;
						break;
				}
			});
		}

		UploadService.file().then(function(fn){
			$scope.uploadFile = function($file){
				fn($file,function(resp){
					if(resp.status == 200 && resp.statusText == 'OK'){
						$scope.game.content.upyun_url = resp.data.url;
					}else{
						alert('上传失败,请重试.');
					}
					$scope.filePercentage = null;
				},function(evt){
					$scope.filePercentage = evt.percentage;
				});
			}
		});

		UploadService.image().then(function(fn){
			$scope.uploadImage = function($file){
				fn($file,function(resp){
					if(resp.status == 200 && resp.statusText == 'OK'){
						$scope.game.image = resp.data.url;
					}else{
						alert('上传失败,请重试.');
					}
					$scope.imagePercentage = null;
				},function(evt){
					$scope.imagePercentage = evt.percentage;
				});
			}
		});		

		$scope.$watch('game_type',function(){
			if($scope.game_type)$scope.game.type = $scope.game_type.id;
		});

		$scope.$watch('url_type',function(){
			if($scope.url_type)$scope.game.content.url_type = $scope.url_type.id;
		});

		$scope.submit = function(){
			$scope.game.update_at = moment($scope.game.update_at,"YYYY/MM/DD H:mm:SS").unix();
			$.post(ManagePath+'/game/create',$scope.game,function(data){
				$state.go('base.gameEdit',{id:data});
			});
		}
	}]);

app.controller('GameEditCtrl',['$scope','$rootScope','GameService','$stateParams','UploadService','$state','$filter','MessageService',
	function($scope,$rootScope,GameService,$stateParams,UploadService,$state,$filter,MessageService){
		$scope.game_types = [
			{id:1,label:'web'},
			{id:2,label:'PC'},
			{id:3,label:'手机'},
			{id:4,label:'收费'},
			{id:5,label:'iOS'},
			{id:6,label:'Android'},
			{id:7,label:'I & A'},
			{id:8,label:'原创游戏'}
		];

		$scope.url_types = [
			{id:1,label:'swf'},
			{id:2,label:'unity3D'},
			{id:3,label:'iframe'},
			{id:4,label:'站外链接'}
		];

		if(!$stateParams.id || $stateParams == 0){
			// new game
			
		}else{
			// edit game
			GameService.promise($stateParams.id).then(function(data){
				console.log(data);
				// data.update_at = moment.unix(parseInt(data.update_at)).format("YYYY/MM/DD H:mm:SS");
				$scope.game = data;
				$scope.game_type = $scope.game_types[$scope.game.type-1];
				$scope.url_type = $scope.url_types[$scope.game.content.url_type-1];
				$scope.game.create_time = $filter('dateTime')($scope.game.create_at);
			});
		}

		UploadService.file().then(function(fn){
			$scope.uploadFile = function($file){
				fn($file,function(resp){
					if(resp.status == 200 && resp.statusText == 'OK'){
						$scope.game.content.upyun_url = resp.data.url;
					}else{
						alert('上传失败,请重试.');
					}
					$scope.filePercentage = null;
				},function(evt){
					$scope.filePercentage = evt.percentage;
				});
			}
		});

		UploadService.image().then(function(fn){
			$scope.uploadImage = function($file){
				fn($file,function(resp){
					if(resp.status == 200 && resp.statusText == 'OK'){
						$scope.game.image = resp.data.url;
					}else{
						alert('上传失败,请重试.');
					}
					$scope.imagePercentage = null;
				},function(evt){
					$scope.imagePercentage = evt.percentage;
				});
			}
		});		

		$scope.$watch('game_type',function(){
			if($scope.game_type)$scope.game.type = $scope.game_type.id;
		});

		$scope.$watch('url_type',function(){
			if($scope.url_type)$scope.game.content.url_type = $scope.url_type.id;
		});

		$scope.submit = function(){
			if($scope.game.status == 99){
				pass($scope.game,function(){
					$scope.game.create_at = $filter('toUnix')($scope.game.create_time);
					delete $scope.game.create_time;
					$.post(ManagePath+'game/update',$scope.game,function(data){
						if(data == $scope.game.id){
							$state.go('base.gameList');	
						}
					});
				});
			}else{
				$scope.game.create_at = $filter('toUnix')($scope.game.create_time);
				delete $scope.game.create_time;
				$.post(ManagePath+'game/update',$scope.game,function(data){
					if(data == $scope.game.id){
						$state.go('base.gameList');	
					}
				});
			}
		}

		var pass = function(game,fn){
			var options = {
				content:game,
				type:105,
				status:true
			}
			MessageService.create(options).then(function(data){
				if(data.status === true){
					fn();
				}
			});
		}

		$scope.sendBack = function(){
			var options = {
				content:$scope.game,
				type:105,
				status:false
			}
			MessageService.create(options).then(function(data){
				if(data.status === false){
					$scope.game.status = 3;
					$scope.game.create_at = $filter('toUnix')($scope.game.create_time);
					delete $scope.game.create_time;
					delete $scope.game.content.$$hashKey;
					delete $scope.game.$$hashKey;
					$.post(ManagePath+'game/update',$scope.game,function(data){
					});
				}
			});
		}
		$scope.deleteGame = function() {
			if(confirm('确认删除该游戏吗？')){
				GameService.delete($scope.game.id).then(function(){
					alert('删除成功');
					$state.go('base.gameList');
				});
			}
		}
	}]);

app.controller('TagCtrl',['$scope','$rootScope','TagService',
	function($scope,$rootScope,TagService){
		$scope.options = {};
		$scope.options.search_type = 'key';

		TagService.list().then(function(data){
			$scope.tagList = data;
		});

		$scope.change_type = function(id){
			$scope.options.type = id;
			query();
		}

		$scope.change_search_type = function(type){
			$scope.options.search_type = type;
		}

		function query(page){
			if(page){
				var _options = _.clone($scope.options);
				_options.page = page;
				TagService.list(_options).then(function(data){
					$scope.tagList = data;
				});	
			}else{
				TagService.list($scope.options).then(function(data){
					$scope.tagList = data;
				});	
			}
		}

		$scope.types = [{
			id:1,
			label:'语言版本',
		},{
			id:2,
			label:'游戏类型',
		},{
			id:3,
			label:'玩法操作',
		},{
			id:4,
			label:'体验感受',
		},{
			id:5,
			label:'题材风格',
		},{
			id:0,
			label:'其他',
		}];

		$scope.pageChange = query;

		$scope.tag_search = function(e){
			var keycode = window.event?e.keyCode:e.which;
			if(keycode == 13){
				query();
			}
		}

		$scope.submit = function(tag){
			TagService.update(tag);
			tag.hide = true;
		}

		$scope.delete_tag = function(tag){
			TagService.delete_tag(tag);
		}
	}]);

app.controller('CreamCtrl',['$scope','$rootScope','CreamService','MessageService',
	function($scope,$rootScope,CreamService,MessageService){
		$scope.options = {};
		$scope.options.search_type = 'id';

		$scope.change_type = function(id){
			$scope.options.type = id;
			query();
		}

		$scope.change_search_type = function(type){
			$scope.options.search_type = type;
		}

		$scope.change_status = function(status){
			$scope.options.status = status;
			query();
		}

		$scope.search = function(e){
			var keycode = window.event?e.keyCode:e.which;
			if(keycode == 13){
				query();
			}
		}

		function query(page){
			var _options = _.clone($scope.options);
			if(page)_options.page = page;
			if(_options['keywords'])_options[_options['search_type']] = _options['keywords'];
			delete _options.search_type;
			delete _options.keywords;
			CreamService.list(_options).then(function(data){
				$scope.list = data;
			});
		}

		CreamService.list().then(function(data){
			$scope.list = data;
			console.log(data);
		});

		$scope.pageChange = query;

		$scope.change_cream_status = function(cream,status){
			if(status == 3){
				sendBack(cream);
			}else if(status == 99){
				pass(cream);
			}else{
				cream.status = status;
				CreamService.update(cream);	
			}
			
		}

		$scope.delete = function(cream){
			CreamService.delete(cream.id);
			cream.hide = true;
		}

		var pass = function(cream){
			var options = {
				content:cream,
				type:106,
				status:true
			}
			MessageService.create(options).then(function(data){
				if(data.status === true){
					cream.status = 99;
					CreamService.update(cream);
				}
			});
		}

		var sendBack = function(cream){
			var options = {
				content:cream,
				type:106,
				status:false
			}
			MessageService.create(options).then(function(data){
				if(data.status === false){
					cream.status = 3;
					CreamService.update(cream);
				}
			});
		}

	}]);

app.controller('CreamEditCtrl',['$scope','$rootScope','$state','$stateParams','CreamService','$filter','MessageService',
	function($scope,$rootScope,$state,$stateParams,CreamService,$filter,MessageService){
		CreamService.info($stateParams.id).then(function(info){
			console.log(info);
			$scope.cream = info;
			$scope.cream.create_time = $filter('dateTime')($scope.cream.create_at);
		});

		$scope.submit = function(){
			if($scope.cream.status == 99){
				pass($scope.cream);
			}else{
				sendBack($scope.cream);
			}
		}


		var pass = function(cream){
			var options = {
				content:cream,
				type:106,
				status:true
			}
			MessageService.create(options).then(function(data){
				if(data.status === true){
					$scope.cream.create_at = $filter('toUnix')($scope.cream.create_time);
					CreamService.update($scope.cream).then(function(){
						$state.go('base.cream');
					});
				}
			});
		}

		var sendBack = function(cream){
			var options = {
				content:cream,
				type:106,
				status:false
			}
			MessageService.create(options).then(function(data){
				if(data.status === false){
					$scope.cream.create_at = $filter('toUnix')($scope.cream.create_time);
					CreamService.update($scope.cream).then(function(){
						$state.go('base.cream');
					});
				}
			});
		}
	}]);

app.controller('VideoCtrl',['$scope','$rootScope','VideoService','MessageService',
	function($scope,$rootScope,VideoService,MessageService){
		$scope.options = {};
		$scope.options.search_type = 'id';

		$scope.change_type = function(id){
			$scope.options.type = id;
			query();
		}

		$scope.change_search_type = function(type){
			$scope.options.search_type = type;
		}

		$scope.change_status = function(status){
			$scope.options.status = status;
			query();
		}

		$scope.search = function(e){
			var keycode = window.event?e.keyCode:e.which;
			if(keycode == 13){
				query();
			}
		}

		$scope.submit = function(video){
			if(video.status == 1){
				pass(video,function(){
					VideoService.update(video);		
				});
			}else{
				VideoService.update(video);	
			}
			
		}

		$scope.delete = function(video){
			_delete(video,function(){
				VideoService.delete(video.id);
				video.hide = true;
			});
		}

		function query(page){
			var _options = _.clone($scope.options);
			if(page)_options.page = page;
			if(_options['keywords'])_options[_options['search_type']] = _options['keywords'];
			delete _options.search_type;
			delete _options.keywords;
			VideoService.list(_options).then(function(data){
				$scope.list = data;
			});
		}

		var pass = function(video,fn){
			var options = {
				content:video,
				type:107,
				status:true
			}
			MessageService.create(options).then(function(data){
				if(data.status === true){
					fn();
				}
			});
		}

		var _delete = function(video,fn){
			var options = {
				content:video,
				type:107,
				status:false
			}
			MessageService.create(options).then(function(data){
				if(data.status === false){
					fn();
				}
			});
		}

		VideoService.list().then(function(data){
			$scope.list = format_url(data);
		});

		function format_url(data){
			_.forEach(data.data,function(video){
				if(video.v_type == 1){
					if(video.origin_url.indexOf('acfun.tv') == -1){
						video.origin_url = "http://www.acfun.tv"+video.origin_url;
					}
				}else if(video.v_type == 2){
					if(video.origin_url.indexOf('bilibili.com') == -1){
						video.origin_url = "http://www.bilibili.com"+video.origin_url;
					}
				}else if(video.v_type == 3){
					if(video.origin_url.indexOf('youku.com') == -1){
						video.origin_url = "http://www.youku.com"+video.origin_url;
					}
				}
			});
			return data;
		}

		$scope.pageChange = query;
	}]);

app.controller('ImageCtrl',['$scope','$rootScope','ImageService',
	function($scope,$rootScope,ImageService){
		$scope.options = {};
		$scope.options.search_type = 'id';

		$scope.change_type = function(id){
			$scope.options.type = id;
			query();
		}

		$scope.change_search_type = function(type){
			$scope.options.search_type = type;
		}

		$scope.change_status = function(status){
			$scope.options.status = status;
			query();
		}

		$scope.search = function(e){
			var keycode = window.event?e.keyCode:e.which;
			if(keycode == 13){
				query();
			}
		}

		$scope.submit = function(image,i){
			ImageService.update(image);
			if(!i)alert('提交成功');
		}

		$scope.delete = function(image){
			if(!confirm('确认删除该图片吗?'))return;
			ImageService.delete(image.id);
			image.hide = true;
		}

		$scope.acceptAll = function(){
			_.forEach($scope.list.data,function(image){
				image.status = 99;
				$scope.submit(image,true);
			});
		}

		function query(page){
			var _options = _.clone($scope.options);
			if(page)_options.page = page;
			if(_options['keywords'])_options[_options['search_type']] = _options['keywords'];
			delete _options.search_type;
			delete _options.keywords;
			ImageService.list(_options).then(function(data){
				$scope.list = data;
			});
		}

		ImageService.list().then(function(data){
			$scope.list = data;
			console.log(data);
		});

		$scope.pageChange = query;
	}]);

app.controller('NoticeCtrl',['$scope','$rootScope','NoticeService','$stateParams','$state',
	function($scope,$rootScope,NoticeService,$stateParams,$state){
		$scope.options = {};
		$scope.options.search_type = 'id';

		$scope.change_type = function(id){
			$scope.options.type = id;
			query();
		}

		$scope.change_search_type = function(type){
			$scope.options.search_type = type;
		}

		$scope.change_status = function(status){
			$scope.options.status = status;
			query();
		}

		$scope.search = function(e){
			var keycode = window.event?e.keyCode:e.which;
			if(keycode == 13){
				query();
			}
		}

		function query(page){
			var _options = _.clone($scope.options);
			if(page)_options.page = page;
			if(_options['keywords'])_options[_options['search_type']] = _options['keywords'];
			delete _options.search_type;
			delete _options.keywords;
			NoticeService.list(_options).then(function(data){
				$scope.list = data;
			});
		}
		if($stateParams.id){
			$scope.options.search_type = 'tid';
			$scope.options.keywords = $stateParams.id;
			query();	
		}else{
			query();
		}
		

		$scope.pageChange = query;

		$scope.change_notice_status = function(notice,status){
			notice.status = status;
			NoticeService.update(notice);
			alert('操作成功');
		}

		$scope.delete = function(cream){
			if(!confirm('确认删除该公告吗?'))return;
			NoticeService.delete(cream.id);
			cream.hide = true;
		}

		$scope.addNotice = function(){
			if($scope.options.search_type == 'tid' && !isNaN($scope.options.keywords)){
				$state.go('base.noticeNew',{id:$scope.options.keywords});
			}else{
				alert('请选择游戏ID查询并输入ID后 再添加公告');
			}
		}
	}]);

app.controller('NoticeNewCtrl',['$scope','$rootScope','$filter','NoticeService','$stateParams','$state',
	function($scope,$rootScope,$filter,NoticeService,$stateParams,$state){

		$scope.notice = {
			tid:$stateParams.id,
			create_time:moment().format('YYYY/MM/DD HH:mm:ss'),
		};

		$scope.submit = function(){
			$scope.notice.create_at = $filter('toUnix')($scope.notice.create_time);
			$scope.notice.update_at = $scope.notice.create_at;
			delete $scope.notice.create_time;
			NoticeService.create($scope.notice);
			alert('创建成功.');
			$state.go('base.notice');
		}
	}]);

app.controller('NoticeEditCtrl',['$scope','$rootScope','$filter','NoticeService','$stateParams','$state',
	function($scope,$rootScope,$filter,NoticeService,$stateParams,$state){
		NoticeService.info($stateParams.id).then(function(info){
			console.log(info);
			$scope.notice = info;
			$scope.notice.create_time = $filter('dateTime')($scope.notice.create_at);
		});

		$scope.submit = function(){
			$scope.notice.create_at = $filter('toUnix')($scope.notice.create_time);
			$scope.notice.update_at = $scope.notice.create_at;
			delete $scope.notice.create_time;
			NoticeService.update($scope.notice);
			alert('修改成功.');
			$state.go('base.notice');
		}
	}]);

app.controller('RecExamineCtrl',['$scope','$rootScope','GamerecService',
	function($scope,$rootScope,GamerecService){
		$scope.options = {};
		$scope.options.search_type = 'id';

		$scope.change_type = function(id){
			$scope.options.type = id;
			query();
		}

		$scope.change_search_type = function(type){
			$scope.options.search_type = type;
		}

		$scope.change_status = function(status){
			$scope.options.status = status;
			query();
		}

		$scope.search = function(e){
			var keycode = window.event?e.keyCode:e.which;
			if(keycode == 13){
				query();
			}
		}

		function query(page){
			var _options = _.clone($scope.options);
			if(page)_options.page = page;
			if(_options['keywords'])_options[_options['search_type']] = _options['keywords'];
			delete _options.search_type;
			delete _options.keywords;
			GamerecService.list(_options).then(function(data){
				$scope.list = data;
			});
		}

		GamerecService.list().then(function(data){
			$scope.list = data;
			console.log(data);
		});

		$scope.pageChange = query;

		$scope.change_notice_status = function(notice,status){
			notice.status = status;
			GamerecService.update(notice);
		}

		$scope.delete = function(gamerec){
			if(!confirm('确认删除该推荐吗?')){
				return;
			}
			GamerecService.delete(gamerec.id);
			gamerec.hide = true;
		}

		$scope.accept = function(gamerec){
			gamerec.status = 99;
			GamerecService.update(gamerec);
		}
	}]);

app.controller('ErrorReportCtrl',['$scope','$rootScope','GameerrorService',
	function($scope,$rootScope,GameerrorService){
		$scope.options = {};
		$scope.options.search_type = 'id';

		$scope.change_type = function(id){
			$scope.options.type = id;
			query();
		}

		$scope.change_search_type = function(type){
			$scope.options.search_type = type;
		}

		$scope.change_status = function(status){
			$scope.options.status = status;
			query();
		}

		$scope.search = function(e){
			var keycode = window.event?e.keyCode:e.which;
			if(keycode == 13){
				query();
			}
		}

		function query(page){
			var _options = _.clone($scope.options);
			if(page)_options.page = page;
			if(_options['keywords'])_options[_options['search_type']] = _options['keywords'];
			delete _options.search_type;
			delete _options.keywords;
			GameerrorService.list(_options).then(function(data){
				$scope.list = data;
			});
		}

		GameerrorService.list().then(function(data){
			$scope.list = data;
			console.log(data);
		});

		$scope.pageChange = query;

		$scope.change_notice_status = function(notice,status){
			notice.status = status;
			GameerrorService.update(notice);
		}

		$scope.delete = function(gamerec){
			if(!confirm("确认删除该错误报告吗?"))return;
			GameerrorService.delete(gamerec.id);
			gamerec.hide = true;
		}
	}]);

app.controller('RelationCtrl',['$scope','$rootScope','$stateParams','GameService',
	function($scope,$rootScope,$stateParams,GameService){

		GameService.relationGame($stateParams.id).then(function(data){
			$scope.gameList = data;
		});

		$scope.relate = function(){
			var options = {
				gameid:$stateParams.id,
				ids:$scope.relate_input
			}
			GameService.relation(options).then(function(data){
				if(data == '1'){
					alert("合并成功");
					$scope.relate_input = '';
				}else{
					alert('合并失败,请重试');
				}
			});
		}

		$scope.mergy = function(){
			var options = {
				id:$stateParams.id,
				dirid:$scope.mergy_input
			}
			GameService.mergy(options).then(function(data){
				if(data == $scope.mergy_input){
					alert('合并成功');
					$scope.mergy_input = '';
				}else{
					alert('合并失败,请重试');
				}
			});	
		}
	}]);