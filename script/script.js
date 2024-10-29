// Toggle dark mode theme
const toggleThemeButton = document.getElementById('toggle-theme');
const pageTitle = document.getElementById('page-title');
toggleThemeButton.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    document.body.classList.toggle('light-mode');

    if (document.body.classList.contains('dark-mode')) {
        toggleThemeButton.textContent = '☀️ Modo Claro';
        pageTitle.style.color = '#f4f4f4';
    } else {
        toggleThemeButton.textContent = '🌙 Modo Escuro';
        pageTitle.style.color = '#333';
    }
});