import React, { Component } from 'react';
import {PrivateRoute} from './PrivateRoute';
import {connect} from 'react-redux';
import {logIn,logOut} from './actions';
import logo from './logo.svg';
import {Map} from './Map.jsx';
<<<<<<< HEAD
import {LoginWithAuth} from './Login.jsx';
import {ProfileWithAuth} from './Profile.jsx';
import {RegFormWithAuth} from './RegForm.jsx';
import {withAuth} from './AuthContext';
import PropTypes from 'prop-types';
=======
import {LoginWithConnect} from './Login.jsx';
import {ProfileWitConnect} from './Profile.jsx';
import {RegFormWithConnect} from './RegForm.jsx';
import PropTypes from 'prop-types'
>>>>>>> feat/week-3
import './App.css';
import { Switch, Link, Route } from 'react-router-dom';

class App extends Component {
  
  unauthenticate = (event) => {
    event.preventDefault();
    this.props.logOut();
  };

  renderHeader = () => {
    return (
      <div>
<<<<<<< HEAD
        <header className="header" data-testid="header">
=======
        <header data-testid="header" className="header" id="header">
>>>>>>> feat/week-3
          {this.hideHeader}
          <div className="header__logo">
          <img src={logo} className="logo-item" alt="logo" />
          </div>
          <nav className="header__menu">
            <ul>
              <li><Link to="/map" className="header__menu-item">Карта</Link></li>
              <li><Link to="/profile" className="header__menu-item">Профиль</Link></li>
              <li><Link to="/" className="header__menu-item" onClick={this.unauthenticate}>Выйти</Link></li>
            </ul>
          </nav>
        </header>
      </div>
    )
  }


  render () {
   return (
    <div className="wrapper">
      {/* { document.location.pathname !== "/" ? this.renderHeader() : null } */}
      {this.renderHeader()}
      <main> 
        <section>
          <Switch>
            <Route exact path="/" component={LoginWithConnect}/>
            <Route exact path="/reg" component={RegFormWithConnect}/>
            <PrivateRoute path="/map" component={Map}/>
            <PrivateRoute path="/profile" component={ProfileWitConnect}/>
          </Switch>
        </section>
      </main>
    </div>
    )  
  }
} 

App.propTypes = {
  isLoggedIn: PropTypes.bool
};

export default connect(
  (state) => ({isLoggedIn: state.auth.isLoggedIn}),
  { logIn, logOut }
)(App);
