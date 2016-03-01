app.controller('TagsListCtrl',['$scope','TagService',
	function($scope,TagService){
		$scope.tagList = [{
			label:'语言',
			tags:[]
		},{
			label:'类型',
			tags:[]
		},{
			label:'玩法',
			tags:[]
		},{
			label:'感受',
			tags:[]
		},{
			label:'风格',
			tags:[]
		}];

		$scope.currentTab = 0;

		

		$scope.$watch('tagsCacheList',function(){
			$scope.selectedList = $scope.tagsCacheList ? JSON.parse($scope.tagsCacheList) : [];	

		});
		
		$scope.add = function(tag){

			tag.disable = true;			
			$scope.selectedList.push({
				name:tag.name,
				support:1,
				tagid:tag.id
			});

			$scope.tagsCacheList = JSON.stringify($scope.selectedList);

			// if($scope.tagsCacheList){
			// 	var _list = JSON.parse($scope.tagsCacheList);
			// 	_list.push(tag);
			// 	$scope.tagsCacheList = JSON.stringify(_list);
			// }else{
			// 	$scope.tagsCacheList = JSON.stringify([tag]);
			// }
		}

		$scope.remove = function(tag){
			_.remove($scope.selectedList,function(_tag){
				return _tag.tagid == tag.tagid;
			});
			$scope.tagsCacheList = JSON.stringify($scope.selectedList);

			angular.forEach($scope.tagList,function(type){
				angular.forEach(type.tags,function(_tag){
					if(_tag.id == tag.tagid){
						_tag.disable = null;
					}	
				})
				
			});	
			
		}

		$scope.changeTab = function(index){
			$scope.currentTab = index;
		}

		TagService.all().then(function(data){
			data = JSON.parse(data);
			angular.forEach(data,function(data,index){

				angular.forEach($scope.selectedList,function(tag){
					if(data.id == tag.tagid)data.disable = true;
				});

				$scope.tagList[data.type - 1].tags.push(data);
			});
		});
	}]);