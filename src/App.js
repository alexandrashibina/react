import React, { Component } from 'react';
import logo from './logo.svg'
import {Map} from './Map.jsx'
import {Login} from './Login.jsx'
import {Profile} from './Profile.jsx'
import {RegForm} from './RegForm.jsx'
import './App.css';


const PAGES = {
  map: <Map/>, 
  profile: <Profile/>, 
  login: <Login/>, 
  reg: <RegForm/>, 
};

class App extends Component {
  state = {currentPage: "map"}

  navigateTo = (page) => {
    this.setState({currentPage: page})
  }

  render () {
   return (
    <div className="wrapper">
      <header className="header" id="header">
        {this.hideHeader}
        <div className="header__logo">
        <img src={logo} className="logo-item" alt="logo" />
        </div>
        <nav className="header__menu">
          <ul>
            <li><button className="header__menu-item" onClick={() => {this.navigateTo("map")}}>Карта</button></li>
            <li><button className="header__menu-item" onClick={() => {this.navigateTo("profile")}}>Профиль</button></li>
            <li><button className="header__menu-item" onClick={() => {this.navigateTo("login")}}>Выйти</button></li>
          </ul>
        </nav>
      </header>
      <main> 
        <section>
          {PAGES[this.state.currentPage]}
        </section>
      </main>
    </div>
    )  
  }
} 

export default App;
