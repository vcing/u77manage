// const T_TYPE_COMMENT = 1;			// comment
// const T_TYPE_POST = 2;				// post
// const T_TYPE_VIDEO = 3;				// video
// const T_TYPE_GAMEREC = 4;			// game rec
app.service('DailyReportService',['$http','$q','ReportListInfoService',
	function($http,$q,ReportListInfoService){
		return {
			promise:function(id){
				var deffered = $q.defer();
				$http.get(BasePath+'api/daily_report_list').success(function(data){
					ReportListInfoService.list(data.list).then(function(data){
						deffered.resolve(data);
					});
				});
				return deffered.promise;
			}
		}
	}]);

app.service('DailyGameVilidService',['$http','$q','GameListService',
	function($http,$q,GameListService){
		return {
			promise:function(){
				var deffered = $q.defer();
				var options = {
					status:0
				}
				GameListService.promise(options).then(function(data){
					deffered.resolve(data);
				});
				return deffered.promise;
			}
		}
	}]);

