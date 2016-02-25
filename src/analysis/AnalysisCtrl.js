app.controller('WebAnalysisCtrl',['$scope','$rootScope',
	function($scope,$rootScope){

	}]);

app.controller('NewFinancePageCtrl',['$scope','$rootScope',
	function($scope,$rootScope){
		$scope.charts = [];
		$scope.charts.push({});

		$scope.savePage = function(){
			console.log($scope.charts);
		}

		$scope.addChart = function(){
			$scope.charts.push({});
		}
	}]);

app.controller('FinanceAnalysisCtrl',['$scope','$rootScope',function($scope,$rootScope){


}]);

app.controller('NewChartCtrl',['$scope','FinanceService',
	function($scope,FinanceService){
		// 配置文件
		var config = {
			"mxwk":{
				"name":"冒险与挖矿",
				"servers":[1,2,3,4,5,6,7,8]
			},
			"czdtx":{
				"name":"村长打天下"
			},
			"czdtx800ux":{
				"name":"村长打天下800ux"
			},
			"kpgs":{
				"name":"卡片怪兽"
			},
			"dhd":{
				"name":"大皇帝",
				"servers":[1,2]
			},
			"djmy2":{
				"name":"刀剑魔药2",
				"platforms":["3dm","17173","u77","178"]
			},
			"xxd":{
				"name":"仙侠道",
				"servers":[1,2]
			},
			"yzh":{
				"name":"玉之魂"
			}
		}
		// 初始化选项
		$scope.gameConfig   = [];
		$scope.servers      = [];
		$scope.platforms     = [];
		$scope.showPlatform = true;
		$scope.showServers  = true;
		$scope.times = [1,3,7,15,30,'自定义'];
		$scope.widths = [3,4,5,6,7,8,9,10,11,12];
		$scope.xConfig = [
			{
				name:'时间',
				key:'time'
			},
			{
				name:'额度',
				key:'amount'
			},
			{
				name:'渠道',
				key:'platform'
			},
			{
				name:'区服',
				key:'server'
			}
		];

		$scope.yConfig = [
			{
				name:'金额',
				key:'money'
			},
			{
				name:'充值人数',
				key:'human'
			},
			{
				name:'充值次数',
				key:'count'
			}
		];
		$scope.chartConfig = [
			{
				name:'线形图',
				key:'line'
			},
			{
				name:'饼状图',
				key:'pie'
			}
		]

		// 格式化配置文件
		$.map(config,function(value,key){
			$scope.gameConfig.push({
				name_en:key,
				name:value.name,
				servers:value.servers
			});
		});

		// 初始化状态
		$scope.isEdit = true;

		// 初始化chart
		$scope.chart.width = $scope.chart.width || 6 ;
		$scope.chart.time  = $scope.chart.time || $scope.times[1];
		$scope.chart.x     = $scope.chart.x || $scope.xConfig[0].key;
		$scope.chart.xtime = $scope.chart.xtime || $scope.times[0];
		$scope.chart.y     = $scope.chart.y || $scope.yConfig[0].key;
		$scope.chart.type  = $scope.chart.type || $scope.chartConfig[0].key;

		// 选游戏范围
		$scope.$watch('chart.game',function(n){
			if(!$scope.chart.game){
				$scope.platforms    = [];
				$scope.servers      = [];
				$scope.showPlatform = true;
				$scope.showServers  = true;
				return;
			}

			if(config[$scope.chart.game].platforms){
				$scope.platforms    = config[$scope.chart.game].platforms;
				$scope.showPlatform = true;
			}else{
				$scope.platforms    = [];
				$scope.showPlatform = false;
			}
			
			if(config[$scope.chart.game].servers){
				$scope.servers     = config[$scope.chart.game].servers;
				$scope.showServers = true;
			}else{
				$scope.servers     = [];
				$scope.showServers = false;
			}
		});

		// 时间范围选择
		$scope.$watch('chart.time',function(time){
			if(time != '自定义'){
				$scope.chart.startDate = moment().subtract(time-1,'days').format('YYYY-MM-DD');
				$scope.chart.endDate   = moment().format('YYYY-MM-DD');	
			}
		});

		// 切换图表/显示
		$scope.showChart = function(){
			$scope.isEdit  = !$scope.isEdit;
			$scope.loading = true;
			if(!$scope.isEdit){
				FinanceService.query($scope.chart).then(function(result){
					$scope.loading   = false;
					$scope.chartData = toChartData(result.axis,$scope.chart.type);
				});	
			}
		}

		// 保存图表
		$scope.saveChart = function(){

		}
	}]);

app.controller('ShowChartCtrl',['$scope',
	function($scope){

	}]);	


function toChartData(data,type){
	var result;
	if(type == 'line'){
		result = {labels:[]};
		var _data = [];
		$.map(data,function(value,key){
			result.labels.push(key);
			_data.push(value);
		});

		result.datasets = [{
			fillColor : "rgba(151,187,205,0.5)",
			strokeColor : "rgba(151,187,205,1)",
			pointColor : "rgba(151,187,205,1)",
			pointStrokeColor : "#fff",
			data: _data
		}];
	}else if(type == 'pie'){
		// 计算颜色
		var colors = getColors(data);
		result = [];
		var _i = 0;
		$.map(data,function(value,key){
			result.push({
				value:value,
				label:key,
				color:'#'+colors[_i]
			});
			_i++;
		});
		console.log(result);

	}
	return result;
}

function getColors(data){
	var _count = 1;
	var _full = parseInt('eeeeee',16);
	var colors = [];
	$.map(data,function(value,key){
		_count++;
	});
	for(var i = 1;i<_count;i++){
		var _color = ((_full/_count)*i).toString(16);
		_color = _color.indexOf('.') != -1 ? _color.split('.')[0] : _color;
		colors.push(_color);
	}
	return colors;
}