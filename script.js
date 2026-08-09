function mensagem() {
    document.getElementById("projetos").scrollIntoView({
        behavior: "smooth"
    });
}

const botaoTema = document.getElementById("tema");

botaoTema.addEventListener("click", function() {

    document.body.classList.toggle("claro");

    if (document.body.classList.contains("claro")) {
        botaoTema.innerHTML = "🌙 Modo Escuro";
    } else {
        botaoTema.innerHTML = "☀️ Modo Claro";
    }

});
