// game.js

document.addEventListener('DOMContentLoaded', () => {
    const quizContainer = document.getElementById('quiz-container');
    const submitButton = document.getElementById('submit-quiz');
    const resultContainer = document.getElementById('quiz-result');

    const quizData = [
        {
            question: "Quelle est la principale cause de l'acidification des océans ?",
            options: ["Pollution plastique", "Émissions de CO₂", "Déforestation", "Surpêche"],
            answer: 1
        },
        {
            question: "Quelle espèce est la plus menacée par le réchauffement des océans ?",
            options: ["Le corail", "Le grand requin blanc", "Le dauphin", "La baleine bleue"],
            answer: 0
        },
        {
            question: "Quel est l'effet de la montée du niveau de la mer sur les zones côtières ?",
            options: ["Augmentation de la biodiversité", "Érosion et inondations", "Amélioration des plages", "Aucune conséquence"],
            answer: 1
        },
        {
            question: "Quelle pratique contribue à la pollution plastique des océans ?",
            options: ["Pêche durable", "Recyclage", "Utilisation de sacs en plastique", "Agriculture biologique"],
            answer: 2
        },
        {
            question: "Comment peut-on réduire l'empreinte carbone des océans ?",
            options: ["Augmenter la pêche", "Réduire les émissions de gaz à effet de serre", "Développer les bateaux à moteur", "Utiliser plus de plastique"],
            answer: 1
        }
    ];

    function buildQuiz() {
        const output = [];

        quizData.forEach((currentQuestion, questionIndex) => {
            const options = [];

            currentQuestion.options.forEach((option, optionIndex) => {
                options.push(
                    `<div class="form-check">
                        <input class="form-check-input" type="radio" name="question${questionIndex}" id="q${questionIndex}o${optionIndex}" value="${optionIndex}">
                        <label class="form-check-label" for="q${questionIndex}o${optionIndex}">
                            ${option}
                        </label>
                    </div>`
                );
            });

            output.push(
                `<div class="mb-4">
                    <h5>${questionIndex + 1}. ${currentQuestion.question}</h5>
                    ${options.join('')}
                </div>`
            );
        });

        quizContainer.innerHTML = output.join('');
    }

    function showResults() {
        let score = 0;

        quizData.forEach((currentQuestion, questionIndex) => {
            const selector = `input[name=question${questionIndex}]:checked`;
            const userAnswer = document.querySelector(selector);
            if (userAnswer && parseInt(userAnswer.value) === currentQuestion.answer) {
                score++;
            }
        });

        resultContainer.innerHTML = `<div class="alert alert-info">Votre score : ${score} / ${quizData.length}</div>`;
    }

    buildQuiz();

    submitButton.addEventListener('click', showResults);
});
