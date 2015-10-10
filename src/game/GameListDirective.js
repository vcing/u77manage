app.directive('gameList',function(){
	return {
		restrict:'A',
		templateUrl:'/game/game-list.html',
		replace:true,
		controller:'ListGameCtrl',
		link:function(){
			$("[data-mask]").inputmask();
		}
	};
});

app.directive('gameListBlock',function(){
	return {
		restrict:'A',
		templateUrl:'/game/game-list-block.html',
		replace:true,
		controller:'SingleGameCtrl'
	}
});