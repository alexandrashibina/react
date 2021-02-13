import React, {Component} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import mapboxgl from 'mapbox-gl';
import { Link } from 'react-router-dom';
import {drawRoute} from './mapRoute';


const coordinates =
    [
        [30.296064,59.926102],
        [30.295998,59.926178],
        [30.296774,59.926144],
        [30.299091,59.923546],
        [30.286839,59.920956],
        [30.279137,59.916134],
        [30.27503,59.908867],
        [30.25832,59.909126],
        [30.252645,59.904724],
        [30.247093,59.904057],
        [30.240889,59.894974],
        [30.245876,59.893478],
        [30.256395,59.887089],
        [30.289454,59.880245],
        [30.294506,59.877121],
        [30.290562,59.852345],
        [30.280144,59.835918],
        [30.275133,59.833431],
        [30.278881,59.834045],
        [30.31538,59.814285],
        [30.323488,59.808533],
        [30.324347,59.793816],
        [30.317898,59.790894],
        [30.280516,59.797192],
        [30.275146,59.800365],
        [30.274046,59.800365],
        [30.272182,59.800652],
]; //запрашивать координаты с сервера

export class Map extends Component {
  map = null;
  mapContainer = React.createRef();

  componentDidMount() {
    mapboxgl.accessToken = 
    "pk.eyJ1IjoiYWxleGFuZHJhc2hpYmluYSIsImEiOiJja2s5aGk3eHUwY3luMndwYjFmZGhxNzRlIn0.bV3T6FIXJIsb_QyfK6bDWg"
    this.map = new mapboxgl.Map({
      container: this.mapContainer.current,
      style: "mapbox://styles/mapbox/light-v10",
      center: [30.3056504, 59.9429126],
      zoom: 10,
    });
  }

  handleRoute() {
    this.map.on('load', () => {
    drawRoute(this.map, coordinates);      
    });
  }

  componentWillUnmount() {
    this.map?.remove?.();
  }

  render() {
    return (
    <div>
      <div className="block">
        {this.props.cardAdded ? (
          <div className="block__text">
            <div className="block__text-header">Выберите маршрут</div>
            <form onSubmit={this.handleRoute}>
              <input type="text"/>
              <input type="text"/>
              <button type="submit" className="button">Построить маршрут</button>
            </form>
          </div>
        ) : (
          <div className="block__text">
            <div className="block__text-header">Заполните платежные данные</div>
            <div className="block__text-content">Укажите информацию о банковской карте, чтобы сделать заказ.</div>
            <Link to="/profile" className="button">Перейти в профиль</Link>
          </div>
        )}
        <div className="map-wrapper">
          <div data-testid="map" className="map" ref={this.mapContainer}></div>
        </div>
      </div>
    </div>
    );
  }
}

Map.propTypes = {
  navigate: PropTypes.func,
  ref: PropTypes.func
};

export const MapWithConnect = connect(
  (state) => ({cardAdded: state.card.cardAdded}))(Map);