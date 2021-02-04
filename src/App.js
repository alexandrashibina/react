import React, { Component } from 'react';
import logo from './logo.svg';
import {Map} from './Map.jsx';
import {LoginWithAuth} from './Login.jsx';
import {ProfileWithAuth} from './Profile.jsx';
import {RegFormWithAuth} from './RegForm.jsx';
import {withAuth} from './AuthContext';
import PropTypes from 'prop-types';
import './App.css';

class App extends Component {
  state = {currentPage: "map"}
  
  PAGES = {
    map: (props) => <Map {...props}/>, 
    profile: (props) => <ProfileWithAuth {...props}/>, 
    login: (props) => <LoginWithAuth {...props}/>, 
    reg: (props) => <RegFormWithAuth {...props}/>, 
  };

  navigateTo = (page) => {
    if (this.props.isLoggedIn) {
      this.setState({currentPage: page});
    }else{
      this.setState({currentPage: "login"});
    }
  };

  unauthenticate = (event) => {
    event.preventDefault();
    this.props.logOut();
    this.props.navigate("login");
  };

  renderHeader = () => {
    return (
      <div>
        <header className="header" data-testid="header">
          {this.hideHeader}
          <div className="header__logo">
          <img src={logo} className="logo-item" alt="logo" />
          </div>
          <nav className="header__menu">
            <ul>
              <li><button className="header__menu-item" onClick={() => {this.navigateTo("map")}}>Карта</button></li>
              <li><button className="header__menu-item" onClick={() => {this.navigateTo("profile")}}>Профиль</button></li>
              <li><button className="header__menu-item" onClick={this.unauthenticate}>Выйти</button></li>
            </ul>
          </nav>
        </header>
      </div>
    )
  }


  render () {
   return (
    <div className="wrapper">
      {this.state.currentPage !== "login"?  this.state.currentPage !== "reg"? this.renderHeader() : null : null}
      <main> 
        <section>
          {this.PAGES[this.state.currentPage]({navigate: this.navigateTo})}
        </section>
      </main>
    </div>
    )  
  }
} 

App.propTypes = {
  isLoggedIn: PropTypes.bool
};

export default withAuth(App);
