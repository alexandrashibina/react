import addressListReducer from './addressListReducer';
import {saveAddressList} from '../actions';

describe("addressListReducer", () => {
  describe("SAVE_ADDRESS_LIST", () => {
    test('should create an action with SAVE_ADDRESS_LIST', () => {
      const value = {};

      const expectation = {
        ...value,
      };

      expect(
        addressListReducer(
          {}, 
          saveAddressList(
            value
          )
        )
      ).toStrictEqual(expectation);
    });
  });
});