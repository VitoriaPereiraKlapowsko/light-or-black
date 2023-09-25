'use strict';

let visitCount = parseInt(localStorage.getItem('visitCount')) || 0;
visitCount++;
localStorage.setItem('visitCount', visitCount.toString());

const msgElement = document.getElementById('msg');
msgElement.textContent = `Total de visitas: ${visitCount}`;

const switcher = document.querySelector('.btn');
const body = document.body;

const currentTheme = localStorage.getItem('theme');

if (currentTheme) {
    body.classList.add(currentTheme);
} else {
    body.classList.add('light-theme'); 
}

switcher.addEventListener('click', function () {
    if (body.classList.contains('light-theme')) {
        body.classList.remove('light-theme');
        body.classList.add('dark-theme');
        localStorage.setItem('theme', 'dark-theme');
        switcher.textContent = 'Light'; 
    } else {
        body.classList.remove('dark-theme');
        body.classList.add('light-theme');
        localStorage.setItem('theme', 'light-theme');
        switcher.textContent = 'Dark'; 
    }
});
