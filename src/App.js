import React, { Component } from 'react';
import {PrivateRoute} from './PrivateRoute';
import {connect} from 'react-redux';
import {logIn,logOut} from './actions';
import logo from './logo.svg';
import {MapWithConnect} from './Map.jsx';
import {LoginWithConnect} from './Login.jsx';
import {ProfileWithConnect} from './Profile.jsx';
import {RegFormWithConnect} from './RegForm.jsx';
import PropTypes from 'prop-types'
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
        <header className="header" data-testid="header">
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
            <PrivateRoute path="/map" component={MapWithConnect}/>
            <PrivateRoute path="/profile" component={ProfileWithConnect}/>
          </Switch>
        </section>
      </main>
    </div>
    )  
  }
} 

App.propTypes = {
  isLoggedIn: PropTypes.bool,
};

export default connect(
  (state) => ({isLoggedIn: state.auth.isLoggedIn}, {cardAdded: state.auth.cardAdded}),
  { logIn, logOut }
)(App);
