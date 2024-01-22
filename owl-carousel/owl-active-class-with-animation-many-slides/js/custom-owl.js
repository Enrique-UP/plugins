$(document).ready(function() {
    $('.one .owl-carousel').owlCarousel({
      margin: 10,
      nav: true,
      autoplay:true,
      loop: true,
      responsive: {
        0: {
          items: 1
        },
        600: {
          items: 3
        },
        1000: {
          items: 5
        }
      }
    });
    $('.two .owl-carousel').owlCarousel({
        margin: 10,
        nav: true,
        autoplay:true,
        loop: true,
        responsive: {
          0: {
            items: 1
          },
          600: {
            items: 2
          },
          1000: {
            items: 3
          }
        }
      })
  })