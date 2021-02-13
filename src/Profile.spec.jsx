import React from "react";
import { Profile } from "./Profile";
import renderer from "react-test-renderer";
import { Router } from "react-router-dom";
import { Provider } from "react-redux";
import { createMemoryHistory } from "history";

describe("Profile", () => {
  test("renders correctly", () => {
    
    const mockStore = {
      getState: () => ({auth: {isLoggedIn: true} }),
      subscribe: () => {},
      dispatch: () => {},
    };
    const history = createMemoryHistory();
    
    const tree = renderer.create(
      <Router history={history}>
      <Provider store={mockStore}>
        <Profile />
      </Provider>
    </Router>
    ).toJSON();
    expect(tree).toMatchSnapshot();
   });
})