import React, { Component } from 'react';
import logo from '../../logo.svg';
import './style.css';

import {MyCoolButton} from "../MyCoolButton";
import { Comment } from '../Comment';

//eh function
// function App() {
class App extends Component{
  state = {
    showComment: true
  };

  toggleComment = () => {
    this.setState({ showComment: !this.state.showComment})
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <button onClick={this.toggleComment}>X</button>
          <img src={logo} className="App-logo" alt="logo" />
        {this.state.showComment ? <Comment zohiogch="caraa" /> : null }
        {/* <Comment zohiogch="tsetsegee" /> */}
        {/* <MyCoolButton tovchNer = "Миний гайхалтай товч" text = "Энд дарна уу?"/> */}
        {/* <MyCoolButton tovchNer = "Миний гоё товч"/>
        <MyCoolButton tovchNer = "Миний SUPER товч"/>
        <MyCoolButton /> */}
  
          {/* <p>
            Edit <code>src/App.js</code> and save to reload.
          </p> */}
        </header>
      </div>
    );
  }
  
}

export default App;
