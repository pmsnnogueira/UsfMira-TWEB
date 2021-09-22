const toggle = document.querySelector(".barra");
const menu = document.querySelector(".menu");
/* menu tele*/
function toggleMenu() {
    if (menu.classList.contains("active")) {
        menu.classList.remove("active");
    
    } else {
        menu.classList.add("active");
    }
}
toggle.addEventListener("click", toggleMenu, false);





var BtnCima = document.getElementById("Btn-cima");

window.onscroll = function() {scroll()};

function scroll() {
  if (document.body.scrollTop > 10 || document.documentElement.scrollTop > 10) {
    BtnCima.style.display = "block";
  } else {
    BtnCima.style.display = "none";
  }
}

function irparacima() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}