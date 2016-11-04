var express = require('express');
var router = express.Router();

/* GET home page. */
arrayOfObject = [{name:"Shubham", occupation:"Engg"},{name:"Sunjna", occupation:"Project Engg"}]
router.get('/', function(req, res, next) {
  var obj = arrayOfObject.filter(function(a){
    if(a.name==req.query.name){
      return a;
    }
  })
  res.json(obj);
  res.send("hello express");
});

module.exports = router;
