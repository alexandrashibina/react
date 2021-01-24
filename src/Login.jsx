import React, {Component} from 'react';
import { withAuth } from './AuthContext';
import PropTypes from 'prop-types'
import logo from './logo.svg'

export class Login extends Component {
    
    goToMap = (event) => {
        event.preventDefault();
        this.props.navigate("map");
    };

    goToReg = (event) => {
        event.preventDefault();
        this.props.navigate("reg");
    };

    authenticate = (event) => {
        event.preventDefault();
        const {email, password} = event.target;
        this.props.logIn(email.value, password.value);
    };

    render() {
        return (
            <>
                {this.props.isLoggedIn ? (
                    <p>
                        You are logged in {" "} 
                        <button onClick={this.goToMap}>go to map</button>
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
                                    <button className="form__link" onClick={this.goToReg}>Зарегистрируйтесь</button>
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
    };
}

Login.propTypes = {
    isLoggedIn: PropTypes.bool,
    logIn: PropTypes.func,
    navigate: PropTypes.func,
  };

export const LoginWithAuth = withAuth(Login)