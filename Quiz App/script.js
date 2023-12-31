//quiz
const questions = [
    {
        question: "Which one of the following is the largest mammal on earth?",
        answers: [
            { text: "Shark", check: "false" },
            { text: "Blue Whale", check: "true" },
            { text: "Elephant", check: "false" },
            { text: "Giraffe", check: "false" }
        ]
    },
    {
        question: "Who was the first woman President of India?",
        answers: [
            { text: "Pratibha Patil", check: "true" },
            { text: "Indira Gandhi", check: "false" },
            { text: "Sonali Bendre", check: "false" },
            { text: "Draupadi Murmu", check: "false" }
        ]
    },
    {
        question: "Which country was first to land on the Southern pole of moon?",
        answers: [
            { text: "Russia", check: "false" },
            { text: "China", check: "false" },
            { text: "India", check: "true" },
            { text: "Japan", check: "false" }
        ]
    },
    {
        question: "Which of the below mentioned diseases occur due to lack of blood?",
        answers: [
            { text: "Diarrhoea", check: "false" },
            { text: "Anaemia", check: "true" },
            { text: "Malaria", check: "false" },
            { text: "Dengue", check: "false" }
        ]
    },
    {
        question: "Who is the CEO of Instagram",
        answers: [
            { text: "Mark Zuckerberg", check: "false" },
            { text: "Elon Musk", check: "false" },
            { text: "Bill Gates", check: "false" },
            { text: "Adam Mosseri", check: "true" }
        ]
    }
];

//create two variables to check qsIndex and score
let qsIdx = 0;
let score = 0;
//variables for questions, answers and next button
let question = document.getElementById('question');
let ansBtn = document.getElementById('quiz'); //answer options
let nextBtn = document.getElementById('next-btn');

const showQuestion = () => {
    //fetching question from questions json
    resetQuestion();
    let questionValue = questions[qsIdx];
    let quesNo = qsIdx + 1;
    question.innerHTML = quesNo + ". " + questionValue.question;

    //Show answers
    questionValue.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("options");
        ansBtn.appendChild(button);
        //check if answer is true or false
        if(answer.check){
            button.dataset.check = answer.check;
        }
        button.addEventListener('click', selectAnswer);
    })
}

const resetQuestion = () => {
    nextBtn.style.display = "none";
    while (ansBtn.firstChild) {
        //removing every option and then adding new options
        ansBtn.removeChild(ansBtn.firstChild);
    }
}


const startQuiz = () => {
    qsIdx = 0;
    score = 0;
    nextBtn.innerHTML = 'Next';
    showQuestion();
}

const selectAnswer = (event) => {
    const selectedAnswer = event.target;
    const isCorrect = selectedAnswer.dataset.check === 'true';
    if(isCorrect){
        selectedAnswer.classList.add('correct');
        score = score + 1;
    }
    else{
        selectedAnswer.classList.add('incorrect');
    }
    //creating an array of all children of answers of options class
    Array.from(ansBtn.children).forEach(answerBtn =>{
        if(answerBtn.dataset.check === 'true'){
            answerBtn.classList.add('correct');
        }
        answerBtn.disabled = true;
    });
    nextBtn.style.display = 'block';

}

showScore = () => {
    resetQuestion();
    question.innerHTML = `You scored ${score} out of ${questions.length} !`;
    nextBtn.innerHTML = 'Play Again';
    nextBtn.style.display = 'block';
}

handleNextBtn = () => {
    qsIdx++;
    if(qsIdx<questions.length){
        showQuestion();
    }
    else{
        showScore();
    }
}

nextBtn.addEventListener('click', ()=>{
    if(qsIdx<questions.length){
        //if all questions not yet finished
        handleNextBtn();
    }else{
        //if all questions finished
        startQuiz();
    }
})

startQuiz();
