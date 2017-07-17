const fs            = require('fs');
const express       = require('express');
const questionModel = require ('./questionSchema.js');
let router = express.Router();

router.use(express.static('public'));

router.get('/', (req, res) => {
  res.redirect('/');
});

router.get('/:id' , (req,res) => {
  var id = req.params.id;
  questionModel.findOne({_id : id} , (err,doc) => {
    if (err) {
      console.log(err);
    } else {
      res.render('result' , {
        question : doc.content,
        votes    : doc.yes + doc.no,
        yes      : (doc.yes / (doc.yes + doc.no)*100).toPrecision(4),
        no       : (doc.no / (doc.yes + doc.no)*100).toPrecision(4),
      });
    } //end else
  });
});

module.exports = router;
