app.controller('WebAnalysisCtrl',['$scope','$rootScope',
	function($scope,$rootScope){

	}]);

app.controller('FinanceEditCtrl',['$scope','$rootScope','$state','AnalysisPageService','SaveService',
	function($scope,$rootScope,$state,AnalysisPageService,SaveService){
		if($state.params.id){
			$scope.pageName = '编辑';
			if($state.params.id == 'test'){
				var data = '{"title":"test","charts":[{"$$hashKey":"object:5","width":6,"time":3,"x":"time","xtime":1,"y":"money","type":"line","startDate":"2016-02-23","endDate":"2016-02-25","title":"2333"},{"$$hashKey":"object:31","width":6,"time":3,"x":"time","xtime":1,"y":"money","type":"line","startDate":"2016-02-23","endDate":"2016-02-25","title":"23333"},{"$$hashKey":"object:57","width":6,"time":3,"x":"time","xtime":1,"y":"money","type":"line","startDate":"2016-02-23","endDate":"2016-02-25","title":"32222"},{"$$hashKey":"object:83","width":6,"time":3,"x":"time","xtime":1,"y":"money","type":"line","startDate":"2016-02-23","endDate":"2016-02-25","title":"1122"}]}';
				data = JSON.parse(data);
				$scope.charts = data.charts;
				$scope.title = data.title;
			}else{
				AnalysisPageService.get($state.params.id).then(function(page){
					$scope.title = page.title;
					$scope.tabs = JSON.parse(page.data);
					$scope.currentTab = 0;
				});
			}
		}else{
			$scope.pageName = '新建';
			$scope.currentTab = 0;
			$scope.tabs = [{
				title:'',
				charts:[]
			}];
		}

		$scope.active = function(key) {
			$scope.currentTab = key;
		}

		$scope.newTab = function() {
			$scope.tabs.push({
				title:'',
				charts:[]
			});
			$scope.currentTab = $scope.tabs.length-1;
		}

		// 删除tab
		$scope.deleteTab = function(key){
			if($scope.currentTab == key){
				$scope.currentTab = key - 1;
			}
			$scope.tabs.splice(key,1);
		}

		// 删除表
		$scope.deleteChart = function(key){
			$scope.tabs[$scope.currentTab].charts.splice(key,1);
		}
		

		$scope.savePage = function(){
			var data = {
				title:$scope.title,
				data:JSON.stringify($scope.tabs),
				objectId:$state.params.id
			}
			if($state.params.id){
				AnalysisPageService.update(data).then(function(){
					$state.go('base.analysisFinance',{id:$state.params.id});
				});
			}else{
				AnalysisPageService.create(data).then(function(id){
					$state.go('base.analysisFinance',{id:id});
				})
			}
		}

		function outputTab() {
			var data = _.clone($scope.tabs[$scope.currentTab]);
			delete data.$$hashKey;
			data.charts.forEach(function(chart){
				delete chart.$$hashKey;
			});
			return JSON.stringify(data);
		}

		function inputTab(data) {
			$scope.tabs[$scope.currentTab] = JSON.parse(data);
		}

		function outputPage() {
			var data = _.clone($scope.tabs);
			data.forEach(function(tab){
				delete tab.$$hashKey;
				tab.charts.forEach(function(chart){
					delete chart.$$hashKey;
				});
			});
			
			return JSON.stringify($scope.tabs);
		}

		function inputPage(data) {
			$scope.tabs = JSON.parse(data);
		}

		$scope.showSave = function() {
			SaveService.create({
				outputPage:outputPage,
				inputPage:inputPage,
				outputTab:outputTab,
				inputTab:inputTab
			});
		}

		$scope.addChart = function(){
			$scope.tabs[$scope.currentTab].charts.push({});
		}
	}]);

app.controller('FinanceCtrl',['$scope','$rootScope','$state','AnalysisPageService',
	function($scope,$rootScope,$state,AnalysisPageService){
		$scope.id = $state.params.id;
		var data;
		if($state.params.id == 'test'){
			data = '{"title":"test","charts":[{"$$hashKey":"object:5","width":6,"time":3,"x":"time","xtime":1,"y":"money","type":"line","startDate":"2016-02-23","endDate":"2016-02-25","title":"2333"},{"$$hashKey":"object:31","width":6,"time":3,"x":"time","xtime":1,"y":"money","type":"line","startDate":"2016-02-23","endDate":"2016-02-25","title":"23333"},{"$$hashKey":"object:57","width":6,"time":3,"x":"time","xtime":1,"y":"money","type":"line","startDate":"2016-02-23","endDate":"2016-02-25","title":"32222"},{"$$hashKey":"object:83","width":6,"time":3,"x":"time","xtime":1,"y":"money","type":"line","startDate":"2016-02-23","endDate":"2016-02-25","title":"1122"}]}';
			data = JSON.parse(data);
			$scope.title = data.title;
			$scope.charts = data.charts;
		}
		if($state.params.id){
			AnalysisPageService.get($state.params.id).then(function(page){
				data = page;
				data.charts = JSON.parse(page.data);
				$scope.title = data.title;
				$scope.tabs = data.charts;
				$scope.currentTab = 0;
			});
		}

		$scope.active = function(key) {
			$scope.currentTab = key;
		}

		$scope.delete = function(){
			AnalysisPageService.delete($state.params.id).then(function(result){
				$state.go('base.dashboard');
			});
		}
		
	}]);

