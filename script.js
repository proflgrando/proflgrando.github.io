document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('contactForm');

    form.addEventListener('submit', (event) => {
        event.preventDefault(); // Impede o envio padrão do formulário

        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        // Validação simples
        if (name && email && message) {
            // Aqui você pode adicionar lógica para enviar os dados para um servidor
            alert(`Obrigado, ${name}! Sua mensagem foi enviada com sucesso.`);
            form.reset(); // Limpa o formulário após o envio
        } else {
            alert('Por favor, preencha todos os campos.');
        }
    });
});
