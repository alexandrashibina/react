import React, {Component} from 'react';
import {connect} from 'react-redux';
import {authenticate} from './actions';
import logo from './logo.svg'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';
import { Formik } from 'formik';

export class Login extends Component {
    state = {
        values: {
          email: "",
          password: "",
        },
        errors: {
          email: "",
          password: "",
        },
      };

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
                    <div data-testid="login" className="container"> 
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
                                <Formik
                                    validate={values => {
                                        const errors = {
                                            email: '',
                                            password: '',
                                        };
                                        if(!values.email.includes('@')){
                                            errors.email = 'invalid email';
                                        }
                                        return errors;
                                    }}
                                    render={({touched, errors}) => {
                                        return (
                                            <form onSubmit={this.authenticate} className="form__input">
                                                <label htmlFor="email">Email:</label>
                                                <input id="email" className="input" type="email" name="email" size="28" placeholder="Имя пользователя"/>
                                                {touched.email && errors.email && <div>{errors.email}</div>}
                                                <label htmlFor="password">Password:</label>
                                                <input id="password" className="input" type="password" name="password" size="28" placeholder="Пароль"/>                      
                                                {touched.password && errors.password && (<div>{errors.password}</div>)}
                                                <button type="submit" className="button">Войти</button>
                                            </form>
                                        );
                                    }}
                                />
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
    (state) => ({ isLoggedIn: state.auth.isLoggedIn }),
    { authenticate }
)(Login);