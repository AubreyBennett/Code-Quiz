const question = document.getElementById("question");
const choices = Array.from(document.getElementsByClassName("choice-text"));

let currentQuestion = {};
let acceptingAnswers = true;
let score = 0;
let questionCounter = 0;
let availableQuesions = [];

let questions = [
    {
        ques: "What does HTML stand for?",
        choices: ["Hypertext Makeup Language", "Hypotext Markup Language", "Hypertext Markup Language", "Hypertext Markup Lover"],
        correctAnswer: "Hypertext Markup Language"
    }, 
    {
        ques: "What does CSS stand for?",
        choices: ["Cascading Style Sheets", "Cascading Sheet Styles", "Composing Style Sheets", "Composing Sheet Styles"],
        correctAnswer: "Cascading Style Sheets"
    }, 
    {
        ques: "What key combination do you need to copy on a PC?",
        choices: ["ctrl-c", "ctrl-p", "ctrl-copy", "alt-c"],
        correctAnswer: "ctrl-c"
    },
    {
        ques: "What key combination do you need to copy on a PC?",
        choices: ["ctrl-c", "ctrl-p", "ctrl-paste", "alt-c"],
        correctAnswer: "ctrl-p"
    }
]; //end of myQuiz array of objects

const correct_bonus = 10;
const max_quesions = 4;

startGame = () => {
    questionCounter = 0;
    score = 0;
    availableQuesions = [ 
        {
            question: "What does HTML stand for?",
            choice1: "Hypertext Makeup Language", 
            choice2: "Hypotext Markup Language", 
            choice3: "Hypertext Markup Language", 
            choice4: "Hypertext Markup Lover",
            correctAnswer: 3
        }, 
        {
            question: "What does CSS stand for?",
            choice1: "Cascading Style Sheets", 
            choice2: "Cascading Sheet Styles", 
            choice3: "Composing Style Sheets", 
            choice4: "Composing Sheet Styles",
            correctAnswer: 1
        }, 
        {
            question: "What key combination do you need to copy on a PC?",
            choice1: "ctrl-c", 
            choice2: "ctrl-p", 
            choice3: "ctrl-copy", 
            choice4: "alt-c",
            correctAnswer: 1
        },
        {
            question: "What key combination do you need to copy on a PC?",
            choice1: "ctrl-c", 
            choice2: "ctrl-p", 
            choice3: "ctrl-paste", 
            choice4: "alt-c",
            correctAnswer: 2
        }];
        getNewQuestion();
    }; 

    getNewQuestion = () => {

        // if (availableQuesions.length === 0 || questionCounter > max_quesions) {
        //     return window.location.assign(*/end.html);
        // }
// why are my quesions not showing up???????????????
        questionCounter++;
        const questionIndex = Math.floor(Math.random() * availableQuesions.length);
        currentQuestion = availableQuesions[questionIndex];
        question.innerText = currentQuestion.question;

        choices.forEach(choice => {
            const number = choice.dataset["number"];
            choice.innerText = currentQuestion["choice" + number];
        });

        availableQuesions.splice(questionIndex, 1);
        acceptingAnsers = true;
    };

    choices.forEach(choice => {
        choice.addEventListener('click', e => {
            if (acceptingAnswers) return;
            acceptingAnswers = false;
            const selectedChoice = e.target;
            const selectedAnswer = selectedChoice.dataset['number'];
            console.log(selectedAnswer === currentQuestion.correctAnswer);
            getNewQuestion();
        });
    })

    startGame();