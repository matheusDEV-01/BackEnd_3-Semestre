//Nome

// function validarFormulario() {

//     let quantidadeErros = 0;

//     quantidadeErros += validarNome();
//     quantidadeErros += validarEmail();
//     quantidadeErros += validarTelefone();
//     quantidadeErros += validarEndereco();

//     if (quantidadeErros > 0) {
//         alert("Existem " + quantidadeErros + " erros no formulário!");
//     } else {
//         alert("Formulário enviado com sucesso!");
//         reiniciaTodasAsBordas();
//     }
// }

function validarFormulario() {
    let nome = document.getElementById("nome").value;
    let quantidadeErros = 0;

    if (nome.trim().length == 0) {
        formError("nome");
        quantidadeErros++;
        //alert("O campo nome é obrigatório!")
    } else {
        reiniciaBorda("nome");
    }

    if (quantidadeErros > 0) {
        alert("Existem" + quantidadeErros + "erros no formulário!");
        quantidadeErros = 0;
    } else {
        alert("Formulário enviado com sucesso!");
        reiniciaTodasAsBordas();
    }


function formError(idCampo) {
    document.getElementById(idCampo).style.border = "2px solid red";
}

function reiniciaBorda(idCampo) {
    document.getElementById(idCampo).style.border = "transparent";
}

//Nome
function validarNome() {
    let nome = document.getElementById("nome").value;

    if (nome.trim() === "") {
        formError("nome");
        return 1;
    } else {
        reiniciaBorda("nome");
        return 0;
    }
}

//Email
function validarEmail() {
    let email = document.getElementById("email").value;

    if (email.trim() === "" || !email.includes("@")) {
        formError("email");
        return 1;
    } else {
        reiniciaBorda("email");
        return 0;
    }
}

//Telefone
function validarTelefone() {
    let telefone = document.getElementById("telefone").value;

    if (telefone.trim() === "") {
        formError("telefone");
        return 1;
    } else {
        reiniciaBorda("telefone");
        return 0;
    }
}

//Endereço
function validarEndereco() {
    let erros = 0;

    let cep = document.getElementById("cep").value;
    let rua = document.getElementById("rua").value;
    let numero = document.getElementById("numero").value;
    let cidade = document.getElementById("cidade").value;
    let estado = document.getElementById("estado").value;

    if (cep.trim().length < 8) {
        formError("cep");
        erros++;
    } else reiniciaBorda("cep");

    if (rua.trim() === "") {
        formError("rua");
        erros++;
    } else reiniciaBorda("rua");

    if (numero.trim() === "") {
        formError("numero");
        erros++;
    } else reiniciaBorda("numero");

    if (cidade.trim() === "") {
        formError("cidade");
        erros++;
    } else reiniciaBorda("cidade");

    if (estado.trim() === "") {
        formError("estado");
        erros++;
    } else reiniciaBorda("estado");

    return erros;
}

}

