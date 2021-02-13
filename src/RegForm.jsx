import React, {Component} from 'react';
import {connect} from 'react-redux';
import {registerUser} from './actions';
import logo from './logo.svg'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';

export class RegForm extends Component {

    registerUser = (event) => {
        event.preventDefault();
        const { email, password, name, surname } = event.target;
        this.props.registerUser(email.value, password.value, name.value, surname.value);
    };

    render() {
        return (
            <>
                {this.props.isLoggedIn ? (
                    <p>
                    You are registered {" "}<Link to="/profile">Go to profile</Link>
                    </p>
                ) : (
                    <div data-testid="reg" className="container"> 
                        <div className="login">
                            <div className="login__logo">
                                <img src={logo} className="logo-item logo-item--white" alt="logo" />
                        </div>
                        <div className="form">
                            <div className="form__header">Зарегистрироваться</div>
                                <form onSubmit={this.registerUser} className="form__input">
                                    <label htmlFor="email">Email:</label>
                                    <input id="email" className="input" type="email" name="email" size="28" placeholder="Имя пользователя"/>
                                    <label htmlFor="password">Password:</label>
                                    <input id="password" className="input" type="password" name="password" size="28" placeholder="Пароль"/>                      
                                    <label htmlFor="name">Name:</label>
                                    <input id="name" className="input" type="text" name="name" size="28" placeholder="Имя"/>                      
                                    <label htmlFor="surname">Surname:</label>
                                    <input id="surname" className="input" type="text" name="surname" size="28" placeholder="Фамилия"/>                      
                                    <button type="submit" className="button">Зарегистрироваться</button>
                                </form>
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
};

  export const RegFormWithConnect = connect(
    (state) => {
          return ({ isLoggedIn: state.auth.isLoggedIn });
      },
    { registerUser }
)(RegForm);