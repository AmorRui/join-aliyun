fullpage 的使用

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