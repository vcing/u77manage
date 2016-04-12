var router   = require('express').Router();
var AV       = require('./config/av.js');
var realtime = require('./config/config.js').realtime;

// 注册
// router.get('/register',function(req,res){
// 	if(req.AV.user){
// 		res.send({
// 			status:103,
// 			msg:'已经登录'
// 		});
// 		return;
// 	}
// 	var user = new AV.User(req.query);
// 	user.signUp().then(function(user){
// 		res.send({
// 			status:100,
// 			msg:'注册成功'
// 		});
// 	},function(err){
// 		res.send({
// 			status:101,
// 			msg:'注册失败,请稍后重试.',
// 			err:err
// 		});
// 	});
// });

// 登录
router.post('/login',function(req,res){
	if(req.AV.user){
		res.send({
			status:103,
			msg:'已经登录'
		});
		return;
	}
	AV.User.logIn(req.body.username, req.body.password).then(function(user){
		res.send({
			status:100,
			msg:'登录成功',
			user:user
		})
	},function(err){
		res.send({
			status:102,
			msg:"登录失败,请检查账号密码后重试.",
			err:err
		})
	});
});

// 登出
router.get('/logout', function(req, res) {
  // AV.Cloud.CookieSession 将自动清除登录 cookie 信息
  AV.User.logOut();
  res.send({
  	status:100,
  	msg:"登出成功"
  })
});

// 信息
router.get('/profile',function(req,res){
	if(req.AV.user){
		res.send(AV.User.current());
	}else {
		res.send({
			status:104,
			msg:'未登录'
		});
		return;
	}
});

// realtime 信息
router.get('/realtime',function(req,res){
	if(req.AV.user){
		res.send({
			appId:realtime.appId
		})
	}else{
		res.send({
			status:103,
			msg:'请先登录'
		})
	}
});	



module.exports = router;