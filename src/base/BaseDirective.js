app.directive('mainSidebar',function(){
	return {
		restrict:'A',
		templateUrl:'/static/base/sidebar.html',
		replace:true,
	};
});

app.directive('navHeader',function(){
	return {
		restrict:'A',
		templateUrl:'/static/base/nav-header.html',
		replace:true,
		// link:function($scope,element,attrs){

		// }
	};
});

app.directive('navMessageList',function(){
	return {
		restrict:'A',
		templateUrl:'/static/base/nav-message-list.html',
		replace:true,
		// link:function($scope,element,attrs){

		// }
	};
});

app.directive('navNotificationList',function(){
	return {
		restrict:'A',
		templateUrl:'/static/base/nav-notification-list.html',
		replace:true,
		// link:function($scope,element,attrs){

		// }
	};
});

app.directive('navTaskList',function(){
	return {
		restrict:'A',
		templateUrl:'/static/base/nav-task-list.html',
		replace:true,
		// link:function($scope,element,attrs){

		// }
	};
});

app.directive('upload',function(){
	return {
		restrict:'A',
		scope:{
			type:'=upload',
			file_type:'=uploadFileType',
			fill:'=uploadFill',
			progress:'=uploadProgress'
		},
		link:function($scope,element,attrs){
			var type = attrs['type'] ? attrs['type'] : 'game';
			var file_type = attrs['file-type'] ? attrs['file-type'] : 'image';
			var bucket = file_type == 'image' ? 'u77img' : 'u77file';
			var options = {
				type:type,
				file_type:file_type
			}
			var prefix = file_type == 'image' ? 'img' : 'file';
			var params;

			$.get(ManagePath+'api/upload',options,function(data){
				params = JSON.parse(data);
				var _uploader = WebUploader.create({
					auto:true,
					swf:"/plugins/webuploader/Uploader.swf",
					server:"http://v0.api.upyun.com/"+bucket,
					pick:element,
					accept:{
						title:'Images',
						extensions:'jpg,jpeg,png',
						mimeTypes:'image/*'
					},
					formData:params
				});

				_uploader.on('uploadSuccess', function(file,response){
					$scope.fill = 'http://'+prefix+'.u77.com'+response.url;
				});

				_uploader.on('uploadProgress', function(file,percentage){
					$scope.progress = percentage;
				});
			});
		}
	}
});

app.directive('navPager',function(){
	return {
		restrict:'A',
		templateUrl:'/static/base/pager.html',
		scope:{
			data:'=navPager',
			pageChange:'=pageChange'
		},
		controller:function($scope){
			
		},
		link:function($scope,element,attrs){
			$scope.pageChanged = function() {
				$scope.pageChange($scope.data.current_page);
				$('body,html').animate({ scrollTop: 0 }, 500);
			};
		}
	}
})


app.directive('contenteditable', function() {
        return {
            require: 'ngModel',
            link: function(scope, elm, attrs, ctrl) {
                // view -> model
                elm.bind('blur', function() {
                    scope.$apply(function() {
                        ctrl.$setViewValue(elm.html());
                    });
                });

                // model -> view
                ctrl.$render = function() {
                    elm.html(ctrl.$viewValue);
                };

                // load init value from DOM
                ctrl.$setViewValue(elm.html());
            }
        };
    });

app.directive('lineChart',function(){
	return {
		restrict:'A',
		scope:{
			data:'=lineChart',
			click:'=click',
			ratio:'=ratio',
		},
		link:function($scope,element,attrs){
			var _chart;
			$scope.$watch('data',function(){
				if($scope.data){
					_chart ? _chart.destroy() : false;
					var ctx = $(element).get(0).getContext("2d");
					ctx.canvas.width = $scope.ratio ? $scope.ratio : 2;
					ctx.canvas.height = 1;
					_chart = new Chart(ctx).Line($scope.data,{
						responsive: true,
						// maintainAspectRatio: false,
					});

					$(element).on('click',function(e){
						var point = _chart.getPointsAtEvent(e);
						$scope.click ? $scope.click(point) : false ;
					});
					
				}
			});
		}
	}
});

app.directive('barChart',function(){
	return {
		restrict:'A',
		scope:{
			data:'=barChart'
		},
		link:function($scope,element,attrs){
			var _chart;
			$scope.$watch('data',function(){
				if($scope.data){
					_chart ? _chart.destroy() : false;
					var ctx = $(element).get(0).getContext("2d");
					ctx.canvas.width = $scope.ratio ? $scope.ratio : 2;
					ctx.canvas.height = 1;
					_chart = new Chart(ctx).Bar($scope.data,{
						responsive: true,
						// maintainAspectRatio: false,
					});

					$(element).on('click',function(e){
						var point = _chart.getPointsAtEvent(e);
						$scope.click ? $scope.click(point) : false ;
					});
				}
			})
		}
	}
})

app.directive('pieChart',function(){
	return {
		restrict:'A',
		scope:{
			data:'=pieChart',
		},
		link:function($scope,element,attrs){
			var _chart;
			$scope.$watch('data',function(){
				if($scope.data){
					_chart ? _chart.destroy() : false;
					var ctx = $(element).get(0).getContext("2d");
					_chart = new Chart(ctx).Pie($scope.data);	
				}
			});
			
		}
	}
})