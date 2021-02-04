import React from 'react';
import { render, fireEvent } from "@testing-library/react";
import ReactDOM from 'react-dom';
import App from './App';
import renderer from "react-test-renderer";
import '@testing-library/jest-dom/extend-expect';


jest.mock("mapbox-gl", () => ({
  Map: jest.fn(() => ({ remove: () => {} })),
}));

describe('App component', () => {
  it("renders correctly", () => {
    const tree = renderer.create(
        <App />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
  
  it("opens correct pages when clicked on buttons", () => {
    const { getByTestId, getByText } = render(
    <App isLoggedIn />
    );

    expect(getByTestId("header")).toBeInTheDocument()
    
    fireEvent.click(getByText('Карта'))
    expect(getByTestId("map")).toBeInTheDocument()

    fireEvent.click(getByText('Профиль'));
    expect(getByTestId("profile")).toBeInTheDocument()
  });
});