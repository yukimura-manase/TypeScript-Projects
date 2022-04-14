import { ADDNEWTODO, REMOVETODO } from '../actions/ActionCreator'
import { submitTodo } from '../actions/ActionCreator'

export const initialState = {
    todolist:[ 
      {id:1,todo:'Reactの学習',detail:'Reactを学ぶロボ玉',handler:'ロボ玉試作1号機',date:'2100-12-12',start:'1995-12-12'},
      {id:2,todo:'TypeScriptの学習',detail:'TypeScriptを学ぶロボ玉',handler:'ロボ玉試作2号機',date:'2100-12-12',start:'1995-12-12'},
      {id:3,todo:'Nodeの学習',detail:'Nodeを学ぶロボ玉',handler:'ロボ玉試作3号機',date:'2100-12-12',start:'1995-12-12'}
    ]
  }

type Actions = { // actionが受け取るデータの型を定義しておく！
    type: string,
    index : number,
    todoData : submitTodo
}

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initialState, action: Actions)=> {

    switch(action.type){
        case ADDNEWTODO: {
            const copyTodo = state.todolist.slice()
            copyTodo.push(
                {
                    id:copyTodo.length + 1,
                    todo:action.todoData.todo,
                    detail:action.todoData.detail,
                    handler:action.todoData.handler,
                    date:action.todoData.date,
                    start:action.todoData.start
                } 
            )
            return { ...state, todolist:copyTodo }
        }
        case REMOVETODO: {
            const copyTodo = state.todolist.slice()
            copyTodo.splice(action.index,1)

            return { ...state, todolist:copyTodo }
        }
        default: return state
    }
}



