
//TODO: use config for db credentials
var db = require('monk')('localhost/snapp');

var users = db.get('user');

exports.autoLogin = function(user, pass, callback){

}

exports.Login = function(user, pass, callback){

}

exports.Register = function(user, pass, callback){

}
