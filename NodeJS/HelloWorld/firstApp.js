const fs = require('fs');                 //file system
const express = require('express');
const questionRouter = require('./modules/question/question.js');
const menuRouter = require('./modules/menu/menu.js');
const bodyParser = require('body-parser');

let app = express();

app.use(bodyParser.urlencoded({ extended : true}));
app.use('/question', questionRouter);
app.use('/', menuRouter);

app.get('/redirect', (req,res) => {
  res.redirect('/question');
});

app.get('/object', (req,res) => {
  let testObject = {
    a : 'test',
    b : 'abc'
  }
  res.send(testObject);
});

app.listen(6969, () => {
  console.log('app is running');
});
