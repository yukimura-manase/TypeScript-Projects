import React from 'react'
import { useParams, useHistory } from 'react-router-dom'
import { useSelector } from "react-redux"
//import { State } from './TodoList'

type State = { // StoreStateで保持しているデータの型を定義する！ => データ構造が明確化される(見える化)！
    StoreState:{
      todolist: [
           { id: number, todo: string, detail:string, handler: string, date: string, start: string }
        ]
    }
}

const todoSelector = (state: State)=> {
    return state.StoreState.todolist
}

export const TodoDetail: React.FC = ()=> {

    const todoData = useSelector(todoSelector)

    const history = useHistory()
    const handleLink = (path: string)=> { return history.push(path) }

    type Parameter = { id: string }

    const {id}: Parameter = useParams()
    // console.log({id})
    // console.log(id)
    //console.log(useParams()) // useParamsの正体がわかる
    // console.log(paramsId) // useParams()を格納しているid
    // console.log(paramsId.id)

    type detail = { id: number, todo: string, detail:string, handler: string, date: string, start: string }
    
    const detailTodo: detail | undefined = todoData.find( (todo: detail) => todo.id === Number(id))
    //console.log(detailTodo)

     // チケット名、詳細（内容）、担当者、期日、開始日
    return (
        <React.Fragment>
            <h2>Todo詳細画面</h2>

            <table>
                <tbody>
                    <tr>
                        <th>
                            <h3>Todo名</h3>
                        </th>
                        <td>
                            <h5>{ typeof detailTodo === 'object' ? detailTodo.todo : false }</h5>
                        </td>
                    </tr>
                    <tr>
                        <th>
                            <h3>チケット詳細</h3>
                        </th>
                        <td>
                            <h5>{ typeof detailTodo === 'object' ? detailTodo.detail : false }</h5>
                        </td>
                    </tr>
                    <tr>
                        <th>
                            <h3>担当者</h3>
                        </th>
                        <td>
                            <h5>{ typeof detailTodo === 'object' ? detailTodo.handler : false }</h5>
                        </td>
                    </tr>
                    <tr>
                        <th>
                            <h3>期日</h3>
                        </th>
                        <td>
                            <h5>{ typeof detailTodo === 'object' ? detailTodo.date : false }</h5>
                        </td>
                    </tr>
                    <tr>
                        <th>
                            <h3>開始日</h3>
                        </th>
                        <td>
                            <h5>{ typeof detailTodo === 'object' ? detailTodo.start : false }</h5>
                        </td>
                    </tr>
                    <tr>
                        <th>
                            <h3>Todo一覧画面に戻る</h3>
                        </th>
                        <td>
                            <button onClick={ ()=> { handleLink('/') } }>ボタン</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </React.Fragment>
    )
}


// ・チケット詳細画面（更新処理をしたい場合はここで行う）
// 　・チケットの詳細情報を全て画面に表示することができる => クリア
// 　・戻るボタンを押すと一覧画面に遷移 => クリア
// 　・更新ボタンを押すと内容を更新し、一覧画面に遷移（更新機能を付けたい場合）