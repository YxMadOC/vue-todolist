
export default{
    loadItem(state, payload){
        state.todoList = payload.todoList;
    },
    addItem(state, payload){
        state.todoList.push(payload.item);
    },
    modifyItem(state, payload) {
        state.todoList.find(item => item.id === payload.id).content = payload;
    },
    checkItem(state, payload) {
        state.todoList.find(item => item.id === payload.id).status = payload.status;
    },
    changeFilter(state, payload) {
        state.status = payload.status;
    }
}