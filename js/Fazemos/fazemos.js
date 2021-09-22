const nomes = ["Dr.Nuno Santos", "Dra.Maria Custódia", "Dr.Pedro Nogueira", "Dra.Ana Palmeira", "Dr.Tomás Futuro", "Dra.Paula Nogueira", "Dr.João Cunha", "Dra.Ana Cristina", "Dr.Alberto Gonçalves", "Dr.Tomás Rodrigues", "Dra.Joana Aleluia", "Dr.Mário Cunha"];
const nomerandom = nomes[Math.floor(Math.random() * nomes.length)];

const telemovel = ["254 010 255", "235 152 578", "254 332 785", "212 145 578", "254 875 232", "254 875 658", "254 875 965", "287 578 333", "254 546 575", "254 444 254", "254 755 888", "254 111 542"];
const telemovelrandom = telemovel[Math.floor(Math.random() * telemovel.length)];



/*Verificar se tudo está preenchido*/
function verificar_medico()
{
var nome = document.forms["form-medico"]["nome"].value;
var cartao = document.forms["form-medico"]["cartao"].value;
var email = document.forms["form-medico"]["email"].value;
var morada = document.forms["form-medico"]["morada"].value;
var idade = document.forms["form-medico"]["idade"].value;
        if (nome == "" || cartao=="" || email=="" || morada=="" || idade=="")
        {
        alert("Preencha todos os campos");
        }
        else 
        {
                alert("Foi-lhe atribuido um Médico de Família\n\nNome: "+nomerandom+" \nNºTelefone: "+telemovelrandom+" ");
                document.getElementById("form-medico").reset();
        }
}
document.getElementById("enviar").addEventListener("click",verificar_medico);

