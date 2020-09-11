/* load questions and answers from questions.json file into html dom */
const questionContainer = document.querySelector('#question');
const choices = document.querySelectorAll('.choice');

let questionCounter = 0;
let currentQuestion = {};
let availableQuestions = [];

let CORRECT_BONUS = 10;
let userScore = 0;


let questions = [
    {
        "question": "What does RGB stand for?",
        "choice1": "right gather before",
        "choice2": "restful given benefit",
        "choice3": "red green blue",
        "choice4": "raspberry guava blueberry",
        "answer": "3"
    },
    {
        "question": "What goes in front of a URL?",
        "choice1": "HTTPS://",
        "choice2": "HPPTS://",
        "choice3": "HTPS://",
        "choice4": "HSTPP://",
        "answer": "1"
    }
]

askNewQuestion = () => {

    if( /* there's no more questions */ questions.length <= questionCounter) {
        /* store the userScore in localStorage */
        localStorage.setItem('user score', userScore);
        return window.location.assign('/end.html');
    }

    currentQuestion = questions[questionCounter];
    questionContainer.innerText = currentQuestion.question;
    questionCounter++;

    choices.forEach( choice => {
        const num = choice.dataset["number"]
        choice.innerText = currentQuestion["choice"+num];
    });
}

choices.forEach( choice => {
    choice.addEventListener("click", e => {
        const selected = e.target.dataset["number"];
        let newClass = "incorrect";
        if(selected == currentQuestion.answer){
            newClass = "correct";
            userScore = userScore+CORRECT_BONUS;
            console.log(userScore);
        } 
        choice.classList.add(newClass);
        setTimeout(() => {
            choice.classList.remove(newClass);
            askNewQuestion();
        }, 1000);
    });
});

askNewQuestion();
