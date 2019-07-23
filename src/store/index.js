import Vuex from 'vuex'
import Vue from 'vue'
import mutations from './mutations'
import getters from './getters'
import actions from './actions'

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        todoList: [],
        status: 'ALL'
    },
    mutations,
    getters,
    actions
})