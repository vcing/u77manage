app.controller('WebAnalysisCtrl',['$scope','$rootScope',function($scope,$rootScope){

}]);

app.controller('FinanceAnalysisCtrl',['$scope','$rootScope',function($scope,$rootScope){

// 今日总交易额
// 今日平均充值金额
// 今日下单数
// 今日成功付费订单数




// 充值金额 曲线图 时间/游戏/对比
// 充值人数 平均充值金额 曲线图 时间/游戏
// 所有游戏充值占比 饼状图 时间/对比
// 其他数据 表格 时间/游戏



	$scope.test = {
		labels:[1,2,3,4,5,6,7],
		datasets:[{
				label:"新用户",
	            fillColor: "rgba(220,220,220,0.2)",
	            strokeColor: "rgba(220,220,220,1)",
	            pointColor: "rgba(220,220,220,1)",
	            pointStrokeColor: "#fff",
	            pointHighlightFill: "#fff",
	            pointHighlightStroke: "rgba(220,220,220,1)",
				data:[2,5,3,6,7,8,2]
			},{
				label:"评论",
				fillColor: "rgba(151,187,205,0.2)",
	            strokeColor: "rgba(151,187,205,1)",
	            pointColor: "rgba(151,187,205,1)",
	            pointStrokeColor: "#fff",
	            pointHighlightFill: "#fff",
	            pointHighlightStroke: "rgba(151,187,205,1)",
				data:[6,3,1,5,2,7,5]
			}]
	};

	$scope.games = [
		{
			gameId:1,
			name:'冒险与挖矿'
		}
	]
}]);