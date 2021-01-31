import React from "react";
import { Map } from "./Map";
import { App } from "./App";
import { render } from "@testing-library/react";
import mapboxgl from "mapbox-gl";
import { createMemoryHistory } from "history";
import { Router } from "react-router-dom";
import { Provider } from "react-redux";

jest.mock("mapbox-gl", () => ({
    Map: jest.fn(() => ({ remove: () => {} })),
  }));

describe("Map", () => {
    test("renders correctly", () => {
        
        const mockStore = {
            getState: () => {},
            subscribe: () => {},
            dispatch: () => {},
        };

        const history = createMemoryHistory();

        const { getByTestId } = render(
        <Router history={history}>
            <Provider store={mockStore}>
            <Map />
            </Provider>
        </Router>
        );
        expect(mapboxgl.Map).toHaveBeenCalledWith({
            center: [30.3056504, 59.9429126],
            container: getByTestId('map'),
            style: "mapbox://styles/mapbox/light-v10",
            zoom: 10,});
        })
});