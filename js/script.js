
const bt = document.querySelector("#btVerificar")

const txPass = document.querySelector("#txSenha")

const msg = document.querySelector("#mensagem")

txPass.addEventListener('input',(tx)=>{
    //console.log(tx.target.value)

    const texto = tx.target.value

    //console.log(texto.length)

    if(texto.length < 4){
        console.log("Senha Fraca")
        msg.classList.remove("azul")
        msg.classList.add("vermelho")    
    }
    else if(texto.length < 8){
        msg.classList.remove("vermelho")
        msg.classList.add("azul")
        console.log("Senha Média")
    }
    else{
        console.log("Senha Forte")
    }
})

bt.addEventListener('click',function(){
    //alert("Teste")
    window.location.href = "dashboard.html"   
})