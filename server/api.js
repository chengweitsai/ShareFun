const Router = require('express').Router;
const fs = require('fs');
const router = new Router();
const DB = require("./database");

router.post('/login', function(req, res){
  // code for discussion with db
   DB.user.findOne({
      where: {username: req.body.username}
   }).then(function(user){
      if(user.password == req.body.password)
         res.json({success: true});
      //else password wrong
   }).catch(function(err){
      res.json({success: false});
      DB.user.create({
         username: req.body.username,
         password: req.body.password
      });
   });
})

router.post('/addFriend', function(req, res){
   // code for discussion with db
   console.log(req.body)
   DB.friendlink.create({
      user_1: req.body.username,
      user_2: req.body.friendName
   });
  res.json({success: true});
})

router.post('/addDebt', function(req, res){
	// code for discussion with db
  res.json({success: true});
})

module.exports = router;
