import React from 'react';
import { render } from "@testing-library/react";
import ReactDOM from 'react-dom';
import App from './App';
import renderer from "react-test-renderer";


jest.mock("./map", () => ({ Map: () => <Map/> }));

describe('App component', () => {
  it("renders correctly", () => {
    const tree = renderer.create(
        <App />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
  
  test("opens correct pages when clicked on buttons", () => {
    const { getByText, container } = render(<App isLoggedIn />);
    fireEvent.click(getByText('Карта'));
    expect(container).toMatch(<Map/>);
    fireEvent.click(getByText('Профиль'));
    expect(container).toMatch(<Profile/>);
  });

});