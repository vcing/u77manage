app.service('FinanceService',['$q',
	function($q){
		return {
			query:function(chart){
				var deffered = $q.defer();
				$.get(ChargePath+'analysis/income',chart,function(result){
					deffered.resolve(result);
				});
				return deffered.promise;
			},
			getConfig:function(chart){
				var deffered = $q.defer();
				return deffered.promise;
			}
		}
	}]);

app.service('AnalysisPageService',['$q',
	function($q){
		return {
			list:function(){
				var deffered = $q.defer();
				$.get(BackEndPath + 'page',function(result){
					deffered.resolve(result);
				});
				return deffered.promise;
			},
			create:function(page){
				var deffered = $q.defer();
				$.post(BackEndPath + 'page',page,function(result){
					deffered.resolve(result);
				});
				return deffered.promise;
			},
			update:function(page){
				var deffered = $q.defer();
				$.post(BackEndPath + 'page/'+page.objectId,page,function(result){
					deffered.resolve(result);
				});
				return deffered.promise;	
			},
			get:function(id){
				var deffered = $q.defer();
				$.get(BackEndPath + 'page/' + id,function(result){
					deffered.resolve(result);
				});
				return deffered.promise;
			},
			delete:function(id){
				var deffered = $q.defer();
				$.ajax({
					url: BackEndPath + 'page/' + id,
					type: 'DELETE',
					success: function(result) {
						deffered.resolve(result);
					}
				});
				return deffered.promise;	
			}
		}
	}]);