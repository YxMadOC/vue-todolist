import Vue from 'vue'
import App from './App.vue'
import Vuex from 'vuex'

Vue.use(Vuex)

Vue.config.productionTip = false

const saveList = (list) => {
  localStorage.setItem("todoList", JSON.stringify(list))
};

const store = new Vuex.Store({
  state: {
    todoList: JSON.parse(localStorage.getItem("todoList")) || [],
    status: 'ALL'
  },
  mutations: {
    addItem(state, payload){
      state.todoList.push(payload.item);
      saveList(state.todoList)
    },
    modifyItem(state, payload) {
      state.todoList.find(item => item.id === payload.id).content = payload.val;
      saveList(state.todoList)
    },
    checkItem(state, payload) {
      state.todoList.find(item => item.id === payload.id).status = payload.status;
      saveList(state.todoList)
    },
    changeFilter(state, payload) {
      state.status = payload.status;
    }
  },
  getters: {
    todoList: state => state.todoList,
    status: state => state.status
  }
});

new Vue({
  store,
  render: h => h(App),
}).$mount('#app')
