export const ADDNEWTODO = 'addNewTodo'
export const REMOVETODO = 'removeTodo'


export type submitTodo = {
    todo: string,
    detail: string,
    handler: string,
    date: string,
    start: string
}

export const addNewTodo = (todoData: submitTodo)=> {
    return {
        type:ADDNEWTODO,
        todoData:todoData
    }
}

export const removeTodo = (index: number)=> {
    return {
        type:REMOVETODO,
        index:index
    }
} 

