var express = require('express');
var router = express.Router();
var User = require('../models/users');

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
            res.send("User inserted");
          }
      });
    }
});
module.exports = router;
