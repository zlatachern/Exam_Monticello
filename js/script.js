//Navigation

const app = function () {
  let body = undefined;
  let menu = undefined;
  let menuItems = undefined;
  let init = function init() {
    body = document.querySelector('body');
    menu = document.querySelector('.menu-icon');
    menuItems = document.querySelectorAll('.nav__list-item');
    applyListeners();
  };
  const applyListeners = function applyListeners() {
    menu.addEventListener('click', function () {
      return toggleClass(body, 'nav-active');
    });
  };
  const toggleClass = function toggleClass(element, stringClass) {
    if (element.classList.contains(stringClass)) element.classList.remove(stringClass);else element.classList.add(stringClass);
  };
  init();
}();

// Slider Main

$(document).ready(function() {
  $('.main-slider').find('.slider__item:first').addClass('active');
  $('.scroll-dots').find('.dot:first').addClass('active');

  $('.dot').click(function() {
    var index = $(this).index();
    $('.slider__item').removeClass('active');
    $('.slider__item').eq(index).addClass('active');
    $('.dot').removeClass('active');
    $(this).addClass('active');
  });
});

// Slider second

$(document).ready(function() {
  $('.cards__slider').slick({
    arrows: true,
    dots: true,
    slidesToShow: 3,
    slidesToSkroll: 1,
    speed: 1000,
    autoplay: true,
    autoplaySpeed: 4000,
    pauseOnFocus: true,
    pauseOnHover: true,
    pauseOnDotsHover: true,
    draggable: true,
    swipe: true,
    touchThreshold: 10,
    infinite: true,
    responsive: [{
      breakpoint: 1000,
      settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          }
        }
      ]

  });
});

// Button Form 

document.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById('myForm');
  form.addEventListener('submit', function(event) {
    event.preventDefault(); 

    const submitButton = form.querySelector('.button--form');
    submitButton.textContent = "THANKS!";
    submitButton.classList.add('sent--button');

    const formData = new FormData(form);
    const formValues = {};

    for (let [key, value] of formData.entries()) {
      formValues[key] = value;
    }

    localStorage.setItem('formData', JSON.stringify(formValues));
  });
});


