import React, {Component} from 'react';
import {connect} from 'react-redux';
import {authenticate} from './actions';
import logo from './logo.svg'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';
import { Formik } from 'formik';
import TextField from '@material-ui/core/TextField';

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
                                    initialValues={{email:"", password: ""}}
                                    validate={values => {
                                        const errors = {};
                                        if (!values.email) {
                                          errors.email  = '* Email required';
                                        } else if (
                                          !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                                        ) {
                                          errors.email = '* Invalid email address';
                                        }

                                        if (!values.password) {
                                            errors.password = '* Password required';
                                        }                                        
                                        return errors;
                                    }}
                                >
                                    {({ values, errors, touched, handleChange, handleBlur }) => (
                                        <form onSubmit={this.authenticate} className="form__input">
                                            <label htmlFor="email">Email:</label>
                                            <TextField id="email" className="input" type="email" name="email" onChange={handleChange} onBlur={handleBlur} value={values.email} size="28" placeholder="Имя пользователя"
                                            {...(touched.email && errors.email ? {helperText: errors.email, error: true} : {})}/>

                                            <label htmlFor="password">Password:</label>
                                            <TextField id="password" className="input" type="password" name="password" onChange={handleChange} onBlur={handleBlur} value={values.password} size="28" placeholder="Пароль"
                                            {...(touched.password && errors.password ? {helperText: errors.password, error: true} : {})}/>
                                            <button type="submit" className="button">Войти</button>
                                        
                                        </form>
                                    )}
                                </Formik>
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