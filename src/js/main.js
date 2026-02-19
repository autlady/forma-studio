$(document).ready(function() {

const menuBtn = document.querySelector('.menu__btn');
const menu = document.querySelector('.menu__list');

if (menuBtn){
  menuBtn.addEventListener('click', function(){

        if(this.classList.contains('active')){
            this.classList.remove('active');
            menu.classList.remove('active');
        }else{
            this.classList.add('active');
            menu.classList.add('active');
        }
    })
}


const swiper = new Swiper('.projects__slider', {

  slidesPerView: 3,
  spaceBetween: 32,
  loop: true,

  navigation: {
    nextEl: '.swiper-button-prev',
    prevEl: '.swiper-button-next',
  },
});
});







