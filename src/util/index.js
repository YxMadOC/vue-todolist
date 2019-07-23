
export const saveList = (list) => {
    localStorage.setItem("todoList", JSON.stringify(list))
};