const questions = [
    {
        question: "Quina és la capital de França?",
        answers: ["París", "Paris"],
        hint: "És coneguda com la 'ciutat de l'amor'.",
        link: "https://ca.wikipedia.org/wiki/Par%C3%ADs"
    },
    {
        question: "Quin gas és necessari perquè els vegetals realitzin la fotosíntesi?",
        answers: ["Diòxid de carboni", "CO2"],
        hint: "Té la fórmula química CO2.",
        link: "https://ca.wikipedia.org/wiki/Fotos%C3%ADntesi"
    },
    {
        question: "Quin és el riu més llarg del món?",
        answers: ["Níl", "Nil"],
        hint: "És famós per ser el riu de l'Egipte antic.",
        link: "https://ca.wikipedia.org/wiki/N%C3%ADl"
    }
];

const questionElement = document.getElementById('question');
const answerElement = document.getElementById('answer');
const hintElement = document.getElementById('hint');
const submitButton = document.getElementById('submit');
const hintLinkElement = document.getElementById('hint-link');

let currentQuestionIndex = 0;

function displayQuestion(index) {
    questionElement.textContent = questions[index].question;
    answerElement.value = '';
    hintElement.style.display = 'none';
    hintLinkElement.style.display = 'inline-block';
}

function checkAnswer(index, answer) {
    const validAnswers = questions[index].answers.map(a => a.trim().toLowerCase());
    return validAnswers.includes(answer.trim().toLowerCase());
}

function displayHint(index) {
    hintElement.textContent = "Pista: " + questions[index].hint;
    hintElement.style.display = 'block';
    hintLinkElement.style.display = 'none';
}

function handleAnswerSubmission() {
    const userAnswer = answerElement.value;
    if (checkAnswer(currentQuestionIndex, userAnswer)) {
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

hintLinkElement.addEventListener('click', function (event) {
    event.preventDefault();
    const link = questions[currentQuestionIndex].link;
    window.open(link, '_blank');
});
