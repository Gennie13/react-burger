import React, { Component } from 'react';
import css from './style.module.css';

import Toolbar from '../../components/Toolbar';
import BurgerPage from '../BurgerPage'
import SideBar from '../../components/SideBar';

//class bolgoj bj state hiij ugnu
class App extends Component {
  state = {
    showSideBar: false
  };

  toggleSideBar = () => {
    this.setState(prevState => {
      return {showSideBar: !prevState.showSideBar}
    })
  }
  render () {
    return (
      <div>
        <Toolbar toggleSideBar={this.toggleSideBar} />
        <SideBar 
          showSideBar={this.state.showSideBar} 
          toggleSideBar={this.toggleSideBar}/>
        <main className={css.Content}>
          <BurgerPage />
        </main>
        
      </div>
    );
  }
}

export default App;
