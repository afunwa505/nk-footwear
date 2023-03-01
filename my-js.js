function mouseov() {
    document.querySelector('.product ol').style.display="block";
    document.querySelector('nav').style.height="200px";
}

function mouseou(){
    document.querySelector('.product ol').style.display="none";
    document.querySelector('nav').style.height="120px";
}
var slideIndex = 0;
showSlides ();
function showSlides (){
    var i;
    var slides = document.getElementsByClassName('myslides');
    for(i = 0; i< slides.length; i++) {
        slides[i].style.display = 'none';
    }
    slideIndex++;
    if(slideIndex >slides.length){
        slideIndex = 1;
    }
    slides[slideIndex-1].style.display = 'block';
    setTimeout(showSlides,5000);
}

var IndexSlide = 0;
showSlide ();
function showSlide (){
    var j;
    var slide = document.getElementsByClassName('mine');
    for(j = 0; j< slide.length; j++) {
        slide[j].style.display = 'none';
    }
    IndexSlide++;
    if(IndexSlide >slide.length){
        IndexSlide = 1;
    }
    slide[IndexSlide-1].style.display = 'block';
    setTimeout(showSlide,10000);
}

const date = new date();
document.querySelector('.dates').innerHTML = date.getFullYear;
