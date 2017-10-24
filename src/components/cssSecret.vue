<template>
    <div id="box">
        <div class="lc-panel clearfix">
            <el-col :span="24">
                <div class="box-title clearfix">
                    <h3><i class="icon iconfont icon-biaoti"></i>按钮</h3>
                </div>
                <hr>
                <div class="box-content">
                    <span class="base-btn">button</span>
                    <span class="base-btn ok">ok</span>
                    <span class="base-btn cancel">cancel</span>
                    <span class="base-btn warning">warning</span>
                    <span class="base-btn info">info</span>
                </div>
            </el-col>
        </div>
        <div class="lc-panel clearfix">
            <el-col :span="24">
                <div class="box-title clearfix">
                    <h3><i class="icon iconfont icon-biaoti"></i>气泡</h3>
                </div>
                <hr>
                <div class="box-content">
                    <div class="lc-text-panal">我是文字
                    <div class="lc-popup">我是提示框文字</div>
                    </div>
                </div>
            </el-col>
        </div>
        <div class="lc-panel clearfix">
            <el-col :span="24">
                <div class="box-title clearfix">
                    <h3><i class="icon iconfont icon-biaoti"></i>边框</h3>
                </div>
                <hr>
                <div class="box-content">
                    <el-col :span="4">
                        <p class="box-subTitle">半透明边框</p>
                        <div class="bgBox">
                            <div class="borderBox"></div>
                        </div>
                    </el-col>
                    <el-col :span="4">
                        <p class="box-subTitle">多重边框(box-shadow)</p>
                        <div class="multi-bs"></div>
                    </el-col>
                    <el-col :span="4">
                        <p class="box-subTitle">多重边框(outline)</p>
                        <div class="multi-ol"></div>
                    </el-col>
                    <el-col :span="4">
                        <p class="box-subTitle">内嵌圆角</p>
                        <div class="multi-oval"></div>
                    </el-col>
                </div>
            </el-col>
        </div>
        <div class="lc-panel clearfix">
        <el-col :span="24">
            <div class="box-title clearfix">
                <h3><i class="icon iconfont icon-biaoti"></i>条纹背景</h3>
            </div>
            <hr>
            <div class="box-content">
                <el-col :span="4">
                    <p class="box-subTitle">水平条纹</p>
                    <div class="twBox twBox_1"></div>
                </el-col>
                <el-col :span="4">
                    <p class="box-subTitle">竖直条纹</p>
                    <div class="twBox twBox_2"></div>
                </el-col>
                <el-col :span="4">
                    <p class="box-subTitle">斜向条纹</p>
                    <div class="twBox twBox_3"></div>
                </el-col>
                <el-col :span="4">
                    <p class="box-subTitle">网格</p>
                    <div class="twBox twBox_4"></div>
                </el-col>
                <el-col :span="4">
                    <p class="box-subTitle">波点</p>
                    <div class="twBox twBox_5"></div>
                </el-col>
                <el-col :span="4">
                    <p class="box-subTitle">棋盘</p>
                    <div class="twBox twBox_6"></div>
                </el-col>
            </div>
        </el-col>
    </div>
        <div class="lc-panel clearfix">
            <el-col :span="24">
                <div class="box-title clearfix">
                    <h3><i class="icon iconfont icon-biaoti"></i>连续的图像边框</h3>
                </div>
                <hr>
                <div class="box-content">
                    <el-col :span="4">
                        <p class="box-subTitle">图像边框一</p>
                        <div class="twBox txbkBox_1">I have a good idea</div>
                    </el-col>
                    <el-col :span="4">
                        <p class="box-subTitle">老式信封</p>
                        <div class="twBox txbkBox_2">I have a good idea</div>
                    </el-col>
                    <el-col :span="4">
                        <p class="box-subTitle">蚂蚁线</p>
                        <div class="twBox txbkBox_3">I have a good idea</div>
                    </el-col>
                    <el-col :span="4">
                        <p class="box-subTitle">脚注</p>
                        <div class="twBox txbkBox_4">I have a good idea</div>
                    </el-col>
                </div>
            </el-col>
        </div>
        <div class="lc-panel clearfix">
            <el-col :span="24">
                <div class="box-title clearfix">
                    <h3><i class="icon iconfont icon-biaoti"></i>形状</h3>
                </div>
                <hr>
                <div class="box-content">
                    <el-col :span="4">
                        <p class="box-subTitle">椭圆</p>
                        <div class="twBox xzBox_1"></div>
                    </el-col>
                    <el-col :span="4">
                        <p class="box-subTitle">平行四边形</p>
                        <div class="twBox xzBox_2">click me</div>
                    </el-col>
                    <el-col :span="4">
                        <p class="box-subTitle">菱形图片</p>
                        <div class="twBox xzBox_3">
                            <img src="../assets/images/fruit-1.jpeg" alt="">
                        </div>
                    </el-col>
                    <el-col :span="4">
                        <p class="box-subTitle">脚注</p>
                        <div class="twBox txbkBox_4">I have a good idea</div>
                    </el-col>
                </div>
            </el-col>
        </div>
    </div>
