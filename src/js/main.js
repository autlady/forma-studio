document.addEventListener("DOMContentLoaded", function () {

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


const swiperProd = new Swiper('.projects__slider', {

  slidesPerView: 3,
  spaceBetween: 20,
  loop: true,

  navigation: {
    nextEl: '.slider-arrow-next',
    prevEl: '.slider-arrow-prev',
  },

  breakpoints: {
    650: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    }
  }
});
});







