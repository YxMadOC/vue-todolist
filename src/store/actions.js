import axios from 'axios'

const BASE_URL = "http://localhost:3001/todos"

export default {

    loadItem: ({commit}) => {
        axios.get(BASE_URL).then(response => commit('loadItem', {
            todoList: response.data
        }));
    },
    addItem: ({commit}, payload) => {
        axios.post(BASE_URL, payload.item).then(response => commit("addItem", {item: response.data}));
    }
}