##
fullpage 的使用

  <!-- style样式 -->
  <
  link rel = "stylesheet"
href = "./css/jquery.fullpage.min.css" >
  <
  link rel = "stylesheet"
href = "./css/index.css" >
  <!-- js交互 -->
  <
  script src = "./js/jquery.min.js" > < /script> <
  script src = "./js/jquery.fullpage.min.js" > < /script> <
  script src = "./js/index.js" > < /script>

HTML页面

  <
  div id = "fullpage" >
  <
  div class = "section" > 第一屏 < /div> <
  div class = "section" > 第二屏 < /div> <
  div class = "section" >
  <
  div class = "slide" > 第三屏的第一屏 < /div> <
  div class = "slide" > 第三屏的第二屏 < /div> <
  div class = "slide" > 第三屏的第三屏 < /div> <
  div class = "slide" > 第三屏的第四屏 < /div> <
  /div> <
  div class = "section" > 第四屏 < /div> <
  /div>

JS页面
$(function () {
  $('#fullpage').fullpage();
});

添加导航
小圆点导航。 默认文字为navigationTooltips中文字
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


##
CSS视频播放使用

src： 视频的属性
poster： 视频封面， 没有播放时显示的图片
preload： 预加载（ 有autoplay的时候忽略）
autoplay： 自动播放
loop： 循环播放
controls： 浏览器自带的控制条
width： 视频宽度
height： 视频高度
muted： 设置或返回音频 / 视频是否应该被静音（ 关闭声音）。
controls: 显示视频控件（ 播放按钮）

  <
  video src = "./one.mp4"
autoplay = "autoplay"
data - autoplay = ""
muted = ""
loop = "" > < /video>

##
CSS动画属性使用
使用 @keyframes 动画名称 来进行定义动画
@keyframes section_one_p {
  0 % {
    top: 800 px;
    left: 200 px;
  }
  100 % {
    top: 450 px;
    left: 200 px;
  }
}
使用animation 进行使用

animation - name 规定需要绑定到选择器的 keyframe 名称。（ 必须参数）
animation - duration 规定完成动画所花费的时间， 以秒或毫秒计。（ 必须参数）
animation - timing - function 规定动画的速度曲线。
animation - delay 规定在动画开始之前的延迟。
animation - iteration - count 规定动画应该播放的次数。
animation - direction 规定是否应该轮流反向播放动画。

# fullpage.one p {
  animation: section_one_p 1 s 0.2 s forwards;
}

##
swiper轮播图
  <
  link rel = "stylesheet"
href = "./css/swiper.min.css" >
  <
  script src = "./js/swiper.min.js" > < /script>

JS页面
window.onload = function () {
  new Swiper('.swiper-container', {
    /*1.自动轮播图*/
    autoplay: 1000,
    autoplayDisableOnInteraction: false,
    /*2.循环轮播图*/
    loop: true,
    /*3.需要指示器*/
    pagination: '.swiper-pagination'
  });
}

HTML页面
.swiper-container img {
  display: block;
  width: 100%;
}

<div class="swiper-container">
    <div class="swiper-wrapper">
        <div class="swiper-slide">Slide 1</div>
        <div class="swiper-slide">Slide 2</div>
        <div class="swiper-slide">Slide 3</div>
    </div>
    <!-- 如果需要分页器 -->
    <div class="swiper-pagination"></div>
    
    <!-- 如果需要导航按钮 -->
    <div class="swiper-button-prev"></div>
    <div class="swiper-button-next"></div>
    
    <!-- 如果需要滚动条 -->
    <div class="swiper-scrollbar"></div>
</div>