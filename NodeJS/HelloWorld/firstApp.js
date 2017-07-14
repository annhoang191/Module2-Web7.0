const fs                = require('fs');
const express           = require('express');
const apiRouter         = require('./modules/api/api.js');
const questionRouter    = require('./modules/question/question.js');
const askRouter         = require('./modules/ask/ask.js');
const bodyParser        = require('body-parser');
const exhbs             = require('express-handlebars');
const mongoose          = require('mongoose');
const config            = require('./config.json');
const questionModel     = require('./modules/question/questionSchema.js');

let app = express();
let hbs = exhbs.create({});

app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended : true}));

//set view engine
app.engine('handlebars', exhbs ({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

//connect to database
mongoose.connect(config.connectionString , (err) => {
  if(err) {
    console.log(err);
  } else {
    console.log('connect db success');
  }
});

app.use('/api', apiRouter);
app.use('/ask', askRouter);
app.use('/question', questionRouter);

app.get('/',(req, res) => {
  questionModel.count({}, (err, count) => {
    if(err){
      console.log(err);
    } else {
      var random = Math.floor(Math.random()*count);
      questionModel.findOne({_id: random}, (err, doc) => {
        if(err){
          console.log(err);
        } else {
          res.render('home', {
            action : `/api/question/${random}`,
            question : doc.content
          });
        }
      });
    }
  });
});

app.listen(6969, () => {
  console.log('app is running. listening on :6969');
});
