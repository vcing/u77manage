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