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
		templateUrl:'/base/pager.html',
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

/**  
 * Two-way data binding for contenteditable elements with ng-model.  
 * @example  
 *   <p contenteditable="true" ng-model="text"></p>  
 */ 
app.directive('contenteditable', function() {  
  return {  
    require: '?ngModel',  
    link: function(scope, element, attrs, ctrl) {  
   
      // Do nothing if this is not bound to a model  
      if (!ctrl) { return; }  
   
      // Checks for updates (input or pressing ENTER)  
      // view -> model  
      element.bind('input enterKey', function() {  
        var rerender = false;  
        var html = element.html();  
   
        if (attrs.noLineBreaks) {  
          html = html.replace(/<div>/g, '').replace(/<br>/g, '').replace(/<\/div>/g, '');  
          rerender = true;  
        }  
   
        scope.$apply(function() {  
          ctrl.$setViewValue(html);  
          if(rerender) {  
            ctrl.$render();  
          }  
        });  
      });  
   
      element.keyup(function(e){  
        if(e.keyCode === 13){  
          element.trigger('enterKey');  
        }  
      });  
   
      // model -> view  
      ctrl.$render = function() {  
        element.html(ctrl.$viewValue);  
      };  
   
      // load init value from DOM  
      ctrl.$render();  
    }  
  };  
}); 