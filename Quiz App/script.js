//Questions for quiz
const questions = [
    {
        question : "Which one of the following is the largest mammal on earth?",
        answers: [
            {text:"Shark", check:"false"},
            {text:"Blue Whale", check:"true"},
            {text:"Elephant", check:"false"},
            {text:"Giraffe", check:"false"}
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
let question = document.getElementById('question');
let ansBtn = document.getElementById('quiz');
let nextBtn = document.getElementById('next-btn');

showQuestion = () => {
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
    })
}

resetQuestion = () => {
    nextBtn.style.display = "none";
    while (ansBtn.firstChild) {
        ansBtn.removeChild(ansBtn.firstChild);
    }
}


startQuiz = () => {
    qsIdx = 0;
    score = 0;
    nextBtn.innerHTML = 'Next';
    showQuestion();
}


startQuiz();
