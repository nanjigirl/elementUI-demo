<template>
    <div id="box">
        <h1>我是主页</h1>
        <hr>
        <!--<el-button @click="get">点击</el-button>-->
        <!--{{message}}-->
        <el-button @click="increment">增加</el-button>
        <el-button @click="decrement">减少</el-button>
        <el-button @click="clickOdd">偶数点击</el-button>
        <el-button @click="clickAsync">点击异步</el-button>
        <div>
            现在数字为：{{count}},他是{{getNum}}
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
        },
//        methods:{
//            get(){
//                this.axios.get('a.txt').then(function(res){
//                    this.message = res.data;
//                }.bind(this)).cacth(function(err){
//                    console.log(err);
//                })
//            }
//        }
        computed:mapGetters([
            'count',
            'getNum'
        ]),
        methods:mapActions([
            'increment',
            'decrement',
            'clickOdd',
            'clickAsync'
        ])
    }
</script>
