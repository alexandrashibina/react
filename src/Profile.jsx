import React, {Component} from 'react';
import {connect} from 'react-redux';
import { addBankCard } from './actions';
import mc from './mc.svg';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import TextField from '@material-ui/core/TextField';

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
              <form className="form__input profile__input">
                <div className="form__input-container">
                  <div className="column">
                  <span className="mc-icon"><img className="mc-img" src={mc} alt="MC"/></span>
                    <TextField id="standard-basic" name="cardNumber" label="Номер карты" className="input"/>
                    <TextField id="date" name="expiryDate" format="MM/yy" label="Дейстителен до" type="date" className="input" InputLabelProps={{shrink: true}}/>
                  </div>
                  <div className="column">
                    <TextField id="standard-basic" name="cardName" label="Имя владельца" className="input"/>
                    <TextField id="standard-basic" name="cvc" label="CVC" className="input"/>
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



{/* <div data-testid="profile" className="container"> 
<div className="login">
  <div className="form">
    <div className="profile__content">
    <div className="form__header profile">Спасибо!</div>

    </div>
    <form className="form__input profile__input">
      <div className="form__input-container">
        <div>
          Ваши платежные данные сохранены
        </div>
      </div>
      <Link to="map" className="button">Построить маршрут</Link>
    </form>
  </div>
</div>
</div> */}