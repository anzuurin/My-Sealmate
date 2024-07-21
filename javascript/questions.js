// Main JS file for quiz logic

//notes:
// - store answers in localStorage but clear it after the quiz is finished
import { questions } from '../data/text.js'
let questionIndex = 0;
let userAnswers = {};

function loadQuestion() {
    const quizQuestion = document.getElementById('question');
    const question = questions[questionIndex];
    let qBlock = `<p>${question.question}</p>`;
    for (const choice in question.choices) {
        qBlock += `<button class="choice-container" value="${choice}" id="${choice}">${question.choices[choice]}</button>`;
    }
    quizQuestion.innerHTML = qBlock;
}

loadQuestion();