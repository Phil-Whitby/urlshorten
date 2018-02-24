var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var randomize = require('randomatic');
var path = require('path');


/* GET home page. */
router.get('/', function(req, res, next) {
  res.sendFile(path.join(__dirname,'../views/index.html'));
});

mongoose.connect("mongodb://admin:Z1dane@ds235388.mlab.com:35388/mytestdb");

var Schema = mongoose.Schema;

var url = new Schema({

  urlID: String,
  url: String,
  shortURL: String

});

//3.define model

var urlModel = mongoose.model("url2", url);

router.get('/:shortURL', function(req, res, next){
  console.log(req.params);
  var id = req.params.shortURL;
	console.log('http://159.65.56.80:3000/' + req.params.shortURL);
  urlModel.findOne({shortURL: 'http://159.65.56.80:3000/' + req.params.shortURL}, function(err, url){
	if (url == null) {
		res.send("Couldn't find link");
	} else {
		res.redirect(url.url);
 	} 
});
});


module.exports = router;