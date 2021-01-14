var myQuiz = [
    {
    ques: "What is the capital of California?",
    choices: ["Los Angeles", "San Francisco", "Sacramento", "San Diego", "Oakland"],
    correctAnswer: "Sacramento"
    }, 
    {
    ques: "What is the capital of Pennsylvania?",
    choices: ["Pittsburgh", "Philadelphia", "Harrisburg", "Erie"],
    correctAnswer: "Harrisburg"
    }, 
    {
    ques: "What is the capital of Florida?",
    choices: ["Tallahassee", "Tampa", "Miami", "Jacksonville"],
    correctAnswer: "Tallahassee"
    },
    {
    ques: "What is the capital of Georgia?",
    choices: ["Augusta", "Atlanta", "Savannah"],
    correctAnswer: "Atlanta"
    }
 ]; //end of myQuiz array of objects
 
 var questionIndex = -1; // Not started

function nextQuestion() {
document.body.innerHTML = '';
  ++questionIndex;
    document.write(myQuiz[questionIndex].ques + "<br />");

        for (var j=0; j < myQuiz[questionIndex].choices.length; j++) {
        document.write("<input type=radio id=myRadio name=radAnswer>" + myQuiz[questionIndex].choices[j] + "<br />");
        }
        
   if (questionIndex < (myQuiz.length - 1)) {
    var nextButton = document.createElement("input");
    nextButton.type = "button";
    nextButton.value = "Next question";
    nextButton.addEventListener('click', nextQuestion);
    document.body.appendChild(nextButton);
   }
};

nextQuestion();