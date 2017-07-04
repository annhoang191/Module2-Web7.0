const fs      = require('fs');
const path    = require('path');
const express = require('express');

let router = express.Router();

router.get('/', (req, res) => {
  res.redirect('/question');
});

router.post('/question/:id', (req, res) => {
  let questionList;
  try {
      questionList = JSON.parse(fs.readFileSync('question.json', 'utf-8'));
  } catch (exception) {
      console.log(exception);
      questionList = [];
  }

  if(req.body.choiceYes =='yes') {
      questionList[req.params.id].yes += 1;
  }
  else {
      questionList[req.params.id].no += 1;
  }

  fs.writeFileSync('question.json',
  JSON.stringify(questionList));

  res.redirect('/question/'+req.params.id);
});

router.post('/question', (req, res) => {
  let questionList;
  try {
      questionList =
      JSON.parse(fs.readFileSync('question.json', 'utf-8'));
  } catch (exception) {
      console.log(exception);
      questionList = [];
  }

  question = {
    content : req.body.question,
    yes     : 0,
    no      : 0
  }
  questionList.push(question);
  fs.writeFileSync('question.json', JSON.stringify(questionList));
  res.redirect('/question/'+(questionList.length-1));
});

module.exports = router;
