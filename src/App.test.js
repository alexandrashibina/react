import React from 'react';
import { render } from "@testing-library/react";
import renderer from "react-test-renderer";
import App from './App';
import { Provider } from 'react-redux';
import {Router} from 'react-router-dom';
import { createMemoryHistory} from 'history';
import '@testing-library/jest-dom/extend-expect';

jest.mock("mapbox-gl", () => ({
  Map: jest.fn(() => ({ remove: () => {} })),
}));

describe('App', () => {

  test("renders correctly", () => {
    const mockStore = {
      getState: () => (
        {
          auth: {isLoggedIn: true},
          card: {cardAdded: true},
        }
      ),
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

  it("opens correct pages when clicked on buttons", () => {
    const mockStore = {
      getState: () => (
        {
          auth: {isLoggedIn: true},
          card: {cardAdded: true},
        }
      ),
      subscribe: () => {},
      dispatch: () => {},
    };
    const history = createMemoryHistory();
    history.push("/map")
    // history.push("/profile")
    const {getByTestId} = render(
      <Router history={history}>
        <Provider store={mockStore}>
          <App />
        </Provider>
      </Router> 
    );

    expect(getByTestId("header")).toBeInTheDocument()
    
    // fireEvent.click(getByText("Профиль"))
    // expect(getByTestId("profile")).toBeInTheDocument()
    
    // fireEvent.click(getByText("Карта"));
    expect(getByTestId("map")).toBeInTheDocument()
  });
});