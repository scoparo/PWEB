function maiorNum() {
    var Mnum1 = parseFloat(document.getElementById("maiorNumero-num1").value);
    var Mnum2 = parseFloat(document.getElementById("maiorNumero-num2").value);
    var Mnum3 = parseFloat(document.getElementById("maiorNumero-num3").value);
    var maior = Math.max(Mnum1, Mnum2, Mnum3);
    document.getElementById("maiorNumeroResult").innerHTML = "Número maior: " + maior;
}

function numOrdenados() {
    var Onum1 = parseFloat(document.getElementById("ordernarNum-num1").value);
    var Onum2 = parseFloat(document.getElementById("ordernarNum-num2").value);
    var Onum3 = parseFloat(document.getElementById("ordernarNum-num3").value);
    
    var resultado = [Onum1, Onum2, Onum3];

    alert(resultado);

    function ordenacao(a, b) {
      return a- b;
    };
    resultado.sort(ordenacao);

    alert(resultado);
    document.getElementById("resultadoNumerosOrdenados").innerHTML = "Números ordenados: " + resultado;
}