

window.onload = function () {
  new Swiper('.swiper-container', {
    /*1.自动轮播图*/
    autoplay: 1000,
    autoplayDisableOnInteraction: false,
    /*2.循环轮播图*/
    loop: true,
    /*3.需要分页器*/
    pagination: '.swiper-pagination',

  });
  // fullpage
   $('#fullpage').fullpage();
}



