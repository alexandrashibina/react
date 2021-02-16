import addressListReducer from './addressListReducer';
import {getAddressList} from '../actions';

describe("addressListReducer", () => {
  describe("ADDRESS_LIST", () => {
    test('should create an action with ADDRESS_LIST', () => {
      const value = {};

      const expectation = {
        addressList: true,
        ...value,
      };

      expect(
        addressListReducer(
          {}, 
          getAddressList(
            value
          )
        )
      ).toStrictEqual(expectation);
    });
  });
});