const fs = require('fs');

var getQuestionList = () => {
  let questionsList;
  try {
    questionsList = JSON.parse(fs.readFileSync('question.json', 'utf-8'));
  } catch (exception) {
    console.log(exception);
    questionsList = [];
  }

  return questionsList;
}

var saveQuestionList = (questionsList) => {
  fs.writeFileSync('question.json', JSON.stringify(questionsList));
}

module.exports = {
  getQuestionList,
  saveQuestionList
}
