// Base de preguntas de cultura general
const questions = [
    { question: "¿Quién pintó la Mona Lisa?", options: ["Leonardo da Vinci", "Pablo Picasso", "Vincent van Gogh"], answer: 0 },
    { question: "¿Cuál es la capital de Francia?", options: ["Madrid", "Berlín", "París"], answer: 2 },
    { question: "¿En qué año llegó el hombre a la luna?", options: ["1969", "1959", "1972"], answer: 0 },
    { question: "¿Qué planeta es conocido como el planeta rojo?", options: ["Venus", "Marte", "Júpiter"], answer: 1 },
    { question: "¿Quién escribió 'Don Quijote de la Mancha'?", options: ["Miguel de Cervantes", "Lope de Vega", "Tirso de Molina"], answer: 0 },
    { question: "¿Cuál es el río más largo del mundo?", options: ["Amazonas", "Nilo", "Yangtsé"], answer: 0 },
    { question: "¿Qué país inventó el sushi?", options: ["China", "Japón", "Corea"], answer: 1 },
    { question: "¿En qué continente está Egipto?", options: ["Asia", "África", "Europa"], answer: 1 },
    { question: "¿Cuántos continentes existen?", options: ["5", "6", "7"], answer: 2 },
    { question: "¿Qué instrumento musical tiene teclas?", options: ["Guitarra", "Piano", "Batería"], answer: 1 },
    { question: "¿En qué año terminó la Segunda Guerra Mundial?", options: ["1945", "1940", "1950"], answer: 0 },
    { question: "¿Cuál es el océano más grande?", options: ["Atlántico", "Índico", "Pacífico"], answer: 2 },
    { question: "¿Qué es un helado?", options: ["Comida", "Bebida", "Postre"], answer: 2 },
    { question: "¿Cuántos jugadores hay en un equipo de fútbol?", options: ["9", "10", "11"], answer: 2 },
    { question: "¿Cuál es el idioma más hablado del mundo?", options: ["Inglés", "Chino Mandarín", "Español"], answer: 1 },
    { question: "¿Qué significa la palabra 'salud'?", options: ["Enfermedad", "Bienestar", "Comida"], answer: 1 },
    { question: "¿Qué instrumento se toca con arco?", options: ["Guitarra", "Violín", "Bajo"], answer: 1 },
    { question: "¿Cuánto dura un minuto?", options: ["60 segundos", "100 segundos", "90 segundos"], answer: 0 },
    { question: "¿Qué es la Torre Eiffel?", options: ["Un museo", "Una torre", "Un puente"], answer: 1 },
    { question: "¿Cuántos meses tiene un año?", options: ["12", "10", "14"], answer: 0 },
    { question: "¿Qué animal es conocido como el rey de la selva?", options: ["León", "Tigre", "Elefante"], answer: 0 }
];

let currentQuestionIndex = 0;
let score = 0;

function displayQuestion() {
    // Mostrar la pregunta y las opciones
    const questionElement = document.getElementById('question');
    const optionsElement = document.getElementById('options');
    
    const currentQuestion = questions[currentQuestionIndex];
    questionElement.textContent = currentQuestion.question;
    
    optionsElement.innerHTML = ''; // Limpiar las opciones anteriores
    currentQuestion.options.forEach((option, index) => {
        const button = document.createElement('button');
        button.textContent = option;
        button.onclick = () => checkAnswer(index);
        optionsElement.appendChild(button);
    });
}

function checkAnswer(selectedIndex) {
    // Verificar si la respuesta seleccionada es correcta
    const currentQuestion = questions[currentQuestionIndex];
    if (selectedIndex === currentQuestion.answer) {
        score++;
    }

    currentQuestionIndex++;

    if (currentQuestionIndex < questions.length) {
        displayQuestion();
    } else {
        showResults();
    }
}

function showResults() {
    // Mostrar los resultados al finalizar el juego
    const resultSection = document.getElementById('result-section');
    const resultMessage = document.getElementById('result-message');
    
    const percentage = (score / questions.length) * 100;
    
    resultMessage.textContent = `Tu puntuación es: ${score} de ${questions.length} (${percentage.toFixed(2)}%)`;
    
    if (percentage >= 70) {
        resultMessage.textContent += ' ¡Felicidades, has superado el 70%! 🎉';
    } else {
        resultMessage.textContent += ' ¡Sigue intentándolo! 💪';
    }
    
    // Ocultar la sección del quiz y mostrar los resultados
    document.getElementById('quiz-section').style.display = 'none';
    resultSection.style.display = 'block';
}

function restartGame() {
    // Reiniciar el juego
    currentQuestionIndex = 0;
    score = 0;
    document.getElementById('quiz-section').style.display = 'block';
    document.getElementById('result-section').style.display = 'none';
    displayQuestion();
}

// Inicializar el juego al cargar la página
window.onload = function() {
    displayQuestion();
};
