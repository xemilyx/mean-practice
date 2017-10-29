var express = require('express');
var router = express.Router();

router
  .route('/json')
  .get(function(req, res) {
      console.log("GET the json");
      res
          .status(200)
          .json({"jsonData" : true});
  })
  .post(function(req, res) {
      console.log("POST the json");
      res
          .status(200)
          .json({"jsonData" : "POST Received"});
  });

module.exports = router;
