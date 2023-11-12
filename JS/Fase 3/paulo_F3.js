function resposta(){
    var resposta = Number(prompt("O Paulo deve fazer?\n1- Nova Friburgo\n2- Vassouras"));
    
    while (!resposta){
        var resposta = Number(prompt("Responda 1 ou 2 "));
    } 
    if (resposta === 1){
        alert("Resposta Errada");
        location.href = "../../html/Game over/gameover.html";
        
    }
    else if (resposta === 2) {
        alert("Resposta Certa");
        location.href = "../../html/Fase 4/F4.html";
    }
    }
    
    