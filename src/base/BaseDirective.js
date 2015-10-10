app.directive('mainSidebar',function(){
	return {
		restrict:'A',
		templateUrl:'/base/sidebar.html',
		replace:true,
	};
});

app.directive('navHeader',function(){
	return {
		restrict:'A',
		templateUrl:'/base/nav-header.html',
		replace:true,
		// link:function($scope,element,attrs){

		// }
	};
});

app.directive('navMessageList',function(){
	return {
		restrict:'A',
		templateUrl:'/base/nav-message-list.html',
		replace:true,
		// link:function($scope,element,attrs){

		// }
	};
});

app.directive('navNotificationList',function(){
	return {
		restrict:'A',
		templateUrl:'/base/nav-notification-list.html',
		replace:true,
		// link:function($scope,element,attrs){

		// }
	};
});

app.directive('navTaskList',function(){
	return {
		restrict:'A',
		templateUrl:'/base/nav-task-list.html',
		replace:true,
		// link:function($scope,element,attrs){

		// }
	};
});

app.directive('upload',function(){
	return function($scope,element,attrs){
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
				var _scope = attrs['fill'].split('.');
				switch(_scope.length){
					case 1:
						$scope[_scope[0]] = 'http://'+prefix+'.u77.com'+response.url;break;
					case 2:
						$scope[_scope[0]][_scope[1]] = 'http://'+prefix+'.u77.com'+response.url;break;
					case 3:
						$scope[_scope[0]][_scope[1]][_scope[2]] = 'http://'+prefix+'.u77.com'+response.url;break;
					case 4:
						$scope[_scope[0]][_scope[1]][_scope[2]][_scope[3]] = 'http://'+prefix+'.u77.com'+response.url;break;
				}
				
			});
		});

		
		
	}
})