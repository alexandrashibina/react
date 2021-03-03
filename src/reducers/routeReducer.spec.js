import routeReducer from './routeReducer';
import {saveRoute} from '../actions';

describe("routeReducer", () => {
  describe("SAVE_ROUTE", () => {
    it('should create an action with ROUTE', () => {
      const value = {
        addresses: "TestAddresses",
      };

      const expectation = {
        ...value,
      };

      expect(
        routeReducer({}, saveRoute(value))).toStrictEqual(expectation);
    });
  });
});