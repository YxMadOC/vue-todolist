import Vuex from 'vuex'
import Vue from 'vue'
import mutations from './mutations'
import getters from './getters'

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        todoList: JSON.parse(localStorage.getItem("todoList")) || [],
        status: 'ALL'
    },
    mutations,
    getters
})