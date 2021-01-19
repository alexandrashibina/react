import React from 'react';

export const Map = (props) => {
    return (
        <div className="block">
          <div className="block__text">
            <div className="block__text-header">Заполните платежные данные</div>
            <div className="block__text-content">Укажите информацию о банковской карте, чтобы сделать заказ.</div>
            <button className="button" onClick={props.onProfile}>Перейти в профиль</button>
          </div>
        </div>
    );
}