import React from 'react';

export const Map = () => {
    return (
        <div className="block">
          <div className="block__text">
            <div className="block__text-header">Заполните платежные данные</div>
            <div className="block__text-content">Укажите информацию о банковской карте, чтобы сделать заказ.</div>
            <button className="button"onClick={() => {this.navigateTo("profile")}}>Перейти в профиль</button>
          </div>
        </div>
    );
}