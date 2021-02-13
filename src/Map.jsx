import React, {Component} from 'react';
import PropTypes from 'prop-types';
<<<<<<< HEAD
import mapboxgl from 'mapbox-gl'
=======
import mapboxgl from 'mapbox-gl';
import { Link } from 'react-router-dom';
>>>>>>> feat/week-3

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

  componentWillUnmount() {
    this.map?.remove?.();
  }

  render() {
    return (
      <div>
        <div className="block">
          <div className="block__text">
            <div className="block__text-header">Заполните платежные данные</div>
            <div className="block__text-content">Укажите информацию о банковской карте, чтобы сделать заказ.</div>
            <Link to="/profile" className="button">Перейти в профиль</Link>
          </div>
        </div>
        <div className="map-wrapper">
          <div data-testid="map" className="map" ref={this.mapContainer}></div>
        </div>
      </div>
    );
  }
}

Map.propTypes = {
  navigate: PropTypes.func,
  ref: PropTypes.func
};
