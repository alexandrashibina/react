import React, {Component} from 'react';
import { withAuth } from './AuthContext';
import mc from './mc.svg'

export class Profile extends Component {
  goToMap = (event) => {
    event.preventDefault();
    this.props.navigate("map");
  };

  render() {
    return (
        <div className="container" data-testid="profile"> 
          <div className="login">
            <div className="form">
              <div className="profile__content">
              <div className="form__header profile">Профиль</div>
              <div className="form__text profile">Способ оплаты</div>
              </div>
              <form className="form__input profile__input">
                <div className="form__input-container">
                  <div className="column">
                  <span className="mc-icon"><img className="mc-img" src={mc} alt="MC"/></span>
                    <input className="input" type="text" placeholder="Номер карты"/>
                    <input className="input" type="text" placeholder="01/21"/>
                  </div>
                  <div className="column">
                    <input className="input" type="text" placeholder="Имя владельца"/>
                    <input className="input" type="text" placeholder="CVC"/>
                  </div>
                </div>
                <button className="button" onClick={this.goToMap}>Сохранить данные</button>
              </form>
            </div>
          </div>
        </div>
    );
  }
} 

export const ProfileWithAuth = withAuth(Profile)