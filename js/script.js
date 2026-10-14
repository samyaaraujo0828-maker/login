


const usuario = document.querySelector("#txUsuario");
const senha = document.querySelector("#txSenha");
const confirmarSenha = document.querySelector("#txConfirmarSenha");

const mensagemSenha = document.querySelector("#mensagemSenha");
const mensagemErro = document.querySelector("#mensagemErro");
const resultado = document.querySelector("#resultado");

senha.addEventListener("input", (tx) => {
    let valor = tx.target.value;

    senha.classList.remove("fraca");
    senha.classList.remove("intermediaria");
    senha.classList.remove("forte");

    mensagemSenha.classList.remove("texto-fraco");
    mensagemSenha.classList.remove("texto-intermediario");
    mensagemSenha.classList.remove("texto-forte");

    if (valor.length < 3) {
        senha.classList.add("fraca");
        mensagemSenha.classList.add("texto-fraco");
        mensagemSenha.textContent = "Senha fraca";
    }
    else if (valor.length > 3 && valor.length < 6) {
        senha.classList.add("intermediaria");
        mensagemSenha.classList.add("texto-intermediario");
        mensagemSenha.textContent = "Senha intermediária";
    }
    else {
        senha.classList.add("forte");
        mensagemSenha.classList.add("texto-forte");
        mensagemSenha.textContent = "Senha forte";
    }
});

document.querySelector("#formLogin").addEventListener("submit", (evento) => {
    evento.preventDefault();

    let nome = usuario.value;
    let valorSenha = senha.value;
    let confirmacao = confirmarSenha.value;

    mensagemErro.textContent = "";
    resultado.textContent = "";

    if (nome.length < 3) {
        mensagemErro.textContent =
            "O usuário deve ter no mínimo 3 caracteres.";
    }
    else if (valorSenha !== confirmacao) {
        mensagemErro.textContent =
            "As senhas devem ser iguais.";
    }
    else if (valorSenha.length === 0) {
        mensagemErro.textContent =
            "Preencha o campo de senha.";
    }
   
});

bt.addEventListener('click',function(){
    //alert("Teste")
    window.location.href = "dashboard.html"   
})