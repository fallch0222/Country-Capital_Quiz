// script.js
document.addEventListener('DOMContentLoaded', () => {
    const countryNameElement = document.getElementById('country-name');
    const capitalInput = document.getElementById('capital-input');
    const submitBtn = document.getElementById('submit-btn');
    const resultContainer = document.getElementById('result-container');
    const resultMessage = document.getElementById('result-message');
    const nextBtn = document.getElementById('next-btn');

    const countries = [
        { name: '대한민국', capital: '서울' },
        { name: '일본', capital: '도쿄' },
        { name: '중국', capital: '베이징' },
        // 추가 나라와 수도를 여기다 넣으세요
    ];

    let currentCountryIndex = 0;

    function showNextCountry() {
        const country = countries[currentCountryIndex];
        countryNameElement.textContent = country.name;
        capitalInput.value = '';
        resultContainer.style.display = 'none';
        capitalInput.focus();
    }

    function checkAnswer() {
        const userAnswer = capitalInput.value.trim();
        const correctAnswer = countries[currentCountryIndex].capital;

        if (userAnswer === correctAnswer) {
            resultMessage.textContent = '정답입니다!';
            resultMessage.style.color = 'green';
        } else {
            resultMessage.textContent = `오답입니다! 정답은 ${correctAnswer}입니다.`;
            resultMessage.style.color = 'red';
        }

        resultContainer.style.display = 'block';
        currentCountryIndex = (currentCountryIndex + 1) % countries.length;
    }

    submitBtn.addEventListener('click', checkAnswer);
    nextBtn.addEventListener('click', showNextCountry);

    showNextCountry();
});
