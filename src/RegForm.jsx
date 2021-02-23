import React, {Component} from 'react';
import {connect} from 'react-redux';
import {registerUser} from './actions';
import logo from './logo.svg'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';
import { Formik } from 'formik';

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
                                <Formik
                                    initialValues={{email:"", password: "", name: "", surname: ""}}
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

                                        if (!values.name) {
                                            errors.name = '* Name required';
                                        }

                                        if (!values.surname) {
                                            errors.surname = '*Surname required';
                                        }

                                        return errors;
                                    }}
                                >
                                    {({ values, errors, touched, handleChange, handleBlur }) => (
                                        <form onSubmit={this.registerUser} className="form__input">
                                            <label htmlFor="email">Email:</label>
                                            <input id="email" className="input" type="email" name="email" onChange={handleChange} onBlur={handleBlur} value={values.email} size="28" placeholder="Имя пользователя"/>
                                            {touched.email && errors.email && <div className="errors">{errors.email}</div>}
                                            <label htmlFor="password">Password:</label>
                                            <input id="password" className="input" type="password" name="password" onChange={handleChange} onBlur={handleBlur} value={values.password} size="28" placeholder="Пароль"/>                      
                                            {touched.password && errors.password && (<div className="errors">{errors.password}</div>)}
                                            <label htmlFor="name">Name:</label>
                                            <input id="name" className="input" type="text" name="name" onChange={handleChange} onBlur={handleBlur} value={values.name} size="28" placeholder="Имя"/>                      
                                            {touched.name && errors.name && (<div className="errors">{errors.name}</div>)}
                                            <label htmlFor="surname">Surname:</label>
                                            <input id="surname" className="input" type="text" name="surname" onChange={handleChange} onBlur={handleBlur} value={values.surname} size="28" placeholder="Фамилия"/>                      
                                            {touched.surname && errors.surname && (<div className="errors">{errors.surname}</div>)}
                                            
                                            <button type="submit" className="button">Зарегистрироваться</button>
                                        </form>
                                    )}
                                </Formik>
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