function validar() {
    var nome = document.formuser.nome_cad.value;
    var email = formuser.email_cad.value;
    var senha = formuser.password.value;
    var confirmar_senha = formuser.passconfirmation.value;
    var idade = formuser.idade_cad.value;
    var endereco = formuser.endereco_cad.value;
    var cpf = formuser.cpf_cad.value;
    var telefone = formuser.tell_cad.value;

    if (nome == "") {
        alert('Preencha os campos corretamente');
        formuser.nome.focus();
        return false;
    }
    if (email == "") {
        alert('Preencha os campos corretamente');
        formuser.email.focus();
        return false;
    }
    if (senha == "") {
        alert('Preencha os campos corretamente');
        formuser.senha.focus();
        return false;
    } if (confirmar_senha == "") {
        alert('Preencha os campos corretamente');
        formuser.confirmar_senha.focus();
        return false;
    }
}

function validar1(){
    var email,cpf

    cpf = document.getElementById("log_cpf").value;
    email = document.getElementById("email_login").value;

    if(email.length == 0 || email.indexOf("@")<0){
        alert("Preencha o campo Email Corretamente");
        document.getElementById("email_login").style.backgroundColor="#BB0A21";
        document.getElementById("email_login").focus();
        email = document.getElementById("email_login").value= "";
        return false;
    }
    if(cpf.length == 0 ){
        alert("Preencha o campo CPF ");
        document.getElementById("log_cpf").style.backgroundColor="#BB0A21";
        document.getElementById("log_cpf").focus();
        
        return false;
    }
    if(cpf.length >= 11 ){
        alert("Preencha o campo CPF Corretamente ");
        document.getElementById("log_cpf").style.backgroundColor="#BB0A21";
        document.getElementById("log_cpf").focus();
        return false;
    }
    document.login.submit();
}