
//TODO: use config for db credentials
var db = require('monk')('localhost/snapp');

var users = db.get('user');

exports.autoLogin = function(user, pass, callback){
	users.findOne({username:user}, function(err, doc) {
		if (doc){
			doc.password == pass ? callback(doc) : callback(null);
		} else{
			callback(null);
		}
	});

}

exports.Login = function(user, pass, callback){
	users.findOne({username:user,password:pass}, function(err, doc) {
		if (doc){
			callback(false,doc);
		} else{
			callback('Invalid username or password');
		}
	});

}

exports.Register = function(data, callback){
	// TODO: add password encription
	// First check if that users exits
	users.findOne({username:data.user}, function(err, doc) {
		if(doc){
			callback('User already exists');
		}else{
			// Create new user
			users.insert({username:data.user,password:data.pass}, function(err,doc){callback(err,doc);});
		}
	});
}
