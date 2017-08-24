import React, { Component } from 'react';
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

import logo from './logo.svg';
import './App.css';
import store from './stores'
import CommentBox from './components/CommentBox'
import RandomQuote from './components/RandomQuote'

class App extends Component {

  render(props) {
    return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <div className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h2>Welcome to React</h2>
          </div>
          <p className="App-intro">
            To get started, edit <code>src/App.js</code> and save to reload.
          </p>
          <div>
            <Link to="/">CommentBox</Link> / 
            <Link to="/thunk">RandomQuote with Thunk</Link>
          </div>
          <Route exact path="/" component={CommentBox}/>
          <Route path="/thunk" component={RandomQuote}/>
        </div>
      </Router>
    </Provider>
    );
  }
}


export default App;
