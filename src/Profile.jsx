import React, {Component} from 'react';
import {connect} from 'react-redux';
import { addBankCard } from './actions';
import mc from './mc.svg';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';


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
              <div className="form__text profile">Способ оплаты</div>
              </div>
              <form className="form__input profile__input">
                <div className="form__input-container">
                  <div className="column">
                    Спасибо, ваши платежные данные сохранены!
                  </div>
                </div>
                <Link to="map" className="button">Построить маршрут</Link>
              </form>
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
                    <input name="cardNumber" className="input" type="text" placeholder="Номер карты"/>
                    <input name="expiryDate" className="input" type="text" placeholder="01/21"/>
                  </div>
                  <div className="column">
                    <input name="cardName" className="input" type="text" placeholder="Имя владельца"/>
                    <input name="cvc" className="input" type="text" placeholder="CVC"/>
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