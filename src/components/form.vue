<template>
    <div id="box">
        <h1>我是表单</h1>
        <ul class="layerList">
            <li class="layer-title">
                <a><i class="icon iconfont icon-home icon-setting"></i><span class="layer-text">图层</span></a>
            </li>
            <li v-for="(item,index) in navMenuList" @click="showSecMenu(index)">
                <a>
                    <el-checkbox v-model="item.checked" :disabled="item.disabled"></el-checkbox>
                    <span class="layer-text">{{item.text}}</span>
                    <i class="icon iconfont" :class="item.icon"></i>
                    <i class="el-icon-arrow-right icon-right" v-if="!!item.secMenu"></i>
                </a>
                <ul class="secLayer layerList" v-show="!!item.secMenu && isSecShow === index">
                    <li v-for="(secItem,secIndex) in item.secMenu" @click="showTrdMenu(secIndex)">
                        <a>
                            <el-checkbox v-model="secItem.checked" :disabled="secItem.disabled"></el-checkbox>
                            <span class="layer-text">{{secItem.text}}</span>
                            <i class="icon iconfont" :class="secItem.icon"></i>
                            <i class="el-icon-arrow-right icon-right" v-if="!!secItem.trdMenu"></i>
                        </a>
                        <ul class="secLayer layerList" v-show="!!secItem.trdMenu && isTrdShow === secIndex">
                            <li v-for="trdItem in secItem.trdMenu">
                                <a>
                                    <el-checkbox v-model="trdItem.checked" :disabled="trdItem.disabled"></el-checkbox>
                                    <span class="layer-text">{{trdItem.text}}</span>
                                    <i class="icon iconfont" :class="trdItem.icon"></i>
                                    <i class="el-icon-arrow-right icon-right" v-if="!!trdItem.trdMenu"></i>
                                </a>
                            </li>
                        </ul>
                    </li>
                </ul>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        data () {
            return {
                isSecShow:-1,
                isTrdShow:-1,
                navMenuList:[
                    {
                        checked:true,
                        disabled:true,
                        icon:'icon-home',
                        text:'首页',
                    },{
                        checked:false,
                        disabled:false,
                        icon:'icon-biaoge',
                        text:'表格',
                        secMenu:[
                            {
                                checked:false,
                                disabled:false,
                                icon:'icon-biaoge',
                                text:'2-表格1'
                            },{
                                checked:false,
                                disabled:false,
                                icon:'icon-biaoge',
                                text:'2-表格2',
                                trdMenu:[
                                    {
                                        checked:false,
                                        disabled:false,
                                        icon:'icon-biaoge',
                                        text:'3-表格1'
                                    }
                                ]
                            }
                        ]
                    },{
                        checked:true,
                        disabled:false,
                        icon:'icon-biaodan',
                        text:'表单',
                    },{
                        checked:false,
                        disabled:false,
                        icon:'icon-tubiao',
                        text:'图表'
                    }
                ]
            }
        },
        methods:{
            handleOpen(key, keyPath) {
                console.log(key, keyPath);
            },
            handleClose(key, keyPath) {
                console.log(key, keyPath);
            },
            showSecMenu(index){
                this.isSecShow = index;
            },
            showTrdMenu(index){
                this.isTrdShow = index;
            }
        }
    }
</script>
<style scoped>
    .layerList{
        width:13em;
        background: #fff;
        border-radius:5px;
        text-align: left;
        box-shadow: 0 0 10px 0 rgba(0,0,0,.2);
    }
    .layer-title{
        background: #157DD6;
        text-align: center;
        border-top-left-radius: 5px;
        border-top-right-radius:5px;
    }
    .layer-title>a{
        color: #fff!important;
    }
    .layerList>li{
        height: 3em;
        line-height:3em;
        position: relative;
    }
    .layerList>li>a{
        display: block;
        padding: 0 1em;
        position: relative;
        color: #666;
    }
    .layerList>li>a:hover{
        background: #eee;
        color: #666;
    }
    .icon-right{
        position: absolute;
        right: 1em;
        top:50%;
        transform:translate(0,-50%);
    }
    .layer-text{
        margin-left:1em;
    }
    .secLayer{
        position: absolute;
        left:13em;
        top:0;
    }
</style>
