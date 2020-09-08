/* load questions and answers from questions.json file into html dom */
const questionContainer = document.querySelector('#question');
const choices = document.querySelectorAll('.choice');

let questionCounter = 0;
let currentQuestion = {};
let availableQuestions = [];

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

// fetch("questions.json")
// .then(res => res.json())
// .then(loadedQuestions=> {
//     questions = loadedQuestions;
// });

askNewQuestion = () => {
    currentQuestion = questions[questionCounter];
    questionContainer.innerText = currentQuestion.question;
    questionCounter++;

    choices.forEach( choice => {
        const num = choice.dataset["number"]
        choice.innerText = currentQuestion["choice"+num];
    });
    // questionContainer.innerText = loadedQuestions[0].question;
   
//     const questionIndex = availableQuestions.length;
//     currentQuestion = availableQuestions[questionIndex]; /* availableQuestions comes from the SPREAD of objects in the array called questions in the startGame function */
//     question.innerText = currentQuestion.question; /* displays the object called question => into the DOM element 
// called question */

}

choices.forEach( choice => {
    choice.addEventListener("click", e => {
        const selected = e.target.dataset["number"];
        console.log("clicked!");
        askNewQuestion();
    });
});

askNewQuestion();
