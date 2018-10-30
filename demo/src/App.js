import React, { Component } from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
import '@/assets/styles/App.less';
import Websites from '@/containers/Websites/index';
import TodoList from '@/components/TodoList/index';
import TodoListRedux from '@/containers/TodoList/index';
import Home from '@/containers/Home/index';
import Chat from '@/containers/Chat/index';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router >
          <div>
            <Route exact path="/" component={Home}></Route>
            <Route exact path="/websites" component={Websites}></Route>
            <Route path="/todoredux" component={TodoListRedux}></Route>
            <Route path="/todo" component={TodoList}></Route>
            <Route path="/chat" component={Chat}></Route>
          </div>
        </Router>
      </div>
    );
  }
}
export default App;

