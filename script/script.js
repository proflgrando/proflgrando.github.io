// Toggle dark mode theme
const toggleThemeButton = document.getElementById('toggle-theme');
const pageTitle = document.getElementById('page-title');
toggleThemeButton.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    document.body.classList.toggle('light-mode');

    if (document.body.classList.contains('dark-mode')) {
        toggleThemeButton.textContent = '☀️ Claro';
        pageTitle.style.color = '#f4f4f4';
    } else {
        toggleThemeButton.textContent = '🌙 Escuro';
        pageTitle.style.color = '#333';
    }
});
 
function alterarTamanho(acao) {
    const body = document.body;
    const tamanhoAtual = parseFloat(window.getComputedStyle(body).fontSize);
    
    if (acao === 'aumentar') {
        body.style.fontSize = (tamanhoAtual + 2) + 'px';
    } else if (acao === 'diminuir') {
        body.style.fontSize = (tamanhoAtual - 2) + 'px';
    }
}

// Adiciona os event listeners aos botões
document.getElementById('aumentar').addEventListener('click', function() {
    alterarTamanho('aumentar');
});

document.getElementById('diminuir').addEventListener('click', function() {
    alterarTamanho('diminuir');
});

// https://jsonplaceholder.typicode.com/

document.addEventListener("DOMContentLoaded", () => {
    const userList = document.getElementById('user-list');
    const fetchButton = document.getElementById('fetch-users');

    fetchButton.addEventListener('click', () => {
        const limit = parseInt(document.getElementById('user-count').value, 10); // Pega o valor do input

        // Limpa a lista antes de buscar novos usuários
        userList.innerHTML = '';

        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(data => {
                const limitedData = data.slice(0, limit); // Limita os resultados

                limitedData.forEach(user => {
                    const listItem = document.createElement('li');
                    listItem.textContent = `${user.name} - ${user.email}`;
                    userList.appendChild(listItem);
                });
            })
            .catch(error => console.error('Erro ao carregar usuários:', error));
    });
});





