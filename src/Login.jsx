import React, {Component} from 'react';
import {connect} from 'react-redux';
import {authenticate} from './actions';
import PropTypes from 'prop-types'
import logo from './logo.svg'
import { Link } from 'react-router-dom';


export class Login extends Component {

    authenticate = (event) => {
        event.preventDefault();
        const { email, password } = event.target;
        this.props.authenticate(email.value, password.value);
      };
    
    render() {
        return (
            <>
                {this.props.isLoggedIn ? (
                    <p>
                    You are logged in. <Link to="/profile">Go to profile</Link>
                    </p>
                ) : (
                    <div className="container"> 
                        <div className="login">
                            <div className="login__logo">
                                <img src={logo} className="logo-item logo-item--white" alt="logo" />
                            </div>
                            <div className="form">
                                <div className="form__header">Войти</div>
                                <div className="form__content">
                                    <div className="form__text">Новый пользователь?</div>
                                    <Link to="/reg" className="form__link">Зарегистрируйтесь</Link>
                                </div>
                                <form onSubmit={this.authenticate} className="form__input">
                                    <label htmlFor="email">Email:</label>
                                    <input id="email" className="input" type="email" name="email" size="28" placeholder="Имя пользователя"/>
                                    <label htmlFor="password">Password:</label>
                                    <input id="password" className="input" type="password" name="password" size="28" placeholder="Пароль"/>                      
                                    <button type="submit" className="button">Войти</button>
                                </form>
                            </div>
                        </div>
                    </div>
                )}
            </>
        );
    }    
}

Login.propTypes = {
    isLoggedIn: PropTypes.bool,
    logIn: PropTypes.func,
  };

export const LoginWithConnect = connect(
    (state) => ({isLoggedIn: state.auth.isLoggedIn}),
    { authenticate }
)(Login);