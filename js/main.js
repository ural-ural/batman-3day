const swiper = new Swiper('.main-slider', {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    navigation: {
      nextEl: '.main-slider__arrow',
    },
    breakpoints: {
        375: {
            slidesPerView: 2,
            spaceBetween: 30,
        }
    }
  });