const questions = [
    {
        question: "Quin any som?",
        answers: ["2023"],
        link: "https://ca.wikipedia.org/wiki/Par%C3%ADs"
    },
    {
        question: "Com et dius?",
        answers: ["Bruna", "Raluy"],
        link: "https://ca.wikipedia.org/wiki/Fotos%C3%ADntesi"
    },
    {
        question: "Quin és el riu més llarg del món?",
        answers: ["Níl", "Nil"],
        link: "https://ca.wikipedia.org/wiki/Nil"
    }
];

const questionElement = document.getElementById('question');
const answerElement = document.getElementById('answer');
const linkElement = document.getElementById('link');
const submitButton = document.getElementById('submit');

let currentQuestionIndex = 0;

function displayQuestion(index) {
    questionElement.textContent = questions[index].question;
    answerElement.value = '';
    linkElement.style.display = 'none';
}

function checkAnswer(index, answer) {
    const validAnswers = questions[index].answers.map(a => a.trim().toLowerCase());
    return validAnswers.includes(answer.trim().toLowerCase());
}

function goToLink(link) {
    window.open(link, '_blank');
}

function handleAnswerSubmission() {
    const userAnswer = answerElement.value;
    if (checkAnswer(currentQuestionIndex, userAnswer)) {
        const link = questions[currentQuestionIndex].link;
        goToLink(link);
        if (currentQuestionIndex < questions.length - 1) {
            currentQuestionIndex++;
            displayQuestion(currentQuestionIndex);
        }
    } else {
        alert('Resposta incorrecta. Intenta-ho de nou.');
    }
}

displayQuestion(currentQuestionIndex);

submitButton.addEventListener('click', handleAnswerSubmission);
answerElement.addEventListener('keydown', function (event) {
    if (event.key === 'Enter') {
        event.preventDefault();
        handleAnswerSubmission();
    }
});
