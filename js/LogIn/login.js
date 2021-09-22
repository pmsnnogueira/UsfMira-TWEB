var btnentrarConta = document.querySelector("#entrarConta");
var btncriarConta = document.querySelector("#criarConta");

var body = document.querySelector("body");



btnentrarConta.addEventListener("click",function(){
    body.className = "entrar-Conta-js";
});

btncriarConta.addEventListener("click",function(){
    body.className = "criar-Conta-js";
});






//LOG IN PEQUENO



function login(){
    document.getElementById("content terceira-content").style.visibility="hidden";
    document.getElementById("content quarta-content").style.visibility="visible";
}
document.getElementById("btn-mudar_para_criar").addEventListener("click",login)

function criar(){
    document.getElementById("content quarta-content").style.visibility="hidden";
    document.getElementById("content terceira-content").style.visibility="visible";
}
document.getElementById("btn-mudar_para_entrar").addEventListener("click",criar)






function validarcriar(){
    var nome = document.forms["form-criar"]["nome_criar"].value;
    var email = document.forms["form-criar"]["email_criar"].value;
    var pass = document.forms["form-criar"]["pass_criar"].value;
     if(email=="" || nome==""||pass==""){
        alert("Insira todos os dados");
    }
    else{
        alert("Utilizador: "+nome+"\nEmail: "+email+"\nCriado com sucesso!");
        window.location.href = "verificacaoLogin.html";
        MudarTexto();
    }   
  
}



function validarlogin(){
    var email = document.forms["form-entrar"]["email_login"].value;
    var pass = document.forms["form-entrar"]["pass_login"].value;
    
    if(email==""||pass==""){
        alert("Insira todos os dados");
    }
    else{
        alert("Utilizador com email: "+email+" autenticado!!");
        done=1;
        window.location.href = "verificacaoLogin.html";
        MudarTexto();
    }   
}





function validarcriar2(){
    var nome = document.forms["form-criar2"]["nome_criar_2"].value;
    var email = document.forms["form-criar2"]["email_criar_2"].value;
    var pass = document.forms["form-criar2"]["pass_criar_2"].value;
     if(email=="" || nome==""||pass==""){
        alert("Insira todos os dados");
    }
    else{
        alert("Utilizador: "+nome+"\nEmail: "+email+"\nCriado com sucesso!");
        window.location.href = "verificacaoLogin.html";
        MudarTexto();
    }   
  
}



function validarlogin2(){
    var email = document.forms["form-entrar2"]["email_login_2"].value;
    var pass = document.forms["form-entrar2"]["pass_login_2"].value;
    
    if(email==""|| pass==""){
        alert("Insira todos os dados");
    }
    else{
        alert("Utilizador com email: "+email+" autenticado!");
        done=1;
        window.location.href = "verificacaoLogin.html";
        MudarTexto();
    }   
}



