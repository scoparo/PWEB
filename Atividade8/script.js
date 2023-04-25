var idade = new Array();
var sexo = new Array();
var avaliacao = new Array();

function gravarPesquisa() {
    idade.push(parseInt(document.getElementById("idade").value));
    sexo.push(document.querySelector('input[name="sexo"]:checked').value);
    opniao.push(parseInt(document.getElementById("avaliacao").value));

    console.log(idade);
    console.log(sexo);
    console.log(idade.length);
}

function mostrarResultados() {
    var soma = 0, maisNova, maisVelha, mulheres = 0, homens = 0, otimo = 0, pessimo = 0;

    for (var index = 0; index < idade.length; index++) {

        soma += idade[index];

        if (maisVelha == undefined && maisNova == undefined) {
            maisVelha = idade[index];
            maisNova = idade[index];
        }

        if (maisNova > idade[index]) {
            maisNova = idade[index];
        }

        if (maisVelha < idade[index]) {
            maisVelha = idade[index];
        }

        if (opniao[index] == 1) {
            pessimo += 1;
        } else if (opniao[index] == 4 || opniao[index] == 3) {
            otimo += 1;
        }

        if (sexo[index] == "feminino") {
            mulheres += 1;
        } else {
            homens += 1;
        }
    }

    var media = (soma / idade.length).toFixed(2);
    var percentOtimo = ((otimo / idade.length) * 100).toFixed(2);
    
    document.getElementById("mediaIdade").textContent = ('Média de idades: ' + media);
    document.getElementById("pessoaMaisVelha").textContent =('pessoa mais velha: ' + maisVelha);
    document.getElementById("pessoaMaisNova").textContent = ('Pessoa mais nova: ' + maisNova);
    document.getElementById("qntPessimos").textContent = ('Quantos péssimos o filme teve: ' + pessimo);
    document.getElementById("qntOtimos").textContent = ('Quantos ótimos o filme teve: ' +  percentOtimo + "%");
    document.getElementById("qntMulheres").textContent = ('Número de mulheres: ' + mulheres);
    document.getElementById("qntHomens").textContent = ('Número de homens: ' + homens);


    console.log(idade);
    console.log(sexo);
    console.log(idade.length);
    console.log(media);
    console.log(mulheres);
}