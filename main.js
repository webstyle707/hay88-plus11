
var swiper = new Swiper(".mySwiper", {
  spaceBetween: 30,
  centeredSlides: true,
  slidesPerView: 3,
  // effect: "cube",
  grabCursor: true,
  loop: true,
  autoplay: {
      delay: 5000,
      disableOnInteraction: false,
  },
  breakpoints: {
      320: {
      slidesPerView: 1,
      },
      480: {
      slidesPerView: 3,
      },
  },
  pagination: {
      el: ".swiper-pagination",
      clickable: true,
  },
  cubeEffect: {
      shadow: true,
      slideShadows: true,
      shadowOffset: 20,
      shadowScale: 0.94,
  },
  on: {
      autoplayTimeLeft(s, time, progress) {
          const currentSlide = s.slides[s.activeIndex];
          const progressBar = currentSlide.querySelector(".progressBar");
          if (progressBar) {
              const widthPercentage = parseFloat(progress) * 100;
              progressBar.style.width = widthPercentage + "%";
          }
      },
  },
});




const HandleHiddenMenu = () => {
  document.getElementById("framMenu").style.width = "0";
  document.getElementById("framMenu").style.transition = "all 0.3s ease";
  document.getElementById("framMenu").style.left = "-100%";
  document.getElementById("menu").style.left = "-100%";
  document.getElementById("menu").style.width = "0%";
  document.getElementById("menu").style.transition =
    "all 1s ease";

};
const HandleShowMenu = () => {
  document.getElementById("menu").style.left = "0%";
  document.getElementById("menu").style.transition =
    "all 0.4s ease";
  document.getElementById("menu").style.width = "100%";
  document.getElementById("framMenu").style.width = "66.666667%";
  document.getElementById("framMenu").style.transition = "all 0.6s ease";
  document.getElementById("framMenu").style.left = "0%";

};
window.addEventListener("scroll", function () {
  var header = document.querySelector("header");
  header.classList.toggle("sticky", window.scrollY > 220);
});


//=================>  click button scroll to top
var scrollToTopBtn = document.getElementById("scrollToTopBtn");
// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    scrollToTopBtn.style.display = "block";
  } else {
    scrollToTopBtn.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document with animation
function scrollToTop() {
  // Scroll to the top of the document with animation
  var currentScroll = document.documentElement.scrollTop || document.body.scrollTop;
  if (currentScroll > 0) {
    window.requestAnimationFrame(scrollToTop);
    window.scrollTo(0, currentScroll - (currentScroll / 8));
  }
}







function clearAllClassNames() {
  var cards = document.querySelectorAll('.scaleAnimationCard');
  cards.forEach(function(card) {
    card.classList.remove('scaleAnimationCard');
  });
}


function addAllClassNames() {
  var Addcard = document.querySelectorAll('.Addcard');
  Addcard.forEach(function(Addcard) {
    Addcard.classList.add('scaleAnimationCard');
  });
}