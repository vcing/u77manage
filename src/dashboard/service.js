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
			todayData:function(){
				var deffered = $q.defer();
				$.get(ManagePath+'today-data',function(data){
					deffered.resolve(data);
				});
				return deffered.promise;
			},
			sevendayData:function(){
				var deffered = $q.defer();
				$.get(ManagePath+'sevenday-data',function(data){
					_.map(data,function(value){
						value = value.reverse();
					});
					deffered.resolve(data);
				});
				return deffered.promise;
			},
			recentComment:function(){
				var deffered = $q.defer();
				$.get(ManagePath+'recent-comment',function(data){
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
						// hack
						result.datasets[0].data.push(value*3);
						// result.datasets[0].data.push(value);
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
						// hack
						value *= 3;
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
							case '卡片怪兽':
								result.push({
									value:value,
									color:"#7d3bab",
									highlight:"#8d4bbb",
									label:key
								});
								break;
							case '村长打天下':
								result.push({
									value:value,
									color:'#d74047',
									highlight:'#d96a5c',
									label:key
								});
								break;
							case '猎魔传说':
								result.push({
									value:value,
									color:'#da434a',
									highlight:'#db6c5f',
									label:key
								});
								break;
							case 'KO三国':
								result.push({
									value:value,
									color:'#abcdef',
									highlight:'#bcdef0',
									label:key
								})
								break;
							case '艾德尔冒险':
								result.push({
									value:value,
									color:'#1bddef',
									highlight:'#bdeef0',
									label:key
								})
								break;
							case '萌神赵子龙':
								result.push({
									value:value,
									color:'#FFFC66',
									highlight:'#E6E365',
									label:key
								})
								break;
							case '斗侠':
								result.push({
									value:value,
									color:'#abcdef',
									highlight:'#bcdef0',
									label:key
								})
								break;
						}
					});
					deffered.resolve(result);
				});
				return deffered.promise;
			}
		}
	}]);