import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addNewTodo } from '../actions/ActionCreator'
import { useHistory } from 'react-router-dom'

export const TodoCreate: React.FC = ()=> {

    const dispatch = useDispatch()

    const history = useHistory()
    const handleLink = (path: string)=> { return history.push(path)}
    
    const [inputtodo,setTodo] = useState<string>('') 
    const inputTodo = (event: any)=>{
        setTodo(event.target.value) // チケット名
    }

    const [inputdetail,setTodoDetail] = useState<string>('')
    const inputDetail = (event: any)=>{
        setTodoDetail(event.target.value) // チケット詳細
    }

    const [inputhandler,setHandler] = useState<string>('')
    const inputHandler = (event: any)=>{
        setHandler(event.target.value) // 担当者
    }

    const [inputdate,setDate] = useState<string>('')
    const inputDate = (event: any)=> {
        setDate(event.target.value) // 期日
    }

    const [inputstart,setStart] = useState<string>('')
    const inputStart = (event: any)=> {
        setStart(event.target.value) // 開始日
    }

    // チケット名のバリデーション
    const inputTodoValidate = (inputtodo: string)=> {
        let pattern = /^[\s\S\d]{1,20}$/  // 正規表現パターン(法則性)の作成  //「行頭から行末まで文字列・数字が1文字以上20以内のパターン」
        return pattern.test(inputtodo)
    }

    // 詳細内容のバリデーション
    const inputDetailValidate = (inputdetail: string)=> {
        let pattern = /^[\s\S\d]{1,300}$/
        return pattern.test(inputdetail)
    }

    // 担当者のバリデーション
    const inputHandlerValidate = (inputhandler: string)=> {
        let pattern = /^[\s\S\d]{1,10}$/
        return pattern.test(inputhandler)
    }

    // 期日のバリデーション
    const inputDateValidate = (inputdate: string)=>{

        let today = new Date() // 現在時刻の取得 => Dateオブジェクトを呼び出す！
        //console.log(today)

        let nowDay = today.getDate()
        //console.log(nowDay)

        //console.log(inputdate)
        let limitDate = new Date(inputdate)
        //console.log(limitDate)

        let limitDay = limitDate.getDate()
        //console.log(limitDay)

        //console.log(limitDay - nowDay)

       if(limitDay - nowDay >= 0){
            return true
       } else {
           return false
       }

    }

    // 開始日のバリデーション
    const inputStartValidate = (inputstart: string)=> {

        let today = new Date() // 現在時刻の取得 => Dateオブジェクトを呼び出す！
        //console.log(today)

        let nowDay = today.getDate()
        //console.log(nowDay)

        //console.log(inputdate)
        let startDate = new Date(inputstart)
        //console.log(startDate)

        let startDay = startDate.getDate()
        //console.log(startDay)

        //console.log(limitDay - nowDay)

       if(startDay - nowDay >= 0){
            return true
       } else {
           return false
       }

    }

    type submitTodo = {
        todo: string,
        detail: string,
        handler: string,
        date: string,
        start: string
    }

    const [errors, setError] = useState<string[]>([]) // string型の配列が入るよと型定義

    // バリデーション・チェック
    const submitTask = ()=>{

        setError([]) // 初期化

        let errorlist: string[] = []

        if(inputtodo === ''){
            errorlist.push('チケット名を入力してください')
        } else if(!inputTodoValidate(inputtodo)){ // マッチしなかったら実行
            errorlist.push('チケット名は、1文字以上20文字以内で入力をしてください')
        }

        if(inputdetail === ''){
            errorlist.push('詳細内容を入力してください')
        } else if(!inputDetailValidate(inputdetail)){ // マッチしなかったら実行
            errorlist.push('詳細内容は、1文字以上300文字以内で入力をしてください')
        }

        if(inputhandler === ''){
            errorlist.push('担当者を入力してください')
        } else if(!inputHandlerValidate(inputhandler)){ // マッチしなかったら実行
            errorlist.push('担当者は、1文字以上10文字以内で入力をしてください')
        }

        if(inputdate === ''){
            errorlist.push('期日を選択してください')
        } else if(!inputDateValidate(inputdate)) { // マッチしなかったら実行
            errorlist.push('期日は、今日以降の日付にしてください')
        }

        if(inputstart === ''){
            errorlist.push('開始日を選択してください') 
        } else if(!inputStartValidate(inputstart)) { // マッチしなかったら実行
            errorlist.push('開始日は、今日以降の日付にしてください')
        }

        setError(errorlist)

        if(errorlist.length === 0){

            const submitData: submitTodo = {
                todo:inputtodo,
                detail:inputdetail,
                handler:inputhandler,
                date:inputdate,
                start:inputstart
            }
    
            dispatch(
                addNewTodo(submitData)
            )
    
            handleLink('/')
        }

    }

    return (
        <React.Fragment>
            <h2>Todo作成画面</h2>

            <table>
                <tbody>
                    <tr>
                        <td>
                            <h3>チケット名</h3>
                            <input value={inputtodo} placeholder='チケットのタイトル' onChange={(event)=>{ inputTodo(event) }} />
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <h3>チケット詳細</h3>
                            <textarea value={inputdetail} placeholder='タスクの詳細' onChange={(event)=>{ inputDetail(event) }} />
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <h3>担当者</h3>
                            <input value={inputhandler} placeholder='担当者を入力' onChange={(event)=>{ inputHandler(event) }} />
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <h3>期日(Todoの期限を設定してください)</h3>
                            <input type='date' value={inputdate} onChange={(event)=>{ inputDate(event) }} />
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <h3>開始日</h3>
                            <input type='date' value={inputstart} onChange={(event)=>{ inputStart(event) }} />
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <button onClick={ ()=>{submitTask()} }>Todoチケット作成</button>
                            <div>
                                {errors.map(
                                    (error,index)=> {
                                        return (
                                            <div key={index}>
                                                <h4>入力エラー{index + 1}</h4>
                                                <h5>{error}</h5>
                                            </div>
                                        )
                                    }
                                )}
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>

        </React.Fragment>
    )
}

// ・チケット作成画面
// 　・チケット名、詳細（内容）、担当者、期日、開始日　を入力して保存ができる => クリア
// 　・保存ボタン押下後は一覧画面に遷移 => クリア

// チケット作成画面　　　条件詳細 => 条件に合っているかどうか？ => バリデーション・チェック

// -チケット名　← 1文字以上20文字以内　=> クリア

// -詳細（内容）　←1文字以上300文字以内 => クリア

// -担当者　1文字以上10文字以内 => クリア

// -期日、開始日　←yyyy/mm/dd の記載方法でなければならない => 選択されているかどうかのチェック 現在との確認 => クリア