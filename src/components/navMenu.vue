<template>
    <el-col :span="spanColumn" class="navMenu">
        <el-menu class="menuList" :default-active="activeIndex" @open="handleOpen" @close="handleClose" theme="dark" :router="true" :collapse="isCollapse">
            <li v-show="!isCollapse">
                <div class="navLogo">
                    <img src="../assets/images/logo.jpg" alt="">
                </div>
            </li>
            <el-menu-item class="text-center" v-show="isCollapse" :index="'name'">SherryChen</el-menu-item>
            <el-menu-item class="listBtn" @click="toggleMenu" :index="'menu'"><i class="icon iconfont icon-caidan"></i></el-menu-item>
            <div v-for="(item,index) in navMenuList">
                <el-menu-item v-if="!item.subMenu" :index="item.path" :key="item.id"><i class="icon iconfont iconSet" :class="item.icon"></i><span class="menu-text">{{item.text}}</span></el-menu-item>
                <el-submenu v-if="!!item.subMenu" :index="item.path" :key="item.id">
                    <template slot="title"><i class="icon iconfont iconSet" :class="item.icon"></i><span class="menu-text">{{item.text}}</span></template>
                    <el-menu-item v-for="(subItem,subIndex) in item.subMenu" :index="subItem.path" :key="subItem.id"><span>{{subItem.subText}}</span></el-menu-item>
                </el-submenu>
            </div>
        </el-menu>
    </el-col>
</template>

<script>
    export default {
        data () {
            return {
                isCollapse:false,
                spanColumn:2,
                activeIndex:'home',
                navMenuList:[
                    {
                        id:'home',
                        icon:'icon-home',
                        text:'首页',
                        path:'/'
                    },{
                        id:'table',
                        icon:'icon-biaoge',
                        text:'表格',
                        path:'table',
                        subMenu:[
                            {
                                subText:'elementTable',
                                path:'elementTable'
                            }
                        ]
                    },{
                        id:'form',
                        icon:'icon-biaodan',
                        text:'表单',
                        path:'form'
                    },{
                        id:'chart',
                        icon:'icon-tubiao',
                        text:'图表',
                        path:'chart'
                    },{
                        id:'cssSecret',
                        icon:'icon-CSS',
                        text:'css揭秘',
                        path:'cssSecret'
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
            toggleMenu(){
                this.isCollapse = !this.isCollapse;
                if(this.isCollapse){
                    this.spanColumn = 1;
                }else{
                    this.spanColumn = 2
                }
                this.$nextTick(function(){

                }.bind(this))
            }
        }
    }
</script>
<style>
    .navMenu{
        height: 100%;
        background:#1f2d3d;
        overflow-x:hidden;
        border-right:1px solid #1f2d3d;
    }
    .navLogo{
        height: 7em;
        text-align: center;
    }
    .navLogo>img{
        height:calc(100% - 1em);
        margin-top:0.5em;
        border-radius:50%;
    }
    .menuList>li{
        border-bottom:1px solid #1f2d3d;
    }
    .menuList>li:last-child{
        border-bottom:none;
    }
    .iconSet{
        vertical-align: middle;
        margin-right:1.5em;
    }
    .menu-text{
        vertical-align: middle;
    }
    .listBtn{
        text-align: center;
    }
</style>
