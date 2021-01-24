import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { render } from "@testing-library/react";
import renderer from "react-test-renderer";

describe('App component', () => {
  test('renders without cashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it("renders correctly", () => {
  const tree = renderer.create(<App />).toJSON();
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