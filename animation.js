let slideNumber = 1;

slideShows(slideNumber);

function slideNow(n) {
    slideShows(slideNumber = n);
}

function slideShows(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");

  if (n > slides.length) {
    slideNumber = 1
  }

  if (n < 1) {
    slideNumber = slides.length
  }

  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }

  slides[slideNumber-1].style.display = "block";
  dots[slideNumber-1].className += " active";
}