</template>

<script>
    import{mapGetters,mapActions} from 'vuex'
    export default {
        data () {
            return {
                message:'123'
            }
        }
    }
</script>
<style>
    .lc-panel{
        border:1px solid #ccc;
        padding:1em 2em;
        margin-bottom:1em;
        border-radius:.5em;
    }
    .box-title>h3>i{
        margin-right:1em;
    }
    .base-btn{
        display: inline-block;
        padding:.3em .8em;
        border:1px solid rgba(0,0,0,.1);
        background: #58a linear-gradient(hsla(0,0%,100%,.2),transparent);
        border-radius:.2em;
        box-shadow:0 .05em .25em rgba(0,0,0,.5);
        color: #fff;
        text-shadow: 0 -.05em .05em rgba(0,0,0,.5);
        font-size:125%;
        line-height:1.5;
        margin-right:1em;
    }
    .ok{
        background-color:#c00;
    }
    .cancel{
        background-color:#6b0;
    }
    .warning{
        background-color:#EE9B51;
    }
    .info{
        background-color:#696FAB;
    }
    .lc-text-panal{
        margin-bottom:5em;
        color: #58a;
        position: relative;
    }
    .lc-popup{
        padding:1em 1.5em;
        background: #EE9B51;
        color: #fff;
        border:1px solid #ccc;
        border-radius:.5em;
        position: absolute;
        left:0;
        top:calc(100% + 1.5em);
    }
    .lc-popup::before{
        content:'';
        position: absolute;
        top:-.4em;
        left:1em;
        padding:.35em;
        background: inherit;
        border:inherit;
        border-right:0;
        border-bottom:0;
        transform:rotate(45deg);
    }
    .box-subTitle{
        font-size:1.2em;
    }
    .bgBox{
        width:10em;
        height:10em;
        background: green;
        padding:1em;
    }
    .borderBox{
        width: 8em;
        height:8em;
        background: #fff;
        /*属性初始值为border-box,边框色为透明无法遮挡背景色*/
        background-clip:padding-box;
        border:10px solid hsla(0,0%,100%,.5);
    }
    .multi-bs{
        /*box-shadow模拟实线边框*/
        width:8em;
        height:8em;
        margin-top:25px;
        margin-left:15px;
        background: yellowgreen;
        box-shadow:0 0 0 10px #655,0 0 0 15px deeppink;
        /*outline模拟*/
        /*border:10px solid #655;*/
        /*outline:5px solid deeppink;*/
    }
    .multi-ol{
        /*模拟虚线边框*/
        width:10em;
        height:10em;
        background: #655;
        outline:1px dashed #fff;
        border-radius:.5em;
        outline-offset:-1em;
    }
    .multi-oval{
        width:9em;
        height:9em;
        margin-top:20px;
        background: tan;
        border-radius:.8em;
        padding:1em;
        box-shadow:0 0 0 .6em #655;
        outline:.6em solid #655;
    }
    .twBox{
        width:10em;
        height:10em;
        text-align: center;
    }
    .twBox_1{
        background: linear-gradient(#fb3 50%,#58a 0);
        background-size:100% 30px;
    }
    .twBox_2{
        background: linear-gradient(90deg,#fb3 50%,#58a 0);
        background-size:30px 100%;
    }
    .twBox_3{
        /*基础原理*/
        /*background: linear-gradient(45deg,#fb3 25%,#58a 0,#58a 50%,#fb3 0,#fb3 75%,#58a 0);*/
        /*background-size:30px 30px;*/
        /*简洁版*/
        background: repeating-linear-gradient(60deg,#fb3,#fb3 15px,#58a 0,#58a 30px);
        /*深浅条纹*/
        /*background: #58a;*/
        /*background-image:repeating-linear-gradient(30deg,hsla(0,0%,100%,.1),hsla(0,0%,100%,.1) 15px,transparent 0,transparent 30px);*/
    }
    .twBox_4{
        background: #58a;
        background-image:linear-gradient(white 1px,transparent 0),linear-gradient(90deg,white 1px,transparent 0);
        background-size:30px 30px;
        /*叠加网格*/
        /*background-image:linear-gradient(white 2px,transparent 0),*/
                           /*linear-gradient(90deg,white 2px,transparent 0),*/
                           /*linear-gradient(hsla(0,0%,100%,.3) 1px,transparent 0),*/
                            /*linear-gradient(90deg,hsla(0,0%,100%,.3) 1px,transparent 0);*/
        /*background-size: 75px 75px,75px 75px,15px 15px,15px 15px;*/
    }
    .twBox_5{
        background: #655;
        background-image:radial-gradient(tan 30%,transparent 0),radial-gradient(tan 30%,transparent 0);
        background-size:30px 30px;
        background-position: 0 0,15px 15px;
    }
    /*sass创建波点*/
    /*@mixin polka($size,$dot,$base,$accent){*/
        /*background: $base;*/
        /*background-image:radial-gradient($accent $dot,transparent 0),radial-gradient($accent $dot,transparent 0);*/
        /*background-size:$size $size;*/
        /*background-position:0,0,$size/2 $size/2;*/
    /*}*/
    /*@include polka(30px,30%,#655,tan);*/
    .twBox_6{
        background: #eee;
        background-image:linear-gradient(45deg,rgba(0,0,0,.25) 25%,transparent 0),linear-gradient(45deg,transparent 75%,rgba(0,0,0,.25) 0),linear-gradient(45deg,rgba(0,0,0,.25) 25%,transparent 0),linear-gradient(45deg,transparent 75%,rgba(0,0,0,.25) 0);
        background-position:0 0,15px 15px,15px 15px,30px 30px;
        background-size:30px 30px;
    }
    /*sass创建棋盘*/
    /*@mixin checkerboard($size,$base,$accent:rgba(0,0,0,.25)){*/
        /*background: $base;*/
        /*background-image:linear-gradient(45deg,$accent 25%,transparent 0),linear-gradient(45deg,transparent 75%,$accent 0),linear-gradient(45deg,$accent 25%,transparent 0),linear-gradient(45deg,transparent 75%,$accent 0);*/
        /*background-size:0 0,$size $size,*/
        /*background-size:2*$size 2*$size;*/
    /*}*/
    /*@include checkerboard(15px,#58a,tan);*/
    /*svg方案*/
    /*<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" fill-opacity=".25">*/
        /*<rect x="50" width="50" heigth="50"/>*/
        /*<rect x="50" width="50" heigth="50"/>*/
    /*</svg>*/
    /*svg以data url方式内嵌到样式表*/
    /*background:#eee url('data:image/svg_xml,\*/
    /*<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" fill-opacity=".25">\*/
    /*<rect x="50" width="50" heigth="50"/>\*/
    /*<rect x="50" width="50" heigth="50"/>\*/
    /*</svg>');*/
    /*background-size:30px 30px;*/
    .txbkBox_1{
        padding: 1em;
        border:1em solid transparent;
        background: linear-gradient(white,white) padding-box,url('../assets/images/strawberry.jpeg') border-box 0/cover;
    }
    .txbkBox_2{
        padding:1em;
        /*方式一*/
        border:1em solid transparent;
        background: linear-gradient(white,white) padding-box,
                    repeating-linear-gradient(-45deg,
                            red 0,red 12.5%,
                            transparent 0,transparent 25%,
                            #58a 0,#58a 37.5%,
                            transparent 0,
                            transparent 50%) 0/5em 5em;
        /*方式二*/
        /*border:16px solid transparent;*/
        /*border-image:16 repeating-linear-gradient(-45deg,*/
                            /*red 0,red 1em,*/
                            /*transparent 0,transparent 2em,*/
                            /*#58a 0,#58a 3em,*/
                            /*transparent 0,transparent 4em);*/
    }
    .txbkBox_3{
        padding:1em;
        border:1px solid transparent;
        background: linear-gradient(white,white) padding-box,
                    repeating-linear-gradient(-45deg,
                    black 0,black 25%,white 0,white 50%) 0/.6em .6em;
        animation:ants 12s linear infinite;
    }
    @keyframes ants{to {background-position:100%;}}
    .txbkBox_4{
        border-top:.2em solid transparent;
        border-image:100% 0 0 linear-gradient(90deg,currentColor 4em,transparent 0);
        padding-top:1em;
    }
    .xzBox_1{
        background:#fb3;
        /*椭圆*/
        /*border-radius:50%;*/
        /*上半椭圆*/
        /*border-radius:50%/100% 100% 0 0;*/
        /*左半椭圆*/
        border-radius:100% 0 0 100%/50%;
    }
    .xzBox_2{
        position: relative;
        color: #fff;
        text-align: center;
        line-height:10em;
    }
    .xzBox_2:before{
        content: '';
        position: absolute;
        top:0;
        right:0;
        bottom:0;
        left:0;
        background: #58a;
        transform:skew(30deg);
        z-index: -1;
    }
    .xzBox_3{
        transform:rotate(45deg);
        overflow: hidden;
        width: 8em;
        height:8em;
        margin-top:2em;
    }
    .xzBox_3>img{
        /*max-width:100%;*/
        /*transform:rotate(-45deg) scale(2.5);*/
        clip-path:polygon(50% 0,100% 50%,50% 100%,0 50%);
        transition:1s clip-path;
    }
    .xzBox_3>img:hover{
        clip-path:polygon(0 0,100% 0,100% 100%,0 100%);
    }
</style>
