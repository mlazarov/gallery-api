// Router

var user = require('./users.js');
var express = require('express');

module.exports = function(app) {
	app.use(express.static(__dirname + '/../public'));

	app.get('/', function(req, res){
		res.send('<h3>Please download our mobile application to use this service.</h3>');
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


	app.post('/album/', function(req, res){
		

	});

	app.post('/upload/', function(req, res){
		
	});

}