app.controller('ChartEditCtrl',['$scope','AnalysisService',
	function($scope,AnalysisService){
		// 配置文件
		var config = {
			"mxwk":{
				"name":"冒险与挖矿",
				"servers":[1,2,3,4,5,6,7,8,9]
			},
			"czdtx":{
				"name":"村长打天下",
				servers:[1,2]
			},
			"czdtx800ux":{
				"name":"村长打天下800ux",
				servers:[1,2]
			},
			"kzlr800ux":{
				"name":"空之利刃800ux",
				servers:[1,2]
			},
			"zqsd800ux":{
				"name":"战旗时代800ux"
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
			},
			"lmcs":{
				"name":"猎魔传说"
			},
			"kosg":{
				"name":"KO三国"
			},
			"ademx":{
				"name":"艾德尔冒险"
			},
			"mszzl":{
				"name":"萌神赵子龙"
			},
			"dx":{
				"name":"斗侠"
			},
			"jxj":{
				"name":"将心诀"
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
			},
			{
				name:'游戏',
				key:'game'
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
			},
			{
				name:'付费玩家平均付费金额',
				key:'averageOfHuman'
			},
			{
				name:'付费玩家平均每次付费金额',
				key:'averageOfCount'
			},
			{
				name:'平均付费金额',
				key:'averageOfPay',
			},
			{
				name:'付费率',
				key:'percentOfPay',
			},
			{
				name:'活跃人数',
				key:'login'
			},
			{
				name:'注册人数',
				key:'register'
			},
			{
				name:'留存人数',
				key:'retention'
			},
			{
				name:'留存百分比',
				key:'percentOfRetention'
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
			},
			{
				name:'柱状图',
				key:'bar'
			},
			{
				name:'表格图',
				key:'table'
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

			if($scope.chart.game){
				if($scope.chart.x == 'game'){
					alert('x轴无法选择为游戏');
					$scope.chart.x = 'time';
				}
			// 	$scope.xConfig.splice(4,1);
			// }else if($scope.chart.xConfig == 4){
			// 	$scope.xConfig.push({
			// 		name:'游戏',
			// 		key:'game'
			// 	})
			}
		});

		$scope.$watch('chart.y',function(n){
			if($scope.chart.y == 'percentOfPay' ||
			   $scope.chart.y == 'averageOfPay' ||
			   $scope.chart.y == 'login' ||
			   $scope.chart.y == 'register' ||
			   $scope.chart.y == 'retention' ||
			   $scope.chart.y == 'percentOfRetention'){
				if(!$scope.chart.game){
					alert('请先选择游戏后 才能选择平均付费或付费率');
					$scope.chart.y = 'money';
					return false;
				}
				$scope.chart.x        = 'time';
				$scope.chart.platform = null;
				$scope.chart.server   = null;
				$scope.xDisable       = true;
			}else{
				$scope.xDisable = false;
			}
		});

		// 时间范围选择
		$scope.$watch('chart.time',function(time){
			if(time != '自定义'){
				$scope.chart.startDate = moment().subtract(time-1,'days').format('YYYY-MM-DD');
				$scope.chart.endDate   = moment().format('YYYY-MM-DD');	
			}
		});

		$scope.$watch('chart.x',function(x){
			if(x == 'game'){
				$scope.yConfig.splice(5,6);
			}else if($scope.yConfig.length == 5){
				var _config = [{
									name:'平均付费金额',
									key:'averageOfPay',
								},
								{
									name:'付费率',
									key:'percentOfPay',
								},
								{
									name:'活跃人数',
									key:'login'
								},
								{
									name:'注册人数',
									key:'register'
								},
								{
									name:'留存人数',
									key:'retention'
								},
								{
									name:'留存百分比',
									key:'percentOfRetention'
								}];
				_config.forEach(function(_y){
					$scope.yConfig.push(_y);
				});
			}

			if($scope.chart.game){
				if($scope.chart.x == 'game'){
					alert('x轴无法选择为游戏');
					$scope.chart.x = 'time';
				}
			// 	$scope.xConfig.splice(4,1);
			// }else if($scope.chart.xConfig == 4){
			// 	$scope.xConfig.push({
			// 		name:'游戏',
			// 		key:'game'
			// 	})
			}
		})

		// 切换图表/显示
		$scope.showChart = function(){
			$scope.isEdit  = !$scope.isEdit;
			$scope.loading = true;
			if(!$scope.isEdit){
				AnalysisService.query($scope.chart).then(function(result){
					$scope.loading   = false;
					$scope.chartData = toChartData(result.axis,$scope.chart.type);
				});	
			}
		}


	}]);

app.controller('ChartShowCtrl',['$scope','AnalysisService',
	function($scope,AnalysisService){
		$scope.loading = true;
		if($scope.chart.time != '自定义'){
			$scope.chart.startDate = moment().subtract($scope.chart.time-1,'days').format('YYYY-MM-DD');
			$scope.chart.endDate   = moment().format('YYYY-MM-DD');	
		}
		AnalysisService.query($scope.chart).then(function(result){
			$scope.loading   = false;
			$scope.chartData = toChartData(result.axis,$scope.chart.type);
			$scope.other = result;
		});	
	}]);

app.controller('SaveCtrl',['$scope','$rootScope','$uibModalInstance','options',
	function($scope,$rootScope,$uibModalInstance,options){
		$scope.outputTab = function() {
			$scope.data = options.outputTab();
		}

		$scope.outputPage = function() {
			$scope.data = options.outputPage();
		}

		$scope.inputTab = function() {
			options.inputTab($scope.data);
		}

		$scope.inputPage = function() {
			options.inputPage($scope.data);
		}
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
	}else if(type == 'bar'){
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
	}else if(type == 'table'){
		result = data;
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