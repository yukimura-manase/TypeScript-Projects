import React from 'react';
import { useSelector, useDispatch} from 'react-redux'
import { removeTodo } from '../actions/ActionCreator'
import { Link } from 'react-router-dom'

export type State = { // StoreStateで保持しているデータの型を定義する！ => データ構造が明確化される(見える化)！
    StoreState:{
      todolist: [
          { id: number, todo: string, handler: string, date: string, start: string }
        ]
    }
  }

export type Todo = { id: number, todo: string, handler: string, date: string, start: string }
  
const todoSelector = (state: State)=> {
    return state.StoreState.todolist
}

export const TodoList: React.FC = ()=> {

    const dispatch = useDispatch()

    const todoData = useSelector(todoSelector)

    const remove = (index: number)=> {

        dispatch(removeTodo(index))
    }

    return (
        <React.Fragment>
            <h2>Todo一覧画面</h2>

            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>チケット</th>
                        <th>担当者</th>
                    </tr>
                </thead>
                <tbody>
                    {
                    todoData.map(
                        (todo: Todo, index: number)=>{
                            return (
                                <tr key={todo.id}>
                                <td>{todo.id}</td>
                                <td><Link to={`/detail/${todo.id}`} >{todo.todo}</Link></td>
                                <td>{todo.handler}</td>
                                <td><button onClick={ ()=>{remove(index)} }>削除</button></td>
                                </tr>
                            )
                        }
                    )
                    }
                </tbody>
            </table>

        </React.Fragment>
    )
}

// ・チケット一覧画面
// 　・表示項目はID、チケット名、担当者 => クリア
// 　・一覧から削除ボタンを押すと削除可能 => クリア
// 　・チケット名を選択すると対象のチケット詳細画面を表示する => クリア