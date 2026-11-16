$(document).ready(function(){

    var swiper = new Swiper(".main_slide", {
        spaceBetween: 30,
        centeredSlides: true,
        autoplay: {
          delay: 3000,
          disableOnInteraction: false,
        },
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
          type: "fraction",
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      });
    //section_1 slide
    
    var swiper = new Swiper(".look_book_slide", {
      loop: true,
      slidesPerView: 1, //초기 모바일 설정값
      spaceBetween: 45,
      
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      breakpoints: {
        1351: { 
          slidesPerView: 2,  //브라우저가 1531보다 클 때
          spaceBetween: 45,
          centeredSlides: true,
        } 
      }
    })
    // section_5 slide

    var swiper = new Swiper(".review_slide", {
      slidesPerView: 1,
      spaceBetween: 15,
      pagination: {
        el: ".review_slide .swiper-pagination",
        clickable: true,
      },
      breakpoints: {
        425: {
          slidesPerView: 1.5,
          spaceBetween: 15,
        },
        600: {
          slidesPerView: 2,
          spaceBetween: 15,
        },
        1200: {
          slidesPerView: 3.5,
          spaceBetween: 15,
        }
      },
    });
    // section_6 end

}); //end