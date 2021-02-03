import React from 'react';
import { render, fireEvent, screen } from "@testing-library/react";
import renderer from "react-test-renderer";
import App from './App';
import { Provider } from 'react-redux';
import {Router} from 'react-router-dom';
import { createMemoryHistory} from 'history';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom/extend-expect';

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
    const {getByTestId, getByText} = render(
      <Router history={history}>
        <Provider store={mockStore}>
          <App />
        </Provider>
      </Router> 
    );
    expect(getByTestId('header')).toBeInTheDocument()
    fireEvent.click(getByText('Профиль'))
    expect(getByTestId('profile')).toBeInTheDocument()
    
    // userEvent.click(screen.getByText('Профиль'));
    // expect(screen.getByTestId('profile')).toBeInTheDocument()
  });
});