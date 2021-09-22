var acc = document.getElementsByClassName("accordion-informacoes-uteis");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {

    this.classList.toggle("active");

 var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }

    var allAcc = document.getElementsByClassName("accordion-informacoes-uteis");
    for (var e = 0; e < allAcc.length; e++) {
    var aPanel = allAcc[e].nextElementSibling;
    aPanel.style.maxHeight = null;
    }   

    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
        panel.style.maxHeight = null;
      } else {
        panel.style.maxHeight = panel.scrollHeight + "px";
      }
    });
}