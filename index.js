var express       = require('express');
var cookieSession = require('cookie-session');
var bodyParser    = require('body-parser');
var app           = express();
var AV            = require('leanengine');
var config        = require('./config.json');
var Geetest       = require('./gt-sdk.js');
var api           = require('./api');


// 初始化极验sdk
var geetest    = require("./gt-sdk")(config.geetest.privateKey, config.geetest.publicKey);

// 初始化AVOSCLOUD
AV.initialize(process.env.LC_APP_ID || config.LC_APP_ID,
			process.env.LC_APP_KEY || config.LC_APP_KEY,
			process.env.LC_APP_MASTER_KEY || config.LC_MASTER_KEY);
AV.Cloud.useMasterKey();

// 使用 avoscloud中间件
app.use(AV.Cloud);

// 跨域支持
app.all('/api/*', (req, res, next) => {
  var origin = req.headers.origin;
  if (config.whiteOrigins.indexOf(origin) !== -1) {
    res.header('Access-Control-Allow-Origin', origin);
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    res.header('Access-Control-Allow-Credentials', true);
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, DELETE');
  }
  next();
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
	type: function(req) {
		return /x-www-form-urlencoded/.test(req.headers['content-type']);
	},
	extended: false
}));

// 启用avoscloud cookiesession 和 cookieSession 支持自定义session
app.use(AV.Cloud.CookieSession({ secret: config['session'][0], maxAge: 3600000, fetchUser: true }));
app.use(cookieSession({
	name:config['session'][0],
	keys:[config['session'][1]]
}));

// 静态目录
app.use('/static',express.static(__dirname + '/dest'));

// api路由
app.use('/api',api);

// 登陆请求
app.post('/login',function(req,res,next) {
	geetest.validate({
		challenge: req.body.geetest_challenge,
		validate: req.body.geetest_validate,
		seccode: req.body.geetest_seccode
	}, function (err, result) {

		if(config["users"][req.body.username] && config["users"][req.body.username] === req.body.password){
			req.session.user = {
				name:req.body.username
			}
		}
		res.redirect('/dashboard');
	});
});

// 极验注册
app.get('/geetest',function(req,res,next){
	geetest.register(function (err, data) {
		if (err) {
			res.json({
				gt: config.geetest.publicKey,
				success: false
			});
		} else {
			res.json({
				gt: config.geetest.publicKey,
				challenge: data,
				success: true
			});
		}
	});
});

// 前端路由
app.all('/*', function(req, res, next) {
	if(req.session.user){
		res.sendFile('dest/index.html', { root: __dirname });	
	}else{
		res.sendFile('login.html',{ root:__dirname });
	}
    // Just send the index.html for other files to support HTML5Mode
    
});

// 默认跳转
app.get('/',function(req,res,next){
	res.redirect('/dashboard');
})


module.exports = app;

// app.listen(80); //the port you want to use