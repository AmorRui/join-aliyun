

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
}

// fullpage
$(function () {
  $('#fullpage').fullpage({
    // 导航
    navigation:'true',
    // 导航位置  left 或 right
    navigationPosition:'left',
    // 标记
    navigationTooltips:['加入阿里云','看见不凡','欢享成长','快乐生活','不忘初心','共谱云章'],
    //超出滚动
    scrollOverflow:true,
    paddingLeft: '50px',
    // 定义锚链接
    anchors:['one', 'two', 'three','four','five','six'],
    // 绑定菜单
    menu: '#myMenu'});
  })



