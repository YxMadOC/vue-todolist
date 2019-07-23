import {saveList} from '../util'

export default{
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
}