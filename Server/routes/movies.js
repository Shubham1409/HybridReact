var express = require('express');
var router = express.Router();
var User = require('../models/movies');

router.route("/add")
  .post(function(req, res) {

    if(req.body)
    {
      var userVar = new User(req.body);
      userVar.save(function(err){
        if(err)
        {
          res.send(err);
        }
        else
          {
            res.send("Movie inserted");
          }
      });
    }
});

//find by collection
router.route("/savedmovies")
  .get(function(req,res){
var result=[];
var cursor=db.collection('moviedetails').find({},{__v:false, _id:false});
  cursor.forEach(function(data,err){
    if(err){
      console.log(err);
    }
    result.push(data);

  },function(){
    console.log(result);
    res.json(result);

  });
  });


router.route("/retrieve")
  .get(function(req, res) {
        movieDb.find({},function(err, docs){
          if(err){
            res.json(err);
          }
          else{
                res.json({moviedb:docs});
          }
});
});

router.route("/delete/:title")
  .delete(function(req, res) {
    var myObj = {Title:req.params.title};
    console.log(myObj);
        movieDb.remove({Title:req.params.title},function(err){
          if(err){
            res.json(err);
          }
          else{
            movieDb.find({},function(err, docs){
              if(err){
                res.json(err);
              }
              else{
                    res.json({moviedb:docs});
              }
    });
          }
});
});

router.route("/update/:title")
  .put(function(req, res) {
        movieDb.update({Title:req.params.title},{Plot:req.body.Plot, Year:req.body.Year},function(err){
          if(err){
            res.json(err);
          }
          else{
            movieDb.find({},function(err, docs){
              if(err){
                res.json(err);
              }
              else{
                    res.json({moviedb:docs});
              }
    });
          }
});
});
/* GET home page. */
/*router.post('/movies', function(req, res, next) {
  console.log(req.body.Search[0]);
  res.send("hello express");
});*/


module.exports = router;
