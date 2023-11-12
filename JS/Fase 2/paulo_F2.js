function resposta(){
    var resposta = Number(prompt("Qual a resposta certa? (Use apenas números)\n1 - Santo Hambúrguer \n2 - Fome de Leão \n3 - Cariocão"));
    
    while (!resposta){
        var resposta = Number(prompt("Responda 1, 2 ou 3 "));
    } 
    if (resposta === 1){
        alert("Resposta Errada");
        location.href = "../../html/Game over/gameover.html"
    }
    else if (resposta === 2) {
        alert("Resposta Errada");
        location.href = "../../html/Game over/gameover.html"
    }
    else if (resposta === 3) {
        alert("Resposta Certa");
        location.href = "../../html/Fase 3/paulo_F3.html"
    }
    }
    
    