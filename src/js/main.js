/* CSS imports */
import '/src/tw-input.css';
import "/src/scss/main.scss";

import "./core/core.js";
import "./quiz.js";


document.addEventListener('DOMContentLoaded', () => {
    document.addEventListener('fetchLeadSuccess', (e) => {
        window.location = '/success.html';
    });
});