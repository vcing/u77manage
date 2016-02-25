var app = require('./index.js');

// 端口一定要从环境变量 `LC_APP_PORT` 中获取。
// LeanEngine 运行时会分配端口并赋值到该变量。
var PORT = parseInt(process.env.LC_APP_PORT || 80);
app.listen(PORT, function () {
	console.log('Node app is running, port:', PORT, '\n\n\n\n\n\n');
});