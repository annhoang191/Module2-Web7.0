const fs            = require('fs');
const path          = require('path');
const express       = require('express');
const questionModel = require('../question/questionSchema.js');

let router = express.Router();

router.get('/', (req, res) => {
  res.redirect('/question');
});

router.post('/question/:id' , (req,res) => {
  questionModel.findOne({ _id : req.params.id } , (err,doc) => {
    if (err) {
      console.log(err);
    } else {
      console.log(doc);
      if(req.body.choiceYes=='yes') {
        doc.yes = doc.yes ? doc.yes + 1 : 1;
      } else {
        doc.no = doc.no ? doc.no + 1 : 1;
      }

      questionModel.update({_id : req.params.id} ,
                            {$set : {yes:doc.yes, no:doc.no}},
                            (err,doc) => {
        if(err) {
          console.log(err);
        } else {
          console.log(doc);
          res.redirect(`/question/${req.params.id}`);
        }
      });
    }
  });
});

router.post('/question' , (req,res) => {
  questionModel.count ({} , (err,count) => {
    if (err) {
      console.log(err);
    } else {
      questionModel.create({
        _id     : count++,
        content : req.body.question,
        yes     : 0,
        no      : 0
      }, (err,doc) => {
        if (err) {
          console.log(err);
        } else {
          res.redirect('/question/' + doc._id);
        }
      });
    }
  });
});


module.exports = router;
