const fs = require('fs');                 //file system
const express = require('express');
const questionRouter = require('./modules/question/question.js');
const bodyParser = require('body-parser');

let app = express();
app.use(bodyParser.urlencoded({ extended : true}));

app.get('/', (req, res) => {
  res.send('Welcome to the app');
});

app.use('/question', questionRouter);

app.get('/object', (req,res) => {
  let testObject = {
    a : 'test',
    b : 'abc'
  }
  res.send(testObject);
});

app.get('/redirect', (req,res) => {
  res.redirect('/question');
});

app.listen(6969, () => {
  console.log('app is running');
});
