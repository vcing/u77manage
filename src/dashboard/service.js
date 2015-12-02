app.service('DashboardService',['$q',
	function($q){
		return {
			yesterdayData:function(){
				var deffered = $q.defer();
				$.get(ManagePath+'yesterday-data',function(data){
					deffered.resolve(data);
				});
				return deffered.promise;
			},
			sevenDayIncome:function(){
				var deffered = $q.defer();
				var result = {
					labels:[],
					datasets:[{
							fillColor: "#d2d6de",
				            strokeColor: "#dd4b39",
				            pointColor: "#ff7701",
				            pointStrokeColor: "#fff",
				            pointHighlightFill: "#fff",
				            pointHighlightStroke: "#f39c12",
							data:[]
						}]
				};
				$.get(ChargePath+'analysis/seven-day-income',function(data){
					_.map(data,function(value,key){
						result.labels.push(key);
						result.datasets[0].data.push(value);
					});
					result.labels = result.labels.reverse();
					result.datasets[0].data = result.datasets[0].data.reverse();
					deffered.resolve(result);
				});
				return deffered.promise;
			},
			dayIncome:function(day){
				var deffered = $q.defer();
				var result = [];
				day = day ? day : '';
				$.get(ChargePath+'analysis/day-income/'+day,function(data){
					_.map(data,function(value,key){
						switch(key){
							case '仙侠道':
								result.push({
									value:value,
									color:"#555299",
									highlight:"#605ca8",
									label:key
								});
								break;
							case '玉之魂':
								result.push({
									value:value,
									color:"#008d4c",
									highlight:"#00a65a",
									label:key
								});
								break;
							case '大皇帝':
								result.push({
									value:value,
									color: "#FDB45C",
									highlight: "#FFC870",
									label:key
								});
								break;
							case '冒险与挖矿':
								result.push({
									value:value,
									color:"#F7464A",
			        				highlight: "#FF5A5E",
									label:key
								});
								break;
							case '刀剑魔药2':
								result.push({
									value:value,
									color: "#46BFBD",
									highlight: "#5AD3D1",
									label:key
								});
								break;
						}
					});
					deffered.resolve(result);
				});
				return deffered.promise;
			}
		}
	}]);