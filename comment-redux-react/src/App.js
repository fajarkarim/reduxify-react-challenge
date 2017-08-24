import React, { Component } from 'react';
import { Provider } from 'react-redux'

import logo from './logo.svg';
import './App.css';
import store from './stores'
import CommentBox from './components/CommentBox'

class App extends Component {

  render(props) {
    return (
    <Provider store={store}>
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <CommentBox/>
      </div>
    </Provider>
    );
  }
}


export default App;
