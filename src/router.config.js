import Home from "./components/home.vue"
import Form from "./components/form.vue"
import elementTable from "./components/elementTable.vue"
import Chart from "./components/chart.vue"
import cssSecret from "./components/cssSecret.vue"

export default {
    routes:[
        {
            name:'home',
            path:'/',
            component:Home
        },{
            name:'form',
            path:'/form',
            component:Form
        },{
            name:'elementTable',
            path:'/elementTable',
            component:elementTable
        },{
            name:'chart',
            path:'/chart',
            component:Chart
        },{
            name:'cssSecret',
            path:'/cssSecret',
            component:cssSecret
        }
    ]
}