/// ---cлайдер---///

$(function(){
    $('.bike-slider, .slider__items').slick({
        arrows:false,
        dots:true,
        fade:true,
        autoplay: true,
        autoplaySpeed: 2000,
    });
    
});

///---модальное окно---////


const button = document.querySelector('[data-modal-logo]');
const modal = document.querySelector('[data-modal]');
const btnClose = document.querySelector('[data-modal-close]');

button.addEventListener('click', function () {
  modal.classList.remove('hidden');
})

btnClose.addEventListener('click', function () {
  modal.classList.add('hidden');
})


document.addEventListener('DOMContentLoaded', function () {
  var elems = document.querySelectorAll('.parallax');
  var instances = M.Parallax.init(elems, options);
});

// Or with jQuery

$(document).ready(function () {
  $('.parallax').parallax();
});


instance.destroy();
