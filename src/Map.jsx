import React, {Component} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import mapboxgl from 'mapbox-gl';
import { Link } from 'react-router-dom';
import {drawRoute} from './mapRoute';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import {getAddressList, getRoute} from './actions';


export class Map extends Component {
  map = null;
  mapContainer = React.createRef();

  state = {}

  handleFirstChange (event) {
    this.setState({firstAddress: event.target.value})
  }

  handleSecondChange (event) {
    this.setState({secondAddress: event.target.value})
  }

  handleRoute(event) {
    event.preventDefault();
    const { firstAddress, secondAddress } = this.state;
    this.props.getRoute(firstAddress, secondAddress);
  }

  componentDidMount() {
    mapboxgl.accessToken = 
    "pk.eyJ1IjoiYWxleGFuZHJhc2hpYmluYSIsImEiOiJja2s5aGk3eHUwY3luMndwYjFmZGhxNzRlIn0.bV3T6FIXJIsb_QyfK6bDWg"
    this.map = new mapboxgl.Map({
      container: this.mapContainer.current,
      style: "mapbox://styles/mapbox/light-v10",
      center: [30.3056504, 59.9429126],
      zoom: 10,
    });

    this.props.getAddressList && this.props.getAddressList();
  }

  componentDidUpdate(nextProps){
    if (nextProps.routes !== this.props.routes) {
      drawRoute(this.map, nextProps.routes);
    }
  }

  componentWillUnmount() {
    this.map?.remove?.();
  }

  render() {
    const {addresses} = this.props;
    const {firstAddress, secondAddress} = this.state;
    return (
    <div className="map-wrapper">
      <div data-testid="map" className="map" ref={this.mapContainer}></div>
      <div className="block">
        {this.props.cardAdded ? ( 
          <div className="block__text">
            <div className="block__text-header">Выберите маршрут</div>
              <form onSubmit={this.handleRoute.bind(this)}>
                <FormControl>
                  <InputLabel name="address1">Откуда?</InputLabel>
                  <Select onChange={this.handleFirstChange.bind(this)} value={firstAddress}>
                    {addresses && addresses.filter(item => item !== secondAddress).map(address=> (
                      <MenuItem key={address} value={address}>{address}</MenuItem>
                    ))}
                  </Select>
                </FormControl>
                <FormControl>
                  <InputLabel name="address2">Куда?</InputLabel>
                  <Select onChange={this.handleSecondChange.bind(this)} value={secondAddress}>
                    {addresses && addresses.filter(item => item !== firstAddress).map(address=> (
                      <MenuItem key={address} value={address}>{address}</MenuItem>
                    ))}
                  </Select>
                </FormControl>
                <button type="submit" className="button map-btn">Построить маршрут</button>
              </form>
          </div> 
        ) : (
          <div className="block__text">
            <div className="block__text-header">Заполните платежные данные</div>
            <div className="block__text-content">Укажите информацию о банковской карте, чтобы сделать заказ.</div>
            <Link to="/profile" className="button">Перейти в профиль</Link>
          </div>
        )}
      </div>
    </div>
    );
  }
}

Map.propTypes = {
  cardAdded: PropTypes.bool,
};

export const MapWithConnect = connect(
  (state) => ({cardAdded: state.card.cardAdded, addresses: state.addresses, routes: state.route}),
  {getAddressList, getRoute}
  )(Map);