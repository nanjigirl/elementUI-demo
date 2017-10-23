import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

var state = {
    count:10
};

const mutations={
    increment(state){//处理数据变化
        state.count++;
    },
    decrement(state){
        state.count--;
    }
};

const actions = {
    increment: ({//处理做什么，异步请求，判断，流程控制
                    commit
                }) => {
        commit('increment');
    },
    decrement:({commit})=>{
        commit('decrement');
    }
};

const getters = {
    count(state){
        return state.count;
    }
}

export default  new Vuex.Store({
    state,
    mutations,
    actions,
    getters
});