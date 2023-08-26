import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import css from './style.module.css';

import Toolbar from '../../components/Toolbar';
import BurgerPage from '../BurgerPage'
import SideBar from '../../components/SideBar';
import Logout from '../../components/Logout';
import OrderPage from '../OrderPage';
import LoginPage from '../LoginPage';
import ShippingPage from "../ShippingPage";
import SignupPage from "../SignupPage";
import * as actions from "../../redux/actions/loginActions";
import * as signupActions from "../../redux/actions/signupActions";


//class bolgoj bj state hiij ugnu
class App extends Component {
  //suudernii sidebar
  state = {
    showSideBar: false,
    // favorite: "N/A"
  };
  //suudernii utgiig solih function-g prevState-neriig n solij bolno, ashilah
  toggleSideBar = () => {
    this.setState(prevState => {
      return {showSideBar: !prevState.showSideBar}
    });
  };

  // choose = (orts) => {
  //   this.setState({favorite: orts});
  // }


  componentDidMount = () => {
    //avtomat logind bga esehiig shalgad avah
    const token = localStorage.getItem('token');
    const userId = localStorage.getItem('userId');
    const expireDate = new Date(localStorage.getItem('expireDate'));
    // const refreshToken = localStorage.getItem('refreshToken');

    //bval function doo damjuulj ugnu
    if(token) {
      if(expireDate > new Date()) {
        this.props.autoLogin(token, userId);
        //token duusah hugatsaa
        this.props.autoLogout(expireDate.getTime() - new Date().getTime());
      }else {
        //token hugatsaan duussan 
        this.props.logout();
      }
      
    }
  };

  render () {
    return (
      <div>
        {/* hamburger deer darhad toggle utgiig solino  */}
        <Toolbar toggleSideBar={this.toggleSideBar} />
        <SideBar 
          showSideBar={this.state.showSideBar} 
          toggleSideBar={this.toggleSideBar}
        />
        
        <main className={css.Content}>
          {/* UserId: {this.props.userId} */}

          {/* <p> Сонгосон орц: {this.state.favorite}</p> */}
          {this.props.userId ? (
            <Switch>
              <Route path='/logout' component={Logout}/>
              <Route path='/orders' component={OrderPage}/>
              <Route path='/ship' component={ShippingPage}/>
              <Route path='/' exact component={BurgerPage}/>

            </Switch>
          ) : (
            <Switch>
              <Route path='/login' component={LoginPage}/>
              <Route path='/signup' component={SignupPage}/>
            
              {/* burgerPage ruu choose damjuulna*/}
              {/* <Route path='/' render={()=> <BurgerPage choose={this.choose} />}/> */}      
              {/* ali n ch bhgu bol defaultaar login ruu usren      */}
              <Redirect to="/login"/>
          </Switch>
          )}
          {/* Route path */}
          
        </main>
        
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    userId: state.signupReducer.userId
  };
};
const mapDispatchToProps = dispatch => {
  return {
    autoLogin: (token, userId) => dispatch(actions.loginUserSuccess(token, userId)),
    logout: () => dispatch(signupActions.logout()),
    autoLogout: () => dispatch(signupActions.autoLogout()),
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(App);
