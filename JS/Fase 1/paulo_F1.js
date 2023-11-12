function resposta() {
    var resposta = Number(
        prompt(
            "Qual a resposta? (Use apenas números) \n 1 - dia 12 \n 2 -  dia 10 \n 3 - dia 25"
        )
    );

    while (!resposta) {
        var resposta = Number(prompt("Responda 1, 2 ou 3"));
    }

    if (resposta === 1) {
        alert("Resposta certa");
        location.href = "../../html/Fase 2/paulo_F2.html";
    } else if (resposta === 2) {
        alert("Resposta ERRADA");
        location.href = "../../html/Game over/gameover.html";
    } else if (resposta === 3) {
        alert("Resposta Errada");
        location.href = "../../html/Game over/gameover.html";
    }
}
