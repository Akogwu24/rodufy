export const settings = {
  dots: false,
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 2,
  initialSlide: 0,
  lazyLoad: true,
  autoplay: true,
  //   speed: 1000,
  autoplaySpeed: 6000,
  cssEase: 'linear',
  pauseOnHover: true,
  swipeToSlide: true,
  focusOnSelect: true,
  //   next: () => slider.slickNext(),
  //   previous: () => slider.slickPrev(),

  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};
