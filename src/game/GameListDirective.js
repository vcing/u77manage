app.directive('gameList',function(){
	return {
		restrict:'A',
		templateUrl:'/game/game-list.html',
		replace:true,
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