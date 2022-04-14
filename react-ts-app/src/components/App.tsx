import React from 'react';
import {　BrowserRouter as Router,　Switch,　Route } from 'react-router-dom'
import { Nav } from './Nav'
import { TodoList } from './TodoList'
import { TodoCreate } from './TodoCreate'
import { TodoDetail } from './TodoDetail'


const App: React.FC = ()=> { // React.FCは関数コンポーネントであることを型定義している。

  
  return (
    <React.Fragment>
      <Router>
       
        <h1>React-TypeScriptで作るタスク管理ツール</h1>
        
        <Nav />

        <Switch>
          <Route path='/' exact component={TodoList} />
          <Route path='/create' exact component={TodoCreate} />
          <Route path='/detail/:id' exact component={TodoDetail} />
        </Switch>

      </Router>
    </React.Fragment>
  )
}

export default App;
