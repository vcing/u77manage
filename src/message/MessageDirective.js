app.directive('messageBoxAutoScroll',function(){
	return {
		restrict:'A',
		link:function($scope,element,attrs){
			$scope.$watch('currentDialogUser',function(n,o){
				var _boxHeight    = $(element).outerHeight();
				var _top          = $(element).scrollTop();
				var _scrollHeight = $(element)[0].scrollHeight;
				if(o){
					if(n && n.userId == o.userId){
						// 没切换人
						if((_scrollHeight - _top - _boxHeight) > 100){
							// 滚动了
						}else{
							// 没滚动 自动滚动
							scrollBottom();
						}
					}else{
						// 切换人了 滚动底部
						scrollBottom(true);
					}
				}else{
					scrollBottom(true);
				}
			},true);

			function scrollBottom(flag) {
				if(flag){
					$(element).off('scroll');
					$scope.dialogScrollTo = null;
					window.messageBoxLoadingMore = false;
				}
				setTimeout(function(){
					$(element).animate({
						scrollTop:$(element)[0].scrollHeight+'px'
					},300,'linear',function(){
						if(!$scope.dialogScrollTo){
							$scope.dialogScrollTo = function(timestamp){
								setTimeout(function(){
									var _position = $(element).scrollTop() + $('.t-'+timestamp).position().top;
									$(element).scrollTop(_position);
									window.messageBoxLoadingMore = false;
								},10);
							}

							$(element).on('scroll',function(){
								var top = $(element).scrollTop();
								if(top <= 10 && $(element)[0].scrollHeight > $scope.messageBoxHeight){
									if(!window.messageBoxLoadingMore){
										window.messageBoxLoadingMore = true;
										$scope.loadMore();
									}
								}
							});
						}
					});
				},100);
			}
		}
	};
});

app.directive('recentMessageLoadMore',function(){
	return {
		restrict:'A',
		link:function($scope,element,attrs){
			$(element).on('scroll',function(){
				var top = $(element).scrollTop();
				var isBottom = ($(element)[0].scrollHeight - $scope.messageBoxHeight - top) <= 10;
				if(isBottom && $(element)[0].scrollHeight > $scope.messageBoxHeight){
					if(!window.recentTimeLineLoadingMore){
						window.recentTimeLineLoadingMore = true;
						$scope.timeLineLoadMore();
					}
				}
			});
		}
	}
})