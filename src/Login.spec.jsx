import React from "react";
import { Login } from "./Login";
import { render } from "@testing-library/react";
import { Router } from "react-router-dom";
import { Provider } from "react-redux";
import { createMemoryHistory } from "history";

describe("Login", () => {
    describe("when logged out", () => {
      test("renders form", () => {
        
        const mockStore = {
          getState: () => {},
          subscribe: () => {},
          dispatch: () => {},
        };
        const history = createMemoryHistory();        
        const { getByLabelText } = render(
        <Router history={history}>
          <Provider store={mockStore}>
            <Login />);
          </Provider>
        </Router>);
        expect(getByLabelText("Email:")).toHaveAttribute("name", "email");
        expect(getByLabelText("Password:")).toHaveAttribute("name", "password");
      });
  
    });

    describe("when logged in", () => {
      test("renders profile link", () => {
        const mockStore = {
          getState: () => ({auth: {isLoggedIn: true} }),
          subscribe: () => {},
          dispatch: () => {},
        };
        const history = createMemoryHistory();
        const { container } = render(
          <Router history={history}>
            <Provider store={mockStore}>
              <Login isLoggedIn />
            </Provider>
          </Router>
        );
      expect(container.innerHTML).toMatch("You are logged in.");
      });
    });
  });
  