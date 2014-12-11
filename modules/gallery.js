// Albums

var db = require('monk')('localhost/snapp');

var gallery = db.get('gallery');

exports.List = function(userId,callback){
	gallery.find({
			user_id: gallery.id(userId)
		}, function (err, docs){
		callback(err,docs);
	});
}
exports.newFile = function(userId,files,callback){
	gallery.insert({
			user_id: gallery.id(userId),
			imagefile: files.image.name,
			imagedata: files.image
		},function(err,docs){
		callback(err,docs);
	});
};


