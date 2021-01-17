import React from 'react';
import logo from './logo.svg'

export const RegForm = () => {
    return (
        <div className="container"> 
            <div className="login">
                <div className="login__logo">
                    <img src={logo} className="logo-item logo-item--white" alt="logo" />
                </div>
                <div className="form">
                    <div className="form__header">Войти</div>
                    <form className="form__input">
                        <label htmlFor="email">Email:</label>
                        <input id="email" className="input" type="email" name="email" size="28" placeholder="Имя пользователя"/>
                        <label htmlFor="password">Password:</label>
                        <input id="password" className="input" type="password" name="password" size="28" placeholder="Пароль"/>                      
                    </form>
                        <button className="button" onClick={() => {this.navigateTo("map")}}>Войти</button>
                </div>
            </div>
        </div>
    );
}