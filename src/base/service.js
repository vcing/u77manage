app.service('ReportService',['$q',
	function($q){
		return {
			list:function(type){
				var data = {};
				var deffered = $q.defer();
				type = type ? type : null;
				if(type)data.type = type;
				$.get(ManagePath+'report/list',data,function(data){
					deffered.resolve(JSON.parse(data));
				});
				return deffered.promise;
			},
			ignore:function(id){
				var deffered = $q.defer();
				$.get(ManagePath+'report/ignore/'+id,function(data){
					if(data != 1){
						deffered.resolve(false);
					}else{
						deffered.resolve(true);
					}
				});
				return deffered.promise;
			},
			accept:function(id){
				$.get(ManagePath+'report/accept'+id,function(data){
					var deffered = $q.defer();
					if(data != 1){
						deffered.resolve(false);
					}else{
						deffered.resolve(true);
					}
					return deffered.promise;
				});
			}
		}
	}]);


// 文件上传服务
app.service('UploadService',['Upload','$q',
	function(Upload,$q){

		return {
			file:function(){
				var deffered = $q.defer();
				var type = 'file';
				var file_type = 'file';
				var bucket = 'u77file';

				var options = {
					type:type,
					file_type:file_type
				}

				$.get(ManagePath+'api/upload',options,function(params){
					params = JSON.parse(params);
					var fn = function(file,finalCb,progressCb){
						if(!file)return;
						params.file = file;
						Upload.upload({
				            url: "http://v0.api.upyun.com/"+bucket,
				            data: params
				        }).then(function (resp) {
				        	if(resp.data && resp.data.url)resp.data.url = "http://"+file_type+".u77.com"+resp.data.url;
				            if(finalCb)finalCb(resp);
				        }, function (resp) {
				        	if(resp.data && resp.data.url)resp.data.url = "http://"+file_type+".u77.com"+resp.data.url;
				            if(finalCb)finalCb(resp);
				        }, function (evt) {
				            evt.percentage = parseInt(100.0 * evt.loaded / evt.total);
				            if(progressCb)progressCb(evt);
				        });
					}
					deffered.resolve(fn);
				});
				return deffered.promise;
			},
			image:function(){
				var deffered = $q.defer();
				var type = 'game';
				var file_type = 'image';
				var prefix = 'img';
				var bucket = 'u77img';

				var options = {
					type:type,
					file_type:file_type
				}

				$.get(ManagePath+'api/upload',options,function(params){
					params = JSON.parse(params);
					var fn = function(file,finalCb,progressCb){
						if(!file)return;
						params.file = file;
						Upload.upload({
				            url: "http://v0.api.upyun.com/"+bucket,
				            data: params
				        }).then(function (resp) {
				        	if(resp.data && resp.data.url)resp.data.url = "http://"+prefix+".u77.com"+resp.data.url;
				            if(finalCb)finalCb(resp);
				        }, function (resp) {
				        	if(resp.data && resp.data.url)resp.data.url = "http://"+prefix+".u77.com"+resp.data.url;
				            if(finalCb)finalCb(resp);
				        }, function (evt) {
				            evt.percentage = parseInt(100.0 * evt.loaded / evt.total);
				            if(progressCb)progressCb(evt);
				        });
					}
					deffered.resolve(fn);
				});
				return deffered.promise;
			},
			post:function(){
				var deffered = $q.defer();
				var type = 'post';
				var file_type = 'image';
				var prefix = 'img';
				var bucket = 'u77img';

				var options = {
					type:type,
					file_type:file_type
				}

				$.get(ManagePath+'api/upload',options,function(params){
					params = JSON.parse(params);
					var fn = function(file,finalCb,progressCb){
						if(!file)return;
						params.file = file;
						Upload.upload({
				            url: "http://v0.api.upyun.com/"+bucket,
				            data: params
				        }).then(function (resp) {
				        	if(resp.data && resp.data.url)resp.data.url = "http://"+prefix+".u77.com"+resp.data.url;
				            if(finalCb)finalCb(resp);
				        }, function (resp) {
				        	if(resp.data && resp.data.url)resp.data.url = "http://"+prefix+".u77.com"+resp.data.url;
				            if(finalCb)finalCb(resp);
				        }, function (evt) {
				            evt.percentage = parseInt(100.0 * evt.loaded / evt.total);
				            if(progressCb)progressCb(evt);
				        });
					}
					deffered.resolve(fn);
				});
				return deffered.promise;
			},
			other:function(){
				var deffered = $q.defer();
				var type = 'other';
				var file_type = 'file';
				var bucket = 'u77file';

				var options = {
					type:type,
					file_type:file_type
				}

				$.get(ManagePath+'api/upload',options,function(params){
					params = JSON.parse(params);
					var fn = function(file,finalCb,progressCb){
						if(!file)return;
						params.file = file;
						Upload.upload({
				            url: "http://v0.api.upyun.com/"+bucket,
				            data: params
				        }).then(function (resp) {
				        	if(resp.data && resp.data.url)resp.data.url = "http://"+file_type+".u77.com"+resp.data.url;
				            if(finalCb)finalCb(resp);
				        }, function (resp) {
				        	if(resp.data && resp.data.url)resp.data.url += "http://"+file_type
				            if(finalCb)finalCb(resp);
				        }, function (evt) {
				            evt.percentage = parseInt(100.0 * evt.loaded / evt.total);
				            if(progressCb)progressCb(evt);
				        });
					}
					deffered.resolve(fn);
				});
				return deffered.promise;
			}
		}
	}]);