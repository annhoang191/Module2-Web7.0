//DEFINE ROUTER FOR /question
//post question : save file
//get question : get question and display
const express = require('express');
const path = require('path');

let router = express.Router();

let fileQuestionHtml = path.join(__dirname , '../../public/question.html' );
router.get('/', (req,res) => {
  res.sendFile(fileQuestionHtml);
});

router.post('/', (req,res) => {
  console.log(req.body);
  res.send('post question');
});

module.exports = router;
