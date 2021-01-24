import React, {Component} from 'react';
import logo from './logo.svg'
import PropTypes from 'prop-types'
import { withAuth } from './AuthContext';

export class RegForm extends Component {

    goToMap = (event) => {
        event.preventDefault();
        this.props.navigate("map");
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
                        You are registered {" "} 
                        <button onClick={this.goToMap}>go to map</button>
                    </p>
                ) : (
                    <div className="container"> 
                <div className="login">
                    <div className="login__logo">
                        <img src={logo} className="logo-item logo-item--white" alt="logo" />
                    </div>
                    <div className="form">
                        <div className="form__header">Зарегистрироваться</div>
                        <form className="form__input">
                            <label htmlFor="email">Email:</label>
                            <input id="email" className="input" type="email" name="email" size="28" placeholder="Имя пользователя"/>
                            <label htmlFor="password">Password:</label>
                            <input id="password" className="input" type="password" name="password" size="28" placeholder="Пароль"/>                      
                        </form>
                            <button type="submit" className="button">Зарегистрироваться</button>
                    </div>
                </div>
            </div>
                )}
            </>
        );
    };
}

RegForm.propTypes = {
    isLoggedIn: PropTypes.bool,
    logIn: PropTypes.func,
    navigate: PropTypes.func,
  };

export const RegFormWithAuth = withAuth(RegForm)