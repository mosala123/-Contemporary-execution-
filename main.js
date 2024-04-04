// swiper home 
var swiper = new Swiper(".mySwiper", {
  pagination: {
    el: ".swiper-pagination",
    type: "progressbar",
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

// -------------------- 
 
// --------------------------------------------------------
  // swiper two 
  var swiper = new Swiper('.foursections .swiper-container', {
    slidesPerView: 1,
    loop: true,
    autoplay: {
      delay: 3000, // milliseconds
      disableOnInteraction: false,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  });
  

  // 
// -------------------------
 
// show the images 

 
var swiper = new Swiper('.eight .swiper-container', {
  loop: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});





// المشاريع 

function showOverlay(element) {
  var overlay = element.querySelector('.overlay');
  overlay.style.display = 'flex';
}

function hideOverlay(element) {
  var overlay = element.querySelector('.overlay');
  overlay.style.display = 'none';
}


// -----------------------------------
 