/*DEFINE ROUTER FOR /question*/
//post question : save file
//get question : get question and display question form
const express = require('express');
const path = require('path');
const fs = require('fs');

let router = express.Router();

let fileQuestionHtml = path.join(__dirname , '../../public/question.html' );
router.get('/', (req,res) => {
  res.sendFile(fileQuestionHtml);
});

router.post('/', (req,res) => {
  fs.appendFile('./modules/question/question.txt', req.body.question+'\r\n', (err) => {
    if(err){
      return console.log(err);
    }
    let output = fs.readFileSync('./modules/question/question.txt', 'utf-8');
    res.send(output);
  });
});


module.exports = router;
