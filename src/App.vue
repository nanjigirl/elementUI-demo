<template>
    <main-view></main-view>
</template>

<script>
    import mainView from './components/mainView.vue'
    export default {
        name: 'app',
        data () {
            return{

            }
        },
        components: {
            'main-view': mainView
        }
    }
</script>
<style>
    html,body{
        padding: 0;
        margin:0;
        height: 100%;
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        color: #2c3e50;
    }
</style>
