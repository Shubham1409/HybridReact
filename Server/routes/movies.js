var express = require('express');
var router = express.Router();
var User = require('../models/movies');

router.route("/add")
  .post(function(req, res) {
req.body["Comments"]="default comments";
    if(req.body)
    {
      var result=[];
      var cursor=db.collection('moviedetails').find({},{__v:false, _id:false});
        cursor.forEach(function(data,err){
          if(err){
            console.log(err);
          }
          result.push(data);

        },function(){
        var index = result.findIndex(function(movie){
          return movie.imdbID===req.body.imdbID;
        });
        if(index!=-1){
          res.send("Movie Already exist");
        }
        else {
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

router.route("/delete/:imdbID")
  .delete(function(req, res) {
    var myObj = {imdbID:req.params.imdbID};
    console.log(myObj);
        movieDb.remove({imdbID:req.params.imdbID},function(err){
          if(err){
            res.json(err);
          }
          else{
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
          }
});
});

router.route("/update/")
  .put(function(req, res) {
    var myObj = {imdbID:req.body.imdbID,Comments:req.body.Comments};
        movieDb.update({imdbID:req.body.imdbID},myObj,function(err){
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
