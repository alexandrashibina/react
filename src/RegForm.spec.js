import React from "react";
import { RegForm } from "./RegForm";
import { render } from "@testing-library/react";
import { Router } from "react-router-dom";
import { Provider } from "react-redux";
import { createMemoryHistory } from "history";

describe("RegForm", () => {
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
            <RegForm />);
          </Provider>
        </Router>);
        expect(getByLabelText("Email:")).toHaveAttribute("name", "email");
        expect(getByLabelText("Password:")).toHaveAttribute("name", "password");
      });
  
    });

    describe("when registered", () => {
      test("renders profile link", () => {
        const mockStore = {
          getState: () => ({auth: {isLoggedIn: true} }),
          subscribe: () => {},
          dispatch: () => {},
        };
        const history = createMemoryHistory();
        const { getByText } = render(
          <Router history={history}>
            <Provider store={mockStore}>
              <RegForm isLoggedIn />
            </Provider>
          </Router>
        );
        expect(getByText("You are registered")).toBeInTheDocument()
      });
    });
  });
  