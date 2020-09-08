/* load questions and answers from questions.json file into html dom */
const question = document.querySelector('#question');
const choices = document.querySelectorAll('.choice');

let questionCounter = 0;
let currentQuestion = {};
let availableQuestions = [];

fetch("questions.json")
.then(res => res.json())
.then(data=> {
    console.log(data);
});

askNewQuestion = () => {
    // questionCounter++;
}

choices.forEach( choice => {
    choice.addEventListener("click", e => console.log(e.target.dataset["number"]));
});
