import React, {Component} from 'react';
import {connect} from 'react-redux';
import { addBankCard } from './actions';
import mc from './mc.svg';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import TextField from '@material-ui/core/TextField';
import { Formik } from 'formik';

export class Profile extends Component {

  handleSubmit = (event) => {
    event.preventDefault();
    const { cardNumber, expiryDate, cardName, cvc } = event.target;
    this.props.addBankCard(cardNumber.value, expiryDate.value, cardName.value, cvc.value);
  }

  render() {
    return (
      <>
        {this.props.cardAdded ? (
        <div data-testid="profile" className="container"> 
          <div className="login">
            <div className="form">
              <div className="profile__content">
                <div className="form__header profile">Профиль</div>
                <div className="form__text profile">Данные карты</div>
              </div>
              <Formik initialValues={{email:"", password: ""}}
                validate={values => {
                    const errors = {};
                    if (!values.cardNumber) {
                      errors.cardNumber  = '* Email required';
                    }

                    if (!values.expiryDate) {
                        errors.expiryDate = '* Expiry date required';
                    }

                    if (!values.cardName) {
                        errors.cardName = '* Name required';
                    } 

                    if (!values.cvc) {
                        errors.cvc = '* CVC required';
                    }   

                    return errors;
                }}
              >
                {({ values, errors, touched, handleChange, handleBlur }) => (
                  <form className="form__input profile__input">
                    <div className="form__input-container">
                      <div className="column">
                      <span className="mc-icon"><img className="mc-img" src={mc} alt="MC"/></span>

                        <TextField id="standard-basic" name="cardNumber" onChange={handleChange} onBlur={handleBlur} value={values.cardNumber} label="Номер карты" className="input"
                        {...(touched.cardNumber && errors.cardNumber ? {helperText: errors.cardNumber, error: true} : {})}/>

                        <TextField id="date" name="expiryDate" onChange={handleChange} onBlur={handleBlur} value={values.expiryDate} label="Дейстителен до" type="date" className="input" InputLabelProps={{shrink: true}}
                        {...(touched.expiryDate && errors.expiryDate ? {helperText: errors.expiryDate, error: true} : {})}/>

                      </div>
                      <div className="column">

                        <TextField id="standard-basic" name="cardName" onChange={handleChange} onBlur={handleBlur} value={values.cardName} label="Имя владельца" className="input"
                        {...(touched.cardName && errors.cardName ? {helperText: errors.cardName, error: true} : {})}/>

                        <TextField id="standard-basic" name="cvc" onChange={handleChange} onBlur={handleBlur} value={values.cvc} label="CVC" className="input"
                        {...(touched.cvc && errors.cvc ? {helperText: errors.cvc, error: true} : {})}/>

                      </div>
                    </div>
                    <Link to="map" className="button">Построить маршрут</Link>
                  </form>
                )}
              </Formik>
            </div>
          </div>
        </div>
        ) : (
        <div data-testid="profile" className="container"> 
          <div className="login">
            <div className="form">
              <div className="profile__content">
              <div className="form__header profile">Профиль</div>
              <div className="form__text profile">Способ оплаты</div>
              </div>
              <form onSubmit={this.handleSubmit} className="form__input profile__input">
                <div className="form__input-container">
                  <div className="column">
                  <span className="mc-icon"><img className="mc-img" src={mc} alt="MC"/></span>
                    <TextField id="standard-basic" label="Номер карты" name="cardNumber" className="input" placeholder="0000 0000 0000 0000"/>
                    <TextField id="date" format="MM/yy" label="Дейстителен до" type="date" className="input" name="expiryDate" InputLabelProps={{shrink: true}}/>
                  </div>
                  <div className="column">
                    <TextField id="standard-basic" label="Имя владельца" name="cardName" className="input"/>
                    <TextField id="standard-basic" label="CVC" name="cvc" className="input"/>
                  </div>
                </div>
                <button type="submit" to="map" className="button">Сохранить данные</button>
              </form>
            </div>
          </div>
        </div>
        )}
      </>
    );
  }
} 

Profile.propTypes = {
  cardAdded: PropTypes.bool,
};

export const ProfileWithConnect = connect(
  (state) => ({cardAdded: state.card.cardAdded}),
  {addBankCard}
)(Profile);