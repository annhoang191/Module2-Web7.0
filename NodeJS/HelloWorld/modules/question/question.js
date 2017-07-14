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
        yes      : doc.yes,
        no       : doc.no
      });
    } //end else
  });
});

module.exports = router;
