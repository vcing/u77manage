var router   = require('express').Router();
var AV = require('./config/av.js');

router.get('/',function(req,res){

	var Chart = global.Chart;

	var query = new AV.Query(Chart);

	query.select('objectId', 'title');

	query.find().then(function(result){
		res.json(result);
	},function(err){
		res.json(err)
	});

});

router.get('/:id',function(req,res){

	var id = req.params.id;

	var Chart = global.Chart;

	var query = new AV.Query(Chart);

	query.get(id).then(function(result){
		res.json(result);
	},function(err){
		res.json(err)
	});

});



router.post('/',function(req,res){

	var title = req.body.title;
	var data = req.body.data;

	var Chart = global.Chart;

	var chart = new Chart();
	chart.set("title",title);
	chart.set("data",data);

	chart.save().then(function(result){
		res.json(result.id);
	},function(err){
		res.json(err)
	});

});


router.post('/:id',function(req,res){

	var id = req.params.id;

	var title = req.body.title;
	var data = req.body.data;

	var Chart = global.Chart;

	var query = new AV.Query(Chart);

	query.get(id).then(function(result){
		if(result){
			result.set("title",title);
			result.set("data",data);

			result.save().then(function(result){
				res.json(result);
			},function(err){
				res.json(err)
			});
		}else{
			var err = {
				status:100,
				msg:'传入ID错误'
			}
			res.json(err);
		}
	})
});

router.delete('/:id',function(req,res){

	var id = req.params.id;

	var Chart = global.Chart;

	var query = new AV.Query(Chart);

	query.get(id).then(function(result){
		if(result){
			result.destroy().then(function(){
				var result = {
					status:0,
					msg:'删除成功'
				}
				res.json(result);
			},function(err){
				res.json(err)
			});
		}else{
			var err = {
				status:100,
				msg:'传入ID错误'
			}
			res.json(err);
		}
	})
});


module.exports = router;