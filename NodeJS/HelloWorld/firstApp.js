const fs                = require('fs');
const express           = require('express');
const apiRouter         = require('./modules/api/api.js');
const questionRouter    = require('./modules/question/question.js');
const askRouter         = require('./modules/ask/ask.js');
const bodyParser        = require('body-parser');
const exhbs             = require('express-handlebars');

let app = express();
let hbs = exhbs.create({});

app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended : true}));

//app.engine('handlebars' , hbs.engine);
app.engine('handlebars', exhbs ({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

app.use('/api', apiRouter);
app.use('/ask', askRouter);
app.use('/question', questionRouter);

app.get('/', (req, res) => {
  let questionList;
  try {
    questionList =
    JSON.parse(fs.readFileSync('question.json', 'utf-8'));
  } catch (exception) {
      console.log(exception);
      questionList = [];
  }
  let random = Math.floor(Math.random()*(questionList.length-1));
  let result = questionList[random].content.toString();
  res.render('home', {
    action : `/api/question/${random}`,
    question : result
  });
});

app.listen(6969, () => {
  console.log('app is running. listening on :6969');
});
