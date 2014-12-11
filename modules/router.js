// Router

module.exports = function(app) {
	app.get('/', function(req, res){
		res.send('<h3>Please download our mobile application to use this service.</h3>');
	});

	app.get('/signup', function(req, res){

	});

	app.post('/login', function(req, res){

	});


	app.post('/album/', function(req, res){

	});

	app.post('/upload/', function(req, res){

	});

}
