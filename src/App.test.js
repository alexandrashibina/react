import React from 'react';
import { render, fireEvent } from "@testing-library/react";
import renderer from "react-test-renderer";
import App from './App';
import { Provider } from 'react-redux';
import {Link, Router} from 'react-router-dom';
import { createMemoryHistory} from 'history';

jest.mock("./map", () => ({ Map: () => <Map/> }));

describe('App', () => {

  test("renders correctly", () => {
    const mockStore = {
      getState: () => ({auth: {isLoggedIn: true}}),
      subscribe: () => {},
      dispatch: () => {},
    };
    const history = createMemoryHistory();
    const AppTree = renderer.create(
      <Router history={history}>
        <Provider store={mockStore}>
          <App />
        </Provider>
      </Router>
    ).toJSON();
    expect(AppTree).toMatchSnapshot();
  });

  test("opens correct pages when clicked on buttons", () => {
    const mockStore = {
      getState: () => ({auth: {isLoggedIn: true}}),
      subscribe: () => {},
      dispatch: () => {},
    };
    const history = createMemoryHistory();
    const {container, getByText} = render(
      <Router history={history}>
        <Provider store={mockStore}>
          <App />
        </Provider>
      </Router>
    );
    fireEvent.click(getByText('Карта'));
    expect(container.innerHTML).toMatch(<Map/>);
    fireEvent.click(getByText('Профиль'));
    expect(container.innerHTML).toMatch(<Profile/>);
  });
});