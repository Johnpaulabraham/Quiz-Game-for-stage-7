// Define the quiz questions and answers
const quiz = [
    {
        question: "What Cohort is KodeCamp in?",
        options: ["KodeCamp 1.0", "KodeCamp 4.0", "KodeCamp 3.0", "KodeCamp 6.0"],
        correctAnswer: "KodeCamp 4.0"
    },
    {
        question: "Who is the CEO/Founder of KodeCamp?",
        options: ["Engr. Aniebiet Udoh", "Mark Twain", "Akinbobola Akinuliola", "Ernest Hemingway"],
        correctAnswer: "Engr. Aniebiet Udoh"
    },
    {
        question: "Who is the Manager of KodeCamp?",
        options: ["Jennifer Peter", "David Victor", "Lawrence Akubue", "Paul Thomson"],
        correctAnswer: "Lawrence Akubue"
    },
    {
        question: "What is the current frontend Mentor of KodeCamp 4.0?",
        options: ["David Edu", "Abigail Jude", "Akinbobola Akinuliola", "Gideon Philip"],
        correctAnswer: "Akinbobola Akinuliola"
    },
    {
        question: "Is there a maximum age of enrolling in kodecamp internship?",
        options: ["yes", "Not sure", "No", "Maybe"],
        correctAnswer: "No"
    },
    {
        question: "How does kodecamp operate?",
        options: ["All of the above", "Onsite", "Fully Virtual", "Hybrid"],
        correctAnswer: "Fully Virtual"
    },
    {
        question: "Which of the following is the kodecamp Vision statement?",
        options: ["Learning to change the world", "A one stop for technical talent in African", "All of the above", "Breaking edges for Africa development"],
        correctAnswer: "A one stop for technical talent in African"
    },
    {
        question: "Where is kodecamp physical office located?",
        options: ["Abuja", "Lagos", "Enugu", "None of the above"],
        correctAnswer: "None of the above"
    },
    {
        question: "What is the meaning of LMS in kodecamp?",
        options: ["Learner maintaining system", "Learning management System", "Local Meeting Scope", "Learning Manager System"],
        correctAnswer: "Learning management System"
    },
    {
        question: "What is the cost of enrolling in kodecamp internship?",
        options: ["₦225,000", "Free", "$70 Dollar", "₦100,000"],
        correctAnswer: "Free"
    }
];

let currentQuestionIndex = 0;
let score = 0;

function displayQuestion() {
    const question = document.getElementById("question");
    const options = document.getElementById("options");

    // Clear previous options
    options.innerHTML = "";

    // Display current question and options
    question.innerText = quiz[currentQuestionIndex].question;
    quiz[currentQuestionIndex].options.forEach(option => {
        const li = document.createElement("li");
        li.innerHTML = `<div onclick="checkAnswer('${option}')">${option}</div>`;
        options.appendChild(li);
        currentQuestionIndex +2;
        document.getElementById("myH3").textContent = `Question ${currentQuestionIndex} out of 10`;
    });
}

function checkAnswer(selectedAnswer) {
    const result = document.getElementById("result");
    if (selectedAnswer === quiz[currentQuestionIndex].correctAnswer) {
        score++;
        result.innerText = "Correct!";
    } else {
        result.innerText = `Wrong! The correct answer was: ${quiz[currentQuestionIndex].correctAnswer}`;
    }
    currentQuestionIndex++;
    if (currentQuestionIndex < quiz.length) {
        setTimeout(() => {
            result.innerText = "";
            displayQuestion();
        }, 1100);
    } else {
        displayScore();
    }
}

function displayScore() {
    const scoreDiv = document.getElementById("score");
    scoreDiv.innerText = `Total Score: ${score} out of ${quiz.length}`;
}

// Initialize the quiz
displayQuestion();