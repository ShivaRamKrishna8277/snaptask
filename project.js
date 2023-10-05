var slideIndex = 0;
var slides = document.querySelectorAll('.slider img');

function showSlide(n) {
  if (n >= slides.length) {
    slideIndex = 0;
  } else if (n < 0) {
    slideIndex = slides.length - 1;
  }

  for (var i = 0; i < slides.length; i++) {
    slides[i].style.transform = "translateX(-" + (slideIndex * 100) + "%)";
  }
}

function nextSlide() {
  showSlide(slideIndex += 1);
}

function prevSlide() {
  showSlide(slideIndex -= 1);
}

showSlide(slideIndex);
