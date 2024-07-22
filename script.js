function checkAnswer() {
    const form = document.getElementById('quiz-form');
    const result = document.getElementById('result');
    const answer = form.answer.value;

    if (answer === 'D') {
        result.textContent = 'Correct!';
        result.style.color = 'green';
    } else {
        result.textContent = 'Incorrect. The correct answer is D. Cascading Style Sheet.';
        result.style.color = 'red';
    }
}
