import React from 'react';

export const Profile = () => {
  return (
      <div className="container"> 
          <div className="login">
              <div className="form">
                  <div className="block__text-header">Профиль</div>
                  <div className="form__text">
                      <div className="form__content">Способ оплаты</div>
                  </div>
                  <form className="form__input">
                      <div className="left-column">
                        <input className="input" type="text" placeholder="Номер карты"/>
                        <input className="input" type="text" placeholder="01/21"/>
                      </div>
                      <div className="right-column">
                        <input className="input" type="text" placeholder="Имя владельца"/>
                        <input className="input" type="text" placeholder="CVC"/>
                      </div>
                      <button className="button" onClick={() => {this.navigateTo("map")}}>Войти</button>
                  </form>
              </div>
          </div>
      </div>
  );
} 

export default Profile;
