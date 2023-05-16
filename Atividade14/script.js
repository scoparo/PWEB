function submeterForms() {
    var nomeUsuario = document.formSubmit.elements[0].value;
    var emailUsuario = document.formSubmit.elements[1].value;
    var comentario = document.formSubmit.elements[2].value;
    var radioSim = document.getElementById('rSim');
    var radioNao = document.getElementById('rNao');

    validarNome(nomeUsuario);
    validarEmail(emailUsuario);
    validarComentario(comentario);
    validarPesquisa(radioSim, radioNao);
}

function validarNome(nomeUsuarioF) {
    if(nomeUsuarioF.length < 10) {
        alert("Nome deve ter no mínimo 10 caracteres!!")
    }
}

function validarEmail(emailUsuarioF) {
    if(emailUsuarioF.indexOf("@") < 0) {
        alert("E-mail deve conter um @!")
    } else if(emailUsuarioF.indexOf(".") < 0) {
        alert("E-mail deve conter um ponto (.)!")
    }
}

function validarComentario(comentarioF) {
    if(comentarioF.length < 20) {
        alert("Comentário deve ter no mínimo 20 caracteres!!")
    }
}

function validarPesquisa(rSimF, rNaoF) {
    if(rSimF.checked == true) {
        alert("Volte sempre a está página");
    } else if (rNaoF.checked == true) {
        alert("Que bom que você voltou a visitar esta página!");
    } else {
        alert("Selecione ao menos uma das opções!");
    }
}