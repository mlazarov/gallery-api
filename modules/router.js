// Router

var user = require('./users.js');
var express = require('express');
var gallery = require('./gallery.js');

module.exports = function(app) {
	app.use(express.static(__dirname + '/../public'));

	app.get('/', function(req, res){
		res.send('<h3>Please download our mobile application to use this service.</h3>');
	});

	app.get('/session', function(req, res){
		res.json(req.session);
	});

	app.post('/signup', function(req, res){
		user.Register({
			user: req.param('user'),
			pass: req.param('pass')
		},function(err,result){
			if(err){
				res.status(409).json({error:err});
			}else{
				req.session.user = result;
				res.json({message:'Registration successfull!'});
			}
		});
	});

	app.post('/login', function(req, res){
		user.Login(req.param('user'),req.param('pass'),function(err,result){
			if(err){
				res.status(402).json({error:err});
			}else{
				req.session.user = result;
				res.json({message:'Successfully logged in'});
			}
		});

	});


	app.get('/gallery/list', function(req, res){
		if (req.session.user == null){
			res.status(409).json({error:'Please login'});
		}
		gallery.List(req.session.user._id,function(err,data){
			res.json(data);
		});

	});

	app.post('/upload/', function(req, res){
		if (req.session.user == null){
			res.status(409).json({error:'Please login'});
		}
		gallery.newFile(req.session.user._id,req.files,function(err,data){
			res.json(data);	
		});
	});

}
