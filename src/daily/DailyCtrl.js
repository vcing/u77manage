app.controller('BigEyeCtrl',['$scope','$rootScope','UploadService',
	function($scope,$rootScope,UploadService){
		$scope.list = [];

		$.get(ManagePath+'sliders',function(data){
			$scope.list = JSON.parse(data);
		});

		$scope.up = function(index){
			if(index <= 0){
				return;
			}
			var _temp = $scope.list[index-1];
			$scope.list[index-1] = $scope.list[index];
			$scope.list[index] = _temp;
		}

		$scope.down = function(index){
			if(index >= $scope.list.length - 1){
				return;
			}
			var _temp = $scope.list[index + 1];
			$scope.list[index + 1] = $scope.list[index];
			$scope.list[index] = _temp;
		}

		$scope.left = function(){
			$scope.slideControl = $scope.slideControl <= 0 ? $scope.list.length - 1 : $scope.slideControl - 1;
		}

		$scope.right = function(){
			$scope.slideControl = $scope.slideControl >= $scope.list.length - 1 ? 0 : $scope.slideControl + 1;
		}

		$scope.submit = function(){
			$.post(ManagePath+'sliders',{sliders:$scope.list},function(data){
				if(data != 0){
					alert('保存成功');
				}
			});
		}

		UploadService.image().then(function(fn){
			$scope.upload = function($file,slide){
				fn($file,function(resp){
					if(resp.status == 200 && resp.statusText == 'OK'){
						slide.image = resp.data.url;
					}else{
						alert('上传失败,请重试');
					}
					slide.percentage = null
				},function(evt){
					slide.percentage = evt.percentage;
				});
			}
		});

		$scope.slideControl = 0;
		setInterval(function(){
			$scope.$apply(function(){
				if($scope.slideControl < $scope.list.length -1){
					$scope.slideControl++	
				}else{
					$scope.slideControl = 0;
				}	
			});
			
		},3000)
	}]);

app.controller('GameExamineCtrl',['$scope','$rootScope','GameService',
	function($scope,$rootScope,GameService){
		$scope.options = {
			status:0
		}
		GameService.list($scope.options).then(function(data){
			$scope.gameList = data;
		});
	}]);

app.controller('ReportExamineCtrl',['$scope','$rootScope','ReportService',
	function($scope,$rootScope,ReportService){
		ReportService.list().then(function(data){
			$scope.reportList = data.data;
		});

	}]);