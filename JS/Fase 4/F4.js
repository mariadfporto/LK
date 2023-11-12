function resposta(){
    var resposta = Number(prompt("Qual a resposta\n1- Boku no Hero \n2- All Might "));
    
    while (!resposta){
        var resposta = Number(prompt("Responda 1 ou 2 "));
    } 
    if (resposta === 1){
        alert("Resposta Certa");
        location.href = "../../html/Fase 5/F5.html";
        
    }
    else if (resposta === 2) {
        alert("Resposta Errada");
        location.href = "../../html/Game over/gameover.html";
    }
    }
    