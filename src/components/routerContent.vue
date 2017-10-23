<template>
    <el-col :span="rightColumn" style="height: 100%;">
        <div class="nav-top clearfix">
            <el-menu theme="dark" class="userCenter clearfix" mode="horizontal" @select="handleSelect">
                <el-menu-item index="1">sherrychen</el-menu-item>
                <el-submenu index="2">
                    <template slot="title">用户管理</template>
                    <el-menu-item index="2-1">修改用户名</el-menu-item>
                    <el-menu-item index="2-2">修改密码</el-menu-item>
                    <el-menu-item index="2-3">退出</el-menu-item>
                </el-submenu>
            </el-menu>
        </div>
        <div class="subIndex">
            <el-breadcrumb separator="/" class="wrap-breadcrumb">
                <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
                <el-breadcrumb-item>活动管理</el-breadcrumb-item>
                <el-breadcrumb-item>活动列表</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <el-col :span="24" class="main-content">
            <router-view></router-view>
        </el-col>
    </el-col>
</template>

<script>
    export default {
        data () {
            return {
                rightColumn:22
            }
        },
        methods:{
            handleSelect(key, keyPath) {
                console.log(key, keyPath);
            }
        }
    }
</script>
<style>
    .nav-top{
        background:#324157;
    }
    .userCenter{
        float: right;
    }
    .subIndex{
        height:calc(7em - 60px);
        line-height:calc(7em - 60px);
        border-bottom:1px solid #ccc;
    }
    .wrap-breadcrumb{
        line-height:inherit;
        padding-left:2em;
    }
    .main-content{
        padding: 1em;
        height: calc(100% - 7em);
        overflow: auto;
    }
</style>
