import status from '../enums/enums'

export default {
    filterList: state => {
        switch (state.status) {
            case status.ALL:
                return state.todoList;
            case status.ACTIVE:
                return state.todoList.filter(item => !item.finished);
            case status.COMPLETED:
                return state.todoList.filter(item => item.finished);
            default:
                return state.todoList;
        }
    },
    status: state => state.status
}