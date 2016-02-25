app.controller('CommentCtrl',['$scope','$rootScope','$stateParams','CommentService',
	function($scope,$rootScope,$stateParams,CommentService){
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
			$scope.options.type = status;
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
			CommentService.list(_options).then(function(data){
				$scope.list = data;
			});
		}

		CommentService.list().then(function(data){
			$scope.list = data;
		});

		$scope.pageChange = query;

		$scope.change_notice_status = function(comment,status){
			comment.status = status;
			CommentService.update(comment);
		}

		$scope.delete = function(comment){
			if(confirm('确定删除改评论?')){
				CommentService._delete(comment.id);
				comment.content.content = "该评论已删除";	
			}
			// comment.hide = true;
		}


		$scope.deleteByUser = function(){
			if(confirm('该操作会删除该用户的所有评论! \r\n 确认执行吗？')){
				CommentService.deleteByUser($scope.userid);	
			}
		}

		$scope.chooseUser = function(user){
			$scope.options.search_type = 'sender';
			$scope.options.keywords = user.userid;
			query();
		}

		$scope.chooseBody = function(comment){
			$scope.options.type = comment.type;
			$scope.options.search_type = 'tid';
			$scope.options.keywords = comment.body.id;
			query();
		}
	}]);