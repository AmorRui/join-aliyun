## fullpage 的使用

<!-- style样式 -->
<link rel="stylesheet" href="./css/jquery.fullpage.min.css">
<link rel="stylesheet" href="./css/index.css">
<!-- js交互 -->
<script src="./js/jquery.min.js" ></script>
<script src="./js/jquery.fullpage.min.js"></script>
<script src="./js/index.js"></script>

HTML页面

<div id="fullpage">
    <div class="section">第一屏</div>
    <div class="section">第二屏</div>
    <div class="section">
        <div class="slide">第三屏的第一屏</div>
        <div class="slide">第三屏的第二屏</div>
        <div class="slide">第三屏的第三屏</div>
        <div class="slide">第三屏的第四屏</div>
    </div>
    <div class="section">第四屏</div>
</div>

JS页面
$(function(){
    $('#fullpage').fullpage();
});

## CSS视频播放使用

src ：视频的属性
poster：视频封面，没有播放时显示的图片
preload：预加载 （有autoplay的时候忽略）
autoplay：自动播放
loop：循环播放
controls：浏览器自带的控制条
width：视频宽度
height：视频高度
muted ：设置或返回音频/视频是否应该被静音（关闭声音）。
controls: 显示视频控件（播放按钮）

<video src="./one.mp4" autoplay="autoplay" data-autoplay="" muted="" loop=""></video>

## CSS动画属性使用
使用 @keyframes 动画名称  来进行定义动画
@keyframes  section_one_p {
  0% {
    top:800px;
    left: 200px;
  }
  100%{
    top: 450px;
    left: 200px;
  }
}
使用animation 进行使用 

animation-name	规定需要绑定到选择器的 keyframe 名称。（必须参数）
animation-duration	规定完成动画所花费的时间，以秒或毫秒计。（必须参数）
animation-timing-function	规定动画的速度曲线。
animation-delay	规定在动画开始之前的延迟。
animation-iteration-count	规定动画应该播放的次数。
animation-direction	规定是否应该轮流反向播放动画。

#fullpage .one p{
  animation: section_one_p 1s 0.2s forwards;
}