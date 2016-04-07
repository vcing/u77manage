app.directive('autoScroll',function(){
	return {
		restrict:'A',
		scope:{
			user:'=autoScroll'
		},
		link:function($scope,element,attrs){
			$scope.$watch('user',function(n,o){
				var _boxHeight    = $(element).outerHeight();
				var _top          = $(element).scrollTop();
				var _scrollHeight = $(element)[0].scrollHeight;
				if(o){
					if(n.userId == o.userId){
						// 没切换人
						if((_scrollHeight - _top - _boxHeight) > 100){
							// 滚动了
						}else{
							// 没滚动 自动滚动
							scrollBottom()
						}
					}else{
						// 切换人了 滚动底部
						scrollBottom()
					}
				}else{
					scrollBottom()
				}
			},true);

			function scrollBottom() {
				setTimeout(function(){
					$(element).animate({
						scrollTop:$(element)[0].scrollHeight+'px'
					},300);
				},100)
			}
		}
	};
});