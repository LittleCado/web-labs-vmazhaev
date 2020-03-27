$(document).ready(function () {
    $('.slider').slick({
        speed: 300,
        slidesToShow: 4,
        infinite: true,
        responsive: [
          {
            breakpoint: 1440,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
              dots: true
            }
          },
          {
            breakpoint: 1000,
            settings: {
              slidesToShow: 2,
              dots: true
            }
          },
          {
            breakpoint: 680,
            settings: {
              slidesToShow: 1,
              dots: true
            }
          }
        ]
      });
    
});