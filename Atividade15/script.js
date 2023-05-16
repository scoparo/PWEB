function carregarCurso() {
    var confirmacao = confirm("A página do curso será aberta, deseja mesmo prosseguir?");

    if(confirmacao) {
        var curso = document.getElementById("cursos").value;
        standardWindow = window.open(`http://fatecsorocaba.edu.br/curso_${curso}.asp`, "width = 600", "height = 300");
    }
}