import * as actionType from './actionType';

//添加todo
export const addTodo = (todo) => {
    return {
        type: actionType.ADD_TODO,
        todo: todo,
    }
}

//全选
export const checkAll = (checked) => {
    return {
        type: actionType.CHECK_ALL,
        checked: checked,
    }
}

//清除已完成
export const clearCompleted = () => {
    return {
        type: actionType.CLEAR_COMPLETED,
    }
}

//筛选
export const filter = (filterType) => {
    return {
        type: actionType.FILTER,
        filterType: filterType,
    }
}

//修改todo值
export const changeTodoVal = (val, id) => {
    return {
        type: actionType.CHANGE_TODO_VAL,
        value: val,
        id: id
    }
}

//删除todo
export const removeTodo = (id) => {
    return {
        type: actionType.REMOVE_TODO,
        id: id
    }
}

//选择todo
export const selectTodo = (checked, id) => {
    return {
        type: actionType.SELECT_TODO,
        id: id,
        checked: checked,
    }
}