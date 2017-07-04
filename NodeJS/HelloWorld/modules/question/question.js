const fs      = require('fs');
const express = require('express');

let router = express.Router();

router.use(express.static('public'));

router.get('/', (req, res) => {
  res.redirect('/');
});

router.get('/:id', (req, res) => {
  let questionList;
  try {
    questionList =
    JSON.parse(fs.readFileSync('question.json', 'utf-8'));
  } catch (exception) {
      console.log(exception);
      questionList = [];
  }
  res.render('result', {
    question : questionList[req.params.id].content.toString(),
    yes : questionList[req.params.id].yes,
    no : questionList[req.params.id].no
  });
});

module.exports = router;
