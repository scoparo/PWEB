var jogador;
var maquina;
var opcoes = ["Papel","Tesoura","Pedra"];


function exibirResultado(resultado){
    var resultadoDiv = document.getElementById("opcoes");
    resultadoDiv.innerHTML = resultado;
}

function aleatoria(){
    var indice = Math.floor(Math.random() * 3);
    maquina = opcoes[indice];
}

function vencedor() {
    if (jogador == maquina) {
        exibirResultado("Empate!");
    } else if (jogador == "Pedra") {
        if (maquina == "Tesoura") {
            exibirResultado("Pedra quebra tesoura. Você venceu!");
        } else {
            exibirResultado("Papel cobre a pedra. Você perdeu!");
        }
    } else if (jogador == "Papel") {
        if (maquina == "Pedra") {
            exibirResultado("Papel cobre a pedra. Você venceu!");
        } else {
            exibirResultado("Tesoura corta papel. Você perdeu!");
        }
    } else if (jogador == "Tesoura") {
        if (maquina == "Papel") {
            exibirResultado("Tesoura corta papel. Você venceu!");
        } else {
            exibirResultado("Pedra quebra tesoura. Você perdeu!");
        }
    }
}

function jogar(escolha) {
    jogador = escolha;
    aleatoria();
    vencedor();
}

document.getElementById("Pedra").addEventListener("click", function() { jogar("Pedra"); });
document.getElementById("Papel").addEventListener("click", function() { jogar("Papel"); });
document.getElementById("Tesoura").addEventListener("click", function() { jogar("Tesoura"); });
document.getElementById("Reiniciar").addEventListener("click", function() { window.location.reload(); });