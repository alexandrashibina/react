import React, {Component} from 'react';
import {connect} from 'react-redux';
import { addBankCard } from './actions';
import mc from './mc.svg';
import { Link } from 'react-router-dom';

export class Profile extends Component {
  
  handleSubmit = (event) => {
    event.preventDefault();
    const { cardNumber, expiryDate, cardName, cvc } = event.target;
    this.props.addBankCard(cardNumber.value, expiryDate.value, cardName.value, cvc.value);
  }

  render() {
    return (
<<<<<<< HEAD
        <div className="container" data-testid="profile"> 
=======
        <div data-testid="profile" className="container"> 
>>>>>>> feat/week-3
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
                    <input name="cardNumber" className="input" type="text" placeholder="Номер карты"/>
                    <input name="expiryDate" className="input" type="text" placeholder="01/21"/>
                  </div>
                  <div className="column">
                    <input name="cardName" className="input" type="text" placeholder="Имя владельца"/>
                    <input name="cvc" className="input" type="text" placeholder="CVC"/>
                  </div>
                </div>
                <Link to="map" className="button" >Сохранить данные</Link>
              </form>
            </div>
          </div>
        </div>
    );
  }
} 

export const ProfileWitConnect = connect(null,null, {addBankCard})(Profile);