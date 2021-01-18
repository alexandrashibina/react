import React, { Component } from 'react';
import logo from './logo.svg'
import {Map} from './Map.jsx'
import {Login} from './Login.jsx'
import {Profile} from './Profile.jsx'
import {RegForm} from './RegForm.jsx'
import './App.css';



class App extends Component {
  state = {currentPage: "map"}
  
  PAGES = {
    map: <Map/>, 
    profile: <Profile/>, 
    login: <Login onLogin={() => this.navigateTo("map")} onRegister={() => this.navigateTo("reg")}/>, 
    reg: <RegForm/>, 
  };

  navigateTo = (page) => {
    this.setState({currentPage: page})
  }

  renderHeader = () => {
    return (
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
    )
  }

  render () {
   return (
    <div className="wrapper">
      {this.state.currentPage !== "login" && this.renderHeader()}
      <main> 
        <section>
          {this.PAGES[this.state.currentPage]}
        </section>
      </main>
    </div>
    )  
  }
} 

export default App;
