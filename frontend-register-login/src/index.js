const nomeInput = document.getElementById("nome");
const emailInput = document.getElementById("email");
const senhaInput = document.getElementById("senha");
const erroNome = document.getElementById("erroNome");
const erroSenha = document.getElementById("erroSenha");
const erroEmail = document.getElementById("erroEmail");
const msgLogin = document.getElementById("msgLogin");
const secaoLogado = document.getElementById("logado");
const tituloLogado = document.getElementById("tituloLogado");
const sairButton = document.getElementById("sair");
const apagarButton = document.getElementById("apagar");

const cadastrarButton = document.getElementById("cadastrarButton");
const entrarButton = document.getElementById("entrarButton");

cadastrarButton.addEventListener('click', function(event){
    const valido = validarDados();
    if(valido){
        erroEmail.classList.remove("ativo");
        erroNome.classList.remove("ativo");
        erroSenha.classList.remove("ativo");
        localStorage.setItem("nome",nomeInput.value);
        localStorage.setItem("email", emailInput.value);
        localStorage.setItem("senha", senhaInput.value);
    }
});

entrarButton.addEventListener('click', function (event){
    const senhaStorage = localStorage.getItem("senha");
    const emailStorage = localStorage.getItem("email");
    const senhaLogin = document.getElementById("senhaLogin");
    const emailLogin = document.getElementById("emailLogin");

    const valido = validarLogin(senhaLogin, emailLogin, senhaStorage, emailStorage);

    if(valido){
        secaoLogado.classList.add("ativo");
        tituloLogado.innerHTML="Bem-vindo(a), " + localStorage.getItem("nome");
    }
});

sairButton.addEventListener('click', function(event){
    secaoLogado.classList.remove('ativo');
    msgLogin.innerHTML="Você foi deslogado";
    msgLogin.classList.add('ativo');
});

apagarButton.addEventListener('click', function (event){
    secaoLogado.classList.remove('ativo');
    msgLogin.innerHTML="Seu registro foi apagado";
    msgLogin.classList.add('ativo');
    localStorage.removeItem("nome");
    localStorage.removeItem("email");
    localStorage.removeItem("senha");
});

function validarLogin(senhaLogin, emailLogin, senhaStorage, emailStorage){
    let valido = true;
    if(emailLogin.value != emailStorage || senhaLogin.value != senhaStorage){
        msgLogin.innerHTML="E-mail ou senha incorretos";
        msgLogin.classList.add("ativo");
        valido = false;
    }
    return valido;
}

function validarDados(){
    let valido = true;
    if(nomeInput.value==""){
        erroNome.classList.add("ativo");
        valido = false;
    }

    if(senhaInput.value.length < 6){
        erroSenha.classList.add("ativo");
        valido = false;
    }

    if(!emailInput.value.includes('@')){
        erroEmail.classList.add("ativo");
        valido = false;
    }
    return valido;
}