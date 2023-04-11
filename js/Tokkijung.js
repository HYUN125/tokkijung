// ================= swiper js
new Swiper(".mySwiper", {
    autoplay: true,
    loop:true,
    speed: 1000,
    effect: "fade",
    pagination: {
    el: ".swiper-pagination",
    clickable: true,
    draggable : false,
  },
});

new Swiper(".subSwiper", {
    autoplay: true,
    speed: 1000,
    loop: true,
    navigation: {
      nextEl: ".menu-button-next",
      prevEl: ".menu-button-prev",
    },
  });

new Swiper(".menuSwiper",{
    autoplay: true,
    loop: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true
    },
    spaceBetween: 20,
    slidesPerView: 3,
    navigation: {
        nextEl: ".btn-next",
        prevEl: ".btn-prev",
    },
    })


$(document).ready(function(){
const header = document.querySelector('header'),
    nav = document.querySelector('nav')
    nav.addEventListener('mouseover', function(){
        header.style.height = '390px'
        });
        // console.log(nav)
    header.addEventListener('mouseout', function(){
            header.style.height = '90px'
        });
    })

    $('.mb-btn').click(function(){
        $('.category').fadeIn(500)
    })
    $('.close-btn').click(function(){
        $('.category').fadeOut(500)
    })
    $('.logo').click(function(){
        $('html, body').stop().animate({scrollTop:0},0);
    })



$(function(){
    $(window).scroll(function(){
        if($(this).scrollTop()>=300){
            // go_top(버튼) 나타난다
            $('.go-top').fadeIn(500)
        }else{
            // go_top(버튼) 사라진다
            $('.go-top').fadeOut(500)
        }
    })

    $('.go-top').click(function(e){
        e.preventDefault();
        $('html, body').stop().animate({scrollTop:0},1000);
    });
})
