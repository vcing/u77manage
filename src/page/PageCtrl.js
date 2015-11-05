app.controller('PageCtrl',['$scope','$rootScope','PageService',
	function($scope,$rootScope,PageService){
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
			PageService.list(_options).then(function(data){
				$scope.list = data;
			});
		}

		query();

		$scope.pageChange = query;

		$scope.change_page_status = function(page,status){
			page.status = status;
			PageService.update(page);
			alert('操作成功');
		}

		$scope.delete = function(page){
			if(!confirm('确认删除该公告吗?'))return;
			PageService.delete(page.id);
			page.hide = true;
		}

	}]);

app.controller('PageEditCtrl',['$scope','$rootScope','$filter','PageService','$stateParams','$state',
	function($scope,$rootScope,$filter,PageService,$stateParams,$state){
		PageService.info($stateParams.id).then(function(info){
			console.log(info);
			$scope.page = info;
			$scope.page.create_time = $filter('dateTime')($scope.page.create_at);
		});

		$scope.submit = function(){
			$scope.page.create_at = $filter('toUnix')($scope.page.create_time);
			$scope.page.update_at = $scope.page.create_at;
			delete $scope.page.create_time;
			PageService.update($scope.page);
			alert('修改成功.');
			$state.go('base.page');
		}
	}]);

app.controller('PageNewCtrl',['$scope','$rootScope','$filter','PageService','$stateParams','$state',
	function($scope,$rootScope,$filter,PageService,$stateParams,$state){

		$scope.page = {
			tid:$stateParams.id,
			create_time:moment().format('YYYY/MM/DD HH:mm:ss'),
		};

		$scope.submit = function(){
			$scope.page.create_at = $filter('toUnix')($scope.page.create_time);
			$scope.page.update_at = $scope.page.create_at;
			delete $scope.page.create_time;
			PageService.create($scope.page);
			alert('创建成功.');
			$state.go('base.page');
		}
	}]);