const express   = require('express');
const path      = require('path');
const fs        = require('fs');

let router = express.Router();

router.get('/', (req,res) => {
  res.render('question' , {
    action: '/api/question'
  });
});

module.exports = router;
