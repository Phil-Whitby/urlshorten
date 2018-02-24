var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var randomize = require('randomatic');

mongoose.connect("mongodb://admin:Z1dane@ds235388.mlab.com:35388/mytestdb");

var Schema = mongoose.Schema;

var url = new Schema({

  urlID: String,
  url: String,
  shortURL: String

});

//3.define model

var urlModel = mongoose.model("URL2", url);



//5. create if/else statement  to perform get request
router.get('/', function(req, res, next){
	console.log('brpppppp');
  urlModel.findOne({urlId:req.query.urlId}, function(err, url){
  res.json(url);
  });
});




// 4.Use post to test server with a post request. Add console.log to function to ensure delivery of request. Create variable that holds model
router.post('/', function(req, res, next) {
  console.log('hello');
    var randomurl = randomize('*', 5);
  var urls= new urlModel({

      urlId: randomurl,
      url: req.body.url,
      shortURL: 'http://159.65.56.80:3000/' + randomurl

  });
  console.log('there');
    urls.save(function(err){
console.log('you')
      if(err){
        res.send("not ok");
      }else{
        res.send('http://159.65.56.80:3000/' + randomurl);
      }
    })
}
)



module.exports = router;