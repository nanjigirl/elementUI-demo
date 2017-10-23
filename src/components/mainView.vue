<template>
    <el-row :span="24" class="mainContainer">
        <nav-menu></nav-menu>
        <router-content></router-content>
    </el-row>
    <!--<div id="box">-->
        <!--<ul>-->
            <!--<li>-->
                <!--<router-link to="/home">主页</router-link>-->
            <!--</li>-->
            <!--<li>-->
                <!--<router-link to="/news">新闻</router-link>-->
            <!--</li>-->
            <!--<li>-->
                <!--<router-link to="/elementTable">过滤表格</router-link>-->
            <!--</li>-->
        <!--</ul>-->
        <!--<router-view></router-view>-->
    <!--</div>-->
</template>

<script>
//    import data from './util/mock'
    import navMenu from './navMenu.vue'
    import routerContent from './routerContent.vue'
    export default {
        data () {
            return {

            }
        },
        components:{
            'nav-menu':navMenu,
            'router-content':routerContent
        },
        methods:{

        },
        mounted: function () {
//            this.$http.jsonp('https://api.douban.com/v2/movie/top250?count=10', {}, {
//                headers:{
//
//                },
//                emulateJSON:true
//            }).then(function(response){
//                //正确的回调
//                this.articles = response.data['subjects']
//            },function(){
//                //错误的回调
//                console.log(response);
//            });
//            this.$http.get('http://g.cn')
//                .then(function(response){
//                    console.log(response.body);
//                },function(response){
//                    console.log(response);
//                });
        }
    }
</script>
<style>
    .mainContainer{
        height:100%;
    }
</style>