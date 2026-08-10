function mensagem() {
    document.getElementById("projetos").scrollIntoView({
        behavior: "smooth"
    });
}

const botaoTema = document.getElementById("tema");

if (botaoTema) {

    botaoTema.addEventListener("click", function () {

        document.body.classList.toggle("light");

        if (document.body.classList.contains("light")) {
            botaoTema.innerHTML = "🌙 Modo Escuro";
        } else {
            botaoTema.innerHTML = "☀️ Modo Claro";
        }

    });

}
