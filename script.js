document.addEventListener("DOMContentLoaded", () => {
    
    // Alteração do tema entre claro/escuro
    //-------------------------------------------------------------------
    const themeToggle = document.getElementById("theme-toggle");
    const themeRoot = document.getElementById("theme-root");

    themeToggle.addEventListener("click", () => {
        // Altera a classe na tag body para mudar o estilo da página
        if (themeRoot.classList.contains("light-theme")) {
            themeRoot.classList.remove("light-theme");
            themeRoot.classList.add("dark-theme");
        } else {
            themeRoot.classList.remove("dark-theme");
            themeRoot.classList.add("light-theme");
        }
    });

    // Validação e simulação do formulário de contato
    //-------------------------------------------------------------------
    const form = document.getElementById("contact-form");
    const feedback = document.getElementById("form-feedback");

    form.addEventListener("submit", (event) => {
        // evita que a página recarregue ao tentar submeter o formulário
        event.preventDefault(); 

        // limpa os espaços brancos no input do usuário
        const nome = document.getElementById("nome").value.trim();
        const email = document.getElementById("email").value.trim();
        const mensagem = document.getElementById("mensagem").value.trim();

        // expressão regular (Regex) para validação de e-mail
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        // limpa estados de feedback anteriores
        feedback.className = "hidden";
        feedback.textContent = "";

        // validação de campos vazios
        if (nome === "" || email === "" || mensagem === "") {
            feedback.textContent = "Erro: Todos os campos são obrigatórios.";
            feedback.className = "error";
            return; // interrompe a execução caso falte dados
        }

        // validação do formato do e-mail via Regex
        if (!emailRegex.test(email)) {
            feedback.textContent = "Erro: Por favor, insira um e-mail válido.";
            feedback.className = "error";
            return; 
        }

        // simulação de envio com sucesso
        feedback.textContent = "Mensagem enviada com sucesso!";
        feedback.className = "success";

        // exibe também em formato de alerta nativo conforme sugestão da atividade
        alert("Mensagem enviada com sucesso!");

        // reseta os campos do formulário após o sucesso
        form.reset();
    });
});
