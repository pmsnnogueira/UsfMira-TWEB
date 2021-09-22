var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
  setTimeout(10000)
}

function menosslide(n) {
  showSlides(slideIndex -= n);
  setTimeout(10000)
}

function currentSlide(n) {
  showSlides(slideIndex = n);
  setTimeout(10000)
}



function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 10000); //segundos
}




/*Abrir pagina ao clicar no DIV*/
function nav(page) {   
  window.location.href=page
}

/*Slides Pequenos*/

/*Slide pequeno 1*/

var slide_pequeno_1 = 1;
showslide_pequeno_1(slide_pequeno_1);

showslide_pequeno_1();

function showslide_pequeno_1() {
  var i;
  var slides = document.getElementsByClassName("slides_pequenos_1");
  var dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slide_pequeno_1++;
  if (slide_pequeno_1 > slides.length) {slide_pequeno_1 = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slide_pequeno_1-1].style.display = "block";  
  dots[slide_pequeno_1-1].className += " active";
  setTimeout(showslide_pequeno_1, 3200); //segundos
}

        //Slide Pequeno 2

var slide_pequeno_2 = 1;
showslide_pequeno_2(slide_pequeno_2);

function showslide_pequeno_2() {
  var i;
  var slides = document.getElementsByClassName("slides_pequenos_2");
  var dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slide_pequeno_2++;
  if (slide_pequeno_2 > slides.length) {slide_pequeno_2 = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slide_pequeno_2-1].style.display = "block";  
  dots[slide_pequeno_2-1].className += " active";
  setTimeout(showslide_pequeno_2, 4200); //segundos
}


    //SLIDE Pequeno 3
    
    var slides_pequenos_3 = 1;
showslides_pequenos_3(slides_pequenos_3);

function showslides_pequenos_3() {
  var i;
  var slides = document.getElementsByClassName("slides_pequenos_3");
  var dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slides_pequenos_3++;
  if (slides_pequenos_3 > slides.length) {slides_pequenos_3 = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slides_pequenos_3-1].style.display = "block";  
  dots[slides_pequenos_3-1].className += " active";
  setTimeout(showslides_pequenos_3, 4500); //segundos
}