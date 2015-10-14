app.directive('tagsList',function(){
	return {
		restrict:'A',
		templateUrl:'/game/tags-list.html',
		replace:true,
		scope:{
			tagsCacheList:'=tagsList'
		},
		controller:'TagsListCtrl'
	}
});