while(true){
    let jogador1 = "pedra";
    let jogador2 = "tesoura";

    if (jogador1 == "pedra") {
        if (jogador2 == "tesoura") {
            console.log("Pedra quebra tesoura");
            break;
        } else if (jogador2 == "papel"){
            console.log("Papel envolve a Pedra");
            break;
        } else if (jogador2 == "pedra") {
            console.log("Empate");
            break;    
        }

    }
    else if (jogador1 == "tesoura") {
        if (jogador2 == "pedra") {
            console.log("Pedra quebra tesoura");
            break;
        } else if (jogador2 == papel){
            console.log("tesoura corta papel");
            break;
        } else if (jogador2 == "tesoura") {
            console.log("Empate"); 
            break;           
        }
    }

    else if (jogador1 == "papel"){
        if (jogador2 == "pedra") {
            console.log("Papel envolve pedra");
            break;
        }else if (jogador2 == "tesoura") {
            console.log("Tesoura corta papel");
            break;
        }else if (jogador2 == "papel")  {
           console.log("Empate"); 
           break;          
        }

    }

}